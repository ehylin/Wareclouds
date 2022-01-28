import React from 'react';
import {Row, Container, Alert} from 'react-bootstrap';
import {Apod, Loading} from '../../components'



const ListApod = ({result, loading, error}) => {
    return(
        <Container>
          <Row>
          {error ? <Alert variant="danger">Ocurrio un error con la búsqueda, por favor intente de nuevo</Alert> : null}
          {loading || !result ? (
          <Loading />
        ) : (
          result.map((res) => (
            <Apod 
              key={res.title}
              res={res}
            />
          ))
        )}
              </Row>
        </Container>

        
    )
}

export default ListApod;