const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    // listar todos os registros

    const contacts = await ContactRepository.findAll();

    response.json(contacts);
  }

  show() {
    // obter UM registro
  }

  store() {
    // criar novo registro
  }

  update() {
    // editar um registro
  }

  delete() {
    // deletar um registro
  }
}

// design pattern: singleton
module.exports = new ContactController();
