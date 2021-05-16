//in the documentation app it's called vm
let app = new Vue({
    //DOM element
  el: "#app",
  //Data element
  data: {
      userData: {},
      // this variable tries to make de app more realistic, 
      // but I don't have a database to store all user details
      usersID: 0,
      name: "",
      email: "",
      password: "",
      max_length: 25,
      max_pass_length:16,    
      error: "",
      // this is used to display or hide the registration form
      registered: false,
    },
  methods: {
    registerAccount(){
      if (this.name !== "" && this.email !== "" && this.password !== "" ) 
      {
          this.userData.id = ++this.usersID,
          this.userData.name = this.name,
          this.userData.email = this.email,
          this.userData.password = this.password
           
      }  else {
        this.error = "Complete all the form fields"
    }
  
  // Add registration data to the local storage 
localStorage.setItem('simple_tweet_registered', true)
// add the whole userData object as JSON string
localStorage.setItem('simple_tweet_registered_user', JSON.stringify(this.userData))
  
  // Clear the registration inputs 
  this.name = "";
  this.email = "";
  this.password = "";
  }
  
}
  },
)