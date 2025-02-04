export const equipment = [
  {
    id: 1,
    name: 'Робоча станція HP Z4 G4',
    description:
      'Процесор: Intel Xeon W-2123, ОЗП: 32GB, GPU: NVIDIA RTX 3080.',
    availability: 'Вільно',
    schedule: [
      { day: 'Понеділок', time: '10:00 - 12:00', status: 'Зайнято' },
      { day: 'Середа', time: '14:00 - 16:00', status: 'Вільно' },
    ],
  },
  {
    id: 2,
    name: 'Сервер Dell PowerEdge R740',
    description:
      'CPU: 2x Intel Xeon Silver 4214, RAM: 128GB, Storage: 4TB SSD.',
    availability: 'Зайнято',
    schedule: [
      { day: 'Вівторок', time: '12:00 - 14:00', status: 'Вільно' },
      { day: 'Четвер', time: '15:00 - 17:00', status: 'Зайнято' },
    ],
  },
  {
    id: 3,
    name: 'Комп’ютер Apple iMac 27"',
    description:
      'Процесор: Intel Core i9, ОЗП: 16GB, GPU: AMD Radeon Pro 5700.',
    availability: 'Вільно',
    schedule: [
      { day: 'Понеділок', time: '9:00 - 11:00', status: 'Вільно' },
      { day: 'П’ятниця', time: '14:00 - 16:00', status: 'Зайнято' },
    ],
  },
  {
    id: 4,
    name: 'VR-гарнітура Oculus Quest 2',
    description: 'Гарнітура для віртуальної реальності з контролерами.',
    availability: 'Вільно',
    schedule: [
      { day: 'Середа', time: '13:00 - 15:00', status: 'Зайнято' },
      { day: 'П’ятниця', time: '16:00 - 18:00', status: 'Вільно' },
    ],
  },
  {
    id: 5,
    name: '3D-принтер Prusa i3 MK3S',
    description: 'Принтер для 3D-друку з високою точністю.',
    availability: 'Зайнято',
    schedule: [
      { day: 'Вівторок', time: '10:00 - 12:00', status: 'Зайнято' },
      { day: 'Четвер', time: '14:00 - 16:00', status: 'Вільно' },
    ],
  },
  {
    id: 6,
    name: 'Ноутбук Dell XPS 15',
    description: 'Процесор: Intel i7-11800H, ОЗП: 16GB, GPU: RTX 3050 Ti.',
    availability: 'Вільно',
    schedule: [
      { day: 'Понеділок', time: '8:00 - 10:00', status: 'Вільно' },
      { day: 'Середа', time: '15:00 - 17:00', status: 'Зайнято' },
    ],
  },
  {
    id: 7,
    name: 'Сервер HPE ProLiant DL380 Gen10',
    description: 'Двопроцесорний сервер для хмарних обчислень.',
    availability: 'Зайнято',
    schedule: [
      { day: 'Вівторок', time: '9:00 - 11:00', status: 'Вільно' },
      { day: 'Четвер', time: '13:00 - 15:00', status: 'Зайнято' },
    ],
  },
  {
    id: 8,
    name: 'Графічний планшет Wacom Cintiq 22',
    description: 'Професійний планшет для цифрового малювання.',
    availability: 'Вільно',
    schedule: [
      { day: 'Понеділок', time: '11:00 - 13:00', status: 'Вільно' },
      { day: 'Середа', time: '16:00 - 18:00', status: 'Зайнято' },
    ],
  },
  {
    id: 9,
    name: 'Стенд для тестування IoT-пристроїв',
    description: 'Стенд для розробки та тестування пристроїв Інтернету речей.',
    availability: 'Зайнято',
    schedule: [
      { day: 'Вівторок', time: '14:00 - 16:00', status: 'Зайнято' },
      { day: 'Четвер', time: '10:00 - 12:00', status: 'Вільно' },
    ],
  },
]
