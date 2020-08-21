import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Loading from '../../atoms/Loading';
import TitleForm from '../../atoms/TitleForm';
import Form from '../../organisms/Form';
import Page from '../../templates/Page';
import api from '../../../services/api';

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 500px) {
        margin-top: 10rem;
        margin-bottom: 10rem;
        height: 100%;
    }
`;

function AddNaver() {
    const { id } = useParams();
    const [employee, setEmployee] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) {
            setLoading(false);
            return;
        }

        api.get(`navers/${id}`).then(({ data }) => {
            setEmployee(data);
            setLoading(false);
        });
    }, [id]);

    if (loading) {
        return <Loading />;
    }

    return (
        <Page>
            <Content>
                <TitleForm>{!id ? 'Adicionar Naver' : 'Editar Naver'}</TitleForm>
                <Form isCreating={!id} employee={employee} />
            </Content>
        </Page>
    );
}

export default AddNaver;
