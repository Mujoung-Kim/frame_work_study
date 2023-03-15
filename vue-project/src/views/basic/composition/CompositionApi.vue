<template>
	<div>
		<h2>CompositionApi</h2>
		<div>
			<input type="text" v-model="state.num1" @keyup="plusNumbers"/>
			<span> + </span>
			<input type="text" v-model="state.num2" @keyup="plusNumbers"/>
			<span> = </span>
			<span>{{ state.result }}</span>
		</div>
	</div>
</template>

<script>
import {reactive} from 'vue'

export default{
	name: 'compositionApi',
	setup() {
		// 실시간으로 데이터가 변경되면 실행
		let state = reactive({
			num1: 0,
			num2: 0,
			result: 0
		})

		function plusNumbers() {
			state.result = parseInt(state.num1) + parseInt(state.num2)
		}

		// reacitve로 선언된 state와 plusNumbers 함수를 반환한다.
		return {
			state,
			plusNumbers
		}
	}
}
</script>