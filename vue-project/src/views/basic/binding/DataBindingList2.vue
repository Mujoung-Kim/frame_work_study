<template>
	<div>
		<table>
			<thead>
				<tr>
					<th>제품명</th>
					<th>가격</th>
					<th>카테고리</th>
					<th>배송료</th>
				</tr>
			</thead>
			<tbody>
				<tr :key="i" v-for="(product, i) in productList">
					<td>{{ product.product_name }}</td>
					<td>{{ product.product_price }}</td>
					<td>{{ product.product_category }}</td>
					<td>{{ product.delevery_price }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default{
	data() {
		return{
			productList: []
		};
	},
	created() {
		this.getList()
	},
	// api data binding
	methods: {
		async getList() {
			this.productList = await this.$api(
				"https://e3d7d175-e5a0-4115-b0c6-60c02da514e9.mock.pstmn.io/list",
				"get")
		}
	}
}
</script>

<style scoped>
table {
	font-family: 1px solid #dddddd;
	border-collapse: collapse;
	width: 100%;
}

td, th {
	border: 1px solid #dddddd;
	text-align: left;
	padding: 8px;
}
</style>