import faker from 'faker';
import Student from '../models/students';

const STUDENT_TOTAL = 1;

export default async () => {
    try {
        await Student.remove();
        await Array.from({ length: STUDENT_TOTAL }).forEach(
            async () => await Student.create({
                                sfirstname: faker.name.firstName(),
                                slastname: faker.name.lastName(),
                                savatar: faker.internet.avatar(),
                                sgender: 'male',
                                sphone: faker.phone.phoneNumberFormat(),
                                scellphone: faker.phone.phoneNumberFormat(),
                                semail: faker.internet.email(),
                                spassword: 'password123',
                                scountrybirth: faker.address.country(),
                                sstate: faker.address.state(),
                                scity: faker.address.city(),
                                sstreet: faker.address.streetName(),
                                szip: 34000,
                                sgeolocation: '24.214214,-107.321321',
                                sbirthdate: faker.date.past(),
                                slasthighschool: 'STUDENTLASTHIGHSCHOOL',
                                senrollment: `asd123qwer`,
                                scurrentoccupation: 'student',
                                sranking: 10,
                                sresume: 'STUDENTRESUME',
                                sdateadmission: `${faker.date.past()}`,
                                // sdateegress: '',
                                scurp: 'qwertyuiopasdfghjk',
                                srfc: 'qwertyuiopasd',
                                simss: 'STUDENTIMSS',
                                semailverified: 'verified',
                                sactiveaccount: 'active',
            })
        )
    } catch (error) {
        throw error;
    }
}