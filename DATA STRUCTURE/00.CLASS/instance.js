class Student {
  constructor(firstName, lastName, grade) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.grade = grade);
    this.lateness = 0;
    this.score = [];
  }

  fullname() {
    return `My name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.lateness += 1;
    if (this.lateness >= 3) {
      return "YOU HAVE BEEN EXPELLED!!!";
    }
    return `${this.firstName} ${this.lastName} has been late ${this.lateness} times`;
  }

  addscore(result) {
    this.score.push(result);
    return this.score;
  }

  calculateAverage() {
    let sum = this.score.reduce((a, b) => a + b, 0);
    return sum / this.score.length;
  }
}

const firstStudent = new Student("Adu", "Sarah");

firstStudent.markLate();
firstStudent.markLate();
firstStudent.markLate();
firstStudent.markLate();
firstStudent.addscore(10);
firstStudent.addscore(50);
firstStudent.calculateAverage();
console.log(firstStudent.markLate());
console.log(firstStudent);
console.log(firstStudent.calculateAverage());
