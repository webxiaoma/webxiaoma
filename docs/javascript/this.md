---
sidebarDepth: 2
meta:
  - name: keywords
    content: this, js this, es6 this 马新想
  - name: description
    content: 本文讲述js中的this使用。
---

# JavaScript之This

---

在`JavaScript`中，`this`是一直讨论的东西，并且在每个上下文创建时，`this`就被创建了，另外还有三个重要的属性也会被创建:[变量对象](/javascript/variable-object.html)、[作用域链](/javascript/scope-chain.html)。最近抽出了部分时间将`JavaScript`中`this`的知识汇总了一下。


## ECMAScript5.0 规范

[ECMAScript 5.1 规范](http://yanhaijing.com/es5/#about)



### ECMAScript 中的数据类型

在js中的数据类型分为语言类型和规范类型：

> `ECMAScript` 语言类型 是 `ECMAScript` 程序员使用 `ECMAScript` 语言直接操作的值对应的类型。`ECMAScript` 语言类型包括 未定义 （Undefined）、 空值 （Null）、 布尔值（Boolean）、 字符串 （String）、 数值 （Number）、 对象 （Object）。

> 规范类型 是描述 `ECMAScript` 语言构造与 `ECMAScript` 语言类型语意的算法所用的元值对应的类型。规范类型包括 引用(Reference) 、 列表(List) 、 完结(Completion) 、 属性描述式(Property Descriptor) 、 属性标示(Property Identifier)、 词法环境（Lexical Environment）、 环境纪录（Environment Record）。规范类型的值是不一定对应 `ECMAScript` 实现里任何实体的虚拟对象。规范类型可用来描述 `ECMAScript` 表式运算的中途结果，但是这些值不能存成对象的变量或是 `ECMAScript` 语言变量的值。


## 全局中的This




## 函数中的This