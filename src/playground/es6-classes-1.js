class Person {
  constructor(name = 'Anonymouse', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGretting() {
    return `Hi. I am ${this.name} `;
  }

  getDescription() {
    return `${this.name}  is ${this.age} year(s) old`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += `Their Major is ${this.major}`;
    }
    return description;
  }
}

class Travaler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGretting() {
    let gretting = super.getGretting();
    if (this.homeLocation) {
      gretting += `I'm visiting from ${this.homeLocation}`;
    }
    return gretting;
  }
}

const me = new Travaler('Junior Tavarez', 32);
console.log(me.getGretting());

const wife = new Travaler('Rebeca Tavarez', 26, 'New York');
console.log(wife.getGretting());
