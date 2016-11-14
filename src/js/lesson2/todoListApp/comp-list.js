import React from "react";
import ItemTodo from "./comp-item";

export default class ListTodo extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<p>TodoList</p>
				<ItemTodo />
			</div>
		);
	}
}
