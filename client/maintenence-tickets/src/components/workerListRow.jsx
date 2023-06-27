import {
	Collapse,
	IconButton,
	TableCell,
	TableRow,
	Typography,
} from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useAssignments } from "../hooks/useAssignments";

export default function WorkerListRow(worker, index) {
	const [open, setOpen] = useState(false);
	const { assignments } = useAssignments();

	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<>
			<TableRow>
				<TableCell>
					<IconButton size="small" onClick={handleOpen}>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell>{worker.worker.worker_id}</TableCell>
				<TableCell>{worker.worker.first_name}</TableCell>
				<TableCell>{worker.worker.last_name}</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} unmountOnExit>
						<Typography py={2}>
							{" "}
							Assigned to:
							{assignments.map((assignment) => {
								if (assignment.worker_id === worker.worker.worker_id) {
									return (
										<AssignmentText assignment={assignment} index={index} />
									);
								} else {
									return <></>;
								}
							})}
						</Typography>
					</Collapse>
				</TableCell>
			</TableRow>
		</>
	);
}

export function AssignmentText(assignment) {
	return <Typography>Ticket ID: {assignment.assignment.ticket_id}</Typography>;
}
