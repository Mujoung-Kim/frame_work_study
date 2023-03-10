import {
	createStore
} from 'vuex'

const store = createStore({
	state() {
		return {
			count: 0,
			cart: [{
				product_id: 1,
				product_name: "Iphone",
				category: "A"
			}]
		}
	},
	getters: {
		cartCount: (state) => {
			return state.cart.length
		}
	},
	mutations: {
		increment(state) {
			state.count++
		}
	},
	// 비동기 처리 로직 수행 가능
	actions: {
		increment(context) {
			context.commit('increment')
		}
	}
})

export default store