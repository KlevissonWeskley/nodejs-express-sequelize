const Services = require('./Services.js');

class PeopleServices extends Services {
  constructor () {
    super('People');
  }

  async getRegistrationsByStudent(id) {
    const student = await super.getRegisterById(id);
    const listRegistrations = await student.getEnrolledClasses();

    return listRegistrations;
  }
}

module.exports = PeopleServices;