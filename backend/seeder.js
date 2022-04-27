import users from './data/users.js'
import products from './data/products.js'
import Users from './models/userModel.js'
import Products from './models/productModel.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'


dotenv.config()                 
connectDB() 



  const importData = async () => {                   
    try {                                               
       
        await Products.deleteMany()                                       
        await Users.deleteMany()                  

        const createdUsers = await Users.insertMany(users)                      
        const adminUser = createdUsers[0]._id                           
    
   

        const sampleProducts = products.map((p) => {                   
            return {...p, user: adminUser}                                
        
        
        })                                  
                                                                            
        await Products.insertMany(sampleProducts)         
         console.log('Data has been imported')              
         process.exit()                                   
         
        
        } catch (error) {                                  
        console.error(`${error}`)                            
        process.exit(1)                                      
    }
}    

//destroy data function//

const destroyData = async () => {                       
    try{                                                    
        await Products.deleteMany()                    
        await Users.deleteMany() 

        console.log('Data has been destroyed')
        process.exit()                                

    } catch (error) {
      console.error(`${error}`)
      process.exit(1)                         
    }
}

 
if (process.argv[2] === '-d') {               
  destroyData()                          
 } else {                               
    importData()            
 }

