import 'bootstrap/dist/css/bootstrap.min.css';
import'./signin.css'
import img2 from './images/img2.jpg';
import { Menu } from './menu';
import { Contact } from './textcomponents/contact';
export function Loanmiddle(){
    const loansubmit=(event)=>{
        alert('your loan successfully placed');
        window.location.href="/success";
    }
    return(
        <>
        <Menu/>
        <div className='container-fluid bgseventh p-5 '>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-lg-6'>
                        <img src={img2} className="col-lg-12 loanimg"/>
                        </div>
                        <div className='col-lg-1'>&nbsp;

                        </div>
                        <div className='col-lg-5'>
                       
                          <h1 className='sectext'>Start and grow your own business and achieve your dreams</h1>

                          <h3 className='mt-5'>here your schemes</h3> 

                        </div>
                        
                    

                    </div>
                </div>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-lg-3 bgsecbox p-4 text-center mt-3'>
                        <h3>loan for RS 100000</h3>
                            <p >monthly you will paid just </p><br/>
                            <h5>9833.33Rs</h5>
                            <h6>period:12 weeks</h6>
                            <button type="submit" name="data_submit" id="data_submit" value="submit" className="btn btn-success mt-3" onClick={loansubmit}>Apply Micro loan</button>

                        </div>
                        <div className='col-lg-1 mt-3'>&nbsp;</div>
                        <div className='col-lg-3 bgsecbox p-4 text-center mt-3'>
                        <h3>loan for RS 200000</h3>
                            <p >monthly you will paid just </p><br/>
                            <h5>18,666.66Rs</h5>
                            <h6>period:12 weeks</h6>
                            <button type="submit" name="data_submit" id="data_submit" value="submit" className="btn btn-success mt-3" onClick={loansubmit}>Apply Micro loan</button>
                        </div>
                        <div className='col-lg-1 mt-3'>&nbsp;</div>
                        <div className='col-lg-3 bgsecbox p-4 text-center mt-3'>
                        <h3>loan for RS 300000</h3>
                        <p >monthly you will paid just </p><br/>
                            <h5>29000Rs</h5>
                            <h6>period:12 weeks</h6>
                            <button type="submit" name="data_submit" id="data_submit" value="submit" className="btn btn-success mt-3" onClick={loansubmit}>Apply Micro loan</button>

                        </div>
                        <div className='col-lg-1 mt-3'>&nbsp;</div>
                        <div className='col-lg-3 bgsecbox p-4 text-center mt-3'>
                        <h3>loan for RS 50000</h3>
                            <p >monthly you will paid just </p><br/>
                            <h5>4916.66Rs</h5>
                            <h6>period:12 weeks</h6>
                            <button type="submit" name="data_submit" id="data_submit" value="submit" className="btn btn-success mt-3" onClick={loansubmit}>Apply Micro loan</button>

                        </div>
                        <div className='col-lg-1 mt-3'>&nbsp;</div>
                        <div className='col-lg-3 bgsecbox p-4 text-center mt-3'>
                        <h3>loan for RS 75000</h3>
                            <p >monthly you will paid just </p><br/>
                            <h5>7358.33Rs</h5>
                            <h6>period:12 weeks</h6>
                            <button type="submit" name="data_submit" id="data_submit" value="submit" className="btn btn-success mt-3" onClick={loansubmit}>Apply Micro loan</button>
                        </div>
                        <div className='col-lg-1 mt-3'>&nbsp;</div>
                        <div className='col-lg-3 bgsecbox p-4 text-center mt-3'>
                        <h3>loan for RS 100000</h3>
                        <p >monthly you will paid just </p><br/>
                            <h5>9833.33Rs</h5>
                            <h6>period:12 weeks</h6>
                            <button type="submit" name="data_submit" id="data_submit" value="submit" className="btn btn-success mt-3" onClick={loansubmit}>Apply Micro loan</button>

                        </div>


                        
                    </div>  

                </div>

        </div>
        <Contact/>
        </>
    );
}