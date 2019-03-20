export default class SwapiService {

  _apiBase = 'https://swapi.co/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${this._apiBase}${url}, received ${res.status}`);
    }

    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResource(`/people/${id}/`);
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results;
  }

  getPlanet(id) {
    return this.getResource(`/planets/${id}/`);
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results;
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}/`);
  }
}

const swapi = new SwapiService();
// swapi.getAllPeople().then((people) => {
//   people.forEach(p => {
//     console.log(p.name);
//   });
// });

// swapi.getPerson(3).then((person) => {
//   console.log(person.name);
// });

// swapi.getAllPlanets(3).then((planets) => {
//   console.log(planets);
// });

swapi.getPlanet(3).then((planet) => {
  console.log(planet.name);
});

swapi.getStarship(3).then((starship) => {
  console.log(starship.name);
});

/**
 * 2
  */

// const getResource = async (url) => {
//   const res = await fetch(url);

//   if (!res.ok) {
//     throw new Error(`Could not fetch ${url}, received ${res.status}`);
//   }

//   return await res.json();
// }

// getResource('https://swapi.co/api/people/1/')
//   .then((body) => {
//     console.log(body);
//   })
//   .catch((err) => {
//     console.error('Could not fetch', err);
//   });

/**
 * 1
  */

// fetch('https://swapi.co/api/people/1/')
//   .then((res) => {
//     return res.json();
//   })
//   .then((body) => {
//     // console.log(body);
//   });