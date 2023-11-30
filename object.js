let city = [
  "berlin",
  "tokyo",
  "nairobi",
  "rio",
  "helsinki",
  "oslo",
  "moscow",
  "seoul",
];
for (let i = 0; i < city.length; i++) {
  console.log(i, ".", city[i]);
}
let usa = {
  california: {
    statePopulation: 39237836,
    cityName: "losAngeles",
    cityPopulation: 10000,
  },
  texas: {
    statePopulation: 29527941,
    cityName: "austin",
    cityPopulation: 10000,
  },
  florida: {
    statePopulation: 21781128,
    cityName: "miami",
    cityPopulation: 10000,
  },
  newYork: {
    statePopulation: 19835913,
    cityName: "ithica",
    cityPopulation: 10000,
  },
  Pennsylvania: {
    statePopulation: 12964056,
    cityName: "harrisburg",
    cityPopulation: 10000,
  },
  illinois: {
    statePopulation: 12671469,
    cityName: "chicago",
    cityPopulation: 10000,
  },
  ohio: {
    statePopulation: 11780017,
    cityName: "columbus",
    cityPopulation: 10000,
  },
  georgia: {
    statePopulation: 10799566,
    cityName: "atlanta",
    cityPopulation: 10000,
  },
  northCarolina: {
    statePopulation: 10551162,
    cityName: "raleigh",
    cityPopulation: 10000,
  },
  michigan: {
    statePopulation: 10050811,
    cityName: "lansing",
    cityPopulation: 10000,
  },
};
console.log("the state",usa.california.cityName, "has a population of", usa.california.statePopulation, "and capital city", usa.california.cityName)