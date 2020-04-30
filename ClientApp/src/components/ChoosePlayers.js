import React, { Component } from 'react';
import authService from './api-authorization/AuthorizeService'

export class ChoosePlayers extends Component {
  static displayName = ChoosePlayers.name;
    
  constructor(props){
      super(props);
      this.state = { players: [], filteredPlayers: []};
      this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
      this.listPlayers();
  }

  static renderPlayerList(players){
    return(
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
              </tr>
            )}
          </tbody>
        </table>
    )
  }

    render(){
        let contents = ChoosePlayers.renderPlayerList(this.state.filteredPlayers);

        return(
            <div>
                <h1>A list of all players</h1>
                <p>This is every player in the world</p>
                <input type='text' placeholder='search' onChange={this.handleChange}></input>
                {contents}
            </div>
        )
    }
    
    async listPlayers(){
      const token = await authService.getAccessToken();
      const response = await fetch('players', {
          headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
      const data = await response.json();
      this.setState({ players: data, filteredPlayers: data });    
    }

    handleChange(e){
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