import React from "react";

export default class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds: 0
		}
	}

	handleControlTimer(control) {
		switch (control) {
			case "start":
				this.setState({
					seconds: 0
				});
				this.timerStart();
				break;
			case "pause":
				clearInterval(this.interval);
				break;
			case "resume":
				this.timerStart();
				break;
			default:
				return false;
		}
	}

	timerStart() {
		if(this.interval) {
			clearInterval(this.interval);
		}

		this.interval = setInterval(() => {
			this.setState({
				seconds: this.state.seconds + 1
			});
		}, 1000);
	}

	render() {
		return(
			<section className="timer">
				<div className="page-header container-fluid">
					<h1>Таймер</h1>
				</div>
				<div className="container">
					<p>Прошло секунд - {this.state.seconds}</p>
					<div className="btn-group">
						<button type="button"
						className="btn btn-primary"
						onClick={this.handleControlTimer.bind(this, "start")}>Старт</button>
						<button type="button"
						className="btn btn-warning"
						onClick={this.handleControlTimer.bind(this, "pause")}>Пауза</button>
						<button type="button"
						className="btn btn-success"
						onClick={this.handleControlTimer.bind(this, "resume")}>Возобновить</button>
					</div>
				</div>
			</section>
		);
	}
}
