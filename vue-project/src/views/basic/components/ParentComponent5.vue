<template>
	<div>
		<button type="button" @click="checkChild">Child component data search</button>
		<child-component ref="child_component"/>
	</div>
</template>

<script>
import ChildComponent from './ChildComponent5.vue'

export default{
	components: {ChildComponent}, 
	// observer
	computed: {
		msg() {
			return this.$refs.child_component.msg
		}
	},
	methods: {
		checkChild() {
			alert(this.msg)
		}
	}
}
</script>