---
meta:
  - name: keywords
    content: webxiaoma 小马学习 python
  - name: description
    content: 本章为小马学习专栏
---

# 包管理工具

## 常见包管理工具

- `pip`：是Python官方推荐的包管理工具，用于安装、升级、卸载Python包，支持从PyPI（Python Package Index）等多个源安装。
- `Anaconda`：是一个面向数据科学领域的Python发行版，自带了很多数据科学常用的库，包括NumPy、Pandas、Matplotlib等，同时也包含了conda包管理工具。
- `poetry`：是Python比较新的包管理工具，旨在改进Python包管理的生态系统，提供了依赖管理、构建工具等功能。
- `conda`：是Anaconda包管理工具，支持从Anaconda官方源和conda-forge等多个源安装Python包，并且可以管理非Python的依赖关系。
- `pdm`: 是一个新的 Python 的包管理器，功能强大、易用性高、扩展性好的 Python 包管理工具，可以提高开发效率和环境稳定性



## pdm工具

`PDM` 是一个新的 Python 的包管理器，`pdm`相较于`pip` 和 `conda` 具有一下优势

1. 快速、高效：pdm 使用 Rust 编写的快速依赖解析器，可以显著提高包安装速度。同时，它也提供了更好的缓存机制和并发下载功能。
2. 锁定文件：与其他包管理工具不同，pdm 通过使用锁定文件来记录包的精确版本，从而确保环境的可复现性和稳定性，防止因为版本变动导致环境出现问题。
3. 智能解析器：pdm 的智能依赖解析器可以更好地处理版本冲突等问题，并且支持自定义依赖查找源，灵活性更高。
4. 易用性：pdm 提供了一个直观易用的命令行界面，支持多种操作，如包安装、升级、移除、依赖分析等。同时，它还提供了完善的文档和示例代码，让用户更容易上手。
5. 可扩展性：pdm 基于插件机制实现了很多扩展功能，如支持不同的虚拟环境管理器、构建工具、测试框架等。这使得用户可以根据自己的需要灵活选择和配置相关功能。