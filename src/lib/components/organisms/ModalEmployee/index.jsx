import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Moment from 'moment';
import Modal from '../../molecules/Modal';
import IconButton from '../../atoms/IconButton';
import closeIcon from '../../../assets/icons/close.svg';
import ActionsButtons from '../../molecules/ActionsButtons';
import DeleteModal from '../../molecules/DeleteModal';
import DeleteSuccessModal from '../../molecules/DeleteSuccessModal';
import api from '../../../services/api';

const EmployeeName = styled.h1`
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 3.6rem;
`;

const CloseContent = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Content = styled.div`
    padding: 2rem;
    max-width: 540px;
    width: 100vw;

    .actions-buttons {
        margin-top: 11rem;
    }

    @media screen and (max-width: 800px) {
        max-width: 660px;
        width: 100%;

        div {
            width: 100%;
        }
    }
`;

const SecondaryInfo = styled.div`
    margin: 2.4rem 0;
`;

const SubTitle = styled.span`
    font-weight: 600;
    line-height: 2.4rem;
`;

const Paragraph = styled.p`
    line-height: 2.4rem;
    margin-top: 1rem;
`;

const NaverImage = styled.img`
    max-width: 540px;
    width: 100vw;
    object-fit: cover;


    @media screen and (max-width: 800px) {
        max-width: 660px;
        min-height: 660px;
        width: 100%;
    }
`;

function ModalEmployee({
    employee,
    setDisplayModal,
    setLoading,
}) {
    const [displayDeleteSuccessfully, setDisplayDeleteSuccessfully] = useState(false);
    const [displayDeleteModal, setDisplayDeleteModal] = useState(false);

    function calcDiffDate(date, basedOn) {
        const currentDay = Moment();
        return currentDay.diff(date, basedOn);
    }

    function calcAdmissionTime(date) {
        const timeInDays = calcDiffDate(date, 'days');
        const years = Math.floor(timeInDays / 365);
        const days = timeInDays - (years * 365);

        return `${years > 0 ? `${years} anos e` : ''} ${days > 0 ? `${days} dias` : '1 dia'}`;
    }

    function handleDeleteClick() {
        api.delete(`/navers/${employee.id}`).then(() => {
            setDisplayDeleteModal(false);
            setDisplayDeleteSuccessfully(true);
        });
    }

    function handleCloseSuccessModal() {
        setLoading(true);
        setDisplayModal(false);
        setDisplayDeleteSuccessfully(false);
    }

    return (
        <Modal>
            <Modal.ContentRow>
                <NaverImage src={employee.url} alt="Imagem Funcionário" />
                <Content>
                    <CloseContent>
                        <IconButton
                            src={closeIcon}
                            alt="Botão de fechar modal"
                            onClick={() => setDisplayModal(false)}
                        />
                    </CloseContent>
                    <div>
                        <EmployeeName>{employee.name}</EmployeeName>
                        <Paragraph>{employee.job_role}</Paragraph>
                    </div>
                    <SecondaryInfo>
                        <SubTitle>Idade</SubTitle>
                        <Paragraph>{`${calcDiffDate(employee.birthdate, 'years')} anos`}</Paragraph>
                    </SecondaryInfo>
                    <SecondaryInfo>
                        <SubTitle>Tempo de empresa</SubTitle>
                        <Paragraph>{`${calcAdmissionTime(employee.admission_date)}`}</Paragraph>
                    </SecondaryInfo>
                    <SecondaryInfo>
                        <SubTitle>Projetos que participou</SubTitle>
                        <Paragraph>{employee.project}</Paragraph>
                    </SecondaryInfo>
                    <ActionsButtons
                        className="actions-buttons"
                        id={employee.id}
                        deleteClick={() => setDisplayDeleteModal(true)}
                    />
                </Content>
                {displayDeleteModal && (
                    <DeleteModal
                        cancelClick={() => setDisplayDeleteModal(false)}
                        deleteClick={handleDeleteClick}
                    />
                )}
                {displayDeleteSuccessfully && (
                    <DeleteSuccessModal onClick={handleCloseSuccessModal} />
                )}
            </Modal.ContentRow>
        </Modal>
    );
}

ModalEmployee.propTypes = {
    employee: PropTypes.object.isRequired,
    setDisplayModal: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired,
};

export default ModalEmployee;
