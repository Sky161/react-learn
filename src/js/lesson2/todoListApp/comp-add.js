import React from "react";

export default class AddTodo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			"text": ""
		}
	}

	handleChangeText(e) {
		const val = e.target.value;
		this.setState({ "text": val });
	}

	render() {
		return(
			<div className="container">
				<div className="form-group">
					<label>Задача:</label>
					<input type="text"
						className="form-control"
						value={this.state.text}
						onChange={this.handleChangeText} />
				</div>
				<div className="form-group">
					<input type="submit" className="btn btn-success" value="Добавить" />
				</div>
			</div>
		);
	}
}
