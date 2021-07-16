import React, { Component } from 'react'; 
import Container from './components/Container';
import Form from './components/Form'
class App extends Component {
  state = {
  contacts: [],
    name: '',
    number: ''
  }
  
  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <Container>

        <h1>Phonebook</h1>

        <Form onSubmit={this.formSubmitHandler} />
        
      </Container>
    )
  }
}

export default App;
