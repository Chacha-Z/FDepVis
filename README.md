该项目基于IEEE VIS2020的BioVis 挑战赛（BioVis Challenges），衍生为四川大学《信息可视化概论》课程的结业项目，分析“高自杀率家族的临床数据可视分析”

比赛官网：http://biovis.net/2020/biovisChallenges_vis/

## 作品实现
![image](https://user-images.githubusercontent.com/29750316/154603506-05d49564-cfbb-45d1-8e1f-f0d8203d89aa.png)

## 作品简介
本项目将基于高自杀率家族的家谱数据及自杀成员临床数据（如是否酗酒、是否患有精神疾病），设计并实现一个多视图融合的可视分析系统。用户可通过灵活的交互式方法探索自杀率与临床属性的关系，并研究自杀与遗传学的关系。

本项目的主要研究内容如下：

（1） 对比分析各家族中自杀案例的属性特征总体情况，并交互式探索家族内部的自杀案例。

（2）利用家族树呈现家族成员关系，同时展示家族中自杀成员的临床属性概览，探究分析自杀因素在家族树中潜在的遗传特性。

（3）探索来自同一家族的自杀案例的临床属性分布情况，对比分析不同自杀成员的临床特性。

（4）进一步探索指定自杀案例的详细状况，例如死亡方式等。

## 数据介绍
使用 IEEE VIS 2020 的 Biovis 数据挑战赛的公开数据集，由两部分数据组成：Family Attributes（家庭属性）和 Family Structure（家庭结构）。

Family Structure 包含十个高自杀率家庭的家谱数据，包含家庭所有成员及其父母的信息；如表 3-1 所示，Family Structure 的主要字段有个人识别码、家族识别码、父亲和母亲识别码、性别、是否已故、是否自杀、出生日期、死亡日期、第几代家族成员、年龄等。

Family Attributes 为犹他州人口数据库中十个高自杀率家庭中每位家庭成员的属性，包括人口统计学的属性和临床诊断信息。人口统计学信息包括性别、出生日期及死亡日期等，临床诊断的信息包含如是否自杀过及是否患有精神病等近 30 条临床症状及其出现次数。

## 分析任务
T1. 自杀案例总览

* T1.1 展示各家族中自杀案例的概览

* T1.2 对于给定的自杀案例，确定相似案例及其关系（如是否来自同一家族）

T2. 家族情况概览

* T2.1 展示家族树谱

* T2.2 突出该家族的自杀案例

T3. 临床属性分析

* T3.1 表征指定家庭中自杀案例的临床属性分布情况

* T3.2 表征一个家庭中具有指定临床属性的自杀案例

* T3.3 指定自杀案例与其直系亲属的临床属性比较分析

## 作品技术栈
* D3.js
* React
* AntDesign
* MySql
* Django


![image](https://user-images.githubusercontent.com/29750316/154603796-847ccbaa-6d79-4206-85a0-463cd7fa4528.png)

## 运行

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`
#### `npm test`
#### `npm run build`
#### `npm run eject`
