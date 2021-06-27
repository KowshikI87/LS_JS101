function lightsOn(switches) {
  //create an array with num of elemnet = switches and all are off
  let lights = 'OFF '.repeat(switches).split(' ').slice(0, switches);
  for (let pass = 1; pass <= switches; pass++) {
    for (let li = 1; li <= switches; li++) {
      if (li % pass === 0) {
        if (lights[li - 1] === 'OFF') {
          lights[li - 1] = 'ON';
        } else {
          lights[li - 1] = 'OFF';
        }
      }
    }
  }
  return getOnLights(lights, 'ON');
}

function getOnLights(lights, onValue) {
  let onLights = [];
  for (let i = 0; i < lights.length; i++) {
    if (lights[i] === onValue) onLights.push(i + 1);
  }
  return onLights;
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]