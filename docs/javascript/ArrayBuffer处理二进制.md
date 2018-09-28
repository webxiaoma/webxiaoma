---
sidebarDepth: 2
meta:
  - name: keywords
    content: webpack, module, loader配置，webpcak配置，webpack-loader
  - name: description
    content: 本文主要讲述webpack的模块处理，以及怎么使用webpack按照loader规则解析编译文件。
---


# ArrayBuffer处理二进制

来自[《JavaScript 标准参考教程（alpha）》](http://javascript.ruanyifeng.com/stdlib/arraybuffer.html#)，by 阮一峰

---

> `ArrayBuffer`对象、T`ypedArray`对象、`DataView`对象是`JavaScript`操作二进制数据的一个接口。这些对象早就存在，属于独立的规格，ES6将它们纳入了ECMAScript规格，并且增加了新的方法。

> 首先，这个 `ArrayBuffer` 类型化数组，类型化   数组是`JavaScript`操作二进制数据的一个接口。最初为了满足`JavaScript`与显卡之间大量的、实时的数据交换，它们之间的数据通信必须是二进制的，而不能是传统的文本格式。`Arraybuffer`就是一片内存空间，不能直接引用里面的数据，用户只能通过`typedarray`类型和`dataView`类型引用。

- `ArrayBuffer`对象：代表内存之中的一段二进制数据，可以通过“视图”进行操作。“视图”部署了数组接口，这意味着，可以用数组的方法操作内存。

- `TypedArray`对象：用来生成内存的视图，通过9个构造函数，可以生成9种数据格式的视图，比如`Uint8Array`（无符号8位整数）数组视图, Int16Array（16位整数）数组视图, Float32Array（32位浮点数）数组视图等等。

- `DataView`对象：用来生成内存的视图，可以自定义格式和字节序，比如第一个字节是`Uint8`（无符号8位整数）、第二个字节是Int16（16位整数）、第三个字节是Float32（32位浮点数）等等。

简单说，`ArrayBuffer`对象代表原始的二进制数据，`TypedArray`对象代表确定类型的二进制数据，`DataView`对象代表不确定类型的二进制数据。它们支持的数据类型一共有9种（`DataView`对象支持除`Uint8C`以外的其他8种）。


### 一、 `ArrayBuffer`对象

`ArrayBuffer`对象代表储存二进制数据的一段内存，它不能直接读写，只能通过视图（`T`ypedArray`视图和`DataView`视图)来读写，视图的作用是以指定格式解读二进制数据。

- **创建 `ArrayBuffer`**

```JavaScript

let buf = new ArrayBuffer(32)
// 生成了一个32字节的内存区域，每个字节默认为0

```


- **读取 `ArrayBuffer`**

读取`ArrayBuffer` 我们上边提了有两种方式：

第一种方式通过 `DataView` 视图读取


```JavaScript
let buf = new ArrayBuffer(32)
let dataView = new DataView(buf)
dataView.getUnt8(0)

// 建立DataView视图，然后以不带符号的8位整数格式，读取第一个元素
```


第二种方式通过 `TypeArray` 视图,与DataView视图的一个区别是，它不是一个构造函数，而是一组构造函数，代表不同的数据格式。

```JavaScript
let buf = new ArrayBuffer(32)
let int32 = new Int32Array(buf)
let uint8 = new Uint8Array(buf)
console.log(int32[0]) // 0
console.log(uint8[0]) // 0

// 还可以直接修改
int32[0] = 1;
console.log(int32[0]) // 1
console.log(uint8[0]) // 1
```

上面代码对同一段内存，分别建立两种视图：32位带符号整数（Int32Array构造函数）和8位不带符号整数（Uint8Array构造函数）。由于两个视图对应的是同一段内存，一个视图修改底层内存，会影响到另一个视图。


- **`ArrayBuffer`的其它属性方法**

> `ArrayBuffer.prototype.byteLength` 返回所分配的内存区域的字节长度。
> `ArrayBuffer.prototype.slice(start,len)` 允许将内存区域的一部分，拷贝生成一个新的ArrayBuffer对象,并返回，start 为开始看吧的位置，len为拷贝长度
> `ArrayBuffer.isView()` 返回一个布尔值，表示参数是否为ArrayBuffer的视图实例(也就是是否为是否为TypedArray实例或DataView实例)



### 二、 `TypedArray对象`

`ArrayBuffer`对象作为内存区域，可以存放多种类型的数据。同一段内存，不同数据有不同的解读方式，这就叫做“视图”（view）。`ArrayBuffer`有两种视图，一种是`TypedArray`视图，另一种是`DataView`视图，两者的区别主要是字节序，前者的数组成员都是同一个数据类型，后者的数组成员可以是不同的数据类型。

- **`TypedArray对象`提供的视图**

目前，TypedArray对象一共提供9种类型的视图，每一种视图都是一种构造函数。

|  视图函数  |  说明  |
| --- | --- |
|  Int8Array  |  8位有符号整数，长度1个字节   |
|  Uint8Array |  8位无符号整数，长度1个字节  |
|  Uint8ClampedArray  |  位无符号整数，长度1个字节，溢出处理不同  |
|  Int16Array  | 16位有符号整数，长度2个字   |
|  Uint16Array  |  16位无符号整数，长度2个字节  |
|  Int32Array  |   32位有符号整数，长度4个字节 |
|  Uint32Array  |  32位无符号整数，长度4个字节  |
|  Float32Array  |  32位浮点数，长度4个字节  |
|  Float64Array  |  64位浮点数，长度8个字节  |

这9个构造函数生成的对象，统称为`TypedArray`对象。它们很像正常数组，都有length属性，都能用方括号运算符（[]）获取单个元素，所有数组的方法，在类型化数组上面都能使用。两者的差异主要在以下方面。

> `TypedArray`数组的所有成员，都是同一种类型和格式。
> `TypedArray`数组的成员是连续的，不会有空位。
> `Typed`化数组成员的默认值为0。比如，`new Array(10)`返回一个正常数组，里面没有任何成员，只是10个空位；`new Uint8Array(10)`返回一个类型化数组，里面10个成员都是0。
> `TypedArray`数组只是一层视图，本身不储存数据，它的数据都储存在底层的`ArrayBuffer`对象之中，要获取底层对象必须使用buffer属性。


- **`TypedArray` 提供的9中构造函数的用法**

**(1) `TypedArray(buffer, byteOffset=0, length?)`**

buffer为底层ArrayBuffer,byteOffset为开始字节序号默认为0，length为长度默认直到本段内存区域结束

```JavaScript
// 创建一个8字节的ArrayBuffer
let buf = new ArrayBuffer(8)

// 创建一个指向b的Int32视图，开始于字节0，直到缓冲区的末尾
let typedAry1 = new Int32Array(buf)

//创建一个指向b的Uint8视图，开始于字节2，直到缓冲区的末尾
let typedAry2 = new Uin8Array(buf,2)

// 创建一个指向b的Int16视图，开始于字节2，长度为2
let typedAry2 = new Int16Array(buf,2,2)
```
需要注意的是：byteOffset必须与所要建立的数据类型一致（也就是创建的内存数据字节数要是其视图规定的整数倍），否则会报错


**(2) `TypedArray(ArrayObj)` 视图还可以不通过ArrayBuffer对象，直接分配内存而生成**


```JavaScript
// 直接写长度，创建一个有八个成员的 32位有符号整数数组（共32个字节）
let typedAry1 = new Int32Array(8)

// 类型化数组的构造函数，可以接受另一个视图实例作为参数。
let typedArray2 = new Int8Array(new Uint8Array(4));

// 构造函数的参数也可以是一个普通数组，然后直接生成TypedArray实例。
let typedArray3 = new Uint8Array([1, 2, 3, 4]);

```

TypedArray数组也可以转换回普通数组

```JavaScript

var normalArray = Array.prototype.slice.call(typedArray);
```


- **TypedArray 的其它方法与属性**

> `TypedArray.prototype.buffer` 返回整段内存区域对应的`ArrayBuffer对象。该属性为只读属性
> `TypedArray.prototype.byteLength` byteLength属性返回`TypedArray`数组占据的内存长度，单位为字节(只读)
> `ypedArray.prototype.byteOffset` byteOffset属性返回`TypedArray`数组从底层`ArrayBuffer`对象的哪个字节开始(只读)
> `TypedArray.prototype.length`  length属性表示`TypedArray`数组含有多少个成员。注意将`byteLength`属性和length属性区分，前者是字节长度，后者是成员长度。 
> `TypedArray.prototype.set()` TypedArray数组的set方法用于复制数组（正常数组或TypedArray数组），也就是将一段内容完全复制到另一段内存。
> `TypedArray.prototype.subarray(start,end)` subarray方法是对于`TypedArray`数组的一部分，再建立一个新的视图。   
> `TypedArray.prototype.slice()`  TypeArray实例的`slice`方法，可以返回一个指定位置的新的`TypedArray`实例。
> `TypedArray.of()` ypedArray数组的所有构造函数，都有一个静态方法of，用于将参数转为一个`TypedArray`实例。
> `TypedArray.from()` 静态方法from接受一个可遍历的数据结构（比如数组）作为参数，返回一个基于这个结构的TypedArray实例。   
  


### 三、 `DataView对象`

如果一段数据包括多种类型（比如服务器传来的HTTP数据），这时除了建立`ArrayBuffer`对象的复合视图以外，还可以通过`DataView`视图进行操作。

`DataView`视图提供更多操作选项，而且支持设定字节序。本来，在设计目的上，`ArrayBuffer`对`象的各种`TypedArray`视图，是用来向网卡、声卡之类的本机设备传送数据，所以使用本机的字节序就可以了；而`DataView`视图的设计目的，是用来处理网络设备传来的数据，所以大端字节序或小端字节序是可以自行设定的。

`DataView`视图本身也是构造函数，接受一个`ArrayBuffer`对象作为参数，生成视图。

**1. 使用方法**

```JavaScript

let buffer = new ArrayBuffer(32)
let dv = new  DataView(buffer)
```

**2.DataView实例提供8个方法读取内存。**

> getInt8：读取1个字节，返回一个8位整数。
> getUint8：读取1个字节，返回一个无符号的8位整数。
> getInt16：读取2个字节，返回一个16位整数。
> getUint16：读取2个字节，返回一个无符号的16位整数。
> getInt32：读取4个字节，返回一个32位整数。
> getUint32：读取4个字节，返回一个无符号的32位整数。
> getFloat32：读取4个字节，返回一个32位浮点数。
> getFloat64：读取8个字节，返回一个64位浮点数。

这一系列get方法的参数都是一个字节序号（不能是负数，否则会报错），表示从哪个字节开始读取。

```JavaScript

let buffer = new ArrayBuffer(32)
let dv = new  DataView(buffer)

// 从第1个字节读取一个8位无符号整数
var v1 = dv.getUint8(0);

// 从第2个字节读取一个16位无符号整数
var v2 = dv.getUint16(1);

// 从第4个字节读取一个16位无符号整数
var v3 = dv.getUint16(3);
```

上面代码读取了ArrayBuffer对象的前5个字节，其中有一个8位整数和两个十六位整数。

如果一次读取两个或两个以上字节，就必须明确数据的存储方式，到底是小端字节序还是大端字节序。默认情况下，DataView的get方法使用大端字节序解读数据，如果需要使用小端字节序解读，必须在get方法的第二个参数指定true。


```JavaScript

// 小端字节序
var v1 = dv.getUint16(1, true);

// 大端字节序
var v2 = dv.getUint16(3, false);

// 大端字节序 默认
var v3 = dv.getUint16(3);
```

**2.DataView视图提供8个方法写入内存。**

> setInt8：写入1个字节的8位整数。
> setUint8：写入1个字节的8位无符号整数。
> setInt16：写入2个字节的16位整数。
> setUint16：写入2个字节的16位无符号整数。
> setInt32：写入4个字节的32位整数。
> setUint32：写入4个字节的32位无符号整数。
> setFloat32：写入4个字节的32位浮点数。
> setFloat64：写入8个字节的64位浮点数。

这一系列set方法，接受两个参数，第一个参数是字节序号，表示从哪个字节开始写入，第二个参数为写入的数据。对于那些写入两个或两个以上字节的方法，需要指定第三个参数，false或者undefined表示使用大端字节序写入，true表示使用小端字节序写入。



```JavaScript

// 在第1个字节，以大端字节序写入值为25的32位整数
dv.setInt32(0, 25, false);

// 在第5个字节，以大端字节序写入值为25的32位整数
dv.setInt32(4, 25);

// 在第9个字节，以小端字节序写入值为2.5的32位浮点数
dv.setFloat32(8, 2.5, true);
```
