import { en } from './en';


interface TranslationResources {
    [lang: string]: {
        [chunkName: string]: {
            [key: string]: any
        }
    }
}

export const translations : TranslationResources = {
    en
}