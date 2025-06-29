const Assignment = require('../models/Assignment');

class SantaService {
  constructor(employees, previousMap) {
    this.employees = employees;
    this.previousMap = previousMap;
  }

  shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  generate() {
    for (let attempt = 0; attempt < 1000; attempt++) {
      const receivers = this.shuffle([...this.employees]);

      const valid = this.employees.every((giver, i) => {
        const receiver = receivers[i];
        const isValid = !giver.equals(receiver) &&
          this.previousMap.get(giver.email) !== receiver.email;

        if (!isValid) {
        //   console.log(`Invalid: ${giver.email} → ${receiver.email}`);
        }

        return isValid;
      });

      if (valid) {
        // console.log("Valid assignment found on attempt", attempt + 1);
        return this.employees.map((giver, i) =>
          new Assignment(giver, receivers[i])
        );
      }
    }

    throw new Error("Failed to generate valid Secret Santa assignments..");
  }
}

module.exports = SantaService;
