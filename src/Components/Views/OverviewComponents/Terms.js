import '../../../Styles/terms.css';

const Terms = ({terms})  => {   
    
    return ( 
        <div className="terms box">     
                {terms.map( (term, index) => ( 
                   <div className="term" key={index}>
                        <span >TERM {index + 1}</span>
                        <span>{term}</span>
                    </div>
                ))}
        </div>
     );
}

export default Terms;