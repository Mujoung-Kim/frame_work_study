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
	data(){
		return{
			productList: [
				{'product_name' : '기계식 키보드', 'product_price' : 25000, 'product_category' : 'notebook/tablet', 'delevery_price' : 3000},
				{'product_name' : '무선마우스', 'product_price' : 12000, 'product_category' : 'notebook/tablet', 'delevery_price' : 3000},
				{'product_name' : '아이패드', 'product_price' : 720000, 'product_category' : 'notebook/tablet', 'delevery_price' : 3000},
				{'product_name' : '태블릿거치대', 'product_price' : 32000, 'product_category' : 'notebook/tablet', 'delevery_price' : 3000},
			]
		};
	},
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