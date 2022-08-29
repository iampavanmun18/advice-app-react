import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component{
  state = {
    advice:'',
  };

  componentDidMount(){
    console.log("Component Did Mount")
    this.fetchAdvice()
  }
  
  fetchAdvice = () =>{
    axios.get('https://api.adviceslip.com/advice').then((res)=>{
      const {advice} = res.data.slip
      this.setState({advice : advice})
      console.log(advice);
    }).catch((error)=>{
      console.log("Response didn't came",error)
    })
  }
render(){
  const { advice} =  this.state;
  console.log('advice',advice)
  return(
    <div className='app'>
      <div className='card'>
        <div className='heading'>
          <h1>{advice}</h1>
          <button className='btnStyle' onClick={this.fetchAdvice}>Give Me Advice!</button>
        </div>
      </div>
    </div>
   );
}
}

export default App;
