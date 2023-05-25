import { useEffect, useState } from "react";
import { getWorkers } from "../services/dataService";

export function useWorkers() {
	const [workers, setWorkers] = useState([]);

	useEffect(() => {
		getWorkers().then((res) => {
			setWorkers(res);
		});
	}, []);

	return { workers, setWorkers };
}
