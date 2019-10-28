export const state = () => ({
	list: [
		{
			name: "Property 1",
			region: "Kadingir",
			peopleViewing: 2,
			shortDescription: "Property short description",
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
			cancellationPolicy: "#",
			price: 599,
			rating: 3,
			imageName: "property1-w400.jpg",
			imageAlt: "Property 1 Image",
			amenities: "Oxygen, Water, Bathroom, Earth view, Potatoes",
			availability: [ 2081, 2082, 2084, 2085, 2087, 2088]
		},
		{
			name: "Property 2",
			region: "Kadingir",
			peopleViewing: 0,
			shortDescription: "Property short description",
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
			cancellationPolicy: "#",
			price: 1599,
			rating: 5,
			imageName: "property2-w400.jpg",
			imageAlt: "Property 2 Image",
			amenities: "Oxygen, Water, Bathroom, Earth view, Potatoes",
			availability: [ 2081, 2082, 2084, 2085, 2087, 2088]
		},
		{
			name: "Property 3",
			region: "Cydonia",
			peopleViewing: 4,
			shortDescription: "Property short description",
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
			cancellationPolicy: "#",
			price: 4500,
			rating: 5,
			imageName: "property3-w400.jpg",
			imageAlt: "Property 3 Image",
			amenities: "Oxygen, Water, Bathroom, Potatoes",
			availability: [ 2081, 2082, 2084, 2085, 2087, 2088]
		},
		{
			name: "Property 4",
			region: "Foundry",
			peopleViewing: 0,
			shortDescription: "Property short description",
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
			cancellationPolicy: "#",
			price: 150,
			rating: 1,
			imageName: "property4-w400.jpg",
			imageAlt: "Property 4 Image",
			amenities: "Potatoes",
			availability: [ 2081, 2082, 2084, 2085, 2087, 2088]
		},
		{
			name: "Property 5",
			region: "Kadingir",
			peopleViewing: 0,
			shortDescription: "Property short description",
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
			cancellationPolicy: "#",
			price: 599,
			rating: 3,
			imageName: "property5-w400.jpg",
			imageAlt: "Property 5 Image",
			amenities: "Oxygen, Water, Bathroom, Earth view, Potatoes",
			availability: [ 2081, 2082, 2083, 2085, 2087, 2088]
		},
		{
			name: "Property 6",
			region: "Kadingir",
			peopleViewing: 1,
			shortDescription: "Property short description",
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
			cancellationPolicy: "#",
			price: 960,
			rating: 4,
			imageName: "property6-w400.jpg",
			imageAlt: "Property 6 Image",
			amenities: "Oxygen, Water, Bathroom, Earth view, Potatoes",
			availability: [ 2081, 2082, 2084, 2085, 2087, 2088]
		},
	]
  })

  export const mutations = {
	add (state, text) {
	  state.list.push({
		text,
		done: false
	  })
	},
	remove (state, { property }) {
	  state.list.splice(state.list.indexOf(property), 1)
	},
	toggle (state, property) {
	  property.done = !property.done
	}
  }
