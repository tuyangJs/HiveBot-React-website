import cnzh from './zh_CN.json'
import enGB from './en_US.json'
import jajp from './ja_JP.json'
const steb = {
  'zh-CN': cnzh,
  'en-US': enGB,
  'ja-JP': jajp
}

window.Hivelocale = {}
if (steb[navigator.language] != null) {
  Hivelocale.localesmsg = steb[navigator.language].localesmsg
} else {
  Hivelocale.localesmsg = steb['en-US'].localesmsg
}
window.TabHivelad = function () {
  let ulrname = localStorage.getItem('locales')
  if (steb[ulrname] == null) {
    let uland = navigator.language
    if (uland.split('-')[0] == 'en') {
      uland = 'en-US'
    }
    if (steb[uland] == null) {
      return false
    } else {
      Hivelocale.messages = steb[uland]
      Hivelocale.locale = uland
      localStorage.setItem('locales', uland)
      return true
    }
  }
  Hivelocale.messages = steb[ulrname]
  Hivelocale.locale = ulrname
  localStorage.setItem('locales', ulrname)
  return true
}
TabHivelad()
if (!TabHivelad()) {
  Hivelocale.messages = steb['zh-CN']
  Hivelocale.locale = 'zh-CN'
  localStorage.setItem('locales', 'zh-CN')
}
