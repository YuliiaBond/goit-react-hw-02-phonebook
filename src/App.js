import React, { Component } from 'react'; 
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
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
      </>
    )
  }
}

export default App;
