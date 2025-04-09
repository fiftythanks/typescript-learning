function padLeft(padding, input) {
  if (typeof padding === 'number') return ' '.repeat(padding) + input;
  return padding + input;
}
function printAll(strs) {
  if (strs && typeof strs === 'object') {
    for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
      var s = strs_1[_i];
      console.log(s);
    }
  } else if (typeof strs === 'string') {
    console.log(strs);
  } else {
    // do nothing
  }
}
function getUsresOnlineMessage(numUsersOnline) {
  if (numUsersOnline) {
    return 'There are '.concat(numUsersOnline, ' online now!');
  }
  return "Nobody's here. :(";
}
function multiplyAll(values, factor) {
  if (!values) {
    return values;
  } else {
    return values.map(function (x) {
      return x * factor;
    });
  }
}
function example(x, y) {
  if (x === y) {
    x.toUpperCase();
    y.toLowerCase();
  } else {
    console.log(x);
    console.log(y);
  }
}
function multiplyValue(container, factor) {
  if (container.value != null) {
    console.log(container.value);
    container.value *= factor;
  }
}
function move(animal) {
  if ('swim' in animal) {
    return animal.swim();
  }
  return animal.fly();
}
function example2() {
  var x;
  x = Math.random() < 0.5;
  console.log(x);
  if (Math.random() < 0.5) {
    x = 'hello';
    console.log(x);
  } else {
    x = 100;
    console.log(x);
  }
  return x;
}
function isFish(pet) {
  return pet.swim !== undefined;
}
function getSmallPet(name) {
  var randomizer = Math.random() * 0.5;
  if (randomizer > 0.5) return { swim: function () {}, name: name };
  return { fly: function () {}, name: name };
}
var zoo = [getSmallPet('Misha'), getSmallPet('sharkey'), getSmallPet('birdy')];
var underWater1 = zoo.filter(isFish);
var underWater2 = zoo.filter(isFish);
var underWater3 = zoo.filter(function (pet) {
  if (pet.name === 'sharkey') return false;
  return isFish(pet);
});
