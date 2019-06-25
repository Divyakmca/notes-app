const mongoose=require('mongoose')
mongoose.set('useCreateIndex', true)

//connect express to mongo via mongoose
//configure the promise library to be ES6 pomises
mongoose.Promise=global.Promise //its native present in javascript


const CONNECTION_URI = process.env.MONGODB_URI || "mongodb+srv://divya:divya@dctacademy@cluster0-lplz6.mongodb.net/test?retryWrites=true&w=majority"
	mongoose
		.connect(CONNECTION_URI, {
			useNewUrlParser: true
		})
		.then(() => {
			console.log("db connected succefully");
		})
			.catch(err => {
			console.log("Error connecting to DB", err);
		});

// //connect to db
// mongoose.connect('mongodb://localhost:27017/notes-app',{ useNewUrlParser: true })
// .then((res)=>{
//     console.log('connected to db')
// })
// .catch((err)=>{
//     console.log('error connecting to db')
// })

module.exports={mongoose}