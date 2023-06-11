import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,a as e}from"./app-0ce632a0.js";const t="/blog-vue/assets/images/JVM类加载过程.png",p="/blog-vue/assets/images/image-20210807123832574.png",c={},o=e('<h1 id="_0、图解" tabindex="-1"><a class="header-anchor" href="#_0、图解" aria-hidden="true">#</a> 0、图解</h1><figure><img src="'+t+'" alt="image-20200927113941669" tabindex="0" loading="lazy"><figcaption>image-20200927113941669</figcaption></figure><figure><img src="'+p+`" alt="image-20210807123832574" tabindex="0" loading="lazy"><figcaption>image-20210807123832574</figcaption></figure><h1 id="_1、加载" tabindex="-1"><a class="header-anchor" href="#_1、加载" aria-hidden="true">#</a> 1、加载</h1><p>类的加载，分为三步：</p><p>（1）通过一个类的全限定名获取该类的二进制流</p><p>（2）将该二进制流中的静态存储结构转化为方法去运行时数据结构</p><p>（3）在内存中生成该类的Class对象，作为该类的数据访问入口</p><h1 id="_2、验证" tabindex="-1"><a class="header-anchor" href="#_2、验证" aria-hidden="true">#</a> 2、验证</h1><p>验证的目的是为了确保Class文件的字节流的信息不会危害到虚拟机，分为四步：</p><h2 id="_1-文件格式验证" tabindex="-1"><a class="header-anchor" href="#_1-文件格式验证" aria-hidden="true">#</a> （1）文件格式验证：</h2><p>验证字节流是否符合 Class 文件的规范，如：主次版本号是否在当前虚拟机范围内，常量池中收到常量是否有不被支持的类型。</p><h2 id="_2-元数据验证" tabindex="-1"><a class="header-anchor" href="#_2-元数据验证" aria-hidden="true">#</a> （2）元数据验证：</h2><p>对字节码描述的信息进行语义分析，如果这个类是否有父类，是否集成了不被集成的类。</p><h2 id="_3-字节码验证" tabindex="-1"><a class="header-anchor" href="#_3-字节码验证" aria-hidden="true">#</a> （3）字节码验证：</h2><p>是整个验证过程中最复杂的一个阶段，通过验证数据流和控制流的分析，确定程序语义是否正确，主要针对方法体的验证。如：方法中的类型转换是否正确，跳转指令是否正确等。</p><h2 id="_4-符号引用验证" tabindex="-1"><a class="header-anchor" href="#_4-符号引用验证" aria-hidden="true">#</a> （4）符号引用验证：</h2><p>这个动作在后面的解析过程中发生，主要是为了确保解析动作能正确执行。</p><h1 id="_3、准备" tabindex="-1"><a class="header-anchor" href="#_3、准备" aria-hidden="true">#</a> 3、准备</h1><p>准备阶段是为类的静态变量分配内存并将其初始化为默认值，这些内存都将在方法区中进行分配。准备阶段不分配类中的实例变量的内存，实例变量将会在对象实例化时随着对象一起分配在Java堆中。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> value <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在准备阶段初始值是0，在初始化阶段才会变成123</p><h1 id="_4、解析" tabindex="-1"><a class="header-anchor" href="#_4、解析" aria-hidden="true">#</a> 4、解析</h1><p>该阶段主要完成符号引用到直接引用的转换动作。解析动作并不一定在初始化动作完成之前，也有可能在初始化之后。</p><h1 id="_5、初始化" tabindex="-1"><a class="header-anchor" href="#_5、初始化" aria-hidden="true">#</a> 5、初始化</h1><p>初始化时类加载的最后一步，前面的类加载过程，除了在加载阶段用户应用程序可以通过自定义类加载器参与之外，其余动作完全由虚拟机主导和控制。到了初始化阶段，才真正开始执行类中定义的Java程序代码</p><h1 id="_6、总结" tabindex="-1"><a class="header-anchor" href="#_6、总结" aria-hidden="true">#</a> 6、总结</h1><p>Java语言是一种具有动态性的解释型语言，类（Class）只有被加载到 JVM 后才能运行。当运行指定程序时，JVM 会将编译生成的 .class 文件按照需求和一定的规则加载到内存中，并组成成为一个完整的 Java 应用程序。</p><p>这个加载过程是由类加载器完成，具体来说，就是由ClassLoader和它的子类来实现的，类加载器本身也是一个类，其实质是把类文件从硬盘读取到内存中。</p><p>类的加载方式分为隐式加载和显示加载。隐式加载指的是程序在使用 new 等方式创建对象时，会隐式地调用类的加载器把对应的类 加载到 JVM 中。显示加载指的是通过直接调用 class.forName() 方法来把所需的类加载到 JVM 中。</p><p>任何一个工程项目都是由许多类组成的，当程序启动时，只把需要的类加载到 JVM 中，其他类只有被使用到的时候才会被加载，采用这种方法一方面可以加快加载速度，另一方面可以节约程序运行时对内存的开销。</p><p>此外，在 java 语言中，每个类或接口都对应一个 .class文件，这些文件可以被看成是一个个可以被动态加载的单元，因此当只有部分类被修改时，只需要重新编译变化的类即可，而不需要重新编译所有文件，因此加快了编译速度。</p><h1 id="_7、例子" tabindex="-1"><a class="header-anchor" href="#_7、例子" aria-hidden="true">#</a> 7、例子</h1><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ztq<span class="token punctuation">.</span>clazz</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * class的加载顺序
 *
 * <span class="token keyword">@author</span> zhengtianqi
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ClazzLoadSequence</span> <span class="token punctuation">{</span>

    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">T1</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">T1</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">T1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// step1. count = 0  t = null 只是引用，默认为空</span>
        <span class="token keyword">static</span> <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// step3. count = 2</span>
		<span class="token keyword">private</span> <span class="token keyword">int</span> m <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>	<span class="token comment">// step4. m = 8</span>
        <span class="token keyword">private</span> <span class="token function">T1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            count<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// step2. count = 1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">T2</span> <span class="token punctuation">{</span>
        <span class="token keyword">static</span> <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// step1. count = 2</span>
        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">T2</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">T2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// step2. count = 2</span>

        <span class="token keyword">private</span> <span class="token function">T2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            count<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// step3. count = 3</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 2</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token constant">T1</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 3</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token constant">T2</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34),i=[o];function l(d,u){return a(),s("div",null,i)}const m=n(c,[["render",l],["__file","JVM类加载过程.html.vue"]]);export{m as default};
