import React from 'react';
import {Card} from 'react-bootstrap';



const Apod = ({res}) => {

    const {title, explanation, date, copyright, url } = res
    return(
       <div>
           <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{copyright}</Card.Subtitle>
                <Card.Text>
                    {explanation}
                </Card.Text>            
            </Card.Body>
            <Card.Footer className="text-muted">{date}</Card.Footer>
            </Card>
       </div>
    )
}

export default Apod;