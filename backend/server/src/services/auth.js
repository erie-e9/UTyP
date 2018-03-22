import jwt from 'jsonwebtoken';
import constanst from '../config/constants';
import Student from '../models/students';

export async function requireAuth(student) {
    if (!student || !student._id) {
        throw new Error('Unauthorized');
    }
    const me = Student.findById(student._id);
    if (!me) {
        throw new Error('Unauthorized');
    }
    return me;
}

export function decodeToken(token) {
    const arr = token.split(' ');
    
    if (arr[0] === 'Bearer') {
        return jwt.verify(arr[1], constanst.JWT_SECRET);
    }

    throw new Error('Token not valid!');
}