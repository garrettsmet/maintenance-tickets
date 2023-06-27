import { useEffect, useState } from "react";
import { getAssignments } from "../services/dataService";

export function useAssignments() {
	const [assignments, setAssignments] = useState([]);

	useEffect(() => {
		getAssignments().then((res) => {
			setAssignments(res);
		});
	}, []);

	return { assignments, setAssignments };
}
