import React from "react";
import ReactDOM from "react-dom";
require("../sass/main.sass");

import { NoteApp } from "./lesson2/noteApp/index";
import Timer from "./lesson2/timer";

ReactDOM.render(
	<div>
		<NoteApp />
		<Timer />
	</div>
	,
	document.body.querySelector(".content")
);
