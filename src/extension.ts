import * as vscode from "vscode";

const sayWhatExtension = vscode.extensions.getExtension("jh.saywhat")!;

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension -----"SAY HI"--- is now active!'
  );

  let displayMessage = vscode.commands.registerCommand(
    "sayHi.displayMessage",
    async () => {
      let getMessage: () => void;

      if (sayWhatExtension.isActive) {
        getMessage = sayWhatExtension.exports.getMessageFn;
      } else {
        let exports = await sayWhatExtension.activate();
        getMessage = exports.getMessageFn;
      }
      // Display a message box to the user
      let message = await getMessage();

      vscode.window.showInformationMessage(`Hi ${message}!`);
    }
  );

  context.subscriptions.push(displayMessage);
}

// this method is called when your extension is deactivated
export function deactivate() {}
