import React, { useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";


export const Home = () => {

	const [contactos, setContactos] = useState([]);

	useEffect(()=> {
		fetch("https://assets.breatheco.de/apis/fake/contact/agenda/agenda-sandra")
		.then((response) => response.json())
		.then((data) => setContactos(data))
		.catch((error) => console.log(error));

	}, []);
	
	
	return (
	
	<div className="container">
		<h4>MI LISTA DE CONTACTOS</h4>
		<div className="row">
			{contactos.map((contact, index) => (
				<div key={index} className="col-md-4">
					<div className="card mt-3">
					<div className="card-body">
						<h4 className="card-title"> {contact.full_name}</h4>
						<p className="card-text">
							<i className="fas fa-map-marker-alt"></i> {contact.address}
						</p>
						<p className="card-text">
						    <i className="fas fa-phone"></i> {contact.phone}
						</p>
						<p className="card-text">
						    <i className="fas fa-envelope"></i> {contact.email}
						</p>
						<div className="h4 mb-4 p-2 text-danger border-bottom border-danger mt-2"></div>
						<div className="button-container">
						<button className="btn1"><i className="fas fa-pencil-alt"></i></button>
						<button className="btn2"><i className="fas fa-trash-alt"></i></button>
						</div>
                      </div>
					</div>
				</div>
				
			))}
		</div>
          
		
	</div>
  );
}
