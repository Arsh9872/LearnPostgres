import pg from "pg";
const {Client} = pg;

const client = new Client({
    user: "APSingh",
    password: "1234",
    host: "localhost",
    port: 5432,
    database: "AlphaSierra",
});
client.connect().then(()=>{
    console.log("db connected");
})
.catch((err)=>{
    console.log("Failed to connect")
        console.error(err);
    })
