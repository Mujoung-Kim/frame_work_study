<template>
	<child-component @send-message='sendMessage' ref="child_component"></child-component>
</template>

<script>
import ChildComponent from './ChildComponent2.vue'

export default{
	components: {ChildComponent}, 
	mounted() {
		this.$refs.child_component.callFromParent()
	},
}
</script>