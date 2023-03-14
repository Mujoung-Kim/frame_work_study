<template>
	<div>
		<child-component @send-message='sendMessage' ref="child_component"/>
		<button type="button" @click="changeChildData">Change Child Data</button>
	</div>
</template>

<script>
import ChildComponent from './ChildComponent3.vue'

export default{
	components: {ChildComponent}, 
	methods: {
		changeChildData() {
			this.$refs.child_component.msg = "Parent component to change data"
		}
	},
}
</script>