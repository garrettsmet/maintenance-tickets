import { Table, TableCell, TableHead, TableRow } from "@mui/material";
import { useTickets } from "../hooks/useTickets";
import TicketListRow from "./ticketListRow";

export default function TicketList(tix) {
	const { tickets } = useTickets();

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
				return <TicketListRow ticket={ticket} key={index} />;
			})}
		</Table>
	);
}
