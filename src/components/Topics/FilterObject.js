import React, { Component } from 'react';

class FilterObject extends Component {
    constructor() {
        super()
        this.state = {
            unfilteredArray: [{ name: 'Lauren', animal: 'turtle', color: 'purple' }, { name: 'Claire', animal: 'manatee' }, { name: 'Olivia', color: 'coral' }],
            filteredArray: [],
            userInput: ''
        }
        this.solve = this.solve.bind(this);
    }

    updateUserInput(inputVal) {
        this.setState({ userInput: inputVal });
    }

    solve(prop) {
        const filteredArray = this.state.unfilteredArray
            .filter(obj => obj.hasOwnProperty(prop)) // only objects with that prop are allowed
            .map(obj => ({ [obj.name]: obj[prop] })); // return simplified obj w/ relevant data
        this.setState({
            filteredArray: JSON.stringify(filteredArray, null, 5)
        });
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>FilterObject</h4>
                <span className="puzzleText">Objects: {this.state.unfilteredArray.map(obj => JSON.stringify(obj, undefined, 10))}</span>
                <input
                    className="inputLine"
                    onChange={e => this.updateUserInput(e.target.value)}
                    value={this.state.userInput}
                    placeholder="filter by property"
                />
                <button
                    className="confirmationButton"
                    onClick={() => this.solve(this.state.userInput)}
                >Filter by Property</button>
                <span className="resultsBox filterObjectRB">Filtered Objects: {this.state.filteredArray}</span>
            </div>
        )
    }
}

export default FilterObject;