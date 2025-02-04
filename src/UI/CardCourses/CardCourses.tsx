import './CardCourses.scss'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

interface CardCoursesProps {
  title: string
  description: string
  teacher: string
  image: string
}

export default function CardCourses({
  title,
  description,
  teacher,
  image,
}: CardCoursesProps) {
  return (
    <Card className="course-card">
      <Card.Img
        variant="top"
        src={image}
        alt={title}
        className="course-image"
      />
      <Card.Body>
        <Card.Title className="course-title">{title}</Card.Title>
        <Card.Subtitle className="course-teacher">
          👨‍🏫 Викладач: {teacher}
        </Card.Subtitle>
        <Card.Text className="course-description">{description}</Card.Text>
        <Button variant="primary">Детальніше</Button>
      </Card.Body>
    </Card>
  )
}
