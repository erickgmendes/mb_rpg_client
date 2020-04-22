import React from "react";

import { Form, Button, Table, Modal, Row, Col, Card } from "react-bootstrap";

class TableHabilidades extends React.Component {

    render() {
        const {
            raca,
            classe,
            nivel,
            showModalHabilidade,
            listaHabilidadesEscolhidas,
            listaHabilidadesValidas,
            itemSelecionado,

            onShowModal,
            onDeleteHabilidade,
            onClickShowModal,
            onChangeHabilidade,
            onAddHabilidade
        } = this.props

        if (raca === undefined || classe === undefined) return <></>;

        return (
            <Row>
                <Col sm={12}>
                    <h5>Habilidades</h5>
                    <Table striped bordered hover size="sm">
                        <tbody>
                            {listaHabilidadesEscolhidas.map(item => (
                                <tr key={item.id}>
                                    <td>{item.nome}</td>
                                    <td>
                                        <Button
                                            size="sm"
                                            variant="danger"
                                            value={item.nome}
                                            onClick={onDeleteHabilidade}
                                        >excluir
                                    </Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Button
                        size="sm"
                        variant="outline-secondary"
                        onClick={onClickShowModal}
                    >adicionar
                </Button>
                    <Modal
                        show={showModalHabilidade}
                        onHide={onShowModal}
                        animation={false}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>{`Modificar Habilidades (${raca.nome} - ${classe.nome} - Nível ${nivel})`}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group>
                                <Form.Label>Habilidade</Form.Label>
                                <Form.Control
                                    as="select"
                                    onChange={onChangeHabilidade}
                                >
                                    <option key="0" />
                                    {listaHabilidadesValidas.map(item => (
                                        <option key={item.id}>{item.nome}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>

                            <Card>
                                <Card.Body>
                                    <Card.Title>{itemSelecionado.nome} ({itemSelecionado.tipoHabilidade})</Card.Title>
                                    <Card.Title>Descrição</Card.Title>
                                    <Card.Text>
                                        {itemSelecionado.descricao}
                                    </Card.Text>
                                    <Card.Title>Especial</Card.Title>
                                    <Card.Text>
                                        {itemSelecionado.especial}
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Form.Group>
                                <Form.Label>Descrição</Form.Label>
                                <Form.Label>{itemSelecionado.descricao}</Form.Label>
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                size="sm"
                                variant="success"
                                onClick={onAddHabilidade}
                            >
                                adicionar
                        </Button>
                            <Button
                                size="sm"
                                variant="secondary"
                                onClick={onClickShowModal}
                            >cancelar
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
        );
    }
}

export default TableHabilidades;