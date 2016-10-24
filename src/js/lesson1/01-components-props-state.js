import React from "react";

export class Article extends React.Component{
	render() {
		return (
			<article>
				<h1>{this.props.title}</h1>
				<small>{this.props.author}</small>
				<p className="text">{this.props.text}</p>
			</article>
		);
	}
};

export class DinamicHelloWorld extends React.Component{
	constructor(props) {
		super(props);
		this.defaultName = "stranger";
		this.state = { name: this.defaultName };
	}

	renderName(e) {
		const val = e.target.value;
		if(val != ""){
			this.setState({name: val});
		} else {
			this.setState({name: this.defaultName});
		}
	}

	render() {
		return (
			<section>
				<h1>Hello, {this.state.name}!</h1>
				<input
					type="text"
					className="form-control"
					placeholder="Введите имя"
					onChange={this.renderName.bind(this)}
				/>
			</section>
		);
	}
};
