import React from "react";

export default class AddTodo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ""
		}
	}

	handleChangeText(e) {
		const val = e.target.value;
		this.setState({text: val});
	}

	handleClickAdd(e) {
		e.preventDefault();
		if(this.state.text.length > 0) {
			const res = {
				id: Date.now(),
				text: this.state.text,
				complete: false
			};
			this.props.onAddTodo(res);
			this.setState({text: "" });
		}
	}

	render() {
		return(
			<div className="container">
				<div className="form-group">
					<label>Задача:</label>
					<input type="text"
						className="form-control"
						value={this.state.text}
						onChange={this.handleChangeText.bind(this)} />
				</div>
				<div className="form-group">
					<input type="submit"
						className="btn btn-success"
						value="Добавить"
						onClick={this.handleClickAdd.bind(this)}/>
				</div>
			</div>
		);
	}
}
