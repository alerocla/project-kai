import { Routes, Route } from 'react-router-dom'
import NotFound from '../pages/NotFound/NotFound'
import Main from '../pages/Main/Main'
import Laboratory from '../pages/Laboratory/Laboratory'
import Education from '../pages/Education/Education'
import TheSchedule from '../pages/Education/TheSchedule/TheSchedule'
import MethodicalGuides from '../pages/Education/MethodicalGuides/MethodicalGuides'
import Presentations from '../pages/Education/Presentations/Presentations'
import VideoLessons from '../pages/Education/VideoLessons/VideoLessons'
import UsefulCourses from '../pages/Education/UsefulCourses/UsefulCourses'
import Equipment from '../pages/Equipmet/Equipment'
import Research from '../pages/Research/Research'
import FormCabinet from '../components/Cabinet/FormCabinet/FormCabinet'
import StudentCabinet from '../components/Cabinet/StudentCabinet/StudentCabinet'
import TeacherCabinet from '../components/Cabinet/TicherCabinet/TeacherCabinet'
import GradesStudent from '../components/Cabinet/StudentCabinet/gradesStudent/GradesStudent'
import StudentCabinetLayout from '../components/Cabinet/StudentCabinet/StudentCabinetLayout'
import LabStudent from '../components/Cabinet/StudentCabinet/labStudent/LabStudent'
import TeacherCabinetLayout from '../components/Cabinet/TicherCabinet/TeacherCabinetLayout'
import TeacherGrades from '../components/Cabinet/TicherCabinet/teacherGrades/TeacherGrades'
import StudentOfTeachers from '../components/Cabinet/TicherCabinet/StudentOfTeacher/StudentOfTeacher'

export default function RootRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/labaratory" element={<Laboratory />} />
      <Route path="/education" element={<Education />} />
      <Route path="/schedule" element={<TheSchedule />} />
      <Route path="/equipment" element={<Equipment />} />
      <Route path="/research" element={<Research />} />
      <Route path="/cabinet" element={<FormCabinet />} />
      <Route path="student-cabinet" element={<StudentCabinetLayout />}>
        <Route index element={<StudentCabinet />} />
        <Route path="grades-student" element={<GradesStudent />} />
        <Route path="labs-student" element={<LabStudent />} />
      </Route>
      <Route path="teacher-cabinet" element={<TeacherCabinetLayout />}>
        <Route index element={<TeacherCabinet />} />
        <Route path="grades-teacher" element={<TeacherGrades />} />
        <Route path="student-of-teacher" element={<StudentOfTeachers />} />
      </Route>
      <Route path="/materials-methods" element={<MethodicalGuides />} />
      <Route path="/materials-presentations" element={<Presentations />} />
      <Route path="/materials-videos" element={<VideoLessons />} />
      <Route path="/materials-resources" element={<UsefulCourses />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
