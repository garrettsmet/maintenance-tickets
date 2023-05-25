import { WorkerDTO } from "../dto/workerDTO";

export function workerToDTO(worker) {
	return new WorkerDTO(worker.worker_id, worker.first_name, worker.last_name);
}
