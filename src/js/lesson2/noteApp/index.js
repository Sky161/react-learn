import React from "react";
import NoteAdd from "./comp-add";
import NoteList from "./comp-list";
import styles from "../../../sass/lesson2/note.sass";

export class NoteApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			note: []
		}
	}

	componentDidMount() {
		this.localNotes = JSON.parse(localStorage.getItem("notes"));
		if(this.localNotes) {
			this.setState({"note": this.localNotes});
		}
	}

	writeLocalStorage() {
		localStorage.setItem("notes", JSON.stringify(this.state.note))
	}

	handelAddNote(newNote) {
		let copyNote = this.state.note.slice();
		copyNote.unshift(newNote);
		this.setState({note: copyNote});
		this.writeLocalStorage();
	}

	handleDeleteNote(note) {
		const res = this.state.note.filter(item => {
			if(item.id !== note.props.id) {
				return item;
			}
		});
		this.setState({note: res});
		this.writeLocalStorage();
	}

	handleSearchNote(q) {
		const query = q.target.value.toLowerCase();
		const res = this.localNotes.filter(item => {
			const text = item.text.toLowerCase();
			if(text.indexOf(query) != -1) {
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
				<NoteList
					note={this.state.note}
					onDeleteNote={this.handleDeleteNote.bind(this)}
					onSearchNote={this.handleSearchNote.bind(this)}/>
			</section>
		);
	}
}
