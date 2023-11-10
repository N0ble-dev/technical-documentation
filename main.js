let alert = document.getElementById("alert")
// 1- get all elements of code and all elements of icons
// 2- maping on icons element after turn it to array
// 3- pass index of element that we clicked
// 4- copy the code have the same index 
let codes = document.getElementsByTagName("code")
let cloneCode = document.getElementsByClassName("cloneCode")
let cloneCodeArr = [...cloneCode]
cloneCodeArr.map((ele, index) => { ele.addEventListener("click", () => handleClick(index)) })
function handleClick (index)
{
    let copyCode = codes[index].innerHTML
    navigator.clipboard.writeText(copyCode)
    alert.style.opacity = 1
    setTimeout(() => {
        alert.style.opacity = 0
    }, 2000)
}
