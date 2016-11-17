import React from "react";

export default class FilterTodo extends React.Component {
	constructor(props) {
		super(props);
		this.filters = [
			{
				"key": "all",
				"value": "Все"
			},
			{
				"key": "ended",
				"value": "Завершенные"
			},
			{
				"key": "new",
				"value": "Новые"
			}
		];
		this.state = {
			active: "all"
		};
	}

	handleClickFilter(key) {
		this.props.onFilterTodo(key);
		this.setState({active: key});
	}

	render() {
		return(
			<div className="container filter">
				<div className="btn-group">
					{
						this.filters.map((item, i) => {
							const activeItem = this.state.active == item.key;
							return(
								<button
									key={i}
									className={`btn ${activeItem? "btn-primary": "btn-default"}`}
									onClick={this.handleClickFilter.bind(this, item.key)}>
									{item.value}
								</button>
							);
						})
					}
				</div>
			</div>
		);
	}
}
