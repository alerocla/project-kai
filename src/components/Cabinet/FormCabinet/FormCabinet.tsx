import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../store/store'
import { useNavigate } from 'react-router-dom'
import { fetchTeacher } from '../../../store/sliceTeacher'
import { fetchStudent } from '../../../store/sliceStudent'
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap'
import './FormCabinet.scss'

export default function FormCabinet() {
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const studentData = useSelector((state: RootState) => state.student.student)
  const teacherData = useSelector((state: RootState) => state.teacher.teacher)
  const [choice, setChoice] = useState<string>('teacher')
  const [error, setError] = useState<string>('')
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    const storedUserType = localStorage.getItem('userType')
    if (storedUserType) {
      navigate(
        storedUserType === 'student' ? '/student-cabinet' : '/teacher-cabinet'
      )
    }

    if (choice === 'teacher') {
      dispatch(fetchTeacher())
    }
    if (choice === 'student') {
      dispatch(fetchStudent())
    }
  }, [dispatch, choice, navigate])

  const handleChoice = (choice: string) => {
    setChoice(choice)
    setError('')
  }

  const handleLogIn = () => {
    if (choice === 'student') {
      if (login === studentData?.email && password === studentData?.username) {
        localStorage.setItem('userType', 'student')
        navigate('/student-cabinet')
      } else {
        setError('Неверные данные для студента')
      }
    } else if (choice === 'teacher') {
      if (login === teacherData?.email && password === teacherData?.username) {
        localStorage.setItem('userType', 'teacher')
        navigate('/teacher-cabinet')
      } else {
        setError('Неверные данные для преподавателя')
      }
    }
  }

  return (
    <Container fluid className="form-cabinet-container">
      <Row className="text-center py-5">
        <Col>
          <h1 className="main-title">🔑 Вхід до кабінету</h1>
          <p className="subtitle">Оберіть, як ви хочете увійти</p>
        </Col>
      </Row>

      <Row className="role-selection-buttons">
        <Col md={6}>
          <Button
            variant={choice === 'student' ? 'primary' : 'outline-primary'}
            className="role-btn"
            onClick={() => handleChoice('student')}
          >
            🎓 Студент
          </Button>
        </Col>
        <Col md={6}>
          <Button
            variant={choice === 'teacher' ? 'primary' : 'outline-primary'}
            className="role-btn"
            onClick={() => handleChoice('teacher')}
          >
            👨‍🏫 Викладач
          </Button>
        </Col>
      </Row>

      <Row className="form-container justify-content-center">
        <Col md={6}>
          <h2 className="form-title">
            {choice === 'student'
              ? '🎓 Вхід для студентів'
              : '👨‍🏫 Вхід для викладачів'}
          </h2>
          <Form className="login-form">
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group controlId="login">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                placeholder="Введіть email"
                required
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Введіть пароль"
                required
              />
            </Form.Group>

            <Button
              variant="success"
              className="submit-btn"
              onClick={handleLogIn}
            >
              🔓 Увійти
            </Button>
            <p>email student: Sincere@april.biz</p>
            <p>password student: Bret</p>
            <p>email teacher: Shanna@melissa.tv</p>
            <p>password teacher: Antonette</p>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
