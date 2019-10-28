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
			<img src='/assets/images/property1-w400.jpg' alt="Property Image" class="property-tray__image">
			<div class="property-tray__property-info property-info">
				<h3 class="property-info__title property-info__item">Title - Region</h3>
				<span class="property-info__price property-info__item">599 ₪</span>
				<span class="property-info__rating property-info__item"><fa v-for="n in 5" :icon="['fas', 'star']" /></span>
				<div class="property-info__description property-info__item">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
					 velit esse cillum dolore eu fugiat nulla pariatur.</div>
				<div class="property-info__amenities property-info__item"><span class="text--bold">Amenities:</span><p>Oxygen, Water, Bathroom, Potatoes</p></div>
				<div class="property-info__availability property-info__item">
					<div v-for="n in 8" class="property-info__availability__item" :class="{'property-info__availability__item--disabled' : n == 2 || n == 4, 'property-info__availability__item--selected' : n == 1 }">{{2080 + n}}</div>
				</div>
				<div class="property-info__book property-info__item">		<a href="#" class="">Book</a></div>
			</div>
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
			this.$refs.propertyTray.style.width = "60%";
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
  max-width:100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #e3e3e3;
  overflow-x: hidden;
  transition: 0.5s;
  box-shadow: -5px 0px 10px 1px #888888;

  display: grid;
  grid-template-rows: 0.5fr 1fr;
}

.property-tray__image {
	object-fit: cover;
	height:100%;
	max-width: 100%;
	grid-row: 1 / span 1;
	grid-column: 1 / -1;
}

.property-tray__property-info {
	grid-row: 2 / span 1;
	grid-column: 1 / -1;
	max-width: 100%;

	display: grid;
	padding: 1rem;
	grid-gap: 1rem;

	grid-template-rows: 5% 5% 15% 5% 15% 5%;
	grid-template-columns: repeat(minmax(2,3), minmax(50px, 1fr));
	grid-template-areas:
		"title  . price"
		"rating  . ."
		"description  description description"
		'amenities amenities .'
		'availability availability availability'
		'. . book';
}

.property-tray__property-info .property-info__item {
	display: flex;
	align-items: center;
}

.property-tray .property-info__title {
	grid-area: title;
	justify-content: flex-start;

}

.property-tray .property-info__price {
	grid-area: price;
	justify-content: center;
	border: 1px solid grey;
	background-color: grey;
	color: white;
	font-size: 1.17rem;
}

.property-tray .property-info__rating {
	grid-area: rating;
}

.property-tray .property-info__description {
	grid-area: description;
	justify-content: flex-start;
	text-align: left;
}

.property-tray .property-info__amenities {
	grid-area: amenities;
}
.property-tray .property-info__amenities p {
	padding-left: 0.4rem;
}

.property-tray .property-info__availability {
	grid-area: availability;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(12%, 20%));
	grid-gap: 1rem;
}

.property-info__availability__item {
	border-radius: 10px;
	font-size: 1.2rem;
	border: 1px #000 solid;
	background-color: #A5A5A5;
	padding: 5px 15px 5px 15px;
	font-weight: bold;
	cursor: pointer;
}

.property-info__availability__item:hover:not(.property-info__availability__item--disabled) {
	opacity: 0.7;
}
.property-info__availability__item--selected {
	background-color: #525251;
	color: white;

}

.property-info__availability__item--disabled {
	background-color: #D3CFCF;
	border-color: #525251;
	color: #A5A5A5;
	cursor: not-allowed;

}

.property-tray .property-info__book {
	grid-area: book;
	align-items: flex-end;
	justify-content: center;
}

.property-tray .property-info__book a {

	background-color: #353131;
	color: #ffffff;
	text-decoration: none;
	font-size: 1.5rem;
	padding: 1rem 2rem;
}

.property-tray .property-info__book a:hover {
	opacity: 0.7;
}

.property-tray .property-tray__close {
  position: absolute;
  top: 0;
  left: 25px;
  font-size: 36px;
  margin-left: 50px;
}

.text--italic {
	font-style: italic;
}

.text--bold {
	font-weight: bold;
}

@media screen and (max-height: 450px) {
  .property-tray {padding-top: 15px;}
}

</style>
