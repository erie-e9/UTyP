import faker from 'faker';
import Employee from '../models/employees';

const EMPLOYEE_TOTAL = 10;

export default async () => {
    try {
        await Employee.remove();
        await Array.from({ length: EMPLOYEE_TOTAL }).forEach(
            async () => await Employee.create({
                                efirstname: faker.name.firstName(),
                                elastname: faker.name.lastName(),
                                eavatar: faker.internet.avatar(),
                                egender: 'male',
                                ephone: faker.phone.phoneNumberFormat(),
                                ecellphone: faker.phone.phoneNumberFormat(),
                                ejobtitle: 'administrative',
                                eemail: faker.internet.email(),
                                epassword: 'employeepassword',
                                ecountrybirth: faker.address.country(),
                                estate: faker.address.state(),
                                ecity: faker.address.city(),
                                estreet: faker.address.streetName(),
                                ezip: 34000,
                                egeolocation: '24.214214,-107.321321',
                                ebirthdate: faker.date.past(),
                                ecurp: 'qwertyuiopasdfghjk',
                                erfc: 'qwertyuiopasd',
                                eimss: 'EMPLOYEEIMSS',
                                eemailverified: 'verified',
                                eactiveaccount: 'active',
            })
        )
    } catch (error) {
        throw error;
    }
}