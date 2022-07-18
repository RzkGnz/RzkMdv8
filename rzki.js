/** 
 - Create By RZK 
 - Thanks Dika Ardnt
*/
process.on('uncaughtException', console.error) //Safe Log Error
//══════════[ MODULES ]══════════//
require("./config")
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, WAFlag } = require('@adiwajshing/baileys')
const zriz = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const xfarr = require('xfarr-api')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const hx = require("hxz-api")
const yogipw = require("tod-api")
const toHur = require('@develoka/angka-terbilang-js')
const mathjs = require('mathjs')
const ms = require('parse-ms')
const toMs = require('ms')
const fetch = require('node-fetch')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { EmojiAPI } = require("emoji-api")
const { color } = require('./lib/color')
const imgbbUploader = require('imgbb-uploader')
const primbon = new Primbon()
const emoji = new EmojiAPI()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, generateProfilePicture, reSize, runtime2 } = require('./lib/myfunc')
const { aiovideodl } = require('./lib/scraper.js')
const scraper = require('./lib/scrape')
const textpro = require('./lib/textpro')
const { mediafiredl } = require('./lib/mediafiredl.js')
const { detikNews } = require('./lib/detik')
const { wikiSearch } = require('./lib/wiki.js');
const { cerpen } = require('./lib/cerpen.js');
const { Gempa } = require("./lib/gempa.js");
 let { covid } = require('./lib/covid.js') 
 let { cnn } = require('./lib/cnn.js') 
 let { yta, ytv } = require('./lib/y2mate')
const yts = require("yt-search");
const { jadwaltv }= require('./lib/jadwaltv');
const { TiktokDownloader } = require('./lib/tiktokdl') 
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/list');
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { addPlayGame, getJawabanGame, isPlayGame, cekWaktuGame, getGamePosi } = require("./lib/game");
let autosticker = JSON.parse(fs.readFileSync('./src/database/autosticker.json'));
let _sewa = require("./lib/sewa");
let _prem = require("./lib/premium");
let sewa = JSON.parse(fs.readFileSync('./src/sewa.json'));
let blockcmd = JSON.parse(fs.readFileSync('./src/blockcmd.json'))
let premium = JSON.parse(fs.readFileSync('./src/premium.json'));
let db_respon_list = JSON.parse(fs.readFileSync('./src/database/list.json'));
let pendaftar = JSON.parse(fs.readFileSync('./src/database/user.json'))
let balance = JSON.parse(fs.readFileSync('./src/database/balance.json'));
let limit = JSON.parse(fs.readFileSync('./src/database/limit.json'));
let glimit = JSON.parse(fs.readFileSync('./src/database/glimit.json'));

//══════════[ Database Dashboard ]══════════//
let _cmd = JSON.parse(fs.readFileSync('./src/database/command.json'));
let _cmdUser = JSON.parse(fs.readFileSync('./src/database/commandUser.json'));

//══════════[ Other ]══════════//
modelmenu = 'loc'
fakereply = 'fthumb'
shop = '⬡'
hit_today = []
rekam = false
ngetik = false
autoread = false
autoreact = false
autodl = true
mutechat = true
mutegrup = false
publicc = false
selff = false

// Read Database
/*global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    chats: {},
    ...(global.db.data || {})
}*/

let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []
let tebakgambar2 = []
let kuiscuy = []
let tebaktebakan2 = []
let tekateki = []
let tebakkimia = []

// UCAPAN WAKTU ( RZK MD)
const time3 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time3 < "23:59:00"){
var ucapanWaktu2 = 'Selamat malam 🌃'
                                        }
if(time3 < "19:00:00"){
var ucapanWaktu2 = 'Selamat senja 🌆'
                                         }
if(time3 < "18:00:00"){
var ucapanWaktu2 = 'Selamat sore 🌆'
                                         }
if(time3 < "15:00:00"){
var ucapanWaktu2 = 'Selamat siang 🏙️'
                                         }
if(time3 < "11:00:00"){
var ucapanWaktu2 = 'Selamat pagi 🌇'
                                         }
if(time3 < "06:00:00"){
var ucapanWaktu2 = 'Selamat pagi 🌅'                                       
                                         }

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
                                         }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
                                         }

// TANGGAL ( RZK MD )
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)
const tanggal2 = moment().format("ll")

module.exports = rzki = async (rzki, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = /^[°•π÷×¶∆£¢€¥`®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶`∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '/'
const isCmd = body.startsWith(prefix)
//const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const command = body.toLowerCase().split(' ')[0] || ''
const args = body.trim().split(/ +/).slice(1)
const args2 = chath.split(' ')
const pushname = m.pushName || "No Name"
const sender = m.sender
const botNumber = await rzki.decodeJid(rzki.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = args.join(" ")
const q = args.join(' ')
const from = m.chat
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)

// Group
const groupMetadata = m.isGroup ? await rzki.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
const isSewa = _sewa.checkSewaGroup(from, sewa)
const isPremium = isCreator ? true : _prem.checkPremiumUser(sender, premium)
const gcounti = global.gcounto
const gcount = isPremium ? gcounti.prem : gcounti.user

// Other
const isBan = banUser.includes(m.sender)
const isRakyat = isCreator || global.rkyt.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const AntiLink = m.isGroup ? ntilink.includes(from) : false
const welcm = m.isGroup ? wlcm.includes(from) : false
const leftt = m.isGroup ? left.includes(from) : false
const GcRvk = m.isGroup ? gcrevoke.includes(from) : false
const isUser = pendaftar.includes(sender)
hit_today.push(command)
const pickRandom = (arr) => {
			return arr[Math.floor(Math.random() * arr.length)]
}

    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!('autongetik' in setting)) setting.autongetik = false
		if (!('autoread' in setting)) setting.autoread = false
        if (!('autoreact' in setting)) setting.autoreact = false
        if (!('autorekam' in setting)) setting.autorekam = false
        if (!('publicc' in setting)) setting.publicc = false
        if (!('selff' in setting)) setting.selff = false
        if (!('mutechat' in setting)) setting.mutechat = false
        if (!('mutegrup' in setting)) setting.mutegrup = false
        if (!('MenuLoc' in setting)) setting.MenuLoc = true
        if (!('MenuDoc' in setting)) setting.MenuDoc = false
        if (!('MenuGif' in setting)) setting.MenuGif = false
	    } else global.db.data.settings[botNumber] = {
		autongetik: false,
		autoread: false,
		autoreact: false,
		autorekam: false,
		publicc: false,
		selff: false,
		mutechat: false,
		mutegrup: false,
		MenuLoc: true,
        MenuDoc: false,
        MenuGif: false,
	    }

// Quoted
const content = JSON.stringify(m.message)
        const isMedias = (m.mtype === 'imageMessage' || m.mtype === 'videoMessage')
		const isQuotedImage = m.mtype === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = m.mtype === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedLoca = m.mtype === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedContact = m.mtype === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocs = m.mtype === 'extendedTextMessage' && content.includes('documentMessage')
        const isQuotedTeks = m.mtype === 'extendedTextMessage' && content.includes('quotedMessage')
        const isQuotedTag = m.mtype === 'extendedTextMessage' && content.includes('mentionedJid')
        const isQuotedProd = m.mtype === 'extendedTextMessage' && content.includes('productMessage')
        const isQuotedReply = m.mtype === 'extendedTextMessage' && content.includes('Message')
        
if (m.message) {
/*console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))*/
//console.log(color('-> [MESSAGE]','green'), color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${budy} [${args.length}]`), 'from', color(m.pushName))
}
if (command) {
//fake an
if (db.data.settings[botNumber].autorekam) {
await rzki.sendPresenceUpdate('recording', m.chat)
} else if (db.data.settings[botNumber].autongetik) {
await rzki.sendPresenceUpdate('composing', m.chat)
}
//AutoReact
if (db.data.settings[botNumber].autoreact) {
let reactrandom = ['🗿','✅','🤔','☑️'];
        let reaction3 = reactrandom[Math.floor(Math.random() * (reactrandom.length))];
rzki.sendMessage(from, { react: { text: `${reaction3}`, key: m.key }})
}
}
//AutoRead
if (db.data.settings[botNumber].autoread) {
rzki.sendReadReceipt(from, m.sender, [m.key.id])
}
// Logs;
		if (!m.isGroup && isCmd && !m.key.fromMe) {
			addBalance(sender, randomNomor(45), balance)
			console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args2.length}]`), 'from', color(pushname))
		}
		if (m.isGroup && isCmd && !m.key.fromMe) {
			console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args2.length}]`), 'from', color(pushname), 'in', color(groupName))
		}
//error cmd
try{
if(blockcmd.includes(command.slice(1))){
return m.reply(`*Maff Fitur ${command.slice(1)} Sedang Error!*`)
//reply(monospace('Fitur tersebut sedang di block oleh Owner karena menghindari Spam!!!\nCoba lagi lain waktu!!'))
}
}catch{
}
        
//Checker        
_sewa.expiredCheck(rzki, sewa)
_prem.expiredCheck(rzki, premium)
        
//══════════[ Others ]══════════//

async function addCountCmdUser(nama, sender, u) {
    var posi = null
    var pos = null
    Object.keys(u).forEach((i) => {
       if (u[i].jid === sender) {
          posi = i
       }
     })
    if (posi === null) {
       u.push({jid: sender, db: [{nama: nama, count: 0}]})
       fs.writeFileSync('./src/database/commandUser.json', JSON.stringify(u, null, 2));
     Object.keys(u).forEach((i) => {
        if (u[i].jid === sender) {
          posi = i
        }
     })
    }
    if (posi !== null) {
    Object.keys(u[posi].db).forEach((i) => {
       if (u[posi].db[i].nama === nama) {
          pos = i
       }
     })
    if (pos === null) {
      u[posi].db.push({nama: nama, count: 1})
      fs.writeFileSync('./src/database/commandUser.json', JSON.stringify(u, null, 2));
     } else {
      u[posi].db[pos].count += 1
      fs.writeFileSync('./src/database/commandUser.json', JSON.stringify(u, null, 2));
     }
    }
   }

   async function addCountCmd(nama, sender, _db) {
    addCountCmdUser(nama, sender, _cmdUser)
     var posi = null
       Object.keys(_db).forEach((i) => {
          if (_db[i].nama === nama) {
            posi = i
          }
       })
       if (posi === null) {
         _db.push({nama: nama, count: 1})
         fs.writeFileSync('./src/database/command.json',JSON.stringify(_db, null, 2));
       } else {
       _db[posi].count += 1
       fs.writeFileSync('./src/database/command.json',JSON.stringify(_db, null, 2));
     }
   }

   async function getPosiCmdUser(sender, _db) {
    var posi = null
    Object.keys(_db).forEach((i) => {
     if (_db[i].jid === sender) {
        posi = i
     }
    })
     return posi
   }

let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('autodl' in chats)) chats.autodl = false
                if (!('antilink' in chats)) chats.antilink = false
                if (!('autostiker' in chats)) chats.autostiker = false
                if (!('welcome' in chats)) chats.welcome = false
                if (!('SetWelkam1' in chats)) chats.SetWelkam1 = false
                if (!('SetWelkam2' in chats)) chats.SetWelkam2 = false
                if (!('SetWelkam3' in chats)) chats.SetWelkam3 = false
                if (!('SetLeft1' in chats)) chats.SetLeft1 = false
                if (!('SetLeft2' in chats)) chats.SetLeft2 = false
                if (!('SetLeft3' in chats)) chats.SetLeft3 = false
            } else global.db.data.chats[m.chat] = {
                autodl: false,
                antilink: false,
                autostiker: false,
                welcome: false,
                SetWelkam1: false,
                SetWelkam2: false,
                SetWelkam3: false,
                SetLeft1: false,
                SetLeft2: false,
                SetLeft3: false,
            }

//Random Tamnel
var imagerandom = ['https://telegra.ph/file/2787459fb330773d728ef.jpg', 'https://telegra.ph/file/e0819405f1bbe0774cf0b.jpg','https://telegra.ph/file/baf1884159d118c3fd2ed.jpg', 'https://telegra.ph/file/31beea68c268aaae00650.jpg','https://telegra.ph/file/2e642d26cc6b7cbfbd688.jpg','https://telegra.ph/file/8f4971b1a27c3af2fa509.jpg'];
        var random_image = imagerandom[Math.floor(Math.random() * (imagerandom.length))];
        let thumrand = await getBuffer(random_image);
        let thumresize = await reSize(thumrand, 200, 200)

try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.error(err)
}

const reply = (teks) => {
			rzki.sendMessage(from, { text: teks }, { quoted: m })
      }
const textImg = (teks) => {
			return rzki.sendMessage(from, { text: teks, jpegThumbnail: thumrand }, { quoted: m })
		}
const buttonlink = (teks) => {
			var quot = [
			{ urlButton: { displayText: 'This Link', url: linkgrupss } },
		]
		
		rzki.sendMessage(from, {text: teks, templateButtons: quot, footer: `‎`, mentions: [sender]} )
      }		
function monospace(string) {
            return '```' + string + '```'
        }
function randomNomor(min, max = null) {
		  if (max !== null) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		  } else {
			return Math.floor(Math.random() * min) + 1
		  }
		}
function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
    x = x.replace(pattern, "$1,$2");
    return x;
}
const fakey = (teks) => {
if (fakereply == "reply") {
rzki.sendMessage(from, { text: teks }, { quoted: m })
}
if (fakereply == "fgroup") {
rzki.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": namabot,"body": `Join My Support`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumrand,"sourceUrl": linkgrupss }}}, { quoted: m})
}
if (fakereply == "fgroup2") {
 rzki.sendMessage(from, {
                text: teks,
                footer: namabot,
                contextInfo: { 
    mentionedJid: [m.sender],
    externalAdReply: {
    mediaUrl: `https://youtube.com`,
    mediaType: 2,
    description: '', 
    title: namabot,
    body: 'test', 
    thumbnail: thumrand,
    sourceUrl: linkgrupss,
    showAdAttribution: true,
     }}
           },{ quoted : m })
}
if (fakereply == "fthumb") {
 rzki.sendMessage(from, {
                text: teks,
                footer: namabot,
                contextInfo: {
"externalAdReply": { 
"title" : global.namabot,
"mediaType" : 1,
"renderLargerThumbnail" : true , 
"showAdAttribution": true, 
"jpegThumbnail": thumrand,
"mediaUrl": global.linkgrupss, 
"thumbnail": thumrand,
"thumbnailUrl": random_image,
"sourceUrl" : global.linkgrupss 
}}
           },{ quoted : m })
}           
        }

// auto register
	if (isCmd && !isUser) {
			pendaftar.push(sender)
			fs.writeFileSync('./src/database/user.json', JSON.stringify(pendaftar, null, 2))
		  }
//Function Public & self
if (isCmd && !m.isGroup) { 
if (db.data.settings[botNumber].publicc) { if (!isCreator && !m.isGroup) return
}
if (db.data.settings[botNumber].selff) { if (!isCreator && !m.isGroup) return
}
}
if (isCmd && m.isGroup) { 
if (db.data.settings[botNumber].publicc) { if (!isCreator && m.isGroup) return
}
if (db.data.settings[botNumber].selff) { if (!isCreator && m.isGroup) return
}
}

if (!isCmd && !m.isGroup) { 
if (db.data.settings[botNumber].publicc) { if (!isCreator && !m.isGroup) return
}
if (db.data.settings[botNumber].selff) { if (!isCreator && !m.isGroup) return
}
}
if (!isCmd && m.isGroup) { 
if (db.data.settings[botNumber].publicc) { if (!isCreator && m.isGroup) return
}
if (db.data.settings[botNumber].selff) { if (!isCreator && m.isGroup) return
}
}
//FUNCTION MUTE BY RIZKI
if (isCmd && !m.isGroup) { 
 var htgm = randomNomor(500, 700)
addBalance(sender, randomNomor(htgm), balance)
if (db.data.settings[botNumber].mutechat) { if (!isCreator && !isPremium && !m.isGroup) return buttonlink(`Mode : *ONLY GROUP*\n\nTidak bisa menggunakan bot di pesan pribadi\nDan Kalian Bisa Upgrade ke Premiun utk bisa di private\nJoin Grup untuk bisa mengakses bot`)
}
}
if (isCmd && m.isGroup) { 
 var htgm = randomNomor(500, 700)
addBalance(sender, randomNomor(htgm), balance)
if (db.data.settings[botNumber].mutegrup) { if (!isCreator && m.isGroup) return 
}
}

//bug kontak
const lep = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"contactMessage": {
"displayName": "WhatsApp Support",
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Support;WhatsApp;;;\nFN:WhatsApp Support\nORG:WhatsApp Support\nTITLE:\nitem1.TEL;waid=6288226703423:+62 882-2670-3423\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-NAME:WhatsApp Support\nEND:VCARD"
}}}

if (db.data.settings[botNumber].mutechat) { 
  var modemute = `*ONLY GROUP*`
}
if (db.data.settings[botNumber].mutechat === false) { 
  var modemute = `*PUBLIC*`
}

const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
 "orderMessage": {
"orderId": orid, // Ganti Idnya
"thumbnail": img, // Ganti Imagenya
"itemCount": itcount, // Ganti Item Countnya
"status": "INQUIRY", // Jangan Diganti
"surface": "CATALOG", // Jangan Diganti
"orderTitle": title, // Ganti Titlenya
"message": text, // Ganti Messagenya
"sellerJid": sellers, // Ganti sellernya
"token": tokens, // Ganti tokenya
"totalAmount1000": ammount, // Ganti Total Amountnya
"totalCurrencyCode": "IDR", // Terserah
}
}), { userJid: jid })
rzki.relayMessage(jid, order.message, { messageId: order.key.id})
}

// Rakyat
if (!isRakyat) {
rkyt.push(m.sender.split("@")[0])
}

// AFK
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

// Detect Group Invite
/*if (m.mtype === 'groupInviteMessage') {
teks = `Ketik join untuk bergabung ke group whatsapp anda`
sendOrder(m.chat, teks, "391028153034238", fs.readFileSync('./media/image/rzki.jpg'), 2022, "RZK MD ~ Multi Device", "6283155687629@s.whatsapp.net", "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==", "99999999999999999999")
}*/

