import React from "react";
import "./App.scss";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import WhatIsCovid from "./components/WhatIsCovid";
import Contagions from "./components/Contagions";
import Symptoms from "./components/Symptoms";
import WhatToDo from "./components/WhatToDo";
import Contact from "./components/Contact"
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Main />
			<WhatIsCovid />
			<Contagions />
			<Symptoms />
			<WhatToDo />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
