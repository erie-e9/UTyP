import faker from 'faker';
// *imports resolvers
    import Ability from '../models/abilities';
    import AccesshistoryDevice from '../models/accesshistory_devices';
    import Achievement from '../models/achievements';
    import Address from '../models/addresses';
    import Allergy from '../models/allergies';
    import Ally from '../models/allies';
    import Book from '../models/books';
    import CampusCarrer from '../models/campus_carrers';
    import Campus from '../models/campus';
    import Carrer from '../models/carrers';
    import Category from '../models/categories';
    import City from '../models/cities';
    import Classroom from '../models/classrooms';
    import Comments from '../models/comments';
    import Country from '../models/countries';
    import Cycle from '../models/cycles';
    import Department from '../models/departments';
    import Device from '../models/devices';
    import Disability from '../models/disabilities';
    import Disease from '../models/diseases';
    import EmployeeDepartment from '../models/employees_departments';
    import Employee from '../models/employees';
    import Events from '../models/events';
    import Familiar from '../models/familiars';
    import Files from '../models/files';
    import Functions from '../models/functions';
    import GroupSubject from '../models/groups_subjects';
    import Group from '../models/groups';
    import Homework from '../models/homeworks';
    import Inventory from '../models/inventories';
    import Job from '../models/jobs';
    import Language from '../models/languages';
    import Library from '../models/libraries';
    import LoanDetail from '../models/loans_details';
    import Loan from '../models/loans';
    import MedicalrecordDisability from '../models/medicalrecord_disabilities';
    import MedicalrecordMedicine from '../models/medicalrecord_medicines';
    import Medicalrecord from '../models/medicalrecords';
    import Medicine from '../models/medicines';
    import Multimedia from '../models/multimedias';
    import NoAttendance from '../models/noattendances';
    import Note from '../models/notes';
    import PaymentMethod from '../models/paymentmethods';
    import PersonalData from '../models/personaldatas';
    import Phone from '../models/phones';
    import Post from '../models/posts';
    import Provider from '../models/providers';
    import Relationship from '../models/relationships';
    import Report from '../models/reports';
    import Scholarship from '../models/scholarships';
    import Service from '../models/services';
    import SocialNetwork from '../models/socialnetworks';
    import Sport from '../models/sports';
    import State from '../models/states';
    import StudentHomework from '../models/students_homeworks';
    import StudentPaymentMethod from '../models/students_paymentmethods';
    import StudentScholarship from '../models/students_scholarships';
    import Student from '../models/students';
    import StudentType from '../models/studenttypes';
    import Subject from '../models/subjects';
    import Subscription from '../models/subscriptions';
    import TeacherSubject from '../models/teachers_subjects';
    import Teacher from '../models/teachers';
    import TeacherType from '../models/teachertypes';
    import Telephoneline from '../models/telephonelines';
    import Topic from '../models/topics';
    import Unity from '../models/unities';
    import UserLanguage from '../models/users_languages';
    import UserAbility from '../models/users_abilities';
    import UserAchievement from '../models/users_achievements';
    import UserSport from '../models/users_sports';
    import User from '../models/users';
    import Vacancy from '../models/vacancies';
    import Vehicle from '../models/vehicles';;
    
