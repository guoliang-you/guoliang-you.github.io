---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='-about-me'></span>

# About Me

I am currently pursuing a PhD at the School of Computer Science and Technology, University of Science and Technology of China ([USTC](https://en.ustc.edu.cn/)), under the supervision of Prof. [Yanyong Zhang](http://staff.ustc.edu.cn/~yanyongz/), IEEE Fellow. I received my B.E. degree from Anhui University of Science and Technology (AUST).

My research interests broadly encompass End-to-End autonomous driving, multi-sensor fusion perception, reinforcement learning, and Embodied AI.
Recently, my work has focused on developing learning-based end-to-end driving systems, leveraging prompt-based techniques to accelerate model transfer across tasks. I have also been working on designing lane-level perception and planning solutions using purely vision-based approaches through Transformer architectures, which significantly enhance system efficiency. Additionally, I explore sparse multi-sensor fusion, particularly integrating LiDAR and camera data, to improve both perception accuracy and planning efficiency, thus optimizing the overall performance of autonomous systems. Furthermore, we are also exploring Embodied AI driven by large-scale foundation models, aiming to advance intelligent autonomous systems.
<!-- My research interests broadly encompass End-to-End autonomous driving, multi-sensor fusion perception, reinforcement learning, and Embodied AI.  -->

 <!-- <a href='https://scholar.google.com/citations?user=WMkMTb4AAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=引用"></a>。 -->

<!-- Summary:
- End-to-End Autonomous Driving
- Multi-sensor Fusion Perception
- Reinforcement Learning
- Embodied AI -->

<span class='anchor' id='-Recent news'></span>

# Recent News
+ 2024.12.07: Our paper <a href="#-racformer">**RaCFormer**</a> has been posted on ArXiv (arXiv:2412.12725)！ 
+ 2024.12.02: Our paper <a href="#-php">**PHP**</a> is accepted by RA-L！
+ 2024.09.29: Our paper <a href="#-cellmap">**CELLmap**</a> has been posted on ArXiv (arXiv:2409.19597)！
+ 2024.09.21: Our paper <a href="#-lfp">**LFP**</a> has been posted on ArXiv (arXiv:2409.14170)！
+ 2024.08.14: Our paper <a href="#-edgecalib">**EdgeCalib**</a> is accepted by RA-L！
+ 2024.07.16: Our paper <a href="#-rayformer">**RayFormer**</a> is accepted by ACMMM 2024！
+ 2024.05.09: Our paper <a href="#-terra">**TERRA**</a> has been posted on ArXiv (arXiv:2405.05589)！
+ 2023.03.13: Our paper <a href="#-p3o">**$P^3O$**</a> is accepted by ICME 2023！



<span class='anchor' id='-publications'></span>

# Publications

<span class='anchor' id='-racformer'></span>
<div class='paper-box'><div class='paper-box-image'><div><div class="arxiv">arXiv</div><img src='images/paper/racformer.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- RaCFormer: Towards High-Quality 3D Object Detection via Query-based Radar-Camera Fusion
- Xiaomeng Chu, Jiajun Deng, `Guoliang You`, Yifan Duan, Houqiang Li, Yanyong Zhang
- Under Review

   <a href="https://arxiv.org/abs/2412.12725" style="display: inline-block; background-color: #ffffff; border-radius: 10px; padding: 3px 6px; text-decoration: none; color: black;border: 2px solid #222222;">
    arxiv
</a>
<a href="/file/racformer.txt" style="display: inline-block; background-color: #ffffff; border-radius: 10px; padding: 3px 6px; text-decoration: none; color: black;border: 2px solid #222222;">
    BibTeX
</a>
</div>
</div>

<span class='anchor' id='-php'></span>
<div class='paper-box'><div class='paper-box-image'><div><div class="journal">RA-L</div><img src='images/paper/php.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- Perception Helps Planning: Facilitating Multi-Stage Lane-Level Integration via Double-Edge Structures
- `Guoliang You`, Xiaomeng Chu, Yifan Duan, Wenyu Zhang, Xingchen Li, Sha Zhang, Yao Li,Jianmin Ji, Yanyong Zhang
- IEEE Robotics and Automation Letters (RA-L)

   <a href="https://arxiv.org/abs/2407.11644" style="display: inline-block; background-color: #ffffff; border-radius: 10px; padding: 3px 6px; text-decoration: none; color: black;border: 2px solid #222222;">
    arxiv
</a>
<a href="/file/php.txt" style="display: inline-block; background-color: #ffffff; border-radius: 10px; padding: 3px 6px; text-decoration: none; color: black;border: 2px solid #222222;">
    BibTeX
</a>
</div>
</div>

<span class='anchor' id='-cellmap'></span>
<div class='paper-box'><div class='paper-box-image'><div><div class="arxiv">arXiv</div><img src='images/paper/cellmap.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- CELLmap: Enhancing LiDAR SLAM through Elastic and Lightweight Spherical Map Representation
- Yifan Duan, Xinran Zhang, Yao Li, `Guoliang You`, Xiaomeng Chu, Jianmin Ji, Yanyong Zhang
- Under Review

   <a href="https://arxiv.org/abs/2409.19597" style="display: inline-block; background-color: #ffffff; border-radius: 10px; padding: 3px 6px; text-decoration: none; color: black;border: 2px solid #222222;">
    arxiv
</a>
<a href="/file/cellmap.txt" style="display: inline-block; background-color: #ffffff; border-radius: 10px; padding: 3px 6px; text-decoration: none; color: black;border: 2px solid #222222;">
    BibTeX
</a>
</div>
</div>

<span class='anchor' id='-lfp'></span>
<div class='paper-box'><div class='paper-box-image'><div><div class="arxiv">arXiv</div><img src='images/paper/lfp.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- LFP: Efficient and Accurate End-to-End Lane-Level Planning via Camera-LiDAR Fusion
- `Guoliang You`, Xiaomeng Chu, Yifan Duan, Xingchen Li, Sha Zhang, Jianmin Ji, Yanyong Zhang
- Under Review

   <a href="https://arxiv.org/abs/2409.14170" style="display: inline-block; background-color: #ffffff; border-radius: 10px; padding: 3px 6px; text-decoration: none; color: black;border: 2px solid #222222;">
    arxiv
</a>
<a href="/file/lfp.txt" style="display: inline-block; background-color: #ffffff; border-radius: 10px; padding: 3px 6px; text-decoration: none; color: black;border: 2px solid #222222;">
    BibTeX
</a>
</div>
</div>

<span class='anchor' id='-edgecalib'></span>
<div class='paper-box'><div class='paper-box-image'><div><div class="journal">RA-L</div><img src='images/paper/edgecalib.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- EdgeCalib: Multi-Frame Weighted Edge Features for Automatic Targetless LiDAR-Camera Calibration
- Xingchen Li, Yifan Duan, Beibei Wang, Haojie Ren, `Guoliang You`, Yu Sheng, Jianmin Ji, Yanyong Zhang
- IEEE Robotics and Automation Letters (RA-L)

   <a href="https://arxiv.org/abs/2310.16629" style="display: inline-block; background-color: #ffffff; border-radius: 10px; padding: 3px 6px; text-decoration: none; color: black;border: 2px solid #222222;">
    arxiv
</a>
<a href="/file/edgecalib.txt" style="display: inline-block; background-color: #ffffff; border-radius: 10px; padding: 3px 6px; text-decoration: none; color: black;border: 2px solid #222222;">
    BibTeX
</a>
</div>
</div>


<span class='anchor' id='-rayformer'></span>
<div class='paper-box'><div class='paper-box-image'><div><div class="conference">ACMMM</div><img src='images/paper/rayformer.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- RayFormer: Improving Query-Based Multi-Camera 3D Object Detection via Ray-Centric Strategies
- Xiaomeng Chu, Jiajun Deng, `Guoliang You`, Yifan Duan, Yao Li, Yanyong Zhang
- ACM MULTIMEDIA 2024 (ACMMM)

   <a href="https://arxiv.org/abs/2407.14923" style="display: inline-block; background-color: #ffffff; border-radius: 10px; padding: 3px 6px; text-decoration: none; color: black;border: 2px solid #222222;">
    arxiv
</a>
<a href="/file/rayformer.txt" style="display: inline-block; background-color: #ffffff; border-radius: 10px; padding: 3px 6px; text-decoration: none; color: black;border: 2px solid #222222;">
    BibTeX
</a>
</div>
</div>

<span class='anchor' id='-terra'></span>
<div class='paper-box'><div class='paper-box-image'><div><div class="arxiv">arXiv</div><img src='images/paper/terra.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- Rotation Initialization and Stepwise Refinement for Universal LiDAR Calibration
- Yifan Duan, Xinran Zhang, `Guoliang You`, Yilong Wu, Xingchen Li, Yao Li, Xiaomeng Chu, Jie Peng, Yu Zhang, Jianmin Ji, Yanyong Zhang
- Under Review

   <a href="https://arxiv.org/abs/2405.05589" style="display: inline-block; background-color: #ffffff; border-radius: 10px; padding: 3px 6px; text-decoration: none; color: black;border: 2px solid #222222;">
    arxiv
</a>
<a href="/file/terra.txt" style="display: inline-block; background-color: #ffffff; border-radius: 10px; padding: 3px 6px; text-decoration: none; color: black;border: 2px solid #222222;">
    BibTeX
</a>
</div>
</div>

<span class='anchor' id='-p3o'></span>
<div class='paper-box'><div class='paper-box-image'><div><div class="conference">ICME 2023</div><img src='images/paper/p3o.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- $P^3O$: Transferring Visual Representations for Reinforcement Learning via Prompting
-	`Guoliang You`, Xiaomeng Chu, Yifan Duan, Jie Peng, Jianmin Ji, Yu Zhang, Yanyong Zhang
- 2023 IEEE International Conference on Multimedia and Expo (ICME)
 
   <a href="https://arxiv.org/abs/2303.12371" style="display: inline-block; background-color: #ffffff; border-radius: 10px; padding: 3px 6px; text-decoration: none; color: black;border: 2px solid #222222;">
    arxiv
</a>
<a href="/file/p3o.txt" style="display: inline-block; background-color: #ffffff; border-radius: 10px; padding: 3px 6px; text-decoration: none; color: black;border: 2px solid #222222;">
    BibTeX
</a>
</div>
</div>


<span class='anchor' id='-rl_e2e'></span>
<div class='paper-box'><div class='paper-box-image'><div><div class="arxiv">arXiv</div><img src='images/paper/rl_e2e_car.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- Collision Avoidance for An Ackermann-Steering Vehicle via Map-Based Deep Reinforcement Learning
- `Guoliang You`, Yujie Yang, Tingting Jiang, Xu Li, Xingchen Li, Jianmin Ji, Yanyong Zhang

   <a href="images/paper/rl_e2e_car.pdf" style="display: inline-block; background-color: #ffffff; border-radius: 10px; padding: 3px 6px; text-decoration: none; color: black;border: 2px solid #222222;">
    PDF
</a>
</div>
</div>

<!--  # TODO About me/ News/ Pub/ 专利/ Projects 2030*2 加上一个先进技术研究院的大巴车以及仿真等/ Biography/ Internship/ Talk/ >



<!-- <span class='anchor' id='-ryjx'></span>

# 🏅 荣誉奖项
- *2015.11* 获得 第十四届“挑战杯”全国大学生课外学术科技作品竞赛 `一等奖`  
- *2015.06* 获得 第十三届“挑战杯”四川大学生课外学术科技作品竞赛 `一等奖` [[新闻]](https://www.sc.gov.cn/10462/10778/10876/2015/7/1/10341562.shtml)  
- *2014.12* 获得 第四届全国大学生工程训练综合能力竞赛（四川赛区） `一等奖`  

<span class='anchor' id='-xshy'></span>

# 🏛️ 学术会议
- *2021.10*, 全国电磁无损检测技术研讨会 暨 中国机械工程学会无损检测分会电磁专业技术大会第十一届第四次全体会议, 陕西西安, 受邀报告
- *2019.09*, 第十九届国际应用电磁学与力学会议 (ISEM 2019), 江苏南京, 海报
- *2017.10*, 第六届中国国际管道会议 (CIPC 2017), 河北廊坊

<span class='anchor' id='-gzsx'></span>

# 💻 工作实习
- *2018.05 - 2020.02*, 重庆长江轴承股份有限公司, 重庆
- *2020.11.25 - 2020.12.02*, 湖北新冶钢有限公司, 湖北黄石
- *2017.6 - 2021.1*, 制造装备数字化国家工程研究中心, 湖北武汉 -->


<div style="display: flex; justify-content: center; align-items: center; height: 200px; margin: 0; padding: 0;">
    <div style="flex: 0 1 200px; margin-right: 20px;"> <!-- Adjusted flex-grow to 0 and flex-basis to 200px -->
        <img style="width: 100%; height: auto;" src="/images/ustcxhjpg/ustcblue.jpg" alt="USTC">
    </div>
    <div style="flex: 0 1 300px;"> <!-- Adjusted flex-grow to 0 and flex-basis to 300px -->
        <script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/map_v2.js?d=TA46OeVuyoWMK-nOtiE2rWVsaZNgKHWgt_1Ye6i1wZs&cl=ffffff&w=a"></script>
    </div>
</div>