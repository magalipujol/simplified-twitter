//in the documentation app it's called vm
let app = new Vue({
    //DOM element
  el: "#app",
  //Data element
  data: {
      userData: {},
      name: "",
      email: "",
      password: "",
      max_length: 25,
      max_pass_length:16,    
    },
  methods: {
    registerAccount() {
      // this variables record user info
      this.userData.name = ""
      this.userData.email = ""
      this.userData.password = ""

      // this variables are used when you want to clear registration fields
      this.name = ""
      this.email = ""
      this.password = ""
    }
  },
})