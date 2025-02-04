import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function TeacherCabinet() {
  const navigate = useNavigate()
  const [file, setFile] = useState<File | null>(null)

  const handleExit = () => {
    localStorage.removeItem('userType')
    navigate('/')
  }

  useEffect(() => {
    const storedUserType = localStorage.getItem('userType')
    if (storedUserType !== 'teacher') {
      navigate('/')
    }
  }, [navigate])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = () => {
    if (file) {
      console.log('Файл завантажено:', file.name)
      setFile(null)
    }
  }

  return (
    <Container fluid className="teacher-cabinet">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="mb-3">
            <Card.Header>
              Завантаження та оновлення навчальних матеріалів
            </Card.Header>
            <Card.Body>
              <p>
                Завантажуйте нові матеріали для лабораторних робіт та оновлюйте
                їх.
              </p>
              <Form.Group controlId="fileUpload">
                <Form.Label>Оберіть файл</Form.Label>
                <Form.Control type="file" onChange={handleFileChange} />
              </Form.Group>
              {file && <p>Вибраний файл: {file.name}</p>}
              <Button variant="primary" onClick={handleUpload} disabled={!file}>
                Відправити
              </Button>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Header>Перевірка зданих лабораторних робіт</Card.Header>
            <Card.Body>
              <p>
                Перевірте роботи студентів, що вони здали для оцінки та
                зворотного зв'язку.
              </p>
              <Link to="grades-teacher">
                <Button variant="primary">Перевiренi роботи</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Header>Виставлення оцінок</Card.Header>
            <Card.Body>
              <p>Виставіть оцінки студентам за виконані лабораторні роботи.</p>
              <Link to="student-of-teacher">
                <Button variant="primary">Виставити оцiнки</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="text-center my-4">
        <Col>
          <Button variant="danger" onClick={handleExit}>
            Вийти з кабінету
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
