## 运行命令

构建静态页面
pnpm build
运行
pnpm run dev



## 提交github命令

### 1. 确保的工作目录是干净的（可选：检查状态）
git status

### 2. 添加所有更改到暂存区
git add .

### 3. 提交更改到本地仓库
git commit -m "你的提交信息"

### 4. 拉取远程仓库的最新更改并合并
git pull origin main

### 5. 如果有冲突，解决冲突后再次提交
### （手动编辑冲突文件，然后运行以下命令）
git add <冲突文件>
git commit -m "解决合并冲突"

### 6. 推送本地更改到远程仓库
git push origin main


## 如果需要强制推送（覆盖远程内容）

git push origin main --force
