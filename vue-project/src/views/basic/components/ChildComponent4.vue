<template>
	<div></div>
</template>

<script>
export default{
	data() {
		return{
			msg: 'Child component to message'
		};
	},
	mounted() {
		this.$emit('send-message', this.msg)
	},
}
</script>