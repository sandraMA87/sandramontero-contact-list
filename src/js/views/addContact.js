import React, { useState } from "react";



export function addContact()  {
    

    const [contactos, setContactos] = useState('');
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {

		fetch(process.env.BACKEND_URL + "/api/agenda", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setContactos(data['contactos']);
			})
			.catch((error) => console.log("error", error));

	}, [])


    const handleAddContact = () => {
		fetch(process.env.BACKEND_URL + "/api/agenda", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				"full_name": fullName,
				"address": address,
				"phone": phone,
                "email": email
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				setContactos([...contactos, data]);
			})
			.catch((error) => console.log("error", error));
	};



    return (
        <>
        <div className="form-container">
       <form>
        <label>Full Name</label>
              <input type="text" onChange={(e)=>setFullName(e.target.value)} placeholder="Escribe tu nombre completo" value={fullName}></input>
              <input type="text" onChange={(e)=>setAddress(e.target.value)} placeholder="Escribe tu dirección" value={address}></input>
              <input type="text" onChange={(e)=>setPhone(e.target.value)} placeholder="Escribe tu teléfono" value={phone}></input>
              <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Escribe tu correo electrónico" value={email}></input>

              <button onClick={handleAddContact} type="submit" className="btn btn-primary">
                </button>
       </form>
       </div>
       </>
    )


}