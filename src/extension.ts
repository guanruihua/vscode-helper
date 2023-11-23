import * as vscode from 'vscode'
import { msg_helloWorld } from './message'
import { nav } from './navigation'

export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(nav)
	context.subscriptions.push(msg_helloWorld)
}

// This method is called when your extension is deactivated
export function deactivate() { }
