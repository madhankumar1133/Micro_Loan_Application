import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import'./signin.css'
export function Signin()
{
    
  const handlesubmit=(event)=>
  {
      event.preventDefault();
      var datastring=new FormData(event.target);
      var config={headers:{"enctype":"multipart/form-data"}};

      axios.post('http://localhost:3000/Regiester',datastring,config)
      .then(function(response){
        if(response.data.status === "error"){
            alert('error');
            window.location.href="./signin";
        }
        else if(response.data.status === "Registered"){
            alert('Successfully Registered');
            window.location.href="./customerdetails";
        }
        else{
            alert('Contact Admin');
            window.location.href="./signin";
        }
    })
    .catch(function(error){
        alert('Error');
        window.location.href="./signin";
    })
  }


    return(
        <>
          <div className='container-fluid sign1 p-5'>
            <div className='row'>
              <div className='col-lg-3'>&nbsp;</div>
              <div className='col-lg-6'>
                <h1 className='text-center p-3'>Micro Credit Application</h1>
                <form onSubmit={handlesubmit}>
                  <div className='table-responsive mt-4'>
                    <table className=' table table-bordered'>
                        <thead>
                            <tr>
                                <th colSpan={2} className="text-center text-light">User Login</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-light'><label>UserAccount</label></td>
                                <td><input type="text" name="useraccount" id="useraccount" className="form-control"/></td>
                            </tr>
                            <tr>
                                <td className='text-light'><label>Email</label></td>
                                <td><input type="email" name="email" id="email" className="form-control"/></td>
                            </tr>
                            <tr>
                                <td className='text-light'><label>Phone</label></td>
                                <td><input type="number" name="phone" id="phone" className="form-control"/></td>
                            </tr>
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
                                    
                        </tbody>


                    </table>

                  </div>
                </form>
                

              </div>
              <div className='col-lg-3'>&nbsp;</div>

            </div>
            
          </div>
        </>
    );
}



