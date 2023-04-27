import React, { useState, useEffect } from "react";




export function Formulario()  {
    
    const [nuevoContacto, setNuevoContacto] = useState('');
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
	


    const handleAddContact = () => {

		console.log("hola q tal")
		// fetch("https://assets.breatheco.de/apis/fake/contact/" ,{
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify({
		// 		"full_name": fullName,
		// 		"email": email,
		// 		"agenda_slug": "agenda-sandra",
		// 		"address": address,
		// 		"phone": phone,
                
		// 	}),
		// })
		// 	.then((response) => response.json())
		// 	.then((data) => console.log(data))
		// 	.catch((error) => console.log("error", error));
	};



    return (
        <>
        <div className="form-container">
        <form onSubmit={(e)=>e.prevent.default()}>
             <h2 className="form-title mb-3">Formulario</h2>
             <div className="mb-3">
              <input type="text" onChange={(e)=>setFullName(e.target.value)} placeholder="Escribe tu nombre completo" value={fullName}></input>
			        </div>
              <div className="mb-3">
              <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Escribe tu correo electrónico" value={email}></input>
              </div>
              <div className="mb-3">
              <input type="text" onChange={(e)=>setAddress(e.target.value)} placeholder="Escribe tu dirección" value={address}></input>
              </div>
              <div className="mb-3">
              <input type="text" onChange={(e)=>setPhone(e.target.value)} placeholder="Escribe tu teléfono" value={phone}></input>
              </div>
              <div className="mb-3">
              <button onClick={handleAddContact} type="submit" className="btn btn-primary">Enviar
                </button>
              </div>
       </form>
       </div>
       </>
    )


}