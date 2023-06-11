import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,b as n,d as s,e as p,a as t}from"./app-0ce632a0.js";const i={},u=t(`<h1 id="一、问题产生" tabindex="-1"><a class="header-anchor" href="#一、问题产生" aria-hidden="true">#</a> 一、问题产生</h1><p>​ 在写java程序时，有时间戳转换的操作。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">ParseException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">SimpleDateFormat</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> zhengtianqi
 * <span class="token keyword">@date</span> 2019/10/12
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DateTrans</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">// 将2019-10-12 18:50:30 改成 2019年10月12日</span>
        <span class="token class-name">String</span> inDate <span class="token operator">=</span> <span class="token string">&quot;2019-10-12 18:50:30&quot;</span><span class="token punctuation">;</span>

        <span class="token class-name">SimpleDateFormat</span> inPut <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd HH:mm:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SimpleDateFormat</span> outPut <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy年MM月dd日&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Date</span> temp <span class="token operator">=</span> inPut<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>inDate<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> outDate <span class="token operator">=</span> outPut<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>outDate<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ParseException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;时间转换出错，出错信息为 ={}&quot;</span> <span class="token operator">+</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>涉及时间戳转换时，每次我们都new一个SimpleDateFormat对象，用起来很麻烦。</p><p>我们就把它们放到了一个常量类里，随时用随时取。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 枚举类 常量类
 *
 * <span class="token keyword">@author</span> zhengtianqi
 * <span class="token keyword">@date</span> 2019/8/16
 */</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">ConstantUtils</span> <span class="token punctuation">{</span>
    
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">SimpleDateFormat</span> <span class="token constant">IN_FORMAT</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyyMMddHHmmssSSS&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">SimpleDateFormat</span> <span class="token constant">OUT_FORMAT</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">SimpleDateFormat</span> <span class="token constant">VIEW_FORMAT</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy年MM月&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">SimpleDateFormat</span> <span class="token constant">INNER_FORMAT</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">SimpleDateFormat</span> <span class="token constant">RECALL_FORMAT</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd HH:mm:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可是你想省事，麻烦就随之而来了！</p><p>先看看错误：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token punctuation">[</span><span class="token number">2019</span><span class="token operator">-</span><span class="token number">10</span><span class="token operator">-</span><span class="token number">12</span> <span class="token number">17</span><span class="token operator">:</span><span class="token number">45</span><span class="token operator">:</span><span class="token number">35</span><span class="token punctuation">,</span><span class="token number">468</span><span class="token punctuation">]</span><span class="token punctuation">[</span>locallog<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token constant">ERROR</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token constant">TID</span><span class="token operator">:</span> <span class="token class-name">N</span><span class="token operator">/</span><span class="token class-name">A</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">.</span>/filters<span class="token operator">/</span><span class="token class-name">GlobalExeption</span><span class="token punctuation">.</span>exceptionHandler<span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">10.7</span><span class="token number">.5</span><span class="token number">.22</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">-</span> 服务器内部错误<span class="token operator">!</span>
<span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>NumberFormatException</span><span class="token operator">:</span> <span class="token class-name">For</span> input string<span class="token operator">:</span> <span class="token string">&quot;.220188E.4220188&quot;</span>
        at <span class="token class-name"><span class="token namespace">sun<span class="token punctuation">.</span>misc<span class="token punctuation">.</span></span>FloatingDecimal</span><span class="token punctuation">.</span><span class="token function">readJavaFormatString</span><span class="token punctuation">(</span><span class="token class-name">FloatingDecimal</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">2043</span><span class="token punctuation">)</span> <span class="token operator">~</span><span class="token punctuation">[</span><span class="token operator">?</span><span class="token operator">:</span><span class="token number">1.8</span><span class="token number">.0_221</span><span class="token punctuation">]</span>
        at <span class="token class-name"><span class="token namespace">sun<span class="token punctuation">.</span>misc<span class="token punctuation">.</span></span>FloatingDecimal</span><span class="token punctuation">.</span><span class="token function">parseDouble</span><span class="token punctuation">(</span><span class="token class-name">FloatingDecimal</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">110</span><span class="token punctuation">)</span> <span class="token operator">~</span><span class="token punctuation">[</span><span class="token operator">?</span><span class="token operator">:</span><span class="token number">1.8</span><span class="token number">.0_221</span><span class="token punctuation">]</span>
        at <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>Double</span><span class="token punctuation">.</span><span class="token function">parseDouble</span><span class="token punctuation">(</span><span class="token class-name">Double</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">538</span><span class="token punctuation">)</span> <span class="token operator">~</span><span class="token punctuation">[</span><span class="token operator">?</span><span class="token operator">:</span><span class="token number">1.8</span><span class="token number">.0_221</span><span class="token punctuation">]</span>
        at <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span>DigitList</span><span class="token punctuation">.</span><span class="token function">getDouble</span><span class="token punctuation">(</span><span class="token class-name">DigitList</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">169</span><span class="token punctuation">)</span> <span class="token operator">~</span><span class="token punctuation">[</span><span class="token operator">?</span><span class="token operator">:</span><span class="token number">1.8</span><span class="token number">.0_221</span><span class="token punctuation">]</span>
        at <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span>DecimalFormat</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token class-name">DecimalFormat</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">2089</span><span class="token punctuation">)</span> <span class="token operator">~</span><span class="token punctuation">[</span><span class="token operator">?</span><span class="token operator">:</span><span class="token number">1.8</span><span class="token number">.0_221</span><span class="token punctuation">]</span>
        at <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span>SimpleDateFormat</span><span class="token punctuation">.</span><span class="token function">subParse</span><span class="token punctuation">(</span><span class="token class-name">SimpleDateFormat</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">1869</span><span class="token punctuation">)</span> <span class="token operator">~</span><span class="token punctuation">[</span><span class="token operator">?</span><span class="token operator">:</span><span class="token number">1.8</span><span class="token number">.0_221</span><span class="token punctuation">]</span>
        at <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span>SimpleDateFormat</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token class-name">SimpleDateFormat</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">1514</span><span class="token punctuation">)</span> <span class="token operator">~</span><span class="token punctuation">[</span><span class="token operator">?</span><span class="token operator">:</span><span class="token number">1.8</span><span class="token number">.0_221</span><span class="token punctuation">]</span>
        at <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span>DateFormat</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token class-name">DateFormat</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">364</span><span class="token punctuation">)</span> <span class="token operator">~</span><span class="token punctuation">[</span><span class="token operator">?</span><span class="token operator">:</span><span class="token number">1.8</span><span class="token number">.0_221</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="二、问题查找" tabindex="-1"><a class="header-anchor" href="#二、问题查找" aria-hidden="true">#</a> 二、问题查找</h1><p>debug发现传出的参数不是自己想要的参数。可是为什么呢？</p><p>​ 因为它是线程不安全的，当并发环境下，如果考虑不周使用SimpleDateFormat方法可以会出现线程安全方面的问题。原因当问我们使用parse方法时，使用CalendarBuilder日历创建者类创建日期，其中calendar实例因为cpu时间片切换时共享变量进行clear操作，导致数据不一致。</p>`,12),k={href:"https://blog.csdn.net/lululove19870526/article/details/83684568",target:"_blank",rel:"noopener noreferrer"},r=n("h1",{id:"三、解决方案",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#三、解决方案","aria-hidden":"true"},"#"),s(" 三、解决方案")],-1),d=n("p",null,"​ 1、临时创建：对于每个转换都new一个实例，有背与我们代码简洁的初衷，放弃。",-1),m=n("p",null,"​ 2、synchronized：阻塞，让线程不在并发，对效率影响很大，放弃。",-1),v=n("p",null,"​ 3、ThreadLocal：线程隔离机制，代码量减少了，和1一样也牺牲了部分空间，还是个不错的解决方法。",-1),b={href:"https://www.jianshu.com/p/3c5d7f09dfbd",target:"_blank",rel:"noopener noreferrer"},y=t(`<p>​ 4、Apache的 DateFormatUtils 与 FastDateFormat：线程安全，但是木有parse()方法</p><p>​ 5、Joda-Time：感觉不错，就是源码有点多没敢用，github目前2.4K star。</p><h1 id="四、部分代码" tabindex="-1"><a class="header-anchor" href="#四、部分代码" aria-hidden="true">#</a> 四、部分代码</h1><p>​ 用了ThreadLocal</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 枚举类 常量类
 *
 * <span class="token keyword">@author</span> zhengtianqi
 * <span class="token keyword">@date</span> 2019/8/16
 */</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">ConstantUtils</span> <span class="token punctuation">{</span>
    

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SimpleDateFormat</span><span class="token punctuation">&gt;</span></span> <span class="token constant">IN_FORMAT</span> <span class="token operator">=</span> <span class="token class-name">ThreadLocal</span><span class="token punctuation">.</span><span class="token function">withInitial</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyyMMddHHmmssSSS&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SimpleDateFormat</span><span class="token punctuation">&gt;</span></span> <span class="token constant">VIEW_FORMAT</span> <span class="token operator">=</span> <span class="token class-name">ThreadLocal</span><span class="token punctuation">.</span><span class="token function">withInitial</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SimpleDateFormat</span><span class="token punctuation">&gt;</span></span> <span class="token constant">OUT_FORMAT</span> <span class="token operator">=</span> <span class="token class-name">ThreadLocal</span><span class="token punctuation">.</span><span class="token function">withInitial</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd HH:mm:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 调用</span>
<span class="token class-name">ConstantUtils</span><span class="token punctuation">.</span><span class="token constant">IN_FORMAT</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>requestParams<span class="token punctuation">.</span><span class="token function">getReleaseTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function w(g,h){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,n("p",null,[s("具体原因："),n("a",k,[s("https://blog.csdn.net/lululove19870526/article/details/83684568"),p(a)])]),r,d,m,v,n("p",null,[s("​ "),n("a",b,[s("https://www.jianshu.com/p/3c5d7f09dfbd"),p(a)])]),y])}const F=e(i,[["render",w],["__file","SimpleDateFormat引发的线程安全问题.html.vue"]]);export{F as default};
