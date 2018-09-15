const os = require('os') // 操作系统
let interfaces = os.networkInterfaces() // 网络接口

let showIP = function () {
  let IPv4
  if (process.platform === 'darwin') {
    for (const item of interfaces.en0) {
      if (item.family === 'IPv4') {
        IPv4 = item.address
      }
    }
  } else if (process.platform === 'win32') {
    for (const devName in interfaces) {
      let iface = interfaces[devName]
      for (const item of iface) {
        let alias = item
        if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
          IPv4 = alias.address
        }
      }
    }
  }

  return IPv4
}
module.exports = showIP()
