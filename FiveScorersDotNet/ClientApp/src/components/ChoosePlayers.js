import React, { Component } from 'react';

export class ChoosePlayers extends Component {

    static renderPlayerList(allPlayers) {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" name="playerName" onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type="submit" value={this.state.value}/>
                    </div>
                </form>
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

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        fetch('api/Choice/GetAllPlayers')
            .then(response => response.json())
            .then(data => {
                this.setState({ allPlayers: data, loading: false, value: 'colm' });
                alert("this state");
            });

        alert(this.state.allPlayers);
    }

    handleChange(event) {
        this.setState({ selectedPlayer: event.target.value });
    }

    handleSubmit(event) {
        alert('balls');
        event.preventDefault();
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