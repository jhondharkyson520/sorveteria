import './Footer.css'
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(
        <div className='container'>
            <footer className='container-footer'>
                <div className='redes-sociais'>
                    <a href='https://www.instagram.com/sorveteria.pinguim_/' target='_blank'>
                        <FontAwesomeIcon className='insta-icon' icon={faInstagram} size={'2x'}/>
                    </a>
                    <a 
                    href="https://api.whatsapp.com/send?phone=5534984307981&text=Olá, tudo bem? Gostaria de "
                    target='_blank'
                    >
                        <FontAwesomeIcon className='whats-icon' size='2x' icon={faWhatsapp} style={{color: '#25d366'}}/>
                    </a>
                    
                </div>
                    <p>Siga a gente em nossas redes sociais</p>
                <img className='logo' src={logo} alt="" />
                <p>Copyright | Sorveteria Pinguim - Todos os direitos reservados.</p>
            </footer>
        </div>
    )
}

export default Footer;