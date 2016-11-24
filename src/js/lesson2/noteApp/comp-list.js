import React from "react";
import Masonry from "masonry-layout";
import Note from "./comp-detail";
import SearchNote from "./comp-search.js";

export default class NoteList extends React.Component{
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const list = this.refs.list;
		this.msnry = new Masonry(list, {
			itemSelector: '.note',
			columnWidth: 250,
			gutter: 10,
			isFitWidth: true
		});
	}

	componentDidUpdate(prevProps) {
		if(prevProps.length != this.props.note.length) {
			this.msnry.reloadItems();
			this.msnry.layout();
		}
	}

	render() {
		return(
			<section className="search-section">
				<div className="container">
					<SearchNote searchHandlerParent={this.props.onSearchNote}/>
				</div>
				<div className="list container-fluid" ref="list">
					{
						this.props.note.map((item, key) =>
							<Note key={key} color={item.color} id={item.id} deleteNote={this.props.onDeleteNote}>
								{ item.text }
							</Note>
						)
					}
				</div>
			</section>
		);
	}
}

NoteList.propTypes = {
	onSearchNote: React.PropTypes.func,
	note: React.PropTypes.array.isRequired,
	deleteNote: React.PropTypes.func
};
