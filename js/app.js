// Hamburger menu

// create a namespace object to hold the app
const menu = {}

// create an init method that will run when the page first loads
menu.init = () => {
  // grab all the elements 
  menu.btn = document.querySelector('.header__hamburger')
  menu.menuItems = document.querySelectorAll('.header__menu')
  menu.header = document.querySelector('.header')
}

// create a function to open the menu
menu.openMenu = () => {
  // add an open class to the element
  menu.header.classList.add('open')
}
// create a function to close and reset the menu
menu.closeMenu = () => {
  // remove the open class
  if(menu.header.classList.contains('open')) {
    menu.header.remove('open')
  }
}

// create a function to toggle the menu
// if the menu
const toggleMenu = () => {
  menu.btn.addEventListener('click', () => {

    if (menu.header.classList.contains('open')) {
      menu.closeMenu()
    } else {
      openMenu()
    }

    // close menu when a link is clicked
    menu.menuItems.forEach(item => {
      item.addEventListener('click', () => {
        closeMenu()
      })
    })
  })
}

menu.init()