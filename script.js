


document.addEventListener('DOMContentLoaded', () => {
    const root = document.createElement('div')
    root.className = 'pwin_root'
    document.body.appendChild(root)

    document.getElementById('spawn_window').onclick = () => {
        spawn_new_window('Easter Egg', '<h2>Hello there.</h2><p>General Kenobi!</p>')
        register_new_windows()
    }
})
