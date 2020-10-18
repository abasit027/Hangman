<template>
	<section>
		<span v-for="o in letters" :key="o.i">{{ correctLetters.includes(o.letter) ? o.letter : '' }}</span>
	</section>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'Word',
		props: {
			word: {
				type: String,
				required: true,
			},
			correctLetters: {
				type: Array,
				required: true,
			},
		},
		emits: ['gameover'],
		computed: {
			letters() {
				const letters: Array<{ letter: string; i: number }> = [];

				this.word.split('').map((letter, i) => letters.push({ letter, i }));

				return letters;
			},
		},
		watch: {
			correctLetters(v: Array<string>) {
				let flag = true;

				this.letters.forEach(o => {
					if (!v.includes(o.letter)) flag = false;
				});

				if (flag) this.$emit('gameover');
			},
		},
	});
</script>

<style lang="scss" scoped>
	span {
		border-bottom: 3px solid #2980b9;
		display: inline-flex;
		font-size: 30px;
		align-items: center;
		justify-content: center;
		margin: 0 3px;
		height: 50px;
		width: 20px;
	}
</style>