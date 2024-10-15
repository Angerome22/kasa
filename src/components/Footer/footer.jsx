import logo from '../../assets/logo-footer.png'

export default function Footer() {
    return ( 
         <div className="footer">
        <img src={logo} className="logo-footer" alt="logo" />       
        <p className="text-footer">© 2020 Kasa. All rights reserved</p>
        </div>
);
} 