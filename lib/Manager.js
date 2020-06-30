// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("Employee")

class Manager {
    constructor(name,id,email,phone){
    super(name,id,email);

    this.phoneNumber = phone;
    this.unique = `Phone: ${this.phoneNumber}`;
    }
    getPhoneNumber() {return this.phoneNumber}
    getRole() {return "Manager"}  
}

module.exports = Manager;