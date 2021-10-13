const LcBtn = document.querySelector("#lcBtn")
const HomeBtn = document.querySelector("#homeBtn")

LcBtn.onclick = openLcPage = () => {
    window.location.href = "./Lista.html"
}

HomeBtn.onclick = openHomePage = () => {
    window.location.href = "./index.html"
}


const nameIpt = document.querySelector("#nameIpt")
const sendBtn = document.querySelector("#nameSend")

sendBtn.onclick = send = async () => {
    if (nameIpt.value != "") {
        const data = {
            convidado: nameIpt.value
        }
        axios.post("https://convite-duda.herokuapp.com/listas", data)
        nameIpt.value = ""
    } else {
        alert("Insira seu nome por favor")
    }
}