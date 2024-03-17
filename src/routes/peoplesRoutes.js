const { Router } = require('express');
const PeopleController = require('../controllers/PeopleController.js');
const RegistrationController = require('../controllers/RegistrationController.js');

const peopleController = new PeopleController();
const registrationController = new RegistrationController();

const router = Router();

router.get('/peoples', (req, res) => peopleController.getAll(req, res));
router.get('/peoples/:id', (req, res) => peopleController.getById(req, res));
router.post('/peoples', (req, res) => peopleController.create(req, res));
router.put('/peoples/:id', (req, res) => peopleController.atualiza(req, res));
router.delete('/peoples/:id', (req, res) => peopleController.delete(req, res));

router.get('/peoples/:studentId/registrations', (req, res) => peopleController.getRegistrations(req, res));
router.post('/peoples/:studentId/registrations', (req, res) => registrationController.create(req, res));

module.exports = router;