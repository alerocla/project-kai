import './Presentations.scss'
import { presentations } from '../../../data/presentations'
import { useNavigate } from 'react-router-dom'
import { IoChevronBackCircleOutline } from 'react-icons/io5'

export default function Presentations() {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }
  return (
    <div className="presentations-container">
      <h2 className="section-title">Презентації</h2>
      <IoChevronBackCircleOutline
        onClick={handleBack}
        className="back-line2"
        size={40}
      />
      <ul className="presentations-list">
        {presentations.map((presentation) => (
          <li key={presentation.id} className="presentation-item">
            <h3>{presentation.title}</h3>
            <p>{presentation.description}</p>
            <a href={presentation.file} className="btn btn-primary" download>
              📥 Завантажити
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
