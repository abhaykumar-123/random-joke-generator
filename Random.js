const getBtn = document.querySelector('#btn');
const insert = document.querySelector('#insert');

const generateJokes = async () => {

    try{
        const setHeaders = {
            headers : {
                Accept : "application/json"
            }
        }

        const res = await fetch('https://icanhazdadjoke.com/', setHeaders);
        const data = await res.json();
        insert.innerHTML = data.joke;

    }catch(err){
        console.log(`This is the ${err}`);
    }

}

getBtn.addEventListener('click',generateJokes);
generateJokes();