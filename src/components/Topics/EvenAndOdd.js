import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
        this.solve = this.solve.bind(this);
    }

    updateUserInput(inputVal) {
        this.setState({ userInput: inputVal })
    }

    solve() {
        const numsArray = this.state.userInput.split(',').map(val => +val);
        const odds = numsArray.filter(val => val && val % 2 !== 0);
        const evens = numsArray.filter(val => val && val % 2 === 0);
        this.setState({
            oddArray: JSON.stringify(odds, null, 5),
            evenArray: JSON.stringify(evens, null, 5)
        });
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>EvenAndOdd</h4>
                <input
                    className="inputLine"
                    onChange={e => this.updateUserInput(e.target.value)}
                    value={this.state.userInput}
                    placeholder="numbers separated by commas"
                />
                <button
                    className="confirmationButton"
                    onClick={this.solve}
                >Split into Odds and Evens</button>
                <span className="resultsBox">Odds: {this.state.oddArray}</span>
                <span className="resultsBox">Evens: {this.state.evenArray}</span>
            </div>
        )
    }
}

export default EvenAndOdd;