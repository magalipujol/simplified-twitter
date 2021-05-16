//in the documentation app it's called vm
let app = new Vue({
    //DOM element
  el: "#app",
  //Data element
  data: {
    title: "My portfolio",
    titleHTML: "John Dow <span class='badge'>portfolio</span>",  
    alert: "This is an alert message!",
    projects: [
      { title: "portfolio", desc: "Lorem ipsum" },
      { title: "twitter clone", desc: "Lorem ipsum" },
    ],
    dynamicClass: "projects",
    dynamicID: "projects_section",
  },
});
