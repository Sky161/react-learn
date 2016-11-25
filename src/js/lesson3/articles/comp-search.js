import React from "react";

export default class SearchArticles extends React.Component {
	constructor(props) {
		super(props);
	}

	handleChangeSearch(e) {
		this.props.onSearch(e.target.value);
	}

	render() {
		return(
			<div className="form-group">
				<input type="text"
					placeholder="Поиск"
					className="form-control"
					onChange={this.handleChangeSearch.bind(this)}/>
			</div>
		);
	}
}

SearchArticles.propTypes = {
	onSearch: React.PropTypes.func
};
