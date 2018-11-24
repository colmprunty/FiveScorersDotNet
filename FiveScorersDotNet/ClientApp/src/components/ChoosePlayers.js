import React, { Component } from 'react';

export class ChoosePlayers extends Component {


    constructor(props) {
        super(props);
        this.state = { allPlayers: [], loading: true, value: 'initial' };

        //this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.makeChoice = this.makeChoice.bind(this);
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    componentDidMount() {
        fetch('api/Choice/GetAllPlayers')
            .then(response => response.json())
            .then(data => {
                this.setState({ allPlayers: data, loading: false, value: 'colm' });                
            });
    }

    makeChoice() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
        console.log("increment");
    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
        console.log("increment");
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : <div>
                <button onClick={this.makeChoice}>Make Choice</button>
                <button onClick={this.incrementCounter}>Increment</button>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.allPlayers.map(player => (
                            <tr key={player.name}>
                                <td>{player.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        return (
            <div>
                <h1>Choose Players</h1>
                <p>This should just be a list of players at the moment</p>
                {contents}
                
            </div>
        );
    }
}