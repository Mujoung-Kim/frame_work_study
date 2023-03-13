<template>
	<div class="container" :class="{active: activeClass, 'text-red' : errorClass}" >
		class Binding
	</div>
</template>

<script>
export default{
	data(){
		return{
			activeClass: 'active',
			errorClass: 'text-red'
		};
	},
}
</script>

<style>
.container {
	width: 100%;
	height: 200px;
}

.active {
	background-color: yellow;
	font-weight: bold;
}

.text-red {
	color: red;
}
</style>