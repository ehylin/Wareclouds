import React from 'react';
import {Row, Container} from 'react-bootstrap';
import {Apod, Loading} from '../../components'



const ListApod = ({result, loading}) => {

    console.log(result);

    

    return(
        <Container>
          <Row>
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