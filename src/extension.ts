import * as vscode from "vscode";

const sayWhatExports = vscode.extensions.getExtension("jh.saywhat")!.exports;
const getMessage = sayWhatExports.getMessageFn;

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "sayhi" is now active!');

  let displayMessage = vscode.commands.registerCommand(
    "sayHi.displayMessage",
    async () => {
      // Display a message box to the user
      let message = await getMessage();
      vscode.window.showInformationMessage(`Hi ${message}!`);
    }
  );

  context.subscriptions.push(displayMessage);
}

// this method is called when your extension is deactivated
export function deactivate() {}
