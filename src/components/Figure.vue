<template>
	<svg height="250" width="200">
		<!-- Rod -->
		<line x1="60" y1="20" x2="140" y2="20" />
		<line x1="140" y1="20" x2="140" y2="50" />
		<line x1="60" y1="20" x2="60" y2="230" />
		<line x1="20" y1="230" x2="100" y2="230" />

		<!-- Head -->
		<circle v-if="errors > 0" cx="140" cy="70" r="20" />
		<!-- Body -->
		<line v-if="errors > 1" x1="140" y1="90" x2="140" y2="150" />
		<!-- Arms -->
		<line v-if="errors > 2" x1="140" y1="120" x2="120" y2="100" />
		<line v-if="errors > 3" x1="140" y1="120" x2="160" y2="100" />
		<!-- Legs -->
		<line v-if="errors > 4" x1="140" y1="150" x2="120" y2="180" />
		<line v-if="errors > 5" x1="140" y1="150" x2="160" y2="180" />
	</svg>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'Figure',
		props: {
			errors: {
				type: Number,
				default: 0,
				required: true,
				validator: (v: number) => v >= 0 && v <= 6,
			},
		},
		emits: ['gameover'],
		watch: {
			errors(v: number) {
				if (v === 6) this.$emit('gameover');
			},
		},
	});
</script>

<style scoped lang="scss">
	svg {
		fill: none;
		stroke: #fff;
		stroke-width: 3px;
		stroke-linecap: round;
	}
</style>