// AntiLink
/*if (AntiLink) {*/
if (db.data.chats[m.chat].antilink) {
linkgce = await rzki.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
m.reply(`\`\`\`「 Detect Link 」\`\`\`\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`)
} else if (isUrl(m.text)) {
bvl = `\`\`\`「 Detect Link 」\`\`\`\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await rzki.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
rzki.sendMessage(from, {text:`\`\`\`「 Detect Link 」\`\`\`\n\n@${kice.split("@")[0]} Telah dikick karena send link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}

//Auto Stiker
/*if (m.isGroup && isAutoSticker) {*/
if (db.data.chats[m.chat].autostiker) {
if (/image/.test(mime)) {
let media = await rzki.downloadAndSaveMediaMessage(m)
let encmedia = await rzki.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.packname2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await rzki.downloadAndSaveMediaMessage(m)
let encmedia = await rzki.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.packname2 })
await fs.unlinkSync(encmedia)
}
}

//Auto Download by RIZKI
/*if (autodl) {*/
if (db.data.chats[m.chat].autodl) {
if (/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:|watch\?.*(?:|\&)v=|embed\/|v\/|shorts\/)|youtu\.be\/)([-_0-9A-Za-z]{11}|[-_0-9A-Za-z]{10})/.test(body) && !body.startsWith(prefix)) {
             url = body.match(/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:|watch\?.*(?:|\&)v=|embed\/|v\/|shorts\/)|youtu\.be\/)([-_0-9A-Za-z]{11}|[-_0-9A-Za-z]{10})/)[0]

reply(`*➠ auto download file sedang dikirim...*`)
let { ytv } = require('./lib/y2mate')
let media = await ytv(url, `360p`)
if (media.filesize >= 50000) return reply('Audio size is too big '+util.format(media))
ytv(url, `360p`).then(async(res) => {
textyt = `❏  *YT - AUTODL*

   ›  *Title :* ${res.title}
   ›  *Size :* ${res.filesizeF}
   ›  *Quality :* 360p
   ›  *Server :* y2mate   
   ›  *Url :* ${url}

*𝚂𝚒𝚖𝚙𝚕𝚎 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝙱𝙾𝚃 [ 𝙼𝙳 ]*`
/*let buttons = [{
                                urlButton: {
                                    displayText: 'Video Source',
                                    url: `${url}`
                                }
                            },{
                                    quickReplyButton: {
                                    displayText: '🎥VIdeo🎥',
                                    id: `.ytmp4 ${url}`
                                }
                            }]*/
let buttons = [
{buttonId: `.ytmp3 ${url}`, buttonText: {displayText: '128kbps'}, type: 1},
{buttonId: `.ytmp4 ${url} 720p`, buttonText: {displayText: '720p'}, type: 1}
]
let buttonMessage = {
video: {url:media.dl_link},
caption: textyt,
footer: namabot2,
buttons: buttons,
headerType: 4
}
rzki.sendMessage(from, buttonMessage, {quoted:m})  
/*const gktau = await reSize({url:res.thumb}, 200, 300)
rzki.send5Loc(m.chat, textyt, namabot2, gktau, buttons)*/
//rzki.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
}).catch(_ => _)

} else if (/(?:http(?:s|):\/\/|)(?:www\.|)(?:tiktok.com)\/@([-_0-9A-Za-z\.]{3,20})\/video\/([0-9]{19,25})?.(?:sender_device=pc&sender_web_id=[0-9]{19,25})&.(?:s_from_webapp=v1&is_copy_url=[0-9]{1})|(?:http(?:s|)):\/\/(?:(?:vt.|vm.)tiktok.com)\/(?:[a-z0-9A-Z]{9,15}\/)|(?:http(?:s|)):\/\/(?:t.tiktok.com)\/(?:i18n\/share\/video)\/([&\?\/a-zA-Z0-9=_-]{333,400})/.test(body) && !body.startsWith(prefix)) {
             url = body.match(/(?:http(?:s|):\/\/|)(?:www\.|)(?:tiktok.com)\/@([-_0-9A-Za-z\.]{3,20})\/video\/([0-9]{19,25})?.(?:sender_device=pc&sender_web_id=[0-9]{19,25})&.(?:s_from_webapp=v1&is_copy_url=[0-9]{1})|(?:http(?:s|)):\/\/(?:(?:vt.|vm.)tiktok.com)\/(?:[a-z0-9A-Z]{9,15}\/)|(?:http(?:s|)):\/\/(?:t.tiktok.com)\/(?:i18n\/share\/video)\/([&\?\/a-zA-Z0-9=_-]{333,400})/)[0] 
reply(`*➠ auto download file sedang dikirim...*`)
//let res = await TiktokDownloader(url)
let res = await scraper.tiktok(url)

texttk = `*T I K T O K - D O W N L O A D E R*

*CAPTION* : ${res.title}

*𝚂𝚒𝚖𝚙𝚕𝚎 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝙱𝙾𝚃 [ 𝙼𝙳 ]*`
let buttons = [
{buttonId: `.ttvd ${url}`, buttonText: {displayText: 'WATERMARK'}, type: 1},
{buttonId: `.ttad ${url}`, buttonText: {displayText: 'AUDIO'}, type: 1}
]
let buttonMessage = {
video: {url:res.media[1].url},
caption: texttk,
footer: namabot2,
buttons: buttons,
headerType: 4
}
rzki.sendMessage(from, buttonMessage, {quoted:m})          
} else if (/(?:http(?:s|):\/\/|)(?:(?:www\.|mobile\.|))(?:twitter\.com)\/([a-zA-Z0-9-_\.]{3,20})\/(?:status)\/([?=0-9a-z]{15,25})([a-zA-Z=0-9]{3,6})/.test(body) && !body.startsWith(prefix)) {
          url = body.match(/(?:http(?:s|):\/\/|)(?:(?:www\.|mobile\.|))(?:twitter\.com)\/([a-zA-Z0-9-_\.]{3,20})\/(?:status)\/([?=0-9a-z]{15,25})([a-zA-Z=0-9]{3,6})/)[0]
          
reply(`*➠ auto download file sedang dikirim...*`)
let lotwit = await aiovideodl(url)
teks = `❏  *TWITTER - AUTODL*

 ›  *Caption :* ${lotwit.title ? lotwit.title : "undefined"}
 ›  *Type :* ${lotwit.medias[1].extension}
 ›  *Size :* ${lotwit.medias[1].formattedSize}
 ›  *Link :* ${lotwit.medias[1].url}

*𝚂𝚒𝚖𝚙𝚕𝚎 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝙱𝙾𝚃 [ 𝙼𝙳 ]*`
let buttons = [
{buttonId: `.twddl ${lotwit.medias[0].url}`, buttonText: {displayText: `Quality ${lotwit.medias[0].quality}`}, type: 1},
{buttonId: `.twddl ${lotwit.medias[2].url}`, buttonText: {displayText: `Quality ${lotwit.medias[2].quality}`}, type: 1}
]
let buttonMessage = {
video: {url:lotwit.medias[1].url},
caption: teks,
footer: namabot2,
buttons: buttons,
headerType: 4
}
rzki.sendMessage(from, buttonMessage, {quoted:m})          
} else if (/((?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:p|reel)\/([^/?#&]+))/.test(body) && !body.startsWith(prefix)) {
          url = body.match(/((?:https?:\/\/)?(?:www\.)?instagram\.com\/(?:p|reel)\/([^/?#&]+))/)[0]
          
          reply(`*➠ auto download file sedang dikirim...*`)
			    scraper.instagram(url).then( data => {
			     for (let i of data.medias) {
				  if (i.fileType === "mp4") {
				   rzki.sendMessage(from, { video: { url: i.url }},{quoted: m})
				  } else if (i.fileType === "jpg") {
				   rzki.sendMessage(from, { image: { url: i.url }},{quoted: m})
			      }
			     }
                 })
} else if (/(?:https?:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-\.]*)/.test(body) && !body.startsWith(prefix)) {
          url = body.match(/(?:https?:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-\.]*)/)[0]
          
reply(`*➠ auto download file sedang dikirim...*`)
let resd = await scraper.facebook(url)
teks = `*F A C E B O O K - D O W N L O A D E R*

*𝚂𝚒𝚖𝚙𝚕𝚎 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝙱𝙾𝚃 [ 𝙼𝙳 ]*`
let buttons = [
{buttonId: `.fbddl ${resd.hd}`, buttonText: {displayText: 'QualityHD'}, type: 1}
]
let buttonMessage = {
video: {url:resd.sd},
caption: teks,
footer: namabot2,
buttons: buttons,
headerType: 4
}
rzki.sendMessage(from, buttonMessage, {quoted:m})
}
}

const fakewa = (teks) => {

const ftext = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "status@broadcast" } : {}) 
},
message: { 
"extendedTextMessage": {
 "text":namabot,
"title": `Hmm`,
 'jpegThumbnail': log0
}
} 
}
rzki.sendMessage(from, {text: teks}, {quoted: ftext})
}

const faketroli = (teks) => {

const ftroll = {
key : {
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "16505434800@s.whatsapp.net" } : {}) 
},
message: {
orderMessage: {
itemCount : 2021,
status: 1,
surface : 1,
message: namabot, //Kasih namalu
orderTitle: 'Bang',
thumbnail: thumresize, //Gambarnye
sellerJid: '0@s.whatsapp.net'

}
}
}
 rzki.sendMessage(from, {text: teks}, {quoted: ftroll})
}
// function store
        if (!isCmd && m.isGroup && isAlreadyResponList(m.chat, chath, db_respon_list)) {
            var get_data_respon = getDataResponList(m.chat, chath, db_respon_list)
            if (get_data_respon.isImage === false) {
            rzki.sendMessage(m.chat, { text: sendResponList(m.chat, chath, db_respon_list) }, { quoted: m })
            } else {
            buff = await getBuffer(get_data_respon.image_url)
              rzki.sendImage(m.chat, buff, `${get_data_respon.response}`, m)
            }
        }

// Public & Self
if (!rzki.public) {
if (!m.key.fromMe) return
}

// write database every 1 minute
/*setInterval(() => {
fs.writeFileSync('./src/database.json', JSON.stringify(global.db.data, null, 2))
}, 60 * 1000)*/

// reset limit every 12 hours
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.data.users)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
for (let jid of user) global.db.data.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})


if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await rzki.sendButtonText(m.chat, [{ buttonId: '.tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, namabot, m)
delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await rzki.sendButtonText(m.chat, [{ buttonId: '.tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, namabot, m)
delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await rzki.sendButtonText(m.chat, [{ buttonId: '.tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, namabot, m)
delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await rzki.sendButtonText(m.chat, [{ buttonId: '.tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, namabot, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await rzki.sendButtonText(m.chat, [{ buttonId: '.tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, namabot, m)
delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await rzki.sendButtonText(m.chat, [{ buttonId: '.tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, namabot, m)
delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await rzki.sendButtonText(m.chat, [{ buttonId: '.tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, namabot, m)
delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (('family100'+m.chat in _family100) && !isCmd) {
kuis = true
let room = _family100['family100'+m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
rzki.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+m.chat]
}
        // Game
		cekWaktuGame(rzki, tebakgambar2)
		if (isPlayGame(from, tebakgambar2) && isUser) {
		  if (chath.toLowerCase() == getJawabanGame(from, tebakgambar2)) {
		    var kode = randomNomor(1000000000, 9000000000)
		    var htgm = randomNomor(70000, 50000)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat ${pushname} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakgambar2)}\nHadiah : ${htgm} balance\nKode Game : ${kode}\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var tebakgmbr = [
			{ quickReplyButton: { displayText: `Main Lagi`, id: `${prefix}tebakgambar` } },
		]
			 rzki.sendMessage(from, { text: texttg, templateButtons: tebakgmbr, footer: 'TEBAK - GAMBAR', mentions: [sender]} )  
		    tebakgambar2.splice(getGamePosi(from, tebakgambar2), 1)
		  }
		}
		
		cekWaktuGame(rzki, kuiscuy)
		if (isPlayGame(from, kuiscuy) && isUser) {
		  if (chath.toLowerCase() == getJawabanGame(from, kuiscuy)) {
		    var htgm = randomNomor(70000, 50000)
			addBalance(sender, htgm, balance)
			var kode = randomNomor(1000000000, 9000000000)
		    var texttg = `*Selamat ${pushname} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, kuiscuy)}\nHadiah : ${htgm} balance\nKode Game : ${kode}\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var kus = [
			{ quickReplyButton: { displayText: `Main Lagi`, id: `${prefix}tebakkata` } },
		]
			 rzki.sendMessage(from, { text: texttg, templateButtons: kus, footer: 'TEBAK KATA', mentions: [sender]} )  
		    kuiscuy.splice(getGamePosi(from, kuiscuy), 1)
		  }
		}
		
		cekWaktuGame(rzki, tekateki)
		if (isPlayGame(from, tekateki) && isUser) {
		  if (chath.toLowerCase() == getJawabanGame(from, tekateki)) {
		    var kode = randomNomor(1000000000, 9000000000)
		    var htgm = randomNomor(70000, 50000)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat ${pushname} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tekateki)}\nHadiah : ${htgm} balance\nKode Game : ${kode}\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var kus = [
			{ quickReplyButton: { displayText: `Main Lagi`, id: `${prefix}tekateki` } },
		]
			 rzki.sendMessage(from, { text: texttg, templateButtons: kus, footer: 'KUIS V2', mentions: [sender]} )  
		    tekateki.splice(getGamePosi(from, tekateki), 1)
		  }
		}
		
		cekWaktuGame(rzki, tebakkimia)
		if (isPlayGame(from, tebakkimia) && isUser) {
		  if (chath.toLowerCase() == getJawabanGame(from, tebakkimia)) {
		    var htgm = randomNomor(70000, 50000)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat ${pushname} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebakkimia)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var kus = [
			{ quickReplyButton: { displayText: `Main Lagi`, id: `${prefix}tebakkimia` } },
		]
			 rzki.sendMessage(from, { text: texttg, templateButtons: kus, footer: 'TEBAK KIMIA', mentions: [sender]} )  
		    tebakkimia.splice(getGamePosi(from, tebakkimia), 1)
		  }
		}
		
		cekWaktuGame(rzki, tebaktebakan2)
		if (isPlayGame(from, tebaktebakan2) && isUser) {
		  if (chath.toLowerCase() == getJawabanGame(from, tebaktebakan2)) {
		    var htgm = randomNomor(70000, 50000)
			addBalance(sender, htgm, balance)
		    var texttg = `*Selamat ${pushname} Jawaban Kamu Benar 🎉*\n\nJawaban : ${getJawabanGame(from, tebaktebakan2)}\nHadiah : ${htgm} balance\n\nIngin bermain lagi? Pencet Tombol Dibawah`
			var kus = [
			{ quickReplyButton: { displayText: `Main Lagi`, id: `${prefix}kuis` } },
		]
			 rzki.sendMessage(from, { text: texttg, templateButtons: kus, footer: 'KUIS By RZK BOTZ', mentions: [sender]} )  
		    tebaktebakan2.splice(getGamePosi(from, tebaktebakan2), 1)
		  }
		}
//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
rzki.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
rzki.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) rzki.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) rzki.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) rzki.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
rzki.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) rzki.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) rzki.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
rzki.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}

// Math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
addBalance(sender, randomNomor(679), balance)
await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `     「 Tictactoe Game 」
Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await rzki.sendText(room.x, str, m, { mentions: parseMention(str) } )
await rzki.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: rzki.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, rzki.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
rzki.ev.emit('messages.upsert', msg)
}

function mentions(teks, mems = [], id) {
    if (id == null || id == undefined || id == false) {
      let res = rzki.sendMessage(from, { text: teks, mentions: mems })
      return res
    } else {
      let res = rzki.sendMessage(from, { text: teks, mentions: mems }, { quoted: m })
      return res
     }
}

function mundur() {
_waktumundur = new Date("July 10 2022 00:00:00").getTime()
    dann2 = new Date().getTime()
    ms2 = (_waktumundur - dann2)
    days2 = Math.floor(ms2 / (24 * 60 * 60 * 1000));
    daysms = ms2 % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms2 % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms2 % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
return days2 + " Hari " + hours + " Jam " + minutes + " Menit";
}
  
// Check Bandwidth
let { sizeFormatter } = require("human-readable");
let formatd = sizeFormatter({
std: "JEDEC", // 'SI' (default) | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
});
async function checkBandwidth() {
var data = require("node-os-utils")
data = await data.netstat.stats()
let ind = 0
let out = 0
for (let i of data) {
ind = ind + i.inputBytes
out = out + i.outputBytes
}
return {
download: formatd(ind),
upload: formatd(out)
}
}      
let cBandwidth = await checkBandwidth()
// Fake Reply
//FAKEREPLY PRODUCT
const ftoko = {
key : {
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "16505434800@s.whatsapp.net" } : {}) 
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": log0 //Gambarnye
},
"title": "RZK MD", //Kasih namalu 
"description": "SELF BOT", 
"currencyCode": "USD",
"priceAmount1000": "2000",
"retailerId": "Myrzki",
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}
//FAKEREPLY TROLI
const ftrolli = {
key : {
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "16505434800@s.whatsapp.net" } : {}) 
},
message: {
orderMessage: {
itemCount : 2021,
status: 1,
surface : 1,
message: namabot, //Kasih namalu
orderTitle: 'Bang',
thumbnail: thumresize, //Gambarnye
sellerJid: '0@s.whatsapp.net'

}
}
}
const ftroli = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 1,
status: 1,
surface : 1,
message: 'Myrzki', //Kasih namalu
orderTitle: 'Bang',
thumbnail: log0, //Gambarnye
sellerJid: '0@s.whatsapp.net'

}
}
}
//FAKEREPLY LOCATION
const flokasi = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
locationMessage: {
name: 'Russia',
jpegThumbnail: log0
}
}
}
//FAKEREPLY DOCUMENT
const fdocs = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: 'Halo bang', 
jpegThumbnail: log0
}
}
}
//FAKEREPLY VIDEO
const fvideo = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title":"hallo bang",
"h": `Hmm`,
'seconds': '30', 
'caption': 'Halo bang',
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GROUPINVITE
const fgclink = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "mememteeeekkeke",
"groupName": "P", 
"caption": "RZK MD", 
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GIF
const fgif = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
 "videoMessage": { 
 "title":"RZK MD",
 "h": `Hmm`,
 'seconds': "30", 
 'gifPlayback': 'true', 
 'caption': 'RZK MD',
 'jpegThumbnail': log0
}
}
} 
//FAKEREPLY TEXT WITH THUMBNAIL
const ftextt = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"extendedTextMessage": {
 "text":"hallo bang",
"title": `Hmm`,
 'jpegThumbnail': log0
}
} 
}
//FAKEREPLY VN
const fvn = {
key: { 
fromMe: false,
participant: `62882000383955@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "30",
"ptt": "true"
}
} 
}

//button
let buttonsMenu = [{
urlButton: {
displayText: 'R Z K - G R O U P',
url: linkgrupss
}
}, {
callButton: {
displayText: '𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓',
phoneNumber: ``
}
}, {
quickReplyButton: {
displayText: '👑 𝑶𝒘𝒏𝒆𝒓',
id: '.owner'
}
}, {
quickReplyButton: {
displayText: '📶 𝑷𝒊𝒏𝒈',
id: '.ping'
}  
}, {
quickReplyButton: {
displayText: '📈 𝑫𝒂𝒔𝒉𝒃𝒐𝒂𝒓𝒅',
id: '.dashboard'
}  
}]

    let examlink = `*Example* : ${prefix + command.slice(1) } link\n*Penjelasan*\nSesuaikan sesuai link command\nMisal fitur ytmp4 jadi\n${prefix}ytmp4 https://youtu.be/hqpeOYBthow\nBegitu juga dengan link lainya`
    let examquery = `*Example* : ${prefix + command.slice(1) } query\n\n*Penjelasan*\nquery itu adalah text yg diperlukan setelah command\nmisal fitur #play\ncontoh penggunaanya adalah #play judul / #play happier\nKirim perintah tanpa argument untuk melihat example lebih jelas`
    let examkosong = `Untuk command ini kamu hanya perlu mengetik ${prefix + command.slice(1)}`
    let examtag = `*Example* : ${prefix + command.slice(1)} lalu tag nomor seseorang`
    let examply = `*Example* : gunakan ${prefix + command.slice(1)} sekalian reply pesan bot`
    let examplyme = `Kirim Media lalu reply dengan ${prefix + command.slice(1)}`
    
   /* if (budy.startsWith(`${prefix}menu`)) {
rzki.sendMessage(from, { react: { text: `🇮🇩`, key: m.key }})
}*/
    
    let footermenu = `Tambahkan -help setelah command untuk melihat Info command tersebut Example : .play -help

Thanks To
❝ Dika Ardnt
❝ MyMans
❝ Fadly ID
❝ Rizki
❝ Vynn
❝ Fax
❝ X-None Teams
      
${namabot}`

l = 1
monospace2 = '```'
//listmenu 1
const listmn = `${monospace2}HI ${pushname} 🤗 ${ucapanWaktu} 👋${monospace2}

${monospace2}LIB : Baileys-Md${monospace2}
${monospace2}TYPE : 𝑵𝒐𝒅𝒆𝑱𝒔${monospace2}
${monospace2}PLATFORM : Linux${monospace2}
${monospace2}PREFIX : ( Multi )${monospace2}
${monospace2}HIT TODAY : ${hit_today.length} Hit${monospace2}
${monospace2}WIB : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}${monospace2}
${monospace2}WITA : ${moment.tz('Asia/Makassar').format('HH:mm:ss')}${monospace2}
${monospace2}WIT : ${moment.tz('Asia/Jayapura').format('HH:mm:ss')}${monospace2}
${monospace2}RUNTIME : ${runtime(process.uptime())}${monospace2}

${monospace2}PROFILE BOT${monospace2}
${monospace2}OWNER : ${owner.length}${monospace2}
${monospace2}USER BOT : ${rkyt.length}${monospace2}

${monospace2}PROFILE GROUP${monospace2}
${monospace2}ANTILINK : ${AntiLink? "ON" : "OFF"}${monospace2}
${monospace2}AUTOSTIKER : ${isAutoSticker? "ON" : "OFF"}${monospace2}
${monospace2}AUTOREVOKE : ${GcRvk? "ON" : "OFF"}${monospace2}
${monospace2}WELCOME : ${welcm? "ON" : "OFF"}${monospace2}

${monospace2}❏${monospace2} ${monospace2}List Menu${monospace2}

${require('./help/help').menurandom(prefix, l, pushname)}`

//listmenu 2
const listmn2 = `*╭────[  ${namabot}  ]────*
*│*
*│ ⫹⫺ Library : Baileys-MD*
*│ ⫹⫺ Version : 1.5.0*
*│ ⫹⫺ Type : 𝑵𝒐𝒅𝒆𝑱𝒔*
*│ ⫹⫺ Platform : Linux*
*│ ⫹⫺ Language : JavaScript*
*│ ⫹⫺ Prefix : ( Multi )*
*│ ⫹⫺ Mode : ${rzki.public? "Public" :"Self"}*
*│ ⫹⫺ Hit : ${hit_today.length} Hit*
*│ ⫹⫺ Runtime : ${runtime(process.uptime())}*
*│ ⫹⫺ User : ${pushname}*
*│ ⫹⫺ Tanggal : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}*
*│ ⫹⫺ Waktu : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}*
*│ ⫹⫺ Author : All Contributor*
*│ ⫹⫺ All Command : 355*
*│*
*│*
${require('./help/help2').menurandom(prefix, pushname)}
*╰────[  ${namabot}   ]────*`

//listmenu 3
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const listmn3 = `Hai ${pushname}

“I'm simple WhatsApp bot, *gunakan bot di private chat agar bot dapat merespon dengan cepat.*”

❏ 𝙄𝙉𝙁𝙊 
 • Lib : Baileys-md
 • Version : 1.5.0
 • Database : MongoDB
 • Prefix : Multi-Prefix
 • Upload : ${cBandwidth.upload}
 • Download : ${cBandwidth.download}
 • AutoDownload : ${db.data.chats[m.chat].autodl? "ON" : "OFF"}

Mode : ${modemute}
${readmore}
${require('./help/menu').menurandom(prefix, pushname)}

*𝚂𝚒𝚖𝚙𝚕𝚎 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝙱𝙾𝚃 [ 𝙼𝙳 ]*`

const qtod = m.quoted? "true":"false"

// Case Nye Sini Ngab
switch(command) {
case prefix+'menu': case prefix+'help': {
addCountCmd('#menu', sender, _cmd)
if (isBan) return m.reply(mess.ban)
rzki.sendMessage(from, { react: { text: `🇮🇩`, key: m.key }})
let btn = [{
urlButton: {
displayText: 'Join My Support',
url: linkgrupss
}
}, {
quickReplyButton: {
displayText: 'STATUS',
id: '.stats'
}  
}, {
quickReplyButton: {
displayText: 'TOTAL HIT',
id: '.dashboard'
}  
}]
//if (modelmenu == "gif") {
if (db.data.settings[botNumber].MenuGif) {
let asupanrandom = ['gabatha1','gabatha2'];
        let asupan3 = asupanrandom[Math.floor(Math.random() * (asupanrandom.length))];
const gktau = await reSize(thumrand, 300, 200)
let message = await prepareWAMessageMedia({ video: fs.readFileSync(`./media/video/${asupan3}.mp4`), gifPlayback:true, gifAttribution : 1, jpegThumbnail:gktau, fileLength: "99999999999", }, { upload: rzki.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText: listmn3,
hydratedFooterText: namabot,
hydratedButtons: btn
}
}
}), { userJid: m.chat, quoted: m })
rzki.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
//if (modelmenu == "loc") {
if (db.data.settings[botNumber].MenuLoc) {
const gktau = await reSize(thumrand, 200, 200)
rzki.send5Loc(m.chat, listmn3, namabot, gktau, btn)
}
//if (modelmenu == "doc") {
if (db.data.settings[botNumber].MenuDoc) {
var rndm = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
let docrndm = rndm[Math.floor(Math.random() * (rndm.length))];
const gktau2 = await reSize(thumrand, 300, 300)
const templateMessage = {
document: await getBuffer(`https://telegra.ph/file/ec145071030c51718663c.jpg`),
fileName: `Hai Kak ${pushname}`,
mimetype: `application/${docrndm}`,
jpegThumbnail: gktau2,
caption: listmn3,
footer: namabot,
fileLength: "99999999999",
pageCount: 99999,
templateButtons: btn
}

await rzki.sendMessage(m.chat, templateMessage, {quoted:m})
}
}
break
case prefix+'cekupdate':{
const gktau = await reSize(thumrand, 200, 200)
textnya = `${require('./help/menu').updatebot(prefix)}`
rzki.send5Loc(m.chat, textnya, namabot, gktau)
}
break
case prefix+'tools':{
if (!isCreator) return m.reply(mess.owner)
const gktau = await reSize(thumrand, 200, 200)
textnya = `${require('./help/menu').menuowner(prefix)}`
rzki.send5Loc(m.chat, textnya, namabot, gktau)
}
break
case prefix+'listmaker':{
const gktau = await reSize(thumrand, 200, 200)
textnya = `${require('./help/menu').menumaker(prefix)}`
rzki.send5Loc(m.chat, textnya, namabot, gktau)
}
break
case prefix+'listcerpen':{
const gktau = await reSize(thumrand, 200, 200)
textnya = `${require('./help/menu').menucerpen(prefix)}`
rzki.send5Loc(m.chat, textnya, namabot, gktau)
}
break
case prefix+'wibumenu': case prefix+'listanime':{
const gktau = await reSize(thumrand, 200, 200)
textnya = `${require('./help/menu').menuanime(prefix)}`
rzki.send5Loc(m.chat, textnya, namabot, gktau)
}
break
case prefix+'sewabot':{
reply(`*❏ SEWA BOT*

Untuk fitur bot bisa baca menu sampai selesai ya kak, dicoba coba dulu biar tau ( Ketik *.menu* )
Silahkan hubungi owner ( Ketik *.owner* ) jika ingin menyewa bot untuk grup chat kalian

➠ Sewa (Join Grup) harga 10K / bulan dan akan keluar otomatis saat masa aktif sudah habis, apabila bot di kick dari grup sengaja atau tidak sengaja tidak bisa di join kan lagi (Hangus).

➠ *Penting!* simpan nomor owner dan join ke dalam grup official dibawah untuk mengetahui update nomor bot terbaru apabila ter-banned.

Untuk upgrade premium hanya Rp. 5.000 per bulan ( *.infopremium* )`)
}
break
case prefix+'premium': case prefix+'infopremium':{
reply(mess.premN)
}
break
    case prefix+'dashboard': case prefix+'dash':
	                    addCountCmd('#dashboard', sender, _cmd)
                            var posi = await getPosiCmdUser(m.sender, _cmdUser)
                            _cmdUser[posi].db.sort((a, b) => (a.count < b.count) ? 1 : -1)
                            _cmd.sort((a, b) => (a.count  < b.count) ? 1 : -1)
                            var posi = await getPosiCmdUser(m.sender, _cmdUser)
                            var jumlahCmd = _cmd.length
                            if (jumlahCmd > 10) jumlahCmd = 10
                            var jumlah = _cmdUser[posi].db.length
                            if (jumlah > 5) jumlah = 5
                            var totalUser = 0
                            for (let x of _cmdUser[posi].db) {
                              totalUser = totalUser + x.count
                            }
                            var total = 0
                            for (let o of _cmd) {
                              total = total + o.count
                            }
                            var teks = `*RZK BOT DASHBOARD*\n\n*HIT*\n• GLOBAL : ${total}\n• USER : ${totalUser}\n\n`
                            teks += `*Most Command Global*\n`
                            for (let u = 0; u < jumlahCmd; u ++) {
                              teks += `• ${_cmd[u].nama} : ${_cmd[u].count}\n`
                            }
                            teks += `\n*Most Command User*\n`
                            for (let i = 0; i < jumlah; i ++) {
                              teks += `• ${_cmdUser[posi].db[i].nama} : ${_cmdUser[posi].db[i].count}\n`
                            }
                            faketroli(teks)
                            break
