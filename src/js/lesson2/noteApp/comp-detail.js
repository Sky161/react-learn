import React from "react";

export default class Note extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const styleNote = {
			background: this.props.color
		};
		return(
			<div className="note" style={styleNote}>
				<button type="button" className="close" onClick={this.props.deleteNote.bind(null, this.props.id)}>&times;</button>
				{ this.props.children }
			</div>
		);
	}
}

Note.propTypes = {
	color: React.PropTypes.string.isRequired,
	deleteNote: React.PropTypes.func,
	id: React.PropTypes.any.isRequired,
	children: React.PropTypes.string.isRequired
};
