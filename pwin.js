let highest_draggable = 10



function register_new_windows() {
    document.querySelectorAll('.pwin_win').forEach(pwin_window => {
        if (!pwin_window.hasAttribute('new')) return
        pwin_window.removeAttribute('new')

        highest_draggable += 1

        document.querySelectorAll('.pwin_win').forEach(other_draggable => {
            other_draggable.style.zIndex -= 1
        })
        pwin_window.style.zIndex = highest_draggable

        let isGrabbed = false, startX, startY, initialX, initialY

        pwin_window.addEventListener('mousedown', (e) => {
            document.querySelectorAll('.pwin_win').forEach(other_draggable => {
                other_draggable.style.zIndex -= 1
            })
            pwin_window.style.zIndex = highest_draggable
        })

        let handle = pwin_window.querySelector('.pwin_hand')

        handle.addEventListener('mousedown', (e) => {
            isGrabbed = true
            startX = e.clientX
            startY = e.clientY
            initialX = pwin_window.offsetLeft
            initialY = pwin_window.offsetTop
            handle.style.transform = 'scale(100.0)'
            handle.style.cursor = 'grabbing'
        })
    
        handle.addEventListener('mousemove', (e) => {
            if (isGrabbed) {
                const newX = initialX + e.clientX - startX
                const newY = initialY + e.clientY - startY

                pwin_window.style.left = `${newX}px`
                pwin_window.style.top  = `${newY}px`
            }
        })
    
        handle.addEventListener('mouseup', (e) => {
            isGrabbed = false
            handle.style.transform = 'scale(1.0)'
            handle.style.cursor = ''
        })
    })
}