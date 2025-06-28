const express = require("express")
const db = require("./utils/db-connections")

require("./models")


const app = express()

const userRouter = require("./routes/userRoutes")
const busRouter = require("./routes/busRoutes")
const bookingRouter = require("./routes/bookingRoutes")

app.use(express.json())
app.use("/users", userRouter)
app.use("/bus", busRouter)
app.use("/bookings", bookingRouter)

db.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server running at PORT 3000");
  })
}).catch((err) => {
  console.log(err);
})








