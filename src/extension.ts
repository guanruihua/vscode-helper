import * as vscode from 'vscode'
// import { nav } from './navigation'
// import { progress } from './progress'
// import { hover } from './hover'
import { tree } from './tree'

export function activate(context: vscode.ExtensionContext) {

	// context.subscriptions.push(nav)
	context.subscriptions.push(tree)
	// context.subscriptions.push(hover)
	// context.subscriptions.push(progress)
}

// This method is called when your extension is deactivated
export function deactivate() { }
