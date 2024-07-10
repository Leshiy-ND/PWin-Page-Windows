let WEBISTE_DIR = ''



document.addEventListener('DOMContentLoaded', () => {
    let curentURL = window.location.href
    WEBISTE_DIR = curentURL.substring(0, curentURL.lastIndexOf('/') + 1)

    const root = document.createElement('div')
    root.className = 'pwin_root'
    root.id = 'fixed_root'
    document.body.appendChild(root)

    document.getElementById('spawn_window').onclick = () => {
        spawn_new_window_def('fixed_root', 'New window', '<h2>Hello there.</h2><p>General Kenobi!</p>')
        register_new_windows()
    }
})
