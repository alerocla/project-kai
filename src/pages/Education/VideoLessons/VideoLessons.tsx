import './VideoLessons.scss'
import { videos } from '../../../data/videos'
import { useNavigate } from 'react-router-dom'
import { IoChevronBackCircleOutline } from 'react-icons/io5'

export default function VideoLessons() {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className="videos-container">
      <h2 className="section-title">Відеоуроки</h2>

      <IoChevronBackCircleOutline
        onClick={handleBack}
        className="back-line2"
        size={40}
        aria-label="Повернутися назад"
        role="button"
      />

      {videos.length === 0 ? (
        <p className="no-data">📂 Даних поки що немає...</p>
      ) : (
        <ul className="videos-list">
          {videos.map((video) => (
            <li key={video.id} className="video-item">
              <h3>{video.title}</h3>
              <p>{video.description}</p>
              <iframe
                width="100%"
                height="200"
                src={video.videoUrl}
                title={video.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
