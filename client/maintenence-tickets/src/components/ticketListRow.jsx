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

export default function TicketListRow(ticket) {
	console.log();
	const [open, setOpen] = useState(false);
	return (
		<>
			<TableRow>
				<TableCell>
					<IconButton size="small" onClick={() => setOpen(!open)}>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell>{ticket.ticket.ticket_id}</TableCell>
				<TableCell>{ticket.ticket.category}</TableCell>
				<TableCell>{ticket.ticket.size}</TableCell>
				<TableCell>{ticket.ticket.urgency}</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} unmountOnExit>
						<Typography py={2}>{ticket.ticket.description}</Typography>
					</Collapse>
				</TableCell>
			</TableRow>
		</>
	);
}
