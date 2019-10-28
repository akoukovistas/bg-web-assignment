<template>
  <div class="container">
	  <div class="header" id="header">
		<div class="logo"><a href="/" class="logo__text">Blueground on <span class="mars-circle mars-circle__inverse">Mars</span></a></div>
		<div class="user-details">
			<a href="#" class="profile-link"><span class="profile-link__icon"></span><span class="profile-link__text">Arthas Menethil</span></a>
		</div>
		<div class="search-container"></div>
	  </div>
	  <div class="property-listings">

			  <listing v-for="property in propertyList" v-bind:property="property"/>

	  </div>
  </div>
</template>

<script>

import listing from '~/components/propertyListing.vue'
import { mapMutations } from 'vuex'


export default {
	components: {
    	listing
	},
	data() {
		return {
			propertyList: this.$store.state.properties.list
		}
	},
	computed: {
	},
	methods: {
		addTodo (e) {
      this.$store.commit('properties/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'properties/toggle'
    })
	}
}


</script>

<style>

.container {
	margin: 0 auto;
	min-height: 100vh;
	justify-content: center;
	text-align: center;
	display: grid;
}

.
.mars-circle {
	border-radius: 100%;
	padding: 1.2rem 0.5rem;
	text-align: center;
}

.mars-circle__inverse {
	background-color: #fff;
	color: #000;
	border: 2px solid #000;
}

</style>
