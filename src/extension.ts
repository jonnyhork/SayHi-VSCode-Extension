// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
		console.log('Congratulations, your extension "sayhi" is now active!');


	let displayMessage = vscode.commands.registerCommand('sayHi.displayMessage', async () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		let message =  await vscode.window.showInputBox();
		vscode.window.showInformationMessage(`Hi ${message}!`);
	});

	context.subscriptions.push(displayMessage);
}

// this method is called when your extension is deactivated
export function deactivate() {}
