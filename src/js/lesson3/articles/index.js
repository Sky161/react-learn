import React from "react";
import SearchArticles from "./comp-search";
import data from "../articles.json";
import ListArticle from "./comp-list";
import DetailArticle from "./comp-detail.js";

export default class Articles extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: data,
			searchQuery: ""
		};
	}

	searchHandle(val) {
		this.setState({searchQuery: val});
	}

	getList() {
		const searchQuery = this.state.searchQuery.toLowerCase();

		if(searchQuery.length > 0) {
			return this.state.articles.filter(item => {
				const text = item.name.toLowerCase();
				if(text.indexOf(searchQuery) != -1) {
					return true;
				}
			});
		} else {
			return this.state.articles;
		}
	}

	render() {
		const listArticle = this.getList();
		let template;
		if(this.props.params.id) {
			const article = listArticle.find(item => {
				return item.id == this.props.params.id;
			});
			template = (<DetailArticle article={article}/>);
		} else {
			template = (
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
		return template;
	}
}
