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

export default function WorkerListRow(worker) {
	const [open, setOpen] = useState(false);
	return (
		<>
			<TableRow>
				<TableCell>
					<IconButton size="small" onClick={() => setOpen(!open)}>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell>{worker.worker.worker_id}</TableCell>
				<TableCell>{worker.worker.first_name}</TableCell>
				<TableCell>{worker.worker.last_name}</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} unmountOnExit>
						<Typography py={2}>TEMP</Typography>
					</Collapse>
				</TableCell>
			</TableRow>
		</>
	);
}
