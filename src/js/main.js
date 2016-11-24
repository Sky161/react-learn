import React from "react";
import ReactDOM from "react-dom";
import styles from "../sass/main.sass";

import NoteApp from "./lesson2/noteApp/index.js";

ReactDOM.render(
	<div>
		<NoteApp />
	</div>,
	document.body.querySelector(".content")
);
