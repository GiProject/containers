export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(person) {
    this.members.add(person);
  }

  addAll(...persons) {
    for (const person of persons) {
      this.members.add(person);
    }
  }

  toArray() {
    return Array.from(this.members.values());
  }
}
