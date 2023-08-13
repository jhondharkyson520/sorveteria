import logo from '../../assets/logo.png'
import './Header.css'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faArrowUp } from '@fortawesome/free-solid-svg-icons'




function Header () {

  const [listOpen, setListOpen] = useState(false);
  const toggleList = () => {
    setListOpen(!listOpen);
    
  }

  const closeList = () =>{
    setListOpen(!listOpen);
  }

  return (
    <div id='home' className='container'>

    <div className='menu'>
        <img className='img-logo-bar' src={logo} alt="Logo" /> 

        <button className='button-bar' onClick={toggleList}>
                <FontAwesomeIcon className='icon-bars' icon= {faBars}/>
        </button>

        {listOpen && (
        <ul className="list">
          
            <button className='button-times' onClick={closeList}>
                    <FontAwesomeIcon className='icon-times' icon= {faTimes}/>
            </button>
            <li> <a className='button-header' href="#home">HOME</a> </li>

            <div  className='line'></div>

            <li> <a  className='button-header' href="#produtos">PRODUTOS</a> </li>

            <div className='line'></div>

            <li> <a className='button-header' href="#onde">ONDE TEM?</a> </li>

            <div className='line'></div>

            <li> <a className='button-header' href='#contato'>CONTATO</a> </li>

            <div className='line'></div>
            
          
        </ul>
      )}

    </div>

      <header className='header-container'>            
          <img className='img-logo' src={logo} alt="Logo" />           
          <nav>
            <a className='button-header' href="#home">HOME</a>
            <a className='button-header' href="#produtos">PRODUTOS</a>
            <a className='button-header' href="#onde">ONDE TEM?</a>
            <a className='button-header' href="#contato">CONTATO</a>
            
          </nav>
           
      </header>

      <a className='link-topo' href="#">
        <FontAwesomeIcon className='icon-top' icon= {faArrowUp} size={'2x'}/>
      </a>

    </div>
  )
}

export default Header
