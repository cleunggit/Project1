// Hamburger menu
// create a namespace object to hold the app
const menu = {}

// create an init method that will run when the page first loads
menu.init = () => {
  // grab all the elements 
  menu.btn = document.querySelector('.header__hamburger')
  menu.menuItems = document.querySelectorAll('.header__menu')
  menu.header = document.querySelector('.header')
  menu.overlay = document.querySelector('.overlay')
  menu.hiddenEls = document.querySelectorAll('.hidden')
  menu.body = document.querySelector('body')

  menu.toggleMenu()
}

// create a function to open the menu
menu.openMenu = () => {
  // add an open class to the header element
  menu.header.classList.add('open')
  // remove hidden class from all elements
  menu.hiddenEls.forEach(el => {
    el.classList.remove('hidden')
  })
  // prevent scrolling when menu is opened
  menu.body.classList.add('no-scroll')
}
// create a function to close and reset the menu
menu.closeMenu = () => {
  console.log('close');
  // reset classes to open state
  if(menu.header.classList.contains('open')) {
    menu.header.classList.remove('open')
  }
  menu.hiddenEls.forEach(el => {
    el.classList.add('hidden')
  })
  menu.body.classList.remove('no-scroll')
}

// create a function to toggle the menu
menu.toggleMenu = () => {
  // add event listener to the button
  menu.btn.addEventListener('click', () => {
  // if header contains open class close the menu
    if (menu.header.classList.contains('open')) {
      menu.closeMenu()
      console.log('close');
  // otherwise, open the menu
    } else {
      menu.openMenu()
      console.log('open');
    }

    // close menu when a link is clicked
    menu.menuItems.forEach(item => {
      item.addEventListener('click', () => {
        menu.closeMenu()
      })
    })
  })
}

menu.init()