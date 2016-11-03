import React from "react";
import ReactDOM from "react-dom";
require("../sass/main.sass");

import { NoteApp } from "./lesson2/noteApp/index";

ReactDOM.render(
	<NoteApp />,
	document.body.querySelector(".content")
);
