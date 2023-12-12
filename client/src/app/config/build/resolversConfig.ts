import {Configuration} from "webpack";

export const resolversConfig = (): Configuration['resolve'] => ({
    extensions: ['.tsx', '.ts', '.js'],
})