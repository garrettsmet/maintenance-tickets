import express from "express";

const bodyParser = require("body-parser");

const app = express();
var cors = require("cors");

app.use(cors());

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
		res.send(workers.rows);
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
		res.send(tickets.rows);
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

app.get("/test/:testId", (req, res) => {
	return res.send(`Received get on test/${req.params.testId}`);
});

app.listen(3000, () => console.log("Starting..."));
