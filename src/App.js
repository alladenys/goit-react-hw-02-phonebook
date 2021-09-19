import './App.css';
import React, { Component } from 'react';
import Section from './components/Section/Section';
import Container from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';

import data from './data/contacts.json';
import ContactsList from './components/ContactsList/ContactsList';

class App extends Component {
  state = {
    contacts: data,
    filter: '',
  };

  textChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getReserchedContacts = () => {
    const { contacts, filter } = this.state;
    const normilizedText = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedText),
    );
  };

  render() {
    const renewList = this.getReserchedContacts();
    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm></ContactForm>
        </Section>

        <Section title="Contacts">
          <span>Find contact by name</span>
          <Filter value={this.state.filter} onChange={this.textChange}></Filter>
          <ContactsList contacts={renewList}></ContactsList>
        </Section>
      </Container>
    );
  }
}

export default App;
