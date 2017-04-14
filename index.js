const say = something => {
  import('cowsay-browser').then(cowsay => {
    console.log('cowsay', cowsay)
    console.log(cowsay.say({ text: something }))
  }).catch(error => {
    console.log('load failed', error)
  })
}

export default say
