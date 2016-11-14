import React from "react";

export default class SearchNote extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<input type="text" placeholder="Поиск" className="form-control" onChange={this.props.searchHandlerParent}/>
		);
	}
}
