// import axios from "axios";
let activities;
fetch("http://localhost:3000/api/activites").then(response => {
    if(response.ok){
        return response.json()
    }
}).then(data => {
    activities = data
    console.log(activities)
}).catch(error => {
    console.log(`the error is ${error}`)
})