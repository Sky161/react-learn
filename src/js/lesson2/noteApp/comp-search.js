import React from "react";

export default class SearchNote extends React.Component{
	constructor(props) {
		super(props);
	}

	handleChangeSearch(e) {
		this.props.searchHandlerParent(e.target.value);
	}

	render() {
		return(
			<input type="text" placeholder="Поиск" className="form-control" onChange={this.handleChangeSearch.bind(this)}/>
		);
	}
}
