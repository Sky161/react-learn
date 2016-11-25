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

ItemArticle.propTypes = {
	id: React.PropTypes.number.isRequired,
	name: React.PropTypes.string.isRequired,
	children: React.PropTypes.string.isRequired
};
