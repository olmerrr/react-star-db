// fetch('https://swapi.dev/api/people/1/')
//     .then((body) => {
//     return body.json();
//     }) //получил данные
//     .then((body) => {
//         console.log(body) // создал еще промис и вывел данные
//     });
class SwapiService {
    _apiBase = 'https://swapi.dev/api'; //"_"означает, что это приватная часть класса,
    // ее не следует использ или измен с наружи
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`); // await - означает ждать

        //в этом блоке я  делаю ошибку от сервера
        if (!res.ok) {
            throw new Error(`Could not fetch ${url},`
                + ` received ${res.status}`)
        }
        //в этом блоке я  делаю ошибку от сервера

        const body = await res.json();
        return body;
    }
    async getAllPeople() {
        const res =  await this.getResource(`/people/`)
        return res.results
    }
    getPerson(id) {
        return this.getResource(`/people/${id}/`)
    }
    async getAllPlanets() {
        const res =  await this.getResource(`/planets/`)
        return res.results
    }
    getPlanet(id) {
        return this.getResource(`/planets/${id}/`)
    }
    async getAllStarships() {
        const res =  await this.getResource(`/starships/`)
        return res.results
    }
    getStarship(id) {
        return this.getResource(`/starships/${id}/`)
    }
}
const swapi = new SwapiService();
swapi.getAllPerson(7).then( (p) => {
        console.log(p.name)
});
