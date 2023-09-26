// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => (response.json()))
// .then(json => JSON.stringify(json))
// .then(str => console.log(str));

async function jsonFetch() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let jsonData = await response.json();
    let strData = await JSON.stringify(jsonData)
    console.log(strData);
}
jsonFetch();

//mdn docs Fetch API 사용하기
// async function logJSONData() {
//     const response = await fetch("http://example.com/movies.json");
//     const jsonData = await response.json();
//     console.log(jsonData);
//   }