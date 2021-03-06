import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import authService from './api-authorization/AuthorizeService'

export class ChoosePlayers extends Component {
  static displayName = ChoosePlayers.name;

  constructor(props) {
    super(props);
    this.state = { players: [], selectedPlayers: [], filteredPlayers: [] };
    this.handleChange = this.handleChange.bind(this);
    this.choose = this.choose.bind(this);
    this.remove = this.remove.bind(this);
    this.submitChoice = this.submitChoice.bind(this);
  }

  componentDidMount() {
    this.listPlayers();
  }

  renderPlayerList(players, selectedPlayers) {
    return (
      <div className="row mb-3">
        <div className="col-md-6">
          <table className='table table-striped' aria-labelledby="tabelLabel">
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {players.map(p =>
                <tr key={p.name}>
                  <td>{p.name}</td>
                  <td><button id={p.name} onClick={() => { this.choose(p) }}>Select</button></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <table className='table table-striped' aria-labelledby="tabelLabel">
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {selectedPlayers.map(p =>
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td><button id={p.name} onClick={() => { this.remove(p) }}>Remove</button></td>
                </tr>
              )}
            </tbody>
          </table>
          <button onClick={() => { this.submitChoice(selectedPlayers) }}>Submit</button>
        </div>
      </div>
    )
  }

  render() {
    let contents = this.renderPlayerList(this.state.filteredPlayers, this.state.selectedPlayers);

    return (
      <div>
        <h1>A list of all players</h1>
        <p>This is every player in the world</p>
        <input type='text' placeholder='search' onChange={this.handleChange}></input>
        {contents}
      </div>
    )
  }

  async listPlayers() {
    const token = await authService.getAccessToken();
    const response = await fetch('players', {
      headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
    });
    const data = await response.json();
    this.setState({ players: data, filteredPlayers: data });
  }

  async submitChoice(choices) {
    const response = await fetch('/players/makechoice', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        choices
      )
    });
  }

  choose(player) {
    var selectedList = this.state.selectedPlayers;

    var newPlayer = { id: uuidv4(), name: player.name };
    selectedList.push(newPlayer);

    this.setState({ selectedPlayers: selectedList });
  }

  remove(player) {
    let selectedList = this.state.selectedPlayers;
    selectedList = selectedList.filter(p => p.id !== player.id);
    this.setState({ selectedPlayers: selectedList });
  }

  handleChange(e) {
    let fullList = [];
    let filteredList = [];

    if (e.target.value !== "") {
      fullList = this.state.players;
      filteredList = fullList.filter(item => {
        const playerName = item.name.toLowerCase();
        const searchTerm = e.target.value.toLowerCase();
        return playerName.includes(searchTerm);
      });
    }
    else {
      filteredList = this.state.players;
    }

    this.setState({
      filteredPlayers: filteredList
    });
  }
}