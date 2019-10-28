<template>
<div class="property-listing">
	<div class="overlay" @mouseover="hover = true" @mouseleave="hover = false" :class='{ "overlay--hover" : hover }'>
		<img :src="image" :alt="this.property.imageAlt" class="property-listing__image">
		<div class="overlay__content" :class='{ "overlay__content--hover" : hover }' >
			<a href="#" class="overlay__book-now" >Book now</a>
			<p class="overlay__property-title">{{this.property.name}}</p>
		</div>
	</div>
	<div class="property-info">
		<div class="property-info__column property-info__column--left">
			<h3 class="property-info__title" >{{this.property.name}} - {{this.property.region}}</h3>
			<p class="property-info__description">{{this.property.shortDescription}}</p>
			<a :href="this.property.cancellationPolicy" class="property-info__cancellation">Cancellation Policy</a>
			<p class="property-info__price">{{this.property.price}} ₪</p>
			<span class="property-info__rating">
				<fa v-for="n in 5" :icon="['fas', 'star']" v-bind:class="{ 'star--black': hasStarsLeft(n), 'star--grey' : !hasStarsLeft(n) }" />
			</span>

		</div>
		<div class="property-info__column property-info__column--right"  v-if="this.property.peopleViewing" >
			<span class="property-info__people-viewing" v-if="this.property.peopleViewing == 1">{{this.property.peopleViewing}} person checking it now</span>
			<span class="property-info__people-viewing" v-else-if="this.property.peopleViewing > 1">{{this.property.peopleViewing}} people checking it now</span>
		</div>
	</div>
</div>
</template>

<script>

export default {
	props: [
		'property'
	],
	data() {
		return {
			hover: false,
			starsLeft : 5,
			image: '../../assets/images/' + this.property.imageName
		}
	},
	methods: {
		hasStarsLeft: function (n) {
			return n <= this.property.rating
		}
	}

}

</script>

<style scoped>
	.property-listing {
		max-width:100%;
		display:grid;
		grid-template-rows: 1fr 0.5fr;
		justify-content: center;
	}

	.property-listing__image {

		max-width:100%;
		border: 2px solid #e3e3e3;
		border-radius: 3%;
		padding: 1rem;
		margin: 1rem 0;
		object-fit: cover;
		grid-area: image;
		grid-row: 1 / -1;
	}

	.property-info {
		display: grid;
		grid-template-columns: repeat( auto-fit, minmax(0px, 1fr));
	}

	.property-info__column--left {
		text-align: left;
	}

	.property-info__price {
		font-weight: bold;
	}

	.property-info__column--right {

		text-align: right;
	}

	.property-info__people-viewing {
		color: red;
		font-style:italic;
	}

	.star--grey {
		color: grey;
	}

	.overlay {
		display: grid;
		grid-gap: 1rem;
		grid-template-areas:
		"image image image"
		" . content ."
		". . .";
	}

	.overlay--hover .property-listing__image {
		opacity: 0.4;
		background: #e3e3e3;
	}

	.overlay__content {
		opacity: 0;
		grid-area: content;
		padding: 1rem;
		display: grid;
		grid-gap: 1rem;
		grid-row: 2;
		justify-content: start;
	}

	.overlay__content--hover {
		opacity: 1;
		z-index: 999;
	}

	.overlay__book-now {
		color: black;
		text-decoration: none;
		border: 1px solid;
		padding: 0.5rem;
	}

	.overlay__book-now:hover {
		background-color: #000000;
		color: white;
	}

	.property-tray {
		position: fixed;
		z-index: 99;
		width: 100vw;
		height: 100vh;
		top: 0;
		bottom: 0;
		-webkit-transform: translateX(-100%);
		transform: translateX(-100%);
		-webkit-transition: -webkit-transform 0.5s cubic-bezier(0.4, 0.0, 0.2, 1);
		transition: -webkit-transform 0.5s cubic-bezier(0.4, 0.0, 0.2, 1);
		transition: transform 0.5s cubic-bezier(0.4, 0.0, 0.2, 1);
		transition: transform 0.5s cubic-bezier(0.4, 0.0, 0.2, 1), -webkit-transform 0.5s cubic-bezier(0.4, 0.0, 0.2, 1);
		display: -ms-grid;
		display: grid;
		grid-template-areas: 'MENU OVERLAY';
		-ms-grid-columns: 15fr 5fr;
		grid-template-columns: 15fr 5fr
	}

	@media (min-width: 30em) {

		.property-tray {
			-ms-grid-columns: 5fr 10fr;
			grid-template-columns: 5fr 10fr;
		}
	}


</style>
