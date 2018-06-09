const path = require('path')
const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')

// 拿到 bytecode
const contractPath = path.resolve(__dirname, '../compiled/Car.json')
const {interface, bytecode} = require(contractPath)

// 配置 provider
