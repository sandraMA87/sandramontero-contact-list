import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";




export function Formulario({agregarContacto}) {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const params = useParams();
 

  
  
  useEffect (() => {
    if (params.id) {
      fetch("https://assets.breatheco.de/apis/fake/contact/" + params.id)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al obtener contacto");
          }
          return response.json();
        })
        .then((data) => {
          setFullName(data.full_name);
          setAddress(data.address);
          setPhone(data.phone);
          setEmail(data.email);
          setIsEditing(true);
        })
        .catch((error) => console.error(error));
    }
  }, [params.id]);




  const handleAddContact = () => { 
     
    const url = isEditing ? "https://assets.breatheco.de/apis/fake/contact/" + params.id : "https://assets.breatheco.de/apis/fake/contact/";
    const editarContacto = isEditing ? "PUT" : "POST";


    fetch(url, {
      method: editarContacto,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "full_name": fullName,
        "email": email,
        "agenda_slug": "agenda-sandra",
        "address": address,
        "phone": phone,

      }),
    })
      .then((response) => response.json())
      .then((data) => {
        agregarContacto(data);
        setFullName("");
        setAddress("");
        setPhone("");
        setEmail("");
      })
      .catch((error) => console.log("error", error));
  };



 return (
    <>
      <div className="form-container">
        <form onSubmit={(e) => e.prevent.default()}>
          <h2 className="form-title mb-3">Formulario</h2>
          <div className="mb-3">
            <input type="text" 
            onChange={(e) => setFullName(e.target.value)} 
            placeholder="Escribe tu nombre completo" 
            value={fullName}>
           </input>
          </div>
          <div className="mb-3">
            <input type="text" 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Escribe tu correo electrónico" 
            value={email}>
           </input>
          </div>
          <div className="mb-3">
            <input type="text" 
            onChange={(e) => setAddress(e.target.value)} 
            placeholder="Escribe tu dirección" 
            value={address}>
          </input>
          </div>
          <div className="mb-3">
            <input type="text" 
            onChange={(e) => setPhone(e.target.value)} 
            placeholder="Escribe tu teléfono" 
            value={phone}>
           </input>
          </div>
          <div className="mb-3">
            <button onClick={handleAddContact} 
            type="submit" 
            className="btn btn-primary">{isEditing ? "Edit Contact" : "Add Contact"}
            </button>
          </div>
        </form>
      </div>
    </>
  )


}