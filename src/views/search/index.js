import React, {Fragment,useState, useEffect} from 'react';
import {Formt, ListApod } from '../../components'
import { url, apikey } from '../../utils/constants'
import axios from 'axios'


const Search = () => {
    
      const [date , setDate] = useState({
        startDate: '', 
        endDate: ''
      });

      const [consult, setConsult] = useState(false);
      const [result, setResult] = useState([]);
      const [loading, setLoading ] = useState(false);
      const [error, setError] = useState(null);

    const { startDate , endDate} = date;


useEffect(() => {
             
    const petGet = async () =>{    
        if(consult) { 
            setLoading(true); 
        
            await axios.get(url, {
                params:{
                    api_key: apikey,
                    start_date: startDate,
                    end_date: endDate
                }
        }).then(response=>{
            const result = (response);
            setResult(result.data);
            setConsult(false);
            setLoading(false);

        }).catch(error=>{
            setError(error);
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
            <ListApod result={result}  loading={loading} error={error}/>
        </Fragment>    
    )
}
export default Search;