function z() {
    let colorname = document.getElementsByClassName("colors")
    let arr = Array.from(colorname)
    arr.forEach((z) => {
        z.addEventListener("mouseover", () => {
            let val = z.innerHTML
            z.style.background = val
        })
        z.addEventListener("mouseout", () => {
            z.style.background = "white"
        })
    })

}