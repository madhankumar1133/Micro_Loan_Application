import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import'./signin.css'



export function Login()
{
    const handlesubmit = (event) =>{
        event.preventDefault();
        var datastring = new FormData(event.target);
        var config = {headers:{"enctype":"multipart/form-data"}};

        axios.post('http://localhost:3000/Login',datastring,config)
        .then(function(response){
            if(response.data.status === 'error'){
                alert('Query Error');
                window.location.href="./login";
            } 
            else if(response.data.status === "Success"){
                let userid = response.data.userid;
                localStorage.setItem("userid",userid);
                alert('Logined');
                window.location.href="./loan";
            } 
            else if(response.data.status === "Invalid"){
                alert('Invalid username and password');
                window.location.href="./login";
            } 
            else{
                alert('Invalid username and password');
                window.location.href="./login";
            }
        })
        .catch(function(error){
            alert('Error');
            window.location.href="./login";
        })

    }
   
    return(
      <>
    <div className='container-fluid sign1'>
        <div className="container ">
            <div className="row">
                <div className="col-lg-3">&nbsp;</div>
                <div className="col-lg-6 mt-5">
                    <form onSubmit={handlesubmit} >
                        <div className="table-responsive mt-5">
                            <table className="table table-bordered mt-5">
                                <thead>
                                    <tr>
                                        <th colSpan={2} className="text-center text-light">Login Form</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                         <td className='text-light'><label>Username</label></td>
                                         <td><input type="text" name="username" id="username" className="form-control"/></td>
                                    </tr>
                                    <tr>
                                        <td className='text-light'><label>Password</label></td>
                                        <td><input type="password" name="password" id="password" className="form-control"/></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}><button type="submit" name="data_submit" id="data_submit" value="submit" className="btn btn-primary">Sign-in</button> </td>
                                    </tr>    
                                    <tr>
                                        <td colSpan={2}> <Link to='/signin'>Create an Account?</Link></td>  
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </form>
                </div>
                <div className="col-lg-3">&nbsp;</div>
            </div>
         </div>
    </div>
      </>
      
    );
}