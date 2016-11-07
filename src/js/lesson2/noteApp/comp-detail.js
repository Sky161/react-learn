import React from "react";

export default class Note extends React.Component {
	constructor(props) {
		super(props);
	}

	handleClickDelete() {
		this.props.deleteNote(this);
	}

	render() {
		const styleNote = {
			background: this.props.color
		};
		return(
			<div className="note" style={styleNote}>
				<button type="button" className="close" onClick={this.handleClickDelete.bind(this)}>&times;</button>
				{ this.props.children }
			</div>
		);
	}
}
