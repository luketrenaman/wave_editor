import React from 'react';
import Enemy from "./Enemies";
import Dialogue from "./Dialogue";
import Condition from "./Condition";
import Animation from "./Animation";
class Element extends React.Component{
  constructor(props) {
    super(props);
  }
  map(idx){
    switch (idx){
      case 0:
        return {
          "type":"enemy",
          "zombie": "normal",
          "intensity": 4,
          "amount": 5
        };
        break;
      case 1:
        return {
          "type":"dialogue",
          "expression": "happy",
          "text": "What a rush! I made it through the day."
        };
        break;
      case 2:
        return {
          "type":"condition",
          "condition": "wait_until_empty"
        };
        break;
      case 3:
        return {
          "type":"animation",
          "path": "shake.tscn"
        };;
      break;
    }
  }
  editProperty = (property,value) => {
    let elem = this.props.data;
    if(value === null){
      delete elem[property]
    } else{
      elem[property] = value;
    }
    this.props.edit(elem);
  }
  createElement(idx){
    let elem = this.props.data;
    elem = this.map(idx);
    this.props.edit(elem);
  }
  render() {
    // const waveList = props.data.map(wave => (
    //   <Wave id={wave.id} delay={wave.delay} wave={wave.wave}>
    // ))
    let type = this.props.data.type;
    let getType = ()=>{
        if(type === "dialogue"){
            return <Dialogue editProperty={this.editProperty} expression={this.props.data.expression} text={this.props.data.text}/>
        }
        if(type === "enemy"){
            return <Enemy delay={this.props.data.delay || this.props.delay} editProperty={this.editProperty} type={this.props.data.type} enemy={this.props.data.enemy}
            intensity={this.props.data.intensity} amount={this.props.data.amount}/>
        }
        if(type === "animation"){
          return <Animation editProperty={this.editProperty} path={this.props.data.path}/>
        }
        if(type === "condition"){
          return <Condition editProperty={this.editProperty} condition={this.props.data.condition}
          seconds = {this.props.data.seconds}/>
        }
    }
    return (
        <div className="element">
            <label>Type: </label>
            <select value={type} onChange={e => (this.createElement(e.target.selectedIndex))}>
                <option value="enemy">Enemies</option>
                <option value="dialogue">Dialogue</option>
                <option value="condition">Condition</option>
                <option value="animation">Animation</option>
            </select>
            {getType()}
            <button className="right" onClick={this.props.delete}>X</button>
        </div>
    )
  };
}

export default Element;
