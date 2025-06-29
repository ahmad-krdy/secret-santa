class Assignment {
  constructor(giver, receiver) {
    this.giver = giver;
    this.receiver = receiver;
  }

  toJSON() {
    return {
      Employee_Name: this.giver.name,
      Employee_EmailID: this.giver.email,
      Secret_Child_Name: this.receiver.name,
      Secret_Child_EmailID: this.receiver.email
    };
  }
}

module.exports = Assignment;
