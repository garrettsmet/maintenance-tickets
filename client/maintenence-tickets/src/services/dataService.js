import axios from "axios";

const SERVER_ADDRESS = "http://localhost:3001/";

export function getTickets() {
	return axios
		.get(SERVER_ADDRESS + "tickets")
		.then((res) => JSON.parse(res.request.response));
}

export function getWorkers() {
	return axios
		.get(SERVER_ADDRESS + "workers")
		.then((res) => JSON.parse(res.request.response));
}
