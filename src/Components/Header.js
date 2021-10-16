const Header = props => {
    return ( 
        <header>
                <div className="logo" />
                <span className="label">{props.label}</span>
                <btn className="premium">Premium</btn>
        </header>
     );
}

export default Header;