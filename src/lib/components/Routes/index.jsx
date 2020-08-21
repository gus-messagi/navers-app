import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import Navers from '../pages/Navers';
import NaverForm from '../pages/NaverForm';
import { Context } from '../../context/AuthContext';

function Routes() {
    const { authenticated } = useContext(Context);

    return (
        <Switch>
            {authenticated ? (
                <>
                    <Route path="/" exact component={Navers} />
                    <Route path="/naver/new" exact component={NaverForm} />
                    <Route path="/naver/update/:id" exact component={NaverForm} />
                    <Route path="*" exact render={() => <Redirect to="/" />} />
                </>
            ) : (
                <>
                    <Route path="/login" exact component={Login} />
                    <Route path="*" exact render={() => <Redirect to="/login" />} />
                </>
            )}
        </Switch>
    );
}

export default Routes;
