const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// Créer une tâche
app.post('/tasks', async (req, res) => {
  const { title } = req.body;
  const task = await prisma.task.create({ data: { title } });
  res.json(task);
});

// Lister les tâches
app.get('/tasks', async (req, res) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
