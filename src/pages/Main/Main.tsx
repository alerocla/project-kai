import './Main.scss'
import { Container, Row, Col, Carousel } from 'react-bootstrap'

export default function Main() {
  return (
    <Container fluid className="main-container px-3 px-md-5">
      <Row className="text-center py-5">
        <Col>
          <h1 className="main-title">
            Ласкаво просимо до Навчальної комп'ютерної лабораторії!
          </h1>
        </Col>
      </Row>

      <Row className="about-section py-4">
        <Col md={6}>
          <Carousel className="shadow rounded">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="src/assets/lab1.jpeg"
                alt="Слайд 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="src/assets/lab2.jpeg"
                alt="Слайд 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="src/assets/lab3.jpeg"
                alt="Слайд 3"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-center">
          <h2>Про нас</h2>
          <p>
            Навчальна комп'ютерна лабораторія (НКЛ) – це сучасний освітній
            простір для студентів і викладачів, де поєднуються інноваційні
            технології, практичні знання та дослідницькі можливості.
          </p>
        </Col>
      </Row>

      <Row className="features-section py-5">
        <Col>
          <h2 className="text-center mb-4">Наші можливості</h2>
          <ul>
            <li>Доступ до комп’ютерного обладнання та програмних засобів</li>
            <li>Проведення лабораторних робіт та наукових досліджень</li>
            <li>Інтерактивні навчальні матеріали та відеоуроки</li>
            <li>Онлайн-здача лабораторних робіт та автоматизована перевірка</li>
            <li>Спільнота студентів і викладачів для обміну досвідом</li>
          </ul>
        </Col>
      </Row>

      <Row className="news-section py-5 bg-light">
        <Col>
          <h2 className="text-center mb-4">Новини та оновлення</h2>
          <div className="news-item">
            <p>
              📢 <b>Нове обладнання в лабораторії!</b> Ми додали потужні робочі
              станції для проведення розрахунків у машинному навчанні.
            </p>
          </div>
          <div className="news-item">
            <p>
              📅 <b>Графік консультацій оновлено!</b> Дивіться актуальний
              розклад у вашому особистому кабінеті.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
