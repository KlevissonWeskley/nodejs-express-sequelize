const Controller = require('./Controller.js');
const PeopleServices = require('../services/PeopleServices.js');

const peopleServices = new PeopleServices();

class PeopleController extends Controller {
  constructor () {
    super(peopleServices);
  }

  async getRegistrations(req, res) {
    const { studentId } = req.params;

    try {
      const listRegistrations = await peopleServices.getRegistrationsByStudent(Number(studentId));

      return res.status(200).json(listRegistrations);
    } catch (error) {
      // erro
    }
  }
}

module.exports = PeopleController;