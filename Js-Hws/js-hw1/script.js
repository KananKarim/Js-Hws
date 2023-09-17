class Employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getSalary() {
    return this.salary;
  }

  setName(newName) {
    this.name = newName;
  }

  setAge(newAge) {
    this.age = newAge;
  }

  setSalary(newSalary) {
    this.salary = newSalary;
  }
}

class Programmer extends Employee {
  constructor(name, age, salary, lang) {
    super(name, age, salary);
    this.lang = lang;
  }

  getSalary() {
    return this.salary * 3;
  }

  getLang(){
    return this.lang
  }
}

const firstProg = new Programmer("Kanan",20,1500,["Js","Ts"])
const secondProg = new Programmer("Zaur",27,2000,["Python","Ts"])

console.log(firstProg);
console.log(secondProg);
console.log(secondProg.getLang());
firstProg.setName("Miri");
console.log(firstProg);
