<template>
	<div>
		<label><input type="radio" v-bind:value="radioValue1" v-model="picked">Seoul</label>
		<label><input type="radio" v-bind:value="radioValue2" v-model="picked">Busan</label>
		<label><input type="radio" v-bind:value="radioValue3" v-model="picked">Jeju</label>
		<br>
		<span>picked area : {{ picked }}</span>
	</div>
</template>

<script>
export default{
	data(){
		return{
			picked: '',
			radioValue1: 'Seoul',
			radioValue2: 'Busan',
			radioValue3: 'Jeju',
		};
	},
}
</script>