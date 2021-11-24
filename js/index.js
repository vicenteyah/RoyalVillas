const app = new Vue({
    el:'#app',
    data:{
        props:{
            tinyTitle: 'Our Team',
            mainTitle: 'A Dedicated Team of Experts',
            paragraph: `Passion, experiencie and a fierce commitment to education
                        are the cornerstones of our success in the beauty industry`,
            paragraphTwo: ` We believe that being the largest SPA in the area is not enough
                        in itself to satisfy the needs of our customers. For this reason
                        we have built up a staff of specialized  professionals who are proud to
                        welcome you to our hotel, present What We Do, listen to your needs and 
                        guarantee well-being and relaxation during your stay at our SPA Resort.`,
            paragraphThree: ` Everyone in our team is a certified specialist capable of delivering a unique
                        service of quality you won't find anywhere else in modern spa and resort industry.`
        },
        btn:{
            lm: 'LEARN MORE',
            vall: 'VIEW ALL TEAM',
            gt:'GET IN TOUCH',
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