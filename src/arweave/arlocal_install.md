1. 安装sqlite3:

   ```shell
   setx node_sqlite3_binary_host_mirror https://registry.npmmirror.com/-/binary/sqlite3/
   pnpm add sqlite3@5.1.6
   ```

2. 安装arlocal:

   ```shell
   pnpm add arlocal -D
   ```

3. 使用：

   - 终端启动：

     ```shell
     npx arlocal
     ```

   - 代码启动：

     参考测试文件代码