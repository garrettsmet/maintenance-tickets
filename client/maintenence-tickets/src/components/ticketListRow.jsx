import {
	Box,
	Button,
	Collapse,
	Dialog,
	IconButton,
	Table,
	TableCell,
	TableRow,
	Typography,
} from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useWorkers } from "../hooks/useWorkers";
import {
	TicketDialogListRowAssign,
	TicketDialogListRowUnassign,
} from "./ticketDialogListRow";

export default function TicketListRow(ticket, index) {
	const [collapseOpen, setCollapseOpen] = useState(false);
	const [assignDialogOpen, setAssignDialogOpen] = useState(false);
	const [unassignDialogOpen, setUnassignDialogOpen] = useState(false);
	const { workers } = useWorkers();

	const handleClickAssign = () => {
		setAssignDialogOpen(!assignDialogOpen);
	};

	const handleClickUnassign = () => {
		setUnassignDialogOpen(!unassignDialogOpen);
	};

	const handleClose = () => {
		setAssignDialogOpen(false);
		setUnassignDialogOpen(false);
	};

	return (
		<>
			<TableRow>
				<TableCell>
					<IconButton
						size="small"
						onClick={() => setCollapseOpen(!collapseOpen)}
					>
						{collapseOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell>{ticket.ticket.ticket_id}</TableCell>
				<TableCell>{ticket.ticket.category}</TableCell>
				<TableCell>{ticket.ticket.size}</TableCell>
				<TableCell>{ticket.ticket.urgency}</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={collapseOpen} unmountOnExit>
						<Box display={"flex"}>
							<Button
								variant="contained"
								onClick={handleClickAssign}
								sx={{ marginRight: "6vw" }}
							>
								Assign
							</Button>
							<Button
								variant="contained"
								sx={{ marginRight: "6vw" }}
								onClick={handleClickUnassign}
							>
								Unassign
							</Button>
							<Typography py={2}>{ticket.ticket.description}</Typography>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
			{assignDialogOpen && (
				<Dialog open={assignDialogOpen} onClose={handleClose}>
					<Box padding={5}>
						<Typography>
							Assigning workers for ticket: <br />
							<strong>{ticket.ticket.description}</strong>
						</Typography>
						<Table>
							{workers.map((worker) => {
								return (
									<TicketDialogListRowAssign ticket={ticket} worker={worker} />
								);
							})}
						</Table>
					</Box>
				</Dialog>
			)}
			{unassignDialogOpen && (
				<Dialog open={unassignDialogOpen} onClose={handleClose}>
					<Box padding={5}>
						<Typography>
							Unassigning workers for ticket: <br />
							<strong>{ticket.ticket.description}</strong>
						</Typography>
						<Table>
							{workers.map((worker) => {
								return (
									<TicketDialogListRowUnassign
										ticket={ticket}
										worker={worker}
									/>
								);
							})}
						</Table>
					</Box>
				</Dialog>
			)}
		</>
	);
}
