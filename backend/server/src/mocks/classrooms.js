import Classroom from '../models/classrooms';

const CLASSROOM_TOTAL = 10;

export default async () => {
    try {
        await Classroom.remove();
        await Array.from({ length: CLASSROOM_TOTAL }).forEach(
            async () => await Classroom.create({
                                    cbuilding: 'Building A',
                                    ckeyroom: 'CLASSROOMKEYROOM',
                                    coccupied: true,
            })
        )
    } catch (error) {
        throw error;
    }
}