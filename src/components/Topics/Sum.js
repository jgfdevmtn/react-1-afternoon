import React, { Component } from 'react';

class Sum extends Component {

    constructor() {
        super()
        this.state = {
            number1: '',
            number2: '',
            sum: ''
        }
        this.solve = this.solve.bind(this);
    }

    updateNumber(n, inputVal) {
        this.setState({
            [`number${n}`]: Number.isNaN(+inputVal) ? this.state[`number${n}`] : inputVal
        });
    }

    solve() {
        this.setState({
            sum: +this.state.number1 + +this.state.number2
        });
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input
                    className="inputLine"
                    placeholder="number to add"
                    onChange={e => this.updateNumber(1, e.target.value)}
                    value={this.state.number1}
                />
                <input
                    className="inputLine"
                    placeholder="number to add"
                    onChange={e => this.updateNumber(2, e.target.value)}
                    value={this.state.number2}
                />
                <button className="confirmationButton" onClick={this.solve}>Add</button>
                <span className="resultsBox">Total: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum;