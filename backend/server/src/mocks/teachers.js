import faker from 'faker';
import Teacher from '../models/teachers';

 const TEACHER_TOTAL = 10;

 export default async () => {
     try {
         await Teacher.remove();
         await Array.from({ length: TEACHER_TOTAL }).forEach(
             async () => await Teacher.create({
                                    tfirstname: faker.name.firstName(),
                                    tlastname: faker.name.lastName(),
                                    tavatar: faker.internet.avatar(),
                                    tgender: 'male',
                                    tphone: faker.phone.phoneNumberFormat(),
                                    tcellphone: faker.phone.phoneNumberFormat(),
                                    temail: faker.internet.email(),
                                    tpassword: 'teacherpassword',
                                    tsubjets: 'TEACHERSUBJETS',
                                    tcountrybirth: faker.address.country(),
                                    tstate: faker.address.state(),
                                    tcity: faker.address.city(),
                                    tstreet: faker.address.streetName(),
                                    tzip: 34000,
                                    tgeolocation: '24.214214,-107.321321',
                                    tbirthdate: faker.date.past(),
                                    teducation: 'TEACHEREDUCATION',
                                    tprofessionallicense: 12345678,
                                    toriginuniversity: 'TEACHERORIGINUNIVERSITY',
                                    tdegreestudy: 'licentiate',
                                    tresume: 'TEACHERRESUME',
                                    tranking: 1,
                                    tsalary: 10000,
                                    tdateadmission: `${faker.date.past()}`,
                                    // tdateegress: '',
                                    tcurp: 'qwertyuiopasdfghjk',
                                    trfc: 'qwertyuiopasd',
                                    timss: 'TEACHERIMSS',
                                    temailverified: 'verified',
                                    tactiveaccount: 'active',
             })
         )
     } catch (error) {
         throw error;
     }
 }