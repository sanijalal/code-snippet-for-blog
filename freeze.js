var desserts = ['chocolate', 'muffin', 'ice-cream']
console.log(desserts)
console.log(desserts.length)
desserts.push('brownie')
console.log(desserts)
console.log(desserts.length)

Object.freeze(desserts)

desserts.push('popsicle')
console.log(desserts)
console.log(desserts.length)
