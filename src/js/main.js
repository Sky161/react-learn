import React from "react";
import ReactDOM from "react-dom";
require("../sass/main.sass");

import Articles from "./lesson3/articles/index";

ReactDOM.render(
	<div>
		<Articles />
	</div>,
	document.body.querySelector(".content")
);
