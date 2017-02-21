const brewdb = require("../../brewDb.js")
		// console.log(brewDbKey);
module.exports = app => {
	app.get("/styles", function(req, res){
		brewdb.style.all((err, style)=>{
			res.status(200).json(style);
		})
	})
}
