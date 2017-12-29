import faker from 'faker';
import State from '../models/State';

const STATE_TOTAL = 10;

export default async () => {
    try {
        await State.remove();
        await Array.from({ length: STATE_TOTAL}).forEach(
            async () => await State.create({ text: faker.lorem.paragraphs(1)})
        )
    } catch (error) {
        throw error
    }
}