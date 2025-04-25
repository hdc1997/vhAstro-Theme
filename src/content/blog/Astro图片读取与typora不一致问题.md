---
title: "Astro图片读取与typora不一致问题"
categories: 踩坑记录
tags: ['Astro','图片']
id: ""
date: 2025-04-16 15:40:10
cover: ""
---

## Typora设置



1. 在Typora偏好设置里->选择图像，设置路径为Astro静态文件目录`public`的images下面。这样的好处就是Typora读取图片路径可以显示；设置优先使用绝对路径，这样服务器上才能读取静态资源的图片。

![image-20250416172414010](../../../public/images/Astro图片读取与typora不一致问题/image-20250416172414010.png)



