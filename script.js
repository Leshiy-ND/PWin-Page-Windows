let WEBISTE_DIR = ''

document.addEventListener('DOMContentLoaded', () => {
    let curentURL = window.location.href
    WEBISTE_DIR = curentURL.substring(0, curentURL.lastIndexOf('/') + 1)

    document.querySelectorAll('.draggable_div').forEach(draggable_div => {
        let isDragged = false, startX, startY, initialX, initialY

        draggable_div.addEventListener('mousedown', (e) => {
            isDragged = true
            startX = e.clientX
            startY = e.clientY
            initialX = draggable_div.offsetLeft
            initialY = draggable_div.offsetTop
        })
    
        draggable_div.addEventListener('mousemove', (e) => {
            if (isDragged) {
                const newX = initialX + e.clientX - startX
                const newY = initialY + e.clientY - startY

                draggable_div.style.left = `${newX}px`
                draggable_div.style.top  = `${newY}px`
            }
        })
    
        draggable_div.addEventListener('mouseup', (e) => {
            isDragged = false
        })
    })
})
