import React from "react";

export default class ItemArticle extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<article>
				<h2>{this.props.name}</h2>
				<div className="text">{this.props.children}</div>
			</article>
		);
	}
}
