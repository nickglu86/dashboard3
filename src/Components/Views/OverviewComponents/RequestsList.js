import { useState } from "react";
import Request from "./Request";

import '../../../Styles/requests.css';

const RequestsList = ({reqList, additData}) => {
    const [requestsList, setRequestsList] = useState(reqList);
    const [additionalReqList, removeFromList] = useState(additData.supportRequests);
 
    const updateStatus = reqIndex => {
        let newReqList = [...requestsList];
        let currRequest = {...newReqList[reqIndex]};
        currRequest.status = 'sent';
        newReqList[reqIndex] = currRequest;
        setRequestsList(newReqList);
    }
    const addNewRequest = () => {
        let newReqlistLength = additionalReqList.length;
        if (newReqlistLength) {
            let randomReqIndex = Math.floor(Math.random() * newReqlistLength);
            setRequestsList([additionalReqList[randomReqIndex], ...requestsList])
            removeFromList(additionalReqList.filter(req => req !== additionalReqList[randomReqIndex]))  
        }
 
    }
    const getReqHeader = () => (
        <div className="request-header uppercase"> 
                <span className="name">Name</span>
                <span className="email">Email</span>
                <span className="time">Time</span>
                <span className="phone">Phone Number</span>
                <span className="city">City</span>
                <span className="status">Status</span>
        </div>
    )

    return ( 
            <section className="requests box">
                <h2>SupportRequests</h2>
                {getReqHeader()}
                <div className="requests-list">
                    {requestsList.map( (request, index) => 
                        <Request key={index} index={index} request={request} updateStatus={updateStatus} />
                    )}
                </div>
                
                <button className="add" onClick={() => addNewRequest()} >ADD</button>
                <div className="req-count"> 
                Showing <span>1</span> to <span>{requestsList.length}</span> of {requestsList.length} elements
                </div>
            </section>
     );
}

export default RequestsList;