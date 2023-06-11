import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as e,a as o}from"./app-0ce632a0.js";const i="/blog-vue/assets/images/信任链.png",c="/blog-vue/assets/images/可信根.png",n={},s=o('<p>一、“可信”有比较多的定义</p><p>（1）TCG用实体行为的预期性来定义 “可信” ：如果一个实体的行为是预期的方式符合预期的目标，则该实体是可信的。</p><p>（2）ISO/IEC 15408标准定义“可信”为：参与计算的组件、操作或过程在任意条件下是可预测的，并能够抵御病毒和物理干扰。</p><p>（3）IEEE CS可信计算技术委员会（IEEE ComputerSocietyTechnical Committeeon Dependable Computing）所谓 “可信” 是指计算机系统所提供的服务是可以论证其是可信赖的，即不仅计算机系统所提供的服务是可信赖的，而且这种可信赖还是可论证的。这种可信依赖更多地指系统的可靠性、可用性和可维护性。</p><p>（4）我国著名的信息安全专家沈昌祥院士对上述定义进行了综合和拓展，他认为“可信”要做到一个实体在实现给定目标对其行为总是同预期的结果一样，强调行为结果的可预测性和可控制性。</p><p>（5）张焕国教授认为可信计算系统是能够提供系统的可靠性、可用性、安全性（信息的安全性和行为的安全性）的计算机系统，通俗的称为：可信≈可靠+安全。</p><p>（6）另外，还有其他一些解释：可信是指计算机系统提供的服务可以被证明是可信赖的；如果一个系统按照预期的设计和策略运行，那么这个系统是可信的；当第二个实体符合第一个实体的期望行为时，第一个实体可假设第二个实体是可信的。</p><p>二、为什么这么多定义？</p><p>（1）因为他们的研究背景不同：可信赖计算（dependable computing）、安全计算（security computing）和信任计算（trusted computing）。他们统称为可信计算。</p><p>（2）本文主要研究沈昌祥院士的trusted computing，信任计算</p><p>（3）信任计算源自早起的安全硬件设计，基本思想是：假定真实性可以用于计算机系统中首先建立一个信任根，再建立一条信任链，一级度量认证一级，一级信任一级，把信任关系扩大到整个计算机系统，从而确保计算机系统可信。</p><p>三、信任的属性</p><p>（1）信任是一种二元关系，它可以是一对一、一对多（个体对群体）、多对一（群体对个体）或多对多（群体对群体）的。</p><p>（2）信任具有二重性，既有主观性又有客观性。</p><p>（3）信任不一定具有对称性，即A信任B，则不一定就有B信任A。</p><p>（4）信任可度量，也就是说信任有程度之分，可以划分等级。</p><p>（5）信任可传递，但不绝对，而且在传递过程中可能有损失，传递的路径越长，损失的可能性就越大。</p><p>（6）信任具有动态性，即信任与环境(上下文)和时间因素相关。</p><p>四、信任链</p><p>​ <img src="'+i+'" alt="1569663160081" loading="lazy"></p><p>五、可信根</p><figure><img src="'+c+'" alt="1569664589958" tabindex="0" loading="lazy"><figcaption>1569664589958</figcaption></figure><p>图中的链也是信任链</p><p>六、待研究领域</p><p>（1）系统结构：包括硬件结构、TPM的物理安全、TPM的嵌入式软件、软件结构</p><p>（2）密码技术：公钥密码、传统密码、哈希函数、随机数产生</p><p>（3）信任链技术：包括信任的传递</p><p>（4）信任的度量：动态度量、存储和报告机制、可信测试</p><p>（5）可信软件：包括可信操作系统、可信编译、可信数据库、可信应用软件</p><p>（6）可信网络：可信网络结构、可信网络协议、可信网络设备</p><p>七、理论基础</p><p>（1）可信模型：数学模型、行为学模型</p><p>（2）可信度量理论：软件的动态可信性度量理论与模型</p><p>（3）信任链理论：信任的传递理论、信任传递的损失度量</p><p>（4）软件理论：可信性度量理论、可信软件工程、软件行为学</p>',35),a=[s];function _(r,m){return t(),e("div",null,a)}const u=p(n,[["render",_],["__file","可信与可信计算.html.vue"]]);export{u as default};
