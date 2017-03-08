import React, { Component } from 'react';
import {getAnimals} from '../services/animalService.js'

import Animal from './Animal'

class Animals extends Component {
  constructor() {
    super();

    this.state = {
      animals: []
    }
  }

  render() {

    const animals = this.state.animals.map((animal, i) => {
      return (
        <Animal key={i} animal={animal}/>
      )
    })

    return (
      <div>
        {animals}
      </div>
    )
  }

  componentDidMount() {
    getAnimals().then(animals => {
      this.setState({
        animals: animals
      })
    })
  }


}

export default Animals
