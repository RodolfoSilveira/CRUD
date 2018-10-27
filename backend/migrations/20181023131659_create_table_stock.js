
exports.up = function(knex, Promise) {
    return knex.schema.createTable('stock', table => {
        table.increments('id').primary()
        table.string('product').notNull()
        table.string('description', 100).notNull()
        table.integer('amount').notNull()
        table.float('value').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('stock')
};
