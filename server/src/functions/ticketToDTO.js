import { TicketDTO } from "../dto/ticketDTO";

export function ticketToDTO(ticket) {
	return new TicketDTO(
		ticket.ticket_id,
		ticket.category,
		ticket.description,
		ticket.size,
		ticket.urgency
	);
}
