const express = require("express");
const cors = require("cors");
const prisma = require("./db"); // Import Prisma client

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// Create a new todo
app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        if (!description) {
            return res.status(400).json({ error: "Description is required" });
        }

        const newTodo = await prisma.todo.create({
            data: { description },
        });

        res.status(201).json(newTodo);
    } catch (err) {
        console.error("❌ Error in POST /todos:", err);
        res.status(500).json({
            error: "Server error",
            details: err.message || "No details provided",
        });
    }
});

// Start the server
app.listen(5000, () => {
    console.log("✅ Server started on port 5000");
});
