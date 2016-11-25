import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory, Link, IndexRoute} from "react-router";
import styles from "../sass/main.sass";

import Articles from "./lesson3/articles/index.js";

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<nav className="navbar navbar-inverse container">
					<div className="container-fluid">
						<div className="navbar-header">
							<a className="navbar-brand" href="#">Andrey Chechkin</a>
						</div>
						<ul className="nav navbar-nav">
							<li><Link to="/">Главная</Link></li>
							<li><Link to="/articles">Статьи</Link></li>
						</ul>
					</div>
				</nav>
				{this.props.children}
			</div>
		);
	}
}
const MainPage = () => {
	return(
		<div className="container">
				<h1>Добро пожаловать на главную страницу!</h1>
		</div>
	);
};

const NotFound = () => {
	return(
		<div className="container">
			<h1>Страница не найдена!</h1>
		</div>
	);
}

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={MainPage}></IndexRoute>
			<Route path='articles' component={Articles}>
				<Route path=':id' component={Articles}></Route>
			</Route>
			<Route path='*' component={NotFound} status={404}></Route>
		</Route>
	</Router>,
	document.body.querySelector(".content")
);
