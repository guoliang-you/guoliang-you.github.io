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

# ✨ About Me

I am currently pursuing a PhD at the School of Computer Science and Technology, University of Science and Technology of China ([USTC](https://en.ustc.edu.cn/)), under the supervision of Prof. [Yanyong Zhang](http://staff.ustc.edu.cn/~yanyongz/), IEEE Fellow, and Assoc. Prof. [Jianmin Ji](http://staff.ustc.edu.cn/~jianmin/cv.html), in the Lab for Intelligent Networking and Knowledge Engineering ([LINKE](https://linke.ustc.edu.cn/)). I received my B.E. degree from Anhui University of Science and Technology ([AUST](https://www.aust.edu.cn/)).

My research interests broadly encompass End-to-End autonomous driving, multi-sensor fusion perception, reinforcement learning, and Embodied AI.
Recently, my work has focused on developing learning-based end-to-end driving systems, leveraging prompt-based techniques to accelerate model transfer across tasks. I have also been working on designing lane-level perception and planning solutions using purely vision-based approaches through Transformer architectures, which significantly enhance system efficiency. Additionally, I explore sparse multi-sensor fusion, particularly integrating LiDAR and camera data, to improve both perception accuracy and planning efficiency, thus optimizing the overall performance of autonomous systems. 
Furthermore, I am exploring the application of Vision-Language Models (VLMs) in intelligent systems, particularly in autonomous driving and robot manipulation, as part of our broader efforts to advance Embodied AI driven by large-scale foundation models.

<i class="fas fa-download  pr-1 fa-fw"></i> Download my <a href="file/CV_Guoliang.pdf">**CV**</a>.
<!-- My research interests broadly encompass End-to-End autonomous driving, multi-sensor fusion perception, reinforcement learning, and Embodied AI.  -->

 <!-- <a href='https://scholar.google.com/citations?user=WMkMTb4AAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=引用"></a>。 -->

<!-- Summary:
- End-to-End Autonomous Driving
- Multi-sensor Fusion Perception
- Reinforcement Learning
- Embodied AI -->

<span class='anchor' id='-news'></span>

# 🔥 Recent News
+ 2025.07.06: Our paper <a href="#-CalibWorkflow">**CalibWorkflow**</a> is accepted by ACMMM 2025 🎉!
+ 2025.06.06: Our paper <a href="#-VLMPlanner">**VLMPlanner**</a> is accepted by ACMMM 2025 🎉!
+ 2025.06.26: Our paper <a href="#-GraspCoT">**GraspCoT**</a> is accepted by ICCV 2025 🎉!
+ 2025.03.20: Our paper <a href="#-GraspCoT">**GraspCoT**</a> has been posted on ArXiv (arXiv:2503.16013)!
+ 2025.02.27: Our paper <a href="#-racformer">**RaCFormer**</a> is accepted by CVPR 2025🎉!
+ 2025.01.28: Our paper <a href="#-cellmap">**CELLmap**</a> is accepted by ICRA 2025🎉!
+ 2025.01.28: Our paper <a href="#-edgecalib">**EdgeCalib**</a> is accepted by ICRA 2025🎉!
+ 2024.12.07: Our paper <a href="#-racformer">**RaCFormer**</a> has been posted on ArXiv (arXiv:2412.12725)!
+ 2024.12.02: Our paper <a href="#-php">**PHP**</a> is accepted by RA-L 🎉!
+ 2024.09.29: Our paper <a href="#-cellmap">**CELLmap**</a> has been posted on ArXiv (arXiv:2409.19597)!
+ 2024.09.21: Our paper <a href="#-lfp">**LFP**</a> has been posted on ArXiv (arXiv:2409.14170)!
+ 2024.08.14: Our paper <a href="#-edgecalib">**EdgeCalib**</a> is accepted by RA-L 🎉!
+ 2024.07.16: Our paper <a href="#-rayformer">**RayFormer**</a> is accepted by ACMMM 2024 🎉!
+ 2024.05.09: Our paper <a href="#-terra">**TERRA**</a> has been posted on ArXiv (arXiv:2405.05589)!
+ 2023.03.13: Our paper <a href="#-p3o">**$P^3O$**</a> is accepted by ICME 2023 🎉!



<span class='anchor' id='-publications'></span>

# 📝 Publications
\* Corresponding author.

<span class='anchor' id='-CalibWorkflow'></span>
<div class='paper-box'><div class='paper-box-image'><div><div class="conference">ACMMM</div><img src='images/paper/CalibWorkflow.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- CalibWorkflow: A General MLLM-Guided Workflow for Centimeter-Level Cross-Sensor Calibration
- Xingchen Li, Wuyang Zhang \*, `Guoliang You`, Xiaomeng Chu, Wenhao Yu, Yifan Duan, Yuxuan Xiao, Yanyong Zhang\*
- ACM MULTIMEDIA (ACMMM) 2025

   <a href="https://arxiv.org/abs/xxxx.xxxx" style="display: inline-block; background-color: #ffffff; border-radius: 10px; padding: 3px 6px; text-decoration: none; color: black;border: 2px solid #222222;">
    arxiv
</a>
<a href="/file/CalibWorkflow.txt" style="display: inline-block; background-color: #ffffff; border-radius: 10px; padding: 3px 6px; text-decoration: none; color: black;border: 2px solid #222222;">
    BibTeX
</a>
</div>
</div>

<span class='anchor' id='-VLMPlanner'></span>
<div class='paper-box'><div class='paper-box-image'><div><div class="conference">ACMMM</div><img src='images/paper/VLMPlanner.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- VLMPlanner: Integrating Visual Language Models with Motion Planning
- Zhipeng Tang, Sha Zhang, Jiajun Deng \*, Chenjie Wang, `Guoliang You`, Yuting Huang, Xinrui Lin, Yanyong Zhang\*
- ACM MULTIMEDIA (ACMMM) 2025

   <a href="https://arxiv.org/abs/xxxx.xxxx" style="display: inline-block; background-color: #ffffff; border-radius: 10px; padding: 3px 6px; text-decoration: none; color: black;border: 2px solid #222222;">
    arxiv
</a>
<a href="/file/VLMPlanner.txt" style="display: inline-block; background-color: #ffffff; border-radius: 10px; padding: 3px 6px; text-decoration: none; color: black;border: 2px solid #222222;">
    BibTeX
</a>
</div>
</div>

<span class='anchor' id='-GraspCoT'></span>
<div class='paper-box'><div class='paper-box-image'><div><div class="conference">ICCV</div><img src='images/paper/GraspCoT.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- GraspCoT: Integrating Physical Property Reasoning for 6-DoF Grasping under Flexible Language Instruction
- Xiaomeng Chu, Jiajun Deng \*, `Guoliang You`, Wei Liu, Xingchen Li, Jianmin Ji, Yanyong Zhang\*
- The International Conference on Computer Vision (ICCV) 2025

   <a href="https://arxiv.org/abs/2503.16013" style="display: inline-block; background-color: #ffffff; border-radius: 10px; padding: 3px 6px; text-decoration: none; color: black;border: 2px solid #222222;">
    arxiv
</a>
<a href="/file/GraspCoT.txt" style="display: inline-block; background-color: #ffffff; border-radius: 10px; padding: 3px 6px; text-decoration: none; color: black;border: 2px solid #222222;">
    BibTeX
</a>
</div>
</div>

<span class='anchor' id='-lfp'></span>
<div class='paper-box'><div class='paper-box-image'><div><div class="arxiv">arXiv</div><img src='images/paper/lfp.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- LFP: Efficient and Accurate End-to-End Lane-Level Planning via Camera-LiDAR Fusion
- `Guoliang You`, Xiaomeng Chu, Yifan Duan, Xingchen Li, Sha Zhang, Jianmin Ji \*, Yanyong Zhang \*
- Under Review

   <a href="https://arxiv.org/abs/2409.14170" style="display: inline-block; background-color: #ffffff; border-radius: 10px; padding: 3px 6px; text-decoration: none; color: black;border: 2px solid #222222;">
    arxiv
</a>
<a href="/file/lfp.txt" style="display: inline-block; background-color: #ffffff; border-radius: 10px; padding: 3px 6px; text-decoration: none; color: black;border: 2px solid #222222;">
    BibTeX
</a>
</div>
</div>

<span class='anchor' id='-racformer'></span>
<div class='paper-box'><div class='paper-box-image'><div><div class="conference">CVPR</div><img src='images/paper/racformer.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- RaCFormer: Towards High-Quality 3D Object Detection via Query-based Radar-Camera Fusion
- Xiaomeng Chu, Jiajun Deng \*, `Guoliang You`, Yifan Duan, Houqiang Li, Yanyong Zhang \*
- IEEE / CVF Computer Vision and Pattern Recognition Conference (CVPR) 2025

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
- `Guoliang You`, Xiaomeng Chu, Yifan Duan, Wenyu Zhang, Xingchen Li, Sha Zhang, Yao Li,Jianmin Ji \*, Yanyong Zhang \*
- IEEE Robotics and Automation Letters (RA-L) 2024

   <a href="https://arxiv.org/abs/2407.11644" style="display: inline-block; background-color: #ffffff; border-radius: 10px; padding: 3px 6px; text-decoration: none; color: black;border: 2px solid #222222;">
    arxiv
</a>
<a href="/file/php.txt" style="display: inline-block; background-color: #ffffff; border-radius: 10px; padding: 3px 6px; text-decoration: none; color: black;border: 2px solid #222222;">
    BibTeX
</a>
</div>
</div>

<span class='anchor' id='-cellmap'></span>
<div class='paper-box'><div class='paper-box-image'><div><div class="conference">ICRA</div><img src='images/paper/cellmap.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- CELLmap: Enhancing LiDAR SLAM through Elastic and Lightweight Spherical Map Representation
- Yifan Duan, Xinran Zhang, Yao Li, `Guoliang You`, Xiaomeng Chu, Jianmin Ji, Yanyong Zhang \*
- IEEE International Conference on Robotics and Automation (ICRA)  2025

   <a href="https://arxiv.org/abs/2409.19597" style="display: inline-block; background-color: #ffffff; border-radius: 10px; padding: 3px 6px; text-decoration: none; color: black;border: 2px solid #222222;">
    arxiv
</a>
<a href="/file/cellmap.txt" style="display: inline-block; background-color: #ffffff; border-radius: 10px; padding: 3px 6px; text-decoration: none; color: black;border: 2px solid #222222;">
    BibTeX
</a>
</div>
</div>


<span class='anchor' id='-edgecalib'></span>
<div class='paper-box'><div class='paper-box-image'><div><div class="journal">RA-L</div><img src='images/paper/edgecalib.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- EdgeCalib: Multi-Frame Weighted Edge Features for Automatic Targetless LiDAR-Camera Calibration
- Xingchen Li, Yifan Duan, Beibei Wang, Haojie Ren, `Guoliang You`, Yu Sheng, Jianmin Ji, Yanyong Zhang \*
- IEEE Robotics and Automation Letters (RA-L) 2024

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
- Xiaomeng Chu, Jiajun Deng \*, `Guoliang You`, Yifan Duan, Yao Li, Yanyong Zhang \*
- ACM MULTIMEDIA (ACMMM) 2024

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
- Yifan Duan, Xinran Zhang, `Guoliang You`, Yilong Wu, Xingchen Li, Yao Li, Xiaomeng Chu, Jie Peng, Yu Zhang, Jianmin Ji, Yanyong Zhang \*
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
-	`Guoliang You`, Xiaomeng Chu, Yifan Duan, Jie Peng, Jianmin Ji \*, Yu Zhang, Yanyong Zhang \*
- IEEE International Conference on Multimedia and Expo (ICME) 2023
 
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
- `Guoliang You`, Yujie Yang, Tingting Jiang, Xu Li, Xingchen Li, Jianmin Ji \*, Yanyong Zhang

   <a href="images/paper/rl_e2e_car.pdf" style="display: inline-block; background-color: #ffffff; border-radius: 10px; padding: 3px 6px; text-decoration: none; color: black;border: 2px solid #222222;">
    PDF
</a>
</div>
</div>

<span class='anchor' id='-grants'></span>

# 🧑‍🎨 Participated Grants
- National Key Research and Development Program of China under Grants [No.2018AAA0100500](https://meta.ustc.edu.cn)
- National Key Research and Development Program of China under Grants No.2023YFB4704500
- National Natural Science Foundation of China under Grants No.62332016
- Guangdong Province Research and Development Program under Grants No.2020B0909050001
- Hunan Province Major Scientific and Technological Program under Grants No.2024QK2001

<span class='anchor' id='-internships'></span>

# 💻 Internships
<div class='paper-box'><div class='paper-box-image'><div><div class=""></div>
<img src='images/internships/hefei_ai.png' alt="sym" width="100%">
<img src='images/internships/hefei_ai_auto.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

- Artificial Intelligence Research Institute, Hefei Comprehensive National Science Center
- Research Intern: Multimodal End-to-End AI Algorithms
- Feb 2022 - Jan 2023  Hefei, China
- I contributed to a lifelong learning-based autonomous driving project, focusing on developing an end-to-end perception and planning system using deep learning. The system integrates multi-sensor data (LiDAR, cameras) and utilizes reinforcement learning and imitation learning to optimize vehicle decision-making and planning. My role included system design, model training, optimization, and deployment in an autonomous vehicle. The system continuously enhances its perception and planning, improving safety and efficiency.
<!-- - I participated in a project focused on lifelong learning for autonomous driving. My primary responsibilities involved developing a next-generation end-to-end perception and planning system using deep learning technologies. This system integrates multi-sensor data, including LiDAR and cameras, and employs reinforcement learning and deep neural networks to optimize vehicle decision-making and planning. I worked on system design, model training, optimization, and deployment in an autonomous shuttle vehicle. Through the application of lifelong learning techniques, the system continuously improves its perception and planning strategies, enhancing the safety and efficiency of autonomous driving. -->
</div>
</div>


<span class='anchor' id='-talks'></span>

# 💬 Talks
<div class='paper-box'><div class='paper-box-image'><div><div class=""></div>
<img src='images/talks/gosim.png' alt="sym" width="100%">
</div></div>
<div class='paper-box-text' markdown="1">

- Global Open-Source Innovation Meetup
- Demonstration and Validation of V2X Collaboration Systems in Carla Simulation
- Sept 23, 2023, 3:00 PM Shanghai, China
- I have been invited to present at GOSIM Workshop to introduce my PhD work on simulation modeling for V2X collaborative scenarios. This includes real-world data collection and the construction of simulation environments based on these data, specifically designed for large-scale V2X collaboration scenarios. These simulation environments are capable of providing data from dozens of LiDARs and cameras, while also supporting algorithm testing.
</div>
</div>

<span class='anchor' id='-awards'></span>

# 🏆 Awards
- **Sept 2024**  Awarded the PhD Academic Scholarship (Second Class) from the University of Science and Technology of China (USTC) in 2024.
- **Sept 2023**  Awarded the PhD Academic Scholarship (First Class) from the University of Science and Technology of China (USTC) in 2023.
- **Sept 2022** Awarded the PhD Academic Scholarship (Second Class) from the University of Science and Technology of China (USTC) in 2022.
- **Sept 2021** Awarded the PhD Academic Scholarship (Second Class) from the University of Science and Technology of China (USTC) in 2021. 

<span class='anchor' id='-services'></span>

# 📚 Services
- **Mar 2022** Teaching Assistant, Computer Architecture Course - University of Science and Technology of China (USTC)
- **Aug 2021** Volunteer, ACM China Turing Conference - Association for Computing Machinery (ACM)
- **Mar 2021** Teaching Assistant, Computer Architecture Course - University of Science and Technology of China (USTC)
- **Sept 2020** Teaching Assistant, Deep Reinforcement Learning Course - University of Science and Technology of China (USTC)
- **Jul 2020** Volunteer, USTC Information Intelligence Summit Forum - University of Science and Technology of China (USTC)
- **Oct 2019** Volunteer, Google TF+ Open Source Technologies and High-Performance Computing Seminar - Google



<span class='anchor' id='-funtoys'></span>

# ⛄ Fun Toys
<style>
    /* 命名空间前缀 */
    .ns-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }

    .ns-image-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
    }

    .ns-image-item {
        flex: 1 1 calc(33.33% - 20px); /* 默认每行 3 张图片 */
        max-width: calc(33.33% - 20px);
        text-align: center;
        background-color: #fff;
        padding: 10px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        overflow: hidden; /* 隐藏超出部分 */
        position: relative;
        cursor: pointer; /* 鼠标指针样式 */
    }

    .ns-image-item img {
        width: 100%;
        height: auto;
        border-radius: 8px;
    }

    /* 描述文字样式 */
    .ns-image-item p {
        margin-top: 10px;
        font-size: 14px;
        color: #333;
    }

    /* 模态框样式 */
    .ns-modal {
        display: none; /* 默认隐藏 */
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 60px;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9); /* 半透明背景 */
        justify-content: center;
        align-items: center;
    }

    /* 模态框中的图片样式 */
    .ns-modal img {
        max-width: 90%; /* 图片最大宽度为屏幕宽度的 90% */
        max-height: 90vh; /* 图片最大高度为屏幕高度的 90% */
        object-fit: contain; /* 保持图片比例，完整显示 */
        border-radius: 8px;
    }
    /* 关闭按钮样式 */
    .ns-close {
        position: absolute;
        top: 10px;
        right: 20px;
        color: #fff;
        font-size: 30px;
        cursor: pointer;
    }
    /* 响应式布局 */
    @media (max-width: 768px) {
        .ns-image-item {
            flex: 1 1 calc(33.33% - 20px); /* 中等屏幕每行 3 张 */
            max-width: calc(33.33% - 20px);
        }
    }

    @media (max-width: 480px) {
        .ns-image-item {
            flex: 1 1 calc(50% - 20px); /* 小屏幕每行 2 张 */
            max-width: calc(50% - 20px);
        }
    }

    @media (max-width: 320px) {
        .ns-image-item {
            flex: 1 1 100%; /* 超小屏幕每行 1 张 */
            max-width: 100%;
        }
    }
