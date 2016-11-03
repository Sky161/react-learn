import React from "react";
import Masonry from "masonry-layout";
import Note from "./comp-detail";

export default class NoteList extends React.Component{
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log(this.refs);
		const list = this.refs.list;
		this.msnry = new Masonry(list, {
			itemSelector: '.note',
			columnWidth: 250,
			gutter: 10,
			isFitWidth: true
		});
	}

	render() {
		return(
			<div className="list container-fluid" ref="list">
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
