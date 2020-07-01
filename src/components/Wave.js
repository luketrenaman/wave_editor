import React from 'react';
import Button from '../Button';
import Element from "./Element";
class Wave extends React.Component{
  constructor(props) {
    super(props);
    
  }
   addElement = () =>{
     let wave = this.props.wave
     wave.push(    {
      "type":"enemy",
      "zombie": "normal",
      "intensity": 1,
      "amount": 5
    });
      this.props.changeWave(wave,"wave");
   }

   deleteElement = (idx) =>{
    return () => {
      let wave = this.props.wave
      wave.splice(idx,1);
      this.props.changeWave(wave,"wave"); //Changes wave property to wave variable

    }
  }
  editElement = (idx) =>{
    return (val) => {
      let wave = this.props.wave
      wave[idx] = Object.assign({},val);
      this.props.changeWave(wave,"wave"); //Changes wave property to wave variable

    }
  }
  render() {
    // const waveList = props.data.map(wave => (
    //   <Wave id={wave.id} delay={wave.delay} wave={wave.wave}>
    // ))
    const elemList = this.props.wave.map((elem,idx) => (
        <Element delay={this.props.delay} delete={this.deleteElement(idx)} edit={this.editElement(idx)} key={idx} data={elem}/>
      ))
    // let flipExpanded = () => {
    //     this.setprops({expanded:!this.props.expanded})
    // }
    return (
    <div className="wave">
      <h3><Button positive={!this.props.expanded} onClick={this.props.expand}/> {this.props.id.split("-").join(" ")}</h3>
      <div style={this.props.expanded ? {display:"block"} : {display:"none"}}>
        <b>Wave delay: </b><input onChange={(e) => {
          this.props.changeWave(e.target.value,"delay");
        }} value={this.props.delay}></input>
        {elemList}
        <button onClick={this.addElement}>Add element</button>
      </div>
    </div>
    )
  };
}

export default Wave;