</style>

<div class="ns-container">
    <!-- 图片网格 -->
    <div class="ns-image-grid">
        <div class="ns-image-item" onclick="openModal('images/sonic_v1.jpg')">
            <img src="images/sonic_v1.jpg" alt="Sonic V1">
            <p>First-generation autonomous vehicle platform, personally led by me.</p>
        </div>
        <div class="ns-image-item" onclick="openModal('images/sonic_v2.jpg')">
            <img src="images/sonic_v2.jpg" alt="Sonic V2">
            <p>Second-generation autonomous vehicle platform with upgraded sensors.</p>
        </div>
        <div class="ns-image-item" onclick="openModal('images/ad_vehicle.jpg')">
            <img src="images/ad_vehicle.jpg" alt="AD Vehicle">
            <p>Autonomous platform for special Tunnel scenarios.</p>
        </div>
        <div class="ns-image-item" onclick="openModal('images/arm_single.png')">
            <img src="images/arm_single.png" alt="Arm Kinova">
            <p>Single-arm robotic platform (Kinova - Purchased).</p>
        </div>
        <div class="ns-image-item" onclick="openModal('images/arm_dual.jpg')">
            <img src="images/arm_dual.jpg" alt="Arm Galaxea">
            <p>Dual-arm robotic platform (Galaxea - Purchased).</p>
        </div>
        <div class="ns-image-item" onclick="openModal('images/drone_with_arm.jpg')">
            <img src="images/drone_with_arm.jpg" alt="Arm Drone">
            <p>Involved in developing a drone-robotic arm grasping platform.</p>
        </div>
        <!-- 可以继续添加更多图片 -->
    </div>
