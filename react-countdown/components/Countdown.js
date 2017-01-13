import React from 'react';
import DuringCountdown from './DuringCountdown';
import AfterCountdown from './AfterCountdown';

function getTimeRemaining(endtime) {
	const total = Date.parse(endtime) - Date.now(),
	    	seconds = Math.floor((total/1000) % 60),
	    	minutes = Math.floor((total/1000/60) % 60),
	    	hours12 = Math.floor((total/(1000*60*60)) % 24),
	    	hours24 = Math.floor((total/(1000*60*60))),
	    	days = Math.floor(total/(1000*60*60*24));
  
  return {
    total: total,
    days: days,
    hours12: hours12,
    hours24: hours24,
    minutes: minutes,
    seconds: seconds
  };
}

// const {r, g, b} = Math.floor((Math.random() * 2) + 1);
const r = Math.floor(Math.random() * 255);
const g = Math.floor(Math.random() * 255);
const b = Math.floor(Math.random() * 255);
const backgroundColor = `rgb(${r}, ${g}, ${b})`;

export default class Countdown extends React.Component {
	// all the props types that are used in this component
	static propTypes = {
		startTime: React.PropTypes.string.isRequired,
		endTime: React.PropTypes.string.isRequired
	}

	constructor(props) {
		super(props);
		this.state = {
  		currentTime: Date.now(),
  		startTime: this.props.startTime,
  		endTime: this.props.endTime,
  		isAfter: false,
  		timeRemaining: null,
  		total: null,
  		days: null,
  		hours12: null,
  		hours24: null,
  		minutes: null,
  		seconds: null
		}
	}

	componentWillMount() {
		const whateverIntervalKey = setInterval(function() {

			const timeRemaining = getTimeRemaining(this.props.endTime);

			if ((timeRemaining.hours12 <= 0 || timeRemaining.hours24 <= 0) 
				&& timeRemaining.minutes <= 0 && timeRemaining.seconds <= 0) {

				// countdown fades when it ends
				<DuringCountdown
					style={this.props.style}
				/>

      	clearInterval(whateverIntervalKey);
      	this.setState({
      		isAfter: true
      	});
    	} else {
				this.setState({
					days: timeRemaining.days,
					hours12: timeRemaining.hours12,
					hours24: timeRemaining.hours24,
					minutes: timeRemaining.minutes,
					seconds: timeRemaining.seconds
				});
			}

		// bind because setTimeout and setInterval runs async
		// because we need to modify state of the component within itself
		}.bind(this), 1000);
	}

	onSecondPassed(event) {
		this.setState({
			endTime: event.target.value,
  		days: getTimeRemaining(this.state.endTime.days)
		});
	}

	render() {
		let content = null;

		if (this.state.isAfter) {
			content = <AfterCountdown />;
		} else {
			content = (
				<DuringCountdown
					style={this.props.style}
					backgroundColor={backgroundColor}
					onChange={this.onSecondPassed.bind(this)}
					daysRemaining={this.state.days}
					hours12Remaining={this.state.hours12}
					hours24Remaining={this.state.hours24}
					minutesRemaining={this.state.minutes}
					secondsRemaining={this.state.seconds}
				/>
			);
		}

		const {bgColor} = this.state;

		return (
			<div>
				{content}
			</div>
		)
	}
}