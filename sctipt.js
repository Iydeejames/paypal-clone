// Navigation
const dropdownItems = document.querySelectorAll('.dropdown-hover')

if(window.innerHeight < 1000) {
    const menuIcon = document.querySelector('.menu')
    const navbar = document.querySelector('.navbar')

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('change')

        if(!navbar.classList.contains('change')) {
            document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
                dropdown.style.left = '-20rem'
            })
        }
    })

    document.querySelectorAll('.show-dropdown').forEach(link => {
        link.addEventListener('click', () => {
            link.nextElementSibling.style.left = '0'
        })
    })

    document.querySelectorAll('.dropdown-heading-link').forEach(headingLink => {
        headingLink.addEventListener('click', () => {
        headingLink.parentElement.parentElement.style.left = '-20rem'
    })
    })
}
// End of Navigation