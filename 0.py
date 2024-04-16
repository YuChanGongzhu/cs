# -*- coding: utf-8 -*-
"""
Created on Wed Apr 10 15:42:01 2024

@author: 10648
"""

import openai

# 设置您的API密钥
openai.api_key = ''

# 定义您想要生成的文本
prompt = "生成一段描述食物的文本："

# 调用OpenAI的GPT-3.5模型来生成文本
response = openai.ChatCompletion.create(
  model="gpt-3.5-turbo",  # 选择模型
  messages=[{"role": "system", "content": prompt}],
  max_tokens=200  # 控制生成文本的长度
)

# 打印生成的文本
print(response['choices'][0]['message']['content'].strip())