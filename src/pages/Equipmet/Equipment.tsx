import './Equipment.scss'
import { useState, useEffect } from 'react'
import { equipment as initialEquipment } from '../../data/equipment'

interface ScheduleSlot {
  day: string
  time: string
  status: 'Вільно' | 'Зайнято'
}

interface EquipmentItem {
  id: number
  name: string
  description: string
  availability: 'Вільно' | 'Зайнято'
  schedule: ScheduleSlot[]
}

const Equipment: React.FC = () => {
  const getStoredEquipment = (): EquipmentItem[] => {
    const storedData = localStorage.getItem('equipmentData')
    return storedData ? JSON.parse(storedData) : initialEquipment
  }

  const [equipmentList, setEquipmentList] =
    useState<EquipmentItem[]>(getStoredEquipment)

  useEffect(() => {
    localStorage.setItem('equipmentData', JSON.stringify(equipmentList))
  }, [equipmentList])

  const handleBooking = (equipmentId: number) => {
    setEquipmentList((prevEquipment) =>
      prevEquipment.map((item) =>
        item.id === equipmentId
          ? {
              ...item,
              availability: 'Зайнято',
              schedule: item.schedule.map((slot) =>
                slot.status === 'Вільно' ? { ...slot, status: 'Зайнято' } : slot
              ),
            }
          : item
      )
    )
    alert(`Ви успішно забронювали обладнання!`)
  }

  return (
    <div className="equipment-container">
      <h2 className="section-title">Обладнання лабораторії</h2>

      {equipmentList.length === 0 ? (
        <p className="no-data">📂 Даних поки що немає...</p>
      ) : (
        <ul className="equipment-list">
          {equipmentList.map((item) => (
            <li key={item.id} className="equipment-item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>
                <b>Статус:</b>
                <span
                  className={
                    item.availability === 'Вільно' ? 'available' : 'busy'
                  }
                >
                  {item.availability}
                </span>
              </p>

              <h4>Графік використання:</h4>
              <ul className="schedule-list">
                {item.schedule.map((slot, index) => (
                  <li key={index}>
                    {slot.day}: {slot.time} -{' '}
                    <span
                      className={
                        slot.status === 'Вільно' ? 'available' : 'busy'
                      }
                    >
                      {slot.status}
                    </span>
                  </li>
                ))}
              </ul>

              {item.availability === 'Вільно' && (
                <button
                  className="btn btn-primary"
                  onClick={() => handleBooking(item.id)}
                >
                  🔖 Забронювати
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Equipment
