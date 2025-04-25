// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `欢迎光临!
以下是所有可用的命令：
\n${c}\n
[tab]: 自动补全相应指令。
[ctrl+l]/clear: 打扫当前终端窗口。\n
输入“lm”显示摘要。
`;
};

// Redirection
export const blog = async (args: string[]): Promise<string> => {
  window.open(`${config.blog}`);
  return '正在打开博客...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
欢迎来到我的个人网站!
查看更多信息：
'lm' - 我的个人名片。
'gallery' - 查看我的画廊。
'readme' - 查看我的 GitHub README。`;
};

export const gallery = async (args: string[]): Promise<string> => {
  window.open(`${config.gallery}`);
  return '正在打开画廊...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `谢谢你的关心。
以下是您支持我的方法：
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.buymeacoffee}" target="_blank">buymeacoffee</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `正在发送电子邮件到 ${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return '正在打开 Github...';
};

export const mastodon = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.mastodon}/`);

  return '正在打开 Mastodon...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `使用 Google 搜索 ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `使用 DuckDuckGo 搜索 ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `使用 Bing 搜索 ${args.join(' ')}...`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `使用 Reddit 搜索 ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `var
root
home
tmp
usr`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `暂时无法通过 cd 命令更改目录。
如果您想得到更多的帮助，请输入“help”。`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `哇，你还用‘vi’？试试“vim”。`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `“vim”太过时了。“nvim”怎么样？`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `“nvim”?太花哨。为什么不试一下“emacs”？`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `你知道vscode吗？`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open(`${config.blog}`);
  return `没有权限。`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `

  ██▓     ▄▄▄       ▒█████   ███▄ ▄███▓ ▄▄▄       ██▓
  ▓██▒    ▒████▄    ▒██▒  ██▒▓██▒▀█▀ ██▒▒████▄    ▓██▒
  ▒██░    ▒██  ▀█▄  ▒██░  ██▒▓██    ▓██░▒██  ▀█▄  ▒██▒
  ▒██░    ░██▄▄▄▄██ ▒██   ██░▒██    ▒██ ░██▄▄▄▄██ ░██░
  ░██████▒ ▓█   ▓██▒░ ████▓▒░▒██▒   ░██▒ ▓█   ▓██▒░██░
  ░ ▒░▓  ░ ▒▒   ▓▒█░░ ▒░▒░▒░ ░ ▒░   ░  ░ ▒▒   ▓▒█░░▓  
  ░ ░ ▒  ░  ▒   ▒▒ ░  ░ ▒ ▒░ ░  ░      ░  ▒   ▒▒ ░ ▒ ░
    ░ ░     ░   ▒   ░ ░ ░ ▒  ░      ░     ░   ▒    ▒ ░
      ░  ░      ░  ░    ░ ░         ░         ░  ░ ░  
                                                        

输入“help”来查看可用命令的列表。
输入“lm”显示摘要。
输入“blog”或者点击<u><a class="text-light-blue dark:text-dark-blue underline" href="${config.blog}" target="_blank">这里</a></u>进入我的博客。
`;
};
