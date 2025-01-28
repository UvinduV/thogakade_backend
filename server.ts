import express from "express";
import customerRoutes from "./routes/Customer-routes";

const app = express();
app.use(express.json());

app.use("/Customer",customerRoutes);

app.listen(3000,(err=>{
    console.log("server port 3000") ;
}))