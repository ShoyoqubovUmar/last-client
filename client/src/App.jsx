import { Routes, Route } from "react-router-dom"
import Auth from "./Auth"
import Table from "./components/admin/Table"
import Table1 from "./components/admin/Table1"
import AdminIndex from "./components/admin/AdminIndex"
import Groups from "./components/admin/Groups"
import Group from "./components/teacher/Group"
import AdminGroup from "./components/admin/AdminGroup"
import AdminYoqlama from "./components/admin/AdminYoqlama"
import StudentIndex from "./StudentIndex"
import TeacherIndex from "./components/teacher/TeacherIndex"
import TeacherGroups from "./components/teacher/TeacherGroups"
import Index from "./Index"
import Admin from "./components/Admin"
import Teacher from "./components/Teacher"
import Student from "./components/Student"
import TeacherStudents from "./components/teacher/TeacherStudents"
import Attendance1 from "./components/teacher/Attendance1"
function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Index/>}></Route>
          <Route path="/auth" element={<Auth/>}></Route>
          <Route path="/welcome/admin" element={<Admin/>}></Route>
          <Route path="/welcome/teacher" element={<Teacher/>}></Route>
          <Route path="/welcome/student" element={<Student/>}></Route>
          <Route path="/admin" element={<AdminIndex/>}></Route>
          <Route path="/admin/teachers" element={<Table/>}></Route>
          <Route path="/admin/students" element={<Table1/>}></Route>
          <Route path="/admin/groups" element={<Groups/>}></Route>
          <Route path="/admin/group/:id/:idTeacher" element={<AdminGroup/>}></Route>
          <Route path="/students" element={<StudentIndex/>}></Route>
          <Route path="/teacher" element={<TeacherIndex/>}></Route>
          <Route path="/teacher/group" element={<Group/>}></Route>
          <Route path="/teacher/groups" element={<TeacherGroups/>}></Route>
          <Route path="/teacher/students/:id" element={<TeacherStudents/>}></Route>
          <Route path="/yoqlama" element={<Attendance1/>}></Route>
          <Route path="/admin/yoqlama" element={<AdminYoqlama/>}></Route>
        </Routes>
    </>
  )
}

export default App
