// ===== Initial data — treat as read-only =====
const initialTasks = [
  { id: 1, title: "Design UI",   status: "pending",     priority: "high",   assignee: "Alice"   },
  { id: 2, title: "Write Tests", status: "completed",   priority: "medium", assignee: "Bob"     },
  { id: 3, title: "Fix Bugs",    status: "pending",     priority: "low",    assignee: "Alice"   },
  { id: 4, title: "Deploy App",  status: "in-progress", priority: "high",   assignee: "Charlie" },
  { id: 5, title: "Code Review", status: "completed",   priority: "medium", assignee: "Bob"     },
];

// ===== Pure functions — input in, new data out, no mutation =====

function addTask(list, newTask) {
  return [...list, newTask];
}

function updateTask(list, id, changes) {
  return list.map(task =>
    task.id === id ? { ...task, ...changes } : task
  );
}

function deleteTask(list, id) {
  return list.filter(task => task.id !== id);
}

function findTaskById(list, id) {
  return list.find(task => task.id === id);
}

function filterByStatus(list, status) {
  return list.filter(task => task.status === status);
}

function filterByAssignee(list, assignee) {
  return list.filter(task => task.assignee === assignee);
}

function sortByPriority(list) {
  const order = { high: 1, medium: 2, low: 3 };
  return [...list].sort((a, b) => order[a.priority] - order[b.priority]);
}

function groupByStatus(list) {
  return list.reduce((groups, task) => {
    (groups[task.status] ||= []).push(task);
    return groups;
  }, {});
}

function countByStatus(list) {
  return list.reduce((counts, task) => {
    counts[task.status] = (counts[task.status] || 0) + 1;
    return counts;
  }, {});
}

function searchTasksByTitle(list, keyword) {
  const lower = keyword.toLowerCase();
  return list.filter(task => task.title.toLowerCase().includes(lower));
}

function markCompleted(list, id) {
  return updateTask(list, id, { status: "completed" });
}

function getTaskTitles(list) {
  return list.map(task => task.title);
}

// ===== Compose them — see how clean this reads =====

let tasks = [...initialTasks];

tasks = addTask(tasks, {
  id: 6, title: "Code optimise", status: "in-progress",
  priority: "high", assignee: "Gurpreet",
});

tasks = updateTask(tasks, 1, { status: "completed" });
tasks = deleteTask(tasks, 5);

console.log("Find id 3:", findTaskById(tasks, 3));
console.log("Completed only:", filterByStatus(tasks, "completed"));
console.log("Bob's tasks:", filterByAssignee(tasks, "Bob"));
console.log("Sorted by priority:", sortByPriority(tasks));
console.log("Grouped:", groupByStatus(tasks));
console.log("Counts:", countByStatus(tasks));
console.log("Search 'fix':", searchTasksByTitle(tasks, "fix"));
console.log("Titles:", getTaskTitles(tasks));

tasks = markCompleted(tasks, 4);
console.log("After marking 4 complete:", tasks);