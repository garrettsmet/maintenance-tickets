import { Table, TableCell, TableHead, TableRow } from "@mui/material";

import { useWorkers } from "../hooks/useWorkers";
import WorkerListRow from "./workerListRow";

export default function WorkerList(worker) {
	const { workers } = useWorkers();

	return (
		<Table>
			<TableHead>
				<TableRow>
					<TableCell></TableCell>
					<TableCell>Worker ID</TableCell>
					<TableCell>First</TableCell>
					<TableCell>Last</TableCell>
				</TableRow>
			</TableHead>
			{workers.map((worker, index) => {
				return <WorkerListRow worker={worker} key={index} />;
			})}
		</Table>
	);
}
