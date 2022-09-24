const express = require("express");
const User = require("../models/user");
const auth = require("../middleware/auth");

const router = new express.Router();

router.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();

    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

// Read EndPoint

router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send(e);
  }
});

// Read profile

router.get("/users/me", auth, async (req, res) => {
  res.send(req.user);
});

router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();

    res.send({ user, token });
  } catch (e) {
    res.status(400).send();
  }
});

// Logout
router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();

    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

// Goal: Create a way to logout of all sessions

// 1. Setup POST /users/logoutAll
// 2. Create the router handler to wipe the tokens array
// -Send 200 or 500
// 3. Test your work
// - Login a few times and logout of all. Check database

router.post("/users/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];

    await req.user.save();

    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

// Goal: Refactor the update profile route

// 1. Update the URL to /users/me
// 2. Add the authentication middlewa re into the mix
// 3. Use the existing user document instead of fetching via param id
// 4. Test your work in Postman!

router.patch("/users/me", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "age"];
  const isValidOperations = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperations) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));

    await req.user.save();

    res.send(req.user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/users/me", auth, async (req, res) => {
  try {
    await req.user.remove();
    res.send(req.user);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
