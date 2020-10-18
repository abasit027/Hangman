<template>
	<div id="notification" :class="{ show: show }">
		<p>You have already enterd this letter</p>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'Notification',
		props: {
			show: {
				type: Boolean,
				required: true,
			},
		},
	});
</script>

<style lang="scss" scoped >
	div {
		position: absolute;
		opacity: 0;
		top: -10%;
		left: 40%;
		background-color: #333;
		width: 300px;
		border-radius: 30px;

		transition: 0.2s all ease-in-out;

		&.show {
			opacity: 1;
			top: 1%;
		}
	}
</style>