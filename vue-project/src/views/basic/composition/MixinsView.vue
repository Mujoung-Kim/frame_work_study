<template>
	<!-- binding table로 데이터 연결 -->
	<div></div>
</template>

<script>
import ApiMixin from '../../../api'

export default{
	// 사용할 mixin 파일은 list로 등록
	mixins: [ApiMixin],
	data() {
		return{
			productList: []
		};
	},
	async mounted() {
		// api src는 숨겨서 변수로 받는 방식으로 처리하는게 좋을 듯
		this.productList = await this.$callAPI("https://e3d7d175-e5a0-4115-b0c6-60c02da514e9.mock.pstmn.io/list", 'get')
		console.log(this.productList)
	},
}
</script>