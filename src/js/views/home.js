import React, { useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";


export const Home = () => {

	const [contactos, setContactos] = useState([]);
	
	useEffect(()=> {
		fetch("https://assets.breatheco.de/apis/fake/contact/agenda/agenda-sandra")
		.then((response) => response.json())
		.then((data) => setContactos(data))
		.catch((error) => console.log(error));

	}, []);

	const handleDeleteContact = (id) => {
		fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
		  method: "DELETE",
		})
		  .then((response) => response.json())
		  .then(() => {
			const updatedContacts = contactos.filter(
			  (contact) => contact.id !== id
			);
			setContactos(updatedContacts);
		  })
		  .catch((error) => console.log(error));
	  };

	  
	

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
							<Link to= {`/formulario/${contact.id}`}>
						<button className="btn1" onClick={() => handleEditContact(contact)}><i className="fas fa-pencil-alt"></i></button>
						    </Link>
						<button className="btn2" onClick={() => handleDeleteContact(contact.id)}><i className="fas fa-trash-alt"></i></button>
						</div>
                      </div>
					</div>
				</div>
				
			))}
		</div>
    </div>
  );
}
