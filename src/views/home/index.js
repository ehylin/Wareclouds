import React, {useState, useEffect} from 'react';
import {Formt, ListApod } from '../../components'
import {Container, Row, Col} from 'react-bootstrap'
import axios from 'axios'

const Home = () => {
    
      const [date , setDate] = useState({
        startDate: '', endDate: ''
      });

      const [consult, setConsult] = useState(false);
      const [result, setResult] = useState([]);

    const { startDate , endDate} = date;


useEffect(() => {
             
const petGet = async () =>{    
    if(consult) {  
        const appId = 'BW6Mt8fgncio6MShxsw0vhDCmK7tzbx0faKjnYXp'
        const url = 'https://api.nasa.gov/planetary/apod'
    
        await axios.get(url, {
            params:{
                api_key: appId,
                start_date: startDate,
                end_date: endDate
            }
    }).then(response=>{
        console.log(response.data);
        const result = (response);
     

        setResult(result.data);
        setConsult(false);

    }).catch(error=>{
        console.log(error)
    })  
    }
}

        petGet();

     },[consult]);

    return(
       <div>
           <Container>
                <Row>
                    <Col>
                    <h2>formulario</h2>
                    <Formt 
                        setConsult={setConsult}
                        date={date}
                        setDate={setDate}
                    />
                    </Col>
                    <Col>2 of 2</Col>
                </Row>
                <ListApod result={result} />
            </Container>     
       </div>
    )
}
export default Home;

