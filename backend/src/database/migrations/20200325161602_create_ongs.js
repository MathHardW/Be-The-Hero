//Método de Criação da Tabela
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable(); 
  });
};

//Voltar atrás
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};

//npx knex migrate:latest
