const Header = props => {
    return ( 
        <header>
                <div className="logo" />
                <span className="label">{props.label}</span>
                <button className="premium">Premium</button>
        </header>
     );
}

export default Header;