(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Hide topbar on scroll
   */
  let selectTopbar = select('.topbar')
  let selectMenubar = select('.menubar')
  if (selectMenubar) {
    const menuScrolled = () => {
      if (window.scrollY > 100) {
        selectMenubar.classList.add('menu-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.add('topbar-scrolled')
        }
      } else {
        selectMenubar.classList.remove('menu-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.remove('topbar-scrolled')
        }
      }
    }
    window.addEventListener('load', menuScrolled)
    onscroll(document, menuScrolled)
  }

})()
