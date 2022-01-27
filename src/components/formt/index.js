import React, { useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap';
import DatePicker from "react-datepicker";



const Formt = ({ setConsult, date, setDate}) => {


const [validated, setValidated] = useState(false);

// const [startDate, setStartDate] = useState('2022/01/25');
// const [endDate, setEndDate] = useState('');

//extraer 
const { startDate, endDate } = date;




const handleChange2 = e => {
    //actualizar el state
    setDate({
        ...date,
        [e.target.name] : e.target.value
    });

}



const handleSubmit = (event) => {
    console.log("desde el boton")
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {

      event.stopPropagation();
    }

    setValidated(true);

    setConsult(true)
    
}

    return(
       <div>
         <Form noValidate validated={validated} onSubmit={handleSubmit}>


            <Form.Label>Elija una fecha de inicio</Form.Label>
            <Form.Group id="starDate">
                <Form.Control
                    required 
                    type='date'
                    value={startDate}
                    name='startDate'
                    onChange={handleChange2}
                />
            </Form.Group>

            <Form.Label>Elija una fecha final</Form.Label>
            <Form.Group id="endDate">
                <Form.Control
                    required 
                    type='date'
                    value={endDate}
                    name='endDate'
                    onChange={handleChange2}
                />
            </Form.Group>

            <Button variant="info" type="submit">
                Submit
            </Button>
         </Form>
  
       </div>
    )
}

export default Formt;