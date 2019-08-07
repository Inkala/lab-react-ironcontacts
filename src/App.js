import React, { Component } from 'react';

import contacts from './data/contacts.json';
import './App.css';

class App extends Component {
  state = {
    myContacts: contacts.splice(0, 5),
    contacts
  };

  handleNewRandomContact = () => {
    const { contacts, myContacts } = this.state;
    const randomInd = Math.floor(Math.random() * contacts.length);
    const newContacts = [...myContacts, contacts[randomInd]];
    this.setState({ myContacts: newContacts });
  };

  handleSortByPopularity = () => {
    const { myContacts } = this.state;
    const newMyContacts = [...myContacts];
    newMyContacts.sort((a, b) => b.popularity - a.popularity);
    this.setState({ myContacts: newMyContacts });
  };

  handleSortByName = () => {
    const { myContacts } = this.state;
    const newMyContacts = [...myContacts];
    newMyContacts.sort((a, b) => (a.name).localeCompare(b.name));
    this.setState({ myContacts: newMyContacts });
  };

  handleDelete = (ind) => {
    const { myContacts } = this.state;
    const newMyContacts = [...myContacts];
    console.log(ind)
    newMyContacts.splice(ind, 1);
    this.setState({ myContacts: newMyContacts });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div className="buttons">
          <button onClick={this.handleNewRandomContact}>
            Add Random Contact
          </button>
          <button onClick={this.handleSortByName}>
            Sort by Name
          </button>
          <button onClick={this.handleSortByPopularity}>
            Sort by Popularity
          </button>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
              {this.state.myContacts.map((contact, ind) => {
                return (
                  <tr key={ind}>
                    <th>
                      <img src={contact.pictureUrl} alt="" />
                    </th>
                    <th>{contact.name}</th>
                    <th>{contact.popularity}</th>
                    <th><button onClick={() => {this.handleDelete(ind)}}>Delete</button></th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
