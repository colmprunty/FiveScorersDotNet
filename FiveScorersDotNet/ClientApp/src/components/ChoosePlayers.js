import React, { Component } from 'react';

export class ChoosePlayers extends Component {

    static renderPlayerList(allPlayers) {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {allPlayers.map(player =>
                        <tr key={player.name}>
                            <td>{player.name}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    constructor(props) {
        super(props);
        this.state = { allPlayers: [], loading: true };

        fetch('api/Choice/GetAllPlayers')            
            .then(response => response.json())
            .then(data => {
                this.setState({ allPlayers: data, loading: false });
            });
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : ChoosePlayers.renderPlayerList(this.state.allPlayers);

        return (
            <div>
                <h1>Choose Players</h1>
                <p>This should just be a list of players at the moment</p>
                {contents}
            </div>
        );
    }
}