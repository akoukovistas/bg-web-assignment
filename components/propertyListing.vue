<template>
<div class="property-listing">
	<img :src="image" :alt="this.property.imageAlt" class="property-listing_image">
	<div class="property-info">
		<div class="property-info__column property-info__column--left">
			<h3 class="property-info__title">{{this.property.name}} - {{this.property.region}}</h3>
			<p class="property-info__description">{{this.property.description}}</p>
			<a :href="this.property.cancellationPolicy" class="property-info__cancellation">Cancellation Policy</a>
			<p class="property-info__price">{{this.property.price}} ₪</p>
			<span class="property-info__rating">
				<fa v-for="n in 5" :icon="['fas', 'star']" v-bind:class="{ 'star--black': hasStarsLeft(n), 'star--grey' : !hasStarsLeft(n) }" />
			</span>

		</div>
		<div class="property-info__column property-info__column--right">
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
		display:grid;
		grid-template-rows: 1fr 0.5fr;
		justify-content: center;
	}

	.property-listing_image {
		border: 2px solid #e3e3e3;
		border-radius: 3%;
		padding: 1rem;
		margin: 1rem 0;
	}

	.property-info {
		display: grid;
		grid-template-columns: repeat( 2, 1fr );
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


</style>
