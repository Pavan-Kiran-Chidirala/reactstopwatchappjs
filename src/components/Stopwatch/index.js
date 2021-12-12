// Write your code here
import {Component} from 'react'

import './index.css'

class StopWatch extends Component {
  state = {
    minutes: 0,
    seconds: 0,
    isOn: false,
  }

  startTimer = () => {
    const {isOn} = this.state
    if (!isOn) {
      this.setState({isOn: true})
      this.timerId = setInterval(this.statusChange, 1000)
    }
  }

  statusChange = () => {
    this.setState(prevState => ({
      minutes:
        prevState.seconds === 59 ? prevState.minutes + 1 : prevState.minutes,
      seconds: prevState.seconds !== 59 ? prevState.seconds + 1 : 0,
    }))
  }

  stopTimer = () => {
    this.setState({isOn: false})
    clearInterval(this.timerId)
  }

  resetTimer = () => {
    this.setState({minutes: 0, seconds: 0, isOn: false})
    clearInterval(this.timerId)
  }

  render() {
    const {minutes, seconds} = this.state
    const newSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
    const newMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    return (
      <div className="main-container">
        <h1 className="main-heading">Stopwatch</h1>
        <div className="watch-container">
          <div className="timer-heading">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              className="image"
              alt="stopwatch"
            />
            <p className="timer-name">Timer</p>
          </div>
          <h1 className="result-heading">{`${newMinutes}:${newSeconds}`}</h1>
          <div className="btn-container">
            <button
              type="button"
              className="btn green"
              onClick={this.startTimer}
            >
              Start
            </button>
            <button type="button" className="btn red" onClick={this.stopTimer}>
              Stop
            </button>
            <button
              type="button"
              className="btn yellow"
              onClick={this.resetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
