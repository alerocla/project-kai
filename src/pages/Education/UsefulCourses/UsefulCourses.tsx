import './UsefulCourses.scss'
import { usefulCourses } from '../../../data/usefulCourses'
import { useNavigate } from 'react-router-dom'
import { IoChevronBackCircleOutline } from 'react-icons/io5'

export default function UsefulCourses() {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className="courses-container">
      <h2 className="section-title">Посилання на корисні курси</h2>

      <IoChevronBackCircleOutline
        onClick={handleBack}
        className="back-line2"
        size={40}
        aria-label="Повернутися назад"
        role="button"
      />

      {usefulCourses.length === 0 ? (
        <p className="no-data">📂 Даних поки що немає...</p>
      ) : (
        <ul className="courses-list">
          {usefulCourses.map((course) => (
            <li key={course.id} className="course-item">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <a
                href={course.link}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 Перейти до курсу
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
