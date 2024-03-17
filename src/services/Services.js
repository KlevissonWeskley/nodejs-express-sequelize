const dataSource = require('../models');

class Services {
  constructor (nameModel) {
    this.model = nameModel;
  }

  async getAllRegisters() {
    return dataSource[this.model].findAll();
  }

  async getRegisterById(id) {
    return dataSource[this.model].findByPk(id);
  }

  async createRegister(dadosDoRegistro) {
    return dataSource[this.model].create(dadosDoRegistro);
  }

  async updateRegister(data, id) {
    const listRegistersUpdateds = dataSource[this.model].update(data, {
      where: {
        id,
      }
    });

    if (listRegistersUpdateds[0] === 0) {
      return false;
    }
    return true;
  }

  async deleteRegister(id) {
    return dataSource[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Services;