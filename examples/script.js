


document.addEventListener('DOMContentLoaded', () => {
    const root = document.createElement('div')
    root.className = 'pwin_root'
    document.body.appendChild(root)

    let gen = document.getElementById('pwin_gen')

    let title = document.createElement('input')
    title.type = 'text'
    title.value = 'New window'
    gen.appendChild(title)

    let body = document.createElement('textarea')
    body.style.width  = '40rem'
    body.style.height = '10rem'
    body.value = '<h2>Lorem ipsum</h2>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel tempus diam, id bibendum ante. Pellentesque viverra libero a ex tempor hendrerit. Cras quis convallis metus. Aenean vel ligula vitae augue facilisis commodo id a elit. Donec in eleifend ligula. Proin vestibulum nisl rutrum tortor convallis, quis suscipit elit tempus. Vivamus diam lacus, finibus eget erat in, suscipit luctus est. Donec eleifend ornare eleifend.</p>'
    gen.appendChild(body)

    let w = document.createElement('input')
    w.type = 'number'
    w.value = '500'
    gen.appendChild(w)

    let h = document.createElement('input')
    h.type = 'number'
    h.value = '300'
    gen.appendChild(h)

    let button = document.createElement('button')
    button.textContent = 'Generate'
    gen.appendChild(button)

    button.onclick = () => {
        spawn_new_window(title.value, body.value, w.value, h.value)
        register_new_windows()
    }
})
