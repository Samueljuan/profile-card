// Slide up down

const contactContent = document.getElementsByClassName('contact-content'),
   contactHeader = document.querySelectorAll('.contact-header')

function toggleContact() {
   let itemClass = this.parentNode.className

   for (i = 0; i < contactContent.length; i++) {
      contactContent[i].className = 'contact-content contact-close'
   }
   if (itemClass === 'contact-content contact-close') {
      this.parentNode.className = 'contact-content contact-open'
   }
}

contactHeader.forEach((el) => {
   el.addEventListener('click', toggleContact)
})