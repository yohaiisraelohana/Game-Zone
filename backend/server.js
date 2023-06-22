// Server-side code (index.js)
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const { Server } = require('socket.io');
const userRoutes = require('./routes/user');

const cookieParser = require('cookie-parser');
const cors = require('cors');

// Create an express app
const app = express();



// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/user',userRoutes);


// Connect to the database
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // Create an HTTP server
    const server = http.createServer(app);

    // Initialize socket.io
    const io = new Server(server, {
      cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
      }
    });

    // Handle socket.io events
    io.on('connection', (socket) => {
      console.log(`A user connected :${socket.id}`);

      socket.on("send_Message", (data) => {
        socket.broadcast.emit("received_message", data);
      });
    });

    // Start the server
    server.listen(process.env.PORT, () => {
      console.log('Listening on port', process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
