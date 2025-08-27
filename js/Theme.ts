export interface Theme {
    name: string
    icon?: string
    scriptPath?: string
    cssPath?: string
}

export const defaultScriptPaths = ['script.js', 'script.ts']
export const defaultCssPaths = ['theme.css', 'style.css']