import mongoose  from "mongoose";                   /* mongoose creates tables/collections for you in the DB */
 

 const userSchema = mongoose.Schema({                   /* name the schema userSchema. define it as a schema.  */
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true            /* means no two users can use the same email address */
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {                  /* shows if someone is an admin */
        type: Boolean,
        required: true,
        default: false      /* by default everyone is not an admin */
    }







 }, {
     timestamps: true            /* to capture data and time when things were changed or added(Timestamp) */
 })                         

 const Users = mongoose.model('Users', userSchema)   /* tells mongoose to create a model and create a collection, call it Users and use this schema to make it. store that collection in code called Users. THIS IS WHAT CREATES THE TABLE. IF YOU DONT WANT A NEW TABLE LIKE THE CASE WITH REVIEWSCHEMA, DONT WRITE THIS STATEMENT */
 export default Users                                   /* export it to use it in other js files */