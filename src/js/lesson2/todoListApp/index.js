import React from "react";
import AddTodo from "./comp-add";
import ListTodo from "./comp-list";
import FilterTodo from "./comp-filter";
import styles from "../../../sass/lesson2/todo.sass";

export default class TodoApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todoList: [],
			filterBy: "all"
		}
	}

	componentWillMount(){
		if(localStorage.todo) {
			const res = JSON.parse(localStorage.todo);
			this.setState({todoList: res});
		}
	}

	componentDidUpdate() {
		const res = JSON.stringify(this.state.todoList);
		localStorage.setItem("todo", res);
	}

	addTodo(todo) {
		const todoList = this.state.todoList.slice();
		todoList.push(todo);
		this.setState({todoList: todoList});
	}

	deleteTodo(id) {
		const res = this.state.todoList.filter(item => {
			if(item.id !== id) {
				return true;
			}
		});
		this.setState({todoList: res});
	}

	completeTodo(id) {
		const res = this.state.todoList.slice();
		const index = res.findIndex(element => {
			if(element.id == id) {
				return element;
			}
		});
		res[index].complete = !res[index].complete;
		this.setState({todoList: res});
	}

	filterTodo(key) {
		this.setState({filterBy: key});
	}

	filterBy() {
		let complete = null;
		switch (this.state.filterBy) {
			case "all":
				complete = null;
				break;
			case "ended":
				complete = true;
				break;
			case "new":
				complete = false;
				break;
		};
		const res = this.state.todoList.filter(item => {
			if(item.complete == complete || complete === null) {
				return true;
			}
		});
		return res;
	}

	render() {
		const filterList = this.filterBy();
		return(
			<section className="todo-list">
				<div className="page-header container-fluid">
					<h1>To Do лист</h1>
				</div>
				<AddTodo onAddTodo={this.addTodo.bind(this)}/>
				<FilterTodo onFilterTodo={this.filterTodo.bind(this)}/>
				<ListTodo
					list={filterList}
					onDeleteTodo={this.deleteTodo.bind(this)}
					onCompleteTodo={this.completeTodo.bind(this)}/>
			</section>
		);
	}
}
