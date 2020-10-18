<template>
	<div id="popup">
		<h3 v-if="status == 'won'">You Won 🎉</h3>
		<h3 v-if="status == 'lost'">You Lost 😢</h3>
		<h4 v-if="status == 'lost'">
			The word is: <span>{{ word }}</span>
		</h4>
		<button @click="playAgain">Play Again</button>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'Popup',
		props: {
			show: {
				type: Boolean,
				required: false,
			},
			status: {
				type: String,
				required: true,
			},
			word: {
				type: String,
				required: true,
			},
		},
		emits: ['playagain'],
		methods: {
			playAgain() {
				this.$emit('playagain');
			},
		},
	});
</script>

<style lang="scss" scoped>
	div {
		position: absolute;
		top: 25%;
		left: 35%;
		background-color: #191919;
		width: 400px;
		height: 300px;
		border-radius: 20px;
		display: grid;
		place-items: center;
		place-content: center;
		transition: 0.5s all ease-in-out;

		h3 {
			font-size: 30px;
			transform: translateY(-20px);
		}

		h4 {
			font-size: 25px;
			transform: translateY(-30px);

			span {
				font-weight: 600;
				color: #00ff7f;
			}
		}

		button {
			font-family: inherit;
			font-size: 20px;
			width: 120px;
			height: 35px;
			color: #00ff7f;
			background-color: transparent;
			border: 2px solid #00ff7f;
			border-radius: 20px;
			cursor: pointer;
			font-weight: 450;

			&:hover,
			&:focus {
				color: #191919;
				background-color: #00ff7f;
			}

			&:focus {
				outline: none;
			}
		}
	}
</style>