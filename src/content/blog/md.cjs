const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// 获取当前时间
const currentDate = new Date();

// 生成随机 ID（你可以根据需要调整长度和生成方式）
const generateRandomId = () => crypto.randomBytes(8).toString('hex');

// 格式化当前时间为 `yyyy-MM-dd HH:mm:ss`
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

// 获取命令行传入的标题
const title = process.argv[2]; // 第一个参数是标题

// 调试：打印标题查看传递是否成功
console.log('Received title:', title);

if (!title) {
  console.log('请提供标题作为第一个命令行参数!');
  process.exit(1);
}

const generateMarkdown = () => {
  const randomId = generateRandomId();
  const formattedDate = formatDate(currentDate);

  const markdownContent = `---
title: "${title}"
categories: 
tags: [""]
id: "${randomId}"
date: ${formattedDate}
cover: ""
---`;

  // 将标题转换为合法的文件名（仅移除不允许的符号，保留中文等字符）
  const fileName = title
    .toLowerCase() // 转为小写（如果需要的话）
    .replace(/[^\w\s\u4e00-\u9fa5-]/g, '')  // 保留中文字符和字母数字，移除其他不合法字符
    .replace(/\s+/g, '-')  // 将空格替换为破折号
    .replace(/-+/g, '-')  // 防止连续多个破折号
    .trim();  // 去掉前后多余的破折号

  // 调试：打印生成的文件名
  console.log('Generated file name:', fileName);

  // 确保文件名有 `.md` 扩展名
  const filePath = path.join(__dirname, `${fileName}.md`);

  // 创建 md 文件
  fs.writeFileSync(filePath, markdownContent, 'utf8');
  console.log(`Markdown 文件 ${filePath} 已生成!`);
};

generateMarkdown();
