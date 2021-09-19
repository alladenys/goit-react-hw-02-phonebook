import './App.css';
import React, { Component } from 'react';

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
      <div>
        <h1>Phonebook</h1>
        <ContactForm></ContactForm>
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.textChange}></Filter>
        <ContactsList contacts={renewList}></ContactsList>
      </div>
    );
  }
}

export default App;
