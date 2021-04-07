---
meta:
  - name: keywords
    content: 马新想 小马学习 数据库 mysql
  - name: description
    content: 本章为小马学习专栏 —— mysql数据库语法
---


# MySQL常用语法

[[toc]]

:horse: 


**数据库版本：`8.0.17`**

## 系统操作

```sql
// 登录
mysql -u root -p

// 设置密码
set password for root@localhost=password('新密码'); (方法一)
alter user user() identified by '新密码'; (方法二)

// 设置密码时使用加密方式
alter user 'root'@'localhost' identified  with mysql_native_password by  '密码';

// 刷新权限
flush privileges
```


<!-- ********************************** 数据库操作 *********************************** -->

## 数据库操作


### 创建数据库

```sql
// 创建数据库
create database 数据库名; 

// 创建数据库并设置uff8编码
create database 数据库名 default character set utf8 collate utf8_general_ci; 
```

### 删除数据库

```sql
// 删除数据库
drop database 数据库名
```

### 修改数据库

```sql
// 修改数据库字符编码
use 数据库名; //进入要修改的数据库
alter database character set utf8;
```

### 显示数据库

```sql
// 显示数据库
show databases;
```
### 选择数据库

```sql
// 选择数据库
use  数据库名;
```

### 查看数据库状态

```sql
// 查看数据库状态
status;
```

<!-- ********************************** 数据表操作 *********************************** -->

## 数据表操作

### 创建数据表

```sql
//显示数据表
create table people(
  id INT NOT NULL,
  name VARCHAR(10),
  age INT
);
```

### 添加数据表字段
```sql
//添加数据表字段 设置数据类型 + 非空 + 注释
alter table 表名 add 字段名 varchar(255) not null comment '应用访问地址'; 


// 增加自增主键
alter table 表名 add 字段名 int(5) not null auto_increment,add primary key (字段名);
```

### 删除数据表

```sql
//删除数据表
drop table 表名;

// 判断表是否存在，存在先删除
drop tabel if exists 表名;
```


### 删除数据表字段
```sql
//删除数据表字段
alter table 表名 drop 字段名
```

### 更改数据表字段
```sql
// 更改字段名
alter table 表名 change name name_change varchar(20) not null;

//更改数据表字段类型
alter table 字段名  modify column app_name text;

// 更改表注释
alter table 字段名 comment '系统信息表';
```

### 查看数据表

```sql
//查看数据表结构
describe 表名; 

//可以简写
desc 表名;
```

### 显示数据表

```sql
//显示数据表
show tables;
```


<!-- ********************************** 数据操作 *********************************** -->

## 数据操作

### 插入数据
```sql
//插入数据
insert into 表名 values(null,'小明',23);
```

### 删除数据
```sql
// 删除id为5的用户
delete from 表名 where id=5;
```

### 修改数据
```sql
//修改id为4的用户name值为小明
update 表名 set name='小明' where id=4;
```

<!-- ********************************** 查询操作 *********************************** -->

## 查询操作

### 查询

```sql
// 查询所有数据
select * from 表名;

// 查询name age字段的数据
select name,age from 表名;

// 使用as给查询的字段起别名
select name as new_name, age as new_age from 表名;

// 使用as 给表起别名
select p.name, p.age from people as p;
```

### where条件查询

```sql
// 选择id为1的数据
select * from 表名 where id=1;

// 选择id大于1的数据 
select * from 表名 where id>1;

//选择名字叫小王的并且年龄23的数据
select * from 表名 where name="小王" and age=23;
```

**在使用where条件查询语句中，可以使用的操作符：**
- `=` 等于号
- `<>, !=` 不等于，检测两个值是否相等，如果不相等返回true
- `>=` 大于等于号
- `<=` 小于等于号
- `>` 大于号
- `<` 小于号
- `and` 并且符（and的优先级大于or）
- `or` 或者符


### like模糊查询

```sql
// 查询name字段中含有k字母的数据
select * from 表名 where name like '%k%';

// 类似正则 [] 模糊查询 ,匹配 张测试 马测试 刘测试
select * from 表名 where name like '[张马刘]测试';

// 匹配非 张测试 马测试 刘测试得数据
select * from 表名 where name like '[^张马刘]测试'
```
**`like`模糊匹配经常与`%`和`_`一起使用：**
- `%m`：以m结尾的数据
- `m%`：以m开头的数据
- `%a%`：含有m的数据
- `_m_`：三位且中间字母是m的
- `_m`：两位且结尾字母是m的
- `m_`：两位且开头字母是m的

### 排序 ORDER BY

```sql
//正序 数值递增，字母自然顺序（a-z）
select name from 表名 order by asc;

//倒序 数值递减， 字母反序
select name from 表名 order by desc;

// 单个name字段排序
select * from 表名 order by name desc;

// 条件筛选后排序
select * from 表名 where time>5000 order by name desc;
```

### 合并 union （all)

```sql
// 返回表名1和表名2合并后的数据 不包含重复（并默认排序）
select name from 表名1  union select name from 表名2

// 返回表名1和表名2合并后的数据 包含重复（默认不排序）
select name from 表名1  union all select name from 表名2
```


<!-- ********************************** 数据约束 *********************************** -->

## MySQL字段描述

- **主键约束：`primary key`**
```sql
// 添加主键约束
alter table 表名 add 字段名 int(5) not null, add primary key (`字段名`);
```
- **自增标志 `auto_increment`**
```sql
// 添加自增标志
alter table 表名 add 字段名 int(5) auto_increment;
```

- **外键约束：`foreign key`**
```sql
// 添加外键约束
alter table 子表名 add foreign key(子表的外键名) references 父表名（父表主键名） [ON DELETE option] [ON UPDATE option];
```
外键约束中 `option`选项可为：
- `cscade`: 从父表中删除或者更新对应的行,当前子表同时删除或者更新对应的行
- `set null`: 从父表中删除或者更新对应行,当前子表同时将外键列设置为`NULL`,如果子表外键字段设置了`NOT NULL`,还需要设置`DEFAULT`,否则会出错
- `no action`: `InnoDB`拒绝删除或者更新父表,对父表的外键字段拒绝操作,这意味着删除父表中的行也会失败
- `restrict`: 拒绝删除或者更新父表
- `set default`: `InnoDB`目前不支持。

外键约束常用的选项：
```sql
//父表更新同时更新子表,父表删除的时候如果子表不存在对应的数据删除成功,如果存在对应数据,删除失败.
on update cscade on delete restrict

//父表更新同时更新子表,父表删除子表的数据也删除.
on update cscade on delete cscade 
```

- **唯一约束 `unique`**
```sql
// 添加唯一约束
alter table 表名 add  unique (`字段名`)
```

- **非空约束：`not null`**
```sql
//添加非空约束
alter table 表名 add 字段名 int(5) not null
```

- **默认值：`default`**
```sql
alter table 表名 add 字段名 int(5) default '值'
```

