let WEBISTE_DIR = ''



document.addEventListener('DOMContentLoaded', () => {
    let curentURL = window.location.href
    WEBISTE_DIR = curentURL.substring(0, curentURL.lastIndexOf('/') + 1)

    document.querySelectorAll('.pwin_win').forEach(pwin => {
        pwin.setAttribute('new', '')
    })
    register_new_windows()

    document.getElementById('spawn_window').onclick = () => {
        
        spawn_new_window_def('pwin_root', 'New window', '<h2>Hello there.</h2><p>General Kenobi!</p>')
        register_new_windows()
    }

})
