// fetch('https://swapi.dev/api/people/1/')
//     .then((body) => {
//     return body.json();
//     }) //получил данные
//     .then((body) => {
//         console.log(body) // создал еще промис и вывел данные
//     });

const getResource = async (url) => {
    const res = await fetch(url); // await - означает ждать

    //в этом блоке я  делаю ошибку от сервера
    if (!res.ok){
        throw new Error(`Could not fetch ${url},`
        +` received ${res.status}`)
    }
    //в этом блоке я  делаю ошибку от сервера

    const body = await res.json();
    return body;
};
getResource('https://swapi.dev/api/people/12121ds/')
    .then((body) => {
        console.log(body);
    })
    .catch((err) => {
        console.error('Problems baby', err)
    });
//.catch - ошибка которую пишем мы
