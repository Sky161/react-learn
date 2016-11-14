import React from "react";
import AddTodo from "./comp-add";
import ListTodo from "./comp-list";

export default class TodoApp extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<section className="todo-list">
				<div className="page-header container-fluid">
					<h1>To Do лист</h1>
				</div>
				<AddTodo />
				<ListTodo />
			</section>
		);
	}
}
