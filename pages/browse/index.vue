<template>
	<div class="container">
		<div class="header" id="header" >
			<div class="logo"><a href="/" class="logo__text">Blueground on <span class="mars-circle mars-circle__inverse">Mars</span></a></div>
			<div class="user-details">
			<a href="#" class="profile-link" @click="openTray" ><fa :icon="['fas', 'user']" /> <span class="profile-link__text">Arthas Menethil</span></a>
		</div>
			<div class="search-container"><input type="text" placeholder="Search.."  v-on:click="adjustInput"></div>
		</div>
		<div class="property-listings" @click="closeTray">
			<listing  v-for="property in propertyList" v-bind:property="property"/>
		</div>
		<div id="propertyTray" class="property-tray" :class="{ 'property-tray--open' : propertyTrayOpen }" ref="propertyTray">

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
			propertyList: this.$store.state.properties.list,
			propertyTrayOpen: false
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
		},
		openTray: function () {
			console.log(this.$refs);
			this.$refs.propertyTray.style.width = "50%";
			this.propertyTrayOpen = true;
		},
		closeTray: function () {
			this.$refs.propertyTray.style.width = "0px";
			this.propertyTrayOpen = false;
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

.property-tray {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #e3e3e3;
  overflow-x: hidden;
  transition: 0.5s;
  box-shadow: -5px 0px 10px 1px #888888;
}

.property-tray .property-tray__close {
  position: absolute;
  top: 0;
  left: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .property-tray {padding-top: 15px;}
}

</style>
