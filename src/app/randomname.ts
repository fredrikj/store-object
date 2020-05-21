const vowels = 'aoueiy';
const consonants = 'bcdfghjklmnpqrstvwxz';

function letter(alphabet: string = consonants) {
  return alphabet[Math.floor(Math.random()*alphabet.length)];
}

export function randomName() {
  return letter() + letter(vowels) + letter() + letter(vowels);
}
