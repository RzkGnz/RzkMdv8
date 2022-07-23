const fs = require("fs")
const chalk = require("chalk")

// Other
global.thum = fs.readFileSync("./media/image/thumb.jpg")
global.log02 = fs.readFileSync("./media/pramuka.jpg")
global.l0c = fs.readFileSync("./media/loc.jpg")
global.log0 = fs.readFileSync("./media/rzk.jpg")
global.err4r = fs.readFileSync("./media/image/error.jpg")
global.owner = ['6288226703423','6285876275834']
global.owner2 = ['6288226703423','6285876275834']
global.rkyt = []
global.ntilink = ['120363043965529911@g.us','120363022988111568@g.us']
global.wlcm = ['120363040112284231@g.us','120363023112413670@g.us','6285692949920-1620369637@g.us']
global.left = ['120363040112284231@g.us','120363023112413670@g.us','6285692949920-1620369637@g.us']
global.gcrevoke = ['19054091487-1424650263@g.us']
global.packname = "RZK BOTZ"
global.packname2 = "wa.me/6285876275834\nWM BY RZK BOTZ\nGK TAU"
global.author = "RZK GANZ"
global.namabot = "R Z K - B O T Z"
global.namabot2 = "© RZK MD"
global.namaowner = "RZK GANZ"
global.sessionName = "rzk"
global.linkgrupss = "https://chat.whatsapp.com/FsVimS75fllCD5JpyjC1Xb"
global.antitags = false
global.prefa = ['/','!','.','🐦','🐤','🗿']
global.mess = {
    success: 'Success',
    admin: '*❏ AKSES DITOLAK*\n\n*Fitur Khusus Admin Group!*',
    botAdmin: '*❏ AKSES DITOLAK*\n\n*Bot Harus Menjadi Admin Terlebih Dahulu!*',
    owner: '*❏ AKSES DITOLAK*\n\n*Fitur Khusus Owner Bot*',
    group: '*❏ AKSES DITOLAK*\n\n*Fitur Digunakan Hanya Untuk Group!*',
    private: '*❏ AKSES DITOLAK*\n\n*Fitur Digunakan Hanya Untuk Private Chat!*',
    bot: '*❏ AKSES DITOLAK*\n\n*Fitur Khusus Pengguna Nomor Bot*',
    wait: '*Tunggu Beberapa Detik...*',
    prem: '*Upgrade premium 🛍️*\n\n*Untuk menggunakan fitur ini*',
    premN:'*❏ INFO PREMIUM*\n\nDengan mendaftar menjadi user premium anda akan mendapatkan keuntungan sebagai berikut :\n\n1. Bisa menggunakan semua fitur\n2. mendapatkan unlimited limit\n3. bisa memainkan di pesan pribadi\n\nSilahkan hubungi owner ( *.owner* ) untuk melakukan upgrade premium hanya dengan Rp. 5.000 per bulan\n\nInvite bot ke GC kalian ? ketik *.sewabot*',
    limitH:'*❏ LIMIT HABIS*\n\nCara mendapatkan limit :\n1. Beli limit ( *.buylimit 10* )\n2. Bermain Games\n\n*Upgrade premium : unlimited limit*',
    linkm: '*Linknya Mana Kak?*',
    ban: '*Kamu telah dibanned oleh owner, Jika ingin di unbanned chat owner*'
}
global.gamewaktu = 90,
global.limitCount = 20,
global.gcounto = {
	"prem": "Unlimited",
	"user": 30
}
global.limitawal = {
    prem: "Unlimited",
    free: 30
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
