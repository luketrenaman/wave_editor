import React from 'react';
class Condition extends React.Component{
  constructor(props) {
    super(props);
  }
  changeCondition = (e) => {
    if(e.target.value === "wait_seconds"){
        this.props.editProperty("seconds",5);
    } else{
        this.props.editProperty("seconds",null);
    }
    this.props.editProperty("condition",e.target.value);
  }
  changeText = (e) => {
    this.props.editProperty("text",e.target.value);
  }
  changeSeconds = (e) => {
    this.props.editProperty("seconds",e.target.value);
  }
  render() {
    // const waveList = props.data.map(wave => (
    //   <Wave id={wave.id} delay={wave.delay} wave={wave.wave}>
    // ))
    let secondsDisplay;
    if(this.props.condition === "wait_seconds"){
        secondsDisplay = <div>
            <label> Seconds: </label>
            <input onChange={this.changeSeconds} value = {this.props.seconds} type="number"></input>
        </div>
    }
    return (
        <span>
            <label> Condition: </label>
            <select value={this.props.condition} onChange={this.changeCondition}>
                <option value = "wait_until_empty">No zombies on screen</option>
                <option value = "have_robot">Have robot</option>
                <option value = "retrieve_robot">Chance of retrieve robot</option>
                <option value = "wait_seconds">Wait x seconds</option>
                <option value = "end_condition">End condition</option>
            </select>
            {secondsDisplay}
        </span>
    )
  };
}

export default Condition;
