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

    let title_bar = document.createElement('div')
    title_bar.className = 'title'
    title_bar.textContent = title
    top_bar.appendChild(title_bar)

    let stretched = document.createElement('div')
    stretched.className = 'stretched'
    top_bar.appendChild(stretched)

    let handle = document.createElement('div')
    handle.className = 'pwin_hand'
    stretched.appendChild(handle)

    let btn_close = document.createElement('span')
    btn_close.className = 'pwin_close'
    top_bar.appendChild(btn_close)

    let smb_c = document.createElement('div')
        smb_c.className = 'smb c'
        btn_close.appendChild(smb_c)
    let smb_ht = document.createElement('div')
        smb_ht.className = 'smb ht'
        btn_close.appendChild(smb_ht)
    let smb_hb = document.createElement('div')
        smb_hb.className = 'smb hb'
        btn_close.appendChild(smb_hb)
    let smb_lt = document.createElement('div')
        smb_lt.className = 'smb lt'
        btn_close.appendChild(smb_lt)
    let smb_lb = document.createElement('div')
        smb_lb.className = 'smb lb'
        btn_close.appendChild(smb_lb)
    let smb_rt = document.createElement('div')
        smb_rt.className = 'smb rt'
        btn_close.appendChild(smb_rt)
    let smb_rb = document.createElement('div')
        smb_rb.className = 'smb rb'
        btn_close.appendChild(smb_rb)
    let smb_et = document.createElement('div')
        smb_et.className = 'smb et'
        btn_close.appendChild(smb_et)
    let smb_eb = document.createElement('div')
        smb_eb.className = 'smb eb'
        btn_close.appendChild(smb_eb)

    let bg = document.createElement('div')
        bg.className = 'bg'
        new_window.appendChild(bg)
    let bg_t = document.createElement('div')
        bg_t.className = 'bg t'
        bg.appendChild(bg_t)
    let bg_b = document.createElement('div')
        bg_b.className = 'bg b'
        bg.appendChild(bg_b)
    let bg_br = document.createElement('div')
        bg_br.className = 'bg br'
        bg.appendChild(bg_br)
    let border_tl = document.createElement('div')
        border_tl.className = 'border tl'
        new_window.appendChild(border_tl)
    let border_tr = document.createElement('div')
        border_tr.className = 'border tr'
        new_window.appendChild(border_tr)
    let border_bl = document.createElement('div')
        border_bl.className = 'border bl'
        new_window.appendChild(border_bl)
    let border_b = document.createElement('div')
        border_b.className = 'border b'
        new_window.appendChild(border_b)
    let border_r = document.createElement('div')
        border_r.className = 'border r'
        new_window.appendChild(border_r)
    let border_br = document.createElement('div')
        border_br.className = 'border br'
        new_window.appendChild(border_br)

    let body = document.createElement('div')
    body.className = 'pwin_body'
    body.innerHTML = body_html
    new_window.appendChild(body)
}
