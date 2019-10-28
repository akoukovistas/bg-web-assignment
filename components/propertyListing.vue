<template>
<div class="property-listing">
	<img :src="image" :alt="this.property.imageAlt" class="property-listing_image">
	<div class="property-info">
		<div class="property-info__column property-info__column--left">
			<h3 class="property-info__title">{{this.property.name}}</h3>
			<p class="property-info__description">{{this.property.description}}</p>
			<a :href="this.property.cancellationPolicy" class="property-info__cancellation">Cancellation Policy</a>
			<p class="property-info__price">{{this.property.price}}</p>
			<span class="property-info__rating">{{this.property.rating}}</span>
		</div>
		<div class="property-info__column property-info__column--right">
			<span class="property-info__people-viewing" v-if="this.property.peopleViewing == 1">{{this.property.peopleViewing}} other person is checking it now</span>
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
			image: '../../assets/images/' + this.property.imageName
		}
	}

}

</script>
