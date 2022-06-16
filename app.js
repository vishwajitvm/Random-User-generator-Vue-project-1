const app = Vue.createApp({
    // template: '<h1>Hello {{firstName}} {{ lastname }} </h1>',
    // template: "Email: {{email}}" ,
    data() {
        return {
            firstName: 'vishwajit',
            lastname : "VM" ,
            email : 'vishwajit@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/75.jpg'
        }
    },

    methods: {
        async getUser() {
            const res = await fetch("https://randomuser.me/api") //api fetching
            const { results } = await res.json();
            console.log(results);

            this.firstName = 'preetu',
            this.lastname  = "verma" ,
            this.email  = 'preetu@gmail.com',
            this.gender = 'female',
            this.picture = 'https://randomuser.me/api/portraits/women/75.jpg'
        }
    },
})

app.mount('#app')