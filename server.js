var Express = require('express');
var app = Express();

var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

var knex = require('knex')({
  client: "pg",
  connection: "postgress://localhost/randomstuff"
});

app.get('/colors', function(req, res){
  knex('colors').select().then(function(colors){
    res.status(200).json(colors);
  });
});

app.get('/colors/:id', function(req, res){
  knex('colors').select().where('id', req.params.id).then(function(color){
    res.status(200).json(color);
  });
});

app.post('/colors/new', function(req, res){
  knex('colors').insert({
    name: req.body.name,
    code: req.body.code
  }).returning('*').then(function(inserted_color){
    res.status(200).json(inserted_color);
  }).catch(function(err){
    console.log(err);
  });
});

app.put('/colors/:id/edit', function(req, res){
  knex('colors').where('id', '=', req.params.id).update
    ({
      name: req.body.name,
      code: req.body.code
    }).returning('*').then(function(edited_color){
      res.status(200).json(edited_color);
    }).catch(function(err){
      console.log(err);
    });
});

app.delete('/colors/:id/delete', function(req, res){
  knex('colors').where('id', '=', req.params.id).del()
  .returning('id').then(function(deleted_color){
    res.status(200).json(deleted_color);
  }).catch(function(err){
    console.log(err);
  })
})


app.get('/numbers', function(req, res){
  knex('numbers').select().then(function(numbers){
    res.status(200).json(numbers);
  }).catch(function(err){
    console.log(err);
  })
})


app.listen(8080, function(){
  console.log('API listening on 8080:');
})
