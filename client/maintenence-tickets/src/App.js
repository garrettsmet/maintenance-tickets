import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TicketsPage from "./pages/ticketspage";
import WorkersPage from "./pages/workerspage";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";

function App() {
	return (
		<Router>
			<AppBar position="static" color="primary">
				<Container maxWidth="xl">
					<Toolbar disableGutters sx={{ justifyContent: "space-around" }}>
						<Link to="/" style={{ textDecoration: "none" }}>
							<Box color="white">
								<Typography variant="h3">Tickets</Typography>
							</Box>
						</Link>
						<Link to="/workers" style={{ textDecoration: "none" }}>
							<Box color="white">
								<Typography variant="h3">Workers</Typography>
							</Box>
						</Link>
					</Toolbar>
				</Container>
			</AppBar>

			<Routes>
				<Route path="/" element={<TicketsPage />} />
				<Route path="/workers" element={<WorkersPage />} />
			</Routes>
		</Router>
	);
}

export default App;
