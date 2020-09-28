import React, { Component } from 'react'
import axios from 'axios';
import TimeAgo from 'react-timeago'
import CanvasJSReact from '../lib/canvasjs.react';

import PayPalBadge from '../img/PayPal.png';

class home extends Component {
  state = {
    temps: null,
    chartDataPoints: []
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  componentDidMount() {
    if (true) {
      axios
        .get('/getTemps')
        .then((res) => {
          this.setState({
            temps: res.data
          });

          this.setChartDataPoints(res.data);
        })
        .catch(err => console.log(err));
      }
  }

  setChartDataPoints(data) {
    var points = [];

    data.forEach(data => {
      var timestamp = data.time;
      var tempF = parseInt(data.tempF);

      var split = timestamp.split("-");
      var year = split[0];
      var month = split[1] - 1;
      var day = split[2].substring(0, 2);

      var date = new Date(year, month, day);

      var point = {x: date, y: tempF };

      points.push(point);
    });

    this.setState({
      chartDataPoints: points
    })

  }

  getChartOptions() {
    return {
			animationEnabled: true,
			title:{
				text: "Water Temperature Over Time"
			},
			axisX: {
				valueFormatString: "MMM D"
			},
			axisY: {
				title: "Temperature (\u00b0F)",
				prefix: ""
			},
			data: [{
				type: "spline",
				dataPoints: this.state.chartDataPoints
			}]
		}
  }

  render() {
    let latestTemp = this.state.temps ? (
	  <h1>{this.state.temps[0].tempF} {String.fromCharCode(176)} F</h1>
    ) : <h3>Loading...</h3>
    
    let latestTime = this.state.temps ? (
      new Date(this.state.temps[0].time).toString()
    ) : <h3>Loading...</h3>
	
    return (
      <div>
        <div className='main border'>
          <h1>Current Water Temp: </h1>
          {latestTemp}
          <h2>Last temperature reading: </h2>
          <TimeAgo date={latestTime} />
			  </div>

        Note: The data points on the following chart are with TEST data.
        This data will be replaced by real data over the next few months.

        <div className='main border'>
          <CanvasJSReact.CanvasJSChart options = {this.getChartOptions()}
            onRef={ref => this.chart = ref}
          />
        </div>

        <div className='footer'>
					<a target="https://www.paypal.com/paypalme/scrubsandwich" href="https://www.paypal.com/paypalme/scrubsandwich">
								<img src={PayPalBadge} alt="PayPal Logo" width="90" height="50" />
					</a>
          &copy; 2020 Jacob Miecznikowski
				</div>
      </div>
    )
  }
}

export default home
