import React, {Component} from 'react'
import {Table} from 'reactstrap'
import {baseApiUrl} from '../../global'
import axios from 'axios'
import Content from '../templates/Content'

const initialState = {
    stock: { product: '', description: '', amount: '', value: ''},
    stocks: []
}

export default class Stock extends Component {
    
    constructor(props){
        super(props)

        this.state = {...initialState}

        this.renderForm = this.renderForm.bind(this)
        this.renderTable = this.renderTable.bind(this)
    }

    componentWillMount(){
       this.loadStock()
    }

    loadStock(){
        const url = `${baseApiUrl}/stock`
        axios.get(url).then(res => this.setState({stocks: res.data}))
    }

    updateField(event) {
        const stock = { ...this.state.stock }
        stock[event.target.name] = event.target.value
        this.setState({ stock })
    }

    reset(){
        this.setState({stock: initialState.stock})
    }

    save() {
        const stock = this.state.stock
        const method = stock.id ? 'put' : 'post'
        const id =  stock.id ? `/${stock.id}` : ''
        axios[method](`${baseApiUrl}/stock${id}`, stock)
            .then(resp => {
                const stocks = this.getUpdatedStock(resp.data)
                this.setState({stock: initialState.stock, stocks})
            })
        this.componentDidUpdate()
    }

    componentDidUpdate(){
        this.loadStock()
    }

    load(stock){
        this.setState({stock})
    }

    remove(stock) {
        axios.delete(`${baseApiUrl}/stock/${stock.id}`).then( () => {
            const stocks = this.getUpdatedStock(stock, false)
            this.setState({stocks})
        })
    }

    getUpdatedStock(stock, add = true) {
        const stocks = this.state.stocks.filter(s => s.id !== stock.id)
        if(add) stocks.unshift(stock)
        return stocks
    }

    renderForm() {
        return (
            <div className="form mb-3">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Produto</label>
                            <input type="text" className="form-control"
                                name="product"
                                value={this.state.stock.product}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o produto..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Descrição</label>
                            <input type="text" className="form-control"
                                name="description"
                                value={this.state.stock.description}
                                onChange={e => this.updateField(e)}
                                placeholder="Descrição do produto..." />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Quantidade</label>
                            <input type="number" className="form-control"
                                name="amount"
                                value={this.state.stock.amount}
                                onChange={e => this.updateField(e)}
                            />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Preço</label>
                            <input type="text" className="form-control"
                                name="value"
                                value={this.state.stock.value}
                                onChange={e => this.updateField(e)}
                                placeholder="R$"/>
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={ e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2" onClick={ e => this.reset(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    
    renderTable(){
        return(
            
            <Table striped hover responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>PRODUTO</th>
                        <th>DESCRIÇÃO</th>
                        <th>QUANTIDADE</th>
                        <th>PREÇO UN.</th>
                        <th>VALOR TOTAL</th>
                        <th>AÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableRows()}
                </tbody>
            </Table>
        
        )
    }

    renderTableRows(){
        return this.state.stocks.map(stock => {
            return (
                <tr key={stock.id}>
                    <td>{stock.id}</td>
                    <td>{stock.product}</td>
                    <td>{stock.description}</td>
                    <td>{stock.amount}</td>
                    <td>{stock.value}</td>
                    <td>{stock.value * stock.amount}</td>
                    <td>
                        <button className="btn btn-warning" onClick={() => this.load(stock)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2" onClick={ () => this.remove(stock)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render(){
        return(
            <Content title='Caixa' table={this.renderTable()} form={this.renderForm()}/>   
        )
    }
}