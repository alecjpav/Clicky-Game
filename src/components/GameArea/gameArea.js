import React, { Component } from 'react'
import './gameArea.css'
import dogs from "../.././dogs.json"

class GameArea extends Component {
	state = {
		score: 0,
		guessed: [],
    message: ""
	}

	handleClick(e) {
		const clicked = e.target.dataset.id
    if (this.state.guessed.indexOf(clicked) > -1) {
      this.setState({
        score: 0,
        guessed: [],
        message: "You lose!"
      })
    } else {
      this.setState({
        score: this.state.score + 1,
        guessed: this.state.guessed.concat(clicked),
        message: ""
      })
    }
	}

	render() {
    let dogsArray = [].concat(dogs)
    dogsArray = shuffle(dogsArray, [])
		return (
			<div className="game">
        <h2>Score: {this.state.score} <span className="message">{this.state.message}</span></h2>
				<div className="pics">
          { dogsArray.map(dog => (
              <Pic 
                handleClick={this.handleClick.bind(this)}
                key={dog.id}
                link={dog.link}
                id={dog.id} />
            )
          )}
        </div>
			</div>
		)
	}

}

const Pic = props => {
	return (
		<div className="pic">
			<img 
				src={props.link || "http://atlantahumane.org/wp-content/uploads/2013/06/golden-retriever.jpg"}
				onClick={props.handleClick}
				alt="game image"
				data-id={props.id}
				/>
		</div>
	);
}

function shuffle(arr1, arr2) {
  if (arr1.length < 1) {
    return arr2
  } else {
    let randomIndex = Math.floor(Math.random() * arr1.length)
    let arr = arr1
    console.log(randomIndex)
    arr2.push(arr1[randomIndex])
    arr.splice(randomIndex, 1)
    return shuffle(arr, arr2)
  }
}

export default GameArea