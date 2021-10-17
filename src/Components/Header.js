import '../Styles/header.css';

const Header = ({ label }) => {
    return ( 
        <header>
                <div className="logo" />
                <span className="label">{ label }</span>
                <button className="premium">Premium</button>
        </header>
     );
}

export default Header;