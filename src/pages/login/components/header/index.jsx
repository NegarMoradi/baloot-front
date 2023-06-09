import logo from '../../../../assets/png/Baloot.png';
import './header.css';

const SignInSignUpHeader = () => {
    return(
        <header className="logo">
            <a href="./">
                <img src={logo} alt="Baloot logo"/>
            </a>
        </header>
    )
}

export default SignInSignUpHeader;