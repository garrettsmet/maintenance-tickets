import { IconButton, TableCell, TableRow } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { assign, getAssignments } from "../services/dataService";
import { useAssignments } from "../hooks/useAssignments";
import { useEffect, useState } from "react";

export default function TicketDialogListRow({ ticket, worker }) {
	const { assignments, setAssignments, appendActions } = useAssignments();

	const handleAssign = async () => {
		await assign(ticket.ticket.ticket_id, worker.worker_id);
		getAssignments().then((res) => {
			setAssignments(res);
		});
	};

	const [isAssigned, setIsAssigned] = useState([false]);
	useEffect(() => {
		setIsAssigned(
			appendActions.isAssigned(ticket.ticket.ticket_id, worker.worker_id)
		);
	}, [assignments, appendActions, ticket.ticket.ticket_id, worker.worker_id]);

	const space = " ";

	return (
		<TableRow>
			<TableCell>
				<IconButton onClick={handleAssign} disabled={isAssigned}>
					<ControlPointIcon />
				</IconButton>
			</TableCell>
			<TableCell>
				{worker.first_name}
				{space}
				{worker.last_name}
			</TableCell>
		</TableRow>
	);
}
