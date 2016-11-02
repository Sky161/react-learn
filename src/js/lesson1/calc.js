import React from "react";

export class Calc extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			a: 0,
			b: 0,
			result: 0
		}
	}

	consider(e) {
		e.preventDefault();
		const act = e.target.dataset.value;
		let result = 0;

		switch (act) {
			case "fold":
				result = this.state.a + this.state.b;
				break;
			case "deduct":
				result = this.state.a - this.state.b;
				break;
			case "divided":
				result = this.state.a / this.state.b;
				break;
			case "multiply":
				result = this.state.a * this.state.b;
				break;
		}

		this.setState({result: result});
	}

	changeInp(e) {
		const name = e.target.name;
		const value = Number(e.target.value);
		const numbers = new RegExp('^[0-9]+$');
		if(numbers.test(value)) {
			this.setState({ [name]: value});
		}
	}

	render() {
		return(
			<form>
				<div className="form-group">
					<div className="row">
						<div className="col-xs-4 col-vcenter">
							<input type="text" className="form-control" name="a" value={this.state.a}
								onChange={this.changeInp.bind(this)}/>
						</div>
						<div className="col-xs-4 col-vcenter">
							<input type="text" name="b" className="form-control" name="b" value={this.state.b}
								onChange={this.changeInp.bind(this)}/>
						</div>
					<div className="col-xs-4 col-vcenter"> = {this.state.result} </div>
					</div>
				</div>
				<div className="btn-group btn-group-justified">
					<a className="btn btn-primary" href="#" data-value="fold"
						onClick={this.consider.bind(this)}>+</a>
					<a className="btn btn-primary" href="#" data-value="deduct" onClick={this.consider.bind(this)}>-</a>
					<a className="btn btn-primary" href="#" data-value="divided" onClick={this.consider.bind(this)}>/</a>
					<a className="btn btn-primary" href="#" data-value="multiply" onClick={this.consider.bind(this)}>*</a>
				</div>
			</form>
		);
	}
}
