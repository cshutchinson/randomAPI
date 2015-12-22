
exports.seed = function(knex, Promise) {
  return knex("colors").del().then(function(){
    return Promise.all([
      knex('colors').insert({id: 1,name: 'cornsilk', code: '#FFF8DC'}),
      knex('colors').insert({id: 2, name: 'DarkSlateGray', code: '#2F4F4F'}),
      knex('colors').insert({id: 3, name: 'DarkViolet', code: '#9400D3'})
    ]);
  });
}
