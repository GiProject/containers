import { template } from '@babel/core';
import Character from './Character';
import Team from './Team';
import ErrorRepository from './ErrorRepository';

const error = new ErrorRepository();
console.log(error.translate(4));

const character = new Character('Vasya', 'bowman', 100, 100);
const character1 = new Character('Vasya', 'bowman', 100, 100);

const team = new Team();
team.addAll(character, character1);
console.log(team.toArray());
