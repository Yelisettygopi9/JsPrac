function a() {
    para.innerHtml = "<h1>Hello good afternoon/<h1>"
}
function b() {
    para.style.background = "green"
}
let para = document.getElementById("para")
let btn = document.getElementById("btn")
btn.addEventListener("click", () => {
    para.innerHTML = "<h1>Hello please study</h1>"
})
btn.addEventListener("dblclick", () => {
    para.style.background = "green"
})