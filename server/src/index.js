import express from "express";
import { ticketToDTO } from "./functions/ticketToDTO";
import { workerToDTO } from "./functions/workerToDTO";
import { assignmentToDTO } from "./functions/assignmentToDTO";

const bodyParser = require("body-parser");

const app = express();
var cors = require("cors");

app.use(cors());
app.use(express.json());

const Pool = require("pg").Pool;
const pool = new Pool({
	user: "api",
	host: "localhost",
	database: "maintenence_tickets",
	password: "api",
	port: 5432,
});

app.get("/workers", async (req, res) => {
	try {
		const workers = await pool.query("SELECT * FROM workers");
		const workerDTOs = [];
		for (let i = 0; i < workers.rowCount; i++) {
			workerDTOs.push(workerToDTO(workers.rows[i]));
		}
		res.send(workerDTOs);
	} catch (err) {
		console.error(err);
	}
});

app.get("/workers/:worker_id", async (req, res) => {
	try {
		const id = parseInt(req.params.worker_id);
		const workers = await pool.query(
			"SELECT * FROM workers WHERE worker_id = $1",
			[id]
		);
		res.send(workers.rows);
	} catch (err) {
		console.error(err);
	}
});

app.get("/tickets", async (req, res) => {
	try {
		const tickets = await pool.query("SELECT * FROM tickets");
		const ticketDTOs = [];
		for (let i = 0; i < tickets.rowCount; i++) {
			ticketDTOs.push(ticketToDTO(tickets.rows[i]));
		}
		res.send(ticketDTOs);
	} catch (err) {
		console.error(err);
	}
});

app.get("/tickets/:ticket_id", async (req, res) => {
	try {
		const id = parseInt(req.params.ticket_id);
		const tickets = await pool.query(
			"SELECT * FROM tickets WHERE ticket_id = $1",
			[id]
		);
		res.send(tickets.rows);
	} catch (err) {
		console.error(err);
	}
});

app.post("/assign", (req, res) => {
	try {
		const data = req.body;

		const response = pool.query(
			"INSERT INTO assigned_to (ticket_id, worker_id) VALUES ($1, $2)",
			[data.ticketId, data.workerId]
		);
		res.send(response);
	} catch (err) {
		console.error(err);
	}
});

app.get("/assign", async (req, res) => {
	try {
		const assignments = await pool.query("SELECT * FROM assigned_to");
		const assignmentDTOs = [];
		for (let i = 0; i < assignments.rowCount; i++) {
			assignmentDTOs.push(assignmentToDTO(assignments.rows[i]));
		}
		res.send(assignmentDTOs);
	} catch (err) {
		console.error(err);
	}
});

app.get("/assign/:worker_id", async (req, res) => {
	try {
		const assignments = await pool.query(
			"SELECT * FROM assigned_to WHERE worker_id = $1",
			[req.params.worker_id]
		);
		const assignmentDTOs = [];
		for (let i = 0; i < assignments.rowCount; i++) {
			assignmentDTOs.push(assignmentToDTO(assignments.rows[i]));
		}
		res.send(assignmentDTOs);
	} catch (err) {
		console.error(err);
	}
});

app.post("/unassign", async (req, res) => {
	try {
		const data = req.body;

		const response = await pool.query(
			"DELETE FROM assigned_to WHERE worker_id = $1 AND ticket_id = $2",
			[data.workerId, data.ticketId]
		);
		console.log(
			"Deleted assignment: Worker " + data.workerId + " Ticket " + data.ticketId
		);
		res.send(response);
	} catch (err) {
		console.error(err);
	}
});

app.get("/test/:testId", (req, res) => {
	return res.send(`Received get on test/${req.params.testId}`);
});

app.listen(3001, () => console.log("Starting..."));
