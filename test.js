// const vscode = require('vscode');

// const HttpsProxyAgent = require('https-proxy-agent');

// const axiosDefaultConfig = {
//     baseURL: 'https://jsonplaceholder.typicode.com/posts',
//     proxy: false,
//     httpsAgent: HttpsProxyAgent('http://142.93.165.82:8080')
// };
// const axios = require ('axios').create(axiosDefaultConfig);

// axios.post('42')
//     .then(function (response) {
//         console.log('Response with axios was ok: ' + response.status);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

// /**
//  * @param {vscode.ExtensionContext} context
//  */
// function activate(context) {
//     let disposable = vscode.commands.registerCommand('extension.chatGPT', async function () {
//         const apiURL = "https://api.openai.com/v1/completions"; 
//         const apiKey = "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";
//         const promptText = "Hello, world!"; 
//         try {
//             const response = await axios.post(apiURL, {
//                 "model": "gpt-3.5-turbo", 
//                 "prompt": promptText,
//                 "temperature": 0.7,
				
//                 "max_tokens": 150,
//             }, {
//             	headers: {
//                     Authorization: `Bearer ${apiKey}`
//                 }
//             });
//             vscode.window.showInformationMessage(response.data.choices[0].text);
//         } catch (error) {
//             console.error("出现一个错误:", error);
//             vscode.window.showErrorMessage("出现一个错误1"+String(error));
//         }
//     });

//     context.subscriptions.push(disposable);
// }

// function deactivate() {}

// module.exports = {
//     activate,
//     deactivate
// }

/** 
const vscode = require('vscode');
const axios = require('axios')

const HttpsProxyAgent = require('https-proxy-agent');
*/

/**
 * @param {vscode.ExtensionContext} context
 */

/**
function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.chatGPT', async function () {
        const apiURL = "https://api.openai.com/v1/completions";
        const apiKey = "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";
        const promptText = "Hello, world!";
        // const httpsAgent = new HttpsProxyAgent(`127.0.0.1:7890`);
        const axiosInstance = axios.create({
            proxy: {
                host: 'localhost',
                port: 7890,
                protocol: 'http',
            },
            // httpAgent: httpsAgent,
            // httpsAgent: httpsAgent
        })

        try {
            const response = await axiosInstance.post(apiURL, {
                "model": "gpt-3.5-turbo",
                "prompt": promptText,
                "temperature": 0.7,
                "max_tokens": 150,
            }, {
                headers: {
                    "Authorization": `Bearer ${apiKey}`
                }
            });
            vscode.window.showInformationMessage(response.data.choices[0].text);
        } catch (error) {
            console.error("出现一个错误:", error);
            vscode.window.showErrorMessage("出现一个错误1" + String(error));
        }
    });

    context.subscriptions.push(disposable);
}

function deactivate() { }

module.exports = {
    activate,
    deactivate
}*/