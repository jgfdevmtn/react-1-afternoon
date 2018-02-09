import React, { Component } from 'react';

class FilterString extends Component {

    constructor() {
        super()
        this.state = {
            unfilteredArray: ['Shannon', 'Lauren', 'Claire', 'Olivia'],
            filteredArray: [],
            userInput: ''
        }
        this.solve = this.solve.bind(this);
    }

    updateUserInput(inputVal) {
        this.setState({
            userInput: inputVal
        });
    }

    solve() {
        const filteredArray = this.state.unfilteredArray.filter(name => name.toLowerCase().includes(this.state.userInput.toLowerCase())).map((name, idx, ary) => idx < ary.length - 1 ? name + ', ' : name);
        this.setState({
            filteredArray
        });
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>FilterString</h4>
                <span className="puzzleText">Names: {this.state.unfilteredArray.map((name, idx, ary) => idx < ary.length - 1 ? name + ', ' : name)}</span>
                <input
                    className="inputLine"
                    onChange={e => this.updateUserInput(e.target.value)}
                    value={this.state.userInput}
                    placeholder="filter by character"
                />
                <button
                    className="confirmationButton"
                    onClick={() => this.solve(this.state.userInput)}
                >Filter by Property</button>
                <span className="resultsBox filterStringRB">Filtered Objects: {this.state.filteredArray}</span>
            </div>
        )
    }
}

export default FilterString;