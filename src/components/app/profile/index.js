import React from 'react';
import { createBrowserHistory as createHistory } from "history";
import CondNav from '../condnav';
var body;

export default class Profile extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
          fields: {},
        }
  
       // this.handleChange = this.handleChange.bind(this);
        //this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  
      };
      
      
      history = createHistory(this.props);
      componentDidMount(e) {
        //.e.preventDefault();
        const url = "http://10.10.200.19:9000/users/me"; 
        let token = localStorage.getItem("AccessToken");
        let headers = new Headers();
        const AuthStr = 'Bearer '.concat(token);
         console.log(token);
         headers.append('Content-Type', 'application/json');
         headers.append('Accept', 'application/json');
         headers.append('Authorization', AuthStr);
         console.log(AuthStr);
         headers.append('Access-Control-Allow-Origin', url);
         headers.append('Access-Control-Allow-Credentials', 'true');
         headers.append( 'GET','POST');
    
    //e.preventDefault();
    fetch(url, {
        headers: headers,
        method: 'GET',
        body: JSON.stringify(body),
        'Authorization': 'Bearer ' + this.state.token, 
    })
    .then(response=>response.json())
    .then(contents=>{console.log("in fetch: "+contents);
    this.setState({ username : contents.username,
    email : contents.email,
    password:contents.password,
    phoneno:contents.phoneno,
    address:contents.address,

})
console.log('view details'+this.state)
})

  //.then(console.log(this.state.fields))
  .catch(() => console.log("Can’t access " + url + " response. "))
  //this.props.history.push(`/Login`)
  //this.setState({fields});
         // alert("Form submitted");
    }
  render() {
    return (
        <div>
            <CondNav/><br/><br/>
        <div class="container mt-5">
        <div class="row">
        
            <div class="col-lg-4 pb-5">
               
                <div class="author-card pb-3">
                  
                    <div class="author-card-profile">
                        <div class="author-card-avatar"><img src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="Daniel Adams"/>
                        </div>
                        <div class="author-card-details">
                           <br/> {this.state.username}{console.log(this.state)}
                           
                        </div>
                    </div>
                </div>
                <div class="wizard">
                    <nav class="list-group list-group-flush">
                        <a class="list-group-item" href="#">
                            <div class="d-flex justify-content-between align-items-center">
                                <div><i class="fe-icon-shopping-bag mr-1 text-muted"></i>
                                    <div class="d-inline-block font-weight-medium text-uppercase">Orders List</div>
                                </div><span class="badge badge-secondary"></span>
                            </div>
                        </a><a class="list-group-item active" href="#"><i class="fe-icon-user text-muted"></i>VIEW PROFILE</a>
                        <a class="list-group-item" href="#">
                            <div class="d-flex justify-content-between align-items-center">
                                <div><i class="fe-icon-heart mr-1 text-muted"></i>
                                    <div class="d-inline-block font-weight-medium text-uppercase">My Wishlist</div>
                                </div><span class="badge badge-secondary"></span>
                            </div>
                        </a>
                        <a class="list-group-item" href="/updateprofile">
                            <div class="d-flex justify-content-between align-items-center">
                                <div><i class="fe-icon-heart mr-1 text-muted"></i>
                                    <div class="d-inline-block font-weight-medium text-uppercase">Update Profile</div>
                                </div><span class="badge badge-secondary"></span>
                            </div>
                        </a>
                    
                    </nav>
                </div>
            </div>
           
            <div class="col-lg-8 pb-5">
<br/><br/><br/><br/>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="account-email">E-mail Address</label>
                            <input class="form-control" type="email" id="account-email"  name="email" value={this.state.email} disabled/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="account-phone">Phone Number</label>
                            <input class="form-control" type="text" id="account-phone" name="phoneno" value={this.state.phoneno}  disabled/>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="account-address">Address</label>
                            <input class="form-control" type="text" id="account-addresss" name="address" value={this.state.address} disabled/>
                        </div>
                    </div>
                    
                   
            </div>
            </div>
        </div>
    
       </div>
    );
  }
}