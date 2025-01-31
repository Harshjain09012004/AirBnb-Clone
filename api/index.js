const express = require('express');
const cors = require('cors');
const app = express();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('./models/user');
const placeModel = require('./models/place');
const cookieparser = require('cookie-parser')
const bcryptSalt = bcrypt.genSaltSync(10);
const jwtsecret = "dklskd#904$)(4940";
const download = require('image-downloader');
const path = require('path');
const multer = require('multer');
const upload = multer({dest:'uploads/'});
const fs = require('fs');

app.use(cookieparser());
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173',
}));
app.use('/uploads',express.static(path.join(__dirname+'/uploads')));

app.get('/test',(req,res)=>{
    res.json('test ok');
})

app.post('/create',async function(req,res){
    try{
        const obj = await userModel.create({
        name:req.body.name,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.pass,bcryptSalt)
        })
        res.json(obj);
    }
    catch(e){
        res.send("User with email already Registered");
    }
    
})

app.post('/login',async function(req,res){
    try{
        const target_user = await userModel.findOne({email:req.body.lname});
        if(target_user)
        {
            const passOk = bcrypt.compareSync(req.body.lpass,target_user.password);
            if(passOk){
                const token = jwt.sign({name:target_user.name,id:target_user._id},jwtsecret,{},(err,token)=>{
                    if(err) throw err;
                    res.cookie('token',token);
                    res.json({ success: true ,name:target_user.name});
                });
            }
            else res.json({ success: false, err: "Invalid password" });
        }
        else res.json({ success: false, err: "User not found" });
    }
    catch(e){res.status(500).json({ success: false, err: "Internal server error" })}
})

app.post('/logout',(req,res)=>{
    res.cookie('token','').json({success:true});
})

app.get('/profile',(req,res)=>{
    const {token} = req.cookies;
    if(token)
    {
        jwt.verify(token,jwtsecret,{},(err,user)=>{
            if(err) throw err;
            res.json(user);
        })
    }
    else res.json(null);
})

app.post('/uploadByLinks',(req,res)=>{
 let photourl = req.body.photoUrl;
  const newname = Date.now() + '.jpg';
  const options = {
  url: photourl,
  dest: __dirname + '/uploads/' + newname,
  };  

    download.image(options)
    .then(({ filename }) => {
        console.log('Saved to', filename);
        res.json(newname);
    })
    .catch((err) => console.error(err));
})

app.post('/uploadByButton',upload.array('photos',10),(req,res)=>{
    const upfiles = req.files;
    let filenames = [];
    for(let file of upfiles)
    {
        const orname = file.originalname;
        const ext = path.extname(orname);
        const filepath = file.path;
        const newname = Date.now() + ext;
        fs.renameSync(filepath,'uploads//' + newname);
        filenames.push(newname)
    }
    res.json(filenames)
})

app.post('/SubmitForm',(req,res)=>{
    const det = req.body;
    const {token} = req.cookies;

    if(token)
    {
        jwt.verify(token,jwtsecret,{},async (err,user)=>{
            if(err) res.json('Unsuccessful');

            await placeModel.create({
            owner:user.id, title:det.title,
            description:det.description,
            extraInfo:det.extrainfo,
            address:det.address, perks:det.perks,
            photos:det.photos, checkIn:det.checkin,
            checkOut:det.checkout, price:det.price,
            maxGuests:det.guests,
            })
            res.json('Successful');
        })
    }
    else res.json('Unsuccessful');
})
app.listen(5000);