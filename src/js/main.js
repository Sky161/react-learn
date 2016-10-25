import React from "react";
import ReactDOM from "react-dom";

import { Article, DinamicHelloWorld } from "./lesson1/01-components-props-state";
import { ContactsList } from "./lesson1/contacts-list";

require("../sass/main.sass");

ReactDOM.render(
	<section>
		<div className="container">
			<h1>Статьи</h1>
			<Article title="Это заголовок статьи1" author="Андрей Чечкин" text="текст"/>
			<Article title="Это заголовок статьи2" author="Денис" text="текст2"/>
			<Article title="Это заголовок статьи3" author="Ваня" text="текст3"/>
		</div>
		<hr />
		<div className="container">
			<DinamicHelloWorld />
		</div>
		<hr />
		<div className="container contacts-list">
			<h1>Лист контактов</h1>
			<ContactsList />
		</div>
	</section>,
	document.body.querySelector(".content")
);
