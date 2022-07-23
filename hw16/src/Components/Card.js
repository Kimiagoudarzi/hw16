// import { useState } from 'react';
import Card from 'react-bootstrap/Card';



function BgColorExample(props) {
    // const [show,setShow] = useState(false);
  return (
    <>
      {['Info'].map((variant) => (
        <Card bg={variant.toLowerCase()} key={variant} text={variant.toLowerCase() === 'light' ? 'dark' : 'white'} style={{ width: '18rem' }} className="mb-2">
          <Card.Header>
          {/* <FontAwesomeIcon icon="fa-solid fa-trash" /> */}
          </Card.Header>
          <Card.Body>
            <Card.Title>{props.contact.firstName} {props.contact.lastName}</Card.Title>
            <Card.Text>{props.contact.selected}</Card.Text>
            <Card.Text>{props.contact.PhoneNumber}</Card.Text>
            <Card.Text>{props.contact.email}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default BgColorExample;