import React, { Component } from 'react';

export class ChoosePlayers extends Component {

    static renderPlayerList(allPlayers) {
        return (
            <div>
                <button onClick={this.makeChoice}>Make Choice</button>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allPlayers.map(player => (
                            <tr key={player.name}>
                                <td>{player.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    constructor(props) {
        super(props);
        this.state = { allPlayers: [], loading: true, value: 'initial' };

        //this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.makeChoice - this.makeChoice.bind(this);
    }

    componentDidMount() {
        fetch('api/Choice/GetAllPlayers')
            .then(response => response.json())
            .then(data => {
                this.setState({ allPlayers: data, loading: false, value: 'colm' });                
            });
    }

    makeChoice() {
        console.log("sldfkjg");
        alert("hello");
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