# Error Mood Monitor

A fun and minimal Visual Studio Code extension that changes the mood of an image based on the number of **errors** in your currently active file. The more errors your code has, the more stressed the image looks — and when your code is clean, it smiles back at you!

## 📷 What It Does

- Detects the number of diagnostics (errors) in the active editor.
- Displays an image in a side panel reflecting the current error count.
- Automatically updates the image as you type or switch files.

## 🧠 Logic

| Errors Detected | Mood Image Displayed |
|-----------------|----------------------|
| 0               | 😄 Happy             |
| 1–2             | 🙂 Slightly Worried  |
| 3–4             | 😐 Neutral           |
| 5–6             | 😬 Tense             |
| 7–8             | 😖 Frustrated        |
| 9–10            | 😫 Overwhelmed       |
| 11+             | 💀 Dead inside       |


## 🛠️ How It Works

- Uses the VS Code diagnostics API to track error count.
- Loads a custom webview panel with an image corresponding to the count.
- Listens to:
  - Active file changes
  - Diagnostic updates

## 🚀 Usage

1. Install the extension.
2. Open a file with code (e.g. JavaScript, Python).
3. The **Error Mood Panel** will open beside your code.
4. Fix errors and watch the mood improve!

## 🧩 Requirements

No special requirements. Works with any language where VS Code diagnostics are supported.