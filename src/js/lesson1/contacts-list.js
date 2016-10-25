import React from "react";

const contactsList = [
	{
		id: 1,
		name: 'Darth Vader',
		phoneNumber: '+250966666666',
		image: 'http://cs7.pikabu.ru/images/big_size_comm_an/2014-03_7/13962622876915.gif',
		location: "Death Star",
		age: 40
	}, {
		id: 2,
		name: 'Princess Leia',
		phoneNumber: '+250966344466',
		image: 'http://images6.fanpop.com/image/photos/33100000/CARRIE-FISHER-anakin-vader-and-princess-leia-33186069-190-149.gif',
		location: "Ender",
		age: 30
	}, {
		id: 3,
		name: 'Luke Skywalker',
		phoneNumber: '+250976654433',
		image: 'https://s-media-cache-ak0.pinimg.com/736x/61/cb/eb/61cbeb0572962f6ee6fc06d3f4576a64.jpg',
		location: "Ender",
		age: 25
	}, {
		id: 4,
		name: 'Chewbacca',
		phoneNumber: '+250456784935',
		image: 'https://media.giphy.com/media/RUUdVZqwpfTRS/giphy.gif',
		location: "Earth",
		age: 100
	}
];

class ContactItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = { showDopInfo: false };
	}

	toggle() {
		this.setState({
			showDopInfo: !this.state.showDopInfo
		});
	}

	render() {
		if(this.state.showDopInfo) {
			this.renderDopInfo = <div>
				<p>Местоположение - {this.props.location}</p>
				<p>Возраст - {this.props.age}</p>
			</div>;
		} else {
			this.renderDopInfo = "";
		}

		return (
			<li onClick={this.toggle.bind(this)}>
				<img src={this.props.image}/>
				<section>
					<p>Имя - {this.props.name}</p>
					<p>Телефон - {this.props.phoneNumber}</p>
					{this.renderDopInfo}
				</section>
			</li>
		);
	}
}

export class ContactsList extends React.Component {
	constructor(props) {
		require("../../sass/contacts-list.sass");
		super(props);
		this.state = { contacts: contactsList };
	}

	search(e) {
		const val = e.target.value.toLowerCase();

		const res = contactsList.filter((item) => {
			if(item.name.toLowerCase().indexOf(val) !== -1) {
				return item;
			}
		});

		this.setState({ contacts: res });
	}

	render() {
		return (
			<section>
				<input
					type="text"
					className="form-control"
					placeholder="Поиск"
					onChange={this.search.bind(this)}
				/>
				<ul>
					{
						this.state.contacts.map(item =>
							<ContactItem
								key={item.id}
								name={item.name}
								phoneNumber={item.phoneNumber}
								image={item.image}
								location={item.location}
								age={item.age}
								/>
						)
					}
				</ul>
			</section>
		);
	}
}
