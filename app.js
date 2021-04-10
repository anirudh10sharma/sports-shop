const express=require('express');
const path=require('path');
const mongoose=require('mongoose');
const productroutes=require('./routers/product');
const seed=require("./seeddb");
const methodOverride=require("method-override");
const session=require("express-session");
const passport=require("passport");
const localStrategy=require("passport-local");
const User=require("./models/user");
const reviewRoutes = require('./routers/reviews/review');
const authRoutes = require('./routers/auth/auth');
const cartRoutes = require('./routers/cart/cart');
const http = require('http');



const app=express();

const server = http.Server(app);

//lockit1234
const awai =async ()=>{
await mongoose.connect("mongodb+srv://anirudhsharma:lockit1234@eccomerce.u3kqn.mongodb.net/ecommerce?retryWrites=true&w=majority"
||'mongodb://localhost:27017/ecommerece', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Database Connected");
    })
    .catch(err => {
        console.log("DB Not Connected");
        console.log(err);
    })}
    awai();
//seed();






app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret:"thisisverygood",
    resave:true,
    saveUninitialized:true
}))
app.use(methodOverride("_method"));

app.use(passport.initialize());
app.use(passport.session());


passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




app.use(express.static('public'))

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
})
app.use(productroutes);
app.get('/',(req,res)=>{
    res.render("landingPage");
})
app.use(reviewRoutes);
app.use(authRoutes);
app.use(cartRoutes);






app.listen(process.env.PORT || 3000,()=>{
    console.log("server running at port");
})