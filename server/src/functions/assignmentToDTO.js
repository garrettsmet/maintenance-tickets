import { AssignmentDTO } from "../dto/assignmentDTO";

export function assignmentToDTO(assignment) {
	return new AssignmentDTO(assignment.ticket_id, assignment.worker_id);
}
