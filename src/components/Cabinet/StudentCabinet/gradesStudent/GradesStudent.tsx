import Table from 'react-bootstrap/Table'
import { grades } from '../../../../data/grades'
import { IoChevronBackCircleOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

export default function GradesStudent() {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }
  return (
    <>
      <IoChevronBackCircleOutline
        onClick={handleBack}
        className="back-button"
        size={40}
        aria-label="Повернутися назад"
        role="button"
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Topic</th>
            <th>Grade</th>
            <th>Teacher</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((item) => (
            <tr key={item.id}>
              <td>{item.subject}</td>
              <td>{item.topic}</td>
              <td>{item.grade}</td>
              <td>{item.teacher}</td>
              <td>{item.comment}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
