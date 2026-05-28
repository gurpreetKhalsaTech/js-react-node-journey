const tasks = [
  {
    id: 1,
    title: "Design UI",
    status: "pending",
    priority: "high",
    assignee: "Alice",
  },
  {
    id: 2,
    title: "Write Tests",
    status: "completed",
    priority: "medium",
    assignee: "Bob",
  },
  {
    id: 3,
    title: "Fix Bugs",
    status: "pending",
    priority: "low",
    assignee: "Alice",
  },
  {
    id: 4,
    title: "Deploy App",
    status: "in-progress",
    priority: "high",
    assignee: "Charlie",
  },
  {
    id: 5,
    title: "Code Review",
    status: "completed",
    priority: "medium",
    assignee: "Bob",
  },
];

tasks[4].status='pending';

console.log(tasks);

