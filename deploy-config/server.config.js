/**
 * 配置服务端口，以及代理
 */
const constants = require('./constants')
const common = 'test'
module.exports = {
  appPort: 9010,
  proxy: {
    '/api/test': constants.loginTargets[common],
    '/v3/assistant': 'http://restapi.amap.com/v3/',
  },
}
