class Github{
    constructor(){
        this.client_id = 'c7880d2949a12f357e59';
        this.client_secret = '11b9defa3177913300f4dac845a1a261a737e4e9';
    }

    //Get USER Method
    async getUser(user){
        const profileResponse = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            //returning an profile Object
            // profile: profile OR simply
            profile
        }
    }
}