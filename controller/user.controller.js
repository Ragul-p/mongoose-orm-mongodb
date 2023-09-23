const User = require("../model/user.model")

async function createUser(req, res) {

    // 1. method
    // const user = User.create({
    //     username: "ajay",
    //     email: "ajay@gmail.com",
    //     age: 18
    // })

    // 2. method
    // const user = new User({
    //     username: "bala",
    //     email: "bala@gmail.com",
    //     age: 18
    // }).save();

    // 3. method
    // const userlist = [{ username: "daya", email: "daya@gmail.com", age: 21 }, { username: "eaya", email: "eaya@gmail.com", age: 22 }, { username: "fron", email: "fron@gmail.com", age: 21 }]
    // const user = User.insertMany(userlist)



    //4. method
    // const user = User.collection.insertOne({
    //     username: "gaya",
    //     email: "gaya@gmail.com",
    //     age: 25
    // })


    // 5. method
    // const userlist = [{ username: "x", email: "x@gmail.com", age: 30 }, { username: "y", email: "y@gmail.com", age: 31 }, { username: "z", email: "z@gmail.com", age: 32 }]
    // const user = User.collection.insertMany(userlist)

    return res.status(200).json({ message: "create" })
}





async function readUser(req, res) {

    // const user = await User.find();  //--> find all document
    // const user = await User.findOne({username:"ajay"});  //--> find one document
    // const user = await User.find({ age: { $gt: 21 } });  //--> find age greater than 21
    // const user = await User.find().limit(2);   //--> only 2 documents

    // const user = await User.find().sort({ age: 1 });  //--> asscending
    // const user = await User.find().sort({ age: -1 }); //--> descending

    // const user = await User.find().select("username age");  //--> only include username and age
    // const user = await User.countDocuments({ age: 21 }); //--> count age 21 how many users
    // const user = await User.distinct("age");   //--> remove duplicate age and age only in array

    // const user = await User.find({ $or: [{ age: 21 }, { age: 30 }] });  //--> age 21 or 30

    // const user = await User.aggregate([{ $group: { _id: '$age', count: { $sum: 1 } } }]); //--> same age count user

    // const user = await User.find({ age: { $in: [25, 21] } });  //--> only include 25 and 21 age user
    // const user = await User.find({ age: { $nin: [25, 21] } });  //--> remove age 25 and 21 age user

    return res.status(200).json(user)
}




async function updateUser(req, res) {

    // const user = await User.updateOne({ username: "ajay" }, { age: 30 });
    // const user = await User.updateMany({ age: { $gte: 30 } }, { $set: { status: "senior developer" } });  // Update the age of all users older than 30
    // const user = await User.replaceOne({ username: "ajay" }, { username: "aaaa", age: 30 }); // Replace the document with a new one
    // const user = await User.updateOne({ username: "aaaa" }, { $set: { age: 35 } });

    // Create a new document if not found
    // const user = await User.findOneAndUpdate({ username: "aaaa" }, { $set: { age: 35 } }, { new: true, upsert: true });


    return res.status(200).json({ message: "update" })
}

async function deleteUser(req, res) {

    // const user = await User.deleteOne({ username: "aaaa" });
    // const user = await User.deleteMany({ age: { $gt: 31 } });
    // const user = await User.deleteMany({});
    // const user = await User.findByIdAndDelete("650e9d01c50c0f3603050bc2");
    // const user = await User.findOneAndDelete({ username: "daya" });
    // const user = await User.findOneAndRemove({ username: "eaya" });

    return res.status(200).json({ message: "delete" })
}

module.exports = { createUser, readUser, updateUser, deleteUser }
