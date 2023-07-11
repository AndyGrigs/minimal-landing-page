import { ResolveOptions } from "webpack";


export function buildResolwers(): ResolveOptions{
    return  {
        extensions: ['.tsx', '.ts', '.js'],
    }
}