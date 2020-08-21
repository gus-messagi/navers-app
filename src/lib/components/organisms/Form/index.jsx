import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { useHistory } from 'react-router-dom';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import IconButton from '../../atoms/IconButton';
import Modal from '../../molecules/Modal';
import closeIcon from '../../../assets/icons/close.svg';
import api from '../../../services/api';

const Base = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 700px;

    div.div-inputs {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3.2rem;
    }

    button {
        margin-top: 3.2rem;
        align-self: flex-end;
    }

    @media screen and (max-width: 500px) {
        div.div-inputs {
            grid-template-columns: 1fr;
        }
    }
`;

const CloseContent = styled.div`
    display: flex;
    justify-content: flex-end;
`;

function Form({ isCreating, employee }) {
    const history = useHistory();
    const [formState, setFormState] = useState({});
    const [displayModal, setDisplayModal] = useState(false);

    useEffect(() => {
        if (!employee.name) return;

        const naverData = {
            ...employee,
            birthdate: Moment(employee.birthdate).format('DD/MM/YYYY'),
            admission_date: Moment(employee.admission_date).format('DD/MM/YYYY'),
        };

        setFormState(naverData);
    }, [employee]);

    function validateForm() {
        if (!formState.name || !formState.job_role
            || !formState.birthdate || !formState.admission_date
            || !formState.project || !formState.url) {
            return false;
        }

        setDisplayModal(true);
        return true;
    }

    async function handleCreate(event) {
        event.preventDefault();
        if (!validateForm()) return;
        const data = formState;
        await api.post('/navers', data);
    }

    async function handleUpdate(event) {
        event.preventDefault();
        if (!validateForm()) return;
        const data = formState;
        delete data.id;
        delete data.user_id;
        await api.put(`/navers/${employee.id}`, data);
    }

    function closeModalClick() {
        setDisplayModal(false);
        history.push('/');
    }

    return (
        <Base onSubmit={isCreating ? handleCreate : handleUpdate}>
            <div className="div-inputs">
                <Input
                    label="Nome"
                    placeholder="Nome"
                    id="name-input"
                    value={formState.name}
                    onChange={
                        (event) => setFormState({ ...formState, name: event.target.value })
                    }
                />
                <Input
                    label="Cargo"
                    placeholder="Cargo"
                    id="role-input"
                    value={formState.job_role}
                    onChange={
                        (event) => setFormState({ ...formState, job_role: event.target.value })
                    }
                />
                <Input
                    label="Idade"
                    placeholder="Idade"
                    id="age-input"
                    value={formState.birthdate}
                    onChange={
                        (event) => setFormState({ ...formState, birthdate: event.target.value })
                    }
                />
                <Input
                    label="Tempo de empresa"
                    placeholder="Tempo de empresa"
                    id="time-in-the-company-input"
                    value={formState.admission_date}
                    onChange={
                        (event) => {
                            setFormState({ ...formState, admission_date: event.target.value });
                        }
                    }
                />
                <Input
                    label="Projetos que participou"
                    placeholder="Projetos que participou"
                    id="worked-projects-input"
                    value={formState.project}
                    onChange={
                        (event) => setFormState({ ...formState, project: event.target.value })
                    }
                />
                <Input
                    label="URL da foto do Naver"
                    placeholder="URL da foto do Naver"
                    id="image-url-input"
                    value={formState.url}
                    onChange={
                        (event) => setFormState({ ...formState, url: event.target.value })
                    }
                />
            </div>
            <Button>Salvar</Button>
            {displayModal && (
                <Modal hasPadding>
                    <CloseContent>
                        <IconButton
                            src={closeIcon}
                            alt="Botão de fechar modal"
                            onClick={closeModalClick}
                        />
                    </CloseContent>
                    <Modal.Title>{isCreating ? 'Naver criado' : 'Naver Atualizado'}</Modal.Title>
                    <Modal.Description>{isCreating ? 'Naver criado com sucesso!' : 'Naver atualizado com sucesso!'}</Modal.Description>
                </Modal>
            )}
        </Base>
    );
}

Form.defaultProps = {
    isCreating: false,
    employee: {},
};

Form.propTypes = {
    isCreating: PropTypes.bool,
    employee: PropTypes.object,
};

export default Form;
