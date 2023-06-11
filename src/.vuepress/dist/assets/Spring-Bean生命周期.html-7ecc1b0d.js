import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,a as e}from"./app-0ce632a0.js";const i="/blog-vue/assets/images/clip_image002.png",t="/blog-vue/assets/images/clip_image004.png",p="/blog-vue/assets/images/SpringBean3.png",o={},r=e('<h1 id="一、spring-bean生命周期" tabindex="-1"><a class="header-anchor" href="#一、spring-bean生命周期" aria-hidden="true">#</a> 一、Spring Bean生命周期</h1><figure><img src="'+i+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>解释：</p><ul><li><p>Spring 通过我们的配置，如 @ComponentScan 定义的扫描路径去找到带有 @Component 的类，这个过程就是一个资源定位的过程。</p></li><li><p>一旦找到了资源，那么它就开始解析，并且将定义的信息保存起来。注意，此时还没有初始化 Bean ，也就没有 Bean 实例，它有的仅仅是 Bean 的定义。</p></li><li><p>然后就会把 Bean 定义发布到 Spring IoC 容器中，此时，IoC容器也只有 Bean 的定义，还是没有 Bean 的实例生成。</p><p>在默认的情况下，Spring会继续去完成Bean的实例化和依赖注入， 这样从IoC容器中就可以得到一个依赖注入完成的Bean。但是，有些Bean会在取的时候才初始化和依赖注入。如下图：</p></li></ul><figure><img src="'+t+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>解释：</p><ul><li>其中流程节点针对于单个Bean，BeanPostProcessor是针对所有Bean而言。</li><li>即使你定义了ApplicationContextAware接口，但是有时候并不会调用，这要根据你的IoC容器来决定。</li><li>Spring IoC 容器的最低要求是实现 BeanFactory 接口，而不是实现 ApplicationContext 接口。对于那些没有实现 ApplicationContext 接口的容器，对生命周期对应的 ApplicationContextAware 定义的方法也是不会被调用的，只有实现了 ApplicationContext 接口的容器，才会在生命周期调用 ApplicationContextAware 所定义的 setApplicationContext 方法。</li></ul><h1 id="二、spring-bean作用域" tabindex="-1"><a class="header-anchor" href="#二、spring-bean作用域" aria-hidden="true">#</a> 二、Spring Bean作用域</h1><h2 id="_1、使用-profile" tabindex="-1"><a class="header-anchor" href="#_1、使用-profile" aria-hidden="true">#</a> 1、使用@Profile</h2><h4 id="_1-假设存在dev-spring-boot-和-test-spring-boot两个数据库-使用注解-profile定义两个bean" tabindex="-1"><a class="header-anchor" href="#_1-假设存在dev-spring-boot-和-test-spring-boot两个数据库-使用注解-profile定义两个bean" aria-hidden="true">#</a> 1）假设存在dev_spring_boot 和 test_spring_boot两个数据库，使用注解@Profile定义两个Bean</h4><p>​ <img src="'+p+`" alt="img" loading="lazy"></p><h4 id="_2-在-java-启动项目中-我们只需要如下配置就能启动profile机制" tabindex="-1"><a class="header-anchor" href="#_2-在-java-启动项目中-我们只需要如下配置就能启动profile机制" aria-hidden="true">#</a> 2）在 Java 启动项目中，我们只需要如下配置就能启动Profile机制：</h4><p>​ -Dspring.profiles.active=dev</p><p>​ 注：Spring 会先判定是否存在 spring.profiles.active 配置后，再去查找 spring.profiles.default 配置的，所以 spring.profiles.active 的优先级要大于 spring.profiles.default</p><h4 id="_3-按照-springboot-的规则" tabindex="-1"><a class="header-anchor" href="#_3-按照-springboot-的规则" aria-hidden="true">#</a> 3）按照 springboot 的规则</h4><p>​ -Dspring.profiles.active 配置的值记为 {profile} ，则它会用 application-{profiles}.properties 文件去代替原来默认的 application.properties文件</p><h2 id="_2、使用-spring-el" tabindex="-1"><a class="header-anchor" href="#_2、使用-spring-el" aria-hidden="true">#</a> 2、使用 Spring EL</h2><h4 id="_1-读取属性文件的值-如" tabindex="-1"><a class="header-anchor" href="#_1-读取属性文件的值-如" aria-hidden="true">#</a> 1）读取属性文件的值，如：</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// \${......} 代表占位符</span>
<span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${database.driverName}&quot;</span><span class="token punctuation">)</span>   
<span class="token class-name">String</span> driver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-记录一个bean初始化事件-如" tabindex="-1"><a class="header-anchor" href="#_2-记录一个bean初始化事件-如" aria-hidden="true">#</a> 2）记录一个Bean初始化事件，如：</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// #{......} 代表启用 Spring表达式，它将具有运算功能；T(......)代表的是引入类</span>
<span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;#{T(System).currentTimeMillis()}&quot;</span><span class="token punctuation">)</span>  
<span class="token keyword">private</span> <span class="token class-name">Long</span> initTime <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token comment">//直接赋值： 赋值字符串</span>
<span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;#{‘使用 Spring EL 赋值字符串’}&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token comment">// 科学计数法赋值</span>
<span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;#{9.3E3}&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token keyword">double</span> d<span class="token punctuation">;</span>
<span class="token comment">// 其他Spring Bean属性赋值当前的Bean</span>
<span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;#{beanName.str}&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">String</span> otherBeanProp <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以进行计算、三元运算、比较等。</p>`,22),l=[r];function c(d,u){return a(),s("div",null,l)}const v=n(o,[["render",c],["__file","Spring-Bean生命周期.html.vue"]]);export{v as default};
