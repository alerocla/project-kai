import Table from 'react-bootstrap/Table'
import { StudentOfTeacher } from '../../../../data/studen-of-teacher'
import { IoChevronBackCircleOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

export default function StudentOfTeachers() {
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
            <th>Status</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {StudentOfTeacher.map((item) => (
            <tr key={item.id}>
              <td>{item.subject}</td>
              <td>{item.topic}</td>
              <td>{item.student}</td>
              <td>
                <input type="number" placeholder="grade..." />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
