import mysql from 'mysql2';

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'db_express_crud'
})
db.connect((err)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log('database connected');     
    }
})

export default db;