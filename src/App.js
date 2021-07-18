import React, { Component } from 'react'; 
import Container from './components/Container';
import Form from './components/Form';
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
  name: '',
  number: ''
}
  
  formSubmitHandler = data => {
    console.log(data);
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, number } = this.state;
    return (
      <Container>

        <h1>Phonebook</h1>

        <Form onSubmit={this.formSubmitHandler} />

        <Contacts
          contacts={contacts}
          number={number}
          onDeleteContact={this.deleteContact}
        />
        
      </Container>
    )
  }
}

export default App;
