import Employee from '../../models/employees';

export default {
    getEmployee: (_, { _id }) => Employee.findById(_id),
    getEmployees: () => Employee.find({}).sort({ createdAt: -1 }),
    createEmployee: (_, args) => Employee.create(args),
    updateEmployee: (_, { _id, ...rest }) => Employee.findByIdAndUpdate(_id, rest, {new: true}),
    deleteEmployee: async (_, { _id }) => {
        try {
            await Employee.findByIdAndRemove(_id);
            return {
                message: 'Employee deleted success!'
            }
        } catch (error) {
            throw error;
        }
    },
    loginEmployee: async (_, { eemail, epassword }) => {
        const employee = await Employee.findOne({ eemail });

        if (!employee) {
            throw new Error('Employee not exist');
        }
        if (!employee._authenticate(epassword)) {
            throw new Error('Employee password not match');
        }
        return employee;
    }
}