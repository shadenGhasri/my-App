const btnJoke = document.querySelector(".btn-joke")
const pJoke = document.querySelector(".p-joke")

const createJoke = async () => {

    const res = await getData()
    console.log(res)
    pJoke.textContent = `${res}`

}
const getData = async () => {
    try {
        const config = { headers: { Accept: "application/json" } }
        const response = await axios.get("https://icanhazdadjoke.com/", config)
        return response.data.joke

    } catch (error) {
        console.error(error)
    }
}




btnJoke.addEventListener("click", createJoke)

// right click
const contextMenu = document.querySelector(".context-menu")

document.body.addEventListener('contextmenu', e =>{
    e.preventDefault()
})

