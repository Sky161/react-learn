import React from "react";
import ReactDOM from "react-dom";
require("../sass/main.sass");

import { NoteApp } from "./lesson2/noteApp/index";
import Timer from "./lesson2/timer";
import TodoApp from "./lesson2/todoListApp/index";

ReactDOM.render(
	<div>
		<NoteApp />
		<Timer />
		<TodoApp />
	</div>,
	document.body.querySelector(".content")
);
