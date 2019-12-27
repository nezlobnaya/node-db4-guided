
exports.up = function(knex) {
  return knex.schema
    .createTable('zoos', tbl => {
        tbl.increments();
        tbl.string('zoo_name', 128).notNullable();
        tbl.string('address', 128).unique().notNullable();
    })
    .createTable('species', tbl => {
        tbl.increments();
        tbl.string('species_name', 128).unique().notNullable();
    })
    .createTable('animals', tbl => {
        tbl.increments();
        tbl.string('animal_name', 128).notNullable();
        tbl.integer('species_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('species')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
    .createTable('zoo_animals', tbl => {
        tbl.integer('zoo_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('zoos')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('animal_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('animals')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.primary(['zoo_id', 'animal_id']);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('zoo_animals')
    .dropTableIfExists('animals')
    .dropTableIfExists('species')
    .dropTableIfExists('zoos');    
};
