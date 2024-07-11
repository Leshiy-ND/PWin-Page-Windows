function spawn_new_window(title = '', body_html = '', w = '', h = '') {
    let root = document.querySelector('.pwin_root')

    let new_window = document.createElement('div')
    new_window.className = 'pwin_win'
    if (w != '') new_window.style.width  = w + 'px'
    if (h != '') new_window.style.height = h + 'px'
    new_window.setAttribute('pwin_new', '')
    root.appendChild(new_window)

    let top_bar = document.createElement('div')
    top_bar.className = 'top_bar'
    new_window.appendChild(top_bar)

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

    let btn_close = document.createElement('span')
    btn_close.className = 'material-symbols-outlined pwin_close'
    btn_close.textContent = 'close'
    top_bar.appendChild(btn_close)

    let body = document.createElement('div')
    body.className = 'pwin_body'
    body.innerHTML = body_html
    new_window.appendChild(body)
}
