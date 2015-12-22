
exports.up = function(knex, Promise) {
  return knex.schema.createTable('colors', function(table){
    table.increments();
    table.string('name');
    table.string('code');
  }).then(function(){
    return knex.schema.createTable('numbers', function(table){
      table.increments();
      table.string('name');
      table.integer('numeric');
    })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('colors')
  .then(function(){
    return knex.schema.dropTable('numbers');
  });
};
