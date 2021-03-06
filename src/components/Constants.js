const auth = {
  loggedIn: false,
  user: null,
  gapi: null,
  isAuthenticated(){
    if (this.loggedIn){
        //BACKEND VERIFY USER
        return true; 
    }
      return false; 
  },
  authenticate(googleUser) {
      //BACKEND VERIFY USER RETURN FALSE IF NOT VERIFIED
      this.user = googleUser; 
    this.loggedIn = true;
      return true; 
  },
  signout() {
    this.user = null;
    this.loggedIn = false; 
  },
  getUserID(){
        
      if (this.gapi)
          return this.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getId();
      return null;
  }
}

export {auth}