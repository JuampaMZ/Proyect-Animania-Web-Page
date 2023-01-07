let icon_hamburg = document.getElementsByClassName("header-nav-icon-hambur")
let icon_cross = document.getElementsByClassName("header-nav-mobile-icon-cross")

let nav_hidden_mobile = document.getElementsByClassName("header-nav-mobile")
let ul_hidden_mobile = document.getElementsByClassName("header-nav-mobile-ul")

icon_hamburg[0].addEventListener("click", show_nav_mobile);
icon_cross[0].addEventListener("click", show_nav_mobile);

function show_nav_mobile(event) {
    nav_hidden_mobile[0].classList.toggle("show-nav-mobile")
    ul_hidden_mobile[0].classList.toggle("show-nav-mobile-ul")
    console.log(event);
    console.log(icon_hamburg[0]);
    if (event.target == icon_hamburg[0]) {
        icon_hamburg[0].classList.add("d-none")
        icon_cross[0].classList.remove("d-none")
    }
    if (event.target == icon_cross[0]) {
        icon_cross[0].classList.add("d-none")
        icon_hamburg[0].classList.remove("d-none")
    }
}

let move_left = document.getElementsByClassName("main-section-gallery-slider-viewer-move-left")
let move_right = document.getElementsByClassName("main-section-gallery-slider-viewer-move-right")
let slides = document.getElementsByClassName("main-section-gallery-slider-viewer-slides")
let targets = document.getElementsByClassName("target")

move_left[0].addEventListener("click", mover_left)
move_right[0].addEventListener("click", mover_right)

function mover_left(event) {
    for (let i = 0; i < slides[0].children.length; i++) {
        if (slides[0].children[i].classList.contains('d-none')) {
            slides[0].children[i].classList.remove('d-none')
            slides[0].children[i].classList.add('translate-l')
            continue
        }

        if (slides[0].children[i].classList.contains('translate-l')) {
            slides[0].children[i].classList.add('translate')
            slides[0].children[i].classList.remove('translate-l')
            continue
        }

        if (slides[0].children[i].classList.contains('translate-r')) {
            slides[0].children[i].classList.add('d-none')
            slides[0].children[i].classList.remove('translate-r') 
            continue
        }

        if (slides[0].children[i].classList.contains('translate')) {
            slides[0].children[i].classList.remove('translate')
            slides[0].children[i].classList.add('translate-r')
            for (let j = 0; j < targets.length; j++) {
                console.log('hola');
                if (targets[j].classList.contains('active')){
                    targets[j].classList.remove('active')
                    if (j == 0) {
                        targets[(targets.length)-1].classList.add('active')
                    } else {
                        targets[j-1].classList.add('active')
                    }  
                    break
                }
            }
            continue
            
        }
    }
}

function mover_right(event) {
    for (let i = 0; i < slides[0].children.length; i++) {
        if (slides[0].children[i].classList.contains('d-none')) {
            slides[0].children[i].classList.remove('d-none')
            slides[0].children[i].classList.add('translate-r')
            continue
        }

        if (slides[0].children[i].classList.contains('translate-l')) {
            slides[0].children[i].classList.add('d-none')
            slides[0].children[i].classList.remove('translate-l')
            continue
        }

        if (slides[0].children[i].classList.contains('translate-r')) {
            slides[0].children[i].classList.add('translate')
            slides[0].children[i].classList.remove('translate-r')
            continue
        }

        if (slides[0].children[i].classList.contains('translate')) {
            slides[0].children[i].classList.remove('translate')
            slides[0].children[i].classList.add('translate-l')
            for (let j = 0; j < targets.length; j++) {
                console.log('hola');
                k = Number(j+1);
                if (targets[j].classList.contains('active')){
                    targets[j].classList.remove('active')
                    if ((j+1) < targets.length) {
                        targets[j+1].classList.add('active')
                    } else {
                        targets[0].classList.add('active')
                    }  
                    break
                }
            }
            continue
        }
    }
}
