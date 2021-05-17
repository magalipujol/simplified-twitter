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
      max_tweet: 200,
      error: "",
      // this is used to display or hide the registration form
      registered: false,
      tweetMsg = "",
      tweets: [],
    },
  methods: {
    registerAccount(){
      if (this.name !== "" && this.email !== "" && this.password !== "" ) 
      {
          this.userData.id = ++this.usersID,
          this.userData.name = this.name,
          this.userData.email = this.email,
          this.userData.password = this.password,
          this.registered = true;
           
      }  else {
        this.error = "Make sure you completed all form fields"
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
  
},
sendTweet() {
  // store the tweet in the tweets property
  // this takes the tweets array and adds in it an object to represent a single 
  //tweet with text and date properties
  this.tweets.unshift(
    {
      text: this.tweetMsg,
      date: new Date().toLocaleTimeString()
    }
    )
    // empty the tweetMsg property
    this.tweetMsg = ""
  //transform the object into a string
  stringTweets = JSON.stringify(this.tweets)
  // this adds the object above to the local storage
  localStorage.setItem('simple_tweet_tweets', stringTweets)
},
created () {
  // check if the user is registered and set the registered to true
  if (localStorage.getItem('simple_tweet_registered') === true) {
    this.registered = true
  }
// when the page is refreshed the info in userData is actualised
  if (localStorage.getItem('simple_tweet_registered_user')) {
    this.userData = JSON.parse(localStorage.getItem('simple_tweet_registered_user'))
  }
},
},
)