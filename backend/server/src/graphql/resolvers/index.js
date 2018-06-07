import GraphQLDate from 'graphql-date';
// *imports resolvers
    import AbilityResolvers from './abilities-resolvers';
    import AccesshistoryDeviceResolvers from './accesshistory_devices-resolvers';
    import AchievementResolvers from './achievements-resolvers';
    import AddressResolvers from './addresses-resolvers';
    import AllergyResolvers from './allergies-resolvers';
    import AllyResolvers from './allies-resolvers';
    import BookResolvers from './books-resolvers';
    import CampusCarrerResolvers from './campus_carrers-resolvers';
    import CampusResolvers from './campus-resolvers';
    import CarrerResolvers from './carrers-resolvers';
    import CategoryResolvers from './categories-resolvers';
    import CityResolvers from './cities-resolvers';
    import ClassroomResolvers from './classrooms-resolvers';
    import CommentResolvers from './comments-resolvers';
    import CountryResolvers from './countries-resolvers';
    import CycleResolvers from './cycles-resolvers';
    import DepartmentResolvers from './departments-resolvers';
    import DeviceResolvers from './devices-resolvers';
    import DisabilityResolvers from './disabilities-resolvers';
    import DiseaseResolvers from './diseases-resolvers';
    import EmployeeDepartmentResolvers from './employees_departments-resolvers';
    import EmployeeResolvers from './employees-resolvers';
    import EventResolvers from './events-resolvers';
    import FamiliarResolvers from './familiars-resolvers';
    import FileResolvers from './files-resolvers';
    import FunctionResolvers from './functions-resolvers';
    import GroupSubjectResolvers from './groups_subjects-resolvers';
    import GroupResolvers from './groups-resolvers';
    import HomeworkResolvers from './homeworks-resolvers';
    import InventoryResolvers from './inventories-resolvers';
    import JobResolvers from './jobs-resolvers';
    import LanguageResolvers from './languages-resolvers';
    import LibraryResolvers from './libraries-resolvers';
    import LoanDetailResolvers from './loans_details-resolvers';
    import LoanResolvers from './loans-resolvers';
    import MedicalrecordDisabilityResolvers from './medicalrecord_disabilities-resolvers';
    import MedicalrecordMedicineResolvers from './medicalrecord_medicines-resolvers';
    import MedicalrecordResolvers from './medicalrecords-resolvers';
    import MedicineResolvers from './medicines-resolvers';
    import MultimediaResolvers from './multimedias-resolvers';
    import NoAttendanceResolvers from './noattendances-resolvers';
    import NoteResolvers from './notes-resolvers';
    import PaymentMethodResolvers from './paymentmethods-resolvers';
    import PersonalDataResolvers from './personaldatas-resolvers';
    import PhoneResolvers from './phones-resolvers';
    import PostResolvers from './posts-resolvers';
    import ProviderResolvers from './providers-resolvers';
    import RelationshipResolvers from './relationships-resolvers';
    import ReportResolvers from './reports-resolvers';
    import ScholarshipResolvers from './scholarships-resolvers';
    import ServiceResolvers from './services-resolvers';
    import SocialNetworkResolvers from './socialnetworks-resolvers';
    import SportResolvers from './sports-resolvers';
    import StateResolvers from './states-resolvers';
    import StudentHomeworkResolvers from './students_homeworks-resolvers';
    import StudentPaymentMethodResolvers from './students_paymentmethods-resolvers';
    import StudentScholarshipResolvers from './students_scholarships-resolvers';
    import StudentResolvers from './students-resolvers';
    import StudentTypeResolvers from './studenttypes-resolvers';
    import SubjectResolvers from './subjects-resolvers';
    import SubscriptionResolvers from './subscriptions-resolvers';
    import TeacherSubjectResolvers from './teachers_subjects-resolvers';
    import TeacherResolvers from './teachers-resolvers';
    import TeacherTypeResolvers from './teachertypes-resolvers';
    import TelephonelineResolvers from './telephonelines-resolvers';
    import TopicResolvers from './topics-resolvers';
    import UnityResolvers from './unities-resolvers';
    import UserLanguageResolvers from './users_languages-resolvers';
    import UserAbilityResolvers from './users_abilities-resolvers';
    import UserAchievementResolvers from './users_achievements-resolvers';
    import UserSportResolvers from './users_sports-resolvers';
    import UserResolvers from './users-resolvers';
    import VacancyResolvers from './vacancies-resolvers';
    import VehicleResolvers from './vehicles-resolvers';

    import User from '../../models/users';

