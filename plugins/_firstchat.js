let moment = require('moment-timezone')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    //if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    if (new Date - user.pc < 9000000) return // setiap 1 jam sekali
    await this.sendButton(m.chat, `
Hai, ${ucapan()}

${user.banned ? 'kamu dibanned' : ' *Hallo saya bot nya ROZI atas nama ⳹ ❋ཻུ۪۪⸙ZIFABOTz⳹ ❋ཻུ۪۪⸙ ada yang bisa saya bantu?* '}
`.trim(), footer, user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '#owner' : '#menu', m)
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari Tod🗿"
    if (time >= 4) {
        res = "Selamat pagi Tod🗿"
    }
    if (time > 10) {
        res = "Selamat siang Tod🗿"
    }
    if (time >= 15) {
        res = "Selamat sore Tod🗿"
    }
    if (time >= 18) {
        res = "Selamat malam Tod🗿"
    }
    return res
}
