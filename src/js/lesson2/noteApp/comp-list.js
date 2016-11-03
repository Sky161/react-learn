import React from "react";
import Note from "./comp-detail";

export default class NoteList extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="list container-fluid">
				{
					this.props.note.map((item, key) =>
						<Note key={key} color={item.color}>
							{ item.text }
						</Note>
					)
				}
			</div>
		);
	}
}
