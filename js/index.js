const app = new Vue({
    el:'#app',
    data:{
        props:{
            tinyTitle: 'Our Team',
            mainTitle: 'A Dedicated Team of Experts',
            paragraph: `
                Passion, experiencie and a fierce commitment to education
                are the cornerstones of our success in the beauty industry`,
            paragraphTwo: ` 
                We believe that being the largest SPA in the area is not enough
                in itself to satisfy the needs of our customers. For this reason
                we have built up a staff of specialized  professionals who are proud to
                welcome you to our hotel, present What We Do, listen to your needs and 
                guarantee well-being and relaxation during your stay at our SPA Resort.`,
            paragraphThree: ` 
                Everyone in our team is a certified specialist capable of delivering a unique
                service of quality you won't find anywhere else in modern spa and resort industry.`,
            formTitle: 'Contact Us',
            formDescription: `
                if you have any questions concerning our services, please fill out the
                contact form below.`,
        },
        btn:{
            lm: 'LEARN MORE',
            vall: 'VIEW ALL TEAM',
            gt:'GET IN TOUCH',
            formButton: 'SUBMIT',
        },
        users:[
            {
                id: 1,
                name: 'Jessica Copper',
                ocupation: 'Esthetician',
                imgurl:'images/foto1.jpg'
            },
            {
                id: 2,
                name: 'Robert Wagner',
                ocupation: 'Hairdresser', 
                imgurl:'images/foto2.jpg'
            }
        ]
    }
})

//** modal engine **/
const modal = document.querySelector('.modal-container')
const trigger = document.querySelector('.trigger')
const closeButton = document.querySelector('.close-button')

const toogleModal = () => {
    modal.classList.toggle('show-modal')
}

const windowOnClick = (e) => {
    if(e.target === modal){
        toogleModal()
    }
}

trigger.addEventListener('click', toogleModal)
closeButton.addEventListener('click', toogleModal)
window.addEventListener('click', windowOnClick)