

const vscode = require('vscode');
// const axios = require('axios');


const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: 'sk-xxxxx',//填自己的
    baseURL: "https://api.xty.app/v1",
})

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

    console.log("插件启动成功了~")

    //插件功能注册
    context.subscriptions.push(
        vscode.commands.registerCommand('extension.hello', () => {
            vscode.window.showInformationMessage('HEllo World!!!!!!');
        }),
        vscode.commands.registerCommand('gpt', gpt),

    );

    //代码解释函数注册
    context.subscriptions.push(
        vscode.commands.registerCommand('chatgpt-for-vscode.explainCode', askGPTToExplain),
    );

    //代码纠错函数注册
    context.subscriptions.push(
        vscode.commands.registerCommand('chatgpt-for-vscode.whyBroken', askGPTWhyBroken),
    );

    //代码重构函数注册
    context.subscriptions.push(
        vscode.commands.registerCommand('chatgpt-for-vscode.refactor', askGPTToRefactor),
    );

    //代码优化函数注册
    context.subscriptions.push(
        vscode.commands.registerCommand('chatgpt-for-vscode.optimizeCode', askGPTToOptimize),
    );


    //功能函数
    //代码纠错
    async function askGPTWhyBroken() {
        await gpt('说明下面的代码会出现什么问题?');
    }
    //代码解释
    async function askGPTToExplain() {
        await gpt('请帮我解释一下下面的代码?');
    }
    //代码重构
    async function askGPTToRefactor() {
        await gpt('帮我重构下面的代码');
    }
    //代码优化
    async function askGPTToOptimize() {
        await gpt('帮我优化下面的代码');
    }

    //主函数
    async function gpt(userInput) {

        //获取选中的代码
        var selection;
        let editor = vscode.window.activeTextEditor;
        if (editor) {
            const selectedCode = editor.document.getText(vscode.window.activeTextEditor.selection);
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

}

function deactivate() { }

module.exports = {
    activate,
    deactivate
}


