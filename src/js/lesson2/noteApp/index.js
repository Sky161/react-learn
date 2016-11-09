import React from "react";
import NoteAdd from "./comp-add";
import NoteList from "./comp-list";

export class NoteApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			note: []
		}
	}

	componentDidMount() {
		const localNotes = JSON.parse(localStorage.getItem("notes"));
		if(localNotes) {
			this.setState({"note": localNotes});
		}
	}

	componentDidUpdate() {
		localStorage.setItem("notes", JSON.stringify(this.state.note))
	}

	handelAddNote(newNote) {
		let copyNote = this.state.note.slice();
		copyNote.unshift(newNote);
		this.setState({note: copyNote});
	}

	handleDeleteNote(note) {
		const res = this.state.note.filter(item => {
			if(item.id !== note.props.id) {
				return item;
			}
		});

		this.setState({note: res});
	}


	render() {
		return(
			<section className="note-app">
				<div className="page-header container-fluid">
					<h1>Список заметок</h1>
				</div>
				<NoteAdd onNoteAdd={this.handelAddNote.bind(this)}/>
				<NoteList note={this.state.note} onDeleteNote={this.handleDeleteNote.bind(this)}/>
			</section>
		);
	}
}
