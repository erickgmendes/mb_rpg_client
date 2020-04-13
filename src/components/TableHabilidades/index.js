import React from "react";

import { Form, InputGroup, Button, Table, Modal } from "react-bootstrap";

class TableHabilidades extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            itemSelecionado: {},
            nome: "",
            modalAberto: false
        };
    }

    selectItem = (event) => {
        let item = event.target.value
        let itemSelecionado = this.props.listaHabilidades.filter(h => h.nome === item);
        this.setState({ itemSelecionado: itemSelecionado }, this.exibirHabilidade);
    }

    exibirHabilidade = () => {
        const { itemSelecionado } = this.state;

        console.log(itemSelecionado)

        this.setState({ nome: itemSelecionado.nome })
    }

    onClickAdd = event => {
        const { modalAberto } = this.state;
        //this.props.itemSelecionado = this.state.itemSelecionado
        this.setState({ modalAberto: !modalAberto });
    }

    onShowModal = (event) => {
        console.log(this.props.listaHabilidades)

        if (!this.props.listaHabilidades || this.props.listaHabilidades.length === 0) {
            return;
        }

        const { modalAberto } = this.state;
        this.setState({ modalAberto: !modalAberto });
    }

    render() {
        //if (this.props.value === undefined) return <></>;
        return (
            <>
                <h5>Habilidades</h5>
                <Table striped bordered hover size="sm">
                    <tbody>
                        <tr>
                            <td>valor raça</td>
                        </tr>
                        <tr>
                            <td>valor classe</td>
                        </tr>
                    </tbody>
                </Table>
                <Button variant="outline-secondary" size="sm" onClick={this.onShowModal}>Adicionar</Button>
                <Modal
                    show={this.state.modalAberto}
                    onHide={this.onShowModal}
                    animation={false}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{`Modificar Habilidades (${this.props.raca.nome} - ${this.props.classe.nome} - Nível ${this.props.nivel})`}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Habilidade</Form.Label>
                                <Form.Control as="select" onChange={this.selectItem}>
                                    <option key="0" />
                                    {this.props.listaHabilidades.map(item => (
                                        <option key={item.id}>{item.nome}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>{this.state.itemSelecionado.nome}</Form.Label>
                                <Form.Control readOnly value={this.state.itemSelecionado.nome} />
                            </Form.Group>
                        </Form>




                    </Modal.Body>
                    <Modal.Footer>
                        <Button color="primary">Ok</Button>
                        <Button color="secondary" onClick={this.onShowModal}>Cancelar</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default TableHabilidades;
