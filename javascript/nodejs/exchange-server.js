const fs = require("fs");
const http = require("http");
const socket = require("socket");
const url = require("url");

const accounts_edb = require("./accounts.edb");
const logs = require("./logs.txt");

const scrypt_a = require("./algos/scrypt.js");
const scryptd_a = require("./algos/scryptd.js");
const scryptt_a = require("./algos/scryptt.js");
const scryptq_a = require("./algos/scryptq.js");
const sha256_a = require("./algos/sha256.js");
const sha256d_a = require("./algos/sha256d.js");
const sha256t_a = require("./algos/sha256t.js");
const sha256q_a = require("./algos/sha256q.js");
const randomx_a = require("./algos/randomx.js");
const x11_a = require("./algos/x11.js");
const x11d_a = require("./algos/x11d.js");
const x11t_a = require("./algos/x11t.js");
const x11q_a = require("./algos/x11q.js");
const x12_a = require("./algos/x12.js");
const x12d_a = require("./algos/x12d.js");
const x12t_a = require("./algos/x12t.js");
const x12q_a = require("./algos/x12q.js");
const x13_a = require("./algos/x13.js");
const x13d_a = require("./algos/x13d.js");
const x13t_a = require("./algos/x13t.js");
const x13q_a = require("./algos/x13q.js");

var cryptocurrencys_listed = ["BTC", "LTC", "MARS", "MOON", "SPACE", "XMR"];
var cryptocurrencys_listed_database = {
    
    "BCH": {
        
        "deposable": 0,
        "exchangable": 0,
        "withdrawable": 0
        
    },
    "BTC": {
        
        "deposable": 0,
        "exchangable": 0,
        "withdrawable": 0
        
    },
    "DASH": {
        
        "deposable": 0,
        "exchangable": 0,
        "withdrawable": 0
        
    },
    "DOGE": {
        
        "deposable": 0,
        "exchangable": 0,
        "withdrawable": 0
        
    },
    "LTC": {
        
        "deposable": 0,
        "exchangable": 0,
        "withdrawable": 0
        
    },
    "MARS": {
        
        "deposable": 0,
        "exchangable": 0,
        "withdrawable": 0
        
    },
    "MOON": {
        
        "deposable": 0,
        "exchangable": 0,
        "withdrawable": 0
        
    },
    "QBASE": {
        
        "deposable": 0,
        "exchangable": 0,
        "withdrawable": 0
        
    },
    "SPACE": {
        
        "deposable": 0,
        "exchangable": 0,
        "withdrawable": 0
        
    },
    "XMR": {
        
        "deposable": 0,
        "exchangable": 0,
        "withdrawable": 0
        
    }
    
};

function decrypt_edb(var edb_hashed_password) {
    
    
    
};
function decrypt_ejsondb(var ejsondb_hashed_password) {
    
    
    
};

function createRawTransaction(var crypto_ticker, var amount, var receiver_address, var fees) {
    
    
    
};
function signRawTransaction(var crypto_ticker, var private_address) {
    
    
    
};
function sendRawTransaction(var cryptocurrency_ticker, var rawtransaction) {
    
    
    
};

function withdraw(var cryptocurrency_ticker, var account_hashed_key, var account_hashed_password, var amount, var receiver, var fees) {
    
    var raw_transaction = "";
    if (cryptocurrency_ticker.isUpperCase()) {
        
        if (cryptocurrencys_listed.includes(cryptocurrency_ticker)) {
            
            if (accounts.includes(account_hashed_key)) {
                
                if (receiver.size() == cryptocurrencys_listed_datas[(cryptocurrency_ticker)["public_key"["size"]]] || receiver == cryptocurrencys_listed_datas[(cryptocurrency_ticker)["burn_address"]]) {
                    
                    if (amount < 0) {
                        
                        if (fees < cryptocurrencys_listed_datas[(cryptocurrency_ticker)["network_minimum_fees"]]) {
                            
                            sendRawTransaction(signRawTransaction(cryptocurrency_ticker, createRawTransaction(cryptocurrency_ticker, amount, receiver, fees)));
                            
                        } else {
                            
                            return (`{'error': 1, 'error_message': 'The fees of ${fees} are smaller than the network minimum fees, equal to 0 or negative !'}`);
                            
                        };
                        
                    } else {
                        
                        return (`{'error': 1, 'error_message': 'The amount ${amount} is equal to 0 or negative !'}`);
                        
                    };
                    
                } else {
                    
                    return (`{'error': 1, 'error_message': 'The receiver public key size is of ${receiver.size} when the normal public key size of the blockchain of the coin is of ${cryptocurrencys_listed_datas.public_key.size}.'}`)
                    
                };
                
            } else {
                
                return (`{'error': 1, 'error_message': 'The account selected to withdraw ${amount} coins from the cryptocurrency ${cryptocurrency_ticker} is not in the accounts database !'}`);
                
            };
            
        } else {
            
            return (`{'error': 1, 'error_message': 'The ticker ${cryptocurrency.ticker} is not in the cryptocurrencys list !'}`);
            
        };
        
    } else {
        
        return ("{'error': 1, 'error_message': 'The cryptocurrency ticker is not in uppercases !'}")
        
    };
    
};
