const Terms = props  => {   
    const termsArr = props.terms;
    return ( 
        <div className="terms box">     
                {termsArr.map( (term, index) => ( 
                   <div className="term">
                        <span >TERM {index + 1}</span>
                        <span>{term}</span>
                    </div>
                ))}
        </div>
     );
}

export default Terms;