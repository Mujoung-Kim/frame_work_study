<template>
	<h1>{{ title }}</h1>
</template>

<script>
import {inject} from 'vue'

export default{
	setup() {
		// inject를 이용해 provide에서 정의한 key로 데이터 전달
		const title = inject('title')

		return {title}
	},
}
</script>