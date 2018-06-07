//! Pendientes
/* 
    -Arreglar login user
    -Arreglar uniones de los ID entre tablas
    -Cambiar todo lo que estaba en Student a User
    -Checar en todos los models los campos Number su min y max
    -Arreglar user: User! por id_user: User! en schema, models, resolver y mocks
*/

export default `
    scalar Date

    type Status {
        message: String!
    }

    type Auth {
        token: String!
    }
        
    type Base {
        _id: ID!
        isenabled: Boolean!
        registeredbyuser: String!
        updatedbyuser: String
        deletedbyuser: String
        datedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type Ability {
        _id: ID!
        abname: String!
        abisenabled: Boolean!
        abregisteredbyuser: String!
        abupdatedbyuser: String
        abdeletedbyuser: String
        abdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type AccesshistoryDevice {
        _id: ID!
        id_device: String!
        user: User!
        adstartconnection: Date!
        adendconnection: Date!
        adisenabled: Boolean!
        adregisteredbyuser: String!
        adupdatedbyuser: String
        addeletedbyuser: String
        addatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type Achievement {
        _id: ID!
        acname: String!
        acdate: Date!
        acisenabled: Boolean!
        acregisteredbyuser: String!
        acupdatedbyuser: String
        acdeletedbyuser: String
        acdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
    
    type Address {
        _id: ID!
        id_city: String!
        astreet: String!
        aexternalnumber: String!
        ainternalnumber: String
        azip: Int!
        ageolocation: String!
        aidtable: String!
        atableowner: String!
        aisenabled: Boolean!
        aregisteredbyuser: String!
        aupdatedbyuser: String
        adeletedbyuser: String
        adatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
    
    type Allergy {
        _id: ID!
        id_medicalrecord: String!
        alname: String!
        almedicine: String!
        alisenabled: Boolean!
        alregisteredbyuser: String!
        alupdatedbyuser: String
        aldeletedbyuser: String
        aldatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
    
    type Ally {
        _id: ID!
        allname: String!
        allmanagerfirstname: String!
        allmanagerfatherlastname: String!
        allmanagermotherlastname: String
        allisenabled: Boolean!
        allregisteredbyuser: String!
        allupdatedbyuser: String
        alldeletedbyuser: String
        alldatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type Book {
        _id: ID!
        id_library: String!
        id_category: String!
        bname: String!
        bdescription: String
        byear: String!
        bauthor: String!
        bprice: Int!
        beditorial: String!
        bnumberedition: String!
        bpages: Int!
        bquantitystock: Int!
        bisenabled: Boolean!
        bregisteredbyuser: String!
        bupdatedbyuser: String
        bdeletedbyuser: String
        bdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
    
    type CampusCarrer {
        _id: ID!
        id_campus: String!
        id_carrer: String!
        ccisenabled: Boolean!
        ccregisteredbyuser: String!
        ccupdatedbyuser: String
        ccdeletedbyuser: String
        ccdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type Campus {
        _id: ID!
        camname: String!
        camabbreviation: String!
        camcode: String!
        camslogan: String!
        cammascot: String!
        camlogo: String!
        camemail: String!
        camwebpage: String!
        camdatestart: Date!
        camisenabled: Boolean!
        camregisteredbyuser: String!
        camupdatedbyuser: String
        camdeletedbyuser: String
        camdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type Carrer {
        _id: ID!
        caname: String!
        caabbreviation: String!
        cacode: String!
        calogo: String!
        cadatestart: Date!
        caisenabled: Boolean!
        caregisteredbyuser: String!
        caupdatedbyuser: String
        cadeletedbyuser: String
        cadatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type Category {
        _id: ID!
        cname: String!
        cisenabled: Boolean!
        cregisteredbyuser: String!
        cupdatedbyuser: String
        cdeletedbyuser: String
        cdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type City {
        _id: ID!
        id_state: String!
        ciname: String!
        ciabbreviation: String!
        ciisenabled: Boolean!
        ciregisteredbyuser: String!
        ciupdatedbyuser: String
        cideletedbyuser: String
        cidatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type Classroom {
        _id: ID!
        id_campus: String!
        clname: String!
        clcapacity: String!
        clbuilding: String!
        clkeyroom: String!
        cloccupied: Boolean!
        clisenabled: Boolean!
        clregisteredbyuser: String!
        clupdatedbyuser: String
        cldeletedbyuser: String
        cldatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type Comment {
        _id: ID!
        id_post: String!
        comtext: String
        comisenabled: Boolean!
        comregisteredbyuser: String!
        comupdatedbyuser: String
        comdeletedbyuser: String
        comdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type Country {
        _id: ID!
        coname: String!
        coabbreviation: String!
        cocodephone: Int!
        coisenabled: Boolean!
        coregisteredbyuser: String!
        coupdatedbyuser: String
        codeletedbyuser: String
        codatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type Cycle {
        _id: ID!
        id_carrer: String!
        cyname: String!
        cyperiod: String!
        cyisenabled: Boolean!
        cyregisteredbyuser: String!
        cyupdatedbyuser: String
        cydeletedbyuser: String
        cydatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type Department {
        _id: ID!
        depname: String!
        depisenabled: Boolean!
        depregisteredbyuser: String!
        depupdatedbyuser: String
        depdeletedbyuser: String
        depdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type Device {
        _id: ID!
        deserialnumber: String!
        detype: String!
        deinventorydate: String!
        deinventorystate: String!
        dehostname: String!
        deipaddress: String!
        deoperatingsystem: String!
        deparentdeviceid: String!
        delocation: String!
        deisenabled: Boolean!
        deregisteredbyuser: String!
        deupdatedbyuser: String
        dedeletedbyuser: String
        dedatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type Disability {
        _id: ID!
        dname: String!
        ddatestart: Date!
        disenabled: Boolean!
        dregisteredbyuser: String!
        dupdatedbyuser: String
        ddeletedbyuser: String
        ddatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type Disease {
        _id: ID!
        id_medicalrecord: String!
        diname: String!
        didatestart: Date!
        diisenabled: Boolean!
        diregisteredbyuser: String!
        diupdatedbyuser: String
        dideletedbyuser: String
        didatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type EmployeeDepartment {
        _id: ID!
        id_employee: String!
        id_department: String!
        edisenabled: Boolean!
        edregisteredbyuser: String!
        edupdatedbyuser: String
        eddeletedbyuser: String
        eddatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type Employee {
        _id: ID!
        user: User!
        esalary: Int!
        emedicalinsurance: String!
        eregisteredbyuser: String!
        eupdatedbyuser: String
        edeletedbyuser: String
        edatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type Event {
        _id: ID!
        user: User!
        evname: String!
        evdescription: String
        evkeywords: String!
        evubication: String!
        evgeolocation: String!
        evdatestart: Date!
        evdatefinish: Date
        evtype: String!
        evimage: String!
        evvideo: String!
        evisenabled: Boolean!
        evregisteredbyuser: String!
        evupdatedbyuser: String
        evdeletedbyuser: String
        evdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type Familiar {
        _id: ID!
        user: User!
        id_relationship: String!
        fafirstname: String!
        fafatherlastname: String!
        famotherlastname: String
        fagender: String!
        faisenabled: Boolean!
        faregisteredbyuser: String!
        faupdatedbyuser: String
        fadeletedbyuser: String
        fadatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type File {
        _id: ID!
        ffilename: String!
        fdescription: String
        fextension: String!
        fidtable: String!
        ftableonwer: String!
        fisenabled: Boolean!
        fregisteredbyuser: String!
        fupdatedbyuser: String
        fdeletedbyuser: String
        fdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
    
    type Function {
        _id: ID!
        id_department: String!
        funame: String!
        fudescription: String!
        fuisenabled: Boolean!
        furegisteredbyuser: String!
        fuupdatedbyuser: String
        fudeletedbyuser: String
        fudatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
        
    type GroupSubject {
        _id: ID!
        id_group: String!
        id_subject: String!
        gsisenabled: Boolean!
        gsregisteredbyuser: String!
        gsupdatedbyuser: String
        gsdeletedbyuser: String
        gsdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type Group {
        _id: ID!
        gname: String!
        gisenabled: Boolean!
        gregisteredbyuser: String!
        gupdatedbyuser: String
        gdeletedbyuser: String
        gdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
    
    type Homework {
        _id: ID!
        id_topic: String!
        hname: String!
        hdatepublish: Date!
        hdatedeliver: Date!
        hisenabled: Boolean!
        hregisteredbyuser: String!
        hupdatedbyuser: String
        hdeletedbyuser: String
        hdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
    
    type Inventory {
        _id: ID!
        id_department: String!
        id_employee: String!
        indate: Date!
        inisenabled: Boolean!
        inregisteredbyuser: String!
        inupdatedbyuser: String
        indeletedbyuser: String
        indatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
    
    type Job {
        _id: ID!
        user: User!
        jname: String!
        jbossfirstname: String!
        jbossfatherlastname: String!
        jbossmotherlastname: String
        jworking: Boolean!
        jdatestart: Date!
        jdateend: Date
        jendreason: String
        jisenabled: Boolean!
        jregisteredbyuser: String!
        jupdatedbyuser: String
        jdeletedbyuser: String
        jdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
    
    type Language {
        _id: ID!
        laname: String!
        laisenabled: Boolean!
        laregisteredbyuser: String!
        laupdatedbyuser: String
        ladeletedbyuser: String
        ladatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type Library {
        _id: ID!
        id_campus: String!
        id_employee: String!
        lisenabled: Boolean!
        lregisteredbyuser: String!
        lupdatedbyuser: String
        ldeletedbyuser: String
        ldatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
    
    type LoanDetail {
        _id: ID!
        id_loan: String!
        id_book: String!
        ldquantitybooks: Int!
        ldisenabled: Boolean!
        ldregisteredbyuser: String!
        ldupdatedbyuser: String
        lddeletedbyuser: String
        lddatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
    
    type Loan {
        _id: ID!
        id_library: String!
        user: User!
        lodateloan: Date!
        lodatereturn: Date
        loisenabled: Boolean!
        loregisteredbyuser: String!
        loupdatedbyuser: String
        lodeletedbyuser: String
        lodatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
    
    type MedicalrecordDisability {
        _id: ID!
        id_medicalrecord: String!
        id_disability: String!
        mdisenabled: Boolean!
        mdregisteredbyuser: String!
        mdupdatedbyuser: String
        mddeletedbyuser: String
        mddatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
    
    type MedicalrecordMedicine {
        _id: ID!
        id_medicine: String!
        id_medicalrecord: String!
        mmlastapplication: Date
        mmnextapplication: Date
        mmisenabled: Boolean!
        mmregisteredbyuser: String!
        mmupdatedbyuser: String
        mmdeletedbyuser: String
        mmdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
    
    type Medicalrecord {
        _id: ID!
        user: User!
        mrbloodgroup: String!
        mrvegetarian: Boolean!
        mrisenabled: Boolean!
        mrregisteredbyuser: String!
        mrupdatedbyuser: String
        mrdeletedbyuser: String
        mrdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type Medicine {
        _id: ID!
        mname: String!
        mdescription: String
        mquantitystock: Int!
        mprice: Int!
        misenabled: Boolean!
        mregisteredbyuser: String!
        mupdatedbyuser: String
        mdeletedbyuser: String
        mdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
    
    type Multimedia {
        _id: ID!
        mufilename: String!
        mudescription: String
        mutype: String!
        muidtable: String!
        mutableowner: String!
        muisenabled: Boolean!
        muregisteredbyuser: String!
        muupdatedbyuser: String
        mudeletedbyuser: String
        mudatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
    
    type NoAttendance {
        _id: ID!
        id_student: String!
        id_subject: String!
        nadate: Date!
        najustification: Boolean!
        naisenabled: Boolean!
        naregisteredbyuser: String!
        naupdatedbyuser: String
        nadeletedbyuser: String
        nadatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
    
    type Note {
        _id: ID!
        ntext: String!
        nidtable: String!
        ntableowner: String!
        nisenabled: Boolean!
        nregisteredbyuser: String!
        nupdatedbyuser: String
        ndeletedbyuser: String
        ndatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
    
    type PaymentMethod {
        _id: ID!
        paname: String!
        paisenabled: Boolean!
        paregisteredbyuser: String!
        paupdatedbyuser: String
        padeletedbyuser: String
        padatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
    
    type PersonalData {
        _id: ID!
        id_medicalrecord: String!
        pdheight: Int!
        pdwidth: Int!
        pdweight: Int!
        pdimc: Int!
        pdisenabled: Boolean!
        pdregisteredbyuser: String!
        pdupdatedbyuser: String
        pddeletedbyuser: String
        pddatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
    
    type Phone {
        _id: ID!
        phnumber: String!
        phtype: String!
        phidtable: String!
        phtableowner: String!
        phisenabled: Boolean!
        phregisteredbyuser: String!
        phupdatedbyuser: String
        phdeletedbyuser: String
        phdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type Post {
        _id: ID!
        id_user: User!
        ptext: String
        pimage: String
        pclaps: Int!
        pisenabled: Boolean!
        pregisteredbyuser: String!
        pupdatedbyuser: String
        pdeletedbyuser: String
        pdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
    
    type Provider {
        _id: ID!
        prname: String!
        prisenabled: Boolean!
        prregisteredbyuser: String!
        prupdatedbyuser: String
        prdeletedbyuser: String
        prdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
    
    type Relationship {
        _id: ID!
        rname: String!
        risenabled: Boolean!
        rregisteredbyuser: String!
        rupdatedbyuser: String
        rdeletedbyuser: String
        rdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
    
    type Report {
        _id: ID!
        user: User!
        remotive: String!
        redate: Date!
        reisenabled: Boolean!
        reregisteredbyuser: String!
        reupdatedbyuser: String
        redeletedbyuser: String
        redatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type Scholarship {
        _id: ID!
        scname: String!
        scisenabled: Boolean!
        scregisteredbyuser: String!
        scupdatedbyuser: String
        scdeletedbyuser: String
        scdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
    
    type Service {
        _id: ID!
        id_campus: String!
        sname: String!
        sisenabled: Boolean!
        sregisteredbyuser: String!
        supdatedbyuser: String
        sdeletedbyuser: String
        sdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type SocialNetwork {
        _id: ID!
        snusername: String!
        snurl: String!
        snidtable: String!
        sntableowner: String!
        snisenabled: Boolean!
        snregisteredbyuser: String!
        snupdatedbyuser: String
        sndeletedbyuser: String
        sndatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type Sport {
        _id: ID!
        spname: String!
        spisenabled: Boolean!
        spregisteredbyuser: String!
        spupdatedbyuser: String
        spdeletedbyuser: String
        spdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
    
    type State {
        _id: ID!
        id_country: String!
        stname: String!
        stabbreviation: String!
        stisenabled: Boolean!
        stregisteredbyuser: String!
        stupdatedbyuser: String
        stdeletedbyuser: String
        stdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
        
    type StudentHomework {
        _id: ID!
        id_student: String!
        id_homework: String!
        shisenabled: Boolean!
        shregisteredbyuser: String!
        shupdatedbyuser: String
        shdeletedbyuser: String
        shdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
        
    type StudentPaymentMethod {
        _id: ID!
        id_student: String!
        id_paymentmethod: String!
        spisenabled: Boolean!
        spregisteredbyuser: String!
        spupdatedbyuser: String
        spdeletedbyuser: String
        spdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
        
    type StudentScholarship {
        _id: ID!
        id_student: String!
        id_scholarship: String!
        ssdatestart: Date!
        ssdateend: Date!
        ssisenabled: Boolean!
        ssregisteredbyuser: String!
        ssupdatedbyuser: String
        ssdeletedbyuser: String
        ssdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
        
    type Student {
        _id: ID!
        user: User!
        id_carrer: String!
        id_studenttype: String!
        id_group: String!
        susername: String!
        senrollment: String!
        sprofessionallicense: String!
        shighschoolname: String!
        shighschoolgrade: Int!
        shighschoolcertificate: String!
        scurrentoccupation: String!
        smedicalinsurance: String!
        sresume: String!
        sranking: Int!
        sisenabled: Boolean!
        sregisteredbyuser: String!
        supdatedbyuser: String
        sdeletedbyuser: String
        sdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type StudentType {
        _id: ID!
        sttype: String!
        stisenabled: Boolean!
        stregisteredbyuser: String!
        stupdatedbyuser: String
        stdeletedbyuser: String
        stdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
    
    type Subject {
        _id: ID!
        id_cycle: String!
        suname: String!
        suabbreviation: String!
        sucode: String!
        suisenabled: Boolean!
        suregisteredbyuser: String!
        suupdatedbyuser: String
        sudeletedbyuser: String
        sudatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
        
    type Subscription {
        _id: ID!
        id_student: String!
        id_cycle: String!
        id_paymentmethod: String!
        subisenabled: Boolean!
        subregisteredbyuser: String!
        subupdatedbyuser: String
        subdeletedbyuser: String
        subdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
           
    type TeacherSubject {
        _id: ID!
        id_teacher: String!
        id_subject: String!
        tsperiod: String!
        tsisenabled: Boolean!
        tsregisteredbyuser: String!
        tsupdatedbyuser: String
        tsdeletedbyuser: String
        tsdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type Teacher {
        _id: ID!
        user: User!
        id_carrer: String!
        id_teachertype: String!
        teducation: String!
        tprofessionallicense: String!
        toriginuniversity: String!
        tdegreestudy: String!
        tresume: String!
        tmedicalinsurance: String!
        tranking: Int!
        tsalary: Int!
        ttactiveaccount: String!
        tregisteredbyuser: String!
        tupdatedbyuser: String
        tdeletedbyuser: String
        tdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
        
    type TeacherType {
        _id: ID!
        tttype: String!
        ttisenabled: Boolean!
        ttregisteredbyuser: String!
        ttupdatedbyuser: String
        ttdeletedbyuser: String
        ttdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
        
    type Telephoneline {
        _id: ID!
        idtelephoneline: String!
        id_state: String!
        teline: String!
        teisenabled: Boolean!
        teregisteredbyuser: String!
        teupdatedbyuser: String
        tedeletedbyuser: String
        tedatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
        
    type Topic {
        _id: ID!
        id_unity: String!
        toname: String!
        toisenabled: Boolean!
        toregisteredbyuser: String!
        toupdatedbyuser: String
        todeletedbyuser: String
        todatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
        
    type Unity {
        _id: ID!
        id_subject: String!
        unname: String!
        undescription: String!
        ungrade: Int!
        unisenabled: Boolean!
        unregisteredbyuser: String!
        unupdatedbyuser: String
        undeletedbyuser: String
        undatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
        
    type UserLanguage {
        _id: ID!
        user: User!
        id_language: String!
        ulpronunciation: Int!
        ulwriting: Int!
        ullistening: Int!
        ulreading: Int!
        ulisenabled: Boolean!
        ulregisteredbyuser: String!
        ulupdatedbyuser: String
        uldeletedbyuser: String
        uldatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
        
    type UserAbility {
        _id: ID!
        user: User!
        id_ability: String!
        uahowoften: String!
        uaisenabled: Boolean!
        uaregisteredbyuser: String!
        uaupdatedbyuser: String
        uadeletedbyuser: String
        uadatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
        
    type UserAchievement {
        _id: ID!
        user: User!
        id_achievement: String!
        uacisenabled: Boolean!
        uacregisteredbyuser: String!
        uacupdatedbyuser: String
        uacdeletedbyuser: String
        uacdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
        
    type UserSport {
        _id: ID!
        user: User!
        id_sport: String!
        ushowoften: String!
        usisenabled: Boolean!
        usregisteredbyuser: String!
        usupdatedbyuser: String
        usdeletedbyuser: String
        usdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type User {
        _id: ID!
        id_campus: String!
        ufirstname: String!
        ufatherlastname: String!
        umotherlastname: String!
        uavatar: String!
        uemail: String!
        uphone: String
        ucellphone: String!
        upassword: String!
        ubirthdate: Date!
        ugender: String!
        usexualorientation: String!
        ueyescolor: String!
        uskincomplexion: String!
        ulocation: String!
        ucurp: String!
        urfc: String!
        upassport: String!
        uvisa: String!
        ubirthcertificate: String!
        uposibilitytravel: Boolean!
        uactiveaccount: Boolean!
        uadmisiondate: Date!
        uegressdate: Date
        uemailverified: Boolean!
        uisenabled: Boolean!
        uregisteredbyuser: String!
        uupdatedbyuser: String
        udeletedbyuser: String
        udatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type Vacancy {
        _id: ID!
        id_ally: String!
        vaname: String!
        vadescription: String!
        vatype: String!
        vaisenabled: Boolean!
        varegisteredbyuser: String!
        vaupdatedbyuser: String
        vadeletedbyuser: String
        vadatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }
        
    type Vehicle {
        _id: ID!
        vbrand: String!
        vline: String!
        vmodel: Int!
        vcolor: String!
        vtype: String!
        vcarriageplate: String!
        vcylinders: Int!
        vidtable: String!
        vtableowner: String!
        visenabled: Boolean!
        vregisteredbyuser: String!
        vupdatedbyuser: String
        vdeletedbyuser: String
        vdatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type Me {
        _id: ID!
        id_campus: String!
        ufirstname: String!
        ufatherlastname: String!
        umotherlastname: String!
        uavatar: String!
        uemail: String!
        uphone: String
        ucellphone: String!
        upassword: String!
        ubirthdate: Date!
        ugender: String!
        usexualorientation: String!
        ueyescolor: String!
        uskincomplexion: String!
        ulocation: String!
        ucurp: String!
        urfc: String!
        upassport: String!
        uvisa: String!
        ubirthcertificate: String!
        uposibilitytravel: Boolean!
        uactiveaccount: Boolean!
        uadmisiondate: Date!
        uegressdate: Date
        uemailverified: Boolean!
        uisenabled: Boolean!
        uregisteredbyuser: String!
        uupdatedbyuser: String
        udeletedbyuser: String
        udatedeleted: Date
        createdAt: Date!
        updatedAt: Date!
    }

    type Query {
        getAbility(_id: ID!): Ability
        getAbilities: [ Ability ]

        getAccesshistoryDevice(_id: ID!): AccesshistoryDevice
        getAccesshistoryDevices: [ AccesshistoryDevice ]
        getUserAccesshistoryDevices: [ AccesshistoryDevice ]

        getAchievement(_id: ID!): Achievement
        getAchievements: [ Achievement ]

        getAddress(_id: ID!): Address
        getAddresses: [ Address ]

        getAllergy(_id: ID!): Allergy
        getAllergies: [ Allergy ]

        getAlly(_id: ID!): Ally
        getAllies: [ Ally ]

        getBook(_id: ID!): Book
        getBooks: [ Book ]

        getCampusCarrer(_id: ID!): CampusCarrer
        getCampusCarrers: [ CampusCarrer ]

        getCampus(_id: ID!): Campus
        getAllCampus: [ Campus ]

        getCarrer(_id: ID!): Carrer
        getCarrers: [ Carrer ]

        getCategory(_id: ID!): Category
        getCategories: [ Category ]

        getCity(_id: ID!): City
        getCities: [ City ]

        getClassroom(_id: ID!): Classroom
        getClassrooms: [ Classroom ]

        getComment(_id: ID!): Comment
        getComments: [ Comment ]

        getCountry(_id: ID!): Country
        getCountries: [ Country ]

        getCycle(_id: ID!): Cycle
        getCycles: [ Cycle ]

        getDepartment(_id: ID!): Department
        getDepartments: [ Department ]

        getDevice(_id: ID!): Device
        getDevices: [ Device ]

        getDisability(_id: ID!): Disability
        getDisabilities: [ Disability ]

        getDisease(_id: ID!): Disease
        getDiseases: [ Disease ]

        getEmployeeDepartment(_id: ID!): EmployeeDepartment
        getEmployeeDepartments: [ EmployeeDepartment ]

        getEmployee(_id: ID!): Employee
        getEmployees: [ Employee ]
        getUserEmployees: [ Employee ]

        getEvent(_id: ID!): Event
        getEvents: [ Event ]
        getUserEvents: [ Event ]

        getFamiliar(_id: ID!): Familiar
        getFamiliars: [ Familiar ]
        getUserFamiliars: [ Familiar ]

        getFile(_id: ID!): File
        getFiles: [ File ]

        getFunction(_id: ID!): Function
        getFunctions: [ Function ]

        getGroupSubject(_id: ID!): GroupSubject
        getGroupSubjects: [ GroupSubject ]

        getGroup(_id: ID!): Group
        getGroups: [ Group ]

        getHomework(_id: ID!): Homework
        getHomeworks: [ Homework ]

        getInventory(_id: ID!): Inventory
        getInventories: [ Inventory ]

        getJob(_id: ID!): Job
        getJobs: [ Job ]
        getUserJobs: [ Job ]

        getLanguage(_id: ID!): Language
        getLanguages: [ Language ]

        getLibrary(_id: ID!): Library
        getLibraries: [ Library ]

        getLoanDetail(_id: ID!): LoanDetail
        getLoanDetails: [ LoanDetail ]

        getLoan(_id: ID!): Loan
        getLoans: [ Loan ]
        getUserLoans: [ Loan ]

        getMedicalrecordDisability(_id: ID!): MedicalrecordDisability
        getMedicalrecordDisabilities: [ MedicalrecordDisability ]

        getMedicalrecordMedicine(_id: ID!): MedicalrecordMedicine
        getMedicalrecordMedicines: [ MedicalrecordMedicine ]

        getMedicalrecord(_id: ID!): Medicalrecord
        getMedicalrecords: [ Medicalrecord ]
        getUserMedicalrecords: [ Medicalrecord ]

        getMedicine(_id: ID!): Medicine
        getMedicines: [ Medicine ]

        getMultimedia(_id: ID!): Multimedia
        getMultimedias: [ Multimedia ]

        getNoAttendance(_id: ID!): NoAttendance
        getNoAttendances: [ NoAttendance ]

        getNote(_id: ID!): Note
        getNotes: [ Note ]

        getPaymentMethod(_id: ID!): PaymentMethod
        getPaymentMethods: [ PaymentMethod ]

        getPersonalData(_id: ID!): PersonalData
        getPersonalDatas: [ PersonalData ]

        getPhone(_id: ID!): Phone
        getPhones: [ Phone ]

        getPost(_id: ID!): Post
        getPosts: [ Post ]
        getUserPosts: [ Post ]

        getProvider(_id: ID!): Provider
        getProviders: [ Provider ]

        getRelationship(_id: ID!): Relationship
        getRelationships: [ Relationship ]

        getReport(_id: ID!): Report
        getReports: [ Report ]
        getUserReports: [ Report ]

        getScholarship(_id: ID!): Scholarship
        getScholarships: [ Scholarship ]

        getService(_id: ID!): Service
        getServices: [ Service ]

        getSocialNetwork(_id: ID!): SocialNetwork
        getSocialNetworks: [ SocialNetwork ]

        getSport(_id: ID!): Sport
        getSports: [ Sport ]

        getState(_id: ID!): State
        getStates: [ State ]

        getStudentHomework(_id: ID!): StudentHomework
        getStudentHomeworks: [ StudentHomework ]

        getStudentPaymentMethod(_id: ID!): StudentPaymentMethod
        getStudentPaymentMethods: [ StudentPaymentMethod ]

        getStudentScholarship(_id: ID!): StudentScholarship
        getStudentScholarships: [ StudentScholarship ]

        getStudent(_id: ID!): Student
        getStudents: [ Student ]
        getUserStudents: [ Student ]

        getStudentType(_id: ID!): StudentType
        getStudentTypes: [ StudentType ]

        getSubject(_id: ID!): Subject
        getSubjects: [ Subject ]

        getSubscription(_id: ID!): Subscription
        getSubscriptions: [ Subscription ]

        getTeacherSubject(_id: ID!): TeacherSubject
        getTeacherSubjects: [ TeacherSubject ]

        getTeacher(_id: ID!): Teacher
        getTeachers: [ Teacher ]
        getUserTeachers: [ Teacher ]

        getTeacherType(_id: ID!): TeacherType
        getTeacherTypes: [ TeacherType ]

        getTelephoneline(_id: ID!): Telephoneline
        getTelephonelines: [ Telephoneline ]

        getTopic(_id: ID!): Topic
        getTopics: [ Topic ]

        getUnity(_id: ID!): Unity
        getUnities: [ Unity ]

        getUserLanguage(_id: ID!): UserLanguage
        getUserLanguages: [ UserLanguage ]
        getUserAllLanguages: [ UserLanguage ]

        getUserAbility(_id: ID!): UserAbility
        getUserAbilities: [ UserAbility ]
        getUserAllAbilities: [ UserAbility ]

        getUserAchievement(_id: ID!): UserAchievement
        getUserAchievements: [ UserAchievement ]
        getUserAllAchievements: [ UserAchievement ]

        getUserSport(_id: ID!): UserSport
        getUserSports: [ UserSport ]
        getUserAllSports: [ UserSport ]

        getUser(_id: ID!): User
        getUsers: [ User ]

        getVacancy(_id: ID!): Vacancy
        getVacancies: [ Vacancy ]

        getVehicle(_id: ID!): Vehicle
        getVehicles: [ Vehicle ]

        me: Me
    }

    type Mutation {

        createAbility(abname: String!,
                    abisenabled: Boolean!,
                    abregisteredbyuser: String!,
                    abupdatedbyuser: String,
                    abdeletedbyuser: String,
                    abdatedeleted: Date): Ability
        updateAbility(_id: ID!,
                    abname: String!,
                    abisenabled: Boolean!,
                    abregisteredbyuser: String!,
                    abupdatedbyuser: String,
                    abdeletedbyuser: String,
                    abdatedeleted: Date): Ability
        deleteAbility(_id: ID!): Status

        createAccesshistoryDevice(id_device: String!,
                    adstartconnection: Date!,
                    adendconnection: Date!,
                    adisenabled: Boolean!,
                    adregisteredbyuser: String!,
                    adupdatedbyuser: String,
                    addeletedbyuser: String,
                    addatedeleted: Date): AccesshistoryDevice
        updateAccesshistoryDevice(_id: ID!,
                    id_device: String!,
                    adstartconnection: Date!,
                    adendconnection: Date!,
                    adisenabled: Boolean!,
                    adregisteredbyuser: String!,
                    adupdatedbyuser: String,
                    addeletedbyuser: String,
                    addatedeleted: Date): AccesshistoryDevice
        deleteAccesshistoryDevice(_id: ID!): Status

        createAchievement(acname: String!,
                    acdate: Date!,
                    acisenabled: Boolean!,
                    acregisteredbyuser: String!,
                    acupdatedbyuser: String,
                    acdeletedbyuser: String,
                    acdatedeleted: Date): Achievement
        updateAchievement(_id: ID!,
                    acname: String!,
                    acdate: Date!,
                    acisenabled: Boolean!,
                    acregisteredbyuser: String!,
                    acupdatedbyuser: String,
                    acdeletedbyuser: String,
                    acdatedeleted: Date): Achievement
        deleteAchievement(_id: ID!): Status

        createAddress(id_city: String!,
                    astreet: String!,
                    aexternalnumber: String!,
                    ainternalnumber: String,
                    azip: Int!,
                    ageolocation: String!,
                    aidtable: String!,
                    atableowner: String!,
                    aisenabled: Boolean!,
                    aregisteredbyuser: String!,
                    aupdatedbyuser: String,
                    adeletedbyuser: String,
                    adatedeleted: Date): Address
        updateAddress(_id: ID!,
                    id_city: String!,
                    astreet: String!,
                    aexternalnumber: String!,
                    ainternalnumber: String,
                    azip: Int!,
                    ageolocation: String!,
                    aidtable: String!,
                    atableowner: String!,
                    aisenabled: Boolean!,
                    aregisteredbyuser: String!,
                    aupdatedbyuser: String,
                    adeletedbyuser: String,
                    adatedeleted: Date): Address
        deleteAddress(_id: ID!): Status

        createAllergy(id_medicalrecord: String!,
                    alname: String!,
                    almedicine: String!,
                    alisenabled: Boolean!,
                    alregisteredbyuser: String!,
                    alupdatedbyuser: String,
                    aldeletedbyuser: String,
                    aldatedeleted: Date): Allergy
        updateAllergy(_id: ID!,
                    id_medicalrecord: String!,
                    alname: String!,
                    almedicine: String!,
                    alisenabled: Boolean!,
                    alregisteredbyuser: String!,
                    alupdatedbyuser: String,
                    aldeletedbyuser: String,
                    aldatedeleted: Date): Allergy
        deleteAllergy(_id: ID!): Status

        createAlly(allname: String!,
                    allmanagerfirstname: String!,
                    allmanagerfatherlastname: String!,
                    allmanagermotherlastname: String,
                    allisenabled: Boolean!,
                    allregisteredbyuser: String!,
                    allupdatedbyuser: String,
                    alldeletedbyuser: String,
                    alldatedeleted: Date): Ally
        updateAlly(_id: ID!,
                    allname: String!,
                    allmanagerfirstname: String!,
                    allmanagerfatherlastname: String!,
                    allmanagermotherlastname: String,
                    allisenabled: Boolean!,
                    allregisteredbyuser: String!,
                    allupdatedbyuser: String,
                    alldeletedbyuser: String,
                    alldatedeleted: Date): Ally
        deleteAlly(_id: ID!): Status

        createBook(id_library: String!,
                    id_category: String!,
                    bname: String!,
                    bdescription: String,
                    byear: String!,
                    bauthor: String!,
                    bprice: Int!,
                    beditorial: String!,
                    bnumberedition: String!,
                    bpages: Int!,
                    bquantitystock: Int!,
                    bisenabled: Boolean!,
                    bregisteredbyuser: String!,
                    bupdatedbyuser: String,
                    bdeletedbyuser: String,
                    bdatedeleted: Date): Book
        updateBook(_id: ID!,
                    id_library: String!,
                    id_category: String!,
                    bname: String!,
                    bdescription: String,
                    byear: String!,
                    bauthor: String!,
                    bprice: Int!,
                    beditorial: String!,
                    bnumberedition: String!,
                    bpages: Int!,
                    bquantitystock: Int!,
                    bisenabled: Boolean!,
                    bregisteredbyuser: String!,
                    bupdatedbyuser: String,
                    bdeletedbyuser: String,
                    bdatedeleted: Date): Book
        deleteBook(_id: ID!): Status

        createCampusCarrer(id_campus: String!,
                    id_carrer: String!,
                    ccisenabled: Boolean!,
                    ccregisteredbyuser: String!,
                    ccupdatedbyuser: String,
                    ccdeletedbyuser: String,
                    ccdatedeleted: Date): CampusCarrer
        updateCampusCarrer(_id: ID!,
                    id_campus: String!,
                    id_carrer: String!,
                    ccisenabled: Boolean!,
                    ccregisteredbyuser: String!,
                    ccupdatedbyuser: String,
                    ccdeletedbyuser: String,
                    ccdatedeleted: Date): CampusCarrer
        deleteCampusCarrer(_id: ID!): Status

        createCampus(camname: String!,
                    camabbreviation: String!,
                    camcode: String!,
                    camslogan: String!,
                    cammascot: String!,
                    camlogo: String!,
                    camemail: String!,
                    camwebpage: String!,
                    camdatestart: Date!,
                    camisenabled: Boolean!,
                    camregisteredbyuser: String!,
                    camupdatedbyuser: String,
                    camdeletedbyuser: String,
                    camdatedeleted: Date): Campus
        updateCampus(_id: ID!,
                    camname: String!,
                    camabbreviation: String!,
                    camcode: String!,
                    camslogan: String!,
                    cammascot: String!,
                    camlogo: String!,
                    camemail: String!,
                    camwebpage: String!,
                    camdatestart: Date!,
                    camisenabled: Boolean!,
                    camregisteredbyuser: String!,
                    camupdatedbyuser: String,
                    camdeletedbyuser: String,
                    camdatedeleted: Date): Campus
        deleteCampus(_id: ID!): Status

        createCarrer(caname: String!,
                    caabbreviation: String!,
                    cacode: String!,
                    calogo: String!,
                    cadatestart: Date!,
                    caisenabled: Boolean!,
                    caregisteredbyuser: String!,
                    caupdatedbyuser: String,
                    cadeletedbyuser: String,
                    cadatedeleted: Date): Carrer
        updateCarrer(_id: ID!,
                    caname: String!,
                    caabbreviation: String!,
                    cacode: String!,
                    calogo: String!,
                    cadatestart: Date!,
                    caisenabled: Boolean!,
                    caregisteredbyuser: String!,
                    caupdatedbyuser: String,
                    cadeletedbyuser: String,
                    cadatedeleted: Date): Carrer
        deleteCarrer(_id: ID!): Status

        
        createCategory(cname: String!,
                    cisenabled: Boolean!,
                    cregisteredbyuser: String!,
                    cupdatedbyuser: String,
                    cdeletedbyuser: String,
                    cdatedeleted: Date): Category
        updateCategory(_id: ID!,
                    cname: String!,
                    cisenabled: Boolean!,
                    cregisteredbyuser: String!,
                    cupdatedbyuser: String,
                    cdeletedbyuser: String,
                    cdatedeleted: Date): Category
        deleteCategory(_id: ID!): Status
    
        createCity(id_state: String!,
                    ciname: String!,
                    ciabbreviation: String!,
                    ciisenabled: Boolean!,
                    ciregisteredbyuser: String!,
                    ciupdatedbyuser: String,
                    cideletedbyuser: String,
                    cidatedeleted: Date): City
        updateCity(_id: ID!,
                    id_state: String!,
                    ciname: String!,
                    ciabbreviation: String!,
                    ciisenabled: Boolean!,
                    ciregisteredbyuser: String!,
                    ciupdatedbyuser: String,
                    cideletedbyuser: String,
                    cidatedeleted: Date): City
        deleteCity(_id: ID!): Status
    
        createClassroom(id_campus: String!,
                    clname: String!,
                    clcapacity: String!,
                    clbuilding: String!,
                    clkeyroom: String!,
                    cloccupied: Boolean!,
                    clisenabled: Boolean!,
                    clregisteredbyuser: String!,
                    clupdatedbyuser: String,
                    cldeletedbyuser: String,
                    cldatedeleted: Date): Classroom
        updateClassroom(_id: ID!,
                    id_campus: String!,
                    clname: String!,
                    clcapacity: String!,
                    clbuilding: String!,
                    clkeyroom: String!,
                    cloccupied: Boolean!,
                    clisenabled: Boolean!,
                    clregisteredbyuser: String!,
                    clupdatedbyuser: String,
                    cldeletedbyuser: String,
                    cldatedeleted: Date): Classroom
        deleteClassroom(_id: ID!): Status
    
        createComment(id_post: String!,
                    comtext: String,
                    comisenabled: Boolean!,
                    comregisteredbyuser: String!,
                    comupdatedbyuser: String,
                    comdeletedbyuser: String,
                    comdatedeleted: Date): Comment
        updateComment(_id: ID!,
                    id_post: String!,
                    comtext: String,
                    comisenabled: Boolean!,
                    comregisteredbyuser: String!,
                    comupdatedbyuser: String,
                    comdeletedbyuser: String,
                    comdatedeleted: Date): Comment
        deleteComment(_id: ID!): Status
    
        createCountry(coname: String!,
                    coabbreviation: String!,
                    cocodephone: Int!,
                    coisenabled: Boolean!,
                    coregisteredbyuser: String!,
                    coupdatedbyuser: String,
                    codeletedbyuser: String,
                    codatedeleted: Date): Country
        updateCountry(_id: ID!,
                    coname: String!,
                    coabbreviation: String!,
                    cocodephone: Int!,
                    coisenabled: Boolean!,
                    coregisteredbyuser: String!,
                    coupdatedbyuser: String,
                    codeletedbyuser: String,
                    codatedeleted: Date): Country
        deleteCountry(_id: ID!): Status
    
        createCycle(id_carrer: String!,
                    cyname: String!,
                    cyperiod: String!,
                    cyisenabled: Boolean!,
                    cyregisteredbyuser: String!,
                    cyupdatedbyuser: String,
                    cydeletedbyuser: String,
                    cydatedeleted: Date): Cycle
        updateCycle(_id: ID!,
                    id_carrer: String!,
                    cyname: String!,
                    cyperiod: String!,
                    cyisenabled: Boolean!,
                    cyregisteredbyuser: String!,
                    cyupdatedbyuser: String,
                    cydeletedbyuser: String,
                    cydatedeleted: Date): Cycle
        deleteCycle(_id: ID!): Status
    
        createDepartment(depname: String!,
                    depisenabled: Boolean!,
                    depregisteredbyuser: String!,
                    depupdatedbyuser: String,
                    depdeletedbyuser: String,
                    depdatedeleted: Date): Department
        updateDepartment(_id: ID!,
                    depname: String!,
                    depisenabled: Boolean!,
                    depregisteredbyuser: String!,
                    depupdatedbyuser: String,
                    depdeletedbyuser: String,
                    depdatedeleted: Date): Department
        deleteDepartment(_id: ID!): Status
    
        createDevice(deserialnumber: String!,
                    detype: String!,
                    deinventorydate: String!,
                    deinventorystate: String!,
                    dehostname: String!,
                    deipaddress: String!,
                    deoperatingsystem: String!,
                    deparentdeviceid: String!,
                    delocation: String!,
                    deisenabled: Boolean!,
                    deregisteredbyuser: String!,
                    deupdatedbyuser: String,
                    dedeletedbyuser: String,
                    dedatedeleted: Date): Device
        updateDevice(_id: ID!,
                    deserialnumber: String!,
                    detype: String!,
                    deinventorydate: String!,
                    deinventorystate: String!,
                    dehostname: String!,
                    deipaddress: String!,
                    deoperatingsystem: String!,
                    deparentdeviceid: String!,
                    delocation: String!,
                    deisenabled: Boolean!,
                    deregisteredbyuser: String!,
                    deupdatedbyuser: String,
                    dedeletedbyuser: String,
                    dedatedeleted: Date): Device
        deleteDevice(_id: ID!): Status
    
        createDisability(dname: String!,
                    ddatestart: Date!,
                    disenabled: Boolean!,
                    dregisteredbyuser: String!,
                    dupdatedbyuser: String,
                    ddeletedbyuser: String,
                    ddatedeleted: Date): Disability
        updateDisability(_id: ID!,
                    dname: String!,
                    ddatestart: Date!,
                    disenabled: Boolean!,
                    dregisteredbyuser: String!,
                    dupdatedbyuser: String,
                    ddeletedbyuser: String,
                    ddatedeleted: Date): Disability
        deleteDisability(_id: ID!): Status
    
        createDisease(id_medicalrecord: String!,
                    diname: String!,
                    didatestart: Date!,
                    diisenabled: Boolean!,
                    diregisteredbyuser: String!,
                    diupdatedbyuser: String,
                    dideletedbyuser: String,
                    didatedeleted: Date): Disease
        updateDisease(_id: ID!,
                    id_medicalrecord: String!,
                    diname: String!,
                    didatestart: Date!,
                    diisenabled: Boolean!,
                    diregisteredbyuser: String!,
                    diupdatedbyuser: String,
                    dideletedbyuser: String,
                    didatedeleted: Date): Disease
        deleteDisease(_id: ID!): Status
    
        createEmployeeDepartment(id_employee: String!,
                    id_department: String!,
                    edisenabled: Boolean!,
                    edregisteredbyuser: String!,
                    edupdatedbyuser: String,
                    eddeletedbyuser: String,
                    eddatedeleted: Date): EmployeeDepartment
        updateEmployeeDepartment(_id: ID!,
                    id_employee: String!,
                    id_department: String!,
                    edisenabled: Boolean!,
                    edregisteredbyuser: String!,
                    edupdatedbyuser: String,
                    eddeletedbyuser: String,
                    eddatedeleted: Date): EmployeeDepartment
        deleteEmployeeDepartment(_id: ID!): Status
    
        createEmployee(esalary: Int!,
                    emedicalinsurance: String!,
                    eregisteredbyuser: String!,
                    eupdatedbyuser: String,
                    edeletedbyuser: String,
                    edatedeleted: Date): Employee
        updateEmployee(_id: ID!,
                    esalary: Int!,
                    emedicalinsurance: String!,
                    eregisteredbyuser: String!,
                    eupdatedbyuser: String,
                    edeletedbyuser: String,
                    edatedeleted: Date): Employee
        deleteEmployee(_id: ID!): Status
    
        createEvent(evname: String!,
                    evdescription: String,
                    evkeywords: String!,
                    evubication: String!,
                    evgeolocation: String!,
                    evdatestart: Date!,
                    evdatefinish: Date,
                    evtype: String!,
                    evimage: String!,
                    evvideo: String!,
                    evisenabled: Boolean!,
                    evregisteredbyuser: String!,
                    evupdatedbyuser: String,
                    evdeletedbyuser: String,
                    evdatedeleted: Date): Event
        updateEvent(_id: ID!,
                    evname: String!,
                    evdescription: String,
                    evkeywords: String!,
                    evubication: String!,
                    evgeolocation: String!,
                    evdatestart: Date!,
                    evdatefinish: Date,
                    evtype: String!,
                    evimage: String!,
                    evvideo: String!,
                    evisenabled: Boolean!,
                    evregisteredbyuser: String!,
                    evupdatedbyuser: String,
                    evdeletedbyuser: String,
                    evdatedeleted: Date): Event
        deleteEvent(_id: ID!): Status
    
        createFamiliar(id_relationship: String!,
                    fafirstname: String!,
                    fafatherlastname: String!,
                    famotherlastname: String,
                    fagender: String!,
                    faisenabled: Boolean!,
                    faregisteredbyuser: String!,
                    faupdatedbyuser: String,
                    fadeletedbyuser: String,
                    fadatedeleted: Date): Familiar
        updateFamiliar(_id: ID!,
                    id_relationship: String!,
                    fafirstname: String!,
                    fafatherlastname: String!,
                    famotherlastname: String,
                    fagender: String!,
                    faisenabled: Boolean!,
                    faregisteredbyuser: String!,
                    faupdatedbyuser: String,
                    fadeletedbyuser: String,
                    fadatedeleted: Date): Familiar
        deleteFamiliar(_id: ID!): Status
    
        createFile(ffilename: String!,
                    fdescription: String,
                    fextension: String!,
                    fidtable: String!,
                    ftableonwer: String!,
                    fisenabled: Boolean!,
                    fregisteredbyuser: String!,
                    fupdatedbyuser: String,
                    fdeletedbyuser: String,
                    fdatedeleted: Date): File
        updateFile(_id: ID!,
                    ffilename: String!,
                    fdescription: String,
                    fextension: String!,
                    fidtable: String!,
                    ftableonwer: String!,
                    fisenabled: Boolean!,
                    fregisteredbyuser: String!,
                    fupdatedbyuser: String,
                    fdeletedbyuser: String,
                    fdatedeleted: Date): File
        deleteFile(_id: ID!): Status
    
        createFunction(id_department: String!,
                    funame: String!,
                    fudescription: String!,
                    fuisenabled: Boolean!,
                    furegisteredbyuser: String!,
                    fuupdatedbyuser: String,
                    fudeletedbyuser: String,
                    fudatedeleted: Date): Function
        updateFunction(_id: ID!,
                    id_department: String!,
                    funame: String!,
                    fudescription: String!,
                    fuisenabled: Boolean!,
                    furegisteredbyuser: String!,
                    fuupdatedbyuser: String,
                    fudeletedbyuser: String,
                    fudatedeleted: Date): Function
        deleteFunction(_id: ID!): Status
    
        createGroupSubject(id_group: String!,
                    id_subject: String!,
                    gsisenabled: Boolean!,
                    gsregisteredbyuser: String!,
                    gsupdatedbyuser: String,
                    gsdeletedbyuser: String,
                    gsdatedeleted: Date): GroupSubject
        updateGroupSubject(_id: ID!,
                    id_group: String!,
                    id_subject: String!,
                    gsisenabled: Boolean!,
                    gsregisteredbyuser: String!,
                    gsupdatedbyuser: String,
                    gsdeletedbyuser: String,
                    gsdatedeleted: Date): GroupSubject
        deleteGroupSubject(_id: ID!): Status
    
        createGroup(gname: String!,
                    gisenabled: Boolean!,
                    gregisteredbyuser: String!,
                    gupdatedbyuser: String,
                    gdeletedbyuser: String,
                    gdatedeleted: Date): Group
        updateGroup(_id: ID!,
                    gname: String!,
                    gisenabled: Boolean!,
                    gregisteredbyuser: String!,
                    gupdatedbyuser: String,
                    gdeletedbyuser: String,
                    gdatedeleted: Date): Group
        deleteGroup(_id: ID!): Status
    
        createHomework(id_topic: String!,
                    hname: String!,
                    hdatepublish: Date!,
                    hdatedeliver: Date!,
                    hisenabled: Boolean!,
                    hregisteredbyuser: String!,
                    hupdatedbyuser: String,
                    hdeletedbyuser: String,
                    hdatedeleted: Date): Homework
        updateHomework(_id: ID!,
                    id_topic: String!,
                    hname: String!,
                    hdatepublish: Date!,
                    hdatedeliver: Date!,
                    hisenabled: Boolean!,
                    hregisteredbyuser: String!,
                    hupdatedbyuser: String,
                    hdeletedbyuser: String,
                    hdatedeleted: Date): Homework
        deleteHomework(_id: ID!): Status
    
        createInventory(id_department: String!,
                    id_employee: String!,
                    indate: Date!,
                    inisenabled: Boolean!,
                    inregisteredbyuser: String!,
                    inupdatedbyuser: String,
                    indeletedbyuser: String,
                    indatedeleted: Date): Inventory
        updateInventory(_id: ID!,
                    id_department: String!,
                    id_employee: String!,
                    indate: Date!,
                    inisenabled: Boolean!,
                    inregisteredbyuser: String!,
                    inupdatedbyuser: String,
                    indeletedbyuser: String,
                    indatedeleted: Date): Inventory
        deleteInventory(_id: ID!): Status
    
        createJob(jname: String!,
                    jbossfirstname: String!,
                    jbossfatherlastname: String!,
                    jbossmotherlastname: String,
                    jworking: Boolean!,
                    jdatestart: Date!,
                    jdateend: Date,
                    jendreason: String,
                    jisenabled: Boolean!,
                    jregisteredbyuser: String!,
                    jupdatedbyuser: String,
                    jdeletedbyuser: String,
                    jdatedeleted: Date): Job
        updateJob(_id: ID!,
                    jname: String!,
                    jbossfirstname: String!,
                    jbossfatherlastname: String!,
                    jbossmotherlastname: String,
                    jworking: Boolean!,
                    jdatestart: Date!,
                    jdateend: Date,
                    jendreason: String,
                    jisenabled: Boolean!,
                    jregisteredbyuser: String!,
                    jupdatedbyuser: String,
                    jdeletedbyuser: String,
                    jdatedeleted: Date): Job
        deleteJob(_id: ID!): Status

        createLanguage(laname: String!,
                    laisenabled: Boolean!,
                    laregisteredbyuser: String!,
                    laupdatedbyuser: String,
                    ladeletedbyuser: String,
                    ladatedeleted: Date): Language
        updateLanguage(_id: ID!,
                    laname: String!,
                    laisenabled: Boolean!,
                    laregisteredbyuser: String!,
                    laupdatedbyuser: String,
                    ladeletedbyuser: String,
                    ladatedeleted: Date): Language
        deleteLanguage(_id: ID!): Status

        createLibrary(id_campus: String!,
                    id_employee: String!,
                    lisenabled: Boolean!,
                    lregisteredbyuser: String!,
                    lupdatedbyuser: String,
                    ldeletedbyuser: String,
                    ldatedeleted: Date): Library
        updateLibrary(_id: ID!,
                    id_campus: String!,
                    id_employee: String!,
                    lisenabled: Boolean!,
                    lregisteredbyuser: String!,
                    lupdatedbyuser: String,
                    ldeletedbyuser: String,
                    ldatedeleted: Date): Library
        deleteLibrary(_id: ID!): Status
    
        createLoanDetail(id_loan: String!,
                    id_book: String!,
                    ldquantitybooks: Int!,
                    ldisenabled: Boolean!,
                    ldregisteredbyuser: String!,
                    ldupdatedbyuser: String,
                    lddeletedbyuser: String,
                    lddatedeleted: Date): LoanDetail
        updateLoanDetail(_id: ID!,
                    id_loan: String!,
                    id_book: String!,
                    ldquantitybooks: Int!,
                    ldisenabled: Boolean!,
                    ldregisteredbyuser: String!,
                    ldupdatedbyuser: String,
                    lddeletedbyuser: String,
                    lddatedeleted: Date): LoanDetail
        deleteLoanDetail(_id: ID!): Status
    
        createLoan(id_library: String!,
                    lodateloan: Date!,
                    lodatereturn: Date,
                    loisenabled: Boolean!,
                    loregisteredbyuser: String!,
                    loupdatedbyuser: String,
                    lodeletedbyuser: String,
                    lodatedeleted: Date): Loan
        updateLoan(_id: ID!,
                    id_library: String!,
                    lodateloan: Date!,
                    lodatereturn: Date,
                    loisenabled: Boolean!,
                    loregisteredbyuser: String!,
                    loupdatedbyuser: String,
                    lodeletedbyuser: String,
                    lodatedeleted: Date): Loan
        deleteLoan(_id: ID!): Status
    
        createMedicalrecordDisability(id_medicalrecord: String!,
                    id_disability: String!,
                    mdisenabled: Boolean!,
                    mdregisteredbyuser: String!,
                    mdupdatedbyuser: String,
                    mddeletedbyuser: String,
                    mddatedeleted: Date): MedicalrecordDisability
        updateMedicalrecordDisability(_id: ID!,
                    id_medicalrecord: String!,
                    id_disability: String!,
                    mdisenabled: Boolean!,
                    mdregisteredbyuser: String!,
                    mdupdatedbyuser: String,
                    mddeletedbyuser: String,
                    mddatedeleted: Date): MedicalrecordDisability
        deleteMedicalrecordDisability(_id: ID!): Status
    
        createMedicalrecordMedicine(id_medicine: String!,
                    id_medicalrecord: String!,
                    mmlastapplication: Date,
                    mmnextapplication: Date,
                    mmisenabled: Boolean!,
                    mmregisteredbyuser: String!,
                    mmupdatedbyuser: String,
                    mmdeletedbyuser: String,
                    mmdatedeleted: Date): MedicalrecordMedicine
        updateMedicalrecordMedicine(_id: ID!,
                    id_medicine: String!,
                    id_medicalrecord: String!,
                    mmlastapplication: Date,
                    mmnextapplication: Date,
                    mmisenabled: Boolean!,
                    mmregisteredbyuser: String!,
                    mmupdatedbyuser: String,
                    mmdeletedbyuser: String,
                    mmdatedeleted: Date): MedicalrecordMedicine
        deleteMedicalrecordMedicine(_id: ID!): Status
    
        createMedicalrecord(mrbloodgroup: String!,
                    mrvegetarian: Boolean!,
                    mrisenabled: Boolean!,
                    mrregisteredbyuser: String!,
                    mrupdatedbyuser: String,
                    mrdeletedbyuser: String,
                    mrdatedeleted: Date): Medicalrecord
        updateMedicalrecord(_id: ID!,
                    mrbloodgroup: String!,
                    mrvegetarian: Boolean!,
                    mrisenabled: Boolean!,
                    mrregisteredbyuser: String!,
                    mrupdatedbyuser: String,
                    mrdeletedbyuser: String,
                    mrdatedeleted: Date): Medicalrecord
        deleteMedicalrecord(_id: ID!): Status
    
        createMedicine(mname: String!,
                    mdescription: String,
                    mquantitystock: Int!,
                    mprice: Int!,
                    misenabled: Boolean!,
                    mregisteredbyuser: String!,
                    mupdatedbyuser: String,
                    mdeletedbyuser: String,
                    mdatedeleted: Date): Medicine
        updateMedicine(_id: ID!,
                    mname: String!,
                    mdescription: String,
                    mquantitystock: Int!,
                    mprice: Int!,
                    misenabled: Boolean!,
                    mregisteredbyuser: String!,
                    mupdatedbyuser: String,
                    mdeletedbyuser: String,
                    mdatedeleted: Date): Medicine
        deleteMedicine(_id: ID!): Status
    
        createMultimedia(mufilename: String!,
                    mudescription: String,
                    mutype: String!,
                    muidtable: String!,
                    mutableowner: String!,
                    muisenabled: Boolean!,
                    muregisteredbyuser: String!,
                    muupdatedbyuser: String,
                    mudeletedbyuser: String,
                    mudatedeleted: Date): Multimedia
        updateMultimedia(_id: ID!,
                    mufilename: String!,
                    mudescription: String,
                    mutype: String!,
                    muidtable: String!,
                    mutableowner: String!,
                    muisenabled: Boolean!,
                    muregisteredbyuser: String!,
                    muupdatedbyuser: String,
                    mudeletedbyuser: String,
                    mudatedeleted: Date): Multimedia
        deleteMultimedia(_id: ID!): Status
    
        createNoAttendance(id_student: String!,
                    id_subject: String!,
                    nadate: Date!,
                    najustification: Boolean!,
                    naisenabled: Boolean!,
                    naregisteredbyuser: String!,
                    naupdatedbyuser: String,
                    nadeletedbyuser: String,
                    nadatedeleted: Date): NoAttendance
        updateNoAttendance(_id: ID!,
                    id_student: String!,
                    id_subject: String!,
                    nadate: Date!,
                    najustification: Boolean!,
                    naisenabled: Boolean!,
                    naregisteredbyuser: String!,
                    naupdatedbyuser: String,
                    nadeletedbyuser: String,
                    nadatedeleted: Date): NoAttendance
        deleteNoAttendance(_id: ID!): Status
    
        createNote(ntext: String!,
                    nidtable: String!,
                    ntableowner: String!,
                    nisenabled: Boolean!,
                    nregisteredbyuser: String!,
                    nupdatedbyuser: String,
                    ndeletedbyuser: String,
                    ndatedeleted: Date): Note
        updateNote(_id: ID!,
                    ntext: String!,
                    nidtable: String!,
                    ntableowner: String!,
                    nisenabled: Boolean!,
                    nregisteredbyuser: String!,
                    nupdatedbyuser: String,
                    ndeletedbyuser: String,
                    ndatedeleted: Date): Note
        deleteNote(_id: ID!): Status
    
        createPaymentMethod(paname: String!,
                    paisenabled: Boolean!,
                    paregisteredbyuser: String!,
                    paupdatedbyuser: String,
                    padeletedbyuser: String,
                    padatedeleted: Date): PaymentMethod
        updatePaymentMethod(_id: ID!,
                    paname: String!,
                    paisenabled: Boolean!,
                    paregisteredbyuser: String!,
                    paupdatedbyuser: String,
                    padeletedbyuser: String,
                    padatedeleted: Date): PaymentMethod
        deletePaymentMethod(_id: ID!): Status
    
        createPersonalData(id_medicalrecord: String!,
                    pdheight: Int!,
                    pdwidth: Int!,
                    pdweight: Int!,
                    pdimc: Int!,
                    pdisenabled: Boolean!,
                    pdregisteredbyuser: String!,
                    pdupdatedbyuser: String,
                    pddeletedbyuser: String,
                    pddatedeleted: Date): PersonalData
        updatePersonalData(_id: ID!,
                    id_medicalrecord: String!,
                    pdheight: Int!,
                    pdwidth: Int!,
                    pdweight: Int!,
                    pdimc: Int!,
                    pdisenabled: Boolean!,
                    pdregisteredbyuser: String!,
                    pdupdatedbyuser: String,
                    pddeletedbyuser: String,
                    pddatedeleted: Date): PersonalData
        deletePersonalData(_id: ID!): Status
    
        createPhone(phnumber: String!,
                    phtype: String!,
                    phidtable: String!,
                    phtableowner: String!,
                    phisenabled: Boolean!,
                    phregisteredbyuser: String!,
                    phupdatedbyuser: String,
                    phdeletedbyuser: String,
                    phdatedeleted: Date): Phone
        updatePhone(_id: ID!,
                    phnumber: String!,
                    phtype: String!,
                    phidtable: String!,
                    phtableowner: String!,
                    phisenabled: Boolean!,
                    phregisteredbyuser: String!,
                    phupdatedbyuser: String,
                    phdeletedbyuser: String,
                    phdatedeleted: Date): Phone
        deletePhone(_id: ID!): Status
    
        createPost(ptext: String,
                    pimage: String,
                    pclaps: Int!,
                    pisenabled: Boolean!,
                    pregisteredbyuser: String!,
                    pupdatedbyuser: String,
                    pdeletedbyuser: String,
                    pdatedeleted: Date): Post
        updatePost(_id: ID!,
                    ptext: String,
                    pimage: String,
                    pclaps: Int!,
                    pisenabled: Boolean!,
                    pregisteredbyuser: String!,
                    pupdatedbyuser: String,
                    pdeletedbyuser: String,
                    pdatedeleted: Date): Post
        deletePost(_id: ID!): Status
    
        createProvider(prname: String!,
                    prisenabled: Boolean!,
                    prregisteredbyuser: String!,
                    prupdatedbyuser: String,
                    prdeletedbyuser: String,
                    prdatedeleted: Date): Provider
        updateProvider(_id: ID!,
                    prname: String!,
                    prisenabled: Boolean!,
                    prregisteredbyuser: String!,
                    prupdatedbyuser: String,
                    prdeletedbyuser: String,
                    prdatedeleted: Date): Provider
        deleteProvider(_id: ID!): Status
    
        createRelationship(rname: String!,
                    risenabled: Boolean!,
                    rregisteredbyuser: String!,
                    rupdatedbyuser: String,
                    rdeletedbyuser: String,
                    rdatedeleted: Date): Relationship
        updateRelationship(_id: ID!,
                    rname: String!,
                    risenabled: Boolean!,
                    rregisteredbyuser: String!,
                    rupdatedbyuser: String,
                    rdeletedbyuser: String,
                    rdatedeleted: Date): Relationship
        deleteRelationship(_id: ID!): Status
    
        createReport(remotive: String!,
                    redate: Date!,
                    reisenabled: Boolean!,
                    reregisteredbyuser: String!,
                    reupdatedbyuser: String,
                    redeletedbyuser: String,
                    redatedeleted: Date): Report
        updateReport(_id: ID!,
                    remotive: String!,
                    redate: Date!,
                    reisenabled: Boolean!,
                    reregisteredbyuser: String!,
                    reupdatedbyuser: String,
                    redeletedbyuser: String,
                    redatedeleted: Date): Report
        deleteReport(_id: ID!): Status
    
        createScholarship(scname: String!,
                    scisenabled: Boolean!,
                    scregisteredbyuser: String!,
                    scupdatedbyuser: String,
                    scdeletedbyuser: String,
                    scdatedeleted: Date): Scholarship
        updateScholarship(_id: ID!,
                    scname: String!,
                    scisenabled: Boolean!,
                    scregisteredbyuser: String!,
                    scupdatedbyuser: String,
                    scdeletedbyuser: String,
                    scdatedeleted: Date): Scholarship
        deleteScholarship(_id: ID!): Status
    
        createService(id_campus: String!,
                    sname: String!,
                    sisenabled: Boolean!,
                    sregisteredbyuser: String!,
                    supdatedbyuser: String,
                    sdeletedbyuser: String,
                    sdatedeleted: Date): Service
        updateService(_id: ID!,
                    id_campus: String!,
                    sname: String!,
                    sisenabled: Boolean!,
                    sregisteredbyuser: String!,
                    supdatedbyuser: String,
                    sdeletedbyuser: String,
                    sdatedeleted: Date): Service
        deleteService(_id: ID!): Status
    
        createSocialNetwork(snusername: String!,
                    snurl: String!,
                    snidtable: String!,
                    sntableowner: String!,
                    snisenabled: Boolean!,
                    snregisteredbyuser: String!,
                    snupdatedbyuser: String,
                    sndeletedbyuser: String,
                    sndatedeleted: Date): SocialNetwork
        updateSocialNetwork(_id: ID!,
                    snusername: String!,
                    snurl: String!,
                    snidtable: String!,
                    sntableowner: String!,
                    snisenabled: Boolean!,
                    snregisteredbyuser: String!,
                    snupdatedbyuser: String,
                    sndeletedbyuser: String,
                    sndatedeleted: Date): SocialNetwork
        deleteSocialNetwork(_id: ID!): Status
    
        createSport(spname: String!,
                    spisenabled: Boolean!,
                    spregisteredbyuser: String!,
                    spupdatedbyuser: String,
                    spdeletedbyuser: String,
                    spdatedeleted: Date): Sport
        updateSport(_id: ID!,
                    spname: String!,
                    spisenabled: Boolean!,
                    spregisteredbyuser: String!,
                    spupdatedbyuser: String,
                    spdeletedbyuser: String,
                    spdatedeleted: Date): Sport
        deleteSport(_id: ID!): Status
    
        createState(id_country: String!,
                    stname: String!,
                    stabbreviation: String!,
                    stisenabled: Boolean!,
                    stregisteredbyuser: String!,
                    stupdatedbyuser: String,
                    stdeletedbyuser: String,
                    stdatedeleted: Date): State
        updateState(_id: ID!,
                    id_country: String!,
                    stname: String!,
                    stabbreviation: String!,
                    stisenabled: Boolean!,
                    stregisteredbyuser: String!,
                    stupdatedbyuser: String,
                    stdeletedbyuser: String,
                    stdatedeleted: Date): State
        deleteState(_id: ID!): Status
    
        createStudentHomework(id_student: String!,
                    id_homework: String!,
                    shisenabled: Boolean!,
                    shregisteredbyuser: String!,
                    shupdatedbyuser: String,
                    shdeletedbyuser: String,
                    shdatedeleted: Date): StudentHomework
        updateStudentHomework(_id: ID!,
                    id_student: String!,
                    id_homework: String!,
                    shisenabled: Boolean!,
                    shregisteredbyuser: String!,
                    shupdatedbyuser: String,
                    shdeletedbyuser: String,
                    shdatedeleted: Date): StudentHomework
        deleteStudentHomework(_id: ID!): Status
    
        createStudentPaymentMethod(id_student: String!,
                    id_paymentmethod: String!,
                    spisenabled: Boolean!,
                    spregisteredbyuser: String!,
                    spupdatedbyuser: String,
                    spdeletedbyuser: String,
                    spdatedeleted: Date): StudentPaymentMethod
        updateStudentPaymentMethod(_id: ID!,
                    id_student: String!,
                    id_paymentmethod: String!,
                    spisenabled: Boolean!,
                    spregisteredbyuser: String!,
                    spupdatedbyuser: String,
                    spdeletedbyuser: String,
                    spdatedeleted: Date): StudentPaymentMethod
        deleteStudentPaymentMethod(_id: ID!): Status
    
        createStudentScholarship(id_student: String!,
                    id_scholarship: String!,
                    ssdatestart: Date!,
                    ssdateend: Date!,
                    ssisenabled: Boolean!,
                    ssregisteredbyuser: String!,
                    ssupdatedbyuser: String,
                    ssdeletedbyuser: String,
                    ssdatedeleted: Date): StudentScholarship
        updateStudentScholarship(_id: ID!,
                    id_student: String!,
                    id_scholarship: String!,
                    ssdatestart: Date!,
                    ssdateend: Date!,
                    ssisenabled: Boolean!,
                    ssregisteredbyuser: String!,
                    ssupdatedbyuser: String,
                    ssdeletedbyuser: String,
                    ssdatedeleted: Date): StudentScholarship
        deleteStudentScholarship(_id: ID!): Status
    
        createStudent(id_carrer: String!,
                    id_studenttype: String!,
                    id_group: String!,
                    susername: String!,
                    senrollment: String!,
                    sprofessionallicense: String!,
                    shighschoolname: String!,
                    shighschoolgrade: Int!,
                    shighschoolcertificate: String!,
                    scurrentoccupation: String!,
                    smedicalinsurance: String!,
                    sresume: String!,
                    sranking: Int!,
                    sisenabled: Boolean!,
                    sregisteredbyuser: String!,
                    supdatedbyuser: String,
                    sdeletedbyuser: String,
                    sdatedeleted: Date): Student
        updateStudent(_id: ID!,
                    id_carrer: String!,
                    id_studenttype: String!,
                    id_group: String!,
                    susername: String!,
                    senrollment: String!,
                    sprofessionallicense: String!,
                    shighschoolname: String!,
                    shighschoolgrade: Int!,
                    shighschoolcertificate: String!,
                    scurrentoccupation: String!,
                    smedicalinsurance: String!,
                    sresume: String!,
                    sranking: Int!,
                    sisenabled: Boolean!,
                    sregisteredbyuser: String!,
                    supdatedbyuser: String,
                    sdeletedbyuser: String,
                    sdatedeleted: Date): Student
        deleteStudent(_id: ID!): Status
    
        createStudentType(sttype: String!,
                    stisenabled: Boolean!,
                    stregisteredbyuser: String!,
                    stupdatedbyuser: String,
                    stdeletedbyuser: String,
                    stdatedeleted: Date): StudentType
        updateStudentType(_id: ID!,
                    sttype: String!,
                    stisenabled: Boolean!,
                    stregisteredbyuser: String!,
                    stupdatedbyuser: String,
                    stdeletedbyuser: String,
                    stdatedeleted: Date): StudentType
        deleteStudentType(_id: ID!): Status
    
        createSubject(id_cycle: String!,
                    suname: String!,
                    suabbreviation: String!,
                    sucode: String!,
                    suisenabled: Boolean!,
                    suregisteredbyuser: String!,
                    suupdatedbyuser: String,
                    sudeletedbyuser: String,
                    sudatedeleted: Date): Subject
        updateSubject(_id: ID!,
                    id_cycle: String!,
                    suname: String!,
                    suabbreviation: String!,
                    sucode: String!,
                    suisenabled: Boolean!,
                    suregisteredbyuser: String!,
                    suupdatedbyuser: String,
                    sudeletedbyuser: String,
                    sudatedeleted: Date): Subject
        deleteSubject(_id: ID!): Status
    
        createSubscription(id_student: String!,
                    id_cycle: String!,
                    id_paymentmethod: String!,
                    subisenabled: Boolean!,
                    subregisteredbyuser: String!,
                    subupdatedbyuser: String,
                    subdeletedbyuser: String,
                    subdatedeleted: Date): Subscription
        updateSubscription(_id: ID!,
                    id_student: String!,
                    id_cycle: String!,
                    id_paymentmethod: String!,
                    subisenabled: Boolean!,
                    subregisteredbyuser: String!,
                    subupdatedbyuser: String,
                    subdeletedbyuser: String,
                    subdatedeleted: Date): Subscription
        deleteSubscription(_id: ID!): Status
    
        createTeacherSubject(id_teacher: String!,
                    id_subject: String!,
                    tsperiod: String!,
                    tsisenabled: Boolean!,
                    tsregisteredbyuser: String!,
                    tsupdatedbyuser: String,
                    tsdeletedbyuser: String,
                    tsdatedeleted: Date): TeacherSubject
        updateTeacherSubject(_id: ID!,
                    id_teacher: String!,
                    id_subject: String!,
                    tsperiod: String!,
                    tsisenabled: Boolean!,
                    tsregisteredbyuser: String!,
                    tsupdatedbyuser: String,
                    tsdeletedbyuser: String,
                    tsdatedeleted: Date): TeacherSubject
        deleteTeacherSubject(_id: ID!): Status
    
        createTeacher(id_carrer: String!,
                    id_teachertype: String!,
                    teducation: String!,
                    tprofessionallicense: String!,
                    toriginuniversity: String!,
                    tdegreestudy: String!,
                    tresume: String!,
                    tmedicalinsurance: String!,
                    tranking: Int!,
                    tsalary: Int!,
                    ttactiveaccount: String!,
                    tregisteredbyuser: String!,
                    tupdatedbyuser: String,
                    tdeletedbyuser: String,
                    tdatedeleted: Date): Teacher
        updateTeacher(_id: ID!,
                    id_carrer: String!,
                    id_teachertype: String!,
                    teducation: String!,
                    tprofessionallicense: String!,
                    toriginuniversity: String!,
                    tdegreestudy: String!,
                    tresume: String!,
                    tmedicalinsurance: String!,
                    tranking: Int!,
                    tsalary: Int!,
                    ttactiveaccount: String!,
                    tregisteredbyuser: String!,
                    tupdatedbyuser: String,
                    tdeletedbyuser: String,
                    tdatedeleted: Date): Teacher
        deleteTeacher(_id: ID!): Status
    
        createTeacherType(tttype: String!,
                    ttisenabled: Boolean!,
                    ttregisteredbyuser: String!,
                    ttupdatedbyuser: String,
                    ttdeletedbyuser: String,
                    ttdatedeleted: Date): TeacherType
        updateTeacherType(_id: ID!,
                    tttype: String!,
                    ttisenabled: Boolean!,
                    ttregisteredbyuser: String!,
                    ttupdatedbyuser: String,
                    ttdeletedbyuser: String,
                    ttdatedeleted: Date): TeacherType
        deleteTeacherType(_id: ID!): Status
    
        createTelephoneline(idtelephoneline: String!,
                    id_state: String!,
                    teline: String!,
                    teisenabled: Boolean!,
                    teregisteredbyuser: String!,
                    teupdatedbyuser: String,
                    tedeletedbyuser: String,
                    tedatedeleted: Date): Telephoneline
        updateTelephoneline(_id: ID!,
                    idtelephoneline: String!,
                    id_state: String!,
                    teline: String!,
                    teisenabled: Boolean!,
                    teregisteredbyuser: String!,
                    teupdatedbyuser: String,
                    tedeletedbyuser: String,
                    tedatedeleted: Date): Telephoneline
        deleteTelephoneline(_id: ID!): Status
    
        createTopic(id_unity: String!,
                    toname: String!,
                    toisenabled: Boolean!,
                    toregisteredbyuser: String!,
                    toupdatedbyuser: String,
                    todeletedbyuser: String,
                    todatedeleted: Date): Topic
        updateTopic(_id: ID!,
                    id_unity: String!,
                    toname: String!,
                    toisenabled: Boolean!,
                    toregisteredbyuser: String!,
                    toupdatedbyuser: String,
                    todeletedbyuser: String,
                    todatedeleted: Date): Topic
        deleteTopic(_id: ID!): Status
    
        createUnity(id_subject: String!,
                    unname: String!,
                    undescription: String!,
                    ungrade: Int!,
                    unisenabled: Boolean!,
                    unregisteredbyuser: String!,
                    unupdatedbyuser: String,
                    undeletedbyuser: String,
                    undatedeleted: Date): Unity
        updateUnity(_id: ID!,
                    id_subject: String!,
                    unname: String!,
                    undescription: String!,
                    ungrade: Int!,
                    unisenabled: Boolean!,
                    unregisteredbyuser: String!,
                    unupdatedbyuser: String,
                    undeletedbyuser: String,
                    undatedeleted: Date): Unity
        deleteUnity(_id: ID!): Status
    
        createUserLanguage(id_language: String!,
                    ulpronunciation: Int!,
                    ulwriting: Int!,
                    ullistening: Int!,
                    ulreading: Int!,
                    ulisenabled: Boolean!,
                    ulregisteredbyuser: String!,
                    ulupdatedbyuser: String,
                    uldeletedbyuser: String,
                    uldatedeleted: Date): UserLanguage
        updateUserLanguage(_id: ID!,
                    id_language: String!,
                    ulpronunciation: Int!,
                    ulwriting: Int!,
                    ullistening: Int!,
                    ulreading: Int!,
                    ulisenabled: Boolean!,
                    ulregisteredbyuser: String!,
                    ulupdatedbyuser: String,
                    uldeletedbyuser: String,
                    uldatedeleted: Date): UserLanguage
        deleteUserLanguage(_id: ID!): Status
    
        createUserAbility(id_ability: String!,
                    uahowoften: String!,
                    uaisenabled: Boolean!,
                    uaregisteredbyuser: String!,
                    uaupdatedbyuser: String,
                    uadeletedbyuser: String,
                    uadatedeleted: Date): UserAbility
        updateUserAbility(_id: ID!,
                    id_ability: String!,
                    uahowoften: String!,
                    uaisenabled: Boolean!,
                    uaregisteredbyuser: String!,
                    uaupdatedbyuser: String,
                    uadeletedbyuser: String,
                    uadatedeleted: Date): UserAbility
        deleteUserAbility(_id: ID!): Status
    
        createUserAchievement(id_achievement: String!,
                    uacisenabled: Boolean!,
                    uacregisteredbyuser: String!,
                    uacupdatedbyuser: String,
                    uacdeletedbyuser: String,
                    uacdatedeleted: Date): UserAchievement
        updateUserAchievement(_id: ID!,
                    id_achievement: String!,
                    uacisenabled: Boolean!,
                    uacregisteredbyuser: String!,
                    uacupdatedbyuser: String,
                    uacdeletedbyuser: String,
                    uacdatedeleted: Date): UserAchievement
        deleteUserAchievement(_id: ID!): Status
    
        createUserSport(id_sport: String!,
                    ushowoften: String!,
                    usisenabled: Boolean!,
                    usregisteredbyuser: String!,
                    usupdatedbyuser: String,
                    usdeletedbyuser: String,
                    usdatedeleted: Date): UserSport
        updateUserSport(_id: ID!,
                    id_sport: String!,
                    ushowoften: String!,
                    usisenabled: Boolean!,
                    usregisteredbyuser: String!,
                    usupdatedbyuser: String,
                    usdeletedbyuser: String,
                    usdatedeleted: Date): UserSport
        deleteUserSport(_id: ID!): Status
    
        createUser(id_campus: String!,
                    ufirstname: String!,
                    ufatherlastname: String!,
                    umotherlastname: String!,
                    uavatar: String!,
                    uemail: String!,
                    uphone: String,
                    ucellphone: String!,
                    upassword: String!,
                    ubirthdate: Date!,
                    ugender: String!,
                    usexualorientation: String!,
                    ueyescolor: String!,
                    uskincomplexion: String!,
                    ulocation: String!,
                    ucurp: String!,
                    urfc: String!,
                    upassport: String!,
                    uvisa: String!,
                    ubirthcertificate: String!,
                    uposibilitytravel: Boolean!,
                    uactiveaccount: Boolean!,
                    uadmisiondate: Date!,
                    uegressdate: Date,
                    uemailverified: Boolean!,
                    uisenabled: Boolean!,
                    uregisteredbyuser: String!,
                    uupdatedbyuser: String,
                    udeletedbyuser: String,
                    udatedeleted: Date): Auth
        updateUser(_id: ID!,
                    id_campus: String!,
                    ufirstname: String!,
                    ufatherlastname: String!,
                    umotherlastname: String!,
                    uavatar: String!,
                    uemail: String!,
                    uphone: String,
                    ucellphone: String!,
                    upassword: String!,
                    ubirthdate: Date!,
                    ugender: String!,
                    usexualorientation: String!,
                    ueyescolor: String!,
                    uskincomplexion: String!,
                    ulocation: String!,
                    ucurp: String!,
                    urfc: String!,
                    upassport: String!,
                    uvisa: String!,
                    ubirthcertificate: String!,
                    uposibilitytravel: Boolean!,
                    uactiveaccount: Boolean!,
                    uadmisiondate: Date!,
                    uegressdate: Date,
                    uemailverified: Boolean!,
                    uisenabled: Boolean!,
                    uregisteredbyuser: String!,
                    uupdatedbyuser: String,
                    udeletedbyuser: String,
                    udatedeleted: Date): User
        deleteUser(_id: ID!): Status
        loginUser( uemail: String!, upassword: String!): Auth

        createVacancy(id_ally: String!,
                    vaname: String!,
                    vadescription: String!,
                    vatype: String!,
                    vaisenabled: Boolean!,
                    varegisteredbyuser: String!,
                    vaupdatedbyuser: String,
                    vadeletedbyuser: String,
                    vadatedeleted: Date): Vacancy
        updateVacancy(_id: ID!,
                    id_ally: String!,
                    vaname: String!,
                    vadescription: String!,
                    vatype: String!,
                    vaisenabled: Boolean!,
                    varegisteredbyuser: String!,
                    vaupdatedbyuser: String,
                    vadeletedbyuser: String,
                    vadatedeleted: Date): Vacancy
        deleteVacancy(_id: ID!): Status
    
        createVehicle(vbrand: String!,
                    vline: String!,
                    vmodel: Int!,
                    vcolor: String!,
                    vtype: String!,
                    vcarriageplate: String!,
                    vcylinders: Int!,
                    vidtable: String!,
                    vtableowner: String!,
                    visenabled: Boolean!,
                    vregisteredbyuser: String!,
                    vupdatedbyuser: String,
                    vdeletedbyuser: String,
                    vdatedeleted: Date): Vehicle
        updateVehicle(_id: ID!,
                    vbrand: String!,
                    vline: String!,
                    vmodel: Int!,
                    vcolor: String!,
                    vtype: String!,
                    vcarriageplate: String!,
                    vcylinders: Int!,
                    vidtable: String!,
                    vtableowner: String!,
                    visenabled: Boolean!,
                    vregisteredbyuser: String!,
                    vupdatedbyuser: String,
                    vdeletedbyuser: String,
                    vdatedeleted: Date): Vehicle
        deleteVehicle(_id: ID!): Status
    }

    schema {
        query: Query
        mutation: Mutation
    }
`;