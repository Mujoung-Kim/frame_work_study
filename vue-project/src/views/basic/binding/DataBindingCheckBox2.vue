<template>
	<div>
		<label><input type="checkbox" value='Seoul' v-model="checked">Seoul</label>
		<label><input type="checkbox" value='Busan' v-model="checked">Busan</label>
		<label><input type="checkbox" value='Jeju' v-model="checked">Jeju</label>
		<br>
		<span>checked area : {{ checked }}</span>
	</div>
</template>

<script>
export default{
	data(){
		return{
			checked: [],
		};
	},
}
</script>