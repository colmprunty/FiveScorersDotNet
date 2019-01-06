﻿import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';

export class ChoosePlayers extends Component {  

    constructor(props) {
        super(props);
        this.state = { allPlayers: [], selectedPlayers: [], loading: true, value: 'initial', choices: [] };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.makeChoice = this.makeChoice.bind(this);
        this.getSelectedPlayers = this.getSelectedPlayers.bind(this);
    }

    componentDidMount() {
        fetch('api/Choice/GetAllPlayers')
            .then(response => response.json())
            .then(data => {
                this.setState({ allPlayers: data, loading: false, selectedPlayer: '' });                
            });
    }

    getSelectedPlayers() {
        console.log("fetching selected players");
        fetch('api/Choice/GetSelectedPlayers')
            .then(response => response.json())
            .then(data => {
                this.setState({ choices: data });
            });
        console.log(this.state.choices);
    }

    makeChoice(selectedPlayer) {

        fetch('/api/Choice/AddChoice', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: selectedPlayer
            })  
        }).then(() => {
            var currentChoices = this.state.choices;
            currentChoices.push({ "name": selectedPlayer });
            this.setState({ choices: currentChoices });
        });
        
        console.log(this.state.choices);
        console.log(this.state.allPlayers);        
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : (<div>
                <Autocomplete
                    getItemValue={(player) => player.name}
                    items={this.state.allPlayers}
                    renderItem={(player, isHighlighted) =>
                        (<div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                            {player.name}
                        </div>)
                    }
                    value={this.state.selectedPlayer}
                    onChange={(e) => this.setState({
                        selectedPlayer: e.target.value
                    })}
                    onSelect={(val) => this.makeChoice(val)}
                />
                <div>
                    <h2>Your choices</h2>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.choices.map(player => (
                                <tr key={player.name}>
                                    <td>{player.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>);

        return (
            <div>
                <h1>Choose Players</h1>
                <p>Make a selection</p>
                {contents}
            </div>
        );
    }
}