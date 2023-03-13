<template>
	<div>
		<h1>Full name : {{ fullName }}</h1>
		<button type="button" @click="changeName">Change</button>
	</div>
</template>

<script>
export default{
	data() {
		return{
			firstName: 'Namgil',
			lastName: 'Kim',
			fullName: ''
		};
	},
	watch: {
		firstName() {
			this.fullName = this.firstName + '-' + this.lastName
		},
		lastName() {
			this.fullName = this.firstName + '-' + this.lastName
		}
	},
	methods: {
		changeName() {
			this.firstName = 'Minjae'
		}
	}
}
</script>