import Header from './components/Header/Header'
import Layout from './components/Layout/Layout'
import Footer from './components/Footer/Footer'
import Contato from './Pages/Contato/Contato'
import './App.css'


function App () {

  return (
    <div className='container'>
        <Header/>
        <Layout/>
        <Contato/>
        <Footer/>
    </div>
  )
}

export default App
