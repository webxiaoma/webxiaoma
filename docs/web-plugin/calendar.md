---
sidebarDepth: 2
meta:
  - name: keywordsv
    content: react redux mobx redux-thunk
  - name: description
    content: 本文章主要记录react的一些常见网站以及博客。
---

# 日历插件


## 版本

日历插件，版本为 <Badge>v1.0.0</Badge>

## 主要功能

1. 
2. 获取年月日、节日、
3. 
4. 
5. 

## 安装

**1. 第一种方式，直接引入**

- 引入`css`

```

```

- 引入`js`

```

```

**2. 第二种方式**

``` 

```

## 基本用法

```js
var cal = new Calendar(el,options)
```
- `el`: `input`元素的`id`或`class`,推荐使用`id`；
- `options`: 日历插件的配置，各项配置见下表；

## `Options` 属性

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ |:------:|:------:|  
| format | 年月日之间的分隔符 | `String` | —— | `-` |
| isFillZero | 单月份和单日前是否补0 | `Boolean` | —— | `true` |
| max | 可选择的最大时间 | `String`/`Number` | 时间格式如(2019-2-1、2019/2/1、时间戳) | `true` |
| min | 可选择的最小时间 | `String`/`Number` | 时间格式如(2019-2-1、2019/2/1、时间戳) | `true` |
| nextMonthBtnText | 上一年按钮文本 | `String` | —— | `<<` |
| nextYearBtnName | 下一年按钮文本 | `String` | —— | `>>` |
| prevMonthBtnName | 上一月按钮文本 | `String` | —— | `<`|
| nextMonthBtnName | 下一月按钮文本 | `String` | —— | `>` |


## `Options` 事件

| 事件 | 说明 | 回调参数 |
| ------ | ------ | ------ |
| click | 选择日期时触发 | 返回日期对象的详细信息 [dayMsg](/web-plugin/calendar.html#dayMsg对象) |
| change | 日期更改时触发 | 返回包含年月日等信息的对象 | 
| rightHandClick | 右击日期时触发 | day日期天数实例 |


### dayMsg对象

- `Animal`: 当年的生肖属性
- `IDayCn`: "二十"
- `IMonthCn`: "十月"
- `LFtv`: 阴历常见节日（默认null）
- `SFtv`: 阳历历常见节日（默认null）
- `Term`: 二十四节气
- `astro`: 当日星座
- `cDay`: 阳历日
- `cMonth`: 阳历月份（1-12）
- `cYear`: 阳历年份
- `gzDay`: 干支纪天
- `gzMonth`: 干支纪月
- `gzYear`: 干支纪年
- `isLeap`: 是否是闰年，boolean值
- `isTerm`: 当时是否是二十四节气，boolean值
- `isToday`: 当前阳历日期是否就是今日，boolean值
- `lDay`: 阴历号
- `lMonth`: 阴历月份
- `lYear`: 阴历年份
- `nWeek`: 数字星期（1-7）
- `ncWeek`: 字符串星期


## `Options` 方法

| 方法 | 说明 | 参数 |
| ------ | ------ | ------ |
| beforeCreateDay | 日期天数创建前钩子函数 | dayMsg传入日期实例的参数对象 |
| afterCreateDay | 日期天数创建后钩子函数 | day每日的日期实例 | 



## 例子


 
## 更新日志