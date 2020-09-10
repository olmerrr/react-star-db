
// fetch('https://swapi.dev/api/people/1/')
//     .then((body) => {
//     return body.json();
//     }) //получил данные
//     .then((body) => {
//         console.log(body) // создал еще промис и вывел данные
//     });
export  default class SwapiService {

    _apiBase = 'https://swapi.dev/api'; // "_"означает, что это приватная часть класса,
    // ее не следует использ или измен с наружи
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`); // await - означает ждать

        if (!res.ok) {
            throw new Error(`Could not fetch ${url},`
                + ` received ${res.status}`)
        }
        return  await res.json();
    }
    async getAllPeople(){
        const res = await this.getResource(`/people/`);
        return res.results;
    }
    getPerson(id){
        return this.getResource(`/people/${id}/`);
    }
};
const swapi = new SwapiService();
swapi.getAllPerson(3).then((p) =>{
    console.log(p.name)
});