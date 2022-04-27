import bcrypt from 'bcryptjs'


const users = [
    {
        name: 'Admin User',                     
        email: 'admin@myShop.com',                                        
        password: bcrypt.hashSync('654321', 1),                 
        isAdmin: true,                             
    },

    {
        name: 'Matthew McEver',                    
        email: 'matthew@myshop.com',
        password: bcrypt.hashSync('3453453', 1),
         
    },
    {
        name: 'Juniper Hunter',
        email: 'junpier@myshop.com',
        password: bcrypt.hashSync('83473248', 1),
    }

];


export default users;              