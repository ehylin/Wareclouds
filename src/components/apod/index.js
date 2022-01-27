import React from 'react';
import {Card,Col} from 'react-bootstrap';



const Apod = ({res}) => {

    const {title, explanation, date, copyright, url } = res
    return(
        <Col xs={12} md={4} lg={3}>
           <Card className="mt-4" >
            <Card.Img variant="top" src={url} height="225" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{copyright}</Card.Subtitle>           
            </Card.Body>
            <Card.Footer className="text-muted">{date}</Card.Footer>
            </Card>
        </Col>
    )
}

export default Apod;