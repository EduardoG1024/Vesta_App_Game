import bcrypt from 'bcrypt';

const saltRounds = 10;

const CreateHash = async (password) => {
    return await bcrypt.hash(password, saltRounds);
}

const CompareHash = async (password, hash) => {
    return await bcrypt.compare(password, hash);
}