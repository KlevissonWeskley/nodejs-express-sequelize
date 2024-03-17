class Controller {
  constructor (entityService) {
    this.entityService = entityService;
  }

  async getAll(req, res) {
    try {
      const listRegisters = await this.entityService.getAllRegisters();

      return res.status(200).json(listRegisters);
    } catch (err) {
      // err
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    try {
      const register = await this.entityService.getRegisterById(Number(id));
      return res.status(200).json(register);
    } catch (erro) {
      // erro
    }
  }

  async create(req, res) {
    const data = req.body;
    try {
      const newRegister = await this.entityService.createRegister(data);
      return res.status(200).json(newRegister);
    } catch (erro) {
      // erro
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const data = req.body;

    try {
      const isUpdated = await this.entityService.updateRegister(data, Number(id));
      if (!isUpdated) {
        return res.status(400).json({ mensagem: 'Registro não foi atualizado' });
      }
      return res.status(200).json({ mensagem: 'Atualizado com sucesso' });
    } catch (error) {
      // erro
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      await this.entityService.deleteRegister(Number(id));
      return res.status(200).json({ mensagem: `id ${id} deletado` });


    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = Controller;