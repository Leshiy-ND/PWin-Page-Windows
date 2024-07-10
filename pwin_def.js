function spawn_new_window_def(root_id, title, body_html) {
    let root = document.getElementById(root_id)

    let new_window = document.createElement('div')
    new_window.className = 'pwin_win'
    new_window.style.width = '300px'
    new_window.setAttribute('new', '')
    root.appendChild(new_window)

    let top_bar = document.createElement('div')
    top_bar.className = 'top_bar'
    new_window.appendChild(top_bar)

    let icon = document.createElement('span')
    icon.textContent = 'i'
    top_bar.appendChild(icon)

    let stretched = document.createElement('div')
    stretched.className = 'stretched'
    top_bar.appendChild(stretched)

    let title_bar = document.createElement('div')
    title_bar.className = 'title_bar'
    title_bar.innerHTML = '<span>' + title + '</span>'
    stretched.appendChild(title_bar)

    let handle = document.createElement('div')
    handle.className = 'pwin_hand'
    stretched.appendChild(handle)

    let buttons = document.createElement('span')
    buttons.textContent = 'buttons'
    top_bar.appendChild(buttons)

    let body = document.createElement('div')
    body.className = 'pwin_body'
    body.innerHTML = body_html
    new_window.appendChild(body)
}
