import 'bootstrap/dist/css/bootstrap.min.css';
import'../signin.css'

export function Success(){
    const gologin=(event)=>{
       window.location.href="login";
    }
    return(
        <>
        <div className="success-container ">
           <span className="success-icon">✓</span>
           <p className="success-text">Your loan is Successfully sanctioned!</p>
           <div className='mt-5 p-5'>
            <button type="submit" name="data_submit" id="data_submit" value="submit" className="btn btn-primary mb-2" onClick={gologin}>go to login page</button>
            </div>
        </div>
        
        </>
    );
}