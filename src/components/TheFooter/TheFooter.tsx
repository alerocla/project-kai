import { Container, Row, Col } from 'react-bootstrap'
import './TheFooter.scss'

export default function TheFooter() {
  return (
    <>
      <footer className="footer custom-footer py-4">
        <Container>
          <Row className="d-flex justify-content-between align-items-center">
            <Col md={3} className="text-center text-md-start">
              <p>
                📍 <b>Адреса:</b>
                <br />
                [Адреса]
              </p>
            </Col>
            <Col md={3} className="text-center text-md-start">
              <p>
                📞 <b>Телефон:</b>
                <br />
                [Контактний номер]
              </p>
            </Col>
            <Col md={3} className="text-center text-md-start">
              <p>
                📧 <b>Email:</b>
                <br />
                [Контактна пошта]
              </p>
            </Col>
            <Col md={3} className="text-center text-md-start">
              <p>
                🕒 <b>Години роботи:</b>
                <br />
                Пн-Пт 9:00 – 18:00
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}
