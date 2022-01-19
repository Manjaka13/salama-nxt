import axios from "axios";
import ws from "service/ws";
import { PROXY } from "helpers/const";

/*
	Describe HTTP request methods
*/

// Default headers
const headers = {
	Accept: "application/json",
	"Content-Type": "application/json",
};

// GET method
function get(endpoint?: string): Promise<unknown> {
	return new Promise<unknown>((resolve, reject) => {
		axios
			.get(`${PROXY}/${ws[endpoint]}`, {
				headers,
			})
			.then(({ data }) => resolve(data))
			.catch((e) => reject(e));
	});
}

// Export as http service
const http = {
	get,
};

export default http;
