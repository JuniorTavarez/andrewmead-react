class Person {
  constructor(name = 'Anonymouse', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGretting() {
    return `Hi! ${this.name} `;
  }

  getDescription() {
    return `${this.name}  is ${this.age} year(s) old`;
  }
}

const me = new Person('Junior Tavarez', 32);

console.log(me.getGretting());
console.log(me.getDescription());

const wife = new Person('Rebeca Tavarez');
console.log(wife);
console.log(wife.getDescription());
