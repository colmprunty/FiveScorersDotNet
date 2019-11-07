import React, { Component } from 'react';
import authService from './api-authorization/AuthorizeService';

export class ChoosePlayers extends Component{

    constructor(props){
        super(props);
        this.state = { players: [], loading: true};
    }

    componentDidMount(){
        this.getPlayerData();
    }

    static renderPlayersTable(players){
        return (
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Team</th>
                </tr>
              </thead>
              <tbody>
                {players.map(player =>
                  <tr key={player.name}>
                    <td>{player.name}</td>``
                    <td>{player.team}</td>
                  </tr>
                )}
              </tbody>
            </table>
          );
    }
    render() {
        let contents = this.state.loading
          ? <p><em>Loading...</em></p>
          : ChoosePlayers.renderPlayersTable(this.state.players);
    
        return (
          <div>
            <h1>Choose players</h1>
            <p>Some of them might score or whatever</p>
            {contents}
          </div>
        );
      }

      async getPlayerData() {
        const token = await authService.getAccessToken();
        const response = await fetch('choice', {
          headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        this.setState({ players: data, loading: false });
      }
}