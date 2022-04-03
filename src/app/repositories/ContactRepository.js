const { v4: uuidv4 } = require('uuid');

// eslint-disable-next-line prefer-const
let contacts = [
  {
    id: uuidv4(),
    name: 'Érick Moraes',
    email: 'erick@mail.com',
    phone: '15999999999',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Gabriela Caroline',
    email: 'gabriela@mail.com',
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

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.email === email));
    });
  }

  create({
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const newContact = {
        id: uuidv4(),
        name,
        email,
        phone,
        category_id,
      };

      contacts.push(newContact);

      resolve(newContact);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactRepository();
