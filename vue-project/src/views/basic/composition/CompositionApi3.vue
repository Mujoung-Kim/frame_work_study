<template>
	<div>
		<h2>CompositionApi3</h2>
		<div>
			<input type="text" v-model="num1"/>
			<span> + </span>
			<input type="text" v-model="num2"/>
			<span> = </span>
			<span>{{ result }}</span>
		</div>
	</div>
</template>

<script>
import {reactive, computed, toRefs} from 'vue'

function plusCalculator() {
	let state = reactive({
		num1: 0,
		num2: 0,
		result: computed(() => parseInt(state.num1) + parseInt(state.num2))
	})

	// 반응형으로 선언된 변수를 외부 함수에서 처리할 때 사용
	return toRefs(state)
}

export default{
	name: 'compositionApi3',
	setup() {
		let {num1, num2, result} = plusCalculator()

		return {
			num1, num2, result
		}
	}
}
</script>