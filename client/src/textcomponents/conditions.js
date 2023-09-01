import 'bootstrap/dist/css/bootstrap.min.css';
import { Menu } from '../menu';

export function Conditions(){
    return(
        <>
        <Menu/>
        <div className='container p-5'>
            <div className='row mt-2'>
                <div className='col-lg-1 mt-2'>&nbsp;

                </div>
                <div className='col-lg-10 mt-2'>
                    <h3 className='mt-2'>Eligibility Criteria for Micro Loans</h3>
                    <p className='mt-2'>  Now, availing micro loans is an easy process which is hassle-free. However, you would need to match the eligibility criteria for the same to facilitate a smooth process. The eligibility criteria for micro loans is;</p>
                    <p className='mt-2'> 1. The age of the borrower should be between 24 years and 70 years (note that at the maturity of the loan, age should be 70 years)</p>
                    <p className='mt-2'> 2. The business on which the loan is being taken for should be functional for a minimum of three years</p>
                    <p  className='mt-2'> 3. Your credit score should be a minimum of 685 to be able to avail a micro loan </p>
                    <p className='mt-2'> 4. You should not have taken a similar loan from another micro finance company</p>

                    <h3 className='mt-2'>Documents Required to Avail a Micro Loan</h3>
                    <p className='mt-2'>The following documents are required when applying for a micro loan;</p>
                    <h5 className='mt-2'>1.Identify proof </h5>
                    <p className='mt-2'>Know Your Customer (KYC) documents such as PAN card, Aadhar card, driver’s license, voter’s ID, etc. </p>
                    <h5 className='mt-2'>2.Proof of Income </h5>
                    <p className='mt-2'> Income tax return copies of minimum 1 year validity, 6 months recent bank statements, profit and loss statement of the recent most two years and an audit balance sheet. </p>
                    <h5 className='mt-2'>3.Proof of Address </h5>
                    <p className='mt-2'> Electricity bill, trade licence, telephone bill, passport and/or lease agreement.</p>
                    <h5 className='mt-2'>4.Proof of Business Ownership</h5>
                    <p className='mt-2'>Business registration certificates, tax records, partnership as well as private limited company deeds as well as any other ID or Address proof documents as required by the financing company.</p>
                </div>
                <div className='col-lg-1 mt-2'>&nbsp;

                </div>

            </div>

        </div>
        <div className='container-fluid bg-dark p-3'>
            <div className='container'>
                <div className='row text-light'>
                    <div className='col-lg-8'>
                        <p>All Products: Business loans, Working capital loans, MLC loans ,Business loans for women</p>
                    </div>
                    <div className='col-lg-4'>
                        <p>Copyright © 2023 Micro loans rights reserved</p>

                    </div>
                </div> 
            

            </div>

        </div>
        </>
    );
}