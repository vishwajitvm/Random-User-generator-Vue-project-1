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
            // this.firstName = 'preetu',
            // this.lastname  = "verma" ,
            // this.email  = 'preetu@gmail.com',
            // this.gender = 'female',
            // this.picture = 'https://randomuser.me/api/portraits/women/75.jpg'

            this.firstName = results[0].name.first,
            this.lastname  = results[0].name.last ,
            this.email  = results[0].email,
            this.gender = results[0].gender,
            this.picture = results[0].picture.large

        }
    },
})

app.mount('#app')