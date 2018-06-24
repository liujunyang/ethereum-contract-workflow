const Web3 = require('web3')
const HDWalletProvider = require('truffle-hdwallet-provider')
const ProjectList = require('../compiled/ProjectList.json')
const address = require('../address.json')

// 配置 provider
const provider = new HDWalletProvider(
  'diesel hill conduct talk educate section giant salon tape vault genre swap',
  'https://rinkeby.infura.io/1E2S9RJLUvKKzy7rf1Mn '
)

// 初始化 web3
const web3 = new Web3(provider)

const contract = new web3.eth.Contract(JSON.parse(ProjectList.interface), address)

;(async () => {
  // 获取钱包中的账户
  const accounts  = await web3.eth.getAccounts()
  console.log('合约部署账户:', accounts[0]);

  const projects = [
    {
      description: 'Ethereum DApp Tutorial',
      minInvest: web3.utils.toWei('0.01', 'ether'),
      maxInvest: web3.utils.toWei('0.1', 'ether'),
      goal: web3.utils.toWei('1', 'ether'),
    },
    {
      description: 'Ethereum Video Tutorial',
      minInvest: web3.utils.toWei('0.1', 'ether'),
      maxInvest: web3.utils.toWei('1', 'ether'),
      goal: web3.utils.toWei('5', 'ether'),
    },
  ]

  console.log(projects)
  const owner = accounts[0]
  const results = await Promise.all(projects.map(x => 
    contract
      .methods.createProject(x.description, x.minInvest, x.maxInvest, x.goal)
      .send({from: owner, gas: '1000000'})
  ))

  console.log(results)
})()
