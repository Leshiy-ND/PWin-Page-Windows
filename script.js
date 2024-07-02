let WEBISTE_DIR = ''
let draggables = []

document.addEventListener('DOMContentLoaded', () => {
    let curentURL = window.location.href
    WEBISTE_DIR = curentURL.substring(0, curentURL.lastIndexOf('/') + 1)

    document.querySelectorAll('.draggable_div').forEach(draggable_div => {
        let draggable_id = draggables.length
        draggables.push({
            // id: draggable_id,
            isDragged: false,
            startX: 0,
            startY: 0,
            initialX: 0,
            initialY: 0,
        })
        
        draggable_div.setAttribute('draggable_id', draggable_id)

        draggable_div.addEventListener('mousedown', (e) => {
            let id = draggable_div.getAttribute('draggable_id')

            draggables[id].isDragged = true
            draggables[id].startX = e.clientX
            draggables[id].startY = e.clientY
            draggables[id].initialX = draggable_div.offsetLeft
            draggables[id].initialY = draggable_div.offsetTop
        })
    
        draggable_div.addEventListener('mousemove', (e) => {
            let id = draggable_div.getAttribute('draggable_id')

            if (draggables[id].isDragged) {
                const newX = draggables[id].initialX + e.clientX - draggables[id].startX
                const newY = draggables[id].initialY + e.clientY - draggables[id].startY

                draggable_div.style.left = `${newX}px`
                draggable_div.style.top  = `${newY}px`
            }
        })
    
        draggable_div.addEventListener('mouseup', (e) => {
            let id = draggable_div.getAttribute('draggable_id')

            draggables[id].isDragged = false
        })
    })
})
