import React from "react";

export default class ItemTodo extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			complete: false
		};
	}

	render() {
		return(
			<div className="row">
				<div className="col-xs-1">
					<div className="material-switch pull-right">
						<input id={`someSwitchOptionSuccess${this.props.item.id}`}
							type="checkbox"
							checked={this.props.item.complete}
							onChange={this.props.onCompleteTodoItem.bind(null, this.props.item.id)}/>
						<label htmlFor={`someSwitchOptionSuccess${this.props.item.id}`} className="label-success"></label>
					</div>
				</div>
				<div className={`col-xs-10 ${(this.props.item.complete) ? "complete": ""}`}>
					{this.props.item.text}
				</div>
				<div className="col-xs-1">
					<button className="btn btn-danger"
						onClick={this.props.onDeleteTodoItem.bind(null, this.props.item.id)}>
						<span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
					</button>
				</div>
			</div>
		);
	}
}
