# 产品智构

🚀 AI驱动的产品管理平台，帮助产品经理高效管理产品结构、需求文档，并通过AI辅助生成PRD和UI原型。

## ✨ 功能特性

### 📊 产品框架管理
- 多项目、多版本管理
- 三级结构：端 → 模块 → 页面
- 支持端类型：APP / 小程序 / PC
- 拖拽排序、右键菜单快捷操作

### 📝 页面内容管理

#### 元素管理
- 分区域组织页面元素
- 支持40种元素类型
- 交互行为设置（跳转、弹窗、提交等）
- 关联目标页面

#### 业务逻辑
6种逻辑类型，全面覆盖页面业务需求：

| 类型 | 说明 |
|------|------|
| 业务场景 | 不同条件下的页面表现（如：待支付、已完成、已取消） |
| 校验规则 | 表单字段校验逻辑（如：必填、格式、长度） |
| 接口定义 | 页面需要的API接口参数和返回值 |
| 状态流转 | 页面状态变化逻辑 |
| 权限控制 | 不同角色的操作权限 |
| 埋点需求 | 用户行为追踪事件 |

**数据来源**：
- 手动填写
- AI智能补全（打字机效果实时显示分析过程）
- 需求驱动生成（从PRD变更分析自动生成）

#### UED模块
- AI生成UI原型代码
- 预览/代码/规范三视图
- 打字机效果实时展示生成过程
- 代码可编辑
- 一键导出图片

### 📋 需求管理
- 需求创建（标题、描述、优先级、进度）
- 需求关联产品节点
- 需求跟随项目/版本切换

### 🤖 AI能力

| 功能 | 说明 |
|------|------|
| PRD生成 | 根据需求描述+产品结构自动生成完整PRD文档 |
| 变更分析 | 分析需求变更涉及的页面和元素 |
| 需求范围分析 | 自动分析需求涉及的产品范围 |
| 业务逻辑补全 | 根据页面元素+系统其他页面逻辑智能生成 |
| UI生成 | 根据页面元素自动生成前端代码，支持APP/小程序/PC多端适配 |

### 💾 数据管理
- LocalStorage本地存储，数据安全
- 数据备份/恢复（JSON导出导入）
- Markdown格式导出

## 🖼️ 界面预览

> 待补充

## 🚀 快速开始

### 环境要求
- Node.js 18+（用于API代理服务）
- 现代浏览器（Chrome、Firefox、Safari、Edge）

### 安装步骤

1. **克隆项目**
```bash
git clone https://github.com/your-username/product-frame-ai.git
cd product-frame-ai
```

2. **启动API代理服务**（用于AI接口调用）
```bash
node proxy-server.js
```

3. **打开应用**
```bash
# 方式1：直接打开
open index.html

# 方式2：使用本地服务器（推荐）
npx serve .
# 然后访问 http://localhost:3000
```

4. **配置AI密钥**
   - 点击左侧边栏「API配置」
   - 选择AI服务商
   - 输入API密钥

## 🔧 配置说明

### 支持的AI服务商

| 服务商 | 模型 | 获取API Key |
|--------|------|-------------|
| Claude | claude-3-opus, claude-3-sonnet | [获取](https://console.anthropic.com/) |
| 通义千问 | qwen-turbo, qwen-plus | [获取](https://dashscope.console.aliyun.com/) |
| DeepSeek | deepseek-chat | [获取](https://platform.deepseek.com/) |
| 豆包 | doubao-pro | [获取](https://console.volcengine.com/ark) |

### 自定义API地址
支持配置自定义API地址，可对接私有部署的AI服务。

## 📖 使用指南

### 创建产品结构
1. 选择项目 → 新增端（选择APP/小程序/PC类型）
2. 在端下新增模块
3. 在模块下新增页面
4. 在页面中添加元素（40种元素类型）

### 管理业务逻辑
1. 选择一个页面
2. 切换到「业务逻辑」标签
3. 手动添加或点击「AI补全」智能生成
4. 支持6种逻辑类型：业务场景、校验规则、接口定义、状态流转、权限控制、埋点需求

### 创建需求
1. 点击右侧「需求」面板的 + 按钮
2. 填写需求标题、描述、优先级、进度
3. 关联相关产品节点

### 生成PRD
1. 点击需求卡片查看详情
2. 选择涉及的端
3. 点击「生成PRD」
4. AI自动生成完整PRD文档

### 生成UI
1. 选择一个页面
2. 切换到「UED」标签
3. 点击「AI生成」
4. AI根据页面元素和端类型生成UI代码

## 🛠️ 技术栈

- **前端**：原生 HTML + CSS + JavaScript
- **样式**：Tailwind CSS
- **存储**：LocalStorage
- **AI调用**：通过本地代理服务转发API请求
- **Markdown渲染**：marked.js

## 📁 项目结构

```
product-frame-ai/
├── index.html          # 主应用文件
├── proxy-server.js     # API代理服务
├── css/
│   └── styles.css      # 样式文件
├── LICENSE             # MIT开源协议
└── README.md           # 项目说明
```

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 📝 开发计划

- [ ] AI需求完整性检查
- [ ] AI优先级建议
- [ ] 需求评审清单生成
- [ ] API接口文档生成
- [ ] 测试用例生成
- [ ] 业务逻辑关联关系
- [ ] 版本变更记录
- [ ] 多人协作支持

## 🚀 部署到 Vercel

### 一键部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/product-frame-ai)

### 手动部署

1. **Fork 或 Clone 本项目**

2. **安装 Vercel CLI**
```bash
npm i -g vercel
```

3. **登录 Vercel**
```bash
vercel login
```

4. **部署项目**
```bash
vercel
```

5. **配置默认 API Key（可选）**

编辑 `index.html` 中的 `DEFAULT_API_CONFIG` 常量：
```javascript
const DEFAULT_API_CONFIG = {
    provider: 'your-provider',  // claude, tongyi, deepseek, doubao, xunfei
    apiKey: 'your-api-key',     // 你的 API Key
    baseUrl: '',                // 可选，自定义 API 地址
    model: 'your-model'         // 模型名称
};
```

### 环境说明

- **本地开发**：API 请求通过 `proxy-server.js` 代理（需运行 `node proxy-server.js`）
- **Vercel 部署**：API 请求通过 Serverless Functions 代理（自动适配）

## 📄 License

本项目基于 [MIT License](LICENSE) 开源。

## 🙏 致谢

感谢所有AI服务商提供的强大能力，让产品工作更加高效。
