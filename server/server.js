const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const mycon = require('mysql');
const fileupload = require('express-fileupload');
const { response, request } = require('express');


const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(fileupload());
app.use(express.static('public'));

const c = mycon.createConnection({
    host : "localhost",
    port : "3306",
    user : "root",
    password : "Madhan*18",
    database : "microcreditapp"
});

c.connect(function(error){
    if(error){console.log(error);}
    else{console.log('Database Connected');}
})
app.post('/Regiester',(request,response)=>{
    let {useraccount,email,phone,username,password} = request.body;

    let sql = 'insert into signin(useraccount,email,phone,username,password) values (?,?,?,?,?)';
    
    c.query(sql,[useraccount,email,phone,username,password],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"Registered"};
            response.send(s);
        }
    })

})

app.post('/Login',(request,response)=>{
    let {username,password} = request.body;
    let sql = 'select * from signin where username=?';
    
    c.query(sql,[username],(error,result)=>{
        if(error){
            
            let s = {"status":"error"};
            response.send(s);
        }
        else if(result.length > 0){

            let id = result[0].id;
            let username1 = result[0].username;
            let password1 = result[0].password;
            if(username1 == username && password1 == password){
                let s = {"status":"Success","userid":id};
                response.send(s);
            }
            else{
                let s = {"status":"Invalid"};
                response.send(s);
            }
        }
        else{
            let s ={"status":"final_error"};
            response.send(s);
        }
    })

})

app.post('/Regiester_userdetails',(request,response)=>{
    let userid=request.body.userid;
    let {username,fathername,age,gender,nation,maritialstatus,permanent_address,current_address,pan_number,aadhar_number,companyname,companypost,companylocation,current_salary,previous_salary,own_house,rentamount,grocery,current_emi,emiamount,other_expense_amount,hike_pre_date,hike_next_date,bankaccount} = request.body;

    let sql = 'insert into userdetails(userid,username,fathername,age,gender,nation,maritialstatus,permanent_address,current_address,pan_number,aadhar_number,companyname,companypost,companylocation,current_salary,previous_salary,own_house,rentamount,grocery,current_emi,emiamount,other_expense_amount,hike_pre_date,hike_next_date,bankaccount) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    
    c.query(sql,[userid,username,fathername,age,gender,nation,maritialstatus,permanent_address,current_address,pan_number,aadhar_number,companyname,companypost,companylocation,current_salary,previous_salary,own_house,rentamount,grocery,current_emi,emiamount,other_expense_amount,hike_pre_date,hike_next_date,bankaccount],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"Registered"};
            response.send(s);
        }
    })

})
app.get('/Get_signin/:id',(request,response)=>{
    let {id} = request.params;
    let sql = 'select * from signin where id=?';

    c.query(sql,[id],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            response.send(result);
        }
    })   
})

app.get('/View_userdetails/:userid',(request,response)=>{

    let {userid} =request.params;

    let sql ='select * from userdetails where userid=?';

    c.query(sql,[userid],(error,result)=>{
        if(error)
        {
            response.send(error);

        }
        else{
            response.send(result);

        }
    })

})

  app.get('/getTotal', (req, res) => {
    
    const userid = req.query.userid; 
    const query = 'SELECT current_salary, emiamount, other_expense_amount FROM userdetails where userid=?';
    c.query(query,[userid] ,(err, result) => {
      if (err) {
        res.status(500).json({ error: 'Database error' });
        return;
      }
  
      const total = result.reduce((sum, row) => sum + row.current_salary*12-row.other_expense_amount*12-row.emiamount*12, 0);
  
      let category = '';
      if(total<50000){
        category = 'Less than 50000 so not eligible';
      }
      else if (total < 100000 && total >50000) {
        category = 'Less than 100000';
      } else if (total > 100000 && total <300000){
        category = 'your savings for year is in between 1 lakh to 3 lakh ';
      }
      else if (total > 300000 && total <800000){
        category = 'your savings for year is in between 3 lakh to  8 lakh';
      }
      else{
        category = 'your savings for year is more than 8 lakhs';
      }
  
      res.json({ total, category });
      
    });
  });
  app.post('/Regiester_loan',(request,response)=>{
    let{userid}=request.body;
    
      
    let sql ='select * from userdetails where userid=?';
    c.query(sql,[userid],(error,result)=>{
        if(error)
        {
            response.send(error);

        }
        else{
            const total = result.reduce((sum, row) => sum + row.current_salary*12-row.other_expense_amount*12-row.emiamount*12, 0);
        
            if(total<50000){
                let s={"status":"noteligible"}
                response.send(s);
              }
           else if(total < 100000 && total >50000){
                let s={"status":"loanlow"}
                response.send(s);
    
            }
            else if(total > 100000 && total <300000)
            {
                let s={"status":"loanmiddle"}
                response.send(s);
    
            
            }
            else{
                let s={"status":"loanhigh"}
                response.send(s);
            }
        }
        
        
    })

  })
app.listen(3000, ()=>{console.log('Port number running in 3000')});