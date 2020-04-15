import React from "react";

import { Form, Button, Table, Modal } from "react-bootstrap";

class TableHabilidades extends React.Component {

    render() {
        //if (this.props.habilidadesEscolhidas === undefined) return <></>;
        return (
            <>
                <h5>Habilidades</h5>
                <Table striped bordered hover size="sm">
                    <tbody>
                        {this.props.habilidadesEscolhidas.map(item => (
                            <tr key={item.id}>
                                <td>{item.nome}</td>
                                <td>
                                    <Button 
                                        size="sm" 
                                        variant="danger" 
                                        value={item.nome}
                                        onClick={this.props.onDeleteHabilidade}
                                    >excluir
                                    </Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Button 
                    size="sm" 
                    variant="outline-secondary" 
                    onClick={this.props.onClickShowModal}
                >adicionar
                </Button>
                <Modal
                    show={this.props.showModalHabilidade}
                    onHide={this.props.onShowModal}
                    animation={false}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{`Modificar Habilidades (${this.props.raca.nome} - ${this.props.classe.nome} - Nível ${this.props.nivel})`}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label>Habilidade</Form.Label>
                            <Form.Control 
                                as="select" 
                                onChange={this.props.onChangeHabilidade}
                            >
                                <option key="0" />
                                {this.props.listaHabilidades.map(item => (
                                    <option key={item.id}>{item.nome}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Descrição</Form.Label>
                            <Form.Label>{this.props.itemSelecionado.descricao}</Form.Label>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button 
                            size="sm" 
                            variant="success" 
                            onClick={this.props.onAddHabilidade}
                        >
                        adicionar
                        </Button>
                        <Button 
                            size="sm" 
                            variant="secondary" 
                            onClick={this.props.onClickShowModal}
                        >cancelar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default TableHabilidades;