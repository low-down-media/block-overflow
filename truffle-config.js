module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  test_directory: "./lib/truffle-tests",
  networks: {
    ganache: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
   }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};
