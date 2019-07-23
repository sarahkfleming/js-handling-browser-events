/*
    Practice: Mirror, Mirror in the Code
    The learning objective for this exercise is to listen for the keyup event, and update the DOM when it is broadcast.

    Create an input field in your DOM. Give it an id of message.
    Create two article elements with unique id values. Use Flexbox to display them in a row, each taking 50% of the width of the browser.
    Give each article a different border color.

    Write an event listener that listens for the keyup event on the input field.
    
    The event handler function should update the textContent property of both sections.
*/

// Write an event listener that listens for the keyup event on the input field.

const getMessageInput = document.querySelector("#message")

const messageOutput1 = document.querySelector("#article--1")
const messageOutput2 = document.querySelector("#article--2")

getMessageInput.addEventListener("keyup", event => {
    messageOutput1.textContent = event.target.value
    messageOutput2.textContent = event.target.value
})
