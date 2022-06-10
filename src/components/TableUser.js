import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUser, deleteUserRedux } from '../action/actions';
import ClipLoader from "react-spinners/ClipLoader";

function TableUser() {

    const handleDelete = (user) => {
        console.log('>> check user delete', user);
        dispatch(deleteUserRedux(user.id));
    }
    const dispatch = useDispatch();
    const listUsers = useSelector((state) => state.user.listUsers);
    const isLoading = useSelector((state) => state.user.isLoading);
    const isError = useSelector((state) => state.user.isError);
    const isDeleting = useSelector((state) => state.user.isDeleting);

    const override = {
        display: 'block',
        margin: '0 auto',
    }


    useEffect(() => {
        dispatch(fetchAllUser());
    }, [])
    return (
        <>
            <Container>
                <hr />
                <>

                    <div className="sweet-loading">

                    </div>
                </>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isError === true ?
                            <>
                                <div>Somethings wrongs, please try again...</div>
                            </>
                            :
                            <>
                                {isLoading === true ?
                                    <>
                                        <tr>
                                            <td colSpan={`4`}>
                                                <ClipLoader color={'red'} css={override} size={50} />
                                            </td>
                                        </tr>
                                    </>
                                    :
                                    <>
                                        {listUsers && listUsers.length > 0 && listUsers.map((user, index) => (

                                            <tr key={`user-${index}`}>
                                                <td>{index + 1}</td>
                                                <td>{user.email}</td>
                                                <td>{user.username}</td>
                                                <td>
                                                    <a className={isDeleting ? 'btn btn-danger disabled' : 'btn btn-danger'} role="button"
                                                        onClick={() => handleDelete(user)} aria-disabled="true"
                                                    >Delete</a>

                                                </td>
                                            </tr>

                                        ))}
                                    </>}

                            </>


                        }


                    </tbody>
                </Table>
            </Container>

        </>
    );
}

export default TableUser;