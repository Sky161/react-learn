import React from "react";
import NoteAdd from "./comp-add";
import NoteList from "./comp-list";

export class NoteApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			note: [
				{
					text: 'Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted. Sportsmen certainty prevailed suspected am as. Add stairs admire all answer the nearer yet length. Advantages prosperous remarkably my inhabiting so reasonably be if. Too any appearance announcing impossible one. Out mrs means heart ham tears shall power every.',
					color: "#fff"
				},
				{
					text: 'Suppose end get boy warrant general natural. Delightful met sufficient projection ask. Decisively everything principles if preference do impression of. Preserved oh so difficult repulsive on in household. In what do miss time be. Valley as be appear cannot so by. Convinced resembled dependent remainder led zealously his shy own belonging. Always length letter adieus add number moment she. Promise few compass six several old offices removal parties fat. Concluded rapturous it intention perfectly daughters is as.',
					color: "#F64747"
				},
				{
					text: 'Open know age use whom him than lady was. On lasted uneasy exeter my itself effect spirit. At design he vanity at cousin longer looked ye. Design praise me father an favour. As greatly replied it windows of an minuter behaved passage. Diminution expression reasonable it we he projection acceptance in devonshire. Perpetual it described at he applauded.',
					color: "#AEA8D3"
				},
				{
					text: 'Dwelling and speedily ignorant any steepest. Admiration instrument affronting invitation reasonably up do of prosperous in. Shy saw declared age debating ecstatic man. Call in so want pure rank am dear were. Remarkably to continuing in surrounded diminution on. In unfeeling existence objection immediate repulsive on he in. Imprudence comparison uncommonly me he difficulty diminution resolution. Likewise proposal differed scarcely dwelling as on raillery. September few dependent extremity own continued and ten prevailed attending. Early to weeks we could.',
					color: "#52B3D9"
				},
				{
					text: 'Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted. Sportsmen certainty prevailed suspected am as. Add stairs admire all answer the nearer yet length. Advantages prosperous remarkably my inhabiting so reasonably be if. Too any appearance announcing impossible one. Out mrs means heart ham tears shall power every.',
					color: "#fff"
				},
				{
					text: 'Open know age use whom him than lady was. On lasted uneasy exeter my itself effect spirit. At design he vanity at cousin longer looked ye. Design praise me father an favour. As greatly replied it windows of an minuter behaved passage. Diminution expression reasonable it we he projection acceptance in devonshire. Perpetual it described at he applauded.',
					color: "#AEA8D3"
				},
				{
					text: 'Dwelling and speedily ignorant any steepest. Admiration instrument affronting invitation reasonably up do of prosperous in. Shy saw declared age debating ecstatic man. Call in so want pure rank am dear were. Remarkably to continuing in surrounded diminution on. In unfeeling existence objection immediate repulsive on he in. Imprudence comparison uncommonly me he difficulty diminution resolution. Likewise proposal differed scarcely dwelling as on raillery. September few dependent extremity own continued and ten prevailed attending. Early to weeks we could.',
					color: "#52B3D9"
				},
				{
					text: 'Suppose end get boy warrant general natural. Delightful met sufficient projection ask. Decisively everything principles if preference do impression of. Preserved oh so difficult repulsive on in household. In what do miss time be. Valley as be appear cannot so by. Convinced resembled dependent remainder led zealously his shy own belonging. Always length letter adieus add number moment she. Promise few compass six several old offices removal parties fat. Concluded rapturous it intention perfectly daughters is as.',
					color: "#F64747"
				}
			]
		}
	}

	handelAddNote(newNote) {
		let copyNote = this.state.note.slice();
		copyNote.unshift(newNote);
		this.setState({note: copyNote});
	}

	render() {
		return(
			<section className="note-app">
				<div className="page-header container-fluid">
					<h1>Список заметок</h1>
				</div>
				<NoteAdd onNoteAdd={this.handelAddNote.bind(this)}/>
				<NoteList note={ this.state.note }/>
			</section>
		);
	}
}
