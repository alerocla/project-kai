import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function TeacherCabinetLayout() {
  const userType = localStorage.getItem('userType')
  const navigate = useNavigate()

  useEffect(() => {
    const userType = localStorage.getItem('userType')
    if (userType !== 'teacher') {
      navigate('/')
    }
  }, [navigate])
  if (!userType) {
    navigate('/')
  }
  return (
    <div>
      <h1>📚 Кабінет викладача</h1>
      <Outlet />
    </div>
  )
}
