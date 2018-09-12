// class CbPlugin {
//   constructor (options) {
//     this.options = options
//   }

//   apply (compiler) {
//     compiler.hooks.compile.tapAsync('CbPlugin', () => {
//       // this.options.cb()
//       console.log(this.options)
//     })
//   }
// }

// module.exports = CbPlugin
class HelloWorldPlugin {
  constructor (options) {
    this.options = options
  }

  apply (compiler) {
    compiler.hooks.done.tap('HelloWorldPlugin', () => {
      console.log('Hello World!')
      console.log(this.options)
    })
  }
}

module.exports = HelloWorldPlugin
