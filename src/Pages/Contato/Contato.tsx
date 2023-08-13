import './Contato.css';
import {useState} from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'



function Contato(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function sendEmail(e: any){
        e.preventDefault();

        if(name === '' || email === '' || message === ''){
            Swal.fire('Preencha todos os campos')
            return;
        }
        
        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send('service_x6ns3mx', 'template_yd9viwv', templateParams, '8ERhZ8DJNyQYEVRrM')
        .then((response) => {
            Swal.fire('Mensagem enviada com sucesso!')
            console.log('Email enviado', response.status, response.text);
            setName('');
            setEmail('');
            setMessage('');
        }, (err) => {
            console.log('Error: ', err);
            
        })
    }

    return(
        <div className='container'>
            <div id='contato' className='div-contato'>
                <h1 className='title'>Fale Conosco </h1>
                <p className='sub-title'>Deixe sua sugestão ou reclamação</p>

                    <form className='form' onSubmit={sendEmail}>

                    <div className='area-itens'>
                        
                        <input 
                            className='input' 
                            type="text" 
                            placeholder='Digite seu nome'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                         
                    </div>
                 

                    <div className='area-itens'>
                        
                        <input 
                            className='input'  
                            type="text" 
                            placeholder='Digite seu email'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                       
                    </div>

                    <div className='area-itens'>
                       
                        <textarea  
                            className='input-mensagem' 
                            placeholder='Digite sua mensagem...'
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            
                        />
                    </div>
                    <div className='area-itens'>
                        <input 
                            className='button-enviar' 
                            type='submit'
                            value='Enviar'                        
                        />
                    </div>
                
                </form>  
            </div>
        </div>
       

    )
}

export default Contato