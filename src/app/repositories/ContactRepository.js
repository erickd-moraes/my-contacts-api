const { v4: uuidv4 } = require('uuid');

const contacts = [
  {
    id: uuidv4(),
    name: 'Érick Moraes',
    email: 'erick@mail.com',
    phone: '15999999999',
    category_id: uuidv4(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactRepository();
