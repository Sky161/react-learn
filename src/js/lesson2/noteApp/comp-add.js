import React from "react";

export default class NoteAdd extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<form className="container">
				<div className="form-group">
					<textarea placeholder="Введите текст заметки..." className="form-control" />
				</div>
				<input type="submit" value="Добавить" className="btn btn-success"/>
			</form>
		);
	}
}
