let WEBISTE_DIR = ''
let highest_draggable = 10



document.addEventListener('DOMContentLoaded', () => {
    let curentURL = window.location.href
    WEBISTE_DIR = curentURL.substring(0, curentURL.lastIndexOf('/') + 1)

    register_pregenerated_draggables()
})



function register_pregenerated_draggables() {
    document.querySelectorAll('.draggable_window').forEach(draggable_window => {
        highest_draggable += 1

        document.querySelectorAll('.draggable_window').forEach(other_draggable => {
            other_draggable.style.zIndex -= 1
        })
        draggable_window.style.zIndex = highest_draggable
        console.log(draggable_window.style.zIndex)

        let isGrabbed = false, startX, startY, initialX, initialY

        draggable_window.addEventListener('mousedown', (e) => {
            document.querySelectorAll('.draggable_window').forEach(other_draggable => {
                other_draggable.style.zIndex -= 1
            })
            draggable_window.style.zIndex = highest_draggable
            console.log(draggable_window.style.zIndex)
        })

        draggable_window.querySelector('.draggable_handle').addEventListener('mousedown', (e) => {
            isGrabbed = true
            startX = e.clientX
            startY = e.clientY
            initialX = draggable_window.offsetLeft
            initialY = draggable_window.offsetTop
        })
    
        draggable_window.querySelector('.draggable_handle').addEventListener('mousemove', (e) => {
            if (isGrabbed) {
                const newX = initialX + e.clientX - startX
                const newY = initialY + e.clientY - startY

                draggable_window.style.left = `${newX}px`
                draggable_window.style.top  = `${newY}px`
            }
        })
    
        draggable_window.querySelector('.draggable_handle').addEventListener('mouseup', (e) => {
            isGrabbed = false
        })
    })
}