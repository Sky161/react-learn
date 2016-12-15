import React from "react";
import ReactDOM from "react-dom";
import "../sass/main.sass";
import { Router, Route, hashHistory, IndexRoute} from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";

import App from "./lesson4/index.jsx";
import MainPage from "./lesson4/pages/main.jsx";
import NotFoundPage from "./lesson4/pages/not-found.jsx";
import GoodsPage from "./lesson4/pages/goods.jsx";
import CartPage from "./lesson4/pages/cart.jsx";

injectTapEventPlugin();

ReactDOM.render(
	<MuiThemeProvider>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={MainPage} />
				<Route path="goods" component={GoodsPage}>
					<Route path=":id" component={GoodsPage}/>
				</Route>
				<Route path="cart" component={CartPage} />
				<Route path="*" component={NotFoundPage} />
			</Route>
		</Router>
	</MuiThemeProvider>,
	document.body.querySelector("#root")
);
