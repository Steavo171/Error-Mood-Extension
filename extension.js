const vscode = require('vscode');

function activate(context) {
  let panel = vscode.window.createWebviewPanel(
    'errorMood',
    'Error Mood Monitor',
    vscode.ViewColumn.Beside,
    { enableScripts: true, localResourceRoots: [vscode.Uri.joinPath(context.extensionUri, 'media')] }
  );

  function getImageForErrorCount(count) {
    if (count === 0) return '1.png';
    if (count <= 2) return '2.png';
    if (count <= 4) return '3.png';
    if (count <= 6) return '4.png';
    if (count <= 8) return '5.png';
    if (count <= 9) return '6.png';
    if (count <= 10) return '7.png';
    if (count <= 11) return '8.png';
    return '9.png';
  }

  function getHtmlForWebview(webview, extensionUri, imageName) {
    const imageUri = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'media', imageName));
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <style>body { margin: 0; background: #1e1e1e; display: flex; justify-content: center; align-items: center; height: 100vh; }</style>
      </head>
      <body>
        <img src="${imageUri}" style="max-width: 90%; max-height: 90%;" />
      </body>
      </html>
    `;
  }

  function updateWebview(editor) {
    if (!panel || !editor) return;
    const diagnostics = vscode.languages.getDiagnostics(editor.document.uri);
    const errorCount = diagnostics.filter(d => d.severity === vscode.DiagnosticSeverity.Error).length;
    const image = getImageForErrorCount(errorCount);
    panel.webview.html = getHtmlForWebview(panel.webview, context.extensionUri, image);
  }

  updateWebview(vscode.window.activeTextEditor);

  vscode.window.onDidChangeActiveTextEditor(editor => updateWebview(editor), null, context.subscriptions);

  vscode.languages.onDidChangeDiagnostics(() => {
    updateWebview(vscode.window.activeTextEditor);
  }, null, context.subscriptions);
}

function deactivate() {}

module.exports = { activate, deactivate };
