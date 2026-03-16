const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));

let orders = [];

const products = [

{ name:"110 Diamonds", price:"0.83$", category:"Gaming", image:"https://i.imgur.com/6IUbEMD.png", type:"playerid"},
{ name:"231 Diamonds", price:"1.82$", category:"Gaming", image:"https://i.imgur.com/6IUbEMD.png", type:"playerid"},
{ name:"330 Diamonds", price:"2.39$", category:"Gaming", image:"https://i.imgur.com/6IUbEMD.png", type:"playerid"},
{ name:"520 Diamonds", price:"4.68$", category:"Gaming", image:"https://i.imgur.com/6IUbEMD.png", type:"playerid"},
{ name:"1180 Diamonds", price:"9.80$", category:"Gaming", image:"https://i.imgur.com/6IUbEMD.png", type:"playerid"},
{ name:"2240 Diamonds", price:"19.22$", category:"Gaming", image:"https://i.imgur.com/6IUbEMD.png", type:"playerid"},

{ name:"Instagram 1000 Followers", price:"3$", category:"Social", image:"https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png", type:"link"},
{ name:"Instagram 50000 Views", price:"3$", category:"Social", image:"https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png", type:"link"},
{ name:"Instagram 100K Views", price:"5.46$", category:"Social", image:"https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png", type:"link"},
{ name:"Instagram 500K Views", price:"8.31$", category:"Social", image:"https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png", type:"link"},
{ name:"Instagram 1M Views", price:"14$", category:"Social", image:"https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png", type:"link"},

{ name:"TikTok 1000 Followers", price:"5.2$", category:"Social", image:"https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg", type:"link"},
{ name:"TikTok 5000 Followers", price:"23.9$", category:"Social", image:"https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg", type:"link"},
{ name:"TikTok 10000 Followers", price:"38.45$", category:"Social", image:"https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg", type:"link"},

{ name:"Netflix 1 Month", price:"3.2$", category:"Subscriptions", image:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", type:"phone"},
{ name:"Netflix 2 Month", price:"5.2$", category:"Subscriptions", image:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", type:"phone"},
{ name:"Netflix 6 Month", price:"11$", category:"Subscriptions", image:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", type:"phone"},
{ name:"Netflix 12 Month", price:"16$", category:"Subscriptions", image:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", type:"phone"},

{ name:"Shahid 1 Month", price:"4.42$", category:"Subscriptions", image:"https://upload.wikimedia.org/wikipedia/commons/8/8f/Shahid_logo.svg", type:"phone"},
{ name:"Shahid 2 Month", price:"8$", category:"Subscriptions", image:"https://upload.wikimedia.org/wikipedia/commons/8/8f/Shahid_logo.svg", type:"phone"},
{ name:"Shahid 6 Month", price:"12$", category:"Subscriptions", image:"https://upload.wikimedia.org/wikipedia/commons/8/8f/Shahid_logo.svg", type:"phone"},
{ name:"Shahid 12 Month", price:"16$", category:"Subscriptions", image:"https://upload.wikimedia.org/wikipedia/commons/8/8f/Shahid_logo.svg", type:"phone"},

{ name:"ChatGPT Plus Account", price:"8$", category:"Subscriptions", image:"https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", type:"phone"},

{ name:"35GB eSIM Recharge", price:"16$", category:"Recharge", image:"https://cdn-icons-png.flaticon.com/512/545/545705.png", type:"phone"}

];

function page(content){

return `

<html>

<head>

<title>RWES STOR</title>

<style>

body{
font-family:Arial;
background:#0f172a;
color:white;
margin:0;
}

header{
background:#020617;
padding:20px;
text-align:center;
font-size:30px;
}

nav{
background:#020617;
padding:10px;
text-align:center;
}

nav a{
color:white;
margin:10px;
text-decoration:none;
font-weight:bold;
}

.products{
display:flex;
flex-wrap:wrap;
justify-content:center;
}

.card{
background:#1e293b;
padding:20px;
margin:15px;
border-radius:10px;
width:220px;
text-align:center;
}

.card img{
width:80px;
height:80px;
}

input{
padding:8px;
width:90%;
margin-top:5px;
}

button{
background:#22c55e;
border:none;
padding:10px;
color:white;
margin-top:10px;
border-radius:6px;
}

</style>

</head>

<body>

<header>RWES STOR Digital Services</header>

<nav>
<a href="/">Home</a>
<a href="/gaming">Gaming</a>
<a href="/social">Social Media</a>
<a href="/subs">Subscriptions</a>
<a href="/recharge">Recharge</a>
<a href="/redeem">Redeem Code</a>
<a href="/orders">Orders</a>
</nav>

${content}

<a href="https://wa.me/96879092559"
style="position:fixed;bottom:20px;right:20px;background:#25D366;color:white;padding:14px;border-radius:30px;text-decoration:none;">
WhatsApp
</a>

<a href="https://www.instagram.com/1z44r/"
style="position:fixed;bottom:70px;right:20px;background:#E1306C;color:white;padding:14px;border-radius:30px;text-decoration:none;">
Instagram
</a>

</body>

</html>

`
}

function render(cat){

let html='<div class="products">'

products.filter(p=>p.category==cat).forEach(p=>{

html+=`

<div class="card">

<img src="${p.image}">

<h3>${p.name}</h3>

<p>${p.price}</p>

<form method="POST" action="/order">

<input type="hidden" name="product" value="${p.name}">

<input name="info" placeholder="Enter required info">

<button>Order</button>

</form>

</div>

`

})

html+='</div>'

return page(html)

}

app.get("/",(req,res)=>{

res.send(page("<h2 style='text-align:center'>Welcome to RWES STOR</h2>"))

})

app.get("/gaming",(req,res)=>res.send(render("Gaming")))
app.get("/social",(req,res)=>res.send(render("Social")))
app.get("/subs",(req,res)=>res.send(render("Subscriptions")))
app.get("/recharge",(req,res)=>res.send(render("Recharge")))

app.get("/redeem",(req,res)=>{

res.send(page(`

<div style="text-align:center;padding:40px">

<h2>Redeem Code</h2>

<form method="POST" action="/redeemcode">

<input name="player" placeholder="Enter Player ID"><br><br>

<input name="code" placeholder="Enter Code"><br><br>

<button>Redeem</button>

</form>

</div>

`))

})

app.post("/redeemcode",(req,res)=>{

orders.push({
product:"CODE REDEEM",
info:"PlayerID: "+req.body.player+" Code: "+req.body.code
})

res.send(page("<h2 style='text-align:center'>Code Sent Successfully</h2>"))

})

app.post("/order",(req,res)=>{

orders.push(req.body)

res.send(page("<h2 style='text-align:center'>Order Received</h2>"))

})

app.get("/orders",(req,res)=>{

let html="<h2>Orders</h2>"

orders.forEach(o=>{
html+=`<p>${o.product} - ${o.info}</p>`
})

res.send(page(html))

})
app.listen(3000,()=>console.log("Server running on port 3000"))
