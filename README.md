# movieProxyProxy
反反向代理（误）
- 由于豆瓣api反向代理限制访问次数，于是乎本菜鸡突发奇想用最土的办法解决了一下。。。
- 接口还在更新中

## Api文档
- [接口测试](http://yfspecialweb.cn:8901/)

### 电影详情
---
### Url
```
http://yfspecialweb.cn:8901/v1/movie/subject:id
```
### Example
```
http://yfspecialweb.cn:8901/v1/movie/subject?id=1291546
```

### 演员详情
---
### Url
```
http://yfspecialweb.cn:8901/v1/movie/celebrity:id
```
### Example
```
http://yfspecialweb.cn:8901/v1/movie/celebrity?id=1054521
```
### 演员图片
---
### Url
```
http://yfspecialweb.cn:8901/v1/movie/celebrity/photo?:id
```
### Example
```
http://yfspecialweb.cn:8901/v1/movie/celebrity/photo?id=1054521
```

### 电影图片
---
### Url
```
http://yfspecialweb.cn:8901/v1/movie/subject/photo?:id
```
### Example
```
http://yfspecialweb.cn:8901/v1/movie/subject/photo?id=1291546
```
### 名人作品
---
### Url
```
http://yfspecialweb.cn:8901/v1/movie/celebrity/works?:id
```
### Example
```
http://yfspecialweb.cn:8901/v1/movie/celebrity/works?id=1054521
```
