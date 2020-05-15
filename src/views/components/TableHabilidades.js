import React from "react";

import { Form, Button, Table, Modal, Row, Col, Card } from "react-bootstrap";

const TableHabilidades = props => {

    if (props.raca === undefined
        || props.classe === undefined
        //|| props.listaHabilidadesEscolhidas === undefined
        || props.listaHabilidadesEscolhidas.size < 2
    ) {
        return (<></>)
    }

    return (
        <Row>
            <Col sm={12}>
                <h5>Habilidades</h5>
                <Table striped bordered hover size="sm">
                    <tbody>
                        {props.listaHabilidadesEscolhidas.map(item => (
                                <tr key={item.id}>
                                    <td><a href="#" title={item.descricao}>{item.nome}</a></td>
                                    <td>
                                        <Button
                                            size="sm"
                                            variant="danger"
                                            value={item.nome}
                                            onClick={props.onDeleteHabilidade}
                                        >excluir
                                    </Button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
                <Button
                    size="sm"
                    variant="outline-secondary"
                    onClick={props.onClickShowModal}
                >adicionar
                </Button>
                <Modal
                    show={props.showModalHabilidade}
                    onHide={props.onShowModal}
                    animation={false}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{`Modificar Habilidades (${props.raca.nome} - ${props.classe.nome} - Nível ${props.nivel})`}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label>Habilidade</Form.Label>
                            <Form.Control
                                as="select"
                                onChange={props.onChangeHabilidade}
                            >
                                <option key="0" />
                                {props.listaHabilidadesValidas.map(item => (
                                    <option key={item.id}>{item.nome}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        <Card>
                            <Card.Body>
                                <Card.Title>{props.itemSelecionado.nome} ({props.itemSelecionado.tipoHabilidade})</Card.Title>
                                <Card.Title>Descrição</Card.Title>
                                <Card.Text>
                                    {props.itemSelecionado.descricao}
                                </Card.Text>
                                <Card.Title>Especial</Card.Title>
                                <Card.Text>
                                    {props.itemSelecionado.especial}
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Form.Group>
                            <Form.Label>Descrição</Form.Label>
                            <Form.Label>{props.itemSelecionado.descricao}</Form.Label>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            size="sm"
                            variant="success"
                            onClick={props.onAddHabilidade}
                        >
                            adicionar
                        </Button>
                        <Button
                            size="sm"
                            variant="secondary"
                            onClick={props.onClickShowModal}
                        >cancelar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Col>
        </Row>
    )
}

export default TableHabilidades;