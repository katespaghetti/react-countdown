import React from 'react';

class Clock extends React.Component {
	render() {
		return(
			<div>
				<div style={{background: this.props.backgroundColor}} id={'mainContainerDivStyling'}>
					<div className={'clockTextStyling'}>
						TIME LEFT:
					</div>
					<div className={'clockNumbersStyling'}>
						<span className={'daysCount'}>
							{this.props.daysRemaining}
						</span>
						<span className={'daysCount'}>
							{this.props.hours12Remaining}
						</span>
						<span className={'daysCount'}>
							{this.props.hours24Remaining}
						</span>
						<span className={'daysCount'}>
							{this.props.minutesRemaining}
						</span>
						<span className={'daysCount'}>
							{this.props.secondsRemaining}
						</span>
					</div>
				</div>
			</div>
		)
	}
}

export default Clock;