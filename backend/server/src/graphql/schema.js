export default `
    scalar Date

    type Status {
        message: String!
    }

    type Campus {
        _id: ID!
        camname: String!
        camlogo: String!
        camphone: String!
        camcellphone: String
        camemail: String!
        camcode: String!
        camstate: String!
        camcity: String!
        camstreet: String!
        camzip: Int!
        camgeolocation: String!
        createdAt: Date!
        updatedAt: Date!
    }

    type Carrer {
        _id: ID!
        caname: String!
        calogo: String!
        casubjets: String!
        cacode: String!
        createdAt: Date!
        updatedAt: Date!
    }

    type Classroom {
        _id: ID!
        cbuilding: String!
        ckeyroom: String!
        coccupied: Boolean!
        createdAt: Date!
        updatedAt: Date!
    }

    type Employee {
        _id: ID!
        efirstname: String!
        elastname: String
        eavatar: String!
        egender: String!
        ephone: String!
        ecellphone: String
        ejobtitle: String!
        eemail: String!
        epassword: String!
        ecountrybirth: String!
        estate: String!
        ecity: String!
        estreet: String!
        ezip: Int!
        egeolocation: String!
        ebirthdate: String!
        ecurp: String!
        erfc: String!
        eimss: String!
        eemailverified: String!
        eactiveaccount: String!
        createdAt: Date!
        updatedAt: Date!
    }

    type Event {
        _id: ID!
        createdAt: Date!
        updatedAt: Date!
    }

    type Service {
        _id: ID!
        createdAt: Date!
        updatedAt: Date!
    }

    type Post {
        _id: ID!
        pttext: String
        ptimage: String
        createdAt: Date!
        updatedAt: Date!
    }

    type Student {
        _id: ID!
        sfirstname: String!
        slastname: String
        savatar: String!
        sgender: String!
        sphone: String!
        scellphone: String
        semail: String!
        spassword: String!
        scountrybirth: String!
        sstate: String!
        scity: String!
        sstreet: String!
        szip: Int!
        sgeolocation: String!
        sbirthdate: String!
        slasthighschool: String!
        senrollment: String!
        scurrentoccupation: String!
        sranking: Int!
        sresume: String
        sdateadmission: String!
        sdateegress: String
        scurp: String!
        srfc: String!
        simss: String!
        semailverified: String!
        sactiveaccount: String!
        createdAt: Date!
        updatedAt: Date!
    }

    type Subject {
        _id: ID!
        createdAt: Date!
        updatedAt: Date!
    }

    type Teacher {
        _id: ID!
        tfirstname: String!
        tlastname: String
        tavatar: String!
        tgender: String!
        tphone: String!
        tcellphone: String
        temail: String!
        tpassword: String
        tsubjets: String!
        tcountrybirth: String!
        tstate: String!
        tcity: String!
        tstreet: String!
        tzip: Int!
        tgeolocation: String!
        tbirthdate: Date
        tprofessionallicense: Int!
        toriginuniversity: String!
        tdegreestudy: String!
        tresume: String!
        tranking: Int!
        tsalary: Int!
        tdateadmission: String!
        tdateegress: String
        teducation: String!
        tcurp: String!
        trfc: String!
        timss: String!
        temailverified: String!
        tactiveaccount: String!
        createdAt: Date!
        updatedAt: Date!
    }

    type Query {
        getCampus(_id: ID!): Campus
        getAllCampus: [ Campus ]

        getCarrer(_id: ID!): Carrer
        getCarrers: [ Carrer ]

        getClassroom(_id: ID!): Classroom
        getClassrooms: [ Classroom ]

        getEmployee(_id: ID!): Employee
        getEmployees: [ Employee ]

        getEvent(_id: ID!): Event
        getEvents: [ Event ]

        getService(_id: ID!): Service
        getServices: [ Service ]
        
        getPost(_id: ID!): Post
        getPosts: [ Post ]
        
        getStudent(_id: ID!): Student
        getStudents: [ Student ]
        
        getSubject(_id: ID!): Subject
        getSubjects: [ Subject ]
        
        getTeacher(_id: ID!): Teacher
        getTeachers: [ Teacher ]
    }

    type Mutation {
        createCampus(
                    camname: String!,
                    camlogo: String!,
                    camphone: String!,
                    camcellphone: String,
                    camemail: String!,
                    camcode: String!,
                    camstate: String!,
                    camcity: String!,
                    camstreet: String!,
                    camzip: Int!,
                    camgeolocation: String!): Campus
        updateCampus(_id: ID!,
                    camname: String!,
                    camlogo: String!,
                    camphone: String!,
                    camcellphone: String,
                    camemail: String!,
                    camcode: String!,
                    camstate: String!,
                    camcity: String!,
                    camstreet: String!,
                    camzip: Int!,
                    camgeolocation: String!): Campus
        deleteCampus(_id: ID!): Status

        createCarrer(caname: String!,
                    calogo: String!,
                    casubjets: String!,
                    cacode: String!): Carrer
        updateCarrer(_id: ID!,
                    caname: String!,
                    calogo: String!,
                    casubjets: String!,
                    cacode: String!): Carrer
        deleteCarrer(_id: ID!): Status

        createClassroom(cbuilding: String!,
                        ckeyroom: String!,
                        coccupied: Boolean!): Classroom
        updateClassroom(_id: ID!,
                        cbuilding: String!,
                        ckeyroom: String!,
                        coccupied: Boolean!): Classroom
        deleteClassroom(_id: ID!): Status

        createEmployee(efirstname: String!
                        elastname: String,
                        eavatar: String!,
                        egender: String!,
                        ephone: String!,
                        ecellphone: String,
                        ejobtitle: String!,
                        eemail: String!,
                        epassword: String!,
                        ecountrybirth: String!,
                        estate: String!,
                        ecity: String!,
                        estreet: String!,
                        ezip: Int!,
                        egeolocation: String!,
                        ebirthdate: String!,
                        ecurp: String!,
                        erfc: String!,
                        eimss: String!,
                        eemailverified: String!,
                        eactiveaccount: String!): Employee
        updateEmployee(_id: ID!,
                        efirstname: String!,
                        elastname: String,
                        eavatar: String!,
                        egender: String!,
                        ephone: String!,
                        ecellphone: String,
                        ejobtitle: String!,
                        eemail: String!,
                        epassword: String!,
                        ecountrybirth: String!,
                        estate: String!,
                        ecity: String!,
                        estreet: String!,
                        ezip: Int!,
                        egeolocation: String!,
                        ebirthdate: String!,
                        ecurp: String!,
                        erfc: String!,
                        eimss: String!,
                        eemailverified: String!,
                        eactiveaccount: String!): Employee
        deleteEmployee(_id: ID!): Status
        loginEmployee(eemail: String!, epassword: String!): Employee

        createPost(pttext: String, 
                    ptimage: String): Post
        updatePost(_id: ID!,
                    pttext: String, 
                    ptimage: String): Post
        deletePost(_id: ID!): Status

        createStudent(sfirstname: String!,
                        slastname: String,
                        savatar: String!,
                        sgender: String!,
                        sphone: String!,
                        scellphone: String,
                        semail: String!,
                        spassword: String!,
                        scountrybirth: String!,
                        sstate: String!,
                        scity: String!,
                        sstreet: String!,
                        szip: Int!,
                        sgeolocation: String!,
                        sbirthdate: String!
                        slasthighschool: String!,
                        senrollment: String!,
                        scurrentoccupation: String!,
                        sranking: Int!,
                        sresume: String,
                        sdateadmission: String!,
                        sdateegress: String,
                        scurp: String!,
                        srfc: String!,
                        simss: String!,
                        semailverified: String!,
                        sactiveaccount: String!): Student
        updateStudent(_id: ID!,
                        sfirstname: String!
                        slastname: String,
                        savatar: String!,
                        sgender: String!,
                        sphone: String!,
                        scellphone: String,
                        semail: String!,
                        spassword: String!,
                        scountrybirth: String!,
                        sstate: String!,
                        scity: String!,
                        sstreet: String!,
                        szip: Int!,
                        sgeolocation: String!,
                        sbirthdate: String!
                        slasthighschool: String!,
                        senrollment: String!,
                        scurrentoccupation: String!,
                        sranking: Int!,
                        sresume: String,
                        sdateadmission: String!,
                        sdateegress: String,
                        scurp: String!,
                        srfc: String!,
                        simss: String!,
                        semailverified: String!,
                        sactiveaccount: String!): Student
        deleteStudent(_id: ID!): Status
        loginStudent( semail: String!, spassword: String!): Student
        
        createTeacher(tfirstname: String!,
                        tlastname: String,
                        tavatar: String!,
                        tgender: String!,
                        tphone: String!,
                        tcellphone: String,
                        temail: String!,
                        tpassword: String,
                        tsubjets: String!,
                        tcountrybirth: String!,
                        tstate: String!,
                        tcity: String!,
                        tstreet: String!,
                        tzip: Int!,
                        tgeolocation: String!,
                        tbirthdate: Date,
                        teducation: String!,
                        tprofessionallicense: Int!,
                        toriginuniversity: String!,
                        tdegreestudy: String!,
                        tresume: String!,
                        tranking: Int!,
                        tsalary: Int!,
                        tdateadmission: String!,
                        tdateegress: String,
                        tcurp: String!,
                        trfc: String!,
                        timss: String!,
                        temailverified: String!,
                        tactiveaccount: String!): Teacher
        updateTeacher(_id: ID!,
                        tfirstname: String!,
                        tlastname: String,
                        tavatar: String!,
                        tgender: String!,
                        tphone: String!,
                        tcellphone: String,
                        temail: String!,
                        tpassword: String,
                        tsubjets: String!,
                        tcountrybirth: String!,
                        tstate: String!,
                        tcity: String!,
                        tstreet: String!,
                        tzip: Int!,
                        tgeolocation: String!,
                        tbirthdate: Date,
                        teducation: String!,
                        tprofessionallicense: Int!,
                        toriginuniversity: String!,
                        tdegreestudy: String!,
                        tresume: String!,
                        tranking: Int!,
                        tsalary: Int!,
                        tdateadmission: String!,
                        tdateegress: String,
                        tcurp: String!,
                        trfc: String!,
                        timss: String!,
                        temailverified: String!,
                        tactiveaccount: String!): Teacher
        deleteTeacher(_id: ID!): Status
        loginTeacher(temail: String!, tpassword: String!): Teacher
    }

    schema {
        query: Query
        mutation: Mutation
    }
`;