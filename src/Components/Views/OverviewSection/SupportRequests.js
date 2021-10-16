import { useState } from "react";

const SupportRequests = props => {
    const [requestsList, setRequestsList] = useState(props.requestsList);
    const [additionalReqList, removeFromList] = useState(props.addotinalData.supportRequests);
 
    const updateStatus = reqIndex => {
        console.log('updateStatus')
        let newReqList = [...requestsList];
        let request = {...newReqList[reqIndex]};
        request.status = 'sent';
        newReqList[reqIndex] = request;
        setRequestsList(newReqList);
    }
    const addNewRequest = () => {

        let newReqlistLength = additionalReqList.length;
        if (newReqlistLength) {
            let randomReqIndex = Math.floor(Math.random() * newReqlistLength);
            setRequestsList([...requestsList, additionalReqList[randomReqIndex] ])
            removeFromList(additionalReqList.filter(req => req !== additionalReqList[randomReqIndex]))  
        }
 
    }
        
    const getTime = timeStamp => {
        let hour = timeStamp.substr(11,2);
        let mins = timeStamp.substr(14,2);
        return  (hour > 12 ? hour % 12 : hour) + ':' + mins + (hour >= 12 ? "PM":"AM");
    }

    return ( 
        <section className="requests box">
            <h2>SupportRequests</h2>
            <div className="requests-list">
                   <div className="request-header uppercase"> 
                            <span className="name">Name</span>
                            <span className="email">Email</span>
                            <span className="time">Time</span>
                            <span className="phone">Phone Number</span>
                            <span className="city">City</span>
                            <span className="status">Status</span>
                    </div>
                {requestsList.map( (request, index) => (
                    <div  key={index} className="request-body"> 
                            <span className="name">{request.name}</span>
                            <span className="email">{request.email}</span>
                            <span className="time">{getTime(request.timestamp)}</span>
                            <span className="phone">{request.phoneNumber}</span>
                            <span className="city">{request.city}</span>
                            <btn 
                                onClick={ () => updateStatus(index)}
                                className={request.status} 
                            >
                                  {request.status === 'sent' ? 'Sent' : 'Send' }
                            </btn>
                    </div>
                ))}
            </div>
            <btn className="add" onClick={() => addNewRequest()} >ADD</btn>
            <div className="req-count"> 
              Showing <span>1</span> to <span>{requestsList.length}</span> of {requestsList.length} elements
            </div>
        </section>
     );
}

export default SupportRequests;