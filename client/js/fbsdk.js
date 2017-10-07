// This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      localStorage.setItem('fbaccesstoken', response.authResponse.accessToken)
      // window.location.href="index.html"
      // Logged into your app and Facebook.
      testAPI();
    } else {
      // The person is not logged into your app or we are unable to tell.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    }
  }

  function FBlogin() {
    FB.login(function(response){
      console.log('fblogin response ',response)
      if (response.authResponse) {
        localStorage.setItem('fbaccesstoken', response.authResponse.accessToken)
        window.location.href='index.html'
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    }, {scope: 'public_profile,email'});
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  //buat dapetin authorized sama unauthorized
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
//FB itu object dari yang di bawah manggil sdk
  window.fbAsyncInit = function() {
  FB.init({
    appId      : '1595971680477286',
    cookie     : true,  // enable cookies to allow the server to access
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.10' // use graph api version 2.8
  });

  // Now that we've initialized the JavaScript SDK, we call
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
    console.log('ini getloginstatus',response);
    statusChangeCallback(response);
  });

  };

  // Load the SDK asynchronously
  //script yang di gunakan untuk memanggil sdk facebook nya function di bungkus gunanya agar saat di load langsung di jalan kan bagian bawah adalah mengirim parameter
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', {fields:'name,email,id,gender'},function(response) {
      console.log('response dari me', response);
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }

  function FBLogout () {
  FB.logout(function(response) {
    // user is now logged out
    console.log('fblogout response ', response);
  });
  }
//   FB.getLoginStatus(function(response) {
//     if (response.status === 'connected') {
//       // the user is logged in and has authenticated your
//       // app, and response.authResponse supplies
//       // the user's ID, a valid access token, a signed
//       // request, and the time the access token
//       // and signed request each expire
//       var uid = response.authResponse.userID;
//       var accessToken = response.authResponse.accessToken;
//
//       FB.api('/'+uid+'/permissions', 'delete', function(response){
//         localStorage.removeItem('fbaccesstoken')
//         console.log('fblogout response ', response);
//         document.location.href="index.html"
//       });
//
//     } else if (response.status === 'not_authorized') {
//       // the user is logged in to Facebook,
//       // but has not authenticated your app
//       console.log('the user is logged in to Facebook, but has not authenticated your app');
//     } else {
//       // the user isn't logged in to Facebook.
//       console.log('the user isn\'t logged in to Facebook.');
//     }
//    });
// }




function FBLogout () {
  FB.getLoginStatus(function(response) {
    if(response.status === 'connected') {
      var uid = response.authResponse.userID;
      var accesstoken = response.authResponse.accesstoken;

      FB.api('/'+uid+'/permissions', 'delete' , function(response){
        localStorage.removeItem('fbaccesstoken')
        document.location.href="login.html"
      })
    } else if (response.status == 'not_authorized') {
      console.log('the user is logged in to Facebook but has no authenticated your app');
    } else {
      console.log('the user isn\'t logged in to facebook');
    }
  })
}
