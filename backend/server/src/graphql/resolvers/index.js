import GraphQLDate from 'graphql-date';
import CampusResolvers from './campus-resolvers';
import CarrersResolvers from './carrers-resolvers';
import EmployeesResolvers from './employees-resolvers';
// import EventsResolvers from './events-resolvers';
// import ServicesResolvers from './services-resolvers';
import PostsResolvers from './posts-resolvers';
import StudentsResolvers from './students-resolvers';
// import SubjectsResolvers from './subjects-resolvers';
import TeachersResolvers from './teachers-resolvers';


export default {
    Date: GraphQLDate, 
    Query: {
        getCampus: CampusResolvers.getCampus,
        getAllCampus: CampusResolvers.getAllCampus,

        getCarrer: CarrersResolvers.getCarrer,
        getCarrers: CarrersResolvers.getCarrers,

        getEmployee: EmployeesResolvers.getEmployee,
        getEmployees: EmployeesResolvers.getEmployees,

        getPost: PostsResolvers.getPost,
        getPosts: PostsResolvers.getPosts,

        getStudent: StudentsResolvers.getStudent,
        getStudents: StudentsResolvers.getStudents,

        getTeacher: TeachersResolvers.getTeacher,
        getTeachers: TeachersResolvers.getTeachers
    },
    Mutation: {
        createCampus: CampusResolvers.createCampus,
        updateCampus: CampusResolvers.updateCampus,
        deleteCampus: CampusResolvers.deleteCampus,

        createCarrer: CarrersResolvers.createCarrer,
        updateCarrer: CarrersResolvers.updateCarrer,
        deleteCarrer: CarrersResolvers.deleteCarrer,

        createEmployee: EmployeesResolvers.createEmployee,
        updateEmployee: EmployeesResolvers.updateEmployee,
        deleteEmployee: EmployeesResolvers.deleteEmployee,
        loginEmployee: EmployeesResolvers.loginEmployee,

        createPost: PostsResolvers.createPost,
        updatePost: PostsResolvers.updatePost,
        deletePost: PostsResolvers.deletePost,

        createStudent: StudentsResolvers.createStudent,
        updateStudent: StudentsResolvers.updateStudent,
        deleteStudent: StudentsResolvers.deleteStudent,
        loginStudent: StudentsResolvers.loginStudent,
        
        createTeacher: TeachersResolvers.createTeacher,
        updateTeacher: TeachersResolvers.updateTeacher,
        deleteTeacher: TeachersResolvers.deleteTeacher,
        loginTeacher: TeachersResolvers.loginTeacher,
    }
}