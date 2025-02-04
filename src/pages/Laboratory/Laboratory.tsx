import './Laboratory.scss'
import { teachers } from '../../data/teachers'
import { courses } from '../../data/courses'
import CardTeachers from '../../UI/CardTeachers/CardTeachers'
import CardCourses from '../../UI/CardCourses/CardCourses'

export default function Laboratory() {
  return (
    <div className="laboratory-container">
      {/* Блок с преподавателями */}
      <h2 className="section-title">Наші викладачі та лаборанти</h2>
      <ul className="teachers-list">
        {teachers.map((teacher) => (
          <li key={teacher.id}>
            <CardTeachers
              name={teacher.name}
              position={teacher.position}
              email={teacher.email}
              phone={teacher.phone}
              photo={teacher.photo}
            />
          </li>
        ))}
      </ul>

      <h2 className="section-title">Курси, які підтримує лабораторія</h2>
      <ul className="courses-list">
        {courses.map((course) => (
          <li key={course.id}>
            <CardCourses
              title={course.title}
              description={course.description}
              teacher={course.teacher}
              image={course.image}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
