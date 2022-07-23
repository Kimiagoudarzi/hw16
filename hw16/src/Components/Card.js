import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


function BgColorExample(props) {
    const [show,setShow] = useState(false);
    const handleModal = () =>{
      setShow({show:true})
}
    
  return (
    <>
      {['dark'].map((variant) => (
        <Card bg={variant.toLowerCase()} key={variant} text={variant.toLowerCase() === 'light' ? 'dark' : 'white'} style={{ width: '16rem' }} className="mb-2">
          <Card.Header>
            <button onClick={handleModal}><FontAwesomeIcon icon={faTrash} /></button>
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