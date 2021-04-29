require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nasty fresh space stove cruise situate upper inner private slot gentle'; 
let testAccounts = [
"0xc8d37db70d7b686be8d3323c7afd9808f43b7c09b51f791410e2c77a5b32ea0d",
"0x93dd1b66ec7a8862c64cf3758a3c4f3bd1ddc34986c1d651dc17c3e8cb69532d",
"0xb38008a571e9292c7afedf7646414a8b224754f4b7d8f4ea0184defaf2429cb8",
"0xd2bbde62cf4f54efd772b6e2be710d51bee993f4a29754a0691ef032629906e8",
"0x5c14a969d9d33f1642fe89b763b6129f9e820620bd8d9d6f243c3b7278a33b8a",
"0x1f3b3ab4fd4cf34ce2bcf573c20caf0440192a60026db4e918a8ce8fc96642ea",
"0xde842c9caf86873484c65191ae94f8482756d92654aead32e04983c9b116c3fb",
"0x8fac3e7cf4122822725a0fecea7bfb79a1022793b1da243663f85d0d4135e356",
"0x87d0c0063334b953d7eee9a293664578d2f69fecbbe4d7a55b39b3c30ffc2c09",
"0xfd47c1d8ea4fe171c97395ebc521d614e0bd34130947cfea6da873df0585f7f5"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
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
