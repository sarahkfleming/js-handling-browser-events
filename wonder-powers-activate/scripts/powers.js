// Add the correct string as the first argument to addEventListener()

document.querySelector("#activate-flight").addEventListener("click", event => {
    flightHandlerFunction(event)
})

// Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.
const flightHandlerFunction = () => {
    document.querySelector("#flight").classList.remove("disabled")
    document.querySelector("#flight").classList.add("enabled")
}

document.querySelector("#activate-mindreading").addEventListener("click", event => {
    mindreadingHandlerFunction(event)
})

const mindreadingHandlerFunction = () => {
    document.querySelector("#mindreading").classList.remove("disabled")
    document.querySelector("#mindreading").classList.add("enabled")
}

document.querySelector("#activate-xray").addEventListener("click", event => {
    xrayHandlerFunction(event)
})

const xrayHandlerFunction = () => {
    document.querySelector("#xray").classList.remove("disabled")
    document.querySelector("#xray").classList.add("enabled")
}

document.querySelector("#activate-all").addEventListener("click", event => {
    activatePowersHandlerFunction(event)
})

const activatePowersHandlerFunction = () => {
    const powerClass = document.querySelectorAll(".power")
    powerClass.forEach(element => {
        element.classList.remove("disabled")
        element.classList.add("enabled")
    })
}

document.querySelector("#deactivate-all").addEventListener("click", event => {
    deactivatePowersHandlerFunction(event)
})

const deactivatePowersHandlerFunction = () => {
    const powerClass = document.querySelectorAll(".power")
    powerClass.forEach(element => {
        element.classList.remove("enabled")
        element.classList.add("disabled")
    })
}