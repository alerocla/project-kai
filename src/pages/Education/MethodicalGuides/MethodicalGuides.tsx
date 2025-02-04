import './MethodicalGuides.scss'
import { useNavigate } from 'react-router-dom'
import { IoChevronBackCircleOutline } from 'react-icons/io5'
import { methodicalGuides } from '../../../data/methodicalGuides'

export default function MethodicalGuides() {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }
  return (
    <div className="guides-container">
      <h2 className="section-title">Методичні вказівки</h2>
      <IoChevronBackCircleOutline
        onClick={handleBack}
        className="back-line2"
        size={40}
      />
      <ul className="guides-list">
        {methodicalGuides.map((guide) => (
          <li key={guide.id} className="guide-item">
            <h3>{guide.title}</h3>
            <p>{guide.description}</p>
            <a href={guide.file} className="btn btn-primary" download>
              📥 Завантажити
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
