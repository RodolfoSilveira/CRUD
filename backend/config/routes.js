module.exports = app => {

    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/users/:id')
        .put(app.api.user.save)
        .get(app.api.user.getById)
        .delete(app.api.user.remove)
    
    app.route('/stock')
        .post(app.api.stock.save)
        .get(app.api.stock.get)

    app.route('/stock/:id')
        .put(app.api.stock.save)
        .get(app.api.stock.getById)
        .delete(app.api.stock.remove)
}