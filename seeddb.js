const product=require('./models/prdoduct');

const seed=[{name: "Adidas predators x1.1",value: 6000,type: "shoes", img:  "https://images.unsplash.com/photo-1612387605642-b55525519f04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",desc: "Experience superior ball control with the new Predator Freak soccer cleats. Activate You+ with more Demonskin for extra spin on the ball."},{name: "Adidas predators Z",value: 2000,type: "shoes", img:  "https://images.unsplash.com/photo-1612387605642-b55525519f04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",desc: "Experience superior ball control with the new Predator Freak soccer cleats. Activate You+ with more Demonskin for extra spin on the ball."},
{name: "Adidas predators XX",value: 4000,type: "shoes", img:  "https://images.unsplash.com/photo-1612387605642-b55525519f04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",desc: "Experience superior ball control with the new Predator Freak soccer cleats. Activate You+ with more Demonskin for extra spin on the ball."}];
const seeding=()=>{
    product.insertMany(seed)
        .then(() => {
            console.log("Data Seeded");
    })
    .catch(err => {
            console.log(err);
    })
}
module.exports = seeding;