export default {
    Date: GraphQLDate,
    AccesshistoryDevice: {
        user: ({ user }) => User.findById(user)
    },
    Employee: {
        user: ({ user }) => User.findById(user)
    },
    Event: {
        user: ({ user }) => User.findById(user)
    },
    Familiar: {
        user: ({ user }) => User.findById(user)
    },
    Job: {
        user: ({ user }) => User.findById(user)
    },
    Loan: {
        user: ({ user }) => User.findById(user)
    },
    Medicalrecord: {
        user: ({ user }) => User.findById(user)
    },
    Post: {
        id_user: ({ user }) => User.findById(user)
    },
    Report: {
        user: ({ user }) => User.findById(user)
    },
    Student: {
        user: ({ user }) => User.findById(user)
    },
    Teacher: {
        user: ({ user }) => User.findById(user)
    },
    UserLanguage: {
        user: ({ user }) => User.findById(user)
    },
    UserAbility: {
        user: ({ user }) => User.findById(user)
    },
    UserAchievement: {
        user: ({ user }) => User.findById(user)
    },
    UserSport: {
        user: ({ user }) => User.findById(user)
    },
    Query: {

        getAbility: AbilityResolvers.getAbility,
        getAbilities: AbilityResolvers.getAbilities,

        getAccesshistoryDevice: AccesshistoryDeviceResolvers.getAccesshistoryDevice,
        getAccesshistoryDevices: AccesshistoryDeviceResolvers.getAccesshistoryDevices,
        getUserAccesshistoryDevices: AccesshistoryDeviceResolvers.getUserAccesshistoryDevices,

        getAchievement: AchievementResolvers.getAchievement,
        getAchievements: AchievementResolvers.getAchievements,

        getAddress: AddressResolvers.getAddress,
        getAddresses: AddressResolvers.getAddresses,

        getAllergy: AllergyResolvers.getAllergy,
        getAllergies: AllergyResolvers.getAllergies,

        getAlly: AllyResolvers.getAlly,
        getAllies: AllyResolvers.getAllies,

        getBook: BookResolvers.getBook,
        getBooks: BookResolvers.getBooks,

        getCampusCarrer: CampusCarrerResolvers.getCampusCarrer,
        getCampusCarrers: CampusCarrerResolvers.getCampusCarrers,

        getCampus: CampusResolvers.getCampus,
        getAllCampus: CampusResolvers.getAllCampus,

        getCarrer: CarrerResolvers.getCarrer,
        getCarrers: CarrerResolvers.getCarrers,

        getCategory: CategoryResolvers.getCategory,
        getCategories: CategoryResolvers.getCategories,

        getCity: CityResolvers.getCity,
        getCities: CityResolvers.getCities,

        getClassroom: ClassroomResolvers.getClassroom,
        getClassrooms: ClassroomResolvers.getClassrooms,

        getComment: CommentResolvers.getComment,
        getComments: CommentResolvers.getComments,

        getCountry: CountryResolvers.getCountry,
        getCountries: CountryResolvers.getCountries,

        getCycle: CycleResolvers.getCycle,
        getCycles: CycleResolvers.getCycles,

        getDepartment: DepartmentResolvers.getDepartment,
        getDepartments: DepartmentResolvers.getDepartments,

        getDevice: DeviceResolvers.getDevice,
        getDevices: DeviceResolvers.getDevices,

        getDisability: DisabilityResolvers.getDisability,
        getDisabilities: DisabilityResolvers.getDisabilities,

        getDisease: DiseaseResolvers.getDisease,
        getDiseases: DiseaseResolvers.getDiseases,

        getEmployeeDepartment: EmployeeDepartmentResolvers.getEmployeeDepartment,
        getEmployeeDepartments: EmployeeDepartmentResolvers.getEmployeeDepartments,

        getEmployee: EmployeeResolvers.getEmployee,
        getEmployees: EmployeeResolvers.getEmployees,
        getUserEmployees: EmployeeResolvers.getUserEmployees,

        getEvent: EventResolvers.getEvent,
        getEvents: EventResolvers.getEvents,
        getUserEvents: EventResolvers.getUserEvents,

        getFamiliar: FamiliarResolvers.getFamiliar,
        getFamiliars: FamiliarResolvers.getFamiliars,
        getUserFamiliars: FamiliarResolvers.getUserFamiliars,

        getFile: FileResolvers.getFile,
        getFiles: FileResolvers.getFiles,

        getFunction: FunctionResolvers.getFunction,
        getFunctions: FunctionResolvers.getFunctions,

        getGroupSubject: GroupSubjectResolvers.getGroupSubject,
        getGroupSubjects: GroupSubjectResolvers.getGroupSubjects,

        getGroup: GroupResolvers.getGroup,
        getGroups: GroupResolvers.getGroups,

        getHomework: HomeworkResolvers.getHomework,
        getHomeworks: HomeworkResolvers.getHomeworks,

        getInventory: InventoryResolvers.getInventory,
        getInventories: InventoryResolvers.getInventories,

        getJob: JobResolvers.getJob,
        getJobs: JobResolvers.getJobs,
        getUserJobs: JobResolvers.getUserJobs,

        getLanguage: LanguageResolvers.getLanguage,
        getLanguages: LanguageResolvers.getLanguages,

        getLibrary: LibraryResolvers.getLibrary,
        getLibraries: LibraryResolvers.getLibraries,

        getLoanDetail: LoanDetailResolvers.getLoanDetail,
        getLoanDetails: LoanDetailResolvers.getLoanDetails,

        getLoan: LoanResolvers.getLoan,
        getLoans: LoanResolvers.getLoans,
        getUserLoans: LoanResolvers.getUserLoans,

        getMedicalrecordDisability: MedicalrecordDisabilityResolvers.getMedicalrecordDisability,
        getMedicalrecordDisabilities: MedicalrecordDisabilityResolvers.getMedicalrecordDisabilities,

        getMedicalrecordMedicine: MedicalrecordMedicineResolvers.getMedicalrecordMedicine,
        getMedicalrecordMedicines: MedicalrecordMedicineResolvers.getMedicalrecordMedicines,

        getMedicalrecord: MedicalrecordResolvers.getMedicalrecord,
        getMedicalrecords: MedicalrecordResolvers.getMedicalrecords,
        getUserMedicalrecords: MedicalrecordResolvers.getUserMedicalrecords,

        getMedicine: MedicineResolvers.getMedicine,
        getMedicines: MedicineResolvers.getMedicines,

        getMultimedia: MultimediaResolvers.getMultimedia,
        getMultimedias: MultimediaResolvers.getMultimedias,

        getNoAttendance: NoAttendanceResolvers.getNoAttendance,
        getNoAttendances: NoAttendanceResolvers.getNoAttendances,

        getNote: NoteResolvers.getNote,
        getNotes: NoteResolvers.getNotes,

        getPaymentMethod: PaymentMethodResolvers.getPaymentMethod,
        getPaymentMethods: PaymentMethodResolvers.getPaymentMethods,

        getPersonalData: PersonalDataResolvers.getPersonalData,
        getPersonalDatas: PersonalDataResolvers.getPersonalDatas,

        getPhone: PhoneResolvers.getPhone,
        getPhones: PhoneResolvers.getPhones,

        getPost: PostResolvers.getPost,
        getPosts: PostResolvers.getPosts,
        getUserPosts: PostResolvers.getUserPosts,

        getProvider: ProviderResolvers.getProvider,
        getProviders: ProviderResolvers.getProviders,

        getRelationship: RelationshipResolvers.getRelationship,
        getRelationships: RelationshipResolvers.getRelationships,

        getReport: ReportResolvers.getReport,
        getReports: ReportResolvers.getReports,
        getUserReports: ReportResolvers.getUserReports,

        getScholarship: ScholarshipResolvers.getScholarship,
        getScholarships: ScholarshipResolvers.getScholarships,

        getService: ServiceResolvers.getService,
        getServices: ServiceResolvers.getServices,

        getSocialNetwork: SocialNetworkResolvers.getSocialNetwork,
        getSocialNetworks: SocialNetworkResolvers.getSocialNetworks,

        getSport: SportResolvers.getSport,
        getSports: SportResolvers.getSports,

        getState: StateResolvers.getState,
        getStates: StateResolvers.getStates,

        getStudentHomework: StudentHomeworkResolvers.getStudentHomework,
        getStudentHomeworks: StudentHomeworkResolvers.getStudentHomeworks,

        getStudentPaymentMethod: StudentPaymentMethodResolvers.getStudentPaymentMethod,
        getStudentPaymentMethods: StudentPaymentMethodResolvers.getStudentPaymentMethods,

        getStudentScholarship: StudentScholarshipResolvers.getStudentScholarship,
        getStudentScholarships: StudentScholarshipResolvers.getStudentScholarships,
        
        getStudent: StudentResolvers.getStudent,
        getStudents: StudentResolvers.getStudents,
        getUserStudents: StudentResolvers.getUserStudents,

        getStudentType: StudentTypeResolvers.getStudentType,
        getStudentTypes: StudentTypeResolvers.getStudentTypes,

        getSubject: SubjectResolvers.getSubject,
        getSubjects: SubjectResolvers.getSubjects,

        getSubscription: SubscriptionResolvers.getSubscription,
        getSubscriptions: SubscriptionResolvers.getSubscriptions,

        getTeacherSubject: TeacherSubjectResolvers.getTeacherSubject,
        getTeacherSubjects: TeacherSubjectResolvers.getTeacherSubjects,

        getTeacher: TeacherResolvers.getTeacher,
        getTeachers: TeacherResolvers.getTeachers,
        getUserTeachers: TeacherResolvers.getUserTeachers,

        getTeacherType: TeacherTypeResolvers.getTeacherType,
        getTeacherTypes: TeacherTypeResolvers.getTeacherTypes,

        getTelephoneline: TelephonelineResolvers.getTelephoneline,
        getTelephonelines: TelephonelineResolvers.getTelephonelines,

        getTopic: TopicResolvers.getTopic,
        getTopics: TopicResolvers.getTopics,

        getUnity: UnityResolvers.getUnity,
        getUnities: UnityResolvers.getUnities,

        getUserLanguage: UserLanguageResolvers.getUserLanguage,
        getUserLanguages: UserLanguageResolvers.getUserLanguages,
        getUserAllLanguages: UserLanguageResolvers.getUserAllLanguages,

        getUserAbility: UserAbilityResolvers.getUserAbility,
        getUserAbilities: UserAbilityResolvers.getUserAbilities,
        getUserAllAbilities: UserAbilityResolvers.getUserAllAbilities,

        getUserAchievement: UserAchievementResolvers.getUserAchievement,
        getUserAchievements: UserAchievementResolvers.getUserAchievements,
        getUserAllAchievements: UserAchievementResolvers.getUserAllAchievements,

        getUserSport: UserSportResolvers.getUserSport,
        getUserSports: UserSportResolvers.getUserSports,
        getUserAllSports: UserSportResolvers.getUserAllSports,

        getUser: UserResolvers.getUser,
        getUsers: UserResolvers.getUsers,

        getVacancy: VacancyResolvers.getVacancy,
        getVacancies: VacancyResolvers.getVacancies,

        getVehicle: VehicleResolvers.getVehicle,
        getVehicles: VehicleResolvers.getVehicles,

        me: UserResolvers.me

    },
    Mutation: {

        createAbility: AbilityResolvers.createAbility,
        updateAbility: AbilityResolvers.updateAbility,
        deleteAbility: AbilityResolvers.deleteAbility,

        createAccesshistoryDevice: AccesshistoryDeviceResolvers.createAccesshistoryDevice,
        updateAccesshistoryDevice: AccesshistoryDeviceResolvers.updateAccesshistoryDevice,
        deleteAccesshistoryDevice: AccesshistoryDeviceResolvers.deleteAccesshistoryDevice,

        createAchievement: AchievementResolvers.createAchievement,
        updateAchievement: AchievementResolvers.updateAchievement,
        deleteAchievement: AchievementResolvers.deleteAchievement,

        createAddress: AddressResolvers.createAddress,
        updateAddress: AddressResolvers.updateAddress,
        deleteAddress: AddressResolvers.deleteAddress,

        createAllergy: AllergyResolvers.createAllergy,
        updateAllergy: AllergyResolvers.updateAllergy,
        deleteAllergy: AllergyResolvers.deleteAllergy,

        createAlly: AllyResolvers.createAlly,
        updateAlly: AllyResolvers.updateAlly,
        deleteAlly: AllyResolvers.deleteAlly,

        createBook: BookResolvers.createBook,
        updateBook: BookResolvers.updateBook,
        deleteBook: BookResolvers.deleteBook,

        createCampusCarrer: CampusCarrerResolvers.createCampusCarrer,
        updateCampusCarrer: CampusCarrerResolvers.updateCampusCarrer,
        deleteCampusCarrer: CampusCarrerResolvers.deleteCampusCarrer,

        createCampus: CampusResolvers.createCampus,
        updateCampus: CampusResolvers.updateCampus,
        deleteCampus: CampusResolvers.deleteCampus,

        createCarrer: CarrerResolvers.createCarrer,
        updateCarrer: CarrerResolvers.updateCarrer,
        deleteCarrer: CarrerResolvers.deleteCarrer,

        createCategory: CategoryResolvers.createCategory,
        updateCategory: CategoryResolvers.updateCategory,
        deleteCategory: CategoryResolvers.deleteCategory,

        createCity: CityResolvers.createCity,
        updateCity: CityResolvers.updateCity,
        deleteCity: CityResolvers.deleteCity,

        createClassroom: ClassroomResolvers.createClassroom,
        updateClassroom: ClassroomResolvers.updateClassroom,
        deleteClassroom: ClassroomResolvers.deleteClassroom,

        createComment: CommentResolvers.createComment,
        updateComment: CommentResolvers.updateComment,
        deleteComment: CommentResolvers.deleteComment,

        createCountry: CountryResolvers.createCountry,
        updateCountry: CountryResolvers.updateCountry,
        deleteCountry: CountryResolvers.deleteCountry,

        createCycle: CycleResolvers.createCycle,
        updateCycle: CycleResolvers.updateCycle,
        deleteCycle: CycleResolvers.deleteCycle,

        createDepartment: DepartmentResolvers.createDepartment,
        updateDepartment: DepartmentResolvers.updateDepartment,
        deleteDepartment: DepartmentResolvers.deleteDepartment,

        createDevice: DeviceResolvers.createDevice,
        updateDevice: DeviceResolvers.updateDevice,
        deleteDevice: DeviceResolvers.deleteDevice,

        createDisability: DisabilityResolvers.createDisability,
        updateDisability: DisabilityResolvers.updateDisability,
        deleteDisability: DisabilityResolvers.deleteDisability,

        createDisease: DiseaseResolvers.createDisease,
        updateDisease: DiseaseResolvers.updateDisease,
        deleteDisease: DiseaseResolvers.deleteDisease,

        createEmployeeDepartment: EmployeeDepartmentResolvers.createEmployeeDepartment,
        updateEmployeeDepartment: EmployeeDepartmentResolvers.updateEmployeeDepartment,
        deleteEmployeeDepartment: EmployeeDepartmentResolvers.deleteEmployeeDepartment,

        createEmployee: EmployeeResolvers.createEmployee,
        updateEmployee: EmployeeResolvers.updateEmployee,
        deleteEmployee: EmployeeResolvers.deleteEmployee,

        createEvent: EventResolvers.createEvent,
        updateEvent: EventResolvers.updateEvent,
        deleteEvent: EventResolvers.deleteEvent,

        createFamiliar: FamiliarResolvers.createFamiliar,
        updateFamiliar: FamiliarResolvers.updateFamiliar,
        deleteFamiliar: FamiliarResolvers.deleteFamiliar,

        createFile: FileResolvers.createFile,
        updateFile: FileResolvers.updateFile,
        deleteFile: FileResolvers.deleteFile,

        createFunction: FunctionResolvers.createFunction,
        updateFunction: FunctionResolvers.updateFunction,
        deleteFunction: FunctionResolvers.deleteFunction,

        createGroupSubject: GroupSubjectResolvers.createGroupSubject,
        updateGroupSubject: GroupSubjectResolvers.updateGroupSubject,
        deleteGroupSubject: GroupSubjectResolvers.deleteGroupSubject,

        createGroup: GroupResolvers.createGroup,
        updateGroup: GroupResolvers.updateGroup,
        deleteGroup: GroupResolvers.deleteGroup,

        createHomework: HomeworkResolvers.createHomework,
        updateHomework: HomeworkResolvers.updateHomework,
        deleteHomework: HomeworkResolvers.deleteHomework,

        createInventory: InventoryResolvers.createInventory,
        updateInventory: InventoryResolvers.updateInventory,
        deleteInventory: InventoryResolvers.deleteInventory,

        createJob: JobResolvers.createJob,
        updateJob: JobResolvers.updateJob,
        deleteJob: JobResolvers.deleteJob,

        createLanguage: LanguageResolvers.createLanguage,
        updateLanguage: LanguageResolvers.updateLanguage,
        deleteLanguage: LanguageResolvers.deleteLanguage,

        createLibrary: LibraryResolvers.createLibrary,
        updateLibrary: LibraryResolvers.updateLibrary,
        deleteLibrary: LibraryResolvers.deleteLibrary,

        createLoanDetail: LoanDetailResolvers.createLoanDetail,
        updateLoanDetail: LoanDetailResolvers.updateLoanDetail,
        deleteLoanDetail: LoanDetailResolvers.deleteLoanDetail,

        createLoan: LoanResolvers.createLoan,
        updateLoan: LoanResolvers.updateLoan,
        deleteLoan: LoanResolvers.deleteLoan,

        createMedicalrecordDisability: MedicalrecordDisabilityResolvers.createMedicalrecordDisability,
        updateMedicalrecordDisability: MedicalrecordDisabilityResolvers.updateMedicalrecordDisability,
        deleteMedicalrecordDisability: MedicalrecordDisabilityResolvers.deleteMedicalrecordDisability,

        createMedicalrecordMedicine: MedicalrecordMedicineResolvers.createMedicalrecordMedicine,
        updateMedicalrecordMedicine: MedicalrecordMedicineResolvers.updateMedicalrecordMedicine,
        deleteMedicalrecordMedicine: MedicalrecordMedicineResolvers.deleteMedicalrecordMedicine,

        createMedicalrecord: MedicalrecordResolvers.createMedicalrecord,
        updateMedicalrecord: MedicalrecordResolvers.updateMedicalrecord,
        deleteMedicalrecord: MedicalrecordResolvers.deleteMedicalrecord,

        createMedicine: MedicineResolvers.createMedicine,
        updateMedicine: MedicineResolvers.updateMedicine,
        deleteMedicine: MedicineResolvers.deleteMedicine,

        createMultimedia: MultimediaResolvers.createMultimedia,
        updateMultimedia: MultimediaResolvers.updateMultimedia,
        deleteMultimedia: MultimediaResolvers.deleteMultimedia,

        createNoAttendance: NoAttendanceResolvers.createNoAttendance,
        updateNoAttendance: NoAttendanceResolvers.updateNoAttendance,
        deleteNoAttendance: NoAttendanceResolvers.deleteNoAttendance,

        createNote: NoteResolvers.createNote,
        updateNote: NoteResolvers.updateNote,
        deleteNote: NoteResolvers.deleteNote,

        createPaymentMethod: PaymentMethodResolvers.createPaymentMethod,
        updatePaymentMethod: PaymentMethodResolvers.updatePaymentMethod,
        deletePaymentMethod: PaymentMethodResolvers.deletePaymentMethod,

        createPersonalData: PersonalDataResolvers.createPersonalData,
        updatePersonalData: PersonalDataResolvers.updatePersonalData,
        deletePersonalData: PersonalDataResolvers.deletePersonalData,

        createPhone: PhoneResolvers.createPhone,
        updatePhone: PhoneResolvers.updatePhone,
        deletePhone: PhoneResolvers.deletePhone,

        createPost: PostResolvers.createPost,
        updatePost: PostResolvers.updatePost,
        deletePost: PostResolvers.deletePost,

        createProvider: ProviderResolvers.createProvider,
        updateProvider: ProviderResolvers.updateProvider,
        deleteProvider: ProviderResolvers.deleteProvider,

        createRelationship: RelationshipResolvers.createRelationship,
        updateRelationship: RelationshipResolvers.updateRelationship,
        deleteRelationship: RelationshipResolvers.deleteRelationship,

        createReport: ReportResolvers.createReport,
        updateReport: ReportResolvers.updateReport,
        deleteReport: ReportResolvers.deleteReport,

        createScholarship: ScholarshipResolvers.createScholarship,
        updateScholarship: ScholarshipResolvers.updateScholarship,
        deleteScholarship: ScholarshipResolvers.deleteScholarship,

        createService: ServiceResolvers.createService,
        updateService: ServiceResolvers.updateService,
        deleteService: ServiceResolvers.deleteService,

        createSocialNetwork: SocialNetworkResolvers.createSocialNetwork,
        updateSocialNetwork: SocialNetworkResolvers.updateSocialNetwork,
        deleteSocialNetwork: SocialNetworkResolvers.deleteSocialNetwork,

        createSport: SportResolvers.createSport,
        updateSport: SportResolvers.updateSport,
        deleteSport: SportResolvers.deleteSport,

        createState: StateResolvers.createState,
        updateState: StateResolvers.updateState,
        deleteState: StateResolvers.deleteState,

        createStudentHomework: StudentHomeworkResolvers.createStudentHomework,
        updateStudentHomework: StudentHomeworkResolvers.updateStudentHomework,
        deleteStudentHomework: StudentHomeworkResolvers.deleteStudentHomework,

        createStudentPaymentMethod: StudentPaymentMethodResolvers.createStudentPaymentMethod,
        updateStudentPaymentMethod: StudentPaymentMethodResolvers.updateStudentPaymentMethod,
        deleteStudentPaymentMethod: StudentPaymentMethodResolvers.deleteStudentPaymentMethod,

        createStudentScholarship: StudentScholarshipResolvers.createStudentScholarship,
        updateStudentScholarship: StudentScholarshipResolvers.updateStudentScholarship,
        deleteStudentScholarship: StudentScholarshipResolvers.deleteStudentScholarship,

        createStudent: StudentResolvers.createStudent,
        updateStudent: StudentResolvers.updateStudent,
        deleteStudent: StudentResolvers.deleteStudent,

        createStudentType: StudentTypeResolvers.createStudentType,
        updateStudentType: StudentTypeResolvers.updateStudentType,
        deleteStudentType: StudentTypeResolvers.deleteStudentType,

        createSubject: SubjectResolvers.createSubject,
        updateSubject: SubjectResolvers.updateSubject,
        deleteSubject: SubjectResolvers.deleteSubject,

        createSubscription: SubscriptionResolvers.createSubscription,
        updateSubscription: SubscriptionResolvers.updateSubscription,
        deleteSubscription: SubscriptionResolvers.deleteSubscription,

        createTeacherSubject: TeacherSubjectResolvers.createTeacherSubject,
        updateTeacherSubject: TeacherSubjectResolvers.updateTeacherSubject,
        deleteTeacherSubject: TeacherSubjectResolvers.deleteTeacherSubject,

        createTeacher: TeacherResolvers.createTeacher,
        updateTeacher: TeacherResolvers.updateTeacher,
        deleteTeacher: TeacherResolvers.deleteTeacher,

        createTeacherType: TeacherTypeResolvers.createTeacherType,
        updateTeacherType: TeacherTypeResolvers.updateTeacherType,
        deleteTeacherType: TeacherTypeResolvers.deleteTeacherType,

        createTelephoneline: TelephonelineResolvers.createTelephoneline,
        updateTelephoneline: TelephonelineResolvers.updateTelephoneline,
        deleteTelephoneline: TelephonelineResolvers.deleteTelephoneline,

        createTopic: TopicResolvers.createTopic,
        updateTopic: TopicResolvers.updateTopic,
        deleteTopic: TopicResolvers.deleteTopic,

        createUnity: UnityResolvers.createUnity,
        updateUnity: UnityResolvers.updateUnity,
        deleteUnity: UnityResolvers.deleteUnity,

        createUserLanguage: UserLanguageResolvers.createUserLanguage,
        updateUserLanguage: UserLanguageResolvers.updateUserLanguage,
        deleteUserLanguage: UserLanguageResolvers.deleteUserLanguage,

        createUserAbility: UserAbilityResolvers.createUserAbility,
        updateUserAbility: UserAbilityResolvers.updateUserAbility,
        deleteUserAbility: UserAbilityResolvers.deleteUserAbility,

        createUserAchievement: UserAchievementResolvers.createUserAchievement,
        updateUserAchievement: UserAchievementResolvers.updateUserAchievement,
        deleteUserAchievement: UserAchievementResolvers.deleteUserAchievement,

        createUserSport: UserSportResolvers.createUserSport,
        updateUserSport: UserSportResolvers.updateUserSport,
        deleteUserSport: UserSportResolvers.deleteUserSport,

        createUser: UserResolvers.createUser,
        updateUser: UserResolvers.updateUser,
        deleteUser: UserResolvers.deleteUser,

        createVacancy: VacancyResolvers.createVacancy,
        updateVacancy: VacancyResolvers.updateVacancy,
        deleteVacancy: VacancyResolvers.deleteVacancy,

        createVehicle: VehicleResolvers.createVehicle,
        updateVehicle: VehicleResolvers.updateVehicle,
        deleteVehicle: VehicleResolvers.deleteVehicle

    }
}