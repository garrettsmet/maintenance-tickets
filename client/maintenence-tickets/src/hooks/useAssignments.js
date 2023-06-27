import { useEffect, useState } from "react";
import { getAssignments } from "../services/dataService";

export function useAssignments() {
	const [assignments, setAssignments] = useState([]);

	const context = { assignments };

	useEffect(() => {
		getAssignments().then((res) => {
			setAssignments(res);
		});
	}, []);

	const appendActions = {
		isAssigned: (ticket_id, worker_id) =>
			isAssigned(ticket_id, worker_id, context),
	};

	return { assignments, setAssignments, appendActions };
}

function isAssigned(ticket_id, worker_id, context) {
	const { assignments } = context;

	for (let i = 0; i < assignments.length; i++) {
		if (
			assignments[i].ticket_id === ticket_id &&
			assignments[i].worker_id === worker_id
		) {
			return true;
		}
	}
}
