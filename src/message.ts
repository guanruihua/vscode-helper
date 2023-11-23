import * as vscode from 'vscode'
import { namespace } from './constant'

export const msg_helloWorld = vscode.commands.registerCommand(namespace + '.helloWorld', function () {
  vscode.window.showInformationMessage('第一个demo弹出信息!')
  vscode.window.showWarningMessage('第一个警告信息')
  vscode.window.showErrorMessage('第一个错误信息!')
})