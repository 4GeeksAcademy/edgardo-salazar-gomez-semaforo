import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Digitos } from "./Digitos.jsx";
//create your first component
const Home = () => {

	const [timer, SetTimer] = useState(0)
	const [active, setActive] = useState(false)

	useEffect(() => { //montar, actualizar y desmontar, esto se ejecuta una sola vez. 
		if (active) {
		setTimeout(() => {
			SetTimer(value => value + 1)

		}, 1000)
	}
	}, [timer, active])

const startStop = () => setActive(value => !value)
const resetTimer = () => {
	setActive(false);   
	SetTimer(0);        
};
	return (
		<main className="text-center fondo-contador">
			<section className="counter-holder">

				<Digitos number={<span className="fa fa-clock"></span>} />
				<Digitos number={Math.floor((timer / 100000) % 10)} />
				<Digitos number={Math.floor((timer / 10000) % 10)} />
				<Digitos number={Math.floor((timer / 1000) % 10)} />
				<Digitos number={Math.floor((timer / 100) % 10)} />
				<Digitos number={Math.floor((timer / 10) % 10)} />
				<Digitos number={Math.floor(timer % 10)} />

			</section>
			<section className="container text-center my-5">
				<h2>Counter controller</h2>
				<div>
					<button 
					disabled={active}
					onClick={startStop} className="mx-1 btn btn-success btn-lg">Start</button>
					<button
					disabled={!active} 
					onClick={startStop} className="mx-1 btn btn-secondary btn-lg">Stop</button>
					<button onClick={resetTimer} className="mx-1 btn btn-danger btn-lg">Reset</button>
				</div>
			</section>
		</main>

	);
};

//uso de mathfloor para redondear
//sacamos el primer numero de la izquierda (1 + 6 digitos representados en 0 hasta llegar al ultimo digito del contador) 
//uso de evento en el form para que no se reinicie, ya que el submit reinicia la pagina.  
export default Home;