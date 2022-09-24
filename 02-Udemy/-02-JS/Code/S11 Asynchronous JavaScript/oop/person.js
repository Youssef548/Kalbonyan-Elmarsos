class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}`;

    this.likes.forEach((like) => {
      bio += `${this.firstName} likes ${like}`;
    });

    return bio;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    const names = fullName.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
  }
}

class Employee extends Person {
  constructor(firstName, lastName, position, age, likes = []) {
    super(firstName, lastName, age, (likes = []));
    this.position = position;
  }
  getBio() {
    return `${this.fullName} ${this.lastName} is a ${this.position}`;
  }
  getYearsLeft() {
    return 65 - this.age;
  }
}

class Students extends Person {
  constructor(firstName, lastName, age, grade, likes = []) {
    super(firstName, lastName, age, (likes = []));
    this.grade = grade;
  }

  updateGrade(change) {
    this.grade += change;
  }
  getBio() {
    const status = this.grade >= 70 ? ` passing` : `failing`;
    return `${this.firstName} is ${status} the class.`;
  }
}
const me = new Employee('youssef', 'ahmed', 19, 'Software Engineer', [
  'football',
]);
me.fullName = 'Clancey Turner';
console.log(me.getBio());
