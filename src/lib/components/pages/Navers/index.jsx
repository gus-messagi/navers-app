import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Loading from '../../atoms/Loading';
import api from '../../../services/api';
import Page from '../../templates/Page';
import Button from '../../atoms/Button';
import Card from '../../molecules/Card';
import ModalEmployee from '../../organisms/ModalEmployee';

const Content = styled.div`

    margin-top: 4.8rem;
    margin-bottom: 12rem;

    .div-cards {
        margin-top: 3.6rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem 3.2rem;
    }

    @media screen and (max-width: 1080px) {
        .div-cards {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media screen and (max-width: 800px) {
        .div-cards {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (max-width: 500px) {
        .div-cards {
            grid-template-columns: 1fr;
        }
    }
`;

const ContentHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    h1 { 
        font-size: 4rem;
    }
`;

function Navers() {
    const history = useHistory();
    const [navers, setNavers] = useState([]);
    const [displayModal, setDisplayModal] = useState(false);
    const [selectedNaver, setSelectedNaver] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get('/navers').then(({ data }) => {
            setNavers(data);
            setLoading(false);
        });
    }, [loading, setLoading]);

    function handleCardOnClick(id) {
        if (!id) return;

        const getNaver = navers.filter((naver) => naver.id === id)[0];

        if (!getNaver) return;

        setSelectedNaver(getNaver);
        setDisplayModal(true);
    }

    if (loading) {
        return <Loading />;
    }

    return (
        <Page>
            <Content>
                <ContentHeader>
                    <h1>Navers</h1>
                    <Button onClick={() => history.push('/naver/new')}>Adicionar Naver</Button>
                </ContentHeader>
                <div className="div-cards">
                    {navers.map((naver) => (
                        <Card
                            onClick={() => handleCardOnClick(naver.id)}
                            key={`${naver.id}-card`}
                            name={naver.name}
                            role={naver.job_role}
                            src={naver.url}
                            alt="Imagem do naver"
                            id={naver.id}
                            setLoading={setLoading}
                        />
                    ))}
                </div>
            </Content>
            {(displayModal && selectedNaver) && (
                <ModalEmployee
                    employee={selectedNaver}
                    setLoading={setLoading}
                    setDisplayModal={setDisplayModal}
                />
            )}
        </Page>
    );
}

export default Navers;
