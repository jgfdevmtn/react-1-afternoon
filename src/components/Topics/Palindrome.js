import React, { Component } from 'react';

class Palindrome extends Component {

    constructor() {
        super()
        this.state = {
            userInput: '',
            palindrome: ''
        }
        this.solve = this.solve.bind(this);
    }

    updateUserInput(inputVal) {
        this.setState({ userInput: inputVal });
    }

    solve() {
        const { userInput } = this.state;
        const palindrome =
            userInput ? 
            userInput.toLowerCase() === userInput.split('').reverse().join('').toLowerCase() 
            : false;
        this.setState({ palindrome: JSON.stringify(palindrome, null, 5) })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input
                    className="inputLine"
                    onChange={e => this.updateUserInput(e.target.value)}
                    value={this.state.userInput}
                    placeholder="potential palindrome"
                />
                <button className="confirmationButton" onClick={this.solve}>Is it a Palindrome?</button>
                <span className="resultsBox">Palindrome?: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome;