import './App.css';
import React, { Component } from 'react';
import Section from './components/Section/Section';
import Container from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';

import data from './data/contacts.json';
import ContactsList from './components/ContactsList/ContactsList';

class App extends Component {
  state = {
    contacts: data,
    filter: '',
  };
  render() {
    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm></ContactForm>
        </Section>

        <Section title="Contacts">
          <ContactsList contacts={this.state.contacts}></ContactsList>
        </Section>
      </Container>
    );
  }
}

export default App;
