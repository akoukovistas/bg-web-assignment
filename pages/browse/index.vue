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
		  <li v-for="property in propertyList">
			  <listing v-bind:property="property"/>
		  </li>
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
	grid-template-columns: repeat( 3, 1fr );
	grid-template-rows: 20% 350px 200px;
}

.login-box {
	border: 1px solid #000;
	grid-column: 2 / span 1;
	grid-row: 2 / span 1;
	display: flex;
	flex-direction: column;

	padding: 1rem 3rem;
	box-shadow: 5px 5px 8px #888888;
}

.login-box__element-container {
	padding: 1rem;
}

.login-box__branding h2 {
	float: left;
}

.login-box__form-fields {
	display: flex;
	flex-direction: column;
}

.login-box__form-fields .form__input {
	border: none;
	border-bottom: 1px solid #000;
	font-size: 1.7rem;
	line-height: 1.7rem;
	margin: 1rem 0;
}

.login-box__form-fields .form__input-label {
	text-align: left;
	margin-top: -1rem;
	display:none;
}

.login-box__form-actions .form__submit {
	float: right;
	background: lightgrey;
	border:none;
	color: grey;
	padding: 1rem;
	font-size: inherit;
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
