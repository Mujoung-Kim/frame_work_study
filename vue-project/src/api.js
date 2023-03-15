import axios from 'axios'

export default {
	// mounted와 unmounted에서 time을 이용하여 
	// 이용자가 해당 페이지에 머문 시간 계산가능
	mounted() {
		console.log('Mixin mounted')
		// console.timeLog('')
	},
	unmounted() {
		console.log('Mixin unmounted')
	},
	methods: {
		async $callAPI(url, method, data) {
			return (await axios({
				method: method,
				url,
				data
			}).catch(e => {
				console.log(e)
			})).data
		}
	}
}