### 提交代码
Gitee账户：crui990  
Github账户：990536551@qq.com

push到Gitee后，通过镜像同步到Github，通过Github的Actions自动部署到Github Pages，
在Github的仓库的Settings -> Pages中可查看网址。

Actions的配置文件：.github/workflows/test-and-deploy.yml

### nodejs版本
使用nvm来切换（安装和配置nvm）  
在.nvmrc中写要使用的版本v18.16.0  
再在命令行执行命令：
```shell
nvm use $(cat .nvmrc)
```
