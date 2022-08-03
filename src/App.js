import React,{Component} from 'react'
import styled from 'styled-components'

export const Calculadora=styled.div`
  margin:0 auto;
  background:rgb(9, 99, 102);
  width:25rem;
  text-align: center;
  height:30rem;
  border-radius:10px;

  h1{
    color:white;
    padding-top:30px;
  }
  .input-div{
    display:flex;
    flex-direction: column;
    margin:0 auto;
    width:15rem;
    align-items: center;
    gap:15px;
    position:relative;
    top:50px;
  }
  .input-div input{
    width:13rem;
    height:2rem;
    outline:none;
    border:none;
    text-align:center;
    color:rgb(4, 82, 194);
    font-weight:600;
    font-size:1.5rem;
    border-radius:10px;
    box-shadow:0 1px 3px 0 black;
  }
  button{
    width:50px;
    height:50px;
    border-radius: 20px;
    background:rgb(4, 82, 194);
    font-size:2rem;
    color:rgb(135, 180, 255);
    border:none;
    box-shadow:0 1px 3px 0 black;
    transition:0.1s all;
  }
  button:active{
    background:rgb(4, 82, 152);
  }
  .btnDiv{
    margin:0 auto;
    position:relative;
    top:150px;
    width:80%;
    display:flex;
    justify-content: space-evenly;
  }

  h2{
    color:white;
    font-size:2.5rem;
    font-weight:800;
  }
`
export default class App extends Component{
  state={
    num1:'',
    num2:'',
    resultado:''
  }
  handleChange1=(event)=>{
    this.setState({
      num1:Number(event.target.value)
    })
  }
  handleChange2=(event)=>{
    this.setState({
      num2:Number(event.target.value)
    })
  }

  diminuir=()=>{
    this.setState({
      resultado:this.state.num1 - this.state.num2
    })
  }
  somar=()=>{
    this.setState({
      resultado:this.state.num1 + this.state.num2
    })
  }
  multi=()=>{
    this.setState({
      resultado:this.state.num1 * this.state.num2
    })
  }
  dividir=()=>{
    this.setState({
      resultado:this.state.num1 / this.state.num2
    })
  }
  limpar=()=>{
    this.setState({
      num1:'',
      num2:'',
      resultado:''
    })
  }
  render(){
    return(
      <Calculadora>
      <h1>Calculadora</h1>
      <div className='input-div'>
        <input onChange={this.handleChange1} value={this.state.num1}/>
        <input onChange={this.handleChange2} value={this.state.num2}/>
      </div>
      <div className='btnDiv'>
        <button onClick={this.diminuir}>-</button>
        <button onClick={this.somar}>+</button>
        <button onClick={this.multi}>*</button>
        <button onClick={this.dividir}>/</button>
        <button onClick={this.limpar}>c</button>
      </div>
      <h2>{this.state.resultado}</h2>
      </Calculadora>

    )
  }
}