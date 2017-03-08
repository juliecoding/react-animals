import React from 'react'; //This is a dummy component, so it doesn't need {Component}

export default function Animal(props) {
  return (
    <div>
      <h1>{props.animal.name}</h1>
    </div>
  )
}
