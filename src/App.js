import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from '@emotion/styled';
import Quote from './components/Quote';
import Spinner from './components/Spinner';
import imagen from './cryptocurrency.png';
import imagenTwo from './img1.png';
import Form from './components/Form';
import Axios from 'axios';


const Content = styled.div`

  max-width: 900px;
  margin:  auto;

`;

const Imagen = styled.img`

  max-width: 100%;
  margin-top: 15rem;

  @media screen and (max-width: 768px) {
    display: none;
    }
    

`;

const ImagenMobile = styled.img`

  max-width: 80%;
  margin-top: 5rem;
  margin-left:2rem;
  
  

  @media screen and (min-width: 767px) {
    display: none;
    }

`;

const Heading =styled.h1`
   
   font-family: 'Bebas Neue', cursive;
   color: #FFF;
   text-align: left;
   font-weight: 700;
   font-size: 3.2rem;
   margin-bottom: 3rem;
   margin-top:50%;
   letter-spacing: 1px;

   @media screen and (max-width: 760px) {
    margin-top: 15%;
    text-align: center;
    font-size: 2rem;

    &::after{

      content: '';
      margin:auto;
      width:100px;
      height: 6px;
      background-color #66A2Fe;
}
    }

   &::after{

    content: '';
    width:100px;
    height: 6px;
    background-color #66A2Fe;
    display:block;
   }
`;


function App() {

  const [Currency, saveCurrency] = useState('');
  const [cryptoCurrency, saveCryptoCurrency]= useState('');
  const [result, Saveresult]= useState({});
  const [loading, saveLoading]= useState(false);

    useEffect(() => {

      const QuoteCryptocurrency = async () => {

      //****Avoid first execution ****//

      if(Currency === '') return;

      //**** Consult Api for quotation ***//

      const url= `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${Currency}`;
      const result = await Axios.get(url);
      

        //Show spinner

          saveLoading(true);

        //Hide Spinner and show results

          setTimeout(() => {

             saveLoading(false);
            Saveresult(result.data.DISPLAY[cryptoCurrency][Currency]);


           }, 3000);
      
       }

      QuoteCryptocurrency();

    }, [Currency, cryptoCurrency]);


    //Show spinner or results

    const component = (loading) ? <Spinner/> :  <Quote result={result} />
  
    return (
       <Content className="row">
          <div className="col-md-6 col-sm-8 m-auto">
            <Imagen 
            src={imagen}
            alt="cryptoimage"
            />

            <ImagenMobile 
            src={imagenTwo}
            alt="cryptoimage"
            />

          </div>

          <div className="col-md-6 col-sm-8 m-auto">
            <Heading>Quote Cryptocurrencies Instantly!</Heading>
            <Form
            saveCurrency={saveCurrency}
            saveCryptoCurrency = {saveCryptoCurrency}/>
            {component}
          </div>

        </Content>
  );
}

export default App;
