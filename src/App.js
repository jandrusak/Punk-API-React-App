import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import BeerComponent from './BeerComponent'


class App extends Component {
  constructor(props) {
    super(props)

    this.state={
      arrayOfBeer: []
    }
  }


componentDidMount() {
  axios.get('https://api.punkapi.com/v2/beers')
  .then( res => {
    const arrayOfBeer = res.data
    this.setState({ arrayOfBeer })
  })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <ol>{this.state.arrayOfBeer.map((beer, index) => {
         return (
          <BeerComponent key={index} name={beer.name} image_url={beer.image_url}/>
        )
        })}</ol>
        </header>
      </div> 
    );
  }
}

  
  export default App;