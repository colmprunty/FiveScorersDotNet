import React, { Component } from 'react';
import authService from './api-authorization/AuthorizeService'

export class ChoosePlayers extends Component {
    constructor(props){
        super(props);
        this.state = { players: [] };
    }

    componentDidMount() {
        this.listPlayers();
    }

    render(){
        let contents = this.state.players;

        return(
            <div>
                <h1>A list of all players</h1>
                <p>This is every player in the world</p>
                {contents}
            </div>
        )
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
          {players.map(player =>
            <tr key={player.name}>
              <td>{player.name}</td>
            </tr>
          )}
        </tbody>
      </table>
        )
    }

    async listPlayers(){
        const token = await authService.getAccessToken();
        const response = await fetch('players', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
          });
        const data = await response.json();
        this.setState({ players: data });
    }
}