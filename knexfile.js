module.exports = {
    development: {
        client: 'pg',
        connection: "postgress://localhost/randomstuff"
  },
    production: {
        client: 'pg',
        connection: "postgres://vqhywtddylvsdt:uz_5EFUtzOttk-mm1k3f9j3abH@ec2-107-22-184-127.compute-1.amazonaws.com:5432/dcsphg018p62ab?ssl=true"
  }
};
