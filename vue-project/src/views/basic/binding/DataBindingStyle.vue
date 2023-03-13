<template>
	<div :style="styleObject">inline style binding</div>
</template>

<script>
export default{
	data(){
		return{
			styleObject: {
				color: 'red',
				fontSize: '20px'
			}
		};
	},
}
</script>