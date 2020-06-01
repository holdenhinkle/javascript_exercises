// function objectsEqual(o1, o2) {
//   function compareObjects(01, 02) {
    
//   }
//   if (o1 === o2) return true;

//   let o1Keys = Object.keys(o1);
//   let o2Keys = Object.keys(o2);

//   if (o1.length !== o2.length) return false;

//   for (let i = 0; i < o1Keys.length; i += 1) {
//     if (typeof (o1[o1Keys[i]]) === 'object') {
//       if (!objectsEqual(o1[o1Keys[i]], o2[o1Keys[i]])) return false;
//     } else {
//       if (o1[o1Keys[i]] !== o2[o1Keys[i]]) return false;
//     }
//   }

//   for (let i = 0; i < o1Keys.length; i += 1) {
//     if (typeof (o2[o2Keys[i]]) === 'object') {
//       if (!objectsEqual(o2[o2Keys[i]], o1[o2Keys[i]])) return false;
//     } else {
//       if (o2[o2Keys[i]] !== o1[o2Keys[i]]) return false;
//     }
//   }

//   return true;
// }

function objectsEqual(object1, object2) {
  function bMatchesA(a, b) {
    let keys = Object.keys(a);
  
    for (let i = 0; i < keys.length; i += 1) {
      if (typeof (a[keys[i]]) === 'object') {
        if (!objectsEqual(a[keys[i]], b[keys[i]])) return false;
      } else {
        if (a[keys[i]] !== b[keys[i]]) return false;
      }
    }

    return true;
  }

  if (object1 === object2) return true;

  if ((Object.keys(object1).length !== Object.keys(object2).length) ||
      (!bMatchesA(object1, object2)) ||
      (!bMatchesA(object2, object1))) return false;

  return true;
}

let testObject = { a: 'foo', b: undefined };
console.log(objectsEqual({a: 'foo', b: 'foo', c: testObject, }, {a: 'foo', b: 'foo', c: testObject, })); // true
console.log(objectsEqual({a: 'foo', b: 'foo', c: testObject, }, {a: 'foo', b: 'foo', c: { a: 'foo', b: undefined }, })); // true
console.log(objectsEqual({a: 'foo', b: 'foo', c: testObject, }, {a: 'foo', b: 'foo', c: { a: 'foo', b: null }, })); // false
console.log(objectsEqual({a: 'foo', b: 'foo', c: testObject, }, {a: 'foo', b: 'foo', c: 'object', })); // false

// console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
// console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
// console.log(objectsEqual({}, {}));                                      // true
// console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
