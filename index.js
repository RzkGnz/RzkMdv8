/** 
 - Create By RZK 
 - Thanks Dika Ardnt
*/

require("./config.js")
const { default: rzkiConnect, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const { state, saveState } = useSingleFileAuthState(`./${sessionName}.json`)
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const _ = require('lodash')
const yargs = require('yargs/yargs')
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const PhoneNumber = require('awesome-phonenumber')
const CFonts = require('cfonts')
const { color } = require('./lib/color')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')

var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')

global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`src/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    stats: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()

// save database every 30seconds
if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)

async function startRZK() {
    CFonts.say(`RZK MD`, {
        font: '3D',
        align: 'left',
        gradient: ['red', 'magenta']
    })
console.log(color('=> Source code version:', 'yellow'), color('1.5.0', 'cyan'))
console.log(color('=> Bug? Error? Suggestion? Visit here:', 'yellow'), color('6288226703423'))
console.log(color(`rzk.json`), color(`BOT is now online!`, 'red'))
console.log(color('[DEV]', 'cyan'), color('Welcome back, Owner! Hope you are doing well~', 'magenta'))
    let { version, isLatest } = await fetchLatestBaileysVersion()
    const rzki = rzkiConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['RZK BOTZ','Safari','1.0.0'],
        auth: state,
        version
    })

store.bind(rzki.ev)

rzki.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!rzki.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(rzki, mek, store)
require("./rzki")(rzki, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})

//GRUP UPDATE
rzki.ev.on('groups.update', async pea => {
       //console.log(pea)
    // Get Profile Picture Group
       try {
       ppgc = await rzki.profilePictureUrl(pea[0].id, 'image')
       } catch {
       ppgc = 'https://telegra.ph/file/da3e53d41849f7e5bee79.jpg'
       }
       let wm_rzk = { url : ppgc }
       if (pea[0].announce == true) {
       rzki.send5ButImg(pea[0].id, `「 Group Settings Change 」\n\nGroup telah ditutup oleh admin, Sekarang hanya admin yang dapat mengirim pesan !`, `Group Settings Change Message`, wm_rzk, [])
       } else if(pea[0].announce == false) {
       rzki.send5ButImg(pea[0].id, `「 Group Settings Change 」\n\nGroup telah dibuka oleh admin, Sekarang peserta dapat mengirim pesan !`, `Group Settings Change Message`, wm_rzk, [])
       } else if (pea[0].restrict == true) {
       rzki.send5ButImg(pea[0].id, `「 Group Settings Change 」\n\nInfo group telah dibatasi, Sekarang hanya admin yang dapat mengedit info group !`, `Group Settings Change Message`, wm_rzk, [])
       } else if (pea[0].restrict == false) {
       rzki.send5ButImg(pea[0].id, `「 Group Settings Change 」\n\nInfo group telah dibuka, Sekarang peserta dapat mengedit info group !`, `Group Settings Change Message`, wm_rzk, [])
       } else {
       rzki.send5ButImg(pea[0].id, `「 Group Settings Change 」\n\nGroup Subject telah diganti menjadi *${pea[0].subject}*`, `Group Settings Change Message`, wm_rzk, [])
     }
    })

//Welcome
rzki.ev.on('group-participants.update', async (anu) => {
if (db.data.chats[anu.id].welcome) return
//if (!wlcm.includes(anu.id)) return
        console.log(anu)
        try {
            let metadata = await rzki.groupMetadata(anu.id)
            let participants = anu.participants
            let text_welcome = `𝙃𝙀𝙇𝙇𝙊 +tag 𝙒𝙀𝙇𝘾𝙊𝙈𝙀 𝙏𝙊 +grup`
            let text_left = `𝙎𝘼𝙔𝙊𝙉𝘼𝙍𝘼 +tag`
            let groupSet = global.db.data.chats[anu.id]
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await rzki.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://telegra.ph/file/da3e53d41849f7e5bee79.jpg'
                }

                // Get Profile Picture Group
                try {
                    ppgroup = await rzki.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://telegra.ph/file/da3e53d41849f7e5bee79.jpg'
                }

                if (anu.action == 'add') {
                if (gcrevoke.includes(anu.id)) {
                mbcs = `*[ AUTO REVOKE LINK GROUP ]*

Jika ingin mematikan fitur auto revoke link group ketik autorevoke off atau anda bisa mengklik tombol dibawah

Link group akan direset dalam 5 detik lagi!!`
                    let buttons = [
{buttonId: `autorevoke off`, buttonText: {displayText: 'Nonaktifkan'}, type: 1}
]
let buttonMessage = {
image: fs.readFileSync("./media/image/error.jpg"),
jpegThumbnail: fs.readFileSync("./media/image/thumb.jpg"),
caption: mbcs,
footer: "© RZK BOTZ",
buttons: buttons,
headerType: 4,
}
rzki.sendMessage(m.chat, buttonMessage)
await sleep(5000)
rzki.groupRevokeInvite(m.chat)
                    }
                   // rzki.sendMessage(anu.id, { image: { url: ppuser }, contextInfo: { mentionedJid: [num] }, caption: `Welcome To ${metadata.subject} @${num.split("@")[0]}` })
                   
if (db.data.chats[m.chat].SetWelkam1) {                       
textwel = `𝙃𝙀𝙇𝙇𝙊 𝙒𝙀𝙇𝘾𝙊𝙈𝙀 𝙏𝙊 _*${metadata.subject}*_

𝙄𝙉𝙏𝙍𝙊 𝙈𝙀𝙈𝘽𝙀𝙍 𝘽𝘼𝙍𝙐

• 𝙉𝘼𝙈𝘼: 
• 𝙐𝙈𝙐𝙍:
• 𝙎𝙏𝘼𝙏𝙐𝙎:
• 𝘼𝙎𝙆𝙊𝙏:

𝙎𝙀𝙍𝙄𝙉𝙂 𝙉𝙄𝙈𝘽𝙍𝙐𝙉𝙂 𝘿𝘼𝙉 𝘽𝘼𝘾𝘼 𝙍𝙐𝙇𝙀𝙎 𝙂𝙍𝙐𝙋`
} else if (db.data.chats[m.chat].SetWelkam2) {      
textwel = `𝙃𝙀𝙇𝙇𝙊 _*@${num.split("@")[0]}*_\n𝙒𝙀𝙇𝘾𝙊𝙈𝙀 𝙏𝙊 _*${metadata.subject}*_\n𝘿𝙀𝙎𝘾 _*${metadata.desc}*_`
} else if (db.data.chats[m.chat].SetWelkam3) {      
textwel = `𝙒𝙀𝙇𝘾𝙊𝙈𝙀  _*@${num.split("@")[0]}*_ `
}

      let txt = (groupSet.text_welcome != '' ? groupSet.text_welcome : text_welcome).replace('+tag', `@${num.split("@")[0]}`).replace('+grup', `${metadata.subject}`)
                       var but = [{buttonId: `/`, buttonText: { displayText: "Welcome 🥳" }, type: 1 }]
				rzki.sendMessage(anu.id, { caption: textwel, image: {url: ppuser}, buttons: but, footer: `‎`, mentions: [num]})
                } else if (anu.action == 'remove') {
                //if (!left.includes(anu.id)) return
                  if (db.data.chats[anu.id].left) return
if (db.data.chats[m.chat].SetLeft1) {                                           
textleft = `𝘽𝙔𝙀𝙀`
} else if (db.data.chats[m.chat].SetLeft2) {  
textleft = `𝙎𝘼𝙔𝙊𝙉𝘼𝙍𝘼`
} else if (db.data.chats[m.chat].SetLeft3) {  
textleft = `𝙇𝙀𝘼𝙑𝙄𝙉𝙂 𝙏𝙊 _*${metadata.subject}*_`
}
       let txt = (groupSet.text_left != '' ? groupSet.text_left : text_left).replace('+tag', `@${num.split("@")[0]}`).replace('+grup', `${metadata.subject}`)
                   // rzki.sendMessage(anu.id, { image: { url: ppuser }, contextInfo: { mentionedJid: [num] }, caption: `@${num.split("@")[0]} Leaving To ${metadata.subject}` })
                     var but = [{buttonId: `/`, buttonText: { displayText: "Good Bye 👋" }, type: 1 }]
				rzki.sendMessage(anu.id, { caption: textleft, image: {url: ppuser}, buttons: but, footer: `‎`, mentions: [num]})
                }
            }
        } catch (err) {
            console.log(err)
        }
    })
antireact = false    
//Anti react
rzki.ev.on("messages.reaction", async (m) => {
if (antireact) {
const ngrm = m.reaction.key.fromMe ? rzki.decodeJid(rzki.user.id) : rzki.decodeJid(m.reaction.key.participant)
const botNumber = await rzki.decodeJid(rzki.user.id)
if (ngrm === botNumber) return
let mesg = await store.loadMessage(m.reaction.key.remoteJid, m.key.id, rzki);
teks = `Terdeteksi @${ngrm.split("@")[0]} Mengirim Reaction Message ${
m.key.participant ? `ke @${m.key.participant.split("@")[0]}` : ``
}\n*Emoji Reaction:* ${m.reaction.text}`
await rzki.sendMessage(
m.reaction.key.remoteJid,
{
text: teks,
contextInfo:{mentionedJid: await rzki.parseMention(teks), externalAdReply:{
title: namabot,
body: "Whatsapp Using Lib Baileys Multi Device",
thumbnail: log0,
sourceUrl: linkgrupss,
mediaUrl: linkgrupss,
renderLargerThumbnail: false,
showAdAttribution: true,
mediaType: 1
}}
},
{ quoted: mesg }
);
}});


// Setting
    rzki.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    rzki.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = rzki.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    rzki.getName = (jid, withoutContact  = false) => {
        id = rzki.decodeJid(jid)
        withoutContact = rzki.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = rzki.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === rzki.decodeJid(rzki.user.id) ?
            rzki.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    rzki.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await rzki.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await rzki.getName(i + '@s.whatsapp.net')}\nFN:${await rzki.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:rzkganz@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://github.com/RzkGnz\nitem3.X-ABLabel: Github\nitem4.ADR:;;Singapore;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	rzki.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
    }
    
    rzki.setStatus = (status) => {
        rzki.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
	
    rzki.public = true

    rzki.serializeM = (m) => smsg(rzki, m, store)

    rzki.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update	    
        if (connection === 'close') {
        let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); rzki.logout(); }
            else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); startRZK(); }
            else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); startRZK(); }
            else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); rzki.logout(); }
            else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); rzki.logout(); }
            else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); startRZK(); }
            else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); startRZK(); }
            else rzki.end(`Unknown DisconnectReason: ${reason}|${connection}`)
        }
        console.log('Connected...', update)
    })

    rzki.ev.on('creds.update', saveState)

    // Add Other
   
    /** Send Button 5 Image
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    rzki.send5ButImg = async (jid , text = '' , footer = '', img, but = [], thumb, options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img, jpegThumbnail:thumb }, { upload: rzki.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            rzki.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /** Send Button 5 Location
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
     
    rzki.send5Loc = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
               "hydratedContentText": text,
               "locationMessage": {
               "jpegThumbnail": img },
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            rzki.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} buttons 
     * @param {*} caption 
     * @param {*} footer 
     * @param {*} quoted 
     * @param {*} options 
     */
    rzki.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        rzki.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    rzki.sendText = (jid, text, quoted = '', options) => rzki.sendMessage(jid, { text: text, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    rzki.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await rzki.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    rzki.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await rzki.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    rzki.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await rzki.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    rzki.sendTextWithMentions = async (jid, text, quoted, options = {}) => rzki.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    rzki.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await rzki.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    rzki.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await rzki.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	rzki.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await rzki.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await rzki.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }
    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    rzki.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    rzki.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    
    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
    rzki.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await rzki.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    rzki.cMod = (jid, copy, text = '', sender = rzki.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === rzki.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }


    /**
     * 
     * @param {*} path 
     * @returns 
     */
    rzki.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }
    rzki.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
        let types = await rzki.getFile(PATH, true)
        let { filename, size, ext, mime, data } = types
        let type = '', mimetype = mime, pathFile = filename
        if (options.asDocument) type = 'document'
        if (options.asSticker || /webp/.test(mime)) {
            let { writeExif } = require('./lib/sticker.js')
            let media = { mimetype: mime, data }
            pathFile = await writeExif(media, { packname: global.packname, author: global.packname2, categories: options.categories ? options.categories : [] })
            await fs.promises.unlink(filename)
            type = 'sticker'
            mimetype = 'image/webp'
        }
        else if (/image/.test(mime)) type = 'image'
        else if (/video/.test(mime)) type = 'video'
        else if (/audio/.test(mime)) type = 'audio'
        else type = 'document'
        await rzki.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
        return fs.promises.unlink(pathFile)
    }
    rzki.parseMention = async(text) => {
        return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
    }

    return rzki
}

startRZK()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})