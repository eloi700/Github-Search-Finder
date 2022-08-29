//Init github / UI
const github = new Github;
const ui = new UI;

//Search Input
const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e)=>{
    //Get Input Text
    const userText = e.target.value;
    if(userText !== ''){
        //Make http call
        github.getUser(userText)
        //return a promise by using .then
        .then(data => {
            if(data.profile.message === 'Not Found'){
                //show alert
                alert

            }else{
                //show profile when it fetch
                ui.showProfile(data.profile)
            }
        })
    }else{
        //clear the profile after input profile name/text

    }

})