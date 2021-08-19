---
title: Freezing Arrays in Javascript
published: true
description: Javascript code snippet to freeze array
tags: javascript
cover_image: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qknsxrxpe0ir7exok3uz.png
---

This is a cool tip recently tweeted by Oliver Jumpertz:
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">💛 JavaScript tips 💛<br><br>Arrays are objects. Object.freeze has an effect on them.<br><br>This means that you can also make your arrays immutable. ↓ <a href="https://t.co/9stpcnRX8k">pic.twitter.com/9stpcnRX8k</a></p>&mdash; Oliver Jumpertz (@oliverjumpertz) <a href="https://twitter.com/oliverjumpertz/status/1428050011078680582?ref_src=twsrc%5Etfw">August 18, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Having never used this in my code, I decided to give it a try and see what happens if I try to push an already frozen array.

So this is what I wrote in my Javascript file:
```
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
```
And this is the outcome:
```
[ 'chocolate', 'muffin', 'ice-cream' ]
3
[ 'chocolate', 'muffin', 'ice-cream', 'brownie' ]
4
```
And once you freeze it, you will get a runtime TypeError:

```
desserts.push('popsicle')
         ^

TypeError: Cannot add property 4, object is not extensible
    at Array.push (<anonymous>)
    at Object.<anonymous> (C:\repo\blog\js-freeze-array\freeze.js:10:10)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
```

That's good to know, no?

Oh and if you haven't, please follow [Oliver on twitter.](https://twitter.com/oliverjumpertz/status/1428050011078680582) He shares a lot of tips like this.

Cover image by: https://pixabay.com/illustrations/christmas-background-landscape-4701783/