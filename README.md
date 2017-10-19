# simpleRESTfulAPI
简单的RESTful API用于mysql的数据获取（目前只支持查询数据）

## mysql结构
三张表
- APIs <br/>
API定义，主要包括apiId,sqlstring,isdisabled，将apiId作为url，直接获取对应sqlstring，二次查询，得到预先约定的数据源
- APIuser <br/>
API用户表，有userId,account,passwordisdisabled，检验访问者身份（后续可能加上所在ip访问限制）
- APIpermission <br/>
API用户权限对应表，userId,apiId，特定身份只能访问特定API，用户-API，一对多

## 获取流程
1. getSession
post,将约定用户名、密码传递，分配session
2. getData
携带session以及参数，并访问指定url获取资源<br/>
如"/data/1/",其中1代表APIs表id
3. closeSession<br/>
简单的安全措施，获取完成立即注销session，如不采取手动注销，session会在配置的时长后到期

## 后续计划：
### 2017-10-19
1. 目前整个API没有安全可言，考虑在建立api时，增加ssl嵌套
2. 关于写入数据，尽管客户端有可能已经做了检测，但传至服务端仍需要一套检测机制
3. 用户权限的设置目前只能后台insert，考虑做前台注册界面？是否多余
