const request = require("supertest");
const app = require("../src/app");
const User = require("../src/models/user");
const { userOne, userOneId, setupDatabase } = require("./fixtures/db");

require("dotenv").config();

beforeEach(setupDatabase);

test("Should signup a new User", async () => {
  const response = await request(app)
    .post("/users")
    .send({
      name: "Andrew",
      email: "youssefahmedpvp@gmail.com",
      password: "54871900aA",
    })
    .expect(201);

  // Assert that the database was change correctly
  const user = await User.findById(response.body.user._id);
  expect(user).not.toBeNull();

  // Assertion about response
  expect(response.body).toMatchObject({
    user: {
      name: "Andrew",
      email: "youssefahmedpvp@gmail.com",
    },
    token: user.tokens[0].token,
  });
  expect(user.password).not.toBe("MyPass777!");
});

test("Should login existing user", async () => {
  const response = await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: userOne.password,
    })
    .expect(200);
  // assert to database
  const user = await User.findById(userOneId);
  expect(response.body.token).toBe(user.tokens[1].token);
});

// Goal: Test login fai ure

// 1. Create "Should not login nonexistent user"
// 2. Send off the request with bad credentials
// 3. Expect the correct status reponse
// 4. Test your work

test("Should not login nonexistent user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: "54871900aA",
    })
    .expect(400);
});

test("should get profile for user", async () => {
  await request(app)
    .get("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({})
    .expect(200);
});

test("should not get profile", async () => {
  await request(app).get("/users/me").send({}).expect(401);
});

test("should delte account for user", async () => {
  await request(app)
    .delete("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({})
    .expect(200);

  const user = await User.findById(userOneId);
  expect(user).toBeNull();
});

test("should not delete user account", async () => {
  await request(app).delete("/users/me").send({}).expect(401);
});

test("should upload avatar image", async () => {
  await request(app)
    .post("/users/me/avatar")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .attach("avatar", "tests/fixtures/istockphoto-1296601764-170667a.jpg")
    .expect(200);
  const user = await User.findById(userOneId);
  expect(user.avatar).toEqual(expect.any(Buffer));
});

test("should update valid user fields", async () => {
  await request(app)
    .patch("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      name: "jess",
    })
    .expect(200);
  const user = await User.findById(userOneId);
  expect(user.name).toEqual("jess");
});

test("should not update valid user fields", async () => {
  request(app)
    .patch("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      location: "Egypt",
    })
    .expect(400);
});
