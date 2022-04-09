const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async index(request, response) {
    const category = await CategoryRepository.findAll();

    response.json(category);
  }

  async show(request, response) {
    const { id } = request.params;

    const contact = await CategoryRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'Category not found' });
    }

    response.json(contact);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoryRepository.create({ name });

    response.status(201).json(category);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const contactExists = await CategoryRepository.findById(id);

    if (!contactExists) {
      return response.status(404).json({ error: 'Category not found' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const contact = await CategoryRepository.update(id, { name });

    response.json(contact);
  }

  async delete(request, response) {
    const { id } = request.params;

    await CategoryRepository.delete(id);
    // 204: No Content
    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
