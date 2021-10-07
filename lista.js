const LcBtn = document.querySelector("#lcBtn")
const HomeBtn = document.querySelector("#homeBtn")
const listElement = document.querySelector("#list")

LcBtn.onclick = openLcPage = () => {
    window.location.href = "./Lista.html"
}

HomeBtn.onclick = openHomePage = () => {
    window.location.href = "./index.html"
}

var lista = []

const loadList = async () => {
    const response = await axios.get("https://convite-duda.herokuapp.com/listas")
    var i = 0
    while (i < response.data.length) {
        var {convidado} = response.data[i]
        lista.push(convidado)
        i++
    }
    console.log(lista)

    listElement.innerHTML = ""

    for(convidado of lista) {
        console.log(convidado)
        const convidadoElement = document.createElement("li")
        const convidadoText = document.createTextNode(convidado)

        convidadoElement.appendChild(convidadoText)
        listElement.appendChild(convidadoElement)
    }
}
loadList()