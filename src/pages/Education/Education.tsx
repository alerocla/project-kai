import './Education.scss'
import { Link } from 'react-router-dom'
import { labWorks } from '../../data/labWorks'

export default function Education() {
  return (
    <div className="educational-container">
      <h2 className="section-title">Розклад занять та консультацій</h2>
      <div style={{ marginBottom: '40px' }} className="schedule">
        <p>📅 Дивіться актуальний розклад у вашому особистому кабінеті.</p>
        <Link to="/schedule" className="btn btn-primary">
          Переглянути розклад
        </Link>
      </div>

      <h2 className="section-title">Навчальні матеріали</h2>
      <ul className="materials-list">
        <li>
          📖 <Link to="/materials-methods">Методичні вказівки</Link>
        </li>
        <li>
          📊 <Link to="/materials-presentations">Презентації</Link>
        </li>
        <li>
          🎥 <Link to="/materials-videos">Відеоуроки</Link>
        </li>
        <li>
          🔗 <Link to="/materials-resources">Посилання на корисні курси</Link>
        </li>
      </ul>

      <h2 className="section-title">Лабораторні роботи</h2>
      <ul className="labs-list">
        {labWorks.map((lab) => (
          <li key={lab.id} className="lab-item">
            <h3>{lab.title}</h3>
            <p>{lab.description}</p>
            <a href={lab.instructions} className="btn btn-primary" download>
              📜 Завантажити інструкції
            </a>
            <a href={lab.template} className="btn btn-secondary" download>
              📂 Завантажити шаблон
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
