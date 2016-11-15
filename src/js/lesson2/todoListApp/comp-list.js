import React from "react";
import ItemTodo from "./comp-item";

export default class ListTodo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="container">
				{
					this.props.list.map(item => {
						return <ItemTodo key={item.id}
							item={item}
							onDeleteTodoItem={this.props.onDeleteTodo}
							onCompleteTodoItem={this.props.onCompleteTodo}/>
					})
				}
			</div>
		);
	}
}
