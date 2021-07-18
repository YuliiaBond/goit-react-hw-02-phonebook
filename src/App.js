import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from './components/Container';
import Form from './components/Form';
import Filter from './components/Filter';
import Contacts from './components/Contacts';

class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  }
  
  addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>

        <h1>Phonebook</h1>

        <Form onSubmit={this.addContact} />

        <h2>Contacts</h2>

        <Filter
          value={filter}
          onChange={this.changeFilter}
          />

        <Contacts
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
        
      </Container>
    )
  }
}

export default App;
