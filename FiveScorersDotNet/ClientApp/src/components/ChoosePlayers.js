import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';

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
                this.setState({ allPlayers: data, loading: false, selectedPlayer: '' });                
            });
    }

    makeChoice() {
        fetch('/api/Choice/AddChoice', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                allPlayers: this.state.allPlayers
            })
        });
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
            : (<div>
                <Autocomplete
                    getItemValue={(item) => item.label}
                    items={[
                        { label: 'apple' },
                        { label: 'banana' },
                        { label: 'pear' }
                    ]}
                    renderItem={(item, isHighlighted) =>
                        (<div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                            {item.label}
                        </div>)
                    }
                    value={this.state.selectedPlayer}
                    onChange={(e) => this.state.selectedPlayer = e.target.value}
                    onSelect={(val) => this.state.selectedPlayer = val}
                />
            </div>)

        return (
            <div>
                <h1>Choose Players</h1>
                <p>This should just be a list of players at the moment</p>
                {contents}
                
            </div>
        );
    }
}