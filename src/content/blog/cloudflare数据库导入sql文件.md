---

title: "cloudflare  D1数据库导入sql文件"
categories: cloudflare
tags: ["cloudflare","数据库","踩坑"]
id: "e73e1a8015629826"
date: 2025-04-17 16:33:19
cover: ""

---

:::note{type="info"}

下面是为了typecho博客迁移所记录的一个流程。

但是是行不通的，typecho只能部署到正常的运主机！

:::

### mysql数据库文件导入到cloudflare

1. 创建D1 SQL数据库，输入数据名称。

   ![image.png](https://img-5n2.pages.dev/v2/Ttac8y9.png)

2. 安装 Wrangler

   ```bash
   npm install -g wrangler
   ```

3. 绑定创建的cloudflare数据库，`binding`"DB"我设置的是默认的，其他的需要和云上面的一样，新建一个`wrangler.toml`文件里配置

   ```bash
   [[d1_databases]]
   binding = "DB"
   database_name = "data"
   database_id = "e33723dc-6333-46f7-b073-a668917622be"
   
   ```

4.  设置好了查看输入下面命令

   ```bash
   wrangler d1  list
   ```

   

   ```bash
   wrangler d1 execute data --file=./admin_20240126_163040SQLite.sql
   ```

   ![image.png](https://img-5n2.pages.dev/v2/0e9JG5X.png)

5. 成功后的提示如图

   ![image.png](https://img-5n2.pages.dev/v2/vtiA6js.png)

6. 查看是否上传成功。

   ![image.png](https://img-5n2.pages.dev/v2/CrSqoC3.png)







> ### Cloudflare 的 D1 数据库目前只支持 SQLite 引擎，所以需要把sql的格式转换。







