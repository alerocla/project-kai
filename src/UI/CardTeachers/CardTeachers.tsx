import Card from 'react-bootstrap/Card'
import './CardTeachers.scss'

interface CardUIProps {
  name: string
  position: string
  email: string
  phone: string
  photo: string
}

export default function CardUI({
  name,
  position,
  email,
  phone,
  photo,
}: CardUIProps) {
  return (
    <Card className="teacher-card">
      <Card.Img
        variant="top"
        src={photo}
        alt={name}
        className="teacher-photo"
      />
      <Card.Body>
        <Card.Title className="teacher-name">{name}</Card.Title>
        <Card.Subtitle className="teacher-position">{position}</Card.Subtitle>
        <Card.Text className="teacher-info">
          <b>Email:</b> {email} <br />
          <b>Телефон:</b> {phone}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
