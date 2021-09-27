import axios from 'axios';

const url = axios.create({
	baseURL: 'https://toro278.us-east.toroserver.com/api/demo_api_inventory/1.0/sku',
});

export const getApiSuggestions = (word) => {
	let result = url
		.get(`/search?sku_name=${word}`)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			return error;
		});

	return result;
};
