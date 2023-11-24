import * as vscode from 'vscode'

const c1Tree = {
  'Snippets': {
    'vue': {
      '!js': 'script-template-js',
      '!ts': 'script-template-ts',
    }
  }
}

const aNodeWithIdTreeDataProvider = {
  getTreeItem: (el: any) => {
    let treeItem = {}
    if (typeof el === 'string') {
      treeItem = {
        label: el,
        collapsibleState: 0,
        tooltip: "hover: 单纯的字符串 ",
        // id: new Date().getTime()
      }
    } else {
      treeItem = {
        label: el._cc_key,
        collapsibleState: 1,
        tooltip: "hover: 可展开 ",
        // id: new Date().getTime()
      }
    }
    return treeItem
  },
  getChildren: (el: any) => {
    const arr = []
    const tree = el || c1Tree
    for (let item in tree) {
      const activeItem = tree[item]
      if (typeof activeItem !== 'object') {
        arr.push(`${item}：${activeItem}`)
      } else {
        Object.defineProperty(activeItem, "_cc_key", {
          get: function () { return item },
          enumerable: false
        })
        arr.push(activeItem)
      }
    }
    return arr
  },
}


export const tree = vscode.window.createTreeView('c1', {
  treeDataProvider: aNodeWithIdTreeDataProvider,
  showCollapseAll: true,
})