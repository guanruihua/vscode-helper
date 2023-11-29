import { mergeJSON } from '0file-system'

mergeJSON('./snippets', './src/snippets.ts', { tree: true, toDefaultExport: true })