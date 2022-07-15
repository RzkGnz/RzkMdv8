/**
 * Help Menu
 * @param {prefix} prefix bot prefix
 * @param {pushname} pushname someone name
 * @returns string
 * @Rzki
 */
 var monospace = '```'
exports.menurandom = (prefix, l) => {
	return `${monospace}❏${monospace} ${monospace}Anonymous${monospace}
${l++}. ➭ ${prefix}anonymous
${l++}. ➭ ${prefix}start
${l++}. ➭ ${prefix}next
${l++}. ➭ ${prefix}leave		
	
${monospace}❏${monospace} ${monospace}Group Command${monospace}
${l++}. ➭ ${prefix}linkgroup
${l++}. ➭ ${prefix}setppgc <image>
${l++}. ➭ ${prefix}setname <query>
${l++}. ➭ ${prefix}setdesc <query>
${l++}. ➭ ${prefix}ephemeral <query>
${l++}. ➭ ${prefix}hidetag <query>
${l++}. ➭ ${prefix}totag <query>
${l++}. ➭ ${prefix}tagall <query>
${l++}. ➭ ${prefix}promote <query>
${l++}. ➭ ${prefix}demote <query>
${l++}. ➭ ${prefix}vote <query>
${l++}. ➭ ${prefix}devote
${l++}. ➭ ${prefix}upvote
${l++}. ➭ ${prefix}cekvote
${l++}. ➭ ${prefix}hapusvote
${l++}. ➭ ${prefix}antilink <on>
${l++}. ➭ ${prefix}antilink <off>
${l++}. ➭ ${prefix}autosticker <on>
${l++}. ➭ ${prefix}autosticker <off>
${l++}. ➭ ${prefix}welcome <on>
${l++}. ➭ ${prefix}welcome <off>
${l++}. ➭ ${prefix}autorevoke <on>
${l++}. ➭ ${prefix}autorevoke <off>
${l++}. ➭ ${prefix}add <query>
${l++}. ➭ ${prefix}kick <query>
${l++}. ➭ ${prefix}revoke
${l++}. ➭ ${prefix}group <open/close>
${l++}. ➭ ${prefix}editinfo <open/close>
${l++}. ➭ ${prefix}ceksewa

${monospace}❏${monospace} ${monospace}Downloader Command${monospace}
${l++}. ➭ ${prefix}instagram <query>
${l++}. ➭ ${prefix}tiktok <query>
${l++}. ➭ ${prefix}tiktoknowm <query>
${l++}. ➭ ${prefix}twitter <query>
${l++}. ➭ ${prefix}facebook <query>
${l++}. ➭ ${prefix}ytplay <query>
${l++}. ➭ ${prefix}ytmp3 <query>
${l++}. ➭ ${prefix}ytmp4 <query>
${l++}. ➭ ${prefix}youtube <query>
${l++}. ➭ ${prefix}igstory <query>
${l++}. ➭ ${prefix}jpeg <query>
${l++}. ➭ ${prefix}mp4 <query>

${monospace}❏${monospace} ${monospace}Search Command${monospace}
${l++}. ➭ ${prefix}gimage <query>
${l++}. ➭ ${prefix}ytsearch <query>
${l++}. ➭ ${prefix}searchgc <query>
${l++}. ➭ ${prefix}play <query>
${l++}. ➭ ${prefix}happymod <query>
${l++}. ➭ ${prefix}servermc
${l++}. ➭ ${prefix}mcpedl <query>
${l++}. ➭ ${prefix}google <query>
${l++}. ➭ ${prefix}pinterest <query>
${l++}. ➭ ${prefix}ringtone <judul>

${monospace}❏${monospace} ${monospace}Convert Command${monospace}
${l++}. ➭ ${prefix}sticker <image/video>
${l++}. ➭ ${prefix}smeme <image>
${l++}. ➭ ${prefix}emojimix <query>
${l++}. ➭ ${prefix}emojimix2 <query>
${l++}. ➭ ${prefix}stickerwm <reply>
${l++}. ➭ ${prefix}take <reply>
${l++}. ➭ ${prefix}emoji <query>
${l++}. ➭ ${prefix}tomp3 <video>
${l++}. ➭ ${prefix}tovn <video>
${l++}. ➭ ${prefix}toaudio <video>
${l++}. ➭ ${prefix}togif <video>
${l++}. ➭ ${prefix}tourl <query>
${l++}. ➭ ${prefix}tomp4 <sticker>
${l++}. ➭ ${prefix}toimage <sticker>

${monospace}❏${monospace} ${monospace}Telegram Sticker${monospace}
${l++}. ➭ ${prefix}gurastick
${l++}. ➭ ${prefix}dogestick
${l++}. ➭ ${prefix}bucinstick
${l++}. ➭ ${prefix}smilestick
${l++}. ➭ ${prefix}sadstick
${l++}. ➭ ${prefix}patrick
${l++}. ➭ ${prefix}telestick <query>
${l++}. ➭ ${prefix}stickersearch <query>

${monospace}❏${monospace} ${monospace}Tools Command${monospace}
${l++}. ➭ ${prefix}inspect <query>
${l++}. ➭ ${prefix}getname <query>
${l++}. ➭ ${prefix}getpic <query>
${l++}. ➭ ${prefix}nulis <query>
${l++}. ➭ ${prefix}kalkulator <query>
${l++}. ➭ ${prefix}quoted <query>
${l++}. ➭ ${prefix}join <query>
${l++}. ➭ ${prefix}fliptext <query>
${l++}. ➭ ${prefix}tohuruf <query>
${l++}. ➭ ${prefix}volume <quer>
${l++}. ➭ ${prefix}bass2 <query>
${l++}. ➭ ${prefix}tempo <query>
${l++}. ➭ ${prefix}translate <query>

${monospace}❏${monospace} ${monospace}Random Command${monospace}
${l++}. ➭ ${prefix}coffe
${l++}. ➭ ${prefix}wallpaper <query>
${l++}. ➭ ${prefix}wikimedia <query>
${l++}. ➭ ${prefix}quotesanime
${l++}. ➭ ${prefix}couple

${monospace}❏${monospace} ${monospace}Happy Command${monospace}
${l++}. ➭ ${prefix}halah <query>
${l++}. ➭ ${prefix}hilih <query>
${l++}. ➭ ${prefix}huluh <query>
${l++}. ➭ ${prefix}heleh <query>
${l++}. ➭ ${prefix}holoh <query>
${l++}. ➭ ${prefix}math <query>
${l++}. ➭ ${prefix}tictactoe <query>
${l++}. ➭ ${prefix}fitnah <query>
${l++}. ➭ ${prefix}delttt <query>
${l++}. ➭ ${prefix}family100
${l++}. ➭ ${prefix}suitpvp <query>
${l++}. ➭ ${prefix}tebak gambar
${l++}. ➭ ${prefix}tebak kata
${l++}. ➭ ${prefix}tebak kalimat
${l++}. ➭ ${prefix}tebak lirik
${l++}. ➭ ${prefix}tebak lontong

${monospace}❏${monospace} ${monospace}Internet Command${monospace}
${l++}. ➭ ${prefix}detiknews
${l++}. ➭ ${prefix}wiki
${l++}. ➭ ${prefix}gempa
${l++}. ➭ ${prefix}covidindo
${l++}. ➭ ${prefix}jadwaltv
${l++}. ➭ ${prefix}cnn

${monospace}❏${monospace} ${monospace}VoiceChanger Command${monospace}
${l++}. ➭ ${prefix}bass
${l++}. ➭ ${prefix}blown
${l++}. ➭ ${prefix}deep
${l++}. ➭ ${prefix}earrape
${l++}. ➭ ${prefix}fast
${l++}. ➭ ${prefix}fat
${l++}. ➭ ${prefix}nightcore
${l++}. ➭ ${prefix}reverse
${l++}. ➭ ${prefix}robot
${l++}. ➭ ${prefix}slow
${l++}. ➭ ${prefix}tupai

${monospace}❏${monospace} ${monospace}Primbon Command${monospace}
${l++}. ➭ ${prefix}nomorhoki
${l++}. ➭ ${prefix}artimimpi
${l++}. ➭ ${prefix}artinama
${l++}. ➭ ${prefix}ramaljodoh
${l++}. ➭ ${prefix}ramaljodohbali
${l++}. ➭ ${prefix}suamiistri
${l++}. ➭ ${prefix}ramalcinta
${l++}. ➭ ${prefix}cocoknama
${l++}. ➭ ${prefix}pasangan
${l++}. ➭ ${prefix}jadiannikah
${l++}. ➭ ${prefix}sifatusaha
${l++}. ➭ ${prefix}rezeki
${l++}. ➭ ${prefix}pekerjaan
${l++}. ➭ ${prefix}nasib
${l++}. ➭ ${prefix}penyakit
${l++}. ➭ ${prefix}tarot
${l++}. ➭ ${prefix}fengshui
${l++}. ➭ ${prefix}haribaik
${l++}. ➭ ${prefix}harisangar
${l++}. ➭ ${prefix}harisial
${l++}. ➭ ${prefix}nagahari
${l++}. ➭ ${prefix}arahrezeki
${l++}. ➭ ${prefix}peruntungan
${l++}. ➭ ${prefix}weton
${l++}. ➭ ${prefix}karakter
${l++}. ➭ ${prefix}keberuntungan
${l++}. ➭ ${prefix}memancing
${l++}. ➭ ${prefix}masasubur
${l++}. ➭ ${prefix}zodiak
${l++}. ➭ ${prefix}shio

${monospace}❏${monospace} ${monospace}Anime Command${monospace}
${l++}. ➭ ${prefix}neko
${l++}. ➭ ${prefix}waifu
${l++}. ➭ ${prefix}shinobu
${l++}. ➭ ${prefix}megumin
${l++}. ➭ ${prefix}bully
${l++}. ➭ ${prefix}cuddle
${l++}. ➭ ${prefix}cry
${l++}. ➭ ${prefix}hug
${l++}. ➭ ${prefix}awoo
${l++}. ➭ ${prefix}lick
${l++}. ➭ ${prefix}smug
${l++}. ➭ ${prefix}bonk
${l++}. ➭ ${prefix}yeet
${l++}. ➭ ${prefix}blush
${l++}. ➭ ${prefix}smile
${l++}. ➭ ${prefix}wave
${l++}. ➭ ${prefix}highfive
${l++}. ➭ ${prefix}handhold
${l++}. ➭ ${prefix}nom
${l++}. ➭ ${prefix}bite
${l++}. ➭ ${prefix}glomp
${l++}. ➭ ${prefix}slap
${l++}. ➭ ${prefix}kill
${l++}. ➭ ${prefix}happy
${l++}. ➭ ${prefix}wink
${l++}. ➭ ${prefix}poke
${l++}. ➭ ${prefix}dance
${l++}. ➭ ${prefix}cringe

${monospace}❏${monospace} ${monospace}Maker Command${monospace}
${l++}. ➭ ${prefix}rainbow <text>
${l++}. ➭ ${prefix}scifi <text>
${l++}. ➭ ${prefix}christmas <text>
${l++}. ➭ ${prefix}ancient <text>
${l++}. ➭ ${prefix}toxic <text>
${l++}. ➭ ${prefix}lava <text>
${l++}. ➭ ${prefix}neonlight <text>
${l++}. ➭ ${prefix}fabric <text>
${l++}. ➭ ${prefix}glue <text>
${l++}. ➭ ${prefix}luxury <text>
${l++}. ➭ ${prefix}underwater <text>
${l++}. ➭ ${prefix}harrypotter <text>
${l++}. ➭ ${prefix}steel <text>
${l++}. ➭ ${prefix}metallic <text>
${l++}. ➭ ${prefix}graffiti <text>
${l++}. ➭ ${prefix}pencil <text>
${l++}. ➭ ${prefix}magma <text>
${l++}. ➭ ${prefix}sand <text>
${l++}. ➭ ${prefix}sky <text>
${l++}. ➭ ${prefix}joker <text>
${l++}. ➭ ${prefix}hoorror <text>
${l++}. ➭ ${prefix}whitebear <text>
${l++}. ➭ ${prefix}thunder <text>
${l++}. ➭ ${prefix}matrix <text>
${l++}. ➭ ${prefix}blackpink <text>
${l++}. ➭ ${prefix}neon <text>
${l++}. ➭ ${prefix}carved <text>
${l++}. ➭ ${prefix}3dstone <text>
${l++}. ➭ ${prefix}3dglass <text>
${l++}. ➭ ${prefix}3dluxury <text>
${l++}. ➭ ${prefix}elegant <text>
${l++}. ➭ ${prefix}demon <text>
${l++}. ➭ ${prefix}watercolor <text>
${l++}. ➭ ${prefix}3dgradient <text>
${l++}. ➭ ${prefix}halloweenfire <text>
${l++}. ➭ ${prefix}writing <text>
${l++}. ➭ ${prefix}denim <text>
${l++}. ➭ ${prefix}blood <text>
${l++}. ➭ ${prefix}skeleton <text>
${l++}. ➭ ${prefix}embossed <text>
${l++}. ➭ ${prefix}wonderful <text>
${l++}. ➭ ${prefix}devil <text>
${l++}. ➭ ${prefix}collwall <text>
${l++}. ➭ ${prefix}multicolor <text>
${l++}. ➭ ${prefix}batman <text>
${l++}. ➭ ${prefix}juice <text>
${l++}. ➭ ${prefix}giraffe <text>
${l++}. ➭ ${prefix}light <text>
${l++}. ➭ ${prefix}glitch <text>
${l++}. ➭ ${prefix}arcane <text>
${l++}. ➭ ${prefix}led <text>
${l++}. ➭ ${prefix}3dbox <text>
${l++}. ➭ ${prefix}papercut <text>
${l++}. ➭ ${prefix}transformer <text>
${l++}. ➭ ${prefix}carbon <text>
${l++}. ➭ ${prefix}pornhub <text>|<text>
${l++}. ➭ ${prefix}retro <text>|<text>
${l++}. ➭ ${prefix}horror <text>|<text>
${l++}. ➭ ${prefix}8bit <text>|<text>
${l++}. ➭ ${prefix}glitch2 <text>|<text>
${l++}. ➭ ${prefix}glitch3 <text>|<text>
${l++}. ➭ ${prefix}realistic <text>|<text>
${l++}. ➭ ${prefix}space <text>|<text>
${l++}. ➭ ${prefix}stone <text>|<text>
${l++}. ➭ ${prefix}spooky <text>|<text>
${l++}. ➭ ${prefix}cool <text>|<text>
${l++}. ➭ ${prefix}layered <text>|<text>
${l++}. ➭ ${prefix}3davengers <text>|<text>
${l++}. ➭ ${prefix}marvel <text>|<text>

${monospace}❏${monospace} ${monospace}Cerpen Command${monospace}
${l++}. ➭ ${prefix}cerpen-anak
${l++}. ➭ ${prefix}cerpen-bahasadaerah
${l++}. ➭ ${prefix}cerpen-bahasainggris
${l++}. ➭ ${prefix}cerpen-bahasajawa
${l++}. ➭ ${prefix}cerpen-bahasasunda
${l++}. ➭ ${prefix}cerpen-budaya
${l++}. ➭ ${prefix}cerpen-cinta
${l++}. ➭ ${prefix}cerpen-cintaislami
${l++}. ➭ ${prefix}cerpen-cintapertama
${l++}. ➭ ${prefix}cerpen-cintaromantis
${l++}. ➭ ${prefix}cerpen-cintasedih
${l++}. ➭ ${prefix}cerpen-cintasegitiga
${l++}. ➭ ${prefix}cerpen-cintasejati
${l++}. ➭ ${prefix}cerpen-galau
${l++}. ➭ ${prefix}cerpen-gokil
${l++}. ➭ ${prefix}cerpen-inspiratif
${l++}. ➭ ${prefix}cerpen-jepang
${l++}. ➭ ${prefix}cerpen-kehidupan
${l++}. ➭ ${prefix}cerpen-keluarga
${l++}. ➭ ${prefix}cerpen-kisahnyata
${l++}. ➭ ${prefix}cerpen-korea
${l++}. ➭ ${prefix}cerpen-kristen
${l++}. ➭ ${prefix}cerpen-liburan
${l++}. ➭ ${prefix}cerpen-lingkungan
${l++}. ➭ ${prefix}cerpen-malaysia
${l++}. ➭ ${prefix}cerpen-mengharukan
${l++}. ➭ ${prefix}cerpen-misteri
${l++}. ➭ ${prefix}cerpen-motivasi
${l++}. ➭ ${prefix}cerpen-nasihat
${l++}. ➭ ${prefix}cerpen-nasionalisme
${l++}. ➭ ${prefix}cerpen-olahraga
${l++}. ➭ ${prefix}cerpen-patahhati
${l++}. ➭ ${prefix}cerpen-penantian
${l++}. ➭ ${prefix}cerpen-pendidikan
${l++}. ➭ ${prefix}cerpen-pengalaman
${l++}. ➭ ${prefix}cerpen-pengorbanan
${l++}. ➭ ${prefix}cerpen-penyesalan
${l++}. ➭ ${prefix}cerpen-perjuangan
${l++}. ➭ ${prefix}cerpen-perpisahan
${l++}. ➭ ${prefix}cerpen-persahabatan
${l++}. ➭ ${prefix}cerpen-petualangan
${l++}. ➭ ${prefix}cerpen-ramadhan
${l++}. ➭ ${prefix}cerpen-remaja
${l++}. ➭ ${prefix}cerpen-rindu
${l++}. ➭ ${prefix}cerpen-rohani
${l++}. ➭ ${prefix}cerpen-romantis
${l++}. ➭ ${prefix}cerpen-sastra
${l++}. ➭ ${prefix}cerpen-sedih
${l++}. ➭ ${prefix}cerpen-sejarah

${monospace}❏${monospace} ${monospace}Database Command${monospace}
${l++}. ➭ ${prefix}setcmd <query>
${l++}. ➭ ${prefix}listcmd
${l++}. ➭ ${prefix}delcmd <query>
${l++}. ➭ ${prefix}lockcmd <query>
${l++}. ➭ ${prefix}addmsg <query>
${l++}. ➭ ${prefix}listmsg
${l++}. ➭ ${prefix}getmsg <query>
${l++}. ➭ ${prefix}delmsg <query>

${monospace}❏${monospace} ${monospace}Other Command${monospace}
${l++}. ➭ ${prefix}owner
${l++}. ➭ ${prefix}listpc
${l++}. ➭ ${prefix}listgc
${l++}. ➭ ${prefix}mcserver
${l++}. ➭ ${prefix}sc
${l++}. ➭ ${prefix}ping
${l++}. ➭ ${prefix}afk
${l++}. ➭ ${prefix}cekupdate [UpdateBot]
${l++}. ➭ ${prefix}delete <query>
${l++}. ➭ ${prefix}infochat <query>
${l++}. ➭ ${prefix}request <query>
${l++}. ➭ ${prefix}report <query>
${l++}. ➭ ${prefix}donate
${l++}. ➭ ${prefix}listonline

${monospace}❏${monospace} ${monospace}Owner Command${monospace}
${l++}. ➭ ${prefix}self
${l++}. ➭ ${prefix}public
${l++}. ➭ ${prefix}setmenu
${l++}. ➭ ${prefix}setfakereply
${l++}. ➭ ${prefix}ceksewa
${l++}. ➭ ${prefix}block @user
${l++}. ➭ ${prefix}unblock @user
${l++}. ➭ ${prefix}spam <query>
${l++}. ➭ ${prefix}mutechat <0/1>
${l++}. ➭ ${prefix}mutegrup <0/1>
${l++}. ➭ ${prefix}autoread <on/off>
${l++}. ➭ ${prefix}autorekam <on/off>
${l++}. ➭ ${prefix}autongetik <on/off>
${l++}. ➭ ${prefix}autodl <on/off>
${l++}. ➭ ${prefix}autoreact <on/off>
${l++}. ➭ ${prefix}antireact <on/off>
${l++}. ➭ ${prefix}sewa <add/del>
${l++}. ➭ ${prefix}getcase <fitur>
${l++}. ➭ ${prefix}setppbot <image>
${l++}. ➭ ${prefix}join <link>
${l++}. ➭ ${prefix}leavegc <group>
${l++}. ➭ ${prefix}bcall <query>
${l++}. ➭ ${prefix}bcgroup <query>
${l++}. ➭ ${prefix}bcgroup2 <query>
${l++}. ➭ ${prefix}chat <query>
${l++}. ➭ ${prefix}antitag <query>
${l++}. ➭ ${prefix}ban <add/del>
${l++}. ➭ ${prefix}cowner <add/del>
${l++}. ➭ >
${l++}. ➭ =>
${l++}. ➭ $
*Total:* ${l++}

${monospace}❏${monospace} ${monospace}Thanks To\n- MenMymans\n- MenFax\n- MenRzki\n- MenVynn\n- MenDika\n- MenFdly${monospace}
`
}