import bcrypt from 'bcrypt';

const saltRounds = 10;

export const CreateHash = async (password) => {
    return await bcrypt.hash(password, saltRounds);
}

export const CompareHash = async (password, hash) => {
    return await bcrypt.compare(password, hash);
}