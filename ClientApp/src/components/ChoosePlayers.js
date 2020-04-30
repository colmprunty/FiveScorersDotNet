import React, { Component } from 'react';
import authService from './api-authorization/AuthorizeService'

export class ChoosePlayers extends Component {
  static displayName = ChoosePlayers.name;
    
  constructor(props){
      super(props);
      this.state = { players: [] };
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
        let contents = ChoosePlayers.renderPlayerList(this.state.players);

        return(
            <div>
                <h1>A list of all players</h1>
                <p>This is every player in the world</p>
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
        this.setState({ players: data });    }
}