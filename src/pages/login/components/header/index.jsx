import logo from '../../../../assets/png/Baloot.png';
import './header.css';

const SignInSignUpHeader = () => {
    return(
        <header class="logo">
            <a href="./home.html">
                <img src={logo} alt="Baloot logo"/>
            </a>
        </header>
    )
}

export default SignInSignUpHeader;