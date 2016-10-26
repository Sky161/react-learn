import React from "react";

export class Calc extends React.Component {

	render() {
		return(
			<form>
				<div className="form-group">
					<input type="text" name="a" className="form-control"/>
					<input type="text" name="b" className="form-control"/>
					<span> = 0 </span>
				</div>
				<div className="btn-group btn-group-justified">
					<a className="btn btn-primary" href="#">+</a>
					<a className="btn btn-primary" href="#">-</a>
					<a className="btn btn-primary" href="#">/</a>
					<a className="btn btn-primary" href="#">*</a>
				</div>
			</form>
		);
	}
}
