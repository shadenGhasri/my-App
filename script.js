const btnJoke = document.querySelector(".btn-joke")
const ulJoke = document.querySelector(".ul-joke")

const createJoke = async ()=>{
    const res =await getData()
    console.log(res)
    const li = document.createElement("li")
    li.textContent =    `${res}`
    ulJoke.append(li)

}
const getData = async ()=>{
    try{
        const config = {headers:{Accept :"application/json"}}
        const response = await axios.get("https://icanhazdadjoke.com/",config)
        return response.data.joke
        
    }catch(error){
        console.error(error)
    }
}




btnJoke.addEventListener("click",createJoke)





