<template>
	<div>
		<br>
		<button type="button" @click="childfunc" ref="btn">Child component data change</button>
	</div>
</template>

<script>
export default{
	data() {
		return{
			msg: 'message'
		};
	},
	methods: {
		childfunc() {
			this.msg = 'change message'
		}
	}
}
</script>