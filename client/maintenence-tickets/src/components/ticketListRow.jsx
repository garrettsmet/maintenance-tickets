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
import TicketDialogListRow from "./ticketDialogListRow";

export default function TicketListRow(ticket, index) {
	const [collapseOpen, setCollapseOpen] = useState(false);
	const [dialogOpen, setDialogOpen] = useState(false);
	const { workers } = useWorkers();

	const handleClick = () => {
		setDialogOpen(!dialogOpen);
	};

	const handleClose = () => {
		setDialogOpen(false);
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
								onClick={handleClick}
								sx={{ marginRight: "6vw" }}
							>
								Assign
							</Button>
							<Typography py={2}>{ticket.ticket.description}</Typography>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
			{dialogOpen && (
				<Dialog open={dialogOpen} onClose={handleClose}>
					<Box padding={5}>
						<Typography>
							Assigning workers for ticket: <br />
							<strong>{ticket.ticket.description}</strong>
						</Typography>
						<Table>
							{workers.map((worker) => {
								return <TicketDialogListRow ticket={ticket} worker={worker} />;
							})}
						</Table>
					</Box>
				</Dialog>
			)}
		</>
	);
}
