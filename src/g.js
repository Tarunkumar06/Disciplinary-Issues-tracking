if (reg.test(this.state.email) === true) {
    // console.log("ok")
  axios.post('http://localhost:80/user/login', data) 
  .then((result) => {
    //   console.log(result.data)
    var  userDetails = {
          email: result.data.user.email,
          token: result.data.user.confirmationToken,
          role: result.data.user.role[0]
      }
      
      localStorage.setItem("userData",userDetails)
// +JSON.stringify(userDetails);
      console.log('userDetails' +JSON.stringify(userDetails))
    //access the results here....
    alert("Hi" +userDetails.email+ "sucessfully Loggedin")
    this.props.history.push('/Display');

    
// console.log(result)
  })
} 
else{
    alert("Invalid Email")
}