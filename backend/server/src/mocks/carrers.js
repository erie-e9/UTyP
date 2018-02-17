import faker from 'faker';
import Carrer from '../models/carrers';

const CARRER_TOTAL = 1;

export default async () => {
    try {
        await Carrer.remove();
        await Array.from({ length: CARRER_TOTAL }).forEach(
            async () => await Carrer.create({
                                caname: `CARRERNAME ${ faker.phone.phoneNumberFormat() }`,
                                calogo: faker.internet.avatar(),
                                casubjets: 'CARRERSUBJETS',
                                cacode: `CARRERCODE ${ faker.phone.phoneNumberFormat() }`
            })
        )
    } catch (error) {
        throw error;
    }
}