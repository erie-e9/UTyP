import faker from 'faker';
import Campus from '../models/campus';

const CAMPUS_TOTAL = 1;

export default async () => {
    try {
        await Campus.remove();
        await Array.from( { length: CAMPUS_TOTAL }).forEach(
            async() => await Campus.create({
                                camname: `CAMPUSNAME ${ faker.phone.phoneNumberFormat() }`,
                                camlogo: faker.internet.avatar(),
                                camphone: faker.phone.phoneNumberFormat(),
                                camcellphone: faker.phone.phoneNumberFormat(),
                                camemail: faker.internet.email(),
                                camcode: `SCHOOLCODE ${ faker.phone.phoneNumberFormat() }`,
                                camstate: faker.address.state(),
                                camcity: faker.address.city(),
                                camstreet: faker.address.streetName(),
                                camzip: 34000,
                                camgeolocation: '24.214214,-107.321321',
            })
        )
    } catch (error) {
        throw error;
    }
}