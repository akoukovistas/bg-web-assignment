export const state = () => ({
	list: [
		{
			name: "Property 1",
			region: "Kadingir",
			peopleViewing: 2,
			description: "Property Description",
			cancellationPolicy: "#",
			price: 599,
			rating: 3,
			imageName: "property1-w400.jpg",
			imageAlt: "Property 1 Image"
		},
		{
			name: "Property 2",
			region: "Kadingir",
			peopleViewing: 0,
			description: "Property Description",
			cancellationPolicy: "#",
			price: 1599,
			rating: 5,
			imageName: "property2-w400.jpg",
			imageAlt: "Property 2 Image"
		},
		{
			name: "Property 3",
			region: "Cydonia",
			peopleViewing: 4,
			description: "Property Description",
			cancellationPolicy: "#",
			price: 4500,
			rating: 5,
			imageName: "property3-w400.jpg",
			imageAlt: "Property 3 Image"
		},
		{
			name: "Property 4",
			region: "Foundry",
			peopleViewing: 0,
			description: "Property Description",
			cancellationPolicy: "#",
			price: 150,
			rating: 1,
			imageName: "property4-w400.jpg",
			imageAlt: "Property 4 Image"
		},
		{
			name: "Property 5",
			region: "Kadingir",
			peopleViewing: 0,
			description: "Property Description",
			cancellationPolicy: "#",
			price: 599,
			rating: 3,
			imageName: "property5-w400.jpg",
			imageAlt: "Property 5 Image"
		},
		{
			name: "Property 6",
			region: "Kadingir",
			peopleViewing: 1,
			description: "Property Description",
			cancellationPolicy: "#",
			price: 960,
			rating: 4,
			imageName: "property6-w400.jpg",
			imageAlt: "Property 6 Image"
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
