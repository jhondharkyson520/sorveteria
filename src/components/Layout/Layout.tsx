import './Layout.css'
import uniduni from '../../assets/uniduni.jpeg'
import picole from '../../assets/skimo.jpeg'
import sundae from '../../assets/sundae.jpeg'
import mixmaracuja from '../../assets/mixmaracuja.jpeg'
import milkshake from '../../assets/milkshake.jpeg'
import bolo from '../../assets/bolo01.jpeg'
import mixoreo from '../../assets/mixoreo.jpeg'



function Layout (){

   

    return(
        <div className='container'>

            <div className='img-uni'>
                <img className='uniduni-image' src={uniduni} alt="" />
            </div>

            <div className='products'>
                <div id='produtos'  className='products-text'>
                    <h1>Produtos</h1>
                    <p>
                        Com uma variedade de dar água na boca, a Sorveteria Pinguim 
                        tem mais de 50 produtos em seu cardápio. Utilizamos em nossos produtos ingredientes 
                        da melhor qualidade. E estamos sempre inovando em sabores deliciosos. 
                        Venha nos conhecer e saborear o melhor sovete! 
                    </p>
                </div>
            </div>
            
                <div className='images'>
                        <img src={picole} alt="" />
                        <img src={sundae} alt="" />
                        <img src={milkshake} alt="" />              
                        <img src={mixmaracuja} alt="" />
                        <img src={bolo} alt="" />
                        <img src={mixoreo} alt="" />
                 </div>


           

            <iframe
                id='onde'
                width="100%" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.454078099182!2d-49.20664252546679!3d-20.281463649347877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bcddaa5ba1111d%3A0xa9dabde054b21a18!2sSorveteria%20Pinguim!5e0!3m2!1spt-BR!2sbr!4v1690738433326!5m2!1spt-BR!2sbr" 
                style={{border:0, height: 400}} 
                 
                loading="lazy">
            </iframe>

         </div>
    )
}

export default Layout