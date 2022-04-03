const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  // listar todos os registros
  async index(request, response) {
    const contacts = await ContactRepository.findAll();

    response.json(contacts);
  }

  // obter UM registro
  async show(request, response) {
    const { id } = request.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    response.json(contact);
  }

  // criar novo registro
  async store(request, response) {
    const {
      name, email, phone, category_id,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const contactExists = await ContactRepository.findByEmail(email);

    if (contactExists) {
      return response.status(400).json({ error: 'This e-mail already been taken!' });
    }

    const contact = await ContactRepository.create({
      name, email, phone, category_id,
    });

    response.json(contact);
  }

  update() {
    // editar um registro
  }

  // deletar um registro
  async delete(request, response) {
    const { id } = request.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    await ContactRepository.delete(id);
    // 204: No Content
    response.sendStatus(204);
  }
}

// design pattern: singleton
module.exports = new ContactController();
