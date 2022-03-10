


const getData = async ()=>{
    try{
        const config = {headers:{Accept :"application/json"}}
        const response = await axios("https://icanhazdadjoke.com/",config)
        const joke = response.data.joke
        console.log(joke)
    }catch(error){
        console.error(error)
    }
}





