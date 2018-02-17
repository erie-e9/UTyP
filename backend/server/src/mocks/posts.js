import faker from 'faker';
import Post from '../models/posts';

const STATE_TOTAL = 10;

export default async () => {
    try {
        await Post.remove();
        await Array.from({ length: STATE_TOTAL}).forEach(
            async () => await Post.create({ 
                                pttext: faker.lorem.paragraphs(1),
                                ptimage: faker.internet.avatar()
            })
        )
    } catch (error) {
        throw error;
    }
}