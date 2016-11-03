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
				<button type="button" className="close">&times;</button>
				{ this.props.children }
			</div>
		);
	}
}
