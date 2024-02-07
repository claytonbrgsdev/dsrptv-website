
import logo from './../../assets/Logo/Logo Novo Teste.jpg';
import './Header.css';

export default function Header() {
    return (
        <div className="header-container" style={{minWidth: "600px"}}>
            <img src={logo} className="header-logo" alt="DSRPTV Logo" style={{maxWidth: "200px", marginTop: "40px", borderRadius: "100px"}}/>
            <h3 className="header-text" style={{marginTop: "10px", fontStyle: 'italic', fontFamily: "monospace", borderRadius: "100px"}}>unexpected beats drives our minds and bodies</h3>
            
        </div>
    );
}
