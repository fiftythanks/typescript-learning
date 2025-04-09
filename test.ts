function padLeft(padding: number | string, input: string): string {
  if (typeof padding === 'number') return ' '.repeat(padding) + input;
  return padding + input;
}

function printAll(strs: string | null | string[]) {
  if (strs && typeof strs === 'object') {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === 'string') {
    console.log(strs);
  } else {
    // do nothing
  }
}

function getUsresOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }
  return "Nobody's here. :(";
}

function multiplyAll(
  values: number[] | undefined,
  factor: number
): number[] | undefined {
  if (!values) {
    return values;
  } else {
    return values.map((x) => x * factor);
  }
}

function example(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toUpperCase();
    y.toLowerCase();
  } else {
    console.log(x);
    console.log(y);
  }
}

interface Container {
  value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
  if (container.value != null) {
    console.log(container.value);
    container.value *= factor;
  }
}

type Fish = { swim: () => void; name: string };
type Bird = { fly: () => void; name: string };

function move(animal: Fish | Bird) {
  if ('swim' in animal) {
    return animal.swim();
  }

  return animal.fly();
}

function example2() {
  let x: string | number | boolean;

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

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getSmallPet(name: string): Fish | Bird {
  const randomizer = Math.random() * 0.5;
  if (randomizer > 0.5) return { swim: () => {}, name } as Fish;
  return { fly: () => {}, name } as Bird;
}

const zoo: (Fish | Bird)[] = [
  getSmallPet('Misha'),
  getSmallPet('sharkey'),
  getSmallPet('birdy'),
];
const underWater1: Fish[] = zoo.filter(isFish);
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === 'sharkey') return false;
  return isFish(pet);
});

interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  sideLength: number;
}

interface Triangle {
  kind: 'triangle';
  sideLength: number;
}

type Shape = Circle | Square | Triangle;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
