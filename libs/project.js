import web3 from './web3'
import Project from '../compiled/Project.json'

const contract = address => new web3.eth.Contract(JSON.parse(Project.interface), address)

export default contract