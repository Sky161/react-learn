import React from "react";
import SearchArticles from "./comp-search";
import data from "../articles.json";
import ListArticle from "./comp-list";
import DetailArticle from "./comp-detail.js";

export default class Articles extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchQuery: ""
		};
	}

	searchHandle(val) {
		this.setState({searchQuery: val});
	}

	getList() {
		const searchQuery = this.state.searchQuery.toLowerCase();

		if(searchQuery.length > 0) {
			return data.filter(item => {
				const text = item.name.toLowerCase();
				if(text.indexOf(searchQuery) != -1) {
					return true;
				}
			});
		} else {
			return data;
		}
	}

	render() {
		const listArticle = this.getList();
		if(this.props.params.id) {
			const article = listArticle.find(item => {
				return item.id == this.props.params.id;
			});
			return(<DetailArticle article={article}/>);
		} else {
			return(
				<section className="articles">
					<div className="page-header container-fluid">
						<h1>Список статей</h1>
					</div>
					<div className="container">
						<SearchArticles onSearch={this.searchHandle.bind(this)}/>
						<ListArticle articles={listArticle}/>
					</div>
				</section>
			);
		}
	}
}

Articles.propTypes = {
	params: React.PropTypes.shape({
		id: React.PropTypes.string
	}).isRequired
};
