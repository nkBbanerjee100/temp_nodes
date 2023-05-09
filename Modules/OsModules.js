const { log } = require('console');
const os = require('os');
log(os.homedir);
log(os.platform)
log(os.userInfo)
log(`the system uptime is ${os.uptime()} seconds`)
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
log(currentOS)
