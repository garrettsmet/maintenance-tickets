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

export function assign(ticket_id, worker_id) {
	return axios
		.post(SERVER_ADDRESS + "assign", {
			ticketId: ticket_id,
			workerId: worker_id,
		})
		.then((res) => res.request.response);
}

export function unassign(ticket_id, worker_id) {
	return axios
		.post(SERVER_ADDRESS + "unassign", {
			ticketId: ticket_id,
			workerId: worker_id,
		})
		.then((res) => res.request.response);
}

export function getAssignments() {
	return axios
		.get(SERVER_ADDRESS + "assign")
		.then((res) => JSON.parse(res.request.response));
}

export function getAssignmentsByWorkerId(worker_id) {
	return axios
		.get(`${SERVER_ADDRESS}assign/${worker_id}`)
		.then((res) => JSON.parse(res.request.response));
}
