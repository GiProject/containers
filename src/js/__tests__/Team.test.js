import Team from '../Team';
import Character from '../Character';

test('class team test', () => {
  let team = new Team();
  const person1 = new Character('Vasya', 'bowman', 100, 100);
  const person2 = new Character('Vasya', 'bowman', 100, 100);

  team.add(person1);
  expect(team.members).toEqual(new Set([person1]));

  team.add(person1);
  expect(team.members).toEqual(new Set([person1]));

  team.add(person2);
  expect(team.members).toEqual(new Set([person1, person2]));

  team = new Team();
  team.addAll(person1, person2);
  expect(team.members).toEqual(new Set([person1, person2]));

  expect(team.toArray()).toEqual([person1, person2]);
});
