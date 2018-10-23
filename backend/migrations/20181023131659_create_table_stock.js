
exports.up = function(knex, Promise) {
    return knex.schema.createTable('stock', table => {
        table.increments('id').primary()
        table.string('product').notNull()
        table.string('description', 1000).notNull()
        table.integer('amount').notNull()
        table.integer('userId').references('id').inTable('users').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('stock')
};
