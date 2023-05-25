import {
	IconButton,
	Table,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useTickets } from "../hooks/useTickets";
import TicketListRow from "./ticketListRow";

export default function TicketList(tix) {
	const { tickets, setTickets } = useTickets();

	return (
		<Table>
			<TableHead>
				<TableRow>
					<TableCell></TableCell>
					<TableCell>Ticket ID</TableCell>
					<TableCell>Category</TableCell>
					<TableCell>Size</TableCell>
					<TableCell>Urgency</TableCell>
				</TableRow>
			</TableHead>
			{tickets.map((ticket, index) => {
				return <TicketListRow ticket={ticket} />;
			})}
		</Table>
	);
}

{
}
