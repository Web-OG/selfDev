import path, {resolve} from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default (...segments) => resolve(__dirname, '..', '..', ...segments);