import React from "react";

const GoodsPage = (props) => {
	if(props.params.id){
		return(
			<h1>Goods Detail</h1>
		);
	}else{
		return(
			<h1>Goods List</h1>
		);
	}
};

export default GoodsPage;
