const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
var bodyParser = require('body-parser')
const RECIPE = require("./MongoDB/Models/recipe");
const CATEGORY = require("./MongoDB/Models/categories");

const URI = "mongodb+srv://xeeno:xeeno@yummy.3wgch.mongodb.net/Yummy";
mongoose.connect(URI, {
  useNewUrlParser: "true",
});

const app = express();
app.use(cors());
app.get('/',(_,res)=>{
    res.send("HI")
})
app.get("/Category", async (req, res) => {
  try {
    const recipe = await CATEGORY.find();
    res.send(recipe);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/Recipe", async (req, res) => {
  try {
   const id1 =  req.query.id1.trim()
   const id2 =  req.query.id2.trim()
    const categories = await RECIPE.find({
        '_id': { $in: [
            mongoose.Types.ObjectId(id1),
            mongoose.Types.ObjectId(id2),
        ]}
    })
    res.send(categories);
  } catch (err) {
    console.error(err.message);
  }
});

// const r = new RECIPE({
//   name: "Caesar Salad",
//   duration: "35 min",
//   ingredients: [
//     "24 Lettuce leaves (crisped)",
//     "1/2 Cup Cream",
//     "1 tsp Salt",
//     "1/2 tsp Black peppercorns (ground) (pissi kali mirch)",
//     "1 tsp Garlic, finely chopped",
//     "1/2 Cups Cheese, grated",
//     "2 Eggs (diced small), boiled",
//     "1/2 Cup Bread croutons (cubed and fried bread)",
//   ],
//   steps: [
//     "Wash the leaves well and wipe dry. Place them in an airtight container or plastic bag, seal and leave in the chiller tray for 3-4 hours",
//     "Mix together, the cream, salt, kali mirch, garlic and cheese",
//     "Break up the crisped lettuce, add the croutons and eggs, mix in the cream mixture and serve immediately.",
//     "Note: In case you are serving later, keep everything ready separately and mix together just before serving, so the leaves stay crisp.",
//     "You can use a combination of these vegetables that are available and use the same dressing or any other dressing like French Dressing.",
//   ],
//   ImageURI:
//     "https://i.ndtvimg.com/i/2018-02/caesar-salad_620x350_51517473796.jpg",
// });

// const c = new CATEGORY({
//   name: "Salad",
//   category: ["Salad"],
//   duration:"35-40mins",
//   menu: ["5fe7f77c763a66cd374446c5", "5fe7f6bfcbf047c63def183d"],
//   img:
//     "https://cdn.loveandlemons.com/wp-content/uploads/2019/07/salad.jpg",
// });
// c.save();
// r.save()
app.listen(process.env.PORT || 3000)
