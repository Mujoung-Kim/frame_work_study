<template>
	<h1>Full name : {{ fullName }}</h1>
</template>

<script>
export default{
	data() {
		return{
			firstName: 'Hyoungmin',
			lastName: 'Son',
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
	}
}
</script>