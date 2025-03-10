const express = require("express");
const cors = require("cors");
const pool = require("./db");


const app = express();

//middleware
app.use(cors());
app.use(express.json());

// routes


// Create a new todo
app.post("/todos", async (req, res) => {
    try {

        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: "Empty request body. Make sure Content-Type is JSON." });
        }

        const { description } = req.body;

        if (!description) {
            return res.status(400).json({ error: "Description is required" });
        }

        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description]
        );

        res.json(newTodo.rows[0]); // Send inserted todo back to client
    } catch (err) {
        console.error("❌ Error in POST /todos:", err);
        res.status(500).json({ error: "Server error", details: err.message });
    }
});




// get all todos

// update a todo

// delete a todo

app.listen(5000, () => {
    console.log("server has started on port 5000");
})