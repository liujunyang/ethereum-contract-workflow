const path = require('path')
const Web3 = require('web3')
const HDWalletProvider = require('truffle-hdwallet-provider')

// 拿到bytecode
const contractPath = path.resolve(__dirname, '../compiled', 'Car.json')
const {interface, bytecode} = require(contractPath)

// 配置 provider
const provider = new HDWalletProvider(
  'diesel hill conduct talk educate section giant salon tape vault genre swap',
  'https://rinkeby.infura.io/1E2S9RJLUvKKzy7rf1Mn '
)

// 初始化 web3
const web3 = new Web3(provider)

;(async () => {
  // 获取钱包中的账户
  const accounts  = await web3.eth.getAccounts()
  console.log('部署合约的账户', accounts[0]);
  
  // 创建合约实例并部署
  console.time('contract-deploy')
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments: ['AUDI']})
    .send({from: accounts[0], gas: '1000000'})
  
  console.timeEnd('contract-deploy')
  console.log('合约部署成功', result.options.address);
  
})()