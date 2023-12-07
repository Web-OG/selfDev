import bcrypt from 'bcryptjs';

class CryptService {
    async generateHashPassword(password) {
        try {
            return await bcrypt.hash(password, 5)
        } catch (e) {
            console.log(e)
        }
    }

    async compare(password, remotePassword) {
        return await bcrypt.compare(password, remotePassword)
    }
}

export default new CryptService();