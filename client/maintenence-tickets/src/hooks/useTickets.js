import { useEffect, useState } from "react";
import { getTickets } from "../services/dataService";

export function useTickets() {
	const [tickets, setTickets] = useState([]);

	useEffect(() => {
		getTickets().then((res) => {
			setTickets(res);
		});
	}, []);

	return { tickets, setTickets };
}
