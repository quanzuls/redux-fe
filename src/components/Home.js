import React, { useState } from 'react';
import FormAddNew from './FormAddNew';
import Header from './Header';
import TableUser from './TableUser';
import axios from 'axios';
import { useEffect } from 'react';

function Home(props) {

    return (
        <>
            <Header />
            <FormAddNew />
            <TableUser />


        </>
    );
}

export default Home;