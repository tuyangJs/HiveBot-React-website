import cnzh from './zh_CN.json'
import enGB from './en_GB.json'
const steb = {
 'zh-CN':cnzh,
 'en-GB':enGB
}

window.TabHivelad=function(){
  let ulrname = localStorage.getItem('locales')
  if(steb[ulrname]==null){
   let uland = navigator.language
    if(steb[uland]==null){
      return false
    }else{
      window.Hivelocale = {
        messages:{
            ...steb[uland]
        },
      locale:uland
    }
    localStorage.setItem('locales',uland)
    return true
    }
  }
  window.Hivelocale = {
      messages:{
          ...steb[ulrname]
      },
    locale:ulrname
  }
  localStorage.setItem('locales',ulrname)
  return true
}

if(!TabHivelad()){
  window.Hivelocale = {
    messages:{
        ...steb['zh-CN']
    },
  locale:'zh-CN'
  }
  localStorage.setItem('locales','zh-CN')
}