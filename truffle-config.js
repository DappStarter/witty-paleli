require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture strike cost ranch pulse hard light army genre'; 
let testAccounts = [
"0xb1611d6b56f4f2cec535f9244ef1974fec084898e66f8aa4eac073fb2a14b5b7",
"0xaa984d612943de99fe7e7294fec5d0c23f03141b2b3969a6fb9c0302609b6399",
"0xf00bf019caba6d30995f668f497802a68e3b763e3cd5e6aef857d2ea6d6ce781",
"0xe7dc7c03678883d58725d1e35d951a3f071d5af61fa810b8ea3e31f2a1e6107f",
"0x1da5176866d2e354f3752446460102f96f0928b7b9e361f88a8d282d5f78da1d",
"0xc756ac31a8013894084cbf8032231c03f27d38d53077f375975b0c3ac5da8ff6",
"0x396c8a184c6fb526a8260596ddb6aec55e03b22128a5275c9ad94b10cad7ff7e",
"0x49113fdb0b0e8ae822b62e97d748d87a93e6af004049ad390df7e9a5b7f3b166",
"0xdda3819b5d0a3c07ca396e4a57e4debec65b6eb335926ffaffc856378c899b68",
"0x12060ab400347db7553eac217bed1da8b825ed5cb83549fe46a95b3d16614cdd"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
