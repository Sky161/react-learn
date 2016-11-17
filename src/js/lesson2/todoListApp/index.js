import React from "react";
import AddTodo from "./comp-add";
import ListTodo from "./comp-list";
import FilterTodo from "./comp-filter";
import styles from "../../../sass/lesson2/todo.sass";

export default class TodoApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todoList: [
				{
					id: "0",
					text: "Тех Увы лун лия Бел Пой. Яркий Вот дым уст Лию дуб Рек живее Уже ему врозь.",
					complete: false
				},
				{
					id: "1",
					text: "Тех Увы лун лия Бел Пой. Яркий Вот дым уст Лию дуб Рек живее Уже ему врозь.",
					complete: false
				},
				{
					id: "2",
					text: "Тех Увы лун лия Бел Пой. Яркий Вот дым уст Лию дуб Рек живее Уже ему врозь.",
					complete: false
				},
				{
					id: "3",
					text: "Тех Увы лун лия Бел Пой. Яркий Вот дым уст Лию дуб Рек живее Уже ему врозь.",
					complete: false
				},
				{
					id: "4",
					text: "Тех Увы лун лия Бел Пой. Яркий Вот дым уст Лию дуб Рек живее Уже ему врозь.",
					complete: false
				}
			]
		}
	}

	addTodo(todo) {
		const todoList = this.state.todoList.slice();
		todoList.push(todo);
		this.setState({todoList: todoList});
	}

	deleteTodo(id) {
		const res = this.state.todoList.filter(item => {
			if(item.id !== id) {
				return item;
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
		let complete = "";
		switch (key) {
			case "all":
				complete = "";
				break;
			case "ended":
				complete = true;
				break;
			case "new":
				complete = false;
				break;
		};
		const res = this.state.todoList.filter(item => {
			if(item.complete == complete) {
				return item;
			}
		});
		this.setState({todoList: res});
	}

	render() {
		return(
			<section className="todo-list">
				<div className="page-header container-fluid">
					<h1>To Do лист</h1>
				</div>
				<AddTodo onAddTodo={this.addTodo.bind(this)}/>
				<FilterTodo onFilterTodo={this.filterTodo.bind(this)}/>
				<ListTodo
					list={this.state.todoList}
					onDeleteTodo={this.deleteTodo.bind(this)}
					onCompleteTodo={this.completeTodo.bind(this)}/>
			</section>
		);
	}
}
