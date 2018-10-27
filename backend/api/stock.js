module.exports = app => {
    
    const { existsOrError } = app.api.validation

    const save = (req, res) => {

        const stock = {...req.body}

        if(req.params.id) stock.id = req.params.id

        try{
            existsOrError(stock.product, 'Produto não informado!')
        }catch(msg){
            return res.status(400).send(msg)
        }

        if(stock.id){
            app.db('stock')
                .update(stock)
                .where({id: stock.id})
                .then( () => res.status(204).send())
                .catch( err => res.status(500).send(err))
        }else{
            app.db('stock')
                .insert(stock)
                .then( () => res.status(204).send())
                .catch( err => res.status(500).send(err))
        }
    }

    const remove = async (req, res) => {
        try{
            const rowsDeleted = await app.db('stock')
                .where({ id: req.params.id }).del()
            existsOrError(rowsDeleted, 'Produto não encontrado.')

            res.status(204).send()
        }catch(msg){
            res.status(400).send(msg)
        }
    }

    const get = (req, res) => {
        app.db('stock')
            .then( stock => res.json(stock))
            .catch( err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('stock')
            .where({id: req.params.id})
            .first()
            .then( stock => res.json(stock))
            .catch( err => res.status(500).send(err))
    }

    return { save, remove, get, getById}
}