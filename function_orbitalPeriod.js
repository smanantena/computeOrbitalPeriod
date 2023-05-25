function orbitalPeriod(arr) {
    let result = [];
    arr.forEach(
      item => result.push(computeMasseSingleOrbitalPeriod(item))
    );
    return result;
  }
  
  function computeMasseSingleOrbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    let a = earthRadius + arr.avgAlt;
    let result = Math.sqrt(Math.pow(a, 3) / GM) * 2 * Math.PI;
    return {"name": arr["name"], "orbitalPeriod": Math.round(result)};
  }
  
  console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));
  
  //console.log(computeMasseSingleOrbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));