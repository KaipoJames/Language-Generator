class Language {
  constructor(name, alphabet, vowels, consonants, words = [], rules = []) {
    this.name = name;
    this.alphabet = alphabet;
    this.vowels = vowels;
    this.consonants = consonants;
    this.words = words;
    this.rules = rules;
  }
}
