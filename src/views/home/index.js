import React, {Fragment,useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    

    return(
        <Fragment>
            <div className="bg-img text-center pt-4 pb-4">
            <Link to="/buscar" className="letter">Iniciar la búsqueda</Link>
            </div>
        </Fragment>    
    )
}
export default Home;

