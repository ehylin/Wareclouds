import React, { useState} from 'react';
import {Form, Button, Alert, Row, Col, Container} from 'react-bootstrap';


const Formt = ({ setConsult, date, setDate,  title}) => {

    const [error, setError] = useState(false);
    const { startDate, endDate } = date;
    
    const handleChange = e => {
   
        setDate({
            ...date,
            [e.target.name] : e.target.value
        });

    }

    const handleSubmit = e => {
        e.preventDefault();

        if(startDate.trim() === '' || endDate.trim() === ''){
            setError(true);
            return;
        }
        setError(false)
        setConsult(true) 
      
    }

    return(
      <div className="bg-img">
          <Container>
           <h2 className="text-center pt-4 mb-5 letter">{title}</h2>
      
         <Form onSubmit={handleSubmit} className="pb-4">
             {error ? <Alert variant="danger">Todos los campos son obligatorios</Alert> : null}

            <Row className="mb-3">
           
            <Form.Group id="starDate" as={Col} md="6">
            <Form.Label className="letter">Seleccione una fecha de inicio</Form.Label>
                <Form.Control
                     
                    type='date'
                    value={startDate}
                    name='startDate'
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group id="endDate" as={Col} md="6">
            <Form.Label className="letter">Seleccione una fecha final</Form.Label>
                <Form.Control
                     
                    type='date'
                    value={endDate}
                    name='endDate'
                    onChange={handleChange}
                />
            </Form.Group>

            </Row>
            <Button className="bg-btn" variant="info" type="submit">
                Buscar
            </Button>
            
         </Form>
         </Container>
         </div>
    
    )
}

export default Formt;