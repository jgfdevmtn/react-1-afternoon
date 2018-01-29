import React, { Component } from 'react'
import './index.css'
import EvenAndOdd from './components/EvenAndOdd/EvenAndOdd'
import FilterObject from './components/FilterObject/FilterObject'
import FilterString from './components/FilterString/FilterString'
import Palindrome from './components/Palindrome/Palindrome'
import Sum from './components/Sum/Sum'

class App extends Component {
  render() {
	  return (
		  <div>
		  	<EvenAndOdd />
		  	<FilterObject />
		  	<FilterString />
		  	<Palindrome />
		  	<Sum />
		  </div>
	  )
  }

}

export default App;
