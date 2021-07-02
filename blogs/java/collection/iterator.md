---
meta:
  - name: keywords
    content: 马新想 小马学习 java 遍历 iterator
  - name: description
    content: 本章为小马学习专栏—— Java遍历iterator
---

# Java-Iterator

[[toc]]

:horse: 


##  前言

`Iterator`是`java`迭代器，常用于遍历集合。`iterator`方法位于是`java.lang.Iterable`接口,被`Collection`继承。`iterator`常用方法如下：

- `Object next()` 获得序列中的下一个元素。
- `Boolean  hasNext()` 检查序列中是否还有元素。
- `void remove()` 将迭代器新返回的元素删除。


## 使用

在集合中使用`Iterator`需要先获取`iterator`对象。

```java
import java.util.ArrayList;
import java.util.Iterator;

public class Test {
    public static void main(String[] args) {

        // 创建ArrayList集合
        ArrayList<String> alist = new ArrayList<String>();
        alist.add("111");
        alist.add("222");
        alist.add("333");
        alist.add("444");

        // 获取迭代器
        Iterator<String> it = alist.iterator();

        // 输出集合中的第一个元素
        // it 指针指向第二个元素
        System.out.println(it.next()); // 111


        // 从第二项开始输出集合中的元素
        // 因为已经调用过一次 next()方法了，
        // 所以从第二个元素开始输出
        while(it.hasNext()) {
            System.out.println(it.next());
        }
    }
}
```



