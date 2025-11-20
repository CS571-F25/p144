import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, ProgressBar, Badge, Tab, Tabs } from 'react-bootstrap';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  dependencies: number[];
}

interface Reflection {
  id: number;
  date: string;
  content: string;
}

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample project data - in real app, this would come from props/context/API
  const projects = [
    { id: 1, title: 'Learn German', description: 'Reach B1 proficiency in 9 months', progress: 35, tasksCompleted: 7, totalTasks: 20 },
    { id: 2, title: 'Tech Career Transition', description: 'Land a software engineering role', progress: 60, tasksCompleted: 12, totalTasks: 20 },
    { id: 3, title: 'Marathon Training', description: 'Complete first marathon in 6 months', progress: 25, tasksCompleted: 5, totalTasks: 20 },
    { id: 4, title: 'Build Portfolio Website', description: 'Create and deploy personal portfolio', progress: 80, tasksCompleted: 16, totalTasks: 20 },
    { id: 5, title: 'Master Data Structures', description: 'Complete all leetcode patterns', progress: 45, tasksCompleted: 9, totalTasks: 20 },
    { id: 6, title: 'Write a Novel', description: '50,000 words for NaNoWriMo', progress: 15, tasksCompleted: 3, totalTasks: 20 },
  ];

  const project = projects[parseInt(id || '0') - 1] || projects[0];

  const [timelineWeeks, setTimelineWeeks] = useState(12);
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Complete A1 German course', completed: true, dependencies: [] },
    { id: 2, title: 'Complete A2 German course', completed: true, dependencies: [1] },
    { id: 3, title: 'Complete B1 German course', completed: false, dependencies: [2] },
    { id: 4, title: 'Build 3000-word vocabulary', completed: false, dependencies: [1] },
    { id: 5, title: 'Take B1 certification exam', completed: false, dependencies: [3, 4] },
  ]);

  const [reflections, setReflections] = useState<Reflection[]>([
    { id: 1, date: '2024-01-15', content: 'Started my German learning journey! Completed first week of A1 course.' },
    { id: 2, date: '2024-02-20', content: 'A1 completed! Feeling confident about basic conversations.' },
    { id: 3, date: '2024-03-10', content: 'Halfway through A2. Grammar is getting more challenging but manageable.' },
  ]);

  const [newReflection, setNewReflection] = useState('');

  const handleAddReflection = () => {
    if (newReflection.trim()) {
      const reflection: Reflection = {
        id: reflections.length + 1,
        date: new Date().toISOString().split('T')[0],
        content: newReflection,
      };
      setReflections([...reflections, reflection]);
      setNewReflection('');
    }
  };

  const toggleTaskCompletion = (taskId: number) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const getTaskStatus = (task: Task) => {
    if (task.completed) return 'completed';
    const allDepsCompleted = task.dependencies.every(depId =>
      tasks.find(t => t.id === depId)?.completed
    );
    return allDepsCompleted ? 'available' : 'blocked';
  };

  return (
    <>
      <div className="bg-primary text-white py-4">
        <Container fluid className="px-4">
          <Button variant="light" size="sm" className="mb-3" onClick={() => navigate('/projects')}>
            ← Back to Projects
          </Button>
          <h1 className="display-5 fw-bold">{project.title}</h1>
          <p className="lead">{project.description}</p>
          <div className="d-flex align-items-center gap-3 mt-3">
            <Badge bg="light" text="dark">{project.tasksCompleted}/{project.totalTasks} tasks completed</Badge>
            <Badge bg="light" text="dark">{project.progress}% complete</Badge>
          </div>
        </Container>
      </div>

      <Container fluid className="px-4 py-4">
          {/* Timeline Slider */}
          <Card className="mb-4">
            <Card.Body>
              <h4 className="mb-3">Project Timeline</h4>
              <div className="mb-3">
                <label className="form-label fw-bold">
                  Duration: {timelineWeeks} weeks
                </label>
                <input
                  type="range"
                  className="form-range"
                  min="4"
                  max="52"
                  value={timelineWeeks}
                  onChange={(e) => setTimelineWeeks(parseInt(e.target.value))}
                />
                <div className="d-flex justify-content-between text-muted small">
                  <span>4 weeks</span>
                  <span>52 weeks</span>
                </div>
              </div>
              <div className="progress" style={{ height: '30px' }}>
                <div
                  className="progress-bar bg-success"
                  style={{ width: `${project.progress}%` }}
                >
                  {project.progress}%
                </div>
              </div>
              <div className="mt-3 text-muted">
                <small>
                  Estimated completion: {new Date(Date.now() + timelineWeeks * 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                </small>
              </div>
            </Card.Body>
          </Card>

          {/* Tabbed Interface */}
          <Tabs defaultActiveKey="tasks" className="mb-3">
            <Tab eventKey="tasks" title="Tasks & Dependencies">
              <Card>
                <Card.Body>
                  <h5 className="mb-3">Task Dependencies</h5>
                  <p className="text-muted mb-4">
                    Tasks are automatically unlocked when their dependencies are completed.
                  </p>
                  <div className="list-group">
                    {tasks.map(task => {
                      const status = getTaskStatus(task);
                      return (
                        <div
                          key={task.id}
                          className="list-group-item d-flex justify-content-between align-items-start"
                        >
                          <div className="d-flex align-items-start gap-3 flex-grow-1">
                            <input
                              type="checkbox"
                              checked={task.completed}
                              onChange={() => toggleTaskCompletion(task.id)}
                              disabled={status === 'blocked'}
                              className="form-check-input mt-1"
                            />
                            <div className="flex-grow-1">
                              <div className="fw-bold">{task.title}</div>
                              {task.dependencies.length > 0 && (
                                <small className="text-muted">
                                  Depends on: Task {task.dependencies.join(', Task ')}
                                </small>
                              )}
                            </div>
                          </div>
                          <Badge
                            bg={status === 'completed' ? 'success' : status === 'available' ? 'primary' : 'secondary'}
                          >
                            {status}
                          </Badge>
                        </div>
                      );
                    })}
                  </div>
                </Card.Body>
              </Card>
            </Tab>

            <Tab eventKey="reflections" title="Reflections">
              <Card>
                <Card.Body>
                  <h5 className="mb-3">Reflection Journal</h5>
                  <p className="text-muted mb-4">
                    Document your journey, challenges, and growth throughout the project.
                  </p>

                  {/* Add new reflection */}
                  <div className="mb-4">
                    <textarea
                      className="form-control mb-2"
                      rows={3}
                      placeholder="Write your reflection..."
                      value={newReflection}
                      onChange={(e) => setNewReflection(e.target.value)}
                    />
                    <Button variant="primary" size="sm" onClick={handleAddReflection}>
                      Add Reflection
                    </Button>
                  </div>

                  {/* Reflection timeline */}
                  <div className="reflection-timeline">
                    {reflections.map(reflection => (
                      <Card key={reflection.id} className="mb-3">
                        <Card.Body>
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <Badge bg="secondary">{reflection.date}</Badge>
                          </div>
                          <Card.Text>{reflection.content}</Card.Text>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>

                  {reflections.length === 0 && (
                    <div className="text-center text-muted py-4">
                      <p>No reflections yet. Start documenting your journey!</p>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Tab>

            <Tab eventKey="insights" title="Insights">
              <Card>
                <Card.Body>
                  <h5 className="mb-3">Project Insights</h5>

                  <Row className="g-3">
                    <Col md={6}>
                      <Card className="card-color-1">
                        <Card.Body>
                          <h6>Available Tasks</h6>
                          <div className="fs-3 fw-bold">
                            {tasks.filter(t => getTaskStatus(t) === 'available').length}
                          </div>
                          <small className="text-muted">Ready to work on</small>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={6}>
                      <Card className="card-color-2">
                        <Card.Body>
                          <h6>Blocked Tasks</h6>
                          <div className="fs-3 fw-bold">
                            {tasks.filter(t => getTaskStatus(t) === 'blocked').length}
                          </div>
                          <small className="text-muted">Waiting on dependencies</small>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={6}>
                      <Card className="card-color-3">
                        <Card.Body>
                          <h6>Completed Tasks</h6>
                          <div className="fs-3 fw-bold">
                            {tasks.filter(t => t.completed).length}
                          </div>
                          <small className="text-muted">Finished</small>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={6}>
                      <Card className="card-color-4">
                        <Card.Body>
                          <h6>Total Reflections</h6>
                          <div className="fs-3 fw-bold">
                            {reflections.length}
                          </div>
                          <small className="text-muted">Journal entries</small>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Tab>
          </Tabs>
        </Container>
    </>
  );
}

export default ProjectDetail;
