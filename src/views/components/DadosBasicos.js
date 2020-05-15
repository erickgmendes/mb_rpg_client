import React from "react";

import { Form, Row, Col } from "react-bootstrap";

import TextBox from './TextBox'
import ComboBox from './ComboBox'
import TextBoxDisabled from './TextBoxDisabled'

const DadosBasicos = props => {

    if (props.raca === undefined || props.classe === undefined) {
        return (<></>)
    }

    return (
        <>
            <Row>
                <Col sm={4}>
                    <TextBox
                        label="Nome do Personagem"
                        value={props.nome}
                        onChange={props.onChangeNome}
                    />
                </Col>
                <Col sm={3}>
                    <ComboBox
                        label="Raça"
                        value={props.raca.nome}
                        lista={props.listaRacas}
                        onChange={props.onChangeRaca}
                    />
                </Col>
                <Col sm={3}>
                    <ComboBox
                        label="Classe"
                        value={props.classe.nome}
                        lista={props.listaClasses}
                        onChange={props.onChangeClasse}
                    />
                </Col>
                <Col sm={2}>
                    <Form.Group>
                        <Form.Label>Nível</Form.Label>
                        <Form.Control
                            as="select"
                            size="sm"
                            onChange={props.onChangeNivel}
                            value={props.nivel}
                        >
                            <option></option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col sm={8}>
                    <TextBox
                        label="Motivação"
                        value={props.motivacao}
                        onChange={props.onChangeMotivacao}
                    />
                </Col>
                <Col sm={2}>
                    <TextBoxDisabled label="PV" value={props.pv} />
                </Col>
                <Col sm={2}>
                    <TextBoxDisabled label="Mana" value={props.mana} />
                </Col>
            </Row>
        </>
    )
}

export default DadosBasicos;