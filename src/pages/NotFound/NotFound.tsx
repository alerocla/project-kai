import './NotFound.scss'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Страница не найдена</p>
      <Link to="/" className="not-found-button">
        Вернуться на главную
      </Link>
    </div>
  )
}
