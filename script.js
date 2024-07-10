


document.addEventListener('DOMContentLoaded', () => {
    const root = document.createElement('div')
    root.className = 'pwin_root'
    root.id = 'fixed_root'
    document.body.appendChild(root)

    document.getElementById('spawn_window').onclick = () => {
        spawn_new_window_soma('fixed_root', 'Easter Egg', '<h2>Hello there.</h2><p>General Kenobi!</p>')
        register_new_windows()
    }
})
