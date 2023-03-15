<template>
	<CompositionApiInject/>
</template>

<script>
import {provide} from 'vue'
import CompositionApiInject from './CompositionApiInject'

export default{
	components: {
		CompositionApiInject
	}, 
	setup() {
		// provide function으로 전달할 key, value 값 설정
		provide('title', 'Vue.js Project')
	},
}
</script>