case prefix+'setmenu':
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply('Mau Set Menu Ke Gmna? Menu Yg Tersedia : loc,img,gif')
if (q == "loc") {
//modelmenu = "loc"
 db.data.settings[botNumber].MenuLoc = true
 db.data.settings[botNumber].MenuDoc = false
 db.data.settings[botNumber].MenuGif = false
m.reply("Succes Change Menu To Location")
} else if (q == "gif") {
//modelmenu = "gif"
 db.data.settings[botNumber].MenuLoc = false
 db.data.settings[botNumber].MenuDoc = false
 db.data.settings[botNumber].MenuGif = true
m.reply("Succes Change Menu To Gif")
} else if (q == "doc") {
//modelmenu = "doc"
 db.data.settings[botNumber].MenuLoc = false
 db.data.settings[botNumber].MenuDoc = true
 db.data.settings[botNumber].MenuGif = false
m.reply("Succes Change Menu To Doc")
} else {
		}
break
case prefix+'textwel':
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply('Mau Set Welcome Ke Gmna? Welcome Yg Tersedia : 1,2,3')
if (q == "1") {
db.data.chats[m.chat].SetWelkam1 = true
db.data.chats[m.chat].SetWelkam2 = false
db.data.chats[m.chat].SetWelkam3 = false
m.reply("Succes Change Type 1")
} else if (q == "2") {
db.data.chats[m.chat].SetWelkam1 = false
db.data.chats[m.chat].SetWelkam2 = true
db.data.chats[m.chat].SetWelkam3 = false
m.reply("Succes Change Type 2")
} else if (q == "3") {
db.data.chats[m.chat].SetWelkam1 = false
db.data.chats[m.chat].SetWelkam2 = false
db.data.chats[m.chat].SetWelkam3 = true
m.reply("Succes Change Type 3")
} else {
		}
break
case prefix+'textleft':
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply('Mau Set Left Ke Gmna? Left Yg Tersedia : 1,2,3')
if (q == "1") {
db.data.chats[m.chat].SetLeft1 = true
db.data.chats[m.chat].SetLeft2 = false
db.data.chats[m.chat].SetLeft3 = false
m.reply("Succes Change Type 1")
} else if (q == "2") {
db.data.chats[m.chat].SetLeft1 = false
db.data.chats[m.chat].SetLeft2 = true
db.data.chats[m.chat].SetLeft3 = false
m.reply("Succes Change Type 2")
} else if (q == "3") {
db.data.chats[m.chat].SetLeft1 = false
db.data.chats[m.chat].SetLeft2 = false
db.data.chats[m.chat].SetLeft3 = true
m.reply("Succes Change Type 3")
} else {
		}
break
case prefix+'setfakereply':
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply('Mau Set Fake Ke Gmna? Menu Yg Tersedia : fgroup,fgroupv2,fthumb')
if (q == "fgroup") {
fakereply = "fgroup"
m.reply("Succes Change Menu To Fake Group")
} else if (q == "fgroupv2") {
fakereply = "fgroup2"
m.reply("Succes Change Menu To Fake Group V2")
} else if (q == "fthumb") {
fakereply = "fthumb"
m.reply("Succes Change Menu To Fake Thumbnail")
} else {
		}
break
case prefix+'fitnah': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!args.join(" ")) return m.reply(`Example :\n- ${prefix + command.slice(1)} no | jawaban | fitnah\n- ${prefix + command.slice(1)} @6281385062956 | iya dia emang ganteng | Rizki ganteng banget`)
targetd = args.join(" ").split("|")[0];
jawbanbot = args.join(" ").split("|")[1];
teksfit = args.join(" ").split("|")[2];
targetnya = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : targetd.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
rzki.sendMessage(from, {text:jawbanbot}, {quoted:{
key: {
fromMe: false,
participant: targetnya
},
message: {
conversation: teksfit
}
}})
}
break
case prefix+'donasi':
  case prefix+'donate':{
  let donasibut = [
			{ urlButton: { displayText: `Join My Group`, url : linkgrupss } }
		]
var teks = `❏  *D O N A S I*
 
❏ *PULSA*
   088226703423 
❏ *PULSA 2*
   085876275834
❏ *GOPAY*
   088226703423
  
  Note : Donasi Seikhlasnya`
 rzki.send5Loc(m.chat, teks, namabot, l0c, donasibut)
 }
			    break
case prefix+'autongetik': {
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
/*rekam = false
ngetik = true*/
if (db.data.settings[botNumber].autongetik) return m.reply(`*Autongetik already ON.*`)
 db.data.settings[botNumber].autorekam = false
 db.data.settings[botNumber].autongetik = true
m.reply('*Auto Ngetik successfully turned ON.*')
} else if (args[0] === "off") {
/*ngetik = false*/
if (!db.data.settings[botNumber].autongetik) return m.reply(`*Autongetik already OFF.*`)
 db.data.settings[botNumber].autongetik = false
m.reply('*Auto Ngetik successfully turned OFF.*')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case prefix+'autorekam': {
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
/*ngetik = false
rekam = true*/
if (db.data.settings[botNumber].autorekam) return m.reply(`*Autorekam already ON.*`)
 db.data.settings[botNumber].autongetik = false
 db.data.settings[botNumber].autorekam = true
m.reply('*Auto Rekam successfully turned ON.*')
} else if (args[0] === "off") {
/*rekam = false*/
if (!db.data.settings[botNumber].autorekam) return m.reply(`*Autorekam already OFF.*`)
db.data.settings[botNumber].autorekam = false
m.reply('*Auto Rekam successfully turned OFF.*')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case prefix+'autoread': {
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
/*autoread = true*/
if (db.data.settings[botNumber].autoread) return m.reply(`*Autoread already ON.*`)
db.data.settings[botNumber].autoread = true
m.reply('*Auto Read successfully turned ON.*')
} else if (args[0] === "off") {
//autoread = false
if (!db.data.settings[botNumber].autoread) return m.reply(`*Autoread already OFF.*`)
db.data.settings[botNumber].autoread = false
m.reply('*Auto Read successfully turned OFF.*')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case prefix+'autodl': case prefix+'autodownload': {
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (db.data.chats[m.chat].autodl) return m.reply(`*Auto Download already ON.*`)
 db.data.chats[m.chat].autodl = true
m.reply('*Auto Download successfully turned ON.*')
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].autodl) return m.reply(`*Auto Download already OFF.*`)
 db.data.chats[m.chat].autodl = false
m.reply('*Auto Download successfully turned OFF.*')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case prefix+'autoreact': {
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
//autoreact = true
if (db.data.settings[botNumber].autoreact) return m.reply(`*Autoreact already ON.*`)
db.data.settings[botNumber].autoreact = true
m.reply('*Auto React successfully turned ON.*')
} else if (args[0] === "off") {
//autoreact = false
if (!db.data.settings[botNumber].autoreact) return m.reply(`*Autongetik already OFF.*`)
db.data.settings[botNumber].autoreact = false
m.reply('*Auto React successfully turned OFF.*')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case prefix+'antireact': {
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
antireact = true
m.reply('*Antireact On*')
} else if (args[0] === "off") {
antireact = false
m.reply('*Antireact Off*')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case prefix+'public': {
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (db.data.settings[botNumber].publicc) return m.reply(`*Public Mode already ON.*`)
//publicc = true
 db.data.settings[botNumber].publicc = true
m.reply('*Public Mode successfully turned ON.*')
} else if (args[0] === "off") {
if (!db.data.settings[botNumber].publicc) return m.reply(`*Public Mode already OFF.*`)
//publicc = false
 db.data.settings[botNumber].publicc = false
m.reply('*Public Mode successfully turned OFF.*')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case prefix+'self': {
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (db.data.settings[botNumber].selff) return m.reply(`*Self Mode already ON.*`)
//selff = true
 db.data.settings[botNumber].selff = true
m.reply('*Self Mode successfully turned ON.*')
} else if (args[0] === "off") {
if (!db.data.settings[botNumber].selff) return m.reply(`*Self Mode already OFF.*`)
//selff = false
 db.data.settings[botNumber].selff = false
m.reply('*Self Mode successfully turned OFF.*')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case prefix+'muteall': {
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return m.reply('ketik 0 untuk mengaktifkan\nketik 1 untuk menonaktifkan')
if (args[0] === "0") {
/*mutechat = false
mutegrup = false*/
 db.data.settings[botNumber].mutechat = false
 db.data.settings[botNumber].mutegrup = false
m.reply('*Sukses menyalakan chat All*')
} else if (args[0] === "1") {
/*mutechat = true
mutegrup = true*/
 db.data.settings[botNumber].mutechat = true
 db.data.settings[botNumber].mutegrup = true
m.reply('*Sukses mematikan chat All*')
} else {
m.reply('0 untuk mengaktifkan, 1 untuk menonaktifkan')
}
}
break
case prefix+'mutechat': {
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return m.reply('ketik 0 untuk mengaktifkan\nketik 1 untuk menonaktifkan')
if (args[0] === "0") {
//mutechat = false
 db.data.settings[botNumber].mutechat = false
m.reply('*Sukses menyalakan chat Private*')
} else if (args[0] === "1") {
//mutechat = true
 db.data.settings[botNumber].mutechat = true
m.reply('*Sukses mematikan chat Private*')
} else {
m.reply('0 untuk mengaktifkan, 1 untuk menonaktifkan')
}
}
break
case prefix+'mutegrup': {
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return m.reply('ketik 0 untuk mengaktifkan\nketik 1 untuk menonaktifkan')
if (args[0] === "0") {
//mutegrup = false
 db.data.settings[botNumber].mutegrup = false
m.reply('*Sukses menyalakan All chat Group*')
} else if (args[0] === "1") {
//mutegrup = true
 db.data.settings[botNumber].mutegrup = true
m.reply('*Sukses mematikan All chat Group*')
} else {
m.reply('0 untuk mengaktifkan, 1 untuk menonaktifkan')
}
}
break
case prefix+'disable':
if(!isCreator) return reply('Owner Bukan')
if(!q) return reply('Masukkan nama fitur yang mau di disable!')
if(blockcmd.includes(q)) return reply(`Fitur ${q} telah ditambahkan ke daftar errorcmd sebelumnya!`)
blockcmd.push(q)
await fs.writeFileSync('./src/blockcmd.json', JSON.stringify(blockcmd))
reply('Done')
break
case prefix+'enable':
if(!isCreator) return reply('Owner Bukan')
if(!q) return reply('Masukkan nama fiturnya!')
if(!blockcmd.includes(q)) return reply('Fitur tersebut tidak masuk ke list errorcmd!')
del = blockcmd.indexOf(q)
blockcmd.splice(del, 1)
await fs.writeFileSync('./src/blockcmd.json', JSON.stringify(blockcmd))
reply('Done')
break
case prefix+'listerror': case prefix+'listeror':
teks = `List Fitur Yang Error\n${shop} Total : ${blockcmd.length}\n\n`
for(let i of blockcmd){
teks += shop + ' ' + i + '\n'
}
reply(teks)
break
//Premium
case prefix+'cekprem':
            case prefix+'cekpremium':
                if (!isPremium) return reply(mess.prem)
                if (isCreator) return reply(`Lu owner bego!`)
                if (_prem.getPremiumExpired(sender, premium) == "PERMANENT") return reply(`PERMANENT`)
                let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                let premiumnya = `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
                reply(premiumnya)
                break
            case prefix+'listprem':
                let txt = `List Prem\nJumlah : ${premium.length}\n\n`
                let men = [];
                for (let i of premium) {
                    men.push(i.id)
                    txt += `*ID :* @${i.id.split("@")[0]}\n`
                  if (i.expired === 'PERMANENT') {
                    let cekvip = 'PERMANENT'
                    txt += `*Expire :* PERMANENT\n\n`
                  } else {
                    let cekvip = ms(i.expired - Date.now())
                    txt += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
                  }
                }
                mentions(txt, men, true)
                break
case prefix+'addprem':{
                if (!isCreator) return reply(mess.owner)
                if (args2.length < 2) return reply(`Penggunaan :\n*${prefix}addprem* @tag waktu\n*${prefix}addprem* nomor waktu\n\nContoh : ${command} @tag 30d`)
                if (!args2[2]) return reply(`Mau yang berapa hari?`)
                if (mentionUser.length !== 0) {
                    _prem.addPremiumUser(mentionUser[0], args2[2], premium)
                    reply('Sukses')
                } else {
                 var cekap = await rzki.onWhatsApp(args2[1]+"@s.whatsapp.net")
                 if (cekap.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                    _prem.addPremiumUser(args2[1] + '@s.whatsapp.net', args2[2], premium)
                    reply('Sukses')
                }
                }
                break
/*case prefix+'addprem':{
                if (!isCreator) return reply(mess.owner)
                if (args2.length < 1) return reply(`Penggunaan :\n*${prefix}addprem* no|waktu\n*${prefix}addprem* nomor|waktu\n\nContoh : ${command} no wa|30d`)
num = q.split('|')[0]
waktu = q.split('|')[1]
_prem.addPremiumUser(num + '@s.whatsapp.net', waktu, premium)
reply('Sukses')
                  }
                break*/
            case prefix+'delprem':
                if (!isCreator) return reply(mess.owner)
                if (args2.length < 2) return reply(`Penggunaan :\n*${prefix}delprem* @tag\n*${prefix}delprem* nomor`)
                if (mentionUser.length !== 0){
                    premium.splice(_prem.getPremiumPosition(mentionUser[0], premium), 1)
                    fs.writeFileSync('./src/premium.json', JSON.stringify(premium))
                    reply('Sukses!')
                } else {
                 var cekpr = await rzki.oWhatsApp(args2[1]+"@s.whatsapp.net")
                 if (cekpr.length == 0) return reply(`Masukkan nomer yang valid/terdaftar di WhatsApp`)
                    premium.splice(_prem.getPremiumPosition(args2[1] + '@s.whatsapp.net', premium), 1)
                    fs.writeFileSync('./src/premium.json', JSON.stringify(premium))
                    reply('Sukses!')
                }
                break
// fitur store
case prefix+'item':{
        if (!m.isGroup) return reply(mess.group)
            if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
            if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`Belum ada list message yang terdaftar di group ini`)
            var arr_rows = [];
            for (let x of db_respon_list) {
                if (x.id === from) {
                    arr_rows.push({
                        title: x.key,
                        rowId: x.key
                    })
                }
            }
const listMessage = {
  text: `${ucapanWaktu} ${pushname} 👋\n\nBerikut Adalah List Item\nSilahkan Pilih Salah Satu!\n🗓 Tanggal : ${tanggal2}\n🕰 Jam : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} `,
  footer: namabot2,
  buttonText: "Click Here!",
  sections: [{
                    title: groupName, rows: arr_rows
                }],
                listType: 1
}

const sendMsg = await rzki.sendMessage(m.chat, listMessage)
                }
               break
        
        case prefix+'additem':{
        if (!m.isGroup) return reply(mess.group)
            if (!isAdmins && !isCreator) return reply('Only Admins')
            var args1 = text.split("@")[0]
            var tod2 = text.split("@")[1]                
            if (!q.includes("@")) return reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item@Item*\n\n_Contoh_\n\n${command.slice(1)} Dm Ml@List`)
            if (isAlreadyResponList(from, args1, db_respon_list)) return reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
            if (/image/.test(mime)) {
              let media = await rzki.downloadAndSaveMediaMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
                const fd = new FormData();
                fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
                fetch('https://telegra.ph/upload', {
                    method: 'POST',
                    body: fd
                }).then(res => res.json())
                    .then((json) => {
                        addResponList(from, args1, tod2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
                        reply(`Sukses set list message dengan key : *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
                    })
            } else {
                addResponList(from, args1, tod2, false, '-', db_respon_list)
                reply(`Sukses set list message dengan key : *${args1}*`)
            }
            }
            break
        case prefix+'delitem':{
        if (!m.isGroup) return reply(mess.group)
            if (!isAdmins && !isCreator) return reply('Only Admins')
            if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
            if (!q) return reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item*\n\n_Contoh_\n\n${command.slice(1)} Dm Ml`)
            if (!isAlreadyResponList(from, q, db_respon_list)) return reply(`List Item dengan Nama *${q}* tidak ada di database!`)
            delResponList(from, q, db_respon_list)
            reply(`Sukses delete list message dengan key *${q}*`)
            }
            break
        case prefix+'changeitem': case prefix+'change':{
            if (!m.isGroup) return reply(mess.group)
            if (!isAdmins && !isCreator) return reply('Only Admins')
            var args1 = q.split("@")[0]
            var cok2 = q.split("@")[1]
            if (!q.includes("@")) return reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item@Item*\n\n_Contoh_\n\n${command.slice(1)} Dm Ml@List`)
            if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
            if (/image/.test(mime)) {
                let media = await rzki.downloadAndSaveMediaMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
              const fd = new FormData();
                fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
                fetch('https://telegra.ph/upload', {
                    method: 'POST',
                    body: fd
                }).then(res => res.json())
                    .then((json) => {
                        updateResponList(from, args1, cok2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
                        reply(`Sukses update list message dengan key : *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
                    })
            } else {
                updateResponList(from, args1, cok2, false, '-', db_respon_list)
                reply(`Sukses update respon list dengan key *${args1}*`)
            }
            }
            break
case prefix+'tambah':{
            if (args2.length < 3) return reply(`Gunakan dengan cara ${command.slice(1)} *angka* *angka*\n\n_Contoh_\n\n${command.slice(1)} 1 2`)
            var nilai_one = Number(args2[1])
            var nilai_two = Number(args2[2])
            reply(`${nilai_one + nilai_two}`)
            }
            break
        case prefix+'kurang':{
            if (args2.length < 3) return reply(`Gunakan dengan cara ${command.slice(1)} *angka* *angka*\n\n_Contoh_\n\n${command.slice(1)} 1 2`)
            var nilai_one = Number(args2[1])
            var nilai_two = Number(args2[2])
            reply(`${nilai_one - nilai_two}`)
            }
            break
        case prefix+'kali':{
            if (args2.length < 3) return reply(`Gunakan dengan cara ${command.slice(1)} *angka* *angka*\n\n_Contoh_\n\n${command.slice(1)} 1 2`)
            var nilai_one = Number(args2[1])
            var nilai_two = Number(args2[2])
            reply(`${nilai_one * nilai_two}`)
            }
            break
        case prefix+'bagi':{
            if (args2.length < 3) return reply(`Gunakan dengan cara ${command.slice(1)} *angka* *angka*\n\n_Contoh_\n\n${command.slice(1)} 1 2`)
            var nilai_one = Number(args2[1])
            var nilai_two = Number(args2[2])
            reply(`${nilai_one / nilai_two}`)
            }
            break
        case 'cekproses':{
            if (!isGroup) return
            if (!isCreator && !isAdmins) return
            if (!m.quoted) return reply('Reply Bukti Pembayaran!!')
            if (!m.quoted.text) {
            reply('Catatannya mana?')
            }
            if (m.quoted.text) {
            let catad = m.quoted.text
            let nimb = quoted.sender
            let prses = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : ${tanggal2}\n⌚ JAM     : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan :\n${catad}\n\nPesanan @${nimb.split("@")[0]} sedang di proses!`
            mentions(prses, [nimb], true)
            }
            }
            break
        case 'proses':{
            if (!m.isGroup) return reply(mess.group)
            if (!isCreator && !isAdmins) return
            if (!m.quoted) return reply('Reply Bukti Pembayaran!!')
            if (!text) return reply('Masukan Catatan Pelanggan\nContoh: proses 11 Diamond Ml | Id 12345678(1234)')
            let numb = m.sender
            let proses = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : ${tanggal2}\n⌚ JAM     : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan :\n${text}\n\nPesanan @${numb.split("@")[0]} sedang di proses!`
            mentions(proses, numb, true)
            m.quoted.copyNForward(`6288226703423@s.whatsapp.net`, true)
            rzki.sendMessage(`6288226703423@s.whatsapp.net`, {text: proses })
            }
            break
        case 'done':{
            if (!m.isGroup) return reply(mess.group)
            if (args2.length == 1) return reply('Masukan Nomor Pelanggan\nContoh: done 62xxx|catatan')
            if (args2.length == 2) return reply('Masukan Catatan Transaksi')
            if (args2[1].includes('+')) return reply(`Jangan menggunakan +`)
            if (isNaN(parseInt(args2[1]))) return reply('Harus Berupa Angka!')
            let numbb = `${args2[1]}@s.whatsapp.net`             
            let sukses = `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : ${tanggal2}\n⌚ JAM     : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}\n✨ STATUS  : Berhasil\`\`\`\n\n📝 Catatan :\n${args2[2]}\n\nTerimakasih @${numbb.split("@")[0]} Next Order ya🙏`
            rzki.sendMessage(`${args2[1]}@s.whatsapp.net`, {text: sukses })
            }
            break
case prefix+'tinyurl':
try {
const link = args[0]
const anu3 = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu3.data}`)
} catch (e) {
let emror = String(e)
reply(`Emang itu link? `)
}
break
//HAVE FUN
case prefix+'asupan':{
if (!isPremium) return reply(mess.prem)
  reply(mess.wait)
  var asupan = JSON.parse(fs.readFileSync('./lib/Result/asupan.json'))
var hasil = pickRandom(asupan)
rzki.sendMessage(from, {video: {url: hasil.url}}, {quoted: m})
}
break
case prefix+'asupan2':{
if (!isPremium) return reply(mess.prem)
  reply(mess.wait)
  var asupan = JSON.parse(fs.readFileSync('./lib/Result/asupan2.json'))
var hasil = pickRandom(asupan)
rzki.sendMessage(from, {video: {url: hasil.url}}, {quoted: m})
}
break
case prefix+'asupan3':{
if (!isPremium) return reply(mess.prem)
  reply(mess.wait)
  var asupan = JSON.parse(fs.readFileSync('./lib/Result/asupan3.json'))
var hasil = pickRandom(asupan)
rzki.sendMessage(from, {video: {url: hasil.url}}, {quoted: m})
}
break
case prefix+'darkjokes': case prefix+'dark': case prefix+'darkjoke': case prefix+'meme': case prefix+'memeindo':{
  var darkjoke = JSON.parse(fs.readFileSync('./lib/Result/darkjokes.js')) // posisinya sesuain
var hasil = pickRandom(darkjoke)
rzki.sendMessage(from, {caption: 'Ancrit', image: {url: hasil.result}}, {quoted: m})
}
break
case prefix+'quotes':
    case prefix+'katakata':{
			var kotes2 = JSON.parse(fs.readFileSync('./lib/Result/quotes.json'))
var hasil = pickRandom(kotes2)
var quot = [
			{ quickReplyButton: { displayText: `Next Quotes ➡️`, id: `${prefix}quotes` } },
		]
		
		rzki.sendMessage(from, {text: hasil.quotes, templateButtons: quot, footer: `~ ${hasil.author}`, mentions: [sender]} )
}
break
case prefix+'katabucin':{
			var kotes2 = JSON.parse(fs.readFileSync('./lib/Result/katabucin.json'))
var hasil = pickRandom(kotes2)
var quot = [
			{ quickReplyButton: { displayText: `Next ➡️`, id: `${prefix}katabucin` } },
		]
		
		rzki.sendMessage(from, {text: hasil, templateButtons: quot, footer: `~ kata bucin`, mentions: [sender]} )
}
break
case prefix+'katabucin2':{
			var kotes2 = JSON.parse(fs.readFileSync('./lib/Result/bucin.json'))
var hasil = pickRandom(kotes2)
var quot = [
			{ quickReplyButton: { displayText: `Next ➡️`, id: `${prefix}katabucin2` } },
		]
		
		rzki.sendMessage(from, {text: hasil, templateButtons: quot, footer: `~ kata bucin`, mentions: [sender]} )
}
break
case prefix+'katagalau':{
			var kotes2 = JSON.parse(fs.readFileSync('./lib/Result/katagalau.json'))
var hasil = pickRandom(kotes2)
var quot = [
			{ quickReplyButton: { displayText: `Next ➡️`, id: `${prefix}katabucin2` } },
		]
		
		rzki.sendMessage(from, {text: hasil, templateButtons: quot, footer: `~ kata galau`, mentions: [sender]} )
}
break
case prefix+'gombalan':{
			var kotes2 = JSON.parse(fs.readFileSync('./lib/Result/gombalan.json'))
var hasil = pickRandom(kotes2)
var quot = [
			{ quickReplyButton: { displayText: `Next ➡️`, id: `${prefix} gombalan` } },
		]
		
		rzki.sendMessage(from, {text: hasil, templateButtons: quot, footer: `~ gombalan`, mentions: [sender]} )
}
break
case prefix+'profile':
case prefix+'cekme':
  case prefix+'me':{
  const ganteng = ['Cakep ✔️','Jelek Anjrit ❌']
  const sifat = ['Pembohong','Galak','Suka Bantu Orang','Baik','Jahat:(','Bobrok','Suka BadMood','Setia','Tulus','Beriman','Penyayang Binatang','Baperan']
  const suka = ['Makan','Tidur','Main Game','Sesama Jenis','Binatang',`Seseorang Yang ${pushname} Sukai`,'Belajar','Ibadah','Diri Sendiri']
  const nomernyah = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
  const keberanian = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
  const kepinteran = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','31','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','82','84','84','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const ganz = ganteng[Math.floor(Math.random() * ganteng.length)]
					const sipat = sifat[Math.floor(Math.random() * sifat.length)]
					const numb = nomernyah[Math.floor(Math.random() * nomernyah.length)]
					const gai = suka[Math.floor(Math.random() * suka.length)]
					const berani = keberanian[Math.floor(Math.random() * keberanian.length)]
					const pinter = kepinteran[Math.floor(Math.random() * kepinteran.length)]
  var cek = `❏   *U S E R - I N F O*
  
	›  *Name :* ${pushname}
	›  *Status :* ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Gratisan'}
	›  *Limit :* ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
	›  *Limit Game :* ${isCreator ? 'Unlimited' : cekGLimit(sender, gcount, glimit)}
	›  *Balance :* $${toCommas(getBalance(sender, balance))}
  
❏   *Y O U R - P R O F I L E*
 
	›  *Nama :* ${pushname}
	›  *Sifat :* ${sipat}
	›  *Keberanian :* ${berani}%
	›  *Ketakutan :* ${numb}%
	›  *Cakep :* ${ganz}
	›  *Cek Pintar :* ${pinter}%
	›  *Menyukai :* ${gai}
	
*𝚂𝚒𝚖𝚙𝚕𝚎 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝙱𝙾𝚃 [ 𝙼𝙳 ]*
  `

					 rzki.profilePictureUrl(sender, 'image').then( res => rzki.sendMessage(from, {caption: cek, image: { url: res }}, {quoted: m})).catch(() => rzki.sendMessage(from, {caption: cek, image: {url: `https://telegra.ph/file/da3e53d41849f7e5bee79.jpg`}}, {quoted: m}))
				    }
				    break
case prefix+'apakah':{
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
					const kah = apa[Math.floor(Math.random() * apa.length)]
rzki.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: m })
}
					break
case prefix+'bisakah':
  case prefix+'bisa':
    case prefix+'bisagak':{
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
rzki.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: m })
}
					break
