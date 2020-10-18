<template>
	<header>
		<h1>Hangman</h1>
		<p>Find the hidden word enter a letter</p>
	</header>

	<main @gameover="gameOver">
		<Figure :errors="wrongLetters.length" @gameover="gameOver('lost')" />

		<WrongLetters :wrongLetters="wrongLetters" />

		<Word :word="word" :correctLetters="correctLetters" @gameover="gameOver('won')" />
	</main>

	<Notification :show="notification" />

	<Popup :status="status" :word="word" @playagain="play" v-show="popup" />
</template>

<script lang="ts">
	import { defineComponent, ref, onBeforeMount, onMounted, onUnmounted } from 'vue';

	import Figure from '@/components/Figure.vue';
	import Word from '@/components/Word.vue';
	import WrongLetters from '@/components/WrongLetters.vue';
	import Notification from '@/components/Notification.vue';
	import Popup from '@/components/Popup.vue';

	import randomWords from 'random-words';

	export default defineComponent({
		name: 'Home',
		components: {
			Figure,
			Word,
			WrongLetters,
			Notification,
			Popup,
		},
		setup() {
			const word = ref('');

			const correctLetters = ref<Array<string>>([]);

			const wrongLetters = ref<Array<string>>([]);

			const notification = ref(false);
			const popup = ref(false);
			const status = ref('');

			const playable = ref(true);

			const play = (): void => {
				word.value = randomWords();
				correctLetters.value = [];
				wrongLetters.value = [];
				status.value = '';
				playable.value = true;
				popup.value = false;
			};

			const gameOver = (result: string): void => {
				playable.value = false;
				popup.value = true;

				status.value = result;
			};

			const showNotification = (): void => {
				notification.value = true;
				setTimeout(() => (notification.value = false), 1000);
			};

			const keyDown = (e: KeyboardEvent): void => {
				const { keyCode, key } = e;

				if (playable.value && keyCode >= 60 && keyCode <= 90) {
					const Key = key.toLowerCase();

					if (word.value.includes(Key))
						!correctLetters.value.includes(Key)
							? (correctLetters.value = [Key, ...correctLetters.value])
							: showNotification();
					else
						!wrongLetters.value.includes(Key) ? (wrongLetters.value = [Key, ...wrongLetters.value]) : showNotification();
				}
			};

			onBeforeMount(() => window.addEventListener('keydown', keyDown));

			onMounted(() => play());

			onUnmounted(() => window.removeEventListener('keydown', keyDown));

			return {
				word,
				correctLetters,
				wrongLetters,
				notification,
				popup,
				status,
				playable,
				play,
				gameOver,
			};
		},
	});
</script>
