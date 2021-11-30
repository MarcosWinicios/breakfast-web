import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
    return (
        <header>
            <nav className="header-container">
                <Link to="/employees">
                    BREAKFAST
                </Link>
                <Link to="/employeeRegistration">
                    Cadastrar Colaborador
                </Link>
            </nav>

        </header>
    );
}

export default Header;