import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function StudentCabinet() {
  const navigate = useNavigate()
  const [file, setFile] = useState<File | null>(null)

  const handleExit = () => {
    localStorage.removeItem('userType')
    navigate('/')
  }

  useEffect(() => {
    const storedUserType = localStorage.getItem('userType')
    if (storedUserType !== 'student') {
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
    <Container fluid className="student-cabinet">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="mb-3">
            <Card.Header>Завантаження навчальних матеріалів</Card.Header>
            <Card.Body>
              <p>Завантажте або перегляньте необхідні матеріали.</p>
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
            <Card.Header>
              Перевірка статусу виконаних лабораторних робіт
            </Card.Header>
            <Card.Body>
              <p>Перевірте статус зданих лабораторних робіт.</p>
              <Link to="labs-student">
                <Button variant="primary">Переглянути статус</Button>
              </Link>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Header>Перегляд оцінок та коментарів викладачів</Card.Header>
            <Card.Body>
              <p>Ознайомтесь з вашими оцінками та коментарями викладачів.</p>
              <Link to="grades-student">
                <Button variant="primary">Переглянути оцінки</Button>
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
