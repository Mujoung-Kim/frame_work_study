<template>
	<button type="button" @click="childfunc" ref="btn">click</button>
</template>

<script>
export default{
	methods: {
		childfunc() {
			console.log('parent components to event!')
		}
	}
}
</script>