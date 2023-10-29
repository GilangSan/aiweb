let canCmd = true
async function ai(){
  console.log('pressed')
  let msg = document.getElementById('cmd')
  if (!canCmd) return
  if (!msg.value) return alert('Enter a message first!')
  canCmd = false
  let userc = document.createElement('div')
    userc.setAttribute('class', 'chatUser')
    let can = document.getElementById('container')
    can.appendChild(userc)
    let tts = document.createElement('tt')
    tts.setAttribute('id','content')
    tts.textContent=msg.value
    userc.appendChild(tts)
  let el = document.createElement('div')
    el.setAttribute('class', 'chatAi')
    let con = document.getElementById('container')
    con.appendChild(el)
    let ttt = document.createElement('tt')
    ttt.setAttribute('id','contenta')
    ttt.textContent='Tunggu...'
    el.appendChild(ttt)
  try{
    let api = await fetch(`https://langapi.cyclic.app/api/openai?text=${msg.value}`)
    msg.value = ''
    let apis = await api.json()
    ttt.textContent=apis.respon
    canCmd = true
  } catch(error){
    console.log(error)
    alert('Sistem Sedang Error!')
    canCmd = true
  }
}
