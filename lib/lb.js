module.exports = async (args, rzki, from, m) => {
//let name = m.fromMe ? zansky.user : zansky.contacts[m.sender] 
let sortedLimit = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].limit - a[1].limit)
//let sortedLim = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].limit - a[1].limit)
let sortedmoney = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].Money - a[1].Money)
let usersLimit = sortedLimit.map(v => v[0])
//let usersLim = sortedLim.map(v => v[0])
let usersmoney = sortedmoney.map(v => v[0])
let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(20, sortedExp.length)
let rpgt = `❏  *T O P - B A L A N C E*

${sortedmoney.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + '\n\n  Saldo :' + data.money + ' ').join`\n`}
`.trim()
rzki.sendText(from, rpgt, m, {
contextInfo: {
mentionedJid: [...usersmoney.slice(0, len)]
}
})
}