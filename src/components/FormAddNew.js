import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createNewRedux } from '../action/actions';

function FormAddNew(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();
    const isCreating = useSelector(state => state.user.isCreating);


    const handleCreateUser = () => {
        console.log(email, username, password);
        dispatch(createNewRedux(email, password, username));
        setEmail('');
        setPassword('');
        setUsername('');
    }
    return (
        <div>
            <Container>
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email address: </Form.Label>
                        <Form.Control type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Password : </Form.Label>
                        <Form.Control type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>User name: </Form.Label>
                        <Form.Control type="username" value={username} onChange={(event) => setUsername(event.target.value)} />
                    </Form.Group>
                    <Button variant='primary'
                        onClick={() => handleCreateUser()}
                        disabled={isCreating}
                    >Create user </Button>
                </Form>

            </Container>
        </div >
    );
}

export default FormAddNew;  