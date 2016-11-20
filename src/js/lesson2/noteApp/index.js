import React from "react";
import NoteAdd from "./comp-add";
import NoteList from "./comp-list";
import styles from "../../../sass/lesson2/note.sass";

export class NoteApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			note: [],
			searchQuery: ""
		}
	}

	componentDidMount() {
		this.localNotes = JSON.parse(localStorage.getItem("notes"));
		if(this.localNotes) {
			this.setState({"note": this.localNotes});
		}
	}

	componentDidUpdate() {
		localStorage.setItem("notes", JSON.stringify(this.state.note));
	}

	handelAddNote(newNote) {
		let copyNote = this.state.note.slice();
		copyNote.unshift(newNote);
		this.setState({note: copyNote});
	}

	handleDeleteNote(id) {
		const res = this.state.note.filter(item => {
			if(item.id !== id) {
				return item;
			}
		});
		this.setState({note: res});
	}

	handleSearchNote(q) {
		this.setState({searchQuery: q});
	}

	getList() {
		const query = this.state.searchQuery.toLowerCase();
		if(query.length > 0) {
			return this.state.note.filter(item => {
				if(item.text.toLowerCase().indexOf(query) != -1) {
					return true;
				}
			});
		} else {
			return this.state.note;
		}
	}


	render() {
		const list = this.getList();
		return(
			<section className="note-app">
				<div className="page-header container-fluid">
					<h1>Список заметок</h1>
				</div>
				<NoteAdd onNoteAdd={this.handelAddNote.bind(this)}/>
				<NoteList
					note={list}
					onDeleteNote={this.handleDeleteNote.bind(this)}
					onSearchNote={this.handleSearchNote.bind(this)}/>
			</section>
		);
	}
}
