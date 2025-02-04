import './TheSchedule.scss'
import { schedule } from '../../../data/schedule'
import { IoChevronBackCircleOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

export default function TheSchedule() {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }
  return (
    <div className="schedule-container">
      <h2 className="section-title">Розклад занять та консультацій</h2>
      <IoChevronBackCircleOutline
        onClick={handleBack}
        className="back-line"
        size={40}
      />
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Викладач</th>
            <th>Предмет</th>
            <th>День</th>
            <th>Час</th>
            <th>Аудиторія</th>
            <th>Консультація</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item) => (
            <tr key={item.id}>
              <td>{item.teacher}</td>
              <td>{item.subject}</td>
              <td>{item.day}</td>
              <td>{item.time}</td>
              <td>{item.room}</td>
              <td>{item.consultation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
