<template>
	<header>
		<h1>Hangman</h1>
		<p>Words correctly guessed</p>
	</header>

	<main>
		<ul>
			<li v-for="word in store.guessedWords" :key="word">{{ word }}</li>
		</ul>
	</main>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	import store from '@/store';

	export default defineComponent({
		name: 'GuessedWords',
		data() {
			return {
				store: store.state,
			};
		},
	});
</script>

<style lang="scss" scoped>
	li {
		list-style-type: none;
		font-weight: 600;
	}
</style>
