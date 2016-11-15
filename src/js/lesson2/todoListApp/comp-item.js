import React from "react";

export default class ItemTodo extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="row">
				<div className="col-xs-1">
					<div className="material-switch pull-right">
						<input id={`someSwitchOptionSuccess${this.props.item.id}`} type="checkbox"/>
						<label htmlFor={`someSwitchOptionSuccess${this.props.item.id}`} className="label-success"></label>
					</div>
				</div>
				<div className="col-xs-10">{this.props.item.text}</div>
				<div className="col-xs-1">
					<button className="btn btn-danger">
						<span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
					</button>
				</div>
			</div>
		);
	}
}
