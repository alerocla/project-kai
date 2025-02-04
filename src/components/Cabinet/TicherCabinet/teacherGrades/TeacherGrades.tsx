import Table from 'react-bootstrap/Table'
import { teacherGrades } from '../../../../data/teacherGrades'
import { IoChevronBackCircleOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

export default function TeacherGrades() {
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
            <th>Comment</th>
            <th>Student</th>
          </tr>
        </thead>
        <tbody>
          {teacherGrades.map((item) => (
            <tr key={item.id}>
              <td>{item.subject}</td>
              <td>{item.topic}</td>
              <td>{item.status}</td>
              <td>{item.comment}</td>
              <td>{item.student}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
