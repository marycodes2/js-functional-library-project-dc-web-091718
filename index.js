fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cb) {
      if (Array.isArray(collection)) {
        let index = 0
        for (x of collection) {
          cb(x, index, collection)
          index++
        }
      } else {
        for (x in collection) {
          cb(x, collection[x], collection)
        }
      }
      return collection
    },

    map: function(collection, cb) {
      let result = []
      if (Array.isArray(collection)) {
        let index = 0
        for (x of collection) {
          result.push(cb(x, index, collection))
          index++
        }
      } else {
        for (x in collection) {
          result.push(cb(collection[x], x, collection))
        }
      }
      return result
    },

    reduce: function(collection, cb, acc=0) {
      if (Array.isArray(collection)) {
        let index = 0
        for (x of collection) {
          acc=(cb(acc, x, collection))
          index++
        }
      } else {
        for (x in collection) {
          acc=(cb(acc, collection[x], collection))
        }
      }
      return acc
    },

    find: function(collection, cb) {
      if (Array.isArray(collection)) {
        let index = 0
        for (x of collection) {
          if (cb(x)) {
            return x
          }
          index++
        }
      } else {
        for (x in collection) {
          if(cb(collection[x])){
            return x
          }
        }
      }
    },

    filter: function(collection, cb) {
      let result = []
      if (Array.isArray(collection)) {
        let index = 0
        for (x of collection) {
          if (cb(x)) {
            result.push(x)
          }
          index++
        }
      } else {
        for (x in collection) {
          if(cb(collection[x])){
            result.push(x)
          }
        }
      }
      return result
    },

    size: function(collection) {
      let result = 0
      if (Array.isArray(collection)) {
        for (x of collection) {
          result++
        }
      } else {
        for (x in collection) {
          result++
          }
        }
      return result
    },

    first: function(collection, n=1) {
      let result = collection.slice(0, n)
      if (fi.size(result) == 1) {
        return result[0]
      }
      else {
        return result
      }

    },

    last: function(collection, n = 1){

      let result = collection.slice(-n)

      if (fi.size(result) == 1) {
        return result[0]
      }
      else {
        return result
      }

    },

    compact: function(collection){
      let result = []
      for (x of collection) {
        if (x){
          result.push(x)
        }
      }

      return result
    },

    sortBy: function(collection,cb){
      let result = collection.slice()
      function test(a,b) {
        return cb(a)-cb(b)
      }
      return result.sort(test)
    },

    flatten: function(collection, shallow=false){
      let result = []

      for (x1 of collection) {
        if (Array.isArray(x1)){
          if (shallow){
            for(x2  of x1){
              result.push(x2)
            }
          }
          else {
            for(x2  of fi.flatten(x1)){
              result.push(x2)
            }
          }
        }
        else {
          result.push(x1)
        }
      }

      return result
    },

    uniq: function(collection, isSorted=false, cb=undefined){
      let result = []
      let computedResult = []
      if (cb) {
        for (x of collection) {
          if (!(computedResult.includes(cb(x)))) {
            computedResult.push(cb(x))
            result.push(x)
          }
        }
        return result
      }
      for (x of collection) {
        if (!(result.includes(x))) {
          result.push(x)
        }
      }
      return result
    },



    keys: function(collection){
      let result = []
      for (key in collection) {
        result.push(key)
      }
      return result
    },

    values: function(collection){
      let result = []
      for (key in collection) {
        result.push(collection[key])
      }
      return result
    },

    functions: function(collection){
      function isAFunction(elem){
        return typeof collection[elem] === 'function'
      }

      return fi.filter(Object.getOwnPropertyNames(collection), isAFunction)
    },

    giveMeMore: function() {
      return true
    }
  }
})()

fi.libraryMethod()
