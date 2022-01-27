import React, {Fragment,useState, useEffect} from 'react';
import {Formt, ListApod } from '../../components'
import axios from 'axios'

const Search = () => {
    
      const [date , setDate] = useState({
        startDate: '', 
        endDate: ''
      });

      const [consult, setConsult] = useState(false);
      const [result, setResult] = useState([]);
      const [loading, setLoading ] = useState(false);

    const { startDate , endDate} = date;


useEffect(() => {
             
const petGet = async () =>{    
    if(consult) { 
        setLoading(true); 
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
        setLoading(false);

    }).catch(error=>{
        console.log(error);
        setLoading(false);
    })  
    }
}

        petGet();

     },[consult]);

    return(
        <Fragment>
  

                    <Formt 
                        setConsult={setConsult}
                        date={date}
                        setDate={setDate}
                        setLoading={loading}
                        
                    />

                <ListApod result={result}  loading={loading}/>
        </Fragment>    
    )
}
export default Search;