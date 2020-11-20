export const Footer = () =>{
    return(
        <footer className="page-footer animate__animated animate__fadeInDown">
            <div className="container">
                <div className="row">
                <div className="col l6 s12">
                    <h5 className="white-text">Contacto</h5>
                    <p className="grey-text text-lighten-4">Correo electrónico: ortizlauraortiz53@gmail.com</p>
                </div>
                <div className="col l4 offset-l2 s12">
                    <h5 className="white-text">Redes sociales</h5>
                    <ul>
                        <li>
                            <a className="grey-text text-lighten-3" href="https://www.instagram.com/d.artca/?hl=es-la">
                                <i className="fa fa-instagram"> Dartca</i>
                            </a>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container center-align">
                    Angélica Ortiz
                </div>
            </div>
        </footer>
    );
}