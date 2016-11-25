import React from "react";

export default class DetailArticle extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="container">
				<h1>{this.props.article.name}</h1>
				<p>{this.props.article.text}</p>
			</div>
		);
	}
}

DetailArticle.propTypes = {
	article: React.PropTypes.shape({
		name: React.PropTypes.string.isRequired,
		text: React.PropTypes.string.isRequired
	})
};
