const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());



var cors = require('cors')
app.use(cors())


const HotelBook = require('./models/hotelbook');

const User = require('./models/user');
const Spa = require('./models/spa');
const Contactus = require('./models/contactus');




app.post('/hotelbook', async (req, res) => {
    try {
        const hotelBook = await HotelBook.create(req.body)
        res.status(200).json(hotelBook);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})


app.get('/hotelbook', async (req, res) => {
    try {
        const hotelBook = await HotelBook.find({});
        res.status(200).json(hotelBook);
    } catch (error) {
        res.status(5009).json({ message: error.message })
    }
})

//to  get   hotel Book by id
app.get('/hotelBook/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const hotelBook = await HotelBook.findById(id);
        res.status(200).json(hotelBook);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//to update hotelBook by id
app.put('/hotelbook/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const hotelBook = await HotelBook.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if (!hotelBook) {
            return res.status(404).json({ message: `cannot find any hotel Book with ${id}` })
        }
        const updatedHotelBook = await HotelBook.findById(id);
        res.status(200).json(updatedHotelBook);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// delete a hotel Book
app.delete('/hotelbook/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const hotelBook = await HotelBook.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if (!hotelBook) {
            return res.status(404).json({ message: `cannot find any hotel Book with ${id}` })
        }

        res.status(200).json(hotelBook);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})






app.post("/login", async (req, res) => {
    const { email, password } = req.body


    const user = await User.findOne({ email: email })
    if (user) {
        if (password === user.password) {
            res.send({ message: "Login Successfull", user: user })
        } else {
            res.send({ message: "Password didn't match" })
        }
    } else {
        res.send({ message: "User not registered" })
    }
    console.log(user);
})


app.post("/register", async (req, res) => {
    const { name, email, password } = req.body
    const user = await User.findOne({ email: email })
    if (user) {
        return res.json({ message: "User already registerd" })
    } else {
        const user = await User.create({
            name,
            email,
            password
        })
        console.log(user);
        // user.save(err => {
        //     if(err) {
        //         res.send(err)
        //     } else {
        //         res.send( { message: "Successfully Registered, Please login now." })
        //     }
        // })
    }
})


app.get('/register', async (req, res) => {
    try {
        const user = await User.find({});
        res.status(200).json(user);
    } catch (error) {
        res.status(5009).json({ message: error.message })
    }
})






// spa

app.post('/addspa', async (req, res) => {
    try {
        const spa = await Spa.create(req.body)
        res.status(200).json(spa);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})



//get all spa details
app.get('/allSpaList', async (req, resp) => {
    const spaList = await Spa.find()
    try {
        if (spaList) {
            resp.json({ success: true, data: spaList })
        }
        else {
            resp.json({ success: false, data: 'No Data Found' })
        }
    }
    catch (err) {
        console.log(err)
    }
})

//get details of spa

app.get('/spaDetails/:id', async (req, resp) => {
    const selectID = req.params.id
    console.log(selectID)
    const dataDetails = await Spa.findOne({ _id: selectID })
    try {
        if (dataDetails) {
            resp.json({ success: true, data: dataDetails })
        }
        else {
            resp.json({ success: false, data: 'No Data Found' })

        }
    }
    catch (err) { console.log(err) }
})


// contact us

app.post('/contactus', async (req, res) => {
    try {
        const contactus = await Contactus.create(req.body)
        res.status(200).json(contactus);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})


app.get('/contactus', async (req, res) => {
    try {
        const contactus = await Contactus.find({});
        res.status(200).json(contactus);
    } catch (error) {
        res.status(5009).json({ message: error.message })
    }
})

//to  get   contactus by id
app.get('/contactus/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const contactus = await Contactus.findById(id);
        res.status(200).json(contactus);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//to update Contactus by id
app.put('/contactus/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const contactus = await Contactus.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database
        if (!contactus) {
            return res.status(404).json({ message: `cannot find any Contactus with ${id}` })
        }
        const updatedContactus = await Contactus.findById(id);
        res.status(200).json(updatedContactus);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// delete a Contactus
app.delete('/contactus/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const contactus = await Contactus.findByIdAndDelete(id, req.body);
        //we cannot find any product in database
        if (!contactus) {
            return res.status(404).json({ message: `cannot find any Contactus with ${id}` })
        }

        res.status(200).json(contactus);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})








mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://admin:Sunny2798@sunnyapi.kndypoa.mongodb.net/allapiresort?retryWrites=true&w=majority')
    .then(() => {
        console.log('connected to MongoDB')
        app.listen(4001, () => {
            console.log('Node api is running on port 4001')
        })
    }).catch((error) => {
        console.log(error)
    })