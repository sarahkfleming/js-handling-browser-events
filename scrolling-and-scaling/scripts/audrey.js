const audrey = document.getElementById("audrey")

let lastKnownScrollPosition = 0
/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
document.addEventListener("scroll", function (event) {
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */
   lastKnownScrollPosition = window.scrollY
   audrey.style.width = `${lastKnownScrollPosition / 3}px`

    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
   audrey.style.height = `${lastKnownScrollPosition / 4}px`
})