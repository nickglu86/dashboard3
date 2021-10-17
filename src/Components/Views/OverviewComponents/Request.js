const Request = ({request, index, updateStatus} ) => {
    const {name, email, timestamp, phoneNumber, city, status} = request;

    const getTime = timeStamp => {
        let hour = timeStamp.substr(11,2);
        let mins = timeStamp.substr(14,2);
        return  (hour > 12 ? hour % 12 : hour) + ':' + mins + (hour >= 12 ? "PM":"AM");
    }

    return (  
        <div  className="request-body"> 
                <span className="name">{name}</span>
                <span className="email">{email}</span>
                <span className="time">{getTime(timestamp)}</span>
                <span className="phone">{phoneNumber}</span>
                <span className="city">{city}</span>
                <button 
                    onClick={() => updateStatus(index)}
                    className={status} 
                >
                    {status === 'sent' ? 'Sent' : 'Send' }
                </button>
        </div>
    );
}

export default Request;