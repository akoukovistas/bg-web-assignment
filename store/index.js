import Vuex from 'vuex'

new Vuex.Store({
	state: () => ({
	  counter: 0
	}),
	mutations: {
	  increment (state) {
		state.counter++
	  }
	},
	modules: {
	  properties: {
		namespaced: true,
		state: () => ({
		  list: []
		}),
		mutations: {
		  add (state, { text }) {
			state.list.push({
			  text,
			  done: false
			})
		  },
		  remove (state, { property }) {
			state.list.splice(state.list.indexOf(property), 1)
		  },
		  toggle (state, { property }) {
			property.done = !property.done
		  }
		}
	  }
	}
  })
