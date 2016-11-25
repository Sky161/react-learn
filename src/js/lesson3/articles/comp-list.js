import React from "react";
import ItemArticle from "./comp-item";

export default class ListArticle extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="list">
				{
					this.props.articles.map(item => {
						return(
							<ItemArticle key={item.id} id={item.id} name={item.name}>{item.text}</ItemArticle>
						);
					})
				}
			</div>
		);
	}
}
