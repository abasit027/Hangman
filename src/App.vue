<template>
	<nav>
		<router-link to="/">Home</router-link> |
		<router-link to="/guessedWords">Guessed Words</router-link>
	</nav>
	<router-view />
</template>

<style lang="scss">
	* {
		box-sizing: border-box;
	}

	body {
		margin: 0;
		padding: 50px 0 0 0;
		background-color: #2b2b6d;
		color: #ffffff;
		font-family: Tahoma;

		display: grid;
		place-content: center;
		place-items: center;
		text-align: center;
	}

	h1,
	h2,
	h3,
	h4 {
		font-weight: 500;
	}

	main {
		position: relative;
		width: 800px;
	}

	nav {
		padding: 30px;

		a {
			font-weight: bold;
			color: inherit;
			text-decoration: none;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>
