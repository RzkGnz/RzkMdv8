/**
 * Help Menu
 * @param {prefix} prefix bot prefix
 * @param {pushname} pushname someone name
 * @returns string
 * @Rzki
 */
 var a = '*│*'
exports.menurandom = (prefix) => {
	return `*├───[  ANONYMOUS  ]────*
${a}
${a} ▣ ${prefix}anonymous
${a} ▣ ${prefix}start
${a} ▣ ${prefix}next
${a} ▣ ${prefix}leave	
${a}
*├───[  GROUP  ]────*
${a}
${a} ▣ ${prefix}linkgroup
${a} ▣ ${prefix}setppgc <image>
${a} ▣ ${prefix}setname <query>
${a} ▣ ${prefix}setdesc <query>
${a} ▣ ${prefix}ephemeral <query>
${a} ▣ ${prefix}hidetag <query>
${a} ▣ ${prefix}totag <query>
${a} ▣ ${prefix}tagall <query>
${a} ▣ ${prefix}promote <query>
${a} ▣ ${prefix}demote <query>
${a} ▣ ${prefix}vote <query>
${a} ▣ ${prefix}devote
${a} ▣ ${prefix}upvote
${a} ▣ ${prefix}cekvote
${a} ▣ ${prefix}hapusvote
${a} ▣ ${prefix}antilink <on>
${a} ▣ ${prefix}antilink <off>
${a} ▣ ${prefix}autosticker <on/off>
${a} ▣ ${prefix}welcome <on/off>
${a} ▣ ${prefix}autorevoke <on/off>
${a} ▣ ${prefix}add <query>
${a} ▣ ${prefix}kick <query>
${a} ▣ ${prefix}revoke
${a} ▣ ${prefix}group <open/close>
${a} ▣ ${prefix}editinfo <open/close>
${a} ▣ ${prefix}ceksewa
${a}
*├───[  DOWNLOADER  ]────*
${a}
${a} ▣ ${prefix}instagram <query>
${a} ▣ ${prefix}tiktok <query>
${a} ▣ ${prefix}tiktoknowm <query>
${a} ▣ ${prefix}twitter <query>
${a} ▣ ${prefix}facebook <query>
${a} ▣ ${prefix}ytplay <query>
${a} ▣ ${prefix}ytmp3 <query>
${a} ▣ ${prefix}ytmp4 <query>
${a} ▣ ${prefix}youtube <query>
${a} ▣ ${prefix}igstory <query>
${a} ▣ ${prefix}jpeg <query>
${a} ▣ ${prefix}mp4 <query>
${a}
*├───[  SEARCH  ]────*
${a}
${a} ▣ ${prefix}gimage <query>
${a} ▣ ${prefix}ytsearch <query>
${a} ▣ ${prefix}searchgc <query>
${a} ▣ ${prefix}play <query>
${a} ▣ ${prefix}happymod <query>
${a} ▣ ${prefix}servermc
${a} ▣ ${prefix}mcpedl <query>
${a} ▣ ${prefix}google <query>
${a} ▣ ${prefix}pinterest <query>
${a} ▣ ${prefix}ringtone <judul>
${a}
*├───[  CONVERT  ]────*
${a}
${a} ▣ ${prefix}sticker <image/video>
${a} ▣ ${prefix}smeme <image>
${a} ▣ ${prefix}emojimix <query>
${a} ▣ ${prefix}emojimix2 <query>
${a} ▣ ${prefix}stickerwm <reply>
${a} ▣ ${prefix}take <reply>
${a} ▣ ${prefix}emoji <query>
${a} ▣ ${prefix}tomp3 <video>
${a} ▣ ${prefix}tovn <video>
${a} ▣ ${prefix}toaudio <video>
${a} ▣ ${prefix}togif <video>
${a} ▣ ${prefix}tourl <query>
${a} ▣ ${prefix}tomp4 <sticker>
${a} ▣ ${prefix}toimage <sticker>
${a}
*├───[  TELE STICK  ]────*
${a}
${a} ▣ ${prefix}gurastick
${a} ▣ ${prefix}dogestick
${a} ▣ ${prefix}bucinstick
${a} ▣ ${prefix}smilestick
${a} ▣ ${prefix}sadstick
${a} ▣ ${prefix}patrick
${a} ▣ ${prefix}telestick <query>
${a} ▣ ${prefix}stickersearch <query>
${a}
*├───[  TOOLS  ]────*
${a}
${a} ▣ ${prefix}inspect <query>
${a} ▣ ${prefix}getname <query>
${a} ▣ ${prefix}getpic <query>
${a} ▣ ${prefix}nulis <query>
${a} ▣ ${prefix}kalkulator <query>
${a} ▣ ${prefix}quoted <query>
${a} ▣ ${prefix}join <query>
${a} ▣ ${prefix}fliptext <query>
${a} ▣ ${prefix}tohuruf <query>
${a} ▣ ${prefix}volume <quer>
${a} ▣ ${prefix}bass2 <query>
${a} ▣ ${prefix}tempo <query>
${a} ▣ ${prefix}translate <query>
${a}
*├───[  RANDOM  ]────*
${a}
${a} ▣ ${prefix}coffe
${a} ▣ ${prefix}wallpaper <query>
${a} ▣ ${prefix}wikimedia <query>
${a} ▣ ${prefix}quotesanime
${a} ▣ ${prefix}couple
${a}
*├───[  HAPPY  ]────*
${a}
${a} ▣ ${prefix}halah <query>
${a} ▣ ${prefix}hilih <query>
${a} ▣ ${prefix}huluh <query>
${a} ▣ ${prefix}heleh <query>
${a} ▣ ${prefix}holoh <query>
${a} ▣ ${prefix}math <query>
${a} ▣ ${prefix}tictactoe <query>
${a} ▣ ${prefix}fitnah <query>
${a} ▣ ${prefix}delttt <query>
${a} ▣ ${prefix}family100
${a} ▣ ${prefix}suitpvp <query>
${a} ▣ ${prefix}tebak gambar
${a} ▣ ${prefix}tebak kata
${a} ▣ ${prefix}tebak kalimat
${a} ▣ ${prefix}tebak lirik
${a} ▣ ${prefix}tebak lontong
${a}
*├───[  INTERNET  ]────*
${a}
${a} ▣ ${prefix}detiknews
${a} ▣ ${prefix}wiki
${a} ▣ ${prefix}gempa
${a} ▣ ${prefix}covidindo
${a} ▣ ${prefix}jadwaltv
${a} ▣ ${prefix}cnn
${a}
*├───[  VOICE CHANGER  ]────*
${a}
${a} ▣ ${prefix}bass
${a} ▣ ${prefix}blown
${a} ▣ ${prefix}deep
${a} ▣ ${prefix}earrape
${a} ▣ ${prefix}fast
${a} ▣ ${prefix}fat
${a} ▣ ${prefix}nightcore
${a} ▣ ${prefix}reverse
${a} ▣ ${prefix}robot
${a} ▣ ${prefix}slow
${a} ▣ ${prefix}tupai
${a}
*├───[  PRIMBON  ]────*
${a}
${a} ▣ ${prefix}nomorhoki
${a} ▣ ${prefix}artimimpi
${a} ▣ ${prefix}artinama
${a} ▣ ${prefix}ramaljodoh
${a} ▣ ${prefix}ramaljodohbali
${a} ▣ ${prefix}suamiistri
${a} ▣ ${prefix}ramalcinta
${a} ▣ ${prefix}cocoknama
${a} ▣ ${prefix}pasangan
${a} ▣ ${prefix}jadiannikah
${a} ▣ ${prefix}sifatusaha
${a} ▣ ${prefix}rezeki
${a} ▣ ${prefix}pekerjaan
${a} ▣ ${prefix}nasib
${a} ▣ ${prefix}penyakit
${a} ▣ ${prefix}tarot
${a} ▣ ${prefix}fengshui
${a} ▣ ${prefix}haribaik
${a} ▣ ${prefix}harisangar
${a} ▣ ${prefix}harisial
${a} ▣ ${prefix}nagahari
${a} ▣ ${prefix}arahrezeki
${a} ▣ ${prefix}peruntungan
${a} ▣ ${prefix}weton
${a} ▣ ${prefix}karakter
${a} ▣ ${prefix}keberuntungan
${a} ▣ ${prefix}memancing
${a} ▣ ${prefix}masasubur
${a} ▣ ${prefix}zodiak
${a} ▣ ${prefix}shio
${a}
*├───[  ANIME  ]────*
${a}
${a} ▣ ${prefix}neko
${a} ▣ ${prefix}waifu
${a} ▣ ${prefix}shinobu
${a} ▣ ${prefix}megumin
${a} ▣ ${prefix}bully
${a} ▣ ${prefix}cuddle
${a} ▣ ${prefix}cry
${a} ▣ ${prefix}hug
${a} ▣ ${prefix}awoo
${a} ▣ ${prefix}lick
${a} ▣ ${prefix}smug
${a} ▣ ${prefix}bonk
${a} ▣ ${prefix}yeet
${a} ▣ ${prefix}blush
${a} ▣ ${prefix}smile
${a} ▣ ${prefix}wave
${a} ▣ ${prefix}highfive
${a} ▣ ${prefix}handhold
${a} ▣ ${prefix}nom
${a} ▣ ${prefix}bite
${a} ▣ ${prefix}glomp
${a} ▣ ${prefix}slap
${a} ▣ ${prefix}kill
${a} ▣ ${prefix}happy
${a} ▣ ${prefix}wink
${a} ▣ ${prefix}poke
${a} ▣ ${prefix}dance
${a} ▣ ${prefix}cringe
${a}
*├───[  MAKER  ]────*
${a}
${a} ▣ ${prefix}rainbow <text>
${a} ▣ ${prefix}scifi <text>
${a} ▣ ${prefix}christmas <text>
${a} ▣ ${prefix}ancient <text>
${a} ▣ ${prefix}toxic <text>
${a} ▣ ${prefix}lava <text>
${a} ▣ ${prefix}neonlight <text>
${a} ▣ ${prefix}fabric <text>
${a} ▣ ${prefix}glue <text>
${a} ▣ ${prefix}luxury <text>
${a} ▣ ${prefix}underwater <text>
${a} ▣ ${prefix}harrypotter <text>
${a} ▣ ${prefix}steel <text>
${a} ▣ ${prefix}metallic <text>
${a} ▣ ${prefix}graffiti <text>
${a} ▣ ${prefix}pencil <text>
${a} ▣ ${prefix}magma <text>
${a} ▣ ${prefix}sand <text>
${a} ▣ ${prefix}sky <text>
${a} ▣ ${prefix}joker <text>
${a} ▣ ${prefix}hoorror <text>
${a} ▣ ${prefix}whitebear <text>
${a} ▣ ${prefix}thunder <text>
${a} ▣ ${prefix}matrix <text>
${a} ▣ ${prefix}blackpink <text>
${a} ▣ ${prefix}neon <text>
${a} ▣ ${prefix}carved <text>
${a} ▣ ${prefix}3dstone <text>
${a} ▣ ${prefix}3dglass <text>
${a} ▣ ${prefix}3dluxury <text>
${a} ▣ ${prefix}elegant <text>
${a} ▣ ${prefix}demon <text>
${a} ▣ ${prefix}watercolor <text>
${a} ▣ ${prefix}3dgradient <text>
${a} ▣ ${prefix}halloweenfire <text>
${a} ▣ ${prefix}writing <text>
${a} ▣ ${prefix}denim <text>
${a} ▣ ${prefix}blood <text>
${a} ▣ ${prefix}skeleton <text>
${a} ▣ ${prefix}embossed <text>
${a} ▣ ${prefix}wonderful <text>
${a} ▣ ${prefix}devil <text>
${a} ▣ ${prefix}collwall <text>
${a} ▣ ${prefix}multicolor <text>
${a} ▣ ${prefix}batman <text>
${a} ▣ ${prefix}juice <text>
${a} ▣ ${prefix}giraffe <text>
${a} ▣ ${prefix}light <text>
${a} ▣ ${prefix}glitch <text>
${a} ▣ ${prefix}arcane <text>
${a} ▣ ${prefix}led <text>
${a} ▣ ${prefix}3dbox <text>
${a} ▣ ${prefix}papercut <text>
${a} ▣ ${prefix}transformer <text>
${a} ▣ ${prefix}carbon <text>
${a} ▣ ${prefix}pornhub <text>|<text>
${a} ▣ ${prefix}retro <text>|<text>
${a} ▣ ${prefix}horror <text>|<text>
${a} ▣ ${prefix}8bit <text>|<text>
${a} ▣ ${prefix}glitch2 <text>|<text>
${a} ▣ ${prefix}glitch3 <text>|<text>
${a} ▣ ${prefix}realistic <text>|<text>
${a} ▣ ${prefix}space <text>|<text>
${a} ▣ ${prefix}stone <text>|<text>
${a} ▣ ${prefix}spooky <text>|<text>
${a} ▣ ${prefix}cool <text>|<text>
${a} ▣ ${prefix}layered <text>|<text>
${a} ▣ ${prefix}3davengers <text>|<text>
${a} ▣ ${prefix}marvel <text>|<text>
${a}
*├───[  CERPEN  ]────*
${a}
${a} ▣ ${prefix}cerpen-anak
${a} ▣ ${prefix}cerpen-bahasadaerah
${a} ▣ ${prefix}cerpen-bahasainggris
${a} ▣ ${prefix}cerpen-bahasajawa
${a} ▣ ${prefix}cerpen-bahasasunda
${a} ▣ ${prefix}cerpen-budaya
${a} ▣ ${prefix}cerpen-cinta
${a} ▣ ${prefix}cerpen-cintaislami
${a} ▣ ${prefix}cerpen-cintapertama
${a} ▣ ${prefix}cerpen-cintaromantis
${a} ▣ ${prefix}cerpen-cintasedih
${a} ▣ ${prefix}cerpen-cintasegitiga
${a} ▣ ${prefix}cerpen-cintasejati
${a} ▣ ${prefix}cerpen-galau
${a} ▣ ${prefix}cerpen-gokil
${a} ▣ ${prefix}cerpen-inspiratif
${a} ▣ ${prefix}cerpen-jepang
${a} ▣ ${prefix}cerpen-kehidupan
${a} ▣ ${prefix}cerpen-keluarga
${a} ▣ ${prefix}cerpen-kisahnyata
${a} ▣ ${prefix}cerpen-korea
${a} ▣ ${prefix}cerpen-kristen
${a} ▣ ${prefix}cerpen-liburan
${a} ▣ ${prefix}cerpen-lingkungan
${a} ▣ ${prefix}cerpen-malaysia
${a} ▣ ${prefix}cerpen-mengharukan
${a} ▣ ${prefix}cerpen-misteri
${a} ▣ ${prefix}cerpen-motivasi
${a} ▣ ${prefix}cerpen-nasihat
${a} ▣ ${prefix}cerpen-nasionalisme
${a} ▣ ${prefix}cerpen-olahraga
${a} ▣ ${prefix}cerpen-patahhati
${a} ▣ ${prefix}cerpen-penantian
${a} ▣ ${prefix}cerpen-pendidikan
${a} ▣ ${prefix}cerpen-pengalaman
${a} ▣ ${prefix}cerpen-pengorbanan
${a} ▣ ${prefix}cerpen-penyesalan
${a} ▣ ${prefix}cerpen-perjuangan
${a} ▣ ${prefix}cerpen-perpisahan
${a} ▣ ${prefix}cerpen-persahabatan
${a} ▣ ${prefix}cerpen-petualangan
${a} ▣ ${prefix}cerpen-ramadhan
${a} ▣ ${prefix}cerpen-remaja
${a} ▣ ${prefix}cerpen-rindu
${a} ▣ ${prefix}cerpen-rohani
${a} ▣ ${prefix}cerpen-romantis
${a} ▣ ${prefix}cerpen-sastra
${a} ▣ ${prefix}cerpen-sedih
${a} ▣ ${prefix}cerpen-sejarah
${a}
*├───[  DATABASE  ]────*
${a}
${a} ▣ ${prefix}setcmd <query>
${a} ▣ ${prefix}listcmd
${a} ▣ ${prefix}delcmd <query>
${a} ▣ ${prefix}lockcmd <query>
${a} ▣ ${prefix}addmsg <query>
${a} ▣ ${prefix}listmsg
${a} ▣ ${prefix}getmsg <query>
${a} ▣ ${prefix}delmsg <query>
${a}
*├───[  OTHER  ]────*
${a}
${a} ▣ ${prefix}owner
${a} ▣ ${prefix}listpc
${a} ▣ ${prefix}listgc
${a} ▣ ${prefix}mcserver
${a} ▣ ${prefix}sc
${a} ▣ ${prefix}ping
${a} ▣ ${prefix}afk
${a} ▣ ${prefix}cekupdate [UpdateBot]
${a} ▣ ${prefix}delete <query>
${a} ▣ ${prefix}infochat <query>
${a} ▣ ${prefix}request <query>
${a} ▣ ${prefix}report <query>
${a} ▣ ${prefix}donate
${a} ▣ ${prefix}listonline
${a}
*├───[  OWNER  ]────*
${a}
${a} ▣ ${prefix}self
${a} ▣ ${prefix}public
${a} ▣ ${prefix}setmenu
${a} ▣ ${prefix}setfakereply
${a} ▣ ${prefix}ceksewa
${a} ▣ ${prefix}block @user
${a} ▣ ${prefix}unblock @user
${a} ▣ ${prefix}spam <query>
${a} ▣ ${prefix}muteall <0/1>
${a} ▣ ${prefix}mutechat <0/1>
${a} ▣ ${prefix}mutegrup <0/1>
${a} ▣ ${prefix}autoread <on/off>
${a} ▣ ${prefix}autorekam <on/off>
${a} ▣ ${prefix}autongetik <on/off>
${a} ▣ ${prefix}autodl <on/off> (tiktok/yt)
${a} ▣ ${prefix}autoreact <on/off>
${a} ▣ ${prefix}antireact <on/off>
${a} ▣ ${prefix}sewa <add/del>
${a} ▣ ${prefix}getcase <fitur>
${a} ▣ ${prefix}setppbot <image>
${a} ▣ ${prefix}join <link>
${a} ▣ ${prefix}leavegc <group>
${a} ▣ ${prefix}bcall <query>
${a} ▣ ${prefix}bcgroup <query>
${a} ▣ ${prefix}bcgroup2 <query>
${a} ▣ ${prefix}chat <query>
${a} ▣ ${prefix}antitag <query>
${a} ▣ ${prefix}ban <add/del>
${a} ▣ ${prefix}cowner <add/del>
${a} ▣ > <eval v1>
${a} ▣ => <eval v2>
${a} ▣ $ <exec terminal>
${a}`
}