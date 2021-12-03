export interface TranslationChunksConfig {
    [chunk: string] : string[]
}

export const translationChunksConfig: TranslationChunksConfig = {
    product: ['plp', 'searchBox'],
    user: ['myAccounts'],
    miniCart: ['miniCart'],
    common: ['common', 'pageMetaResolver']
}