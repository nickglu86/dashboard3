const Terms = props  => {
    
    const termsArr = props.terms;
    {console.log({termsArr})}
    return ( 
        <div className="terms">
            <ul>
                {termsArr.map( (term, index) => (
                    <li> TERM {index + 1}  <b>{term}</b></li>
                ))}
            </ul>
        </div>
     );
}

export default Terms;