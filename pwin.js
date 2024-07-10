let highest_draggable = 0



function register_new_windows() {
    document.querySelectorAll('.pwin_win').forEach(pwin_window => {
        if (!pwin_window.hasAttribute('new')) return
        pwin_window.removeAttribute('new')

        highest_draggable += 1
        pwin_window.style.zIndex = highest_draggable

        let isGrabbed = false, startX, startY, initialX, initialY

        // Clicking on window brings it forward
        pwin_window.addEventListener('mousedown', (e) => {
            if (pwin_window.style.zIndex == highest_draggable) return
            document.querySelectorAll('.pwin_win').forEach(other_window => {
                if (pwin_window.style.zIndex < other_window.style.zIndex)
                other_window.style.zIndex -= 1
            })
            pwin_window.style.zIndex = highest_draggable
        })

        // Closes the window. No need to rearrange other windows, as it's aldready done by clicking on the window.
        let btn_close = pwin_window.querySelector('.pwin_close')
        if (btn_close) {
            btn_close.onclick = () => {
                highest_draggable -= 1
                pwin_window.remove()
            }
        }

        // Area you grab to move window
        let handle = pwin_window.querySelector('.pwin_hand')

        if (handle) {
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
        }
    })
}