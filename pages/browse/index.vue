<template>
  <div class="container">
	  <div class="header" id="header">
		<div class="logo"><a href="/" class="logo__text">Blueground on <span class="mars-circle mars-circle__inverse">Mars</span></a></div>
		<div class="user-details">
			<a href="#" class="profile-link"><fa :icon="['fas', 'user']" /> <span class="profile-link__text">Arthas Menethil</span></a>
		</div>
		<div class="search-container"><input type="text" placeholder="Search.."  v-on:click="adjustInput"></div>
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
		addProperty (e) {
		this.$store.commit('properties/add', e.target.value)
		e.target.value = ''
		},
		...mapMutations({
		toggle: 'properties/toggle'
		}),
		adjustInput: function (input) {
			input.target.setAttribute( "placeholder", "" );
		}
	}
}


</script>

<style>
@media screen and (max-width: 670px) {
	.profile-link__text {
		display: none;
	}
}

.container {
	margin: 0 auto;
	min-height: 100vh;
	justify-content: center;
	text-align: center;
}

.header {
	display: grid;
	grid-template-columns: repeat(auto-fit, 1fr);
	grid-template-rows: repeat(2, minmax(50px, 100px));
}

.header .logo,
.header .user-details,
.header .search-container {
	display:flex;
	align-items: center;
	font-size: 1.7rem;
	padding: 2rem;
}

.header .logo {
	justify-content: flex-start;
}

.header .user-details {
	justify-content: flex-end;
	grid-column: 3 / span 1;
	grid-row: 1 / span 1;
}

.header .logo a,
.header .user-details a {
	text-decoration: none;
	font-weight: bold;
	color: black;
}

.header .search-container {
	grid-column: 1 / span 1;
	grid-row: 2 / span 1;
}

.header .search-container input {
	font-size: 1.5rem;
	width: 80%;
    border-radius: 15px;
    border: 1px #000 solid;
	padding: 5px 5px 5px 35px;
	background: url( '/assets/images/search.png' );
	background-size: fit;
	background-position: 1% center;
	background-repeat: no-repeat;
}

.property-listings {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-gap: 1rem;
	padding: 2rem;
}

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
