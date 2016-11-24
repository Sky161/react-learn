import React from "react";

export default class NoteAdd extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "",
			color: "#ffff00"
		}
	}

	inputChange(stateKey, e) {
		this.setState({[stateKey]: e.target.value});
	}

	handleClickAdd(e) {
		e.preventDefault();
		const newNote = {
			text: this.state.text,
			color: this.state.color,
			id: Date.now()
		}

		this.props.onNoteAdd(newNote);
		this.setState({
			text: "",
			color: "#ffff00"
		});
	}

	render() {
		return(
			<form className="container">
				<div className="form-group">
					<textarea
						placeholder="Введите текст заметки..."
						className="form-control"
						value={this.state.text}
						onChange={this.inputChange.bind(this, "text")}
					/>
				</div>
				<div className="form-group">
					<input type="color"
						value={this.state.color}
						onChange={this.inputChange.bind(this, "color")}/>
				</div>
				<input
					type="submit"
					value="Добавить"
					className="btn btn-success"
					onClick={this.handleClickAdd.bind(this)}
				/>
			</form>
		);
	}
}

NoteAdd.propTypes = {
	onNoteAdd: React.PropTypes.func
};
