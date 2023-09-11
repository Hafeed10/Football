const url = 'https://footapi7.p.rapidapi.com/api/search/champions';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '15248693b7msh7b57ff456f2b89ep113f58jsn18d10e7e3716',
		'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
	}
};

async function fetchData() {
	try {
		const response = await fetch(url, options);

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const data = await response.json(); // Assuming the response is JSON data
		console.log(data); // This will log the parsed JSON data

		// You can now work with the 'data' variable, which contains the parsed JSON response.
		// For example, if 'data' is an array of items, you can loop through it and list the items.

		// Example: Listing items
		data.forEach(item => {
			console.log(`Item Name: ${item.name}`);
			console.log(`Item Description: ${item.description}`);
		});
	} catch (error) {
		console.error(error);
	}
}

fetchData(); // Call the function to start the API request
