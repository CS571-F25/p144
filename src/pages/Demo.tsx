import { useState } from 'react';
import { Button, Form, ListGroup, Badge } from 'react-bootstrap';
import Hero from '../components/Hero';
import PageContainer from '../components/PageContainer';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

function Demo() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Set up development environment', completed: true },
    { id: 2, title: 'Create project structure', completed: true },
    { id: 3, title: 'Build core components', completed: false },
    { id: 4, title: 'Implement routing', completed: false },
    { id: 5, title: 'Add styling with Bootstrap', completed: false }
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskTitle.trim()) {
      const newTask: Task = {
        id: tasks.length + 1,
        title: newTaskTitle,
        completed: false
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle('');
    }
  };

  const handleToggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <>
      <Hero
        title="Interactive Demo"
        subtitle="Try out basic task management features"
      />
      <PageContainer>
        <div className="px-3">
          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3>Task List Demo</h3>
              <Badge bg="primary" pill>
                {completedCount}/{tasks.length} completed
              </Badge>
            </div>
            <p className="text-muted">
              This is a simple demonstration of task management. The full PathForge application
              will include dependency mapping, timeline visualization, and critical path analysis.
            </p>
          </div>

          <Form onSubmit={handleAddTask} className="mb-4">
            <div className="d-flex gap-2">
              <Form.Control
                type="text"
                placeholder="Enter a new task..."
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
              />
              <Button type="submit" variant="primary">
                Add Task
              </Button>
            </div>
          </Form>

          <ListGroup>
            {tasks.map(task => (
              <ListGroup.Item
                key={task.id}
                className="d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center gap-3">
                  <Form.Check
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggleTask(task.id)}
                  />
                  <span
                    style={{
                      textDecoration: task.completed ? 'line-through' : 'none',
                      color: task.completed ? '#6c757d' : 'inherit'
                    }}
                  >
                    {task.title}
                  </span>
                </div>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  Delete
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>

          {tasks.length === 0 && (
            <div className="text-center text-muted py-5">
              <p>No tasks yet. Add your first task above!</p>
            </div>
          )}
        </div>
      </PageContainer>
    </>
  );
}

export default Demo;
