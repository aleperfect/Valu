let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗔 𝗚𝗘𝗡𝗘𝗥𝗔𝗟* ${pesan}`
let teks = `*𝗔𝗖𝗧𝗜𝗩𝗘𝗡𝗦𝗘 𝗣𝗟𝗔𝗡𝗧𝗔𝗦 𝗢 𝗖𝗨𝗣𝗢*\n\n🌟 ${oi}\n\n🌟 *❕@𝖚𝖘𝖉.𝖛𝖆𝖑𝖚𝖚_*\n`
for (let mem of participants) {
teks += `🐱🩵 @${mem.id.split('@')[0]}\n`}
teks += `★𝗩𝗮𝗹𝘂𝗕𝗼𝘁-𝗠𝗗`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler