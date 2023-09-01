import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Menu } from './menu';
import img1 from './images/img1.jpg'
import { Contact } from './textcomponents/contact';
export function Loan(){

    let userid=localStorage.getItem('userid');

    const [userdetails,setUserdetails] = useState([]);
    const[viewuserdetails,setViewuserdetails]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/Get_signin/'+userid)
        .then(responsive=>responsive.json())
        .then(json=>setUserdetails(json));
        
    },[]);

    useEffect(()=>
    {
        fetch('http://localhost:3000/View_userdetails/'+userid)
        .then(response=>response.json())
        .then(json=>setViewuserdetails(json));
    },[])
//  find total
    

const [totalData, setTotalData] = useState({ total: 0, category: '' });

useEffect(() => {
    fetch(`http://localhost:3000/getTotal?userid=${userid}`)
      .then(response => response.json())
      .then(data => setTotalData(data))
      .catch(error => console.error('Error:', error));
  }, [userid]);


  const handlecredit=(event)=>{
    event.preventDefault();
      var datastring=new FormData(event.target);
      var config={headers:{"enctype":"multipart/form-data"}};

      axios.post('http://localhost:3000/Regiester_loan',datastring,config)
      .then(function(response){
        if(response.data.status === "error"){
            alert('error');
            window.location.href="./loan";
        }
        else if(response.data.status === "noteligible"){
            alert('yoe are not eligible for micro loans');
            window.location.href="./loan";
        }
        else if(response.data.status === "loanlow"){
            alert('you have  some loan schemes ');
            window.location.href="./loanlow";
        }
        else if(response.data.status === "loanhigh"){
            alert('you have  some loan schemes');
            window.location.href="./loanhigh";
        }
        else if(response.data.status === "loanmiddle"){
            alert('you have  some loan schemes');
            window.location.href="./loanmiddle";
        }
        else{
            alert('Contact Admin');
            window.location.href="./loan";
        }
    })
    .catch(function(error){
        alert('Error');
        window.location.href="./loan";
  }
    )}
    return(
        <>
        <Menu/>
        <div className='container-fluid bgfront p-5 '>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-lg-5'>
                        <img src={img1} className="col-lg-12 frontimg"/>
                        </div>
                        <div className='col-lg-2'>&nbsp;

                        </div>
                        <div className='col-lg-5 '>
                       
                          <h1 className='h1_front mt-3'>Start and grow your own business and achieve your dreams</h1>

                          <h3 className='mt-5 '>Micro loans that promise financial support and convenience</h3> 

                        </div>
                        
                    

                    </div>
                </div>
        </div>
        {/* secondpage         */}
        <div className='container-fluid bgsec p-5'>
            <div className='row'>

            
                    <div className='col-lg-3'>&nbsp;

                        </div>
                        <div className='col-lg-6'>
                          {viewuserdetails.map((v,i)=>(
                            <h3 className='mt-5 sectext'>welcome {v.username} to get micro credit loans</h3>
                           ))
                          }

                        </div>
                        <div className='col-lg-3'>&nbsp;

                        </div>
                        <div className="table-responsive mt-3 ">
                          
                          <table className="table table-bordered mt-3">
                            
                            <thead>
                                <tr className='text-center text-primary'>
                                    <th>Fathername</th>
                                    <th>Age</th>
                                    <th>gender</th>
                                    <th>companyname</th>
                                    <th>current role in company </th>
                                    <th>companylocation</th>
                                   
                                </tr>
                            </thead>
                            <tbody className='text-center text-dark'>
                            {
                                viewuserdetails.map((v,i)=>(
                                    <tr>
                                        <td>{v.fathername}</td>
                                        <td>{v.age}</td>
                                        <td>{v.gender}</td>
                                        <td> {v.companyname}</td>
                                        <td>{v.companypost}</td>
                                        <td>{v.companylocation}</td>
                                        
                                        

                                        
                                        
                                    </tr>
                                ))
                            }
                            </tbody>
                          </table>
                        </div>
                        <div className='col-lg-3'>&nbsp;

                        </div>
                        <div className='col-lg-3'>&nbsp;

                        </div>
                        <div className="table-responsive mt-3 ">
                          
                          <table className="table table-bordered mt-3">
                            
                            <thead>
                                <tr className='text-center text-primary'>
                                    <th>Current Salary</th>
                                    <th>rentamount</th>
                                    <th>grocery</th>
                                    <th>EmI amount</th>
                                    <th>other expense amount </th>
                                    <th>Bank Name</th>
                                   
                                </tr>
                            </thead>
                            <tbody className='text-center text-dark'>
                            {
                                viewuserdetails.map((v,i)=>(
                                    <tr>
                                        <td>{v.current_salary}</td>
                                        <td>{v.rentamount}</td>
                                        <td>{v.grocery}</td>
                                        <td> {v.emiamount}</td>
                                        <td>{v.other_expense_amount}</td>
                                        <td>{v.bankaccount}</td>
                                        
                                        

                                        
                                        
                                    </tr>
                                ))
                            }
                            </tbody>
                          </table>
                        </div>
                        
                        <div  className='col-lg-4 mt-5'>
                        <div className="table-responsive mt-3 ">
                          
                          <table className="table table-bordered mt-3">
                            
                            <thead>
                                <tr className='text-center text-primary'>
                                    <th>accountnumber</th>
                                    <th>email</th>
                                    
                                </tr>
                            </thead>
                            <tbody className='text-center text-dark'>
                            {
                                userdetails.map((v,i)=>(
                                    <tr>
                                        <td>{v.useraccount}</td>
                                        <td>{v.email}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                          </table>
                        </div>

                        </div>
                        <div className='col-lg-8 text-center mt-5'>
                        <h1 className='mt-3 h1_front'>Total savings: {totalData.total} Rs</h1>
                            <h3 className='mt-3 h1_front'>Category: {totalData.category}</h3> 
                            <form  onSubmit={handlecredit}>
                                 <input type="hidden" name="userid" id="userid" value={userid} className="form-control"/>  
                                
                                 <button type="submit" name="data_submit" id="data_submit" value="submit" className="btn btn-success mt-3">get micro loan</button>
                          
                            </form>

                        </div>
                </div>
            </div>    
                

                
        
        
        
        <div className='container-fluid p-5'>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-lg-5  p-5 bgten1 text-light'>
                            <h1 >What is Micro Loan?</h1>
                            <p className='mt-3'>Microfinance refers to provision of providing basic financial services such as micro credit, micro insurance, 
                            saving accounts to low income individual or groups who are typically excluded from traditionally banking.</p>
                            <button className='bgbut p-2 mt-3  text-center text-light'>get started →</button>
                        </div>
                        <div className='col-lg-2'>&nbsp;

                        </div>
                        <div className='col-lg-5 p-5 bgten2 text-light'>
                            <h1 className='texthead'>Need advice?</h1>
                            <p className='mt-3 text-dark'>Not sure  setup micro loans is right for you? Answer a few quick reviews to find out which method is best suited to your needs.</p>
                            <button className='bgbut p-2 mt-3  text-center text-dark'>see all reviews →</button>
                        </div>
                        
                    </div>
                </div>          
            </div>
           <Contact/>
           
        </>
    );
}