case prefix+'bagaimanakah':
  case prefix+'gimanakah':
    case prefix+'gimana':{
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
					const ya = gimana[Math.floor(Math.random() * gimana.length)]
rzki.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: m })
}
					break
case prefix+'rate':{
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
					const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
rzki.sendMessage(from, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: m })
}
					break
case prefix+'gantengcek':
  case prefix+'cekganteng':{
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
					const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
rzki.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: m })
}
					break
case prefix+'cantikcek':
  case prefix+'cekcantik':{
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
					const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const tik = can[Math.floor(Math.random() * can.length)]
rzki.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: m })
}
					break
case prefix+'sangecek':
  case prefix+'ceksange':
    case prefix+'gaycek':
      case prefix+'cekgay':
        case prefix+'lesbicek':
          case prefix+'ceklesbi':{
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
					const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
rzki.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: m })
}
					break
case prefix+'kapankah':
  case prefix+'kapan':{
				if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
					const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
rzki.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: m })
}
					break
//Bates
//nsfw
case prefix+'pussy':{
  if (!isPremium)return reply(mess.prem)
  reply(mess.wait)
var pussy = JSON.parse(fs.readFileSync('./lib/Result/nsfw/pussy.json'))
var hasil = pickRandom(pussy)
rzki.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: m})
}
break
case prefix+'masturbation':{
  if (!isPremium)return reply(mess.prem)
  reply(mess.wait)
var masturbation = JSON.parse(fs.readFileSync('./lib/Result/nsfw/masturbation.json'))
var hasil = pickRandom(masturbation)
rzki.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: m})
}
break 
case prefix+'hentai':{
  if (!isPremium)return reply(mess.prem)
  reply(mess.wait)
var hentai = JSON.parse(fs.readFileSync('./lib/Result/nsfw/hentai.json'))
var hasil = pickRandom(hentai)
rzki.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: m})
}
break 
case prefix+'blowjob':{
  if (!isPremium)return reply(mess.prem)
  reply(mess.wait)
var bj = JSON.parse(fs.readFileSync('./lib/Result/nsfw/blowjob.json'))
var hasil = pickRandom(bj)
rzki.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: m})
}
break 
case prefix+'bdsm':{
  if (!isPremium)return reply(mess.prem)
  reply(mess.wait)
var bdsm = JSON.parse(fs.readFileSync('./lib/Result/nsfw/bdsm.json'))
var hasil = pickRandom(bdsm)
rzki.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: m})
}
break 
case prefix+'ass':{
  if (!isPremium)return reply(mess.prem)
  reply(mess.wait)
var ass = JSON.parse(fs.readFileSync('./lib/Result/nsfw/ass.json'))
var hasil = pickRandom(ass)
rzki.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: m})
}
break 
case prefix+'ahegao':{
  if (!isPremium)return reply(mess.prem)
  reply(mess.wait)
var ahegao = JSON.parse(fs.readFileSync('./lib/Result/nsfw/ahegao.json'))
var hasil = pickRandom(ahegao)
rzki.sendMessage(from, {caption: `Sange kok sama gambar`, image: {url: hasil}}, {quoted: m})
}
break 
// Bank & Payment Menu
			case prefix+'topbalance':{
                balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
                let top = '*── 「 TOP BALANCE 」 ──*\n\n'
                let arrTop = []
				var total = 10
				if (balance.length < 10) total = balance.length
                for (let i = 0; i < total; i ++){
                    top += `${i + 1}. @${balance[i].id.split("@")[0]}\n=> Balance : $${toCommas(balance[i].balance)}\n\n`
                    arrTop.push(balance[i].id)
                }
                mentions(top, arrTop, true)
            }
                break
            case prefix+'buylimit':{
                if (args2.length < 2) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $15000 balance`)
                if (args2[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args2[1])) return reply(`Harus berupa angka`)
                if (args2[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                let ane = Number(parseInt(args2[1]) * 15000)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                kurangBalance(sender, ane, balance)
                giveLimit(sender, parseInt(args2[1]), limit)
                reply(monospace(`Pembeliaan limit sebanyak ${args2[1]} berhasil\n\nSisa Balance : $${toCommas(getBalance(sender, balance))}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
            }
                break
			case prefix+'transfer':
            case prefix+'tf':{
                 if (args2.length < 2) return reply(`Kirim perintah *${command}* @tag nominal\nContoh : ${command} @6281319944917 2000`)
                 if (mentionUser.length == 0) return reply(`Tag orang yang ingin di transfer balance`)
                 if (!args2[2]) return reply(`Masukkan nominal nya!`)
                 if (isNaN(args2[2])) return reply(`Nominal harus berupa angka!`)
                 if (args2[2].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                 if (args2[2].includes("-")) return reply(`Jangan menggunakan -`)
                 var anu = getBalance(sender, balance)
                 if (anu < args2[2] || anu == 'undefined') return reply(`Balance Kamu Tidak Mencukupi Untuk Transfer Sebesar $${args2[2]}, Kumpulkan Terlebih Dahulu\nKetik ${prefix}balance, untuk mengecek Balance mu!`)
                 kurangBalance(sender, parseInt(args2[2]), balance)
                 addBalance(mentionUser[0], parseInt(args2[2]), balance)
                 reply(`Sukses transfer balance sebesar $${args2[2]} kepada @${mentionUser[0].split("@")[0]}`)
            }
                 break
            case prefix+'buygamelimit':
            case prefix+'buyglimit':{
                if (args2.length < 2) return reply(`Kirim perintah *${prefix}buyglimit* jumlah game limit yang ingin dibeli\n\nHarga 1 game limit = $15000 balance\nPajak $1 / $10`)
                if (args2[1].includes('-')) return reply(`Jangan menggunakan -`)
                if (isNaN(args2[1])) return reply(`Harus berupa angka`)
                if (args2[1].toLowerCase() === 'infinity') return reply(`Yahaha saya ndak bisa di tipu`)
                let ane = Number(parseInt(args2[1]) * 15000)
                if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                kurangBalance(sender, ane, balance)
                givegame(sender, parseInt(args2[1]), glimit)
                reply(monospace(`Pembeliaan game limit sebanyak ${args2[1]} berhasil\n\nSisa Balance : $${toCommas(getBalance(sender, balance))}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
            }
                break
			case prefix+'limit': case prefix+'balance':
			case prefix+'ceklimit': case prefix+'cekbalance':
			    if (mentionUser.length !== 0){
					var Ystatus = owner.includes(mentionUser[0])
					var isPrim = Ystatus ? true : _prem.checkPremiumUser(mentionUser[0], premium)
				    var ggcount = isPrim ? gcounti.prem : gcounti.user
                    var limitMen = `${getLimit(mentionUser[0], limitCount, limit)}`
                    textImg(`Limit : ${_prem.checkPremiumUser(mentionUser[0], premium) ? 'Unlimited' : limitMen}/${limitCount}\nLimit Game : ${cekGLimit(mentionUser[0], ggcount, glimit)}/${ggcount}\nBalance : $${toCommas(getBalance(mentionUser[0], balance))}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                } else {
                    var limitPrib = `${getLimit(sender, limitCount, limit)}/${limitCount}`
                    textImg(`Limit : ${isPremium ? 'Unlimited' : limitPrib}\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : $${toCommas(getBalance(sender, balance))}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                }
				break
//hooh
case prefix+'sc':{
    let donasibut = [
			{ urlButton: { displayText: `Join My Group`, url : linkgrupss } }
		]
var teks = `❏  *S O U R C E*

Sc?
https://github.com/DikaArdnt/Hisoka-Morou

https://github.com/rtwone/chitandabot`
 rzki.send5Loc(m.chat, teks, namabot, l0c, donasibut)
 }
  break
case prefix+'cekdrive':
 let cekdrive = require("node-os-utils")
let cekdr = await cekdrive.drive.info()
reply(`*INFO SERVER DRIVE*
 ▸ Total : ${cekdr.totalGb} GB
 ▸ Free : ${cekdr.freePercentage} GB
 ▸ Used : ${cekdr.usedPercentage} GB`)
break
case prefix+'cekbandwidth':
reply(`*INFO BANDWIDTH*
 ▸ Upload : ${cBandwidth.upload}
 ▸ Download : ${cBandwidth.download}`)
break
case prefix+'runtime2':
faketroli(`_*Runtime :*_ ${runtime(process.uptime())}\n_*Runtime Os :*_ ${runtime(os.uptime())}`)
  break
case prefix+'runtime':
reply(`*Running For : [ ${runtime2(process.uptime())} ]*`)
break
case prefix+'autosticker':
case prefix+'autostiker':
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
                if (args[0] === 'on'){
if (db.data.chats[m.chat].autostiker) return m.reply(`*Auto Sticker already ON.*`)
 db.data.chats[m.chat].autostiker = true
					m.reply('*Auto Sticker successfully turned ON.*')
                } else if (args[0] === 'off'){
if (!db.data.chats[m.chat].autostiker) return m.reply(`*Auto Sticker already OFF.*`)
db.data.chats[m.chat].autostiker = false
                    m.reply('*Auto Sticker successfully turned OFF.*')
                } 
            break
case prefix+'gktau': case prefix+'bugkon':{
if (!isCreator) return reply(mess.owner)
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6281385062956-120363042370320200@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${namabot},;;;\nFN:${namabot},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': l0c, thumbnail: l0c,sendEphemeral: true}}}
rzki.sendMessage(from, {text:"ted"}, {quoted:fkontak})
}
break
case prefix+'bugpc': {
if (isBan) return reply(mess.ban)
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} number|amount spam|timer\nExample : ${command} 62888|1|10s\n\n\ns = Second/Detik`)
num = q.split('|')[0]+'@s.whatsapp.net'
jumlah = q.split('|')[1]
waktu = q.split('|')[2]
for (let i = 0; i < jumlah; i++) {
rzki.sendMessage(num, {text:"ted"}, {quoted:lep})
await sleep(ms(waktu))
}
tek = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}\nTimer: ${waktu}`
reply(tek)
}
break
case prefix+'buggc': {
if (isBan) return reply(mess.ban)
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} idGroup|amount spam|timer\nExample : ${command} 62888@g.us|1|10s\n\n\ns = Second/Detik\n\nDi Usahakan Bot Udah Masuk Group Nya`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
rzki.sendMessage(num, {text:"ted"}, {quoted:lep})
}
tekteka = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`
reply(tekteka)
}
break
//sewa
case prefix+'sewa':
if (!isCreator) return reply(mess.owner)
if (!q) return m.reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
if (args[0].toLowerCase() === 'add'){
_sewa.addSewaGroup(from, args[1], sewa)
m.reply(`Success`)
} else if (args[0].toLowerCase() === 'del'){
sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
fs.writeFileSync('./src/sewa.json', JSON.stringify(sewa))
m.reply(`Success`)
} else {
m.reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)}
break
case prefix+'sewalist': 
case prefix+'listsewa':
let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
for (let i of sewa){
let cekvippsewa = ms(i.expired - Date.now())
txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvippsewa.days} day(s) ${cekvippsewa.hours} hour(s) ${cekvippsewa.minutes} minute(s) ${cekvippsewa.seconds} second(s)\n\n`
}
m.reply(txtnyee)
break
case prefix+'sewacheck':
case prefix+'ceksewa': 
if (!m.isGroup) return m.reply('khusus Grup')
if (!isSewa) return m.reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
let cekvipsewa = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
let sewanya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvipsewa.days} day(s) ${cekvipsewa.hours} hour(s) ${cekvipsewa.minutes} minute(s)`
m.reply(sewanya)
break
// tele stiker
case prefix+'gura':
case prefix+'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await rzki.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case prefix+'doge':
case prefix+'dogestick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await rzki.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case prefix+'bucinstick':
case prefix+'bucinp' :{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await rzki.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case prefix+'patrik':
case prefix+'patrick': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await rzki.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case prefix+'smilestick':{
if (isBan) return m.reply(mess.ban)
try {
let stSearch = await xfarr.StickerSearch("smile")
const rndS = stSearch.sticker_url
rzki.sendMedia(m.chat, rndS[Math.floor(Math.random() * rndS.length)], global.packname, global.packname2, m, {asSticker: true})
} catch {
m.reply("Error!")
}
}
break
case prefix+'sadstick':{
if (isBan) return m.reply(mess.ban)
try {
let stSearch = await xfarr.StickerSearch("sad")
const rndS = stSearch.sticker_url
rzki.sendMedia(m.chat, rndS[Math.floor(Math.random() * rndS.length)], global.packname, global.packname2, m, {asSticker: true})
} catch {
m.reply("Error!")
}
}
break
case prefix+'stickersearch': case prefix+'sticksearch': case prefix+'searchstick': case prefix+'searchsticker': {
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply(`Example : \n${prefix + command.slice(1)} patrick`)
try {
let stSearch = await xfarr.StickerSearch(args.join(" "))
const rndS = stSearch.sticker_url
rzki.sendMedia(m.chat, rndS[Math.floor(Math.random() * rndS.length)], global.packname, global.packname2, m, {asSticker: true})
} catch {
m.reply("Error!")
}
}
break
case prefix+'telestick': case prefix+'stickertele': case prefix+'sticktele': {
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply(`Example : \n- ${prefix + command.slice(1)} <name>\n- ${prefix + command.slice(1)} patrick`)
try {
let TFarro = await xfarr.Telesticker(text)
for (let i of TFarro) {
sleep(1500)
await rzki.sendMedia(m.chat, i.url, global.packname, global.packname2, m, {asSticker: true})
}
} catch {
m.reply("Error!")
}
}
break
//TEXT PRO CUY
case prefix+'hoorror':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
     let link = `https://textpro.me/horror-blood-text-effect-online-883.html`
     let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
  case prefix+'whitebear':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
     let link = `https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html`
     let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'thunder':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
     let link = `https://textpro.me/create-thunder-text-effect-online-881.html`
     let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'blackpink':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
     let link = `https://textpro.me/create-blackpink-logo-style-online-1001.html`
     let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'neon':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
     let link = `https://textpro.me/neon-light-text-effect-online-882.html`
     let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'matrix':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
     let link = `https://textpro.me/matrix-style-text-effect-online-884.html`
     let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'sky':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
     let link = `https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html`
     let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'joker':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
     let link = `https://textpro.me/create-logo-joker-online-934.html`
     let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'magma':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
     let link = `https://textpro.me/create-a-magma-hot-text-effect-online-1030.html`
     let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'sand':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
     let link = `https://textpro.me/sand-writing-text-effect-online-990.html`
     let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'pencil':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
     let link = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
     let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'graffiti':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
     let link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
     let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'metallic':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
     let link = `https://textpro.me/create-a-metallic-text-effect-free-online-1041.html`
     let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'steel':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
     let link = `https://textpro.me/steel-text-effect-online-921.html`
     let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'harrypotter':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
     let link = `https://textpro.me/create-harry-potter-text-effect-online-1025.html`
     let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'underwater':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
     let link = `https://textpro.me/3d-underwater-text-effect-generator-online-1013.html`
     let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'luxury':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
     let link = `https://textpro.me/3d-luxury-gold-text-effect-online-1003.html`
     let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'glue':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
     let link = `https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html`
     let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'fabric':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
     let link = `https://textpro.me/fabric-text-effect-online-964.html`
     let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'neonlight':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
     let link = `https://textpro.me/neon-light-glitch-text-generator-online-1063.html`
     let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'lava':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
     let link = `https://textpro.me/lava-text-effect-online-914.html`
     let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'toxic':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
     let link = `https://textpro.me/toxic-text-effect-online-901.html`
     let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'ancient':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
     let link = `https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html`
     let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'christmas':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
     let link = `https://textpro.me/sparkles-merry-christmas-text-effect-1054.html`
     let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'scifi':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
     let link = `https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html`
     let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'rainbow':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
     let link = `https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html`
     let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'carved':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
     let link = `https://textpro.me/create-carved-stone-text-effect-online-1074.html`
     let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'3dstone':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
     let link = `https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html`
     let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'3dglass':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
     let link = `https://textpro.me/create-3d-style-glass-text-effect-online-1072.html`
     let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'3dluxury':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
     let link = `https://textpro.me/create-a-3d-luxury-metallic-text-effect-for-free-1071.html`
     let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'elegant':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
     let link = `https://textpro.me/elegant-white-gold-3d-text-effect-online-free-1070.html`
     let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'demon':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
let link = `https://textpro.me/create-green-horror-style-text-effect-online-1036.html`
let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'watercolor':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
let link = `https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html`
let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'3dgradient':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
let link = `https://textpro.me/online-3d-gradient-text-effect-generator-1020.html`
let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'halloweenfire':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
let link = `https://textpro.me/halloween-fire-text-effect-940.html`
let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'writing':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
let link = `https://textpro.me/sand-writing-text-effect-online-990.html`
let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'denim':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
let link = `https://textpro.me/denim-text-effect-online-919.html`
let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'blood':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
let link = `https://textpro.me/blood-text-on-the-frosted-glass-941.html`
let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'skeleton':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
let link = `https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html`
let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'embossed':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
let link = `https://textpro.me/create-embossed-text-effect-on-cracked-surface-1024.html`
let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'wonderful':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
let link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'devil':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
let link = `https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html`
let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'collwall':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
let link = `https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html`
let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'multicolor':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
let link = `https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html`
let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'batman':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
let link = `https://textpro.me/make-a-batman-logo-online-free-1066.html`
let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'juice':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
let link = `https://textpro.me/fruit-juice-text-effect-861.html`
let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'giraffe':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
let link = `https://textpro.me/create-3d-giraffe-text-effect-online-1069.html`
let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'light':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
let link = `https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html`
let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'glitch':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
let link = `https://textpro.me/create-impressive-glitch-text-effects-online-1027.html`
let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'arcane':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
let link = `https://textpro.me/create-text-effects-arcane-tv-series-online-1067.html`
let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'led':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
let link = `https://textpro.me/color-led-display-screen-text-effect-1059.html`
let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'3dbox':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
let link = `https://textpro.me/3d-box-text-effect-online-880.html`
let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'papercut':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
let link = `https://textpro.me/create-art-paper-cut-text-effect-online-1022.html`
let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'transformer':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
let link = `https://textpro.me/create-a-transformer-text-effect-online-1035.html`
let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'carbon':{
if (!q) return m.reply(`Example: ${prefix + command.slice(1)} rzk`)
let link = `https://textpro.me/glossy-carbon-text-effect-965.html`
let anui = await textpro(link, q)
     reply(mess.wait)
     console.log(anui)
    rzki.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case prefix+'pornhub':{
if(!q) return m.reply(`Example: ${prefix + command.slice(1)} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anu)
rzki.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted:m})
}
break
case prefix+'retro':{
if(!q) return m.reply(`Example: ${prefix + command.slice(1)} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
console.log(anu)
rzki.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted:m})
}
break
case prefix+'horror':{
if(!q) return m.reply(`Example: ${prefix + command.slice(1)} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-a-cinematic-horror-text-effect-1045.html", [`${logo4}`,`${logo9}`])
console.log(anu)
rzki.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted:m})
}
break
case prefix+'8bit':{
if(!q) return m.reply(`Example: ${prefix + command.slice(1)} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])
console.log(anu)
rzki.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted:m})
}
break
case prefix+'glitch2':{
if(!q) return m.reply(`Example: ${prefix + command.slice(1)} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [`${logo4}`,`${logo9}`])
console.log(anu)
rzki.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted:m})
}
break
case prefix+'glitch3':{
if(!q) return m.reply(`Example: ${prefix + command.slice(1)} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [`${logo4}`,`${logo9}`])
console.log(anu)
rzki.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted:m})
}
break
case prefix+'realistic':{
if(!q) return m.reply(`Example: ${prefix + command.slice(1)} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-realistic-vintage-style-light-bulb-1000.html", [`${logo4}`,`${logo9}`])
console.log(anu)
rzki.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted:m})
}
break
case prefix+'space':{
if(!q) return m.reply(`Example: ${prefix + command.slice(1)} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [`${logo4}`,`${logo9}`])
console.log(anu)
rzki.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted:m})
}
break
case prefix+'stone':{
if(!q) return m.reply(`Example: ${prefix + command.slice(1)} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-a-stone-text-effect-online-982.html", [`${logo4}`,`${logo9}`])
console.log(anu)
rzki.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted:m})
}
break
case prefix+'spooky':{
if(!q) return m.reply(`Example: ${prefix + command.slice(1)} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html", [`${logo4}`,`${logo9}`])
console.log(anu)
rzki.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted:m})
}
break
case prefix+'cool':{
if(!q) return m.reply(`Example: ${prefix + command.slice(1)} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [`${logo4}`,`${logo9}`])
console.log(anu)
rzki.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted:m})
}
break
case prefix+'layered':{
if(!q) return m.reply(`Example: ${prefix + command.slice(1)} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-layered-text-effects-online-free-1032.html", [`${logo4}`,`${logo9}`])
console.log(anu)
rzki.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted:m})
}
break
case prefix+'3davengers':{
if(!q) return m.reply(`Example: ${prefix + command.slice(1)} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [`${logo4}`,`${logo9}`])
console.log(anu)
rzki.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted:m})
}
break
case prefix+'marvel':{
if(!q) return m.reply(`Example: ${prefix + command.slice(1)} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [`${logo4}`,`${logo9}`])
console.log(anu)
rzki.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted:m})
}
break
//Cerpen Udh no api ygy
case prefix+'cerpen-anak':{
let cerpe = await cerpen(`anak`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-bahasadaerah':{
let cerpe = await cerpen(`bahasa daerah`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-bahasainggris':{
let cerpe = await cerpen(`bahasa Inggris`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-bahasajawa':{
let cerpe = await cerpen(`bahasa jawa`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-bahasasunda':{
let cerpe = await cerpen(`bahasa sunda`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-budaya':{
let cerpe = await cerpen(`budaya`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-cinta':{
let cerpe = await cerpen(`cinta`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-cintaislami':{
let cerpe = await cerpen(`cinta islami`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-cintapertama':{
let cerpe = await cerpen(`cinta pertama`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-cintaromantis':{
let cerpe = await cerpen(`cinta romantis`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-cintasedih':{
let cerpe = await cerpen(`cinta sedih`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-cintasegitiga':{
let cerpe = await cerpen(`Cinta segitiga`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-cintasejati':{
let cerpe = await cerpen(`cinta sejati`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-galau':{
let cerpe = await cerpen(`galau`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-gokil':{
let cerpe = await cerpen(`gokil`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-inspiratif':{
let cerpe = await cerpen(`inspiratif`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-jepang':{
let cerpe = await cerpen(`jepang`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-kehidupan':{
let cerpe = await cerpen(`kehidupan`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-keluarga':{
let cerpe = await cerpen(`keluarga`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-kisahnyata':{
let cerpe = await cerpen(`kisah nyata`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-korea':{
let cerpe = await cerpen(`korea`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-kristen':{
let cerpe = await cerpen(`kristen`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-liburan':{
let cerpe = await cerpen(`liburan`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-malaysia':{
let cerpe = await cerpen(`malaysia`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-mengharukan':{
let cerpe = await cerpen(`mengharukan`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-misteri':{
let cerpe = await cerpen(`misteri`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-motivasi':{
let cerpe = await cerpen(`motivasi`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-nasihat':{
let cerpe = await cerpen(`nasihat`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-nasionalisme':{
let cerpe = await cerpen(`nasionalisme`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-olahraga':{
let cerpe = await cerpen(`olahraga`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-patahhati':{
let cerpe = await cerpen(`patah hati`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-penantian':{
let cerpe = await cerpen(`penantian`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-pendidikan':{
let cerpe = await cerpen(`pendidikan`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-pengalaman':{
let cerpe = await cerpen(`pengalaman pribadi`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-pengorbanan':{
let cerpe = await cerpen(`pengorbanan`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-penyesalan':{
let cerpe = await cerpen(`penyesalan`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-perjuangan':{
let cerpe = await cerpen(`perjuangan`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-perpisahan':{
let cerpe = await cerpen(`perpisahan`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-persahabatan':{
let cerpe = await cerpen(`persahabatan`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-petualangan':{
let cerpe = await cerpen(`petualangan`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-ramadhan':{
let cerpe = await cerpen(`ramadhan`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-remaja':{
let cerpe = await cerpen(`remaja`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-rindu':{
let cerpe = await cerpen(`rindu`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-rohani':{
let cerpe = await cerpen(`rohani`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-romantis':{
let cerpe = await cerpen(`romantis`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-sastra':{
let cerpe = await cerpen(`sastra`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-sedih':{
let cerpe = await cerpen(`sedih`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen-sejarah':{
let cerpe = await cerpen(`sejarah`)
        m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
//Primbon
case prefix+'nomerhoki': case prefix+'nomorhoki': {
                if (!Number(text)) m.reply(`Example : ${prefix + command.slice(1)} 6288292024190`)
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                rzki.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case prefix+'artimimpi': case prefix+'tafsirmimpi': {
                if (!text) m.reply(`Example : ${prefix + command.slice(1)} belanja`)
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                rzki.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case prefix+'ramalanjodoh': case prefix+'ramaljodoh': {
                if (!text) m.reply(`Example : ${prefix + command.slice(1)} RZK, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                rzki.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'ramalanjodohbali': case prefix+'ramaljodohbali': {
                if (!text) m.reply(`Example : ${prefix + command.slice(1)} RZK, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                rzki.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'suamiistri': {
                if (!text) m.reply(`Example : ${prefix + command.slice(1)} RZK, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                rzki.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'ramalancinta': case prefix+'ramalcinta': {
                if (!text) m.reply(`Example : ${prefix + command.slice(1)} RZK, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                rzki.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'artinama': {
                if (!text) m.reply(`Example : ${prefix + command.slice(1)} Rizki`)
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                rzki.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'kecocokannama': case prefix+'cocoknama': {
                if (!text) m.reply(`Example : ${prefix + command.slice(1)} RZK, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rzki.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case prefix+'kecocokanpasangan': case prefix+'cocokpasangan': case prefix+'pasangan': {
                if (!text) m.reply(`Example : ${prefix + command.slice(1)} RZK|Novia`)
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                rzki.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case prefix+'jadianpernikahan': case prefix+'jadiannikah': {
                if (!text) m.reply(`Example : ${prefix + command.slice(1)} 6, 12, 2020`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rzki.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case prefix+'sifatusaha': {
                if (!text) m.reply(`Example : ${prefix+ command.slice(1)} 28, 12, 2021`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rzki.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case prefix+'rejeki': case prefix+'rezeki': {
                if (!text) m.reply(`Example : ${prefix + command.slice(1)} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rzki.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'pekerjaan': case prefix+'kerja': {
                if (!text) m.reply(`Example : ${prefix + command.slice(1)} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rzki.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'ramalannasib': case prefix+'ramalnasib': case prefix+'nasib': {
                if (!text) m.reply(`Example : 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rzki.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case prefix+'potensipenyakit': case prefix+'penyakit': {
                if (!text) m.reply(`Example : ${prefix + command.slice(1)} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rzki.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'artitarot': case prefix+'tarot': {
                if (!text) m.reply(`Example : ${prefix + command.slice(1)} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rzki.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'fengshui': {
                if (!text) m.reply(`Example : ${prefix + command.slice(1)} RZK, 1, 2005\n\nNote : ${prefix + command.slice(1)} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                rzki.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case prefix+'haribaik': {
                if (!text) m.reply(`Example : ${prefix + command.slice(1)} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rzki.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'harisangar': case prefix+'taliwangke': {
                if (!text) m.reply(`Example : ${prefix + command.slice(1)} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rzki.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'harinaas': case prefix+'harisial': {
                if (!text) m.reply(`Example : ${prefix + command.slice(1)} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rzki.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case prefix+'nagahari': case prefix+'harinaga': {
                if (!text) m.reply(`Example : ${prefix + command.slice(1)} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rzki.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'arahrejeki': case prefix+'arahrezeki': {
                if (!text) m.reply(`Example : ${prefix + command.slice(1)} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rzki.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'peruntungan': {
                if (!text) m.reply(`Example : ${prefix + command.slice(1)} RZK, 7, 7, 2005,) 2022\n\nNote : ${prefix + command.slice(1)} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                rzki.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'weton': case prefix+'wetonjawa': {
                if (!text) m.reply(`Example : ${prefix + command.slice(1)} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rzki.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case prefix+'sifat': case prefix+'karakter': {
                if (!text) m.reply(`Example : ${prefix + command.slice(1)} RZK, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rzki.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case prefix+'keberuntungan': {
                if (!text) m.reply(`Example : ${prefix + command.slice(1)} RZK, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rzki.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case prefix+'memancing': {
                if (!text) m.reply(`Example : ${prefix + command.slice(1)} 12, 1, 2022`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                rzki.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'masasubur': {
                if (!text) m.reply(`Example : ${prefix + command.slice(1)} 12, 1, 2022, 28\n\nNote : ${prefix + command.slice(1)} hari pertama menstruasi, siklus`)
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                rzki.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'zodiak': case prefix+'zodiac': {
                if (!text) m.reply(`Example : ${prefix+ command.slice(1)} 7 7 2005`)
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') m.reply(date)
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                rzki.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case prefix+'shio': {
                if (!text) m.reply(`Example : ${prefix + command.slice(1)} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                rzki.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
            }
            break

case prefix+'ringtone': {
		if (!args.join(" ")) return m.reply(`Contoh:\n${prefix + command.slice(1)} black over`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		rzki.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
case prefix+'wallpaper': {
                if (!args.join(" ")) return m.reply("Mau cari gambar apa kak?")
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(args)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `.wallpaper ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: `© Created RZK MD`,
                    buttons: buttons,
                    headerType: 4
                }
                rzki.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case prefix+'wikimedia': {
                if (!args.join(" ")) return m.reply("Mau cari gambar apa kak?")
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(args)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `.wikimedia ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: `© Created RZK MD`,
                    buttons: buttons,
                    headerType: 4
                }
                rzki.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case prefix+'quotesanime': case prefix+'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `.quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                rzki.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case prefix+'coffe': case prefix+'kopi': {
            let buttons = [
                    {buttonId: `.coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: `Created By © RZK`,
                    buttons: buttons,
                    headerType: 4
                }
                rzki.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case prefix+'emoji': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply('emojinya?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await rzki.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption:"Done!"}, {quoted:m})
await rzki.sendMessage(from, {text:"reply #s to this image to make sticker"}, {quoted:mese})
})
}
break
case prefix+'suitpvp': case prefix+'suit': {
if (isBan) return m.reply(mess.ban)
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) m.reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain`)
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await rzki.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) rzki.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
case prefix+'family100': {
if (isBan) return m.reply(mess.ban)
if ('family100'+m.chat in _family100) {
m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await rzki.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
break
case prefix+'tebak': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : ${prefix + command.slice(1)} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`)
if (args[0] === "lagu") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await rzki.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
rzki.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
rzki.sendButtonText(m.chat, [{ buttonId: '.tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, namabot, m)
delete tebaklagu[m.sender.split('@')[0]]
}
} else if (args[0] === 'gambar') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
rzki.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
rzki.sendButtonText(m.chat, [{ buttonId: '.tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`,namabot, m)
delete tebakgambar[m.sender.split('@')[0]]
}
} else if (args[0] === 'kata') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
rzki.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
rzki.sendButtonText(m.chat, [{ buttonId: '.tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, namabot, m)
delete tebakkata[m.sender.split('@')[0]]
}
} else if (args[0] === 'kalimat') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
rzki.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
rzki.sendButtonText(m.chat, [{ buttonId: '.tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, namabot, m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} else if (args[0] === 'lirik') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
rzki.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
rzki.sendButtonText(m.chat, [{ buttonId: '.tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, namabot, m)
delete tebaklirik[m.sender.split('@')[0]]
}
} else if (args[0] === 'lontong') {
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
rzki.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
rzki.sendButtonText(m.chat, [{ buttonId: '.tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, namabot, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
}
}
}
addCountCmd('#tebak', sender, _cmd)
break
//tambahan
	case prefix+'tebakgambar':{
		        if (isGame(sender, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, tebakgambar2)) return reply(from, `Masih ada game yang belum diselesaikan`, tebakgambar2[getGamePosi(from, tebakgambar2)].msg)
				var tg = JSON.parse(fs.readFileSync('./lib/Result/tebakgambar.json'))
				var data = pickRandom(tg)
				  data.jawaban = data.jawaban.split('Jawaban ').join('')
				  var teks = `*TEBAK GAMBAR*\n\n`+monospace(`Petunjuk : ${data.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')}\nDeskripsi : ${data.deskripsi}\nWaktu : ${gamewaktu}s`)
				  rzki.sendMessage(from, {caption: teks, image: {url: data.img}}, {quoted: m})
				  .then( res => {
					var jawab = data.jawaban.toLowerCase()
					addPlayGame(from, 'TEBAK KATA', jawab, gamewaktu, res, tebakgambar2)
					gameAdd(sender, glimit)
				  })
				  }
			    break
case prefix+'tebakkata':{
		        if (isGame(sender, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, kuiscuy)) return reply(from, `Masih ada game yang belum diselesaikan`, kuiscuy[getGamePosi(from, kuiscuy)].msg)
				var kuisnya = JSON.parse(fs.readFileSync('./lib/Result/tebakkata.json'))
				const kukus = pickRandom(kuisnya)
				  kukus.jawaban = kukus.jawaban.split('Jawaban ').join('')
				  var teks = `*TEBAK KATA*\n\n`+monospace(`Soal : ${kukus.soal}\nWaktu : ${gamewaktu}s`)
				  rzki.sendMessage(from, {text: teks}, {quoted: m})
				  .then( res => {
					var jawab = kukus.jawaban.toLowerCase()
					addPlayGame(from, 'TEBAK KATA', jawab, gamewaktu, res, kuiscuy)
					gameAdd(sender, glimit)
				  })
				  }
			    break
case prefix+'kuis':{
		        if (isGame(sender, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, tebaktebakan2)) return reply(from, `Masih ada game yang belum diselesaikan`, tebaktebakan2[getGamePosi(from, tebaktebakan2)].msg)
				var tebaknya = JSON.parse(fs.readFileSync('./lib/Result/tebaktebakan.json'))
				var hayo = pickRandom(tebaknya)
				  hayo.jawaban = hayo.jawaban.split('Jawaban ').join('')
				  var teks = `*KUIS GAME*\n\n`+monospace(`Soal : ${hayo.soal}\nWaktu : ${gamewaktu}s`)
				  rzki.sendMessage(from, {text: teks}, {quoted: m})
				  .then( res => {
					var jawab = hayo.jawaban.toLowerCase()
					addPlayGame(from, 'KUIS GAME', jawab, gamewaktu, res, tebaktebakan2)
					gameAdd(sender, glimit)
				  })
				  }
			    break
case prefix+'tekateki':{
		        if (isGame(sender, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, tekateki)) return reply(from, `Masih ada game yang belum diselesaikan`, tekateki[getGamePosi(from, tekateki)].msg)
				var tebaknya = JSON.parse(fs.readFileSync('./lib/Result/tekateki.json'))
				var hayo = pickRandom(tebaknya)
				  hayo.jawaban = hayo.jawaban.split('Jawaban ').join('')
				  var teks = `*TEKA TEKI*\n\n`+monospace(`Soal : ${hayo.soal}\nWaktu : ${gamewaktu}s`)
				  rzki.sendMessage(from, {text: teks}, {quoted: m})
				  .then( res => {
					var jawab = hayo.jawaban.toLowerCase()
					addPlayGame(from, 'KUIS GAME', jawab, gamewaktu, res, tekateki)
					gameAdd(sender, glimit)
				  })
				  }
			    break
case prefix+'tebakkimia':{
		        if (isGame(sender, isCreator, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
			    if (isPlayGame(from, tebakkimia)) return reply(from, `Masih ada game yang belum diselesaikan`, tebakkimia[getGamePosi(from, tebakkimia)].msg)
				var tebaknya = JSON.parse(fs.readFileSync('./lib/Result/tebakkimia.json'))
				var hayo = pickRandom(tebaknya)
				  hayo.unsur = hayo.unsur.split('Jawaban ').join('')
				  var teks = `*TEKA TEKI*\n\n`+monospace(`Soal : Apa Kepanjangan Dari Unsur ${hayo.lambang}\nWaktu : ${gamewaktu}s`)
				  rzki.sendMessage(from, {text: teks}, {quoted: m})
				  .then( res => {
					var jawab = hayo.unsur.toLowerCase()
					addPlayGame(from, 'TEBAK KIMIA', jawab, gamewaktu, res, tebakkimia)
					gameAdd(sender, glimit)
				  })
				  }
			    break
case prefix+'ttc': case prefix+'ttt': case prefix+'tictactoe': {
if (isBan) return m.reply(mess.ban)
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply('Kamu masih didalam game')
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (args.join(" ") ? room.name === args.join(" ") : true))
if (room) {
m.reply('Partner ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await rzki.sendText(room.x, str, m, { mentions: parseMention(str) } )
await rzki.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (args.join(" ")) room.name = args.join(" ")
m.reply('Menunggu partner' + (args.join(" ") ? ` mengetik command dibawah ini ${command} ${args.join(" ")}` : ''))
this.game[room.id] = room
}
}
addCountCmd('#tictactoe', sender, _cmd)
break
case prefix+'delttc': case prefix+'delttt': {
if (isBan) return m.reply(mess.ban)
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
rzki.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
} else if (!this.game) {
m.reply(`Session TicTacToe🎮 tidak ada`)
} else throw '?'
} catch (e) {
m.reply('rusak')
}
}
break
case prefix+'kuismath': case prefix+'math': {
if (isBan) return m.reply(mess.ban)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return m.reply("Masih Ada Sesi Yang Belum Diselesaikan!")
let { genMath, modes } = require('./src/math')
if (!args.join(" ")) return m.reply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
let result = await genMath(text.toLowerCase())
rzki.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
delete kuismath[m.sender.split('@')[0]]
}
}
break
case prefix+'delete': case prefix+'del': {
if (isBan) return m.reply(mess.ban)
if (!m.quoted) return
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) return m.reply('Pesan tersebut bukan dikirim oleh bot!')
rzki.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case prefix+'halah': case prefix+'hilih': case prefix+'huluh': case prefix+'heleh': case prefix+'holoh': {
if (isBan) return m.reply(mess.ban)
if (!m.quoted && !args.join(" ")) return m.reply(`Kirim/reply text dengan caption ${prefix + command.slice(1)}`)
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : args.join(" ") ? args.join(" ") : m.text : args.join(" ") ? args.join(" ") : m.text
m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
}
break
case prefix+'vote': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (m.chat in vote) return m.reply(`_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`)
if (!args.join(" ")) return m.reply(`Masukkan Alasan Melakukan Vote, Example: *${prefix + command.slice(1)} Owner Ganteng*`)
m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
vote[m.chat] = [args.join(" "), [], []]
await sleep(1000)
upvote = vote[m.chat][1]
devote = vote[m.chat][2]
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageVote = {
image: log0,
jpegThumbnail: thum,
caption: teks_vote,
footer: namabot,
buttons: buttonsVote,
headerType: 1
}
rzki.sendMessage(m.chat, buttonMessageVote)
}
break
case prefix+'upvote': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!(m.chat in vote)) return m.reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) return m.reply('Kamu Sudah Vote')
vote[m.chat][1].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsUpvote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageUpvote = {
image: log0,
jpegThumbnail: thum,
caption: teks_vote,
footer: namabot,
buttons: buttonsUpvote,
headerType: 1,
mentions: menvote
}
rzki.sendMessage(m.chat, buttonMessageUpvote)
}
break
case prefix+'devote': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!(m.chat in vote)) return m.reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) return m.reply('Kamu Sudah Vote')
vote[m.chat][2].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsDevote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageDevote = {
image: log0,
jpegThumbnail: thum,
caption: teks_vote,
footer: namabot,
buttons: buttonsDevote,
headerType: 1,
mentions: menvote
}
rzki.sendMessage(m.chat, buttonMessageDevote)
}
break
case prefix+'cekvote': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!(m.chat in vote)) return m.reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${rzki.user.id}
`
rzki.sendTextWithMentions(m.chat, teks_vote, m)
}
break
case prefix+'deletevote': case'delvote': case prefix+'hapusvote': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!(m.chat in vote)) return m.reply(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
delete vote[m.chat]
m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
}
break
case prefix+'listpc': {
if (isBan) return m.reply(mess.ban)
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
let teks = `     「 List Personal Chat 」\n\nThere are ${anu.length} users using bot in personal chat`
for (let i of anu) {
 teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`
}
rzki.sendTextWithMentions(m.chat, teks, m)
}
break
case prefix+'listgc': {
if (isBan) return m.reply(mess.ban)
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `     「 List Group Chat 」\n\nThere are ${anu.length} users using bot in group chat`
for (let i of anu) {
 let metadata = await rzki.groupMetadata(i)
 if (metadata.owner === "undefined") {
 loldd = false
 } else {
 loldd = metadata.owner
 }
 teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nDibuat : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
}
rzki.sendTextWithMentions(m.chat, teks, m)
}
break
case prefix+'afk': {
if (isBan) return m.reply(mess.ban)
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = args.join(" ")
m.reply(`${m.pushName} sekarang afk\nAlasan : ${args.join(" ") ? args.join(" ") : ''}`)
}
break	
case prefix+'setcmd': {
if (isBan) return m.reply(mess.ban)
if (!m.quoted) return m.reply('Reply Pesan!')
if (!m.quoted.fileSha256) return m.reply('SHA256 Hash Missing')
if (!args.join(" ")) return m.reply(`Untuk Command Apa?`)
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return m.reply('You have no permission to change this sticker command')
global.db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
m.reply(`Done!`)
}
break
case prefix+'delcmd': {
if (isBan) return m.reply(mess.ban)
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) return m.reply(`Tidak ada hash`)
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return m.reply('You have no permission to delete this sticker command')
delete global.db.data.sticker[hash]
m.reply(`Done!`)
}
break
case prefix+'listcmd': {
if (isBan) return m.reply(mess.ban)
let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
rzki.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
case prefix+'lockcmd': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!m.quoted) return m.reply('Reply Pesan!')
if (!m.quoted.fileSha256) return m.reply('SHA256 Hash Missing')
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.data.sticker)) return m.reply('Hash not found in database')
global.db.data.sticker[hash].locked = !/^un/i.test(command)
m.reply('Done!')
}
break
case prefix+'addmsg': {
if (isBan) return m.reply(mess.ban)
if (!m.quoted) return m.reply('Reply Message Yang Ingin Disave Di Database')
if (!args.join(" ")) return m.reply(`Example : ${prefix + command.slice(1)} nama file`)
let msgs = global.db.data.database
if (text.toLowerCase() in msgs) return m.reply(`'${args.join(" ")}' telah terdaftar di list pesan`)
msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${args.join(" ")}'
    
Akses dengan ${prefix}getmsg ${args.join(" ")}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
break
case prefix+'getmsg': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : ${prefix + command.slice(1)} file name\n\nLihat list pesan dengan ${prefix}listmsg`)
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) return m.reply(`'${args.join(" ")}' tidak terdaftar di list pesan`)
rzki.copyNForward(m.chat, msgs[text.toLowerCase()], true)
}
break
case prefix+'listmsg': {
if (isBan) return m.reply(mess.ban)
try {
let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
listMsgs = []
for (let i of seplit) {
listMsgs.push({
title: `${i.nama}`, rowId: `${i.nama}`, description: `${getContentType(i.message).replace(/Message/i, '')}`})
}
const sections = [
{
title: "Total Message " + seplit.length,
rows: listMsgs
}
]

const listMessage = {
text: "ketuk button dibawah untuk melihat daftar list respon message, ketuk lagi untuk menjalankan fiturnya",
footer: namabot,
title: "     「 List Respon Message 」",
buttonText: "List Message",
sections
}
rzki.sendMessage(from, listMessage, {quoted:m})
} catch {
m.reply(`Belum ada respon message yang ditambahkan dalam list`)
}
}
break
/*case prefix+'listmsg': {
if (isBan) return m.reply(mess.ban)
let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '「 LIST DATABASE 」\n\n'
for (let i of seplit) {
teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
}
m.reply(teks)
}
break*/
case prefix+'delmsg': case prefix+'deletemsg': {
 let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
delete msgs[text.toLowerCase()]
m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
case prefix+'fliptext': {
if (isBan) return m.reply(mess.ban)
if (args.length < 1) return m.reply(`Example:\n${prefix}fliptext Myrzki`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
m.reply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
break
case prefix+'tohuruf': {
if (isBan) return m.reply(mess.ban)
if (!Number(args[0])) return m.reply(`Example:\n${prefix}tohuruf 456`)
try {
quere = args.join(" ")
convertes = await toHur(quere)
m.reply(`\`\`\`「 ALPHABET 」\`\`\`\n*•> Number :*\n${quere}\n*•> Alphabet :*\n${convertes}`)
} catch {
m.reply("Error")
}
}
break
case prefix+'welcome': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcm) return m.reply('*Welcome already ON.*')
wlcm.push(from)
/* if (db.data.chats[m.chat].welcome) return m.reply(`Sudah Aktif Sebelumnya`)
 db.data.chats[m.chat].welcome = true*/
m.reply('*Welcome successfully turned ON.*')
} else if (args[0] === "off") {
if (!welcm) return m.reply('*Welcome already OFF.*')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
/* if (!db.data.chats[m.chat].welcome) return m.reply(`Sudah Mati`)
 db.data.chats[m.chat].welcome = false*/
m.reply('*Welcome successfully turned OFF.*')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case prefix+'left': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (leftt) return m.reply('*Left already ON.*')
left.push(from)
/* if (db.data.chats[m.chat].welcome) return m.reply(`Sudah Aktif Sebelumnya`)
 db.data.chats[m.chat].welcome = true*/
m.reply('*Left successfully turned ON.*')
} else if (args[0] === "off") {
if (!leftt) return m.reply('*Left already OFF.*')
let off = left.indexOf(from)
left.splice(off, 1)
/* if (!db.data.chats[m.chat].welcome) return m.reply(`Sudah Mati`)
 db.data.chats[m.chat].welcome = false*/
m.reply('*Left successfully turned OFF.*')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case prefix+'autorevoke': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (GcRvk) return m.reply('Sudah Aktif')
gcrevoke.push(from)
m.reply('Succes menyalakan autorevoke di group ini')
} else if (args[0] === "off") {
if (!GcRvk) return m.reply('Sudah Mati')
let off = wlcm.indexOf(from)
gcrevoke.splice(off, 1)
m.reply('Succes mematikan autorevoke di group ini')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case prefix+'antilink': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
 if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
 db.data.chats[m.chat].antilink = true
m.reply('Succes menyalakan antilink di group ini')
var groupe = await rzki.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
rzki.sendMessage(from, {text: `PERINGATAN!!! jika bukan admin jangan send link di group ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antilink = false
m.reply('Succes mematikan antilink di group ini')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case prefix+'listonline': case prefix+'listaktif': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
let liston = 1
rzki.sendText(m.chat, '     「 List Online 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break
case prefix+'chat': {
if (!isCreator) return m.reply(mess.owner)
if (!args.join(" ")) return m.reply(`Example :\n${prefix + command.slice(1)} 62813xxxx|Woi`)
const cpes = args.join(" ")
const nony = cpes.split("|")[0];
const pesny = cpes.split("|")[1];
lolh = `*「 CHAT FITUR 」*

Pesan dari admin bot
Nomor : @${m.sender.split("@")[0]}
Pesan : ${pesny}`
rzki.sendMessage(nony + "@s.whatsapp.net", {text:lolh, mentions:[m.sender]}, {quoted:m})
}
await m.reply("Succes")
break
case prefix+'cowner': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Pilih add atau del`)
if (args[1]) {
orgnye = args[1]
} else if (m.quoted) {
orgnye = m.quoted.sender.split("@")[0]
}
const isCwner = owner.includes(orgnye)
if (args[0] === "add") {
if (isCwner) return m.reply('User sudah menjadi owner')
owner.push(orgnye)
m.reply(`Succes add friends`)
} else if (args[0] === "del") {
if (!isCwner) return m.reply('User bukan owner')
let delcwner = owner.indexOf(orgnye)
owner.splice(delcwner, 1)
m.reply(`Succes del friends`)
} else {
m.reply("Error")
}
}
break
case prefix+'ban': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Pilih add atau del`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banUser.includes(orgnye)
if (args[0] === "add") {
if (isBane) return m.reply('User sudah dibanned')
banUser.push(orgnye)
m.reply(`Succes ban`)
} else if (args[0] === "del") {
if (!isBane) return m.reply('User tidak dibanned')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
m.reply(`Succes delban`)
} else {
m.reply("Error")
}
}
break
case prefix+'request': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : ${prefix + command.slice(1)} min tambahin fitur downloader`)
teks = `*「 REQUEST FITUR 」*`
teks1 = `\n\nNomor : @${m.sender.split("@")[0]}\nRequest : ${args.join(" ")}`
teks2 = `\n\nSucces send to owner`
for (let i of owner) {
rzki.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
rzki.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
break
case prefix+'report': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : \n- ${prefix + command.slice(1)} fitur ig error min\n- ${prefix + command.slice(1)} user ini nyepam min`)
teks = `*「 REPORT FITUR 」*`
teks1 = `\n\nNomor : @${m.sender.split("@")[0]}\nReport : ${args.join(" ")}`
teks2 = `\n\nSucces send to owner`
for (let i of owner) {
rzki.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
rzki.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
break
case prefix+'mcserver': case prefix+'mcquery': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : \n${prefix + command.slice(1)} ip|port\nUses : \n${prefix + command.slice(1)} play.zackrzki.com|19132`)
const Query = require("minecraft-query");

const qury = args.join(" ")
const iphost = qury.split("|")[0];
const portnya = qury.split("|")[1];

if (!iphost) return m.reply("ipnya mana kak?")
if (!portnya) return m.reply("portnya mana kak?")

const q = new Query({host: iphost, port: portnya, timeout: 7500});

q.fullStat()
.then(success => {
m.reply(jsonformat(success));
return q.basicStat()
})
.then(success => {
m.reply(jsonformat(success));
q.close();
})
}
break
case prefix+'mcpedl': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : ${prefix + command.slice(1)} shader`)
yogipw.mcpedl(args.join(" ")).then(async(res) => {
teks = `❏  *MCPEDL - SEARCH*`
for (let i of res) {
teks += `\n\n ›  *Name :* ${i.name}\n ›  *Category :* ${i.category}\n ›  *Date :* ${i.date}\n ›  *Desc :* ${i.desc}\n ›  *Link :* ${i.link}`
}
let buttons = [
{buttonId: `.menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: namabot2,
buttons: buttons,
headerType: 4
}
rzki.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case prefix+'happymod': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : ${prefix + command.slice(1)} mobile legend`)
yogipw.happymod(args.join(" ")).then(async(res) => {
teks = '```「 HappyMod Search 」```'
for (let i of res) {
teks += `\n\n${i.name}\n`
teks += `${i.link}`
}
let buttons = [
{buttonId: `.menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: {url:res[0].icon},
jpegThumbnail: thum,
caption: teks,
footer: namabot2,
buttons: buttons,
headerType: 4
}
rzki.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case prefix+'searchgc': {
if (isBan) return m.reply(mess.ban)
if (args.length < 1) return m.reply(`Example :\n${prefix}searchgc Editor Berkelas`)
nae = args.join(" ")
hx.linkwa(nae).then(res => {
teks = '```「 Search Group 」```'
for (let i of res) {
teks += `\n\n•> Group Whatsapp :\n`
teks += `${i.link}\n`
teks += `${i.nama}`
}
let buttons = [
{buttonId: `.ping`, buttonText: {displayText: 'Status'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: namabot2,
buttons: buttons,
headerType: 4
}
rzki.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case prefix+'servermc': {
if (isBan) return m.reply(mess.ban)
yogipw.servermc().then(async(res) => {
let teks = '❏  *SERVER MC INDONESIA*\n\nhttps://minecraftpocket-servers.com/country/indonesia/\n\n'
let no = 1
for (let i of res) {
teks += ` › Server Ke ${no++}\nip : ${i.ip}\nport : ${i.port}\nversi : ${i.versi}\nplayer : ${i.player}\n\n`
}
let buttons = [
{buttonId: `.menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: "© RZK MD ",
buttons: buttons,
headerType: 4
}
rzki.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case prefix+'antitag': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return
if (args.length < 1) return m.reply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (antitags === true) return
global.antitags = true
m.reply(`Berhasil mengaktifkan antitag!`)
} else if (args[0] === 'off') {
if (antitags === false) return
global.antitags = false
m.reply(`Berhasil menonaktifkan antitag!`)
} else {
m.reply('Pilih on atau off')
}
}
break
/*case prefix+'yts': case prefix+'ytsearch': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : ${prefix + command.slice(1)} dj 30 detik`)
let yts = require("yt-search")
let search = await yts(args.join(" "))
let teks = '*「 YOUTUBE SEARCH 」*\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
}
rzki.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
addCmd('#yts', 1, commund)
break*/
case prefix+'yts': case prefix+'ytsearch': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : ${prefix + command.slice(1)} dj 30 detik`)
let yts = require("yt-search")
let search = await yts(args.join(" "))
listSerch = []
teskd = `\nResult From ${args.join(" ")}`
for (let i of search.all) {
listSerch.push({
title: i.title, rowId: `.ytdl ${i.url}`, description: `Author : ${i.author.name} / ${i.timestamp}`})
}
const sections = [
{
title: "Total Search " + search.all.length,
rows: listSerch
}
]
const listMessage = {
text: teskd,
footer: namabot,
title: "❏  *YT - SEARCH*",
buttonText: "List Search",
mentions: await rzki.parseMention(teskd),
sections
}
rzki.sendMessage(from, listMessage, {quoted:m})
}
addCountCmd('#yts', sender, _cmd)
break
case prefix+'infochat': {
if (isBan) return m.reply(mess.ban)
if (!m.quoted) m.reply('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) return m.reply('Pesan tersebut bukan dikirim oleh bot!')
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `⭔ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
rzki.sendTextWithMentions(m.chat, teks, m)
}
break
case prefix+'setname': case prefix+'setsubject': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!text) return m.reply('Text ?')
await rzki.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case prefix+'setdesc': case prefix+'setdesk': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!text) return m.reply('Text ?')
await rzki.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case prefix+'setppbot':{
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command.slice(1)}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command.slice(1)}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command.slice(1)}`)
var media = await rzki.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `'panjang'`) {
var { img } = await generateProfilePicture(media)
await rzki.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(media)
m.reply(`Sukses`)
} else {
var data = await rzki.updateProfilePicture(botNumber, { url: media })
fs.unlinkSync(media)
m.reply(`Sukses`)
}
}
break
case prefix+'setppgroup': case prefix+'setppgrup': case prefix+'setppgc': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command.slice(1)}`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command.slice(1)}`)
if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command.slice(1)}`)
var media = await rzki.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `'panjang'`) {
var { img } = await generateProfilePicture(media)
await rzki.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(media)
m.reply(`Sukses`)
} else {
var data = await rzki.updateProfilePicture(m.chat, { url: media })
fs.unlinkSync(media)
m.reply(`Sukses`)
}
}
addCountCmd('#setppgc', sender, _cmd)
break
case prefix+'spam': {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
if (!m.quoted) return m.reply("Reply pesanya!")
if (!args[0]) return m.reply("Masukan jumlah spamnya")
if (!Number(args[0])) return m.reply("Hanya angka")
let jml = args[0]
if (isCreator) {
for(let i=0;i<jml;i++){
sleep(1000)
await quoted.copyNForward(m.chat, true)
}
} else {
m.reply("Hanya bisa digunakan oleh owner bot")
}
}
break
case prefix+'tagall': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${args.join(" ") ? args.join(" ") : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
rzki.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
addCountCmd('#tagall', sender, _cmd)
break
case prefix+'hidetag': case prefix+'totag': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (m.quoted) {
mqtd = m.quoted ? m.quoted.fakeObj : ""
rzki.sendMessage(m.chat, {forward:mqtd, mentions:participants.map(a => a.id)}, {quoted:m})
} else {
rzki.sendMessage(m.chat, {text:args.join(" ") ? args.join(" ") : "", mentions:participants.map(a => a.id)}, {quoted:m})
}
}
addCountCmd('#hidetag', sender, _cmd)
break
case prefix+'ohidetag': case prefix+'ototag': {
if (!isCreator) return m.reply(mess.owner)
if (m.quoted) {
mqtd = m.quoted ? m.quoted.fakeObj : ""
rzki.sendMessage(m.chat, {forward:mqtd, mentions:participants.map(a => a.id)}, {quoted:m})
} else {
rzki.sendMessage(m.chat, {text:args.join(" ") ? args.join(" ") : "", mentions:participants.map(a => a.id)}, {quoted:m})
}
}
addCountCmd('#hidetag', sender, _cmd)
break
case prefix+'linkgroup': case prefix+'linkgc': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
let response = await rzki.groupInviteCode(m.chat)
rzki.sendMessage(m.chat, {text:`Link Group ${groupMetadata.subject} : \nhttps://chat.whatsapp.com/${response}l`, "contextInfo": {
mimetype: "image/jpeg",
text: "RZK MD",
"forwardingScore": 1000000000,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
"title": `RZK MD`,
"body": `RZK MD`,
"previewType": "PHOTO",
"thumbnailUrl": thum,
"thumbnail": thum,
"sourceUrl": "https://www.instagram.com/p/CcjYM8usZWd/?igshid=YmMyMTA2M2Y="
}}}, { quoted: m, detectLink: true })
}
break
case prefix+'revoke': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
rzki.groupRevokeInvite(m.chat)
}
break
case prefix+'ephemeral': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!args[0]) return m.reply('Masukkan value enable/disable')
if (args[0] === 'enable') {
await rzki.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'disable') {
await rzki.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
case prefix+'editinfo': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === 'open'){
await rzki.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'close'){
await rzki.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: '.editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: '.editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
]
let buttonMessage = {
text: `*「 GROUP SETTING 」*\n\nChange Info, Select Open Or Close`,
footer: namabot2,
buttons: buttons,
headerType: 4
}
rzki.sendMessage(m.chat, buttonMessage, { quoted: m })
}
}
break
case prefix+'group': case prefix+'grup': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === 'close'){
await rzki.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await rzki.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: '.group open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: '.group close', buttonText: { displayText: 'Close' }, type: 1 }
]
let buttonMessage = {
text: `*「 GROUP SETTING 」*\n\nChange Group Setting, Select Open Or Close`,
footer: namabot2,
buttons: buttons,
headerType: 4
}
rzki.sendMessage(m.chat, buttonMessage, { quoted: m })
}
}
break
case prefix+'pm': case prefix+'promote': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rzki.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case prefix+'dm': case prefix+'demote': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rzki.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case prefix+'opm': case prefix+'opromote': {
if (isBan) return m.reply(mess.ban)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isCreator) return m.reply(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rzki.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case prefix+'odm': case prefix+'odemote': {
if (isBan) return m.reply(mess.ban)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isCreator) return m.reply(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rzki.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case prefix+'kick': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rzki.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case prefix+'add': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rzki.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case prefix+'block':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!isCreator) reply(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await rzki.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case prefix+'unblock':{
             addCountCmd(`#${command.slice(1)}`, sender, _cmd)
		if (!isCreator) reply(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await rzki.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
case prefix+'bcgc': case prefix+'bcgroup': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!args.join(" ")) return m.reply(`Text mana?\n\nExample : ${prefix + command.slice(1)} RZK MD`)
let getGroups = await rzki.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 2.5} detik`)
for (let i of anu) {
await sleep(2500)
let btn = [{
urlButton: {
displayText: 'My Group',
url: linkgrupss
}
}]
let txt = `❏  *B R O A D C A S T*\n\n${text}`
//rzki.send5ButImg(i, txt, namabot, log0, btn, thum)
rzki.send5Loc(i, txt, namabot, l0c, btn)
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case prefix+'bc': case prefix+'broadcast': case prefix+'bcall': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!args.join(" ")) return m.reply(`Text mana?\n\nExample : ${prefix + command.slice(1)} RZK MD`)
let anu = await store.chats.all().map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 2.5} detik`)
for (let yoi of anu) {
await sleep(2500)
/*let btn = [{
urlButton: {
displayText: 'SCRIPT',
url: 'https://github.com/Rzk-Gnz/RZK-mdv3/'
}
}, {
urlButton: {
displayText: 'GROUP',
url: linkgrupss
}
}, {
quickReplyButton: {
displayText: 'STATUS',
id: '.ping'
}
}, {
quickReplyButton: {
displayText: 'OWNER',
id: '.owner'
}  
}]*/
let btn = [{
urlButton: {
displayText: 'My Group',
url: linkgrupss
}
}]
let txt = `❏  *B R O A D C A S T*\n\n${text}`
//rzki.send5ButImg(yoi, txt, namabot2, log0, btn, thum)
rzki.send5Loc(yoi, txt, namabot, l0c, btn)
}
m.reply('Sukses Broadcast')
}
break
case prefix+'bcgroup2': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!m.quoted) return m.reply("Reply pesan yang ingin di broadcast!")
let getGroups = await rzki.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 2.5} detik`)
for (let i of anu) {
await sleep(2500)
quoted.copyNForward(i, true, {quoted:ftrolli})
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case prefix+'bcm': case prefix+'bcmedia':{
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!m.quoted) return m.reply(`*Reply Media Dengan Kunci ${command}bc video|teks*`)
let getGroups = await rzki.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
let media = await quoted.download()
inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 2.5} detik`)
for (let i of anu) {
await sleep(2500)
let txt = `❏  *B R O A D C A S T*\n\n${logo9}\n`
if (logo4 == `video`) {
rzki.sendMessage(i, {caption:txt, video:media})
} else if (logo4 == `image`) {
rzki.sendMessage(i, {caption:txt, image:media})
}
//quoted.copyNForward(i, true)
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case prefix+'bcallm': case prefix+'bcallmedia':{
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
if (!m.quoted) return m.reply("Reply pesan yang ingin di broadcast!")
let anu = await store.chats.all().map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 2.5} detik`)
for (let i of anu) {
await sleep(2500)
quoted.copyNForward(i, true)
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case prefix+'inspect': {
if (!args[0]) return m.reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return m.reply("Link Invalid")
rzki.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `     「 Group Link Inspector 」
▸ ID : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}
▸ Subject : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}
▸ Subject update by : ${res.content[0].attrs.s_o.split("@")[0] ? "@" + res.content[0].attrs.s_o.split("@")[0] : "undefined"}
▸ Subject update at : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Create by : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Create at : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Members : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Members
▸ Desc update by : ${res.content[0].content[0].attrs.participant ? "@" + res.content[0].content[0].attrs.participant.split("@")[0] : "undefined"}
▸ Desc update at : ${res.content[0].content[0].attrs.t ? moment(res.content[0].content[0].attrs.t * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Desc id : ${res.content[0].content[0].attrs.id ? res.content[0].content[0].attrs.id : "undefined"}
▸ Description : ${res.content[0].content[0].content[0].content ? res.content[0].content[0].content[0].content.toString() : "No Description"}
`
try {
pp = await rzki.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
rzki.sendFile(m.chat, pp, "", m, { caption: tekse, mentions: await rzki.parseMention(tekse) })
})
}
break
/*case prefix+'freejoin': {
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply("Linknya mana kak?")
vdd = args[0]
let vcc = vdd.split("https://chat.whatsapp.com/")[1]
if (!vcc) return m.reply("Link invalid!")
if (isCreator) {
await rzki.groupAcceptInvite(vcc).then(async(res) => m.reply(jsonformat(res))).catch(_ => _)
m.reply("Succes")
} else {
rzki.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: vcc } }]
}).then(async(res) => {
sizny = res.content[0].attrs.size
if (sizny < 150) {
teks = `Maaf anggota group anda kurang dari 150, minimal agar bot join harus mempunyai lebih dari 150 anggota`
sendOrder(m.chat, teks, "667140254502463", fs.readFileSync('./media/image/rzki.jpg'), 2022, "RZK BOTZ ~ Multi Device", "6283155687629@s.whatsapp.net", "AR6NCY8euY5cbS8Ybg5Ca55R8HFSuLO3qZqrIYCT7hQp0g==", "99999999999999999999")
} else if (sizny > 150) {
await rzki.groupAcceptInvite(vcc).then(async(res) => m.reply(jsonformat(res))).catch(_ => _)
m.reply("Succes")
} else {
m.reply("Error")
}
}).catch(_ => _)
}
}
break*/
case prefix+'join': {
                if (!isCreator) return  m.reply(mess.owner)
                if (!text) return m.reply('Masukkan Link Group!')
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) m.reply('Link Invalid!')     
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                reply(mess.wait)
                await rzki.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case prefix+'leavegc': {
  if (!isCreator) return  m.reply(mess.owner)
                await rzki.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
case prefix+'getcase':
if (!isCreator) return m.reply(mess.owner)
if (args.length < 1) return reply ("*Mau nyari case apa kak*") 
const getCase = (cases) => {
return "case prefix+"+`'${cases}'`+fs.readFileSync("rzki.js").toString().split('case prefix+\''+cases+'\'')[1].split("break")[0]+"break"
}
reply(`${getCase(q)}`)
break
case prefix+'volume': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example: ${prefix + command.slice(1)} 10`)
media = await rzki.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
jadie = fs.readFileSync(rname)
rzki.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
jadie = fs.readFileSync(rname)
rzki.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
m.reply("Kirim video/audio")
}
}
break
case prefix+'tempo': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example: ${prefix + command.slice(1)} 10`)
var req = args.join(' ')
media = await rzki.downloadAndSaveMediaMessage(quoted, "tempo")
if (isQuotedAudio) {
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
hah = fs.readFileSync(ran)
rzki.sendMessage(from, {audio:hah, mimetype:'audio/mp4', ptt:true}, {quoted:m})
fs.unlinkSync(ran)
})
} else if (isQuotedVideo) {
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
hah = fs.readFileSync(ran)
rzki.sendMessage(from, {video:hah, mimetype:'video/mp4'}, {quoted:m})
fs.unlinkSync(ran)
})
} else {
m.reply("Kirim video/audio")
}
}
break
case prefix+'cutt':
case prefix+'cutaud':
case prefix+'cutaudio':
addCountCmd('#cutaudio', m.sender, _cmd)
if (!args[0] && !args[1]) return reply('contoh '+prefix + command+' 1 5')
reply(mess.wait)
let mediahhh = await rzki.downloadAndSaveMediaMessage(quoted)
let ranhh = getRandom('.mp3')
exec(`ffmpeg -i ${mediahhh} -ss ${args[0]} -to ${args[1]} ${ranhh}`, (err, stderr, stdout) => {
fs.unlinkSync(mediahhh)
if (err) return m.reply(err)
let buff = fs.readFileSync(ranhh)
rzki.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg', fileName: 'cut.mp3', ptt: true}, { quoted : m })
fs.unlinkSync(ranhh)
})
break
case prefix+'bass': case prefix+'blown': case prefix+'deep': case prefix+'earrape': case prefix+'fast': case prefix+'fat': case prefix+'nightcore': case prefix+'reverse': case prefix+'robot': case prefix+'slow': case prefix+'smooth': case prefix+'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await rzki.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                rzki.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command.slice(1)}*`)
                } catch (e) {
                m.reply(e)
                }
                break
case prefix+'bass2': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example: ${prefix + command.slice(1)} 10`)
var req = args.join(' ')
media = await rzki.downloadAndSaveMediaMessage(quoted, "bass")
if (isQuotedAudio) {
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -af equalizer=f=${req}:width_type=o:width=2:g=20 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
hah = fs.readFileSync(ran)
rzki.sendMessage(from, {audio:hah, mimetype: 'audio/mp4', ptt:true}, {quoted: m})
fs.unlinkSync(ran)
})
} else if (isQuotedVideo) {
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -af equalizer=f=${req}:width_type=o:width=2:g=20 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
hah = fs.readFileSync(ran)
rzki.sendMessage(from, {video:hah, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(ran)
})
} else {
m.reply("Kirim video/audio")
}
}
break
case prefix+'nulis': {
if (isBan) return m.reply(mess.ban)
if (args.length < 1) return m.reply(`Example :\n${prefix}nulis RZK|91|#ff020a|Manusia terganteng adalah salman alfarizi`)
const nls = args.join(" ")
const nams = "Nama : " + nls.split("|")[0];
const kels = "Kelas : " + nls.split("|")[1];
const menlise = nls.split("|")[3];
const codewarn = nls.split("|")[2];
await m.reply('Sedang menulis')
const jangkale = menlise.replace(/(\S+\s*){1,10}/g, '$&\n')
const jangbare = jangkale.split('\n').slice(0, 30).join('\n')
const jangnam = nams.replace(/(\S+\s*){1,10}/g, '$&\n')
const jangkel = kels.replace(/(\S+\s*){1,10}/g, '$&\n')
if (kels.length > 12) return m.reply("Jumlah teks kelas maximal 4")
if (nams.length > 34) return m.reply("Jumlah teks nama maximal 27")
if (codewarn.length > 7) return m.reply("Jumlah teks warna maximal 7")
console.log('「 MENULIS 」Sedang dalam prosses')
spawn('convert', [
'./media/image/magernulis.jpg',
'-fill',
codewarn,
'-font',
'./media/font/nulis.ttf',
'-size',
'1024x784',
'-pointsize',
'20',
'-interline-spacing',
'1',
'-annotate',
'+806+78',
janghar,
'-size',
'1024x784',
'-pointsize',
'18',
'-interline-spacing',
'1',
'-annotate',
'+806+102',
jangwak,
'-size',
'1024x784',
'-pointsize',
'21',
'-interline-spacing',
'1',
'-annotate',
'+285+90',
jangnam,
'-size',
'1024x784',
'-pointsize',
'21',
'-interline-spacing',
'1',
'-annotate',
'+285+110',
jangkel,
'-size',
'1024x784',
'-pointsize',
'20',
'-interline-spacing',
'-7.5',
'-annotate',
'+344+146',
jangbare,
'./storage/hasilnulis.jpg'
])
.on('error', () => m.reply('Error') )
.on('exit', () => {
rzki.sendMessage(from, {image:fs.readFileSync('./storage/hasilnulis.jpg'), caption:'Succes'}, {quoted:m}).catch(() => m.reply('```「 GAGAL 」Terjadi kesalahan dalam mengirim file```'))
})
exec(`npm i marker`)
}
break
case prefix+'kalkulator': case prefix+'kal': {
if (isBan) return m.reply(mess.ban)
if (args.length < 1) return m.reply(`*Example :*\n${prefix}kalkulator 2 * 5\n\n*List Bilangan :*\n•> Kali : *\n•> Bagi : /\n•> Tambah : +\n•> Kurang : -`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
m.reply('Error')
} else {
m.reply(`\`\`\`「 Kalkulator 」\`\`\`\n\n*•> Hitung :* ${qsd}\n*•> Hasil :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break
//anonymous
case prefix+'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: '.start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                rzki.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await rzki.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, rzki.user.name, m)
            }
			break
            case prefix+'keluar': case prefix+'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: '.start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await rzki.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await rzki.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case prefix+'mulai': case prefix+'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: '.keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await rzki.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, rzki.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: '.next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: '.keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await rzki.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, rzki.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await rzki.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, rzki.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: '.keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await rzki.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, rzki.user.name, m)
                }
                break
            }
            case prefix+'next': case prefix+'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: '.start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await rzki.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await rzki.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: '.next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: '.keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await rzki.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, rzki.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await rzki.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, rzki.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: '.keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await rzki.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, rzki.user.name, m)
                }
                break
            }
//bates
case prefix+'ping':{
let timestamp = speed()
let latensi = speed() - timestamp
reply(`_*Speed*_ : ${latensi.toFixed(4)}`)
}
break
case prefix+'stats': case prefix+'status':{
let timestamp = speed()
let latensi = speed() - timestamp
const sesionsize = fs.statSync('./rzk.json')
const sizecyy = sesionsize.size
const sizecuy= formatd(sizecyy)
let cekdrive = require("node-os-utils")
let cekdr = await cekdrive.drive.info()
statik = `*STATISTIC RZK BOTZ*

*Speed :* ${latensi.toFixed(4)} s
*Runtime :* ${runtime(process.uptime())}
*Runtime Os :* ${runtime(os.uptime())}
*Total Chat :* ${store.chats.all().map(v => v.id).length}
*Private Chat :* ${store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v).length}
*Group Chat :* ${store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id).length}

*Download :* ${cBandwidth.download}
*Upload :* ${cBandwidth.upload}
*Total Storage :* ${cekdr.totalGb} GB
*Used :* ${cekdr.usedPercentage} GB
*Free :* ${cekdr.freePercentage} GB
*Session Size :* ${sizecuy}`
faketroli(statik)
}
break
case prefix+'public2': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
rzki.public = true
m.reply('Sukse Change To Public Usage')
}
break
case prefix+'self2': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return m.reply(mess.owner)
rzki.public = false
m.reply('Sukses Change To Self Usage')
}
break
case prefix+'botstatus': case prefix+'statusbot': {
if (isBan) return m.reply(mess.ban)
const sesionsize = fs.statSync('./rzk.json')
const sizecyy = sesionsize.size
const sizecuy= formatd(sizecyy)
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\n_*Runtime :*_ ${runtime(process.uptime())}\n_*Runtime Os :*_ ${runtime(os.uptime())}\n_*Session Size :*_ ${sizecuy}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
fakey(respon)
}
addCountCmd('#statusbot', sender, _cmd)
break
case prefix+'toimage': case prefix+'toimg': {
if (q.includes('-help')) return m.reply(examplyme) 
if (isBan) return m.reply(mess.ban)
if (!m.quoted) return m.reply('Reply Image')
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (mess.limitH)
if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command.slice(1)}*`)
reply(mess.wait)
let media = await rzki.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) m.reply(err)
let buffer = fs.readFileSync(ran)
rzki.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
limitAdd(sender, limit)
addCountCmd('#toimg', sender, _cmd)
break
case prefix+'tomp4': case prefix+'tovideo': {
if (isBan) return m.reply(mess.ban)
if (!m.quoted) return m.reply('Reply Image')
if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command.slice(1)}*`)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (mess.limitH)
reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await rzki.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await rzki.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
limitAdd(sender, limit)
break
case prefix+'toaud': case prefix+'toaudio': {
if (isBan) return m.reply(mess.ban)
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command.slice(1)}`)
if (!m.quoted) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command.slice(1)}`)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (mess.limitH)
reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
rzki.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
limitAdd(sender, limit)
break
case prefix+'tomp3': {
if (isBan) return m.reply(mess.ban)
if (/document/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command.slice(1)}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command.slice(1)}`)
if (!m.quoted) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command.slice(1)}`)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (mess.limitH)
reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
rzki.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${rzki.user.name} (${m.id}).mp3`}, { quoted : m })
}
limitAdd(sender, limit)
break
case prefix+'tovn': case prefix+'toptt': {
if (isBan) return m.reply(mess.ban)
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command.slice(1)}`)
if (!m.quoted) return m.reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command.slice(1)}`)
reply(mess.wait)
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
rzki.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
case prefix+'togif': {
if (q.includes('-help')) return m.reply(examplyme) 
if (isBan) return m.reply(mess.ban)
if (!m.quoted) return m.reply('Reply Image')
if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command.slice(1)}*`)
reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await rzki.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await rzki.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break
case prefix+'tourl': {
if (isBan) return m.reply(mess.ban)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (mess.limitH)
reply(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await rzki.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
limitAdd(sender, limit)
break
case prefix+'q': case prefix+'quoted': {
if (isBan) return m.reply(mess.ban)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (mess.limitH)
if (!m.quoted) return m.reply('Reply Pesannya!!')
let wokwol = await rzki.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
limitAdd(sender, limit)
break
case prefix+'getname': {
if (isBan) return m.reply(mess.ban)
if (qtod === "true") {
namenye = await rzki.getName(m.quoted.sender)
m.reply(namenye)
} else if (qtod === "false") {
rzki.sendMessage(from, {text:"Reply orangnya"}, {quoted:m})
}
}
break
case prefix+'getpic': {
if (isBan) return m.reply(mess.ban)
if (qtod === "true") {
try {
pporg = await rzki.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
rzki.sendMessage(m.chat, { image : { url : pporg }, caption:`Done` }, { quoted : m })
} else if (qtod === "false") {
try {
pporgs = await rzki.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
rzki.sendMessage(m.chat, { image : { url : pporgs }, caption:`Done` }, { quoted : m })
}
}
break
/*case prefix+'owner': case prefix+'creator': {
rzki.sendContact(m.chat, global.owner2, m)
}
break*/
case 'owner':
case 'creator':{
anj = generateWAMessageFromContent(from, {
"contactsArrayMessage": {            
"displayName": "‎99 kontak",            
"contacts": [              
{                
"displayName": "OWNER RZK BOTZ",                
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:; OWNER RZK;;;\nFN:Owner RZK BOTZ\nitem1.TEL;waid=6288226703423:+62 882-2670-3423\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-DESCRIPTION:Y\nX-WA-BIZ-NAME:F\nitem2.EMAIL;type=INTERNET:rzkganz@gmail.com\nitem2.X-ABLabel:Email\nitem3.ADR:;;Singapura\nitem3.X-ABLabel: \nitem4.URL:https://github.com/RzkGnz\nitem5.X-ABLabel:Owner RZK BOTZ\nEND:VCARD"             
},
{                
"displayName": "RZK BOTZ",                
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;MY BOTZ;;;\nFN:MY BOTZ\nitem1.TEL;waid=6285876275834:+62 858-7627-5834\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-DESCRIPTION:Y\nX-WA-BIZ-NAME:F\nitem2.EMAIL;type=INTERNET:rzkganz@gmail.com\nitem2.X-ABLabel:Email\nitem3.ADR:;;Singapura\nitem3.X-ABLabel: \nitem4.URL:https://github.com/RzkGnz\nitem5.X-ABLabel:RZK BOTZ\nEND:VCARD"             
}
]}   
}, {quoted: m })
rzki.relayMessage(from, anj.message, {messageId: anj.key.id })
}
break
case prefix+'translate': case prefix+'terjemahan': {
if (isBan) return m.reply(mess.ban)
reply(mess.wait)
if (!args.join(" ")) return m.reply("Textnya?")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=id&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
m.reply(`🌐Translate : ${Detek}\n📘Hasil : ${Infoo}`)
}
break
case prefix+'gimage': case prefix+'gig': {
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply("Mau cari gambar apa kak?")
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (mess.limitH)
reply(mess.wait)
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `.gimage ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `❏  *GOOGLE IMAGE*

🤠 Query : ${text}
🔗 Media Url : ${images}`,
footer: namabot2,
buttons: buttons,
headerType: 4
}
rzki.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
limitAdd(sender, limit)
break
case prefix+'detiknews': case prefix+'detik':{
  if (args.length < 1) return m.reply(from, 'Cari berita apa?', { quoted : m } )
  const aku_biji = await detikNews(args.join(' ')).catch(e => console.log("Undefined"))
  console.log(aku_biji)   
  let sections = []   
  for (let i = 0; i < aku_biji.length; i++) {
  const list = {title: `${aku_biji[i].Title}`,
  rows: [
	    {
	     title: `Result detik news ${i + 1}`, 
	     rowId: `#reply ${aku_biji[i].Link}`,
	     description: ``
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  rzki.sendMessage(
      from, 
      {
       text: "Cari berita di detik.com",
       footer: Options.info.botName,
       title: "[ DETIK NEWS SEARCH 🔎 ]",
       buttonText: "Click and see search results➡️",
       sections
      }, { quoted : m }
    )  
   }
  break
case prefix+'wiki':
if (args.length < 1) return m.reply(' Yang Mau Di Cari Apa? ')
const res2 = await wikiSearch(q).catch(e => {
return m.reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
const result2 = `*Judul :* ${res2[0].judul}\n*Wiki :* ${res2[0].wiki}`
rzki.sendMessage(from, { image : { url : res2[0].thumb }, caption : result2}) 
break
case prefix+'gempa':
const tres = await Gempa()
var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
console.log(Map)
const captt = `Waktu : ${Waktu}\nLintang : ${Lintang}\nBujur : ${Bujur}\nWilayah : ${Wilayah}`
rzki.sendMessage(from, { image : { url : Map }, caption : captt})
break
case prefix+'covidindo':
case prefix+'covid':
const c = await covid()
var { kasus, kematian, sembuh } = c[0]
rzki.sendMessage(from, {text : `Kasus : ${kasus}\n\nKematian : ${kematian}\n\nSembuh : ${sembuh}`}, m)
break
case prefix+'jadwaltv':
if (!q) return m.reply('Kirim perintah *#jadwaltv [channel]*')
m.reply(await jadwaltv(q))
break
case prefix+'cnn':
if (q.includes('--help')) return reply(examquery) 
var server = await cnn()
//console.log(server)
let cn = 'CNN NEWS'
for (let i = 0; i < server.length; i++) {
cn += `\n\nTitle : ${server[i].judul}\nLink : ${server[i].link}\nImage: ${server[i].thumb}`
}
rzki.sendMessage(from, {image : { url : server[10].thumb }, caption : cn}) 
break
case prefix+'google': {
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply(`Example: ${prefix + command.slice(1)} <query>\nUses : ${prefix + command.slice(1)} apa arti cinta`)
reply(mess.wait)
let google = require('google-it')
google({'query': args.join(" ")}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `*Title* : ${g.title}\n`
teks += `*Description* : ${g.snippet}\n`
teks += `*Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break
case prefix+'pinterest': case prefix+'image': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply("Mau cari gambar apa kak?")
reply(mess.wait)
try {
hx.pinterest(args.join(" ")).then(async(res) => {
imgnyee = res[Math.floor(Math.random() * res.length)]
let buttons = [
{buttonId: `.pinterest ${args.join(" ")}`, buttonText: {displayText: 'Get Again'}, type: 1}
]
let buttonMessage = {
image: { url: imgnyee },
caption:  'Title : ' + args.join(" ") + '\nMedia Url : '+imgnyee,
footer: namabot2,
buttons: buttons,
headerType: 4
}
rzki.sendMessage(m.chat, buttonMessage, { quoted: m })
}).catch(_ => _)
} catch {
m.reply("Error")
}
}
addCountCmd('#pinterest', sender, _cmd)
break
case prefix+'igstory': case prefix+'instagramstory': {
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply(`Example :\n${prefix + command.slice(1)} salman_alfarizi_15`)
reply(mess.wait)
try {
hx.igstory(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `❏  *INSTAGRAM STORY*\n\n › Username : ${resed.user.username ? resed.user.name : "undefined"}\n › Followers : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `.ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Pilih media dibawah untuk mendownload_`
let buttons = anu_list
let buttonMessage = {
/*image:log0,
jpegThumbnail:thum,
caption: textbv,*/
text: textbv,
footer: namabot2,
buttons: buttons,
headerType: 4
}
rzki.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (err) {
m.reply(String(err))
}
}
break
/*case prefix+'ig': case prefix+'igdl': case prefix+'instagram': {
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply(`Example :\n${prefix + command.slice(1)} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
reply(mess.wait)
try {
hx.igdl(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `❏  *INSTAGRAM DOWNLOADER*\n\n › Username : ${resed.user.username ? resed.user.name : "undefined"}\n › Followers : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `.ig2 ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Pilih media dibawah untuk mendownload_`
let buttons = anu_list
let buttonMessage = {
/*image:log0,
jpegThumbnail:thum,
caption: textbv,
text: textbv,
footer: namabot2,
buttons: buttons,
headerType: 4
}
rzki.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (err) {
m.reply(String(err))
}
}
addCountCmd('#ig', sender, _cmd)
break*/
case prefix+'igdl': case prefix+'instagram': case prefix+'ig':
			    if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (mess.limitH)
				if (args2.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args2[1])) return reply('Link Invalid')
			    if (!args2[1].includes('instagram.com')) return reply('Link Invalid')
			    reply(mess.wait)
			    scraper.instagram(args2[1]).then( data => {
			     for (let i of data.medias) {
				  if (i.fileType === "mp4") {
				   rzki.sendMessage(from, { video: { url: i.url }},{quoted: m})
				  } else if (i.fileType === "jpg") {
				   rzki.sendMessage(from, { image: { url: i.url }},{quoted: m})
			      }
			     }
				 limitAdd(sender, limit)
			    }) 
			    break
case prefix+'ig2': {
if (args[0] === "mp4") {
rzki.sendMessage(from, {video:{url:args[1]}, caption:'Done!', mimetype:'video/mp4'}, {quoted:m})
} else if (args[0] === "jpg") {
rzki.sendMessage(from, {image:{url:args[1]}, caption:'Done!'}, {quoted:m})
} else {
m.reply(" Error! ")
}
}
break
case prefix+'mp4' : {
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply("Linknya mana kak?")
reply(mess.wait)
try {
rzki.sendMessage(from, {video:{url:args[0]}, caption:"Succes"
}, {quoted:m})
} catch {
m.reply("Linknya Error")
}
}
break
case prefix+'jpeg': {
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply("Linknya mana kak?")
reply(mess.wait)
try {
rzki.sendMessage(from, {image:{url:args[0]}, caption:"Succes"
}, {quoted:m})
} catch {
m.reply("Linknya Error")
}
}
break
case prefix+'twitter': case prefix+'twdl': case prefix+'twmp4': {
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply(`Example :\n${prefix + command.slice(1)} https://twitter.com/cinema21/status/1517754155644821504?t=rUnbyqwh4vAE1QXMXlsVeQ&s=19`)
reply(mess.wait)
try {
let lotwit = await aiovideodl(args[0])
teks = `❏  *TWITTER DOWNLOADER*

 › Caption : ${lotwit.title ? lotwit.title : "undefined"}
 › Type : ${lotwit.medias[1].extension}
 › Size : ${lotwit.medias[1].formattedSize}
 › Link : ${lotwit.medias[1].url}

_Pilih kualitas video dibawah dengan cara mengklik tombolnya_`
let buttons = [
{buttonId: `.twddl ${lotwit.medias[0].url}`, buttonText: {displayText: `Quality ${lotwit.medias[0].quality}`}, type: 1},
{buttonId: `.twddl ${lotwit.medias[2].url}`, buttonText: {displayText: `Quality ${lotwit.medias[2].quality}`}, type: 1}
]
let buttonMessage = {
video: {url:lotwit.medias[1].url},
caption: teks,
footer: namabot2,
buttons: buttons,
headerType: 4
}
rzki.sendMessage(from, buttonMessage, {quoted:m})
} catch {
m.reply(" Link Error!")
}
}
break
case prefix+'twddl': {
if (isBan) return m.reply(mess.ban)
reply(mess.wait)
let buttons = [
{buttonId: `.menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
video: {url:args[0]},
caption: "Done!",
footer: namabot2,
buttons: buttons,
headerType: 4
}
rzki.sendMessage(from, buttonMessage, {quoted:m})
}
break
case prefix+'facebook': case prefix+'fbdl': case prefix+'fbmp4': case prefix+'fb': {
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply(`Example :\n${prefix + command.slice(1)} https://fb.watch/cAX2dep-BZ/`)
reply(mess.wait)
try {
let resd = await scraper.facebook(args[0])
teks = `*F A C E B O O K - D O W N L O A D E R*

*𝚂𝚒𝚖𝚙𝚕𝚎 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝙱𝙾𝚃 [ 𝙼𝙳 ]*`
let buttons = [
{buttonId: `.fbddl ${resd.hd}`, buttonText: {displayText: 'QualityHD'}, type: 1}
]
let buttonMessage = {
video: {url:resd.sd},
caption: teks,
footer: namabot2,
buttons: buttons,
headerType: 4
}
rzki.sendMessage(from, buttonMessage, {quoted:m})
} catch {
m.reply("Link invalid!")
}
}
break
case prefix+'fbddl': {
if (isBan) return m.reply(mess.ban)
reply(mess.wait)
let buttons = [
{buttonId: `.menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
video: {url:args[0]},
caption: "Done!",
footer: namabot2,
buttons: buttons,
headerType: 4
}
rzki.sendMessage(from, buttonMessage, {quoted:m})
}
break
case prefix+'soundcloud':{
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply(mess.linkm)
try {
scraper.soundcloud(args[0]).then(async(res) => {
textdl = `❏  *SOUNDCLOUD - DL*

   › Title : ${res.judul}
   › Download Count : ${res.download_count}
   › Url : ${args[0]}`
const gktau = await reSize({url:res.thumb}, 200, 200)
rzki.send5Loc(m.chat, textdl, namabot, gktau)
rzki.sendMessage(m.chat, { audio: { url: res.link }, mimetype: 'audio/mpeg', fileName: `${res.judul}.mp3` }, { quoted: m })
}).catch(_ => _)
} catch {
m.reply("Linknya Error!")
}
}
break
case prefix+'ttdl': case prefix+'tiktok': case prefix+'ttmp4': case prefix+'ttmp3': case prefix+'tiktoknowm': {
if (q.includes('-help')) return m.reply(examquery) 
if (isBan) return m.reply(mess.ban)
if (!isUrl(args[0])) return m.reply(`Example :\n${prefix + command.slice(1)} <url>\nUses :\n${prefix + command.slice(1)} https://vt.tiktok.com/ZSdDo97dC/`)
reply(mess.wait)
//let res = await aiovideodl(args[0])
//let res = await TiktokDownloader(args[0])
let res = await scraper.tiktok(args[0])

if (isUrl(args[0])) {
texttk = `*T I K T O K - D O W N L O A D E R*

*CAPTION* : ${res.title}

*𝚂𝚒𝚖𝚙𝚕𝚎 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝙱𝙾𝚃 [ 𝙼𝙳 ]*`
let buttons = [
{buttonId: `.ttvd ${args[0]}`, buttonText: {displayText: 'WATERMARK'}, type: 1},
{buttonId: `.ttad ${args[0]}`, buttonText: {displayText: 'AUDIO'}, type: 1}
]
let buttonMessage = {
video: {url:res.media[1].url},
caption: texttk,
footer: namabot2,
buttons: buttons,
headerType: 4
}
rzki.sendMessage(from, buttonMessage, {quoted:m})
} else {
m.reply("Link Error!")
}
}
addCountCmd('#tiktok', sender, _cmd)
break
case prefix+'ttad': {
if (isBan) return m.reply(mess.ban)
reply(mess.wait)
//let res = await aiovideodl(args[0])
//let res = await TiktokDownloader(args[0])
let res = await scraper.tiktok(args[0])
rzki.sendMessage(from, {audio:{url:res.media[2].url}, mimetype:"audio/mp4", contextInfo:{externalAdReply:{
title:"RZK MD - Tiktok Downloader",
body:res.title,
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}}, {quoted:m})
}
break
case prefix+'ttvd': case prefix+'tiktokwm': {
if (isBan) return m.reply(mess.ban)
if (!isUrl(args[0])) return m.reply(`Example :\n${prefix + command.slice(1)} <url>\nUses :\n${prefix + command.slice(1)} https://vt.tiktok.com/ZSdDo97dC/`)
reply(mess.wait)
//let res = await aiovideodl(args[0])
//let res = await TiktokDownloader(args[0])
let res = await scraper.tiktok(args[0])
texttk = `*T I K T O K - W A T E R M A R K*

*CAPTION* : ${res.title}

*𝚂𝚒𝚖𝚙𝚕𝚎 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝙱𝙾𝚃 [ 𝙼𝙳 ]*`
let buttons = [
{buttonId: `.tiktoknowm ${args[0]}`, buttonText: {displayText: 'NO WATERMARK'}, type: 1},
{buttonId: `.ttad ${args[0]}`, buttonText: {displayText: 'AUDIO'}, type: 1}
]
let buttonMessage = {
video: {url:res.media[0].url},
caption: texttk,
footer: namabot2,
buttons: buttons,
headerType: 4
}
rzki.sendMessage(from, buttonMessage, {quoted:m})
}
break
case prefix+'play3': case prefix+'ytplay3': {
if (q.includes('-help')) return m.reply(examquery) 
                if (!text) m.reply(`Example : ${prefix + command.slice(1)} bts boy with luv`)
                if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (mess.limitH)
                reply(mess.wait)
                let url = await yts(text)
                let anu = url.videos[0]
                /*let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]*/
                    ngen = `❏  *YT - PLAY*
                    
   ›  *Title :* ${anu.title}
   ›  *Ext :* Search
   ›  *ID :* ${anu.videoId}
   ›  *Duration :* ${anu.timestamp}
   ›  *Viewers :* ${anu.views}
   ›  *Uploaded :* ${anu.ago}
   ›  *Author :* ${anu.author.name}
   ›  *Channel :* ${anu.author.url}
   
 *𝚂𝚒𝚖𝚙𝚕𝚎 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝙱𝙾𝚃 [ 𝙼𝙳 ]*`
                  let buttons = [{
                                urlButton: {
                                    displayText: 'Video Source',
                                    url: `${anu.url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🎵Audio🎵',
                                    id: `.ytmp3 ${anu.url}`
                                    }
                                },{quickReplyButton: {
                                    displayText: '🎥VIdeo🎥',
                                    id: `.ytmp4 ${anu.url}`
                                }
                            }]
                  const gktau = await reSize({url:anu.thumbnail}, 200, 200)
rzki.send5Loc(m.chat, ngen, `Playing To ${text}`, gktau, buttons)
            }
            limitAdd(sender, limit)
            addCountCmd('#play', sender, _cmd)
            break
case prefix+'play': case prefix+'musik': case prefix+'ytplay': {
	    if (q.includes('-help')) return m.reply(examlink) 
                let { yta } = require('./lib/y2mate')
                                if (!text) m.reply(`Example : ${prefix + command.slice(1)} bts boy with luv`)
                if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (mess.limitH)
                let url = await yts(text)
                let anu = url.videos[0]
                let media = await yta(anu.url, '128kbps')
                reply(mess.wait)
                if (media.filesize >= 50000) return reply('Audio size is too big '+util.format(media))
                rzki.sendImage(m.chat, media.thumb, `❏  *PLAY - MUSIC*\n\n   ›  *Title :* ${media.title}\n   ›  *File Size :* ${media.filesizeF}\n   ›  *Url :* ${anu.url}\n   ›  *Ext :* MP3\n   ›  *Resolution :* 128kbps\n\n*𝚂𝚒𝚖𝚙𝚕𝚎 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝙱𝙾𝚃 [ 𝙼𝙳 ]*`, m)
                //rzki.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                rzki.sendMessage(from, { document: { url: media.dl_link }, fileName: `${media.title}.mp3`, mimetype: 'audio/mp3' }, { quoted: m })
            }
            limitAdd(sender, limit)
            addCountCmd('#play', sender, _cmd)
            break
case prefix+'video': {
            if (q.includes('-help')) return m.reply(examlink) 
                let { ytv } = require('./lib/y2mate')
                if (!text) m.reply(`Example : ${prefix + command.slice(1)} bts boy with luv`)
                if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (mess.limitH)
                let url = await yts(text)
                let anu = url.videos[0]
                let media = await ytv(anu.url, '360p')
                reply(mess.wait)
                if (media.filesize >= 100000) return reply('Video size is too big '+util.format(media))
                rzki.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `❏  *PLAY - VIDEO*\n\n   ›  *Title :* ${media.title}\n   ›  *File Size :* ${media.filesizeF}\n   ›  *Url :* ${anu.url}\n   ›  *Ext :* MP4\n   ›  *Resololution :* 360p\n\n*𝚂𝚒𝚖𝚙𝚕𝚎 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝙱𝙾𝚃 [ 𝙼𝙳 ]*` }, { quoted: m })
            }
            limitAdd(sender, limit)
            addCountCmd('#video', sender, _cmd)
            break
case prefix+'videohd': {
            if (q.includes('-help')) return m.reply(examlink) 
                let { ytv } = require('./lib/y2mate')
                if (!text) m.reply(`Example : ${prefix + command.slice(1)} bts boy with luv`)
                if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (mess.limitH)
                let url = await yts(text)
                let anu = url.videos[0]
                let media = await ytv(anu.url, '720p')
                reply(mess.wait)
                if (media.filesize >= 150000) return reply('Video size is too big '+util.format(media))
                rzki.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `❏  *PLAY - VIDEO*\n\n   ›  *Title :* ${media.title}\n   ›  *File Size :* ${media.filesizeF}\n   ›  *Url :* ${anu.url}\n   ›  *Ext :* MP4\n   ›  *Resololution :* 720p\n\n*𝚂𝚒𝚖𝚙𝚕𝚎 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝙱𝙾𝚃 [ 𝙼𝙳 ]*` }, { quoted: m })
            }
            limitAdd(sender, limit)
            addCountCmd('#videohd', sender, _cmd)
            break
	    case prefix+'ytmp3': case prefix+'ytaudio': {
	    if (q.includes('-help')) return m.reply(examlink) 
                let { yta } = require('./lib/y2mate')
                if (!text) reply(`Example : ${prefix + command.slice(1)} https://youtube.com/watch?v=PtFMh6Tccag%27 320kbps`)
                if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (mess.limitH)
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                reply(mess.wait)
                if (media.filesize >= 50000) return reply('Audio size is too big '+util.format(media))
                rzki.sendImage(m.chat, media.thumb, `❏  *YT - MP3*\n\n   ›  *Title :* ${media.title}\n   ›  *File Size :* ${media.filesizeF}\n   ›  *Url :* ${isUrl(text)}\n   ›  *Ext :* MP3\n   ›  *Resolution :* ${args[1] || '128kbps'}\n\n*𝚂𝚒𝚖𝚙𝚕𝚎 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝙱𝙾𝚃 [ 𝙼𝙳 ]*`, m)
                //rzki.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                rzki.sendMessage(from, { document: { url: media.dl_link }, fileName: `${media.title}.mp3`, mimetype: 'audio/mp3' }, { quoted: m })
            }
            limitAdd(sender, limit)
            addCountCmd('#ytmp3', sender, _cmd)
            break
            case prefix+'ytmp4': case prefix+'ytvideo': {
            if (q.includes('-help')) return m.reply(examlink) 
                let { ytv } = require('./lib/y2mate')
                if (!text) reply(`Example : ${prefix + command.slice(1)} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (mess.limitH)
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                reply(mess.wait)
                if (media.filesize >= 100000) return reply('Video size is too big '+util.format(media))
                rzki.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `❏  *YT - MP4*\n\n   ›  *Title :* ${media.title}\n   ›  *File Size :* ${media.filesizeF}\n   ›  *Url :* ${isUrl(text)}\n   ›  *Ext :* MP4\n   ›  *Resololution :* ${args[1] || '360p'}\n\n*𝚂𝚒𝚖𝚙𝚕𝚎 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝙱𝙾𝚃 [ 𝙼𝙳 ]*` }, { quoted: m })
            }
            limitAdd(sender, limit)
            addCountCmd('#ytmp4', sender, _cmd)
            break
case prefix+'play2': case prefix+'ytplay2': {
if (q.includes('-help')) return m.reply(examquery) 
if (isBan) return m.reply(mess.ban)
reply(mess.wait)
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let ytvc = await hx.youtube(anu.url)
let buttons = [
{buttonId: `.ytvd ${ytvc.link}`, buttonText: {displayText: '► Video'}, type: 1},
{buttonId: `.ytad ${ytvc.mp3}`, buttonText: {displayText: '♫ Audio'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `❏  *YOUTUBE PLAY*

   › Title : ${anu.title}
   › Ext : Search
   › ID : ${anu.videoId}
   › Duration : ${anu.timestamp}
   › Viewers : ${anu.views}
   › Upload At : ${anu.ago}
   › Author : ${anu.author.name}
   › Channel : ${anu.author.url}
   › Url : ${anu.url}`,
footer: namabot2,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: anu.title,
body: namabot,
thumbnail: log0,
mediaType:2,
mediaUrl: anu.url,
sourceUrl: anu.url
}}
}
rzki.sendMessage(m.chat, buttonMessage, { quoted: m })
}
addCountCmd('#play', sender, _cmd)
break
case prefix+'ytmp42': case prefix+'ytmp32': case prefix+'ytdl': case prefix+'youtube':{
if (q.includes('-help')) return m.reply(examlink) 
if (isBan) return m.reply(mess.ban)
if (!args[0]) return m.reply(mess.linkm)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (mess.limitH)
reply(mess.wait)
try {
hx.youtube(args[0]).then(async(res) => {
textyt = `❏  *YOUTUBE DOWNLOAD*

   ›  *Title :* ${res.title}
   ›  *Size :* ${res.size}
   ›  *Quality :* ${res.quality} / 128kbps
   ›  *Url :* ${args[0]}

*𝚂𝚒𝚖𝚙𝚕𝚎 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝙱𝙾𝚃 [ 𝙼𝙳 ]*`
let buttons = [{
                                urlButton: {
                                    displayText: 'Video Source',
                                    url: `${args[0]}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🎵Audio🎵',
                                    id: `.ytmp3 ${args[0]}`
                                    }
                                },{quickReplyButton: {
                                    displayText: '🎥VIdeo🎥',
                                    id: `.ytmp4 ${args[0]}`
                                }
                            }]
const gktau = await reSize({url:res.thumb}, 200, 200)
rzki.send5Loc(m.chat, textyt, ``, gktau, buttons)
}).catch(_ => _)
} catch {
m.reply("Linknya Error!")
}
}
limitAdd(sender, limit)
addCountCmd('#ytmp3', sender, _cmd)
break
case prefix+'gitclone':
            let regx = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
            if (!q) return fakey('Linknya?')
            if (!regx.test(args[0])) return fakey('Linknya salah')
            reply(mess.wait)
            let [, usr, repo] = args[0].match(regx) || []
            let repos = repo.replace(/.git$/, '')
            let hasdl = `https://api.github.com/repos/${usr}/${repos}/zipball`
            let namafile = (await fetch(hasdl, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[0]
            rzki.sendMessage(from, { document: { url: hasdl }, mimetype: 'application/zip', fileName: namafile }, { quoted: m })
            break
case prefix+'couple': {
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                rzki.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                rzki.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
case prefix+'webtonsearch': case prefix+'webtoon':
                if (!text) return m.reply('Yang mau di cari apa?')
                await reply(mess.wait)
                xfarr.Webtoons(q).then(async data => {
                    let txt = `*------「 WEBTOONS-SEARCH 」------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*👍🏻 Like :* ${i.like}\n`
                        txt += `*🤴🏻 Creator :* ${i.creator}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n ----------------------------------------------------------\n`
                    }
                    await m.reply(txt)
                })
                .catch((err) => {
                    m.reply(mess.error)
                })
            break
case prefix+'neko': case prefix+'waifu': case prefix+'shinobu': case prefix+'megumin': case prefix+'bully': case prefix+'cuddle': case prefix+'cry': case prefix+'hug': case prefix+'awoo': case prefix+'lick': case prefix+'smug': case prefix+'bonk': case prefix+'yeet': case prefix+'blush': case prefix+'smile': case prefix+'wave': case prefix+'highfive': case prefix+'handhold': case prefix+'nom': case prefix+'bite': case prefix+'glomp': case prefix+'slap': case prefix+'kill': case prefix+'happy': case prefix+'wink': case prefix+'poke': case prefix+'dance': case prefix+'cringe': {
 let za = await fetchJson(`https:/\/\waifu.pics/api/sfw/${command.slice(1)}`)
      rzki.sendMessage(from, {image:{url:za.url}, caption:"WIBU YA BANG!"}, {quoted:m})
  }
 break
case prefix+'ytvd':{
if (isBan) return m.reply(mess.ban)
reply(mess.wait)
rzki.sendMessage(from, {video:{url:args[0]}, mimetype:"video/mp4", caption:"Success", contextInfo:{externalAdReply:{
title:"By © RZK BOTZ",
body:"© RZK MD - YouTube Downloader",
thumbnail: thumrand,
mediaType:2,
mediaUrl: "https://www.instagram.com/p/CcjYM8usZWd/?igshid=YmMyMTA2M2Y=",
sourceUrl: "https://www.instagram.com/p/CcjYM8usZWd/?igshid=YmMyMTA2M2Y="
}}}, {quoted:m})
}
break
case prefix+'ytad':{
if (isBan) return m.reply(mess.ban)
reply(mess.wait)
rzki.sendMessage(from, {audio:{url:args[0]}, mimetype:"audio/mp4", contextInfo:{externalAdReply:{
title:"By © RZK BOTZ",
body:"© RZK MD - YouTube Downloader",
thumbnail: thumrand,
mediaType:2,
mediaUrl: "https://www.instagram.com/p/CcjYM8usZWd/?igshid=YmMyMTA2M2Y=",
sourceUrl: "https://www.instagram.com/p/CcjYM8usZWd/?igshid=YmMyMTA2M2Y="
}}}, {quoted:m})
}
break
case prefix+'take': case prefix+'swm': case prefix+'stickerwm': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example :\n${prefix + command.slice(1) } RZK MD | Pack`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
rzki.downloadAndSaveMediaMessage(quoted, "gifee")
rzki.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await rzki.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await rzki.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command.slice(1)}\nDurasi Video 1-9 Detik`)
}
}
break
case prefix+'smeme': case prefix+'smm': {
if (q.includes('-help')) return m.reply(examplyme) 
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply("Masukan Textnya!")
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (mess.limitH)
if (/image/.test(mime)) {
var media = await rzki.downloadAndSaveMediaMessage(quoted, "smeme")
imgbbUploader('fb39bda7f29404349f9ea07e48cecf4d', media)
.then(async (data) => {
var bgsd = args.join(" ")
var urls = data.display_url
let meme = `https://api.memegen.link/images/custom/ /${bgsd}.png?background=${urls}`
rzki.sendImageAsSticker(m.chat, meme, m, { packname:global.packname, author: global.packname2 })
})
.catch(err => {
throw err
})
} else {
m.reply("Kirim foto dengan caption smeme")
}
}
limitAdd(sender, limit)
addCountCmd('#smeme', sender, _cmd)
break
/*case prefix+'ttp': case prefix+'attp': {
if (isBan) return m.reply(mess.ban)
if (!args.join(" ")) return m.reply(`Example : \n- ${prefix + command.slice(1)} text\n- ${prefix}ttp text|blue`)
if (command === "ttp") {
var text2png = require('text2png');
mclor = text.split("|")[1] ? text.split("|")[1] : "white"
fs.writeFileSync('./storage/ttp.png', text2png(text.split("|")[0] ? text.split("|")[0] : text, {font:" 100px Lobster", lineSpacing: 10, padding: 20, color: mclor, strokeWidth: 3, strokeColor: mclor}))
rzki.sendImageAsSticker(m.chat, fs.readFileSync("./storage/ttp.png"), m, { packname: global.packname, author: global.packname2 })
await fs.unlinkSync("./storage/ttp.png")
} else if (command === "attp") {
rzki.sendMedia(m.chat, `https://api.xteam.xyz/attp?file&text=${text}`, global.packname, global.packname2, m, {asSticker: true})
} else {
m.reply("Error")
}
}
break*/
case prefix+'stiker':  case prefix+'sticker': case prefix+'s': {
if (q.includes('-help')) return m.reply(examplyme) 
if (isBan) return m.reply(mess.ban)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (mess.limitH)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await rzki.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.packname2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await rzki.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.packname2 })
await fs.unlinkSync(encmedia)
} else {
m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command.slice(1)}\nDurasi Video 1-9 Detik`)
}
}
addCountCmd('#sticker', sender, _cmd)
limitAdd(sender, limit)
break
case prefix+'mediafire':
if (!isPremium) return reply(mess.prem)
if (args.length < 1) return reply('Link Nya Mana?')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Link Invalid')
reply(mess.wait)
rescun = await mediafiredl(args[0])
result = `❒「MediaFire Download」
├ Nama : ${rescun[0].nama}
├ Ukuran : ${rescun[0].size}
└ Link : ${rescun[0].link}`
reply(result)
rzki.sendMessage(from, {document:{url:`${rescun[0].link}`}, mimetype: `application/${rescun[0].mime}`, fileName: `${rescun[0].nama}`}, {quoted:m}) 
//rzki.sendMessage(from, {url: `${rescun[0].link}` }, document, { mimetype: `${rescun[0].mime}`, filename:`${rescun[0].nama}`})
break
case prefix+'emojimix': {
	        if (!text) reply(`Example : ${prefix + command.slice(1)} 😅+🤔`)
	        if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (mess.limitH)
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await rzki.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    limitAdd(sender, limit)
	    addCountCmd('#emojimix', sender, _cmd)
	    break
case prefix+'emojimix2': {
if (isBan) return reply(mess.ban)
if (!args.join(" ")) return reply(`Example : ${command} 😅`)
if (isLimit(sender, isPremium, isCreator, limitCount, limit)) return reply (mess.limitH)
try {
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await rzki.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
} catch {
m.reply("Tidak ditemukan!")
}
}
limitAdd(sender, limit)
addCountCmd('#emojimix2', sender, _cmd)
break
// Eval Ada Disini
default:
if (budy.startsWith('=>')) {
if (!isCreator) return //m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
fakey(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
fakey(String(e))
}
}
if (budy.startsWith('>')) {
if (!isCreator) return //m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await fakey(evaled)
} catch (err) {
await fakey(String(err))
}
}

if (budy.startsWith('<')) {
if (!isCreator) return//reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}

if (budy.startsWith('x')){
if (!isCreator) return
try {
return reply(JSON.stringify(eval(budy.slice(2)), null, '\t'))
} catch(e) {
reply(`${e}`)
}
}

if (body.startsWith('>>')) {
try {
if (!isCreator) return//reply(mess.owner)
if (!q) return reply(`Promise { Hidup }`)
reply(util.format(eval(`(async () => { ${q} })()`)))
} catch(err) {
reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return m.reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return fakey(String(err)) 
if (stdout) return fakey(stdout)
})
}
// Anti Tag ( RZK MD )
const listTag = ["6288226703423@s.whatsapp.net"]
const partiNum = (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.contextInfo.participant : ''
// Antitag Via Reply ( RZK MD )
if (listTag.includes(partiNum)) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
sendNye = fs.readFileSync('media/sticker/jantag.webp')
rzki.sendReadReceipt(m.chat, m.sender, [m.key.id])
rzki.sendMessage(from, {sticker:sendNye, contextInfo:{forwardingScore: 800, isForwarded: true}}, {quoted:m})
}
// Antitag Via Tag ( RZK MD )
if (budy.includes("@6288226703423")) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
sendNye = fs.readFileSync('media/sticker/jantag.webp')
rzki.sendReadReceipt(m.chat, m.sender, [m.key.id])
rzki.sendMessage(from, {sticker:sendNye, contextInfo:{forwardingScore: 800, isForwarded: true}}, {quoted:m})
}
if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
if (!isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
rzki.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
} catch (err) {
rzki.sendMessage("6288226703423@s.whatsapp.net", util.format(err), {quoted:m})
console.log(err)
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})