//* constants
    const ABILITY_TOTAL = 3;
    const ACCESSHISTORYDEVICE_TOTAL = 3;
    const ACHIEVEMENT_TOTAL = 3;
    const ADDRESS_TOTAL = 3;
    const ALLERGY_TOTAL = 3;
    const ALLY_TOTAL = 3;
    const BOOK_TOTAL = 3;
    const CAMPUSCARRER_TOTAL = 3;
    const CAMPUS_TOTAL = 3;
    const CARRER_TOTAL = 3;
    const CATEGORY_TOTAL = 3;
    const CITY_TOTAL = 3;
    const CLASSROOM_TOTAL = 3;
    const COMMENT_TOTAL = 3;
    const COUNTRY_TOTAL = 3;
    const CYCLE_TOTAL = 3;
    const DEPARTMENT_TOTAL = 3;
    const DEVICE_TOTAL = 3;
    const DISABILITY_TOTAL = 3;
    const DISEASE_TOTAL = 3;
    const EMPLOYEEDEPARTMENT_TOTAL = 3;
    const EMPLOYEE_TOTAL = 3;
    const EVENTS_TOTAL = 3;
    const FAMILIAR_TOTAL = 3;
    const FILE_TOTAL = 3;
    const FUNCTION_TOTAL = 3;
    const GROUPSUBJECT_TOTAL = 3;
    const GROUP_TOTAL = 3;
    const HOMEWORK_TOTAL = 3;
    const INVENTORY_TOTAL = 3;
    const JOB_TOTAL = 3;
    const LANGUAGE_TOTAL = 3;
    const LIBRARY_TOTAL = 3;
    const LOANDETAIL_TOTAL = 3;
    const LOAN_TOTAL = 3;
    const MEDICALRECORDDISABILITY_TOTAL = 3;
    const MEDICALRECORDMEDICINE_TOTAL = 3;
    const MEDICALRECORD_TOTAL = 3;
    const MEDICINE_TOTAL = 3;
    const MULTIMEDIA_TOTAL = 3;
    const NOATTENDANCE_TOTAL = 3;
    const NOTE_TOTAL = 3;
    const PAYMENTMETHOD_TOTAL = 3;
    const PERSONALDATA_TOTAL = 3;
    const PHONE_TOTAL = 3;
    const POST_TOTAL = 3;
    const PROVIDER_TOTAL = 3;
    const RELATIONSHIP_TOTAL = 3;
    const REPORT_TOTAL = 3;
    const SCHOLARSHIP_TOTAL = 3;
    const SERVICE_TOTAL = 3;
    const SOCIALNETWORK_TOTAL = 3;
    const SPORT_TOTAL = 3;
    const STATE_TOTAL = 3;
    const STUDENTHOMEWORK_TOTAL = 3;
    const STUDENTPAYMENTMETHOD_TOTAL = 3;
    const STUDENTSCHOLARSHIP_TOTAL = 3;
    const STUDENT_TOTAL = 3;
    const STUDENTTYPE_TOTAL = 3;
    const SUBJECT_TOTAL = 3;
    const SUBSCRIPTION_TOTAL = 3;
    const TEACHERSUBJECT_TOTAL = 3;
    const TEACHER_TOTAL = 3;
    const TEACHERTYPE_TOTAL = 3;
    const TELEPHONELINE_TOTAL = 3;
    const TOPIC_TOTAL = 3;
    const UNITY_TOTAL = 3;
    const USERLANGUAGE_TOTAL = 3;
    const USERABILITY_TOTAL = 3;
    const USERACHIEVEMENT_TOTAL = 3;
    const USERSPORT_TOTAL = 3;
    const USER_TOTAL = 3;
    const VACANCY_TOTAL = 3;
    const VEHICLE_TOTAL = 3;

