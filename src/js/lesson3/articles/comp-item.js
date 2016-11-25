import React from "react";
import { Link, browserHistory } from "react-router";

export default class ItemArticle extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<article>
				<h2><Link to={`/articles/${this.props.id}`}>{this.props.name}</Link></h2>
				<div className="text">{this.props.children}</div>
			</article>
		);
	}
}
