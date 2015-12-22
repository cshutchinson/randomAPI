exports.seed = function(knex, Promise) {
  return knex("numbers").del().then(function(){
    return Promise.all([
      knex('numbers').insert({id: 1,name: 'one', numeric: 1}),
      knex('numbers').insert({id: 2, name: 'two', numeric: 2}),
      knex('numbers').insert({id: 3, name: 'three', numeric: 3})
    ]);
  });
}
