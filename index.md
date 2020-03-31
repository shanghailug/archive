# 归档日志

## 数据来源

1. Lightening，包括如下数据：

* shlug.zip：包括www.geekbone.org的网站、演讲活动资料；
* haproxy.odp、20100725.odp、shlug2010review.pdf：演讲活动资料。

2. Wayback Machine

* [主网站](http://www.shlug.org)在改用GitHub页面前的[快照](https://web.archive.org/web/20151119122625/http://www.shlug.org/).

## 数据处理

### shlug.zip

`shlug.zip`中包括`geekbone`和`meeting`目录，分别是网站数据和分享活动相关的资料。

#### geekbone目录

1. 去除无关数据内容

* 去除`geekbone`目录下除了`geekbone`子目录的其他文件和目录；
* 去除`geekbone/geekbone/cert`目录；
* 去除`geekbone/geekbone/webalizer`；
* 去除从来没用过的`geekbone/geekbone/discuss`；

2. 转换GBK编码的文本文件

```
find -name '*.txt' -print0|xargs -0 recode gbk..utf8
```

3. 转换GBK编码的HTML文件

```
find -name '*htm*' -type f -exec fgrep -q  -i charset=gb '{}'  \;  -print0 | xargs -0 -L1  -I{} recode gbk..utf8 '{}'

find -name '*htm*' -type f -exec fgrep -q  -i charset=gb '{}'  \;  -print0 | xargs -0 -L1 sed -i -e 's/charset=..2312/charset=utf-8/g'
```

4. 转换其他文件的编码

```
find -name '*.js' -type f -print0 | xargs -0 -L1 recode gbk..utf8
```

5. 站内绝对路径链接改为相对路径，以及其他修正

* 查找所有htm文件中使用域名或绝对路径指向站内的资源的URL，手动修改为相对路径；
* 可能查找不全，如有问题请提issue；

### www.shlug.org快照

快照是通过以下命令下载的：

> wayback_machine_downloader http://www.shlug.org -t 20160306

下载好的数据需要进行如下几项处理：

1. 对非UTF-8编码的文本文件和HTML文件转编码（见`script/shlug_fix_enc.sh`） ；
2. 改写所有HTML文件中的站内链接，改为相对路径（见`script/shlug_fix_url.rb`），具体分为下面几个步骤：
   * 搜索所有的可能是HTML的文件（通过magic判断），根据找到里面的css和js文件，形成一个列表；
   * 搜索所有的HTML文件（通过去除出现在上一步列表中的文件排除误判），对于其中引用的站内js和css文件，若扩展名不是对应的'.js'或'.css'，对本地文件改名并修正对应的HTML文件；
   * 搜索所有的HTML文件，将其中的所有站内引用的资源均改写为相对路径；


