import { reactive } from 'vue';

const store = {
	state: reactive({
		guessedWords: new Array<string>(),
	}),

	addWord(word: string) {
		this.state.guessedWords.push(word);
	},
};

export default store;
