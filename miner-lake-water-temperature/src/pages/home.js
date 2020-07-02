import React, { Component } from 'react'
import axios from 'axios';
import TimeAgo from 'react-timeago'

class home extends Component {
  state = {
    temps: null	
  }

  componentDidMount() {
    axios
      .get('/getTemps')
      .then((res) => {
	    this.setState({
		  temps: res.data
		});
	  })
	  .catch(err => console.log(err));
  }

  render() {
    let latestTemp = this.state.temps ? (
	  <h3>{this.state.temps[0].tempF} {String.fromCharCode(176)} F</h3>
    ) : <p>Loading...</p>
    
    let latestTime = this.state.temps ? (
      new Date(this.state.temps[0].time).toString()
    ) : <h3>Loading...</h3>
	
    return (
      <div>
        <div className='main border'>
			  <h1>Current Water Temp: {latestTemp}</h1>
			  <h2>Last temperature reading: </h2>
			  <TimeAgo date={latestTime} />
			</div>
      </div>
    )
  }
}

export default home
