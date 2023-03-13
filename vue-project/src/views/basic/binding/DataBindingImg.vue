<template>
	<div>
		<img v-bind:src="imgSrc" />
	</div>
</template>

<script>
export default{
	data(){
		return{
			imgSrc: 'https://gol.gg/_img/champions_icon/Lucian.png'
		};
	},
}
</script>