import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import'./signin.css'
export function Customerdetails(){

    let userid = localStorage.getItem('userid');

    const handleuserdetails=(event)=>
  {
      event.preventDefault();
      var datastring=new FormData(event.target);
      var config={headers:{"enctype":"multipart/form-data"}};

      axios.post('http://localhost:3000/Regiester_userdetails',datastring,config)
      .then(function(response){
        if(response.data.status === "error"){
            alert('error');
            window.location.href="./customerdetails";
        }
        else if(response.data.status === "Registered"){
            alert('Successfully Registered');
            window.location.href="./login";
        }
        else{
            alert('Contact Admin');
            window.location.href="./customerdetails";
        }
    })
    .catch(function(error){
        alert('Error');
        window.location.href="./signin";
    })
  }
    return(
        <>
        <div className='container-fluid customerpage p-5'>
            <div className='row'>
              <div className='col-lg-2'>&nbsp;</div>
              <div className='col-lg-8'>
                <h1 className='text-center p-3'>Micro Credit Application</h1>
                <h3 className='text-center p-3'>Enter your details here</h3>
                <form onSubmit={handleuserdetails}>
                  <div className='table-responsive mt-4'>
                    <table className=' table table-bordered'>
                        <thead>
                            <tr>
                                <th colSpan={2} className="text-center text-light">User Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-light text-center'><label>User Full Name <span className='text-danger'>*</span></label></td>
                                <td><input type="text" name="username" id="username" className="form-control"/></td>
                            </tr>
                            <tr>
                                <td className='text-light text-center'><label>Father Name</label></td>
                                <td><input type="text" name="fathername" id="fathername" className="form-control"/></td>
                            </tr>
                            <tr>
                                <td className='text-light text-center'><label>Age <span className='text-danger'>*</span></label></td>
                                <td><input type="number" name="age" id="age" className="form-control"/></td>
                            </tr>
                            <tr>
                                <td className='text-light text-center'><label>gender</label></td>
                                <td><select id="gender" name="gender"><option selected></option><option value="male">male</option><option value="female">female</option><option value="others">others</option></select></td>
                            </tr>
                            <tr>
                                <td className='text-light text-center'><label>Nationality</label></td>
                                <td><input type="text" name="nation" id="nation" className="form-control"/></td>
                            </tr>
                            <tr>
                                <td className='text-light text-center'><label>Maritial Status</label></td>
                                <td><select id="maritialstatus" name="maritialstatus"><option selected></option><option value="single">single</option><option value="married">married</option><option value="divorced">divorced</option></select></td>
                            </tr>
                            <tr>
                                <td className='text-light text-center'><label>Permanent Address <span className='text-danger'>*</span></label></td>
                                <td><textarea type="text" name="permanent_address" id="permanent_address" rows={4} className="form-control"></textarea></td>
                            </tr>
                            <tr>
                                <td className='text-light text-center'><label>Current Address <span className='text-danger'>*</span></label></td>
                                <td><textarea type="text" name="current_address" id="current_address" rows={4} className="form-control"></textarea></td>
                            </tr>
                            <tr>
                                <td className='text-light text-center'><label>PAN Number <span className='text-danger'>*</span></label></td>
                                <td><input type="text" name="pan_number" id="pan_number" className="form-control"/></td>
                            </tr>
                            <tr>
                                <td className='text-light text-center'><label>AADHAR Number <span className='text-danger'>*</span></label></td>
                                <td><input type="number" name="aadhar_number" id="aadhar_number" className="form-control"/></td>
                            </tr>
                            <tr>
                                <td className='text-light text-center'><label>Company Name <span className='text-danger'>*</span></label></td>
                                <td><input type="text" name="companyname" id="companyname" className="form-control"/></td>
                            </tr>
                            <tr>
                                <td className='text-light text-center'><label>current role in Company <span className='text-danger'>*</span></label></td>
                                <td><input type="text" name="companypost" id="companypost" className="form-control"/></td>
                            </tr>
                            <tr>
                                <td className='text-light text-center'><label>Company's location</label></td>
                                <td><input type="text" name="companylocation" id="companylocation" className="form-control"/></td>
                            </tr>
                            <tr>
                                <td className='text-light text-center'><label>Current Salary<span className='text-danger'>*</span></label></td>
                                <td><input type="text" name="current_salary" id="current_salary" className="form-control"/></td>
                            </tr>
                            <tr>
                                <td className='text-light text-center'><label>Previous Salary</label></td>
                                <td><input type="text" name="previous_salary" id="previous_salary" className="form-control"/></td>
                            </tr>
                            <tr>
                                <td className='text-light text-center'><label>Own a house?</label></td>
                                <td><select id="own_house" name="own_house"><option selected></option><option value="yes">yes</option><option value="no">no</option></select></td>
                            </tr>
                            <tr>
                                <td className='text-light text-center'><label>If rented, please specify the rent amount <span className='text-danger'>*</span></label></td>
                                <td><input type="number" name="rentamount" id="rentamount" className="form-control"/></td>
                            </tr>
                            <tr>
                                <td className='text-light text-center'><label>Approximate grocery expense per month <span className='text-danger'>*</span></label></td>
                                <td><input type="number" name="grocery" id="grocery" className="form-control"/></td>
                            </tr>
                            <tr>
                                <td className='text-light text-center'><label> currently paying any EMI <span className='text-danger'>*</span></label></td>
                                <td><select id="current_emi" name="current_emi"><option selected></option><option value="yes">yes</option><option value="no">no</option></select></td>
                            </tr>
                            <tr>
                                <td className='text-light text-center'><label>If  you have EMI , please specify  the EMI amount <span className='text-danger'>*</span></label></td>
                                <td><input type="number" name="emiamount" id="emiamount" className="form-control"/></td>
                            </tr>
                            <tr>
                                <td className='text-light text-center'><label>other expense amount <span className='text-danger'>*</span></label></td>
                                <td><input type="number" name="other_expense_amount" id="other_expense_amount" className="form-control"/></td>
                            </tr>
                            <tr>
                                <td className='text-light text-center'><label>Date of previous hike</label></td>
                                <td><input type="date" name="hike_pre_date" id="hike_pre_date" className="form-control"/></td>
                            </tr>
                            <tr>
                                <td className='text-light text-center'><label>Estimated date of next hike</label></td>
                                <td><input type="date" name="hike_next_date" id="hike_next_date" className="form-control"/></td>
                            </tr>
                            <tr>
                                <td className='text-light text-center'><label>User Bank Account <span className='text-danger'>*</span></label></td>
                                <td><input type="text" name="bankaccount" id="bankaccount" className="form-control"/></td>
                            </tr>
                            
                            
                            <tr>
                                <td colSpan={2}><button type="submit" name="data_submit" id="data_submit" value="submit" className="btn btn-success">Submit</button> </td>
                            </tr>
                            <input type="hidden" name="userid" id="userid" value={userid} className="form-control"/>    
                                    
                        </tbody>


                    </table>

                  </div>
                </form>
                

              </div>
              <div className='col-lg-2'>&nbsp;</div>

            </div>
            
        </div>
        </>
    );
}