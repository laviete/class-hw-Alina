"use strict";
//Створити новий клас RangeValidator, з полями from і to (from повинен бути менше за to)
//Тип данних для кожного поля - number
//Значення за замовчуванням - from=0 і to=10
class RangeValidator {
  /**
   *
   * @param {number} from
   * @param {number} to
   */
  constructor(from = 0, to = 10) {
    this.from = from;
    this.to = to;
  }
  //Реалізувати методи: setter & getter для кожного поля
  get from() {
    return this._from;
  }
  set from(from) {
    if (typeof from !== "number") {
      throw new TypeError("from must be a number");
    }
    if (from >= this.to) {
      throw new RangeError("FROM must be less than to");
    }
    this._from = from;
  }
  
  get to() {
    return this._to;
  }
  set to(to) {
    if (typeof to !== "number") {
      throw new TypeError("to must be number");
    }
    if (to <= this.from) {
      throw new RangeError("TO must be greater than from");
    }
    this._to = to;
  }
  //Реалізувати метод get range, який буде повертати масив з двома полями одразу [from, to]
  get range() {
    return [this.from, this.to];
  }
  //Реалізувати метод validate, який приймає значення(number) і повертає true, якщо значення входить в діапазон (фкий створюють from і to), якщо не входить - повертає false
  /**
   *
   * @param {number} number
   * @returns {boolean}
   */
  validate(number) {
    if (typeof number !== "number") {
      throw new TypeError("number must be a number");
    }
    return number >= this.from && number <= this.to;
  }
}
const validator = new RangeValidator();
console.log(validator.range); // [0, 10]
console.log(validator.validate(4)); // true
console.log(validator.validate(12)); // false
validator.to = 50;
validator.from = 30;
console.log(validator.range); // [30, 50]
console.log(validator.validate(41)); // true
console.log(validator.validate(17)); // false


//Дописати у класі Worker setter & getter для кожного поля(властивості)
class WorkerClass {
  /**
   *
   * @param {string} firstName
   * @param {string} lastName
   * @param {number} money
   * @param {number} days
   */
  constructor(firstName, lastName, ratePerHour, amountDays = 0) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.ratePerHour = ratePerHour;
    this.amountDays = amountDays;
    WorkerClass.amount++;
  }
  getSalary() {
    return this.ratePerHour * this.amountDays;
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(firstName) {
    if (typeof firstName !== "string") {
      throw new TypeError("firstname must be a string");
    }
    if (firstName === "") {
      throw new RangeError("firstname not empty");
    }
    this._firstName = firstName;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(lastName) {
    if (typeof lastName !== "string") {
      throw new TypeError("lastname must be a string");
    }
    if (lastName === "") {
      throw new RangeError("lastname not empty");
    }
    this._lastName = lastName;
  }

  get ratePerHour() {
    return this._ratePerHour;
  }
  set ratePerHour(ratePerHour) {
    if (typeof ratePerHour !== "number") {
      throw new TypeError("rate per hour must be a number");
    }
    if (ratePerHour < 0) {
      throw new RangeError("rate per hour must be greater than zero");
    }
    this._ratePerHour = ratePerHour;
  }

  get amountDays() {
    return this._amountDays;
  }
  set amountDays(amountDays) {
    if (typeof amountDays !== "number") {
      throw new TypeError("amount of days must be a number");
    }
    if (amountDays < 0) {
      throw new RangeError("amount of days must be greater than zero");
    }
    this._amountDays = amountDays;
  }
  static amount = 0;
  static createWorkerTest() {
    return new WorkerClass("noname", "noname", 0, 0);
  }
}
const worker1 = new WorkerClass("John", "Lewis", 10, 10);
console.log(worker1.getSalary());
console.log(WorkerClass.amount);



