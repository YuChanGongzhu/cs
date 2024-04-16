
const openai = new OpenAI({
    apiKey: 'sk-xxxxx',//填自己的
    baseURL: "https://api.xty.app/v1",
})
const OpenAI = require('openai');
const vscode = require('vscode');
//代码重构
async function main() {
    await gpt('帮我重构下面的代码');
}
//主函数
async function gpt(userInput) {

    //获取选中的代码
    var selection;
    let editor = vscode.window.activeTextEditor;
    if (editor) {
        const selectedCode = editor.document.getText(
            vscode.window.activeTextEditor.selection);
        if (selectedCode.length) {
            selection = selectedCode;
            // vscode.window.showInformationMessage(selectedCode);
        } else {
            vscode.window.showInformationMessage(`请选中一段代码`);
        }
    }

    //发送gpt请求
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: userInput + selection }],
        model: "gpt-3.5-turbo",
    });

    //打印返回文
    console.log(completion.choices[0].message.content);
    vscode.window.showInformationMessage(completion.choices[0].message.content);
}


main();