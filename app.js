const colors = require("colors");
const path = require("path");
const http = require("http");
const express = require("express");
const cors = require("cors")
const socketio = require("socket.io");
const { notFound, errorHandler } = require("./middleware/error");
const connectDB = require("./db");
const { join } = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const protect = require("./middleware/auth");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const profileRouter = require("./routes/profileRouter");
const conversationRouter = require("./routes/conversation");
const messageRouter = require("./routes/message");
const requestRouter = require("./routes/request");
const notificationRouter = require("./routes/notifications");

const { json, urlencoded } = express;

connectDB();
const app = express();

const whitelist = ["https://delightful-biscochitos-181cea.netlify.app"]
app.use(cors({
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) return callback(null, true);
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
  credentials: true
}))

const server = http.createServer(app);

const io = socketio(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("connected");
});

if (process.env.NODE_ENV === "development") {
  app.use(logger("dev"));
}
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(join(__dirname, "build")));

app.use((req, res, next) => {
  req.io = io;
  next();
});
app.get("/", (req, res) => {
  res.send("API is running");
}
);



app.use("/profile", profileRouter);
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/notification", notificationRouter);
app.use("/conversations", protect, conversationRouter);
app.use("/messages", protect, messageRouter);
app.use("/request", requestRouter);
// app.get('*', (req, res) => {
//   res.redirect('/')
// })


// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "build")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname), "build", "index.html")
//   );
// } else {
//   app.get("/", (req, res) => {
    // res.send("API is running");
//   });
// }

app.use(notFound);
app.use(errorHandler);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});

module.exports = { app, server };
