const express= require("express");
const http= require("http");
const path= require("path");
const app=express();
const PORT=9000;

const server=http.createServer(app);
app.use(express.static(path.resolve("./public/")))

app.get("/", (req, res)=>{
    return res.sendFile("./index.html");
})

server.listen(PORT,()=>{console.log("server started at prot : " , PORT)})