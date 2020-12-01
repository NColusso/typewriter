const sentence = "hello from lighthouse labs";


const typewriter = function (sentence) {
  let x = 0
  for (let i = 0; i < sentence.length; i ++) {
    setTimeout(() => {
      // print the char here
      process.stdout.write(sentence[i])
      if (i === sentence.length - 1) {
        console.log()
      }
    }, x)
    x += 50
  }
}


typewriter(sentence)