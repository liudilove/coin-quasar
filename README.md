# Quasar App (coin-quasar)

A Quasar Project

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev

quasar dev # or: yarn quasar dev # or: npx quasar dev

```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

# 构建 ssr:

(http://www.quasarchs.com/quasar-cli-vite/developing-ssr/deploying) [http://www.quasarchs.com/quasar-cli-vite/developing-ssr/deploying]

quasar build -m ssr

- 如果你想要一个启用了调试功能的生产构建：
  quasar build -m ssr -d

yarn start

#### 安装 nvm

(https://nvm.uihtm.com/#nvm-linux)[https://nvm.uihtm.com/#nvm-linux]

安装 yarn
(https://blog.csdn.net/weixin_40808668/article/details/122606543)[https://blog.csdn.net/weixin_40808668/article/details/122606543]

---

安装 pm2
(https://m.php.cn/faq/508007.html)[https://m.php.cn/faq/508007.html]
npm install -g pm2
pm2 start app.js

---

使用 nohup
nohup node app.js &

ps -ef | grep node # 找到进程 ID
kill <pid> # 结束进程
