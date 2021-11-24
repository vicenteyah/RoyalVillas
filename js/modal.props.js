const app = new Vue({
    el: '#app2',
    data: {
        props: {
            formTitle: 'Contact Us',
            formDescription: `
                if you have any questions concerning our services, please fill out the
                contact form below.
            `,
            formButton: 'SUBMIT',
        }
    }
})