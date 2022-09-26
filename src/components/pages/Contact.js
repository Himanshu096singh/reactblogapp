import { useState } from "react";
import { Container, Row, Form, Button, FloatingLabel, Alert } from "react-bootstrap";

const Contact = () => {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [message, setmessage] = useState('');
    const [alert, setAlert] = useState("");

    const namechange = (event) => {
        setname(event.target.value);
    }
    const emailchange = (event) => {
        setemail(event.target.value);
    }
    const phonechange = (event) => {
        setphone(event.target.value);
    }
    const messagechange = (event) => {
        setmessage(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        // console.log(name);
        // console.log(email);
        // console.log(phone);
        // console.log(message);
        let values = [
            {
                'name' : name,
                'email' : email,
                'phone' : phone,
                'message' : message
            }
            
        ];

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'name' : name,
                'email' : email,
                'number': phone,
                'message' : message,
            })
        };
        fetch('http://localhost:8000/api/contact', requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data.msg);
            setAlert(data);
            setTimeout(() => {
                setAlert("");
            }, 3000);
        });
        // fetch('http://localhost:8000/api/contact', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         'name' : name,
        //         'email' : email,
        //         'number': phone,
        //         'message' : message,
        //     }),
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //     },
        // }).then((res) => res.json())
        //     .catch((err) => {
        //         console.log(err.message);
        // });

            setname("");
            setemail("");
            setphone("");
            setmessage("");
        console.log(values);
    }

    return (
        <Container>
                <h1 style={{textAlign:"center", padding:"15px"}}>
                    Contact Us
                </h1>
                
                <Row>
                    <Form onSubmit={submitHandler}>

                        {alert !== "" &&  <Alert variant={alert.type}>{alert.msg}</Alert>
                        }

                        <Form.Group className="mb-3">
                            <Form.Label>
                                Name
                            </Form.Label>
                            <Form.Control type="text" placeholder="Name" value={name} onChange={namechange}/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control type="email" value={email} placeholder="Email Address" onChange ={emailchange}/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>
                                Phone Number
                            </Form.Label>
                            <Form.Control type="number"  value={phone} placeholder="Phone Number" onChange ={phonechange}/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                    <Form.Control
                                    as="textarea"
                                    name="message"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                    onChange = {messagechange}
                                    value= {message}
                                    />
                            </FloatingLabel>
                        </Form.Group>    
                        <Button variant="success" type="submit" className="mb-3">
                            Submit
                        </Button>   
                    </Form>
                </Row>
        </Container>  
    )
}

export default Contact;