import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

function useAuth() {
    const history = useHistory();
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }
    }, []);

    async function handleLogin(email, password) {
        const { data: { token } } = await api.post('/users/login', {
            email,
            password,
        });

        localStorage.setItem('token', JSON.stringify(token));

        api.defaults.headers.Authorization = `Bearer ${token}`;
        setAuthenticated(true);
        history.push('/');
    }

    async function handleLogout() {
        setAuthenticated(false);
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = undefined;
        history.push('/login');
    }

    return { authenticated, handleLogin, handleLogout };
}

export default useAuth;
