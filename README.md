# arweave-wallet-sdk
ethereum-wallet-sdk

ethereum-wallet-sdk 是一个Arweave SDK，提供钱包生成，地址导出，交易生成，离线签名，交易广播等功能。

## 1.✅安装依赖

```shell
pnpm install
```

## 2.🫡编译

```shell
pnpm build
```


## 3.👻运行测试

```shell
pnpm test
```

## 4.👀如何使用

- 本地运行节点

  本地运行节点需要先安装ArLocal,详情参考arlocal安装说明，支持所有功能。

- 连接主网节点

  主网节点暂时只能使用交易创建和离线签名，提交交易可能因为网络问题获取不到主网账户的相关数据报错，广播交易当然也不稳定，建议使用：postman或者apifox手动获取账户信息：indep_tx  price ,广播交易。
