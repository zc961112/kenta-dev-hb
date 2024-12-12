<template>
	<div class="page">
		<NewHeader />
		<main>
		<div class="banner">

		</div>
		</main>
	</div>
</template>

<script>
	export default {
		name: 'home',
		data() {
			return {

			}

		},
		methods: {

		}
	}
</script>
<style lang="scss" scoped>
	.banner {
		background: url('~assets/images/banner.png') no-repeat;
		background-size: 100% 100%;
		display: flex;
		height: 30em;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		color: #fefefe;
	}
</style>
