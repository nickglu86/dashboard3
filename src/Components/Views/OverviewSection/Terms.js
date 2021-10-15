const Terms = props  => {   
    const termsArr = props.terms;
    return ( 
        <div className="terms box">
            <ul>
                {termsArr.map( (term, index) => (
                    <li> TERM {index + 1}  <b>{term}</b></li>
                ))}
            </ul>
        </div>
     );
}

export default Terms;