export default async () => {
    try {
    //* remove documents
        await Ability.remove();
        await AccesshistoryDevice.remove();
        await Achievement.remove();
        await Address.remove();
        await Allergy.remove();
        await Ally.remove();
        await Book.remove();
        await CampusCarrer.remove();
        await Campus.remove();
        await Carrer.remove();
        await Category.remove();
        await City.remove();
        await Classroom.remove();
        await Comments.remove();
        await Country.remove();
        await Cycle.remove();
        await Department.remove();
        await Device.remove();
        await Disability.remove();
        await Disease.remove();
        await EmployeeDepartment.remove();
        await Employee.remove();
        await Events.remove();
        await Familiar.remove();
        await Files.remove();
        await Functions.remove();
        await GroupSubject.remove();
        await Group.remove();
        await Homework.remove();
        await Inventory.remove();
        await Job.remove();
        await Language.remove();
        await Library.remove();
        await LoanDetail.remove();
        await Loan.remove();
        await MedicalrecordDisability.remove();
        await MedicalrecordMedicine.remove();
        await Medicalrecord.remove();
        await Medicine.remove();
        await Multimedia.remove();
        await NoAttendance.remove();
        await Note.remove();
        await PaymentMethod.remove();
        await PersonalData.remove();
        await Phone.remove();
        await Post.remove();
        await Provider.remove();
        await Relationship.remove();
        await Report.remove();
        await Scholarship.remove();
        await Service.remove();
        await SocialNetwork.remove();
        await Sport.remove();
        await State.remove();
        await StudentHomework.remove();
        await StudentPaymentMethod.remove();
        await StudentScholarship.remove();
        await Student.remove();
        await StudentType.remove();
        await Subject.remove();
        await Subscription.remove();
        await TeacherSubject.remove();
        await Teacher.remove();
        await TeacherType.remove();
        await Telephoneline.remove();
        await Topic.remove();
        await Unity.remove();
        await UserLanguage.remove();
        await UserAbility.remove();
        await UserAchievement.remove();
        await UserSport.remove();
        await User.remove();
        await Vacancy.remove();
        await Vehicle.remove();

    await Array.from({ length: USER_TOTAL }).forEach(
            async (_, i) => {
                const user = await User.create({
                    id_campus: "user_id_campus",
                    ufirstname: faker.name.firstName(),
                    ufatherlastname: faker.name.lastName(),
                    umotherlastname: faker.name.lastName(),
                    uavatar: faker.internet.avatar(),
                    uemail: faker.internet.email(),
                    uphone: faker.phone.phoneNumberFormat(),
                    ucellphone: faker.phone.phoneNumberFormat(),
                    upassword: "password123",
                    ubirthdate: faker.date.past(),
                    ugender: "male",
                    usexualorientation: "demisexual",
                    ueyescolor: "black",
                    uskincomplexion: "black",
                    ulocation: "24.214214,-107.321321",
                    ucurp: "123456789012345678",
                    urfc: "1234567890123",
                    upassport: "12345678901234567890",
                    uvisa: "12345678901234567890",
                    ubirthcertificate: "user birthcertificate",
                    uposibilitytravel: true,
                    uactiveaccount: true,
                    uadmisiondate: faker.date.past(),
                    uegressdate: faker.date.past(),
                    uemailverified: true,
                    uisenabled: true,
                    uregisteredbyuser: "uregisteredbyuser",
                    uupdatedbyuser: "uupdatedbyuser",
                    udeletedbyuser: "udeletedbyuser",
                    udatedeleted: faker.date.past()
                });

                await Array.from({ length: ACCESSHISTORYDEVICE_TOTAL }).forEach(
                    async () => await AccesshistoryDevice.create({
                            user: user._id,
                            id_device: "id_device",
                            adstartconnection: faker.date.past(),
                            adendconnection: faker.date.past(),
                            adisenabled: true,
                            adregisteredbyuser: "uregisteredbyuser",
                            adupdatedbyuser: "uupdatedbyuser",
                            addeletedbyuser: "udeletedbyuser",
                            addatedeleted: faker.date.past()
                    })
                )

                await Array.from({ length: EMPLOYEE_TOTAL }).forEach(
                    async () => await Employee.create({
                            user: user._id,
                            esalary: 10,
                            emedicalinsurance: "emedicalinsurance",
                            eregisteredbyuser: "uregisteredbyuser",
                            eupdatedbyuser: "uupdatedbyuser",
                            edeletedbyuser: "udeletedbyuser",
                            edatedeleted: faker.date.past()
                    })
                )

                await Array.from({ length: EVENTS_TOTAL }).forEach(
                    async () => await Events.create({
                            user: user._id,
                            evname: faker.internet.userName(),
                            evdescription: 'Voluptas rerum ullam quia optio. Et rem iusto. Officiis velit dicta fugiat nam. Velit quas est dolor.',
                            evkeywords: 'EVENTKEYWORDS',
                            evubication: 'EVENTUBICATION',
                            evgeolocation: '24.214214,-107.321321',
                            evdatestart: faker.date.future(),
                            evdatefinish: faker.date.future(),
                            evtype: 'public',
                            evimage: faker.internet.url(),
                            evvideo: faker.internet.url(),
                            evisenabled: true,
                            evregisteredbyuser: "uregisteredbyuser",
                            evupdatedbyuser: "uupdatedbyuser",
                            evdeletedbyuser: "udeletedbyuser",
                            evdatedeleted: faker.date.past()
                    })
                )

                await Array.from({ length: FAMILIAR_TOTAL }).forEach(
                    async () => await Familiar.create({
                            user: user._id,
                            id_relationship: "id_relationship",
                            fafirstname: faker.name.firstName(),
                            fafatherlastname: faker.name.lastName(),
                            famotherlastname: faker.name.lastName(),
                            fagender: "male",
                            faisenabled: true,
                            faregisteredbyuser: "uregisteredbyuser",
                            faupdatedbyuser: "uupdatedbyuser",
                            fadeletedbyuser: "udeletedbyuser",
                            fadatedeleted: faker.date.past()
                    })
                )

                await Array.from({ length: JOB_TOTAL }).forEach(
                    async () => await Job.create({
                            user: user._id,
                            jname: "Job name",
                            jbossfirstname: faker.name.firstName(),
                            jbossfatherlastname: faker.name.lastName(),
                            jbossmotherlastname: "jbossmotherlastname",
                            jworking: true,
                            jdatestart: faker.date.past(),
                            jdateend: faker.date.past(),
                            jendreason: "corrido por gay",
                            jisenabled: true,
                            jregisteredbyuser: "uregisteredbyuser",
                            jupdatedbyuser: "uupdatedbyuser",
                            jdeletedbyuser: "udeletedbyuser",
                            jdatedeleted: faker.date.past()
                    })
                )

                await Array.from({ length: LOAN_TOTAL }).forEach(
                    async () => await Loan.create({
                            user: user._id,
                            id_library: "id_library",
                            lodateloan: faker.date.past(),
                            lodatereturn: faker.date.future(),
                            loisenabled: true,
                            loregisteredbyuser: "uregisteredbyuser",
                            loupdatedbyuser: "uupdatedbyuser",
                            lodeletedbyuser: "udeletedbyuser",
                            lodatedeleted: faker.date.past()
                    })
                )

                await Array.from({ length: MEDICALRECORD_TOTAL }).forEach(
                    async () => await Medicalrecord.create({
                            user: user._id,
                            mrbloodgroup: "O+",
                            mrvegetarian: true,
                            mrisenabled: true,
                            mrregisteredbyuser: "uregisteredbyuser",
                            mrupdatedbyuser: "uupdatedbyuser",
                            mrdeletedbyuser: "udeletedbyuser",
                            mrdatedeleted: faker.date.past()
                    })
                )

                await Array.from({ length: POST_TOTAL }).forEach(
                    async () => await Post.create({
                            id_user: user._id,
                            ptext: faker.lorem.paragraphs(1),
                            pimage: faker.internet.avatar(),
                            pclaps: 0,
                            pisenabled: true,
                            pregisteredbyuser: "uregisteredbyuser",
                            pupdatedbyuser: "uupdatedbyuser",
                            pdeletedbyuser: "udeletedbyuser",
                            pdatedeleted: faker.date.past()
                    })
                )  
                
                await Array.from({ length: REPORT_TOTAL }).forEach(
                    async () => await Report.create({
                            user: user._id,
                            remotive: "reportado por gay",
                            redate: faker.date.past(),
                            reisenabled: true,
                            reregisteredbyuser: "uregisteredbyuser",
                            reupdatedbyuser: "uupdatedbyuser",
                            redeletedbyuser: "udeletedbyuser",
                            redatedeleted: faker.date.past()
                    })
                )

                await Array.from({ length: STUDENT_TOTAL }).forEach(
                    async () => await Student.create({
                            user: user._id,
                            id_carrer: "id_carrer",
                            id_studenttype: "id_studenttype",
                            id_group: "id_group",
                            susername: faker.internet.userName(),
                            senrollment: "senrollment",
                            sprofessionallicense: "sprofessionallicense",
                            shighschoolname: "shighschoolname",
                            shighschoolgrade: 4,
                            shighschoolcertificate: "shighschoolcertificate",
                            scurrentoccupation: "student",
                            smedicalinsurance: "smedicalinsurance",
                            sresume: "student resume",
                            sranking: 10,
                            sisenabled: true,
                            sregisteredbyuser: "uregisteredbyuser",
                            supdatedbyuser: "uupdatedbyuser",
                            sdeletedbyuser: "udeletedbyuser",
                            sdatedeleted: faker.date.past()
                    })
                )
                  
                await Array.from({ length: TEACHER_TOTAL }).forEach(
                    async () => await Teacher.create({
                            user: user._id,
                            id_carrer: "id_carrer",
                            id_teachertype: "id_teachertype",
                            teducation: "teducation",
                            tprofessionallicense: "tprofessionallicense",
                            toriginuniversity: "toriginuniversity",
                            tdegreestudy: "licentiate",
                            tresume: "teacher resume",
                            tmedicalinsurance: "tmedicalinsurance",
                            tranking: 10,
                            tsalary: 10,
                            ttactiveaccount: true,
                            tregisteredbyuser: "uregisteredbyuser",
                            tupdatedbyuser: "uupdatedbyuser",
                            tdeletedbyuser: "udeletedbyuser",
                            tdatedeleted: faker.date.past()
                    })
                )

                await Array.from({ length: USERLANGUAGE_TOTAL }).forEach(
                    async () => await UserLanguage.create({
                            user: user._id,
                            id_language: "id_language",
                            ulpronunciation: 3,
                            ulwriting: 3,
                            ullistening: 3,
                            ulreading: 3,
                            ulisenabled: true,
                            ulregisteredbyuser: "uregisteredbyuser",
                            ulupdatedbyuser: "uupdatedbyuser",
                            uldeletedbyuser: "udeletedbyuser",
                            uldatedeleted: faker.date.past()
                    })
                )

                await Array.from({ length: USERABILITY_TOTAL }).forEach(
                    async () => await UserAbility.create({
                            user: user._id,
                            id_ability: "id_ability",
                            uahowoften: "3 days on week",
                            uaisenabled: true,
                            uaregisteredbyuser: "uregisteredbyuser",
                            uaupdatedbyuser: "uupdatedbyuser",
                            uadeletedbyuser: "udeletedbyuser",
                            uadatedeleted: faker.date.past()
                    })
                )

                await Array.from({ length: USERACHIEVEMENT_TOTAL }).forEach(
                    async () => await UserAchievement.create({
                            user: user._id,
                            id_achievement: "id_achievement",
                            uacisenabled: true,
                            uacregisteredbyuser: "uregisteredbyuser",
                            uacupdatedbyuser: "uupdatedbyuser",
                            uacdeletedbyuser: "udeletedbyuser",
                            uacdatedeleted: faker.date.past()
                    })
                )

                await Array.from({ length: USERSPORT_TOTAL }).forEach(
                    async () => await UserSport.create({
                            user: user._id,
                            id_sport: "id_sport",
                            ushowoften: "3 days on week",
                            usisenabled: true,
                            usregisteredbyuser: "uregisteredbyuser",
                            usupdatedbyuser: "uupdatedbyuser",
                            usdeletedbyuser: "udeletedbyuser",
                            usdatedeleted: faker.date.past()
                    })
                )
            }
        )
    } catch (error) {
        throw error;
    }
}