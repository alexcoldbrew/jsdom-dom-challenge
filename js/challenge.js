document.addEventListener('DOMContentLoaded', (event) => {

    const counter = document.getElementById("counter")
    let i = 0
    const minus = document.getElementById("minus")
    const plus = document.getElementById("plus")
    const pause = document.getElementById("pause")
    const heart = document.getElementById("<3")
    const list = document.getElementById("list")
    const comment = document.getElementsByTagName("form")[0]

    let life = true

    setTimeout(startTimer)

    function startTimer() {
        setInterval(increase, 1000)
    }

    function increase() {
        i++
        counter.innerText = i
    }

    function decrease() {
        i--
        counter.innerText = i
    }

    
    
    plus.addEventListener('click', increase)
    minus.addEventListener('click', decrease)


    // click pause button: stops timer, disables all buttons except pause,
    // pause now says 'resume'. when resume is clicked, it does the opposite

   
    
    pause.addEventListener('click', function() {
        if (life){
            pause.innerHTML = "resume"
            life = false
        } else {
            pause.innerHTML = "pause"
            life = true
        }
    })

});
