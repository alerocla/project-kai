import './Research.scss'
import { hackathons, researchProjects, publications } from '../../data/reseatch'
import { useNavigate } from 'react-router-dom'
import { IoChevronBackCircleOutline } from 'react-icons/io5'
import { Container, Row, Col } from 'react-bootstrap'

export default function Research() {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <Container fluid className="research-container">
      <Row className="text-center py-5">
        <Col>
          <h1 className="main-title">🔬 Наукова та дослідницька діяльність</h1>
        </Col>
      </Row>

      <Row>
        <Col className="d-flex justify-content-start">
          <IoChevronBackCircleOutline
            onClick={handleBack}
            className="back-button"
            size={40}
            aria-label="Повернутися назад"
            role="button"
          />
        </Col>
      </Row>

      <Row className="research-section">
        <Col md={6} className="d-flex flex-column justify-content-center">
          <h2>Наукові проєкти</h2>
          <p>
            Наша лабораторія активно займається науковими дослідженнями в
            галузях штучного інтелекту, кібербезпеки та високопродуктивних
            обчислень.
          </p>
        </Col>
        <Col md={6}>
          <ul className="research-list">
            {researchProjects.map((project) => (
              <li key={project.id}>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <p>
                  <b>Керівник:</b> {project.leader}, <b>Рік:</b> {project.year}
                </p>
              </li>
            ))}
          </ul>
        </Col>
      </Row>

      <Row className="publications-section py-5 bg-light">
        <Col md={6} className="d-flex flex-column justify-content-center">
          <h2>Публікації та статті</h2>
          <p>
            Наші викладачі та студенти активно публікують наукові статті у
            міжнародних журналах та конференціях.
          </p>
        </Col>
        <Col md={6}>
          <ul className="publications-list">
            {publications.map((pub) => (
              <li key={pub.id}>
                <h4>{pub.title}</h4>
                <p>
                  <b>Автор:</b> {pub.author}, <b>Рік:</b> {pub.year}
                </p>
                <a href={pub.link} className="btn btn-primary" download>
                  📥 Завантажити
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>

      <Row className="hackathons-section py-5">
        <Col md={6} className="d-flex flex-column justify-content-center">
          <h2>Хакатони, конкурси, олімпіади</h2>
          <p>
            Ми підтримуємо студентів у їхніх змаганнях та конкурсах. Долучайтеся
            до наших хакатонів та випробовуйте свої навички!
          </p>
        </Col>
        <Col md={6}>
          <ul className="hackathon-list">
            {hackathons.map((hack) => (
              <li key={hack.id}>
                <h4>{hack.name}</h4>
                <p>
                  <b>Дата:</b> {hack.date}, <b>Локація:</b> {hack.location}
                </p>
                <p>{hack.description}</p>
                <a
                  href={hack.registration}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 Реєстрація
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  )
}
