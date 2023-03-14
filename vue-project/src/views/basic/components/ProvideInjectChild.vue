<template>
	<div></div>
</template>

<script>
export default{
	inject: ['itemsLength'],
	mounted() {
		console.log(this.itemsLength)
	},
}
</script>