</div>

<!-- 模态框 -->
<div id="ns-modal" class="ns-modal">
    <span class="ns-close" onclick="closeModal()">&times;</span>
    <img id="ns-modal-img" src="" alt="放大图片">
</div>

<script>
    // 打开模态框
    function openModal(src) {
        const modal = document.getElementById('ns-modal');
        const modalImg = document.getElementById('ns-modal-img');
        const navBar = document.querySelector('.masthead'); // 获取导航栏
        const navBarHeight = navBar.offsetHeight; // 获取导航栏高度
        modal.style.top = `${navBarHeight}px`; // 设置模态框的 top 值
        modal.style.height = `calc(100% - ${navBarHeight}px)`; // 调整模态框高度
        modal.style.display = 'flex'; // 显示模态框
        modalImg.src = src; // 设置图片源
    }

    // 关闭模态框
    function closeModal() {
        const modal = document.getElementById('ns-modal');
        modal.style.display = 'none'; // 隐藏模态框
    }

    // 点击模态框外部关闭模态框
    window.onclick = function(event) {
        const modal = document.getElementById('ns-modal');
        if (event.target === modal) {
            closeModal();
        }
    };
</script>

<!-- <span class='anchor' id='-funtoy'></span> -->

<!-- 分隔线 -->
<hr style="border: 0; height: 1px; background: #ddd; margin: 20px 0;">


<div style="display: flex; justify-content: center; align-items: center; height: 200px; margin: 0; padding: 0;">
    <div style="flex: 0 1 200px; margin-right: 20px;"> <!-- Adjusted flex-grow to 0 and flex-basis to 200px -->
        <img style="width: 100%; height: auto;" src="/images/ustcxhjpg/ustcblue.jpg" alt="USTC">
    </div>
    <div style="flex: 0 1 300px;"> <!-- Adjusted flex-grow to 0 and flex-basis to 300px -->
        <script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/map_v2.js?d=TA46OeVuyoWMK-nOtiE2rWVsaZNgKHWgt_1Ye6i1wZs&cl=ffffff&w=a"></script>
    </div>
</div>