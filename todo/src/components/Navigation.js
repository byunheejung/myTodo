import React from 'react';
import {Link} from 'react-router-dom';
import {signIn, signOut} from '../Auth';
import { Fragment } from 'react';

export default({user}) => (
    <div>
        <Link to="/">
            TO-DO LIST
        </Link>
        <Link to="/new-item">
            + Add New
        </Link>
        {!user && <button type="button" onClick={signIn}>Login</button>}
        {user &&(
            <Fragment>
                <button onClick={signOut}>Logout</button>
                <img src="{user.profile.picture}"/>
                <div>{user.profile.email}</div>
            </Fragment>
        )}
    </div>
)