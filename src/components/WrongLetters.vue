<template>
	<aside>
		<div>
			<h3>Wrong Letters</h3>
			<span v-for="letter in wrongLetters" :key="letter">{{ letter }},</span>
		</div>
	</aside>
</template>

<script lang="ts" >
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'WrongLetters',
		props: {
			wrongLetters: {
				type: Array,
				required: true,
			},
		},
	});
</script>

<style lang="scss" scoped>
	aside {
		position: absolute;
		top: 20px;
		left: 70%;
		display: flex;
		flex-direction: column;
		text-align: right;

		p {
			margin: 0 0 5px;
		}

		span {
			font-size: 24px;
		}
	}
</style>