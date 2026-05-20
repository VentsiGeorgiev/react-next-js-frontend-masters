import { beforeEach, describe, it, expect, vi } from 'vitest';
import { Character } from './character.js';

vi.mock('./roll-dice.js', () => ({
  rollDice: () => 10,
}));

describe('Character', () => {
  let character: Character;
  let characterDetails: { firstName: string; lastName: string; role: string };

  beforeEach(() => {
    characterDetails = {
      firstName: 'Alice',
      lastName: 'Smith',
      role: 'Wizard',
    };
    character = new Character(
      characterDetails.firstName,
      characterDetails.lastName,
      characterDetails.role,
    );
  });

  it('should create a character with a first name, last name, and role', () => {
    expect(character).toEqual({
      id: expect.stringContaining('person-'),
      firstName: characterDetails.firstName,
      lastName: characterDetails.lastName,
      role: characterDetails.role,
      level: 1,
      createdAt: expect.any(Date),
      lastModified: expect.any(Date),
      charisma: 10,
      constitution: 10,
      dexterity: 10,
      intelligence: 10,
      strength: 10,
      wisdom: 10,
    });
  });

  it('should allow you to increase the level', () => {
    character.levelUp();
    expect(character.level).toBe(2);
  });

  it('should update the last modified date when leveling up', () => {
    const oldLastModified = character.lastModified;
    character.levelUp();
    expect(character.lastModified).not.toBe(oldLastModified);
  });
});
