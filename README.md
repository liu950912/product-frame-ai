# 产品智构

**面向产品经理的 AI 辅助设计工具** —— 从需求到 PRD 到 UI 原型，一站式完成。

## 产品定位

产品经理在日常工作中面临诸多痛点：
- 写 PRD 耗时费力，格式不统一
- 需求变更追踪困难，版本管理混乱
- 产品结构与开发实现存在断层
- UI 原型沟通成本高

**产品智构** 致力于解决这些问题，通过 AI 辅助，让产品经理专注于**思考**而非**文档编写**。

## 核心价值

| 场景 | 传统方式 | 产品智构 |
|------|----------|----------|
| 写 PRD | 从空白文档开始，耗时 2-4 小时 | AI 根据产品结构自动生成，10 分钟完成 |
| 需求变更 | 手动记录，容易遗漏 | 自动分析影响范围，标记变更内容 |
| 业务逻辑 | 散落在各处文档 | 结构化管理，AI 智能补全 |
| UI 沟通 | 截图+文字描述 | AI 生成原型代码，所见即所得 |

## 功能特性

### 📊 产品结构管理

建立清晰的产品骨架：项目 → 版本 → 端 → 模块 → 页面

- **多项目管理**：同时维护多个产品
- **版本演进**：新版本自动继承上一版本，已删除内容自动清理
- **三级结构**：端（APP/小程序/PC）→ 模块 → 页面
- **拖拽排序**：灵活调整结构顺序

### 📝 页面内容管理

#### 元素管理
- 分区域组织页面元素（顶部、内容区、底部等）
- 40+ 元素类型（按钮、输入框、列表、卡片等）
- 交互行为设置（跳转、弹窗、提交、分享等）

#### 业务逻辑
6 种逻辑类型，结构化管理页面业务：

| 类型 | 说明 | 示例 |
|------|------|------|
| 业务场景 | 页面在不同条件下的表现 | 订单页：待支付、已完成、已取消 |
| 校验规则 | 表单字段校验逻辑 | 手机号：必填、11位、有效号段 |
| 接口定义 | 页面需要的 API | 请求参数、返回字段、错误码 |
| 状态流转 | 页面状态变化逻辑 | 支付成功 → 跳转结果页 |
| 权限控制 | 不同角色的操作权限 | 普通用户 vs VIP 用户 |
| 埋点需求 | 用户行为追踪 | 按钮点击、页面曝光 |

**AI 辅助**：根据页面元素和系统其他页面，智能补全业务逻辑。

#### UED 原型
- AI 根据页面元素生成 UI 代码
- 预览/代码双视图
- 支持导出图片

### 📋 需求管理

- 需求创建与优先级管理
- 关联产品节点，自动分析影响范围
- 需求变更追踪，标记新增/修改/删除内容

### 🤖 AI 能力

| 功能 | 说明 |
|------|------|
| PRD 生成 | 根据需求描述 + 产品结构，自动生成完整 PRD |
| 变更分析 | 分析需求变更涉及的页面和元素 |
| 业务逻辑补全 | 根据页面元素智能生成业务逻辑 |
| UI 生成 | 根据页面元素生成前端代码 |

### 💾 数据安全

- **本地存储**：数据保存在浏览器 LocalStorage，不上传服务器
- **导入导出**：JSON 格式备份，随时迁移
- **Markdown 导出**：PRD 一键导出

## 快速开始

### 在线体验

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/liu950912/product-frame-ai)

### 本地运行

```bash
# 克隆项目
git clone https://github.com/liu950912/product-frame-ai.git
cd product-frame-ai

# 启动 API 代理服务（用于 AI 接口调用）
node proxy-server.js

# 打开应用
open index.html
# 或使用本地服务器
npx serve .
```

### 配置 AI 服务

支持多种 AI 服务商：

| 服务商 | 推荐模型 | 获取 API Key |
|--------|----------|--------------|
| Claude | claude-3-opus | [获取](https://console.anthropic.com/) |
| 通义千问 | qwen-turbo | [获取](https://dashscope.console.aliyun.com/) |
| DeepSeek | deepseek-chat | [获取](https://platform.deepseek.com/) |
| 豆包 | doubao-pro | [获取](https://console.volcengine.com/ark) |

## 技术栈

- **前端**：原生 HTML + CSS + JavaScript
- **样式**：Tailwind CSS
- **存储**：LocalStorage
- **部署**：Vercel Serverless Functions

## 项目结构

```
product-frame-ai/
├── index.html          # 主应用
├── proxy-server.js     # 本地 API 代理
├── api/                # Vercel Serverless Functions
│   ├── proxy.js        # 普通 API 代理
│   └── stream.js       # 流式 API 代理
├── css/styles.css      # 样式文件
├── vercel.json         # Vercel 配置
├── package.json        # 项目配置
├── LICENSE             # MIT 开源协议
└── README.md           # 项目说明
```

## 开发计划

- [ ] AI 需求完整性检查
- [ ] AI 优先级建议
- [ ] 需求评审清单生成
- [ ] API 接口文档生成
- [ ] 测试用例生成
- [ ] 版本对比视图
- [ ] 多人协作支持
- [ ] 国际化支持

## 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## License

本项目基于 [MIT License](LICENSE) 开源。

---

**作者**：[刘文超](https://github.com/liu950912)

如果这个项目对你有帮助，欢迎 ⭐ Star 支持！
