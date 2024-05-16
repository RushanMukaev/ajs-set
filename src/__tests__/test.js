import Team from '../js/app';

const characters = [
	{
		name: "player1",
		type: "bot"
	},
	{
		name: "player2",
		type: "bot"
	},
	{
		name: "player3",
		type: "bot"
	}
]

test('Добавление персонажа в команду', () => {
    const team = new Team();
	team.add(characters[0]);
	expect(team.members.has(characters[0])).toBe(true);
});

test('Добавление персонажа в команду который уже есть', () => {
    expect(() => {
		const team = new Team();
		team.add(characters[0]);
		team.add(characters[0]);
	}).toThrow('Ошибка');
});

test('добавление нескольких персонажей в команду', () => {
    const team = new Team();
	team.addAll(...characters);
	expect(team.members.size).toBe(3);
});

test('формирования массива игроков команды', () => {
    const team = new Team();
	team.addAll(...characters);
	expect(team.toArray()).toEqual(characters);
});