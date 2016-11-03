import React from "react";

export default class NoteAdd extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ""
		}
	}

	handleChangeText(e) {
		this.setState({text: e.target.value});
	}

	handleClickAdd(e) {
		e.preventDefault();
		const newNote = {
			text: this.state.text,
			color: 'yellow'
		}

		this.props.onNoteAdd(newNote);
		this.setState({text: ""});
	}

	render() {
		return(
			<form className="container">
				<div className="form-group">
					<textarea
						placeholder="Введите текст заметки..."
						className="form-control"
						value={this.state.text}
						onChange={this.handleChangeText.bind(this)}
					/>
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
