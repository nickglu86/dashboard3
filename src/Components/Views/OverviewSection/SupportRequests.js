import { useState } from "react";

const suppReq =  [
    {
      "name": "Cecilia Welch",
      "email": "heather_keeling@gottlieb.ca",
      "timestamp": "2012-04-23T01:06:43.511Z",
      "phoneNumber": "215-293-5846",
      "city": "Southe Mariane",
      "status": "sent"
    },
    {
      "name": "Sara Glover",
      "email": "floyd_brakus@lindgren.com",
      "timestamp": "2012-04-23T00:22:43.511Z",
      "phoneNumber": "057-812-3947",
      "city": "East Maryam",
      "status": "sent"
    },
    {
      "name": "Harriett Morgan",
      "email": "jabari.kilback@nelson.tv",
      "timestamp": "2012-04-23T12:22:43.511Z",
      "phoneNumber": "866-668-0327",
      "city": "Monserratmouth",
      "status": "sent"
    },
    {
      "name": "Susie Curry",
      "email": "theo_gleichner@kaia.org",
      "timestamp": "2012-04-23T07:56:43.511Z",
      "phoneNumber": "647-851-5280",
      "city": "Lonnyburgh",
      "status": "sent"
    },
    {
      "name": "Edgar Greer",
      "email": "ankunding_ralph@gmail.com",
      "timestamp": "2012-04-23T08:35:43.511Z",
      "phoneNumber": "985-747-0063",
      "city": "Schmittfurt",
      "status": "unsent"
    },
    {
      "name": "Minerva Massey",
      "email": "lia_purdy@yahoo.com",
      "timestamp": "2012-04-23T03:24:43.511Z",
      "phoneNumber": "488-514-5012",
      "city": "South Lori",
      "status": "unsent"
    }
  ]


function SupportRequests() {
    const [counter, setCounter] = useState(0)
    return ( 
        <section className="requests box">
            <h2>SupportRequests</h2>
            <div className="requests-list">
                   <div className="request-header"> 
                            <span className="name">Name</span>
                            <span className="email">Email</span>
                            <span className="time">Time</span>
                            <span className="phone">Phone Number</span>
                            <span className="city">City</span>
                            <span className="status">Status</span>
                    </div>
                {suppReq.map( request => (
                    <div className="request-body"> 
                            <span className="name">{request.name}</span>
                            <span className="email">{request.email}</span>
                            <span className="time">{request.timestamp}</span>
                            <span className="phone">{request.phoneNumber}</span>
                            <span className="city">{request.city}</span>
                            <btn>Send</btn>
                    </div>
                ))}
            </div>
            <btn className="add">ADD</btn>
            <div>{counter}</div>
             <btn onClick={ () => setCounter(counter+1)}>+1</btn>
        </section>
     );
}

export default SupportRequests;