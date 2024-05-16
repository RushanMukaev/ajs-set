export default class Team {
	constructor() {
		this.members = new Set();
	}
	add(character) {
		if(this.members.has(character)) {
			throw new Error("Ошибка");
		}
		this.members.add(character)
	}

	addAll(...character) {
		character.forEach(
			character => this.members.add(character)
		)
	}

	toArray() {
		return Array.from(this.members)
	}
}