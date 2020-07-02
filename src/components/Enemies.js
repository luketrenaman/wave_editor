import React from 'react';
class Enemy extends React.Component{
  constructor(props) {
    super(props);
  }
  changeZombie = (e) => {
    this.props.editProperty("enemy",e.target.value);
  }
  changeIntensity = (e) => {
    this.props.editProperty("intensity",e.target.value);
  }
  changeAmount = (e) => {
    this.props.editProperty("amount",e.target.value);
  }
  changeDelay = (e) => {
    this.props.editProperty("delay",e.target.value);
  }
  render() {
    // const waveList = props.data.map(wave => (
    //   <Wave id={wave.id} delay={wave.delay} wave={wave.wave}>
    // ))
    let ingredients = <span></span>
    return (
        <span>
            <label> Enemy type: </label>
            <select onChange={this.changeZombie}>
                <option value="normal">Normal</option>
                <option value="carb loader">Carb loader</option>
                <option value="behemoth">Behemoth</option>
                <option value="mouse">Mouse</option>
                <option value="torso">Torso</option>
                <option value="dog">Dog</option>
            </select>
            <label> Zombie intensity: </label>
            <input onChange={this.changeIntensity} value = {this.props.intensity} type="number"></input>
            <label> Amount: </label>
            <input onChange={this.changeAmount} value = {this.props.amount} type="number"></input>
            <label> Delay: </label>
            <input onChange={this.changeDelay} value = {this.props.delay} type="number"></input>
        </span>
    )
  };
}

export default Enemy;
