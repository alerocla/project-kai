import Table from 'react-bootstrap/Table'
import { labStudent } from '../../../../data/labStudent'
import { IoChevronBackCircleOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

export default function LabStudent() {
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
      <h2>Перевірка статусу виконаних лабораторних робіт</h2>
      <p>
        Перевірте статус ваших лабораторних робіт, що були здані для перевірки.
      </p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Назва роботи</th>
            <th>Предмет</th>
            <th>Статус</th>
            <th>Оцінка</th>
            <th>Коментар викладача</th>
          </tr>
        </thead>
        <tbody>
          {labStudent.map((work) => (
            <tr key={work.id}>
              <td>{work.title}</td>
              <td>{work.subject}</td>
              <td>{work.status}</td>
              <td>{work.grade}</td>
              <td>{work.teacherComment}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
