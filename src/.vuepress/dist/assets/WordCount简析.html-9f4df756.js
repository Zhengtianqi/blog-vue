import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as p}from"./app-0ce632a0.js";const t={},e=p(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>hadoop<span class="token punctuation">.</span>examples</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StringTokenizer</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>hadoop<span class="token punctuation">.</span>conf<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>hadoop<span class="token punctuation">.</span>fs<span class="token punctuation">.</span></span><span class="token class-name">Path</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>hadoop<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IntWritable</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>hadoop<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">Text</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>hadoop<span class="token punctuation">.</span>mapreduce<span class="token punctuation">.</span></span><span class="token class-name">Job</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>hadoop<span class="token punctuation">.</span>mapreduce<span class="token punctuation">.</span></span><span class="token class-name">Mapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>hadoop<span class="token punctuation">.</span>mapreduce<span class="token punctuation">.</span></span><span class="token class-name">Reducer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>hadoop<span class="token punctuation">.</span>mapreduce<span class="token punctuation">.</span>lib<span class="token punctuation">.</span>input<span class="token punctuation">.</span></span><span class="token class-name">FileInputFormat</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>hadoop<span class="token punctuation">.</span>mapreduce<span class="token punctuation">.</span>lib<span class="token punctuation">.</span>output<span class="token punctuation">.</span></span><span class="token class-name">FileOutputFormat</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>hadoop<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">GenericOptionsParser</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WordCount</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * map 阶段
     * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
     * Object 此处为文本数据的起始位置的偏移量;可以直接使用 Long 类型，源码此处使用Object做了泛化
     * Text 输入&lt; key, value &gt;对的 value 值，此处为一段具体的文本数据
     * Text 输出&lt; key, value &gt;对的 key 值，此处为一个单词
     * IntWritable：输出&lt; key, value &gt;对的 value 值，此处固定为 1
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">TokenizerMapper</span>
            <span class="token keyword">extends</span> <span class="token class-name">Mapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">,</span> <span class="token class-name">Text</span><span class="token punctuation">,</span> <span class="token class-name">Text</span><span class="token punctuation">,</span> <span class="token class-name">IntWritable</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
        <span class="token comment">// IntWritable 是 Hadoop 对 Integer 的进一步封装，使其可以进行序列化。</span>
        <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token class-name">IntWritable</span> one <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntWritable</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// map 端的任务是对输入数据按照单词进行切分，每个单词为 Text 类型。</span>
        <span class="token keyword">private</span> <span class="token class-name">Text</span> word <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**
         * <span class="token keyword">@param</span> <span class="token parameter">key</span>     输入数据在原数据中的偏移量
         * <span class="token keyword">@param</span> <span class="token parameter">value</span>   具体的数据数据，此处为一段字符串
         * <span class="token keyword">@param</span> <span class="token parameter">context</span> 用于暂时存储 map() 处理后的结果
         * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IOException</span></span>          IO异常
         * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">InterruptedException</span></span> 中断异常
         */</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">map</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">,</span> <span class="token class-name">Text</span> value<span class="token punctuation">,</span> <span class="token class-name">Context</span> context
        <span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
            <span class="token comment">// 字符串分割，也可以用 apache.common.lang3的 StringUtils.split</span>
            <span class="token class-name">StringTokenizer</span> itr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringTokenizer</span><span class="token punctuation">(</span>value<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// map 输出的 key value</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>itr<span class="token punctuation">.</span><span class="token function">hasMoreTokens</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                word<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>itr<span class="token punctuation">.</span><span class="token function">nextToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                context<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>word<span class="token punctuation">,</span> one<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * reduce阶段，map的输出是reduce的输入
     * Text：输入&lt; key, value &gt;对的key值，此处为一个单词
     * IntWritable：输入&lt; key, value &gt;对的value值
     * Text：输出&lt; key, value &gt;对的key值，此处为一个单词
     * IntWritable：输出&lt; key, value &gt;对，此处为相同单词词频累加之后的值。实际上就是一个数字
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">IntSumReducer</span>
            <span class="token keyword">extends</span> <span class="token class-name">Reducer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Text</span><span class="token punctuation">,</span> <span class="token class-name">IntWritable</span><span class="token punctuation">,</span> <span class="token class-name">Text</span><span class="token punctuation">,</span> <span class="token class-name">IntWritable</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token class-name">IntWritable</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntWritable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**
         * <span class="token keyword">@param</span> <span class="token parameter">key</span>     输入&lt; key, value &gt;对的key值，也就是一个单词
         * <span class="token keyword">@param</span> <span class="token parameter">values</span>  一系列的key值相同的序列化结构
         * <span class="token keyword">@param</span> <span class="token parameter">context</span> 临时存储reduce端产生的结果
         * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IOException</span></span>          IO异常
         * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">InterruptedException</span></span> 中断异常
         */</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">reduce</span><span class="token punctuation">(</span><span class="token class-name">Text</span> key<span class="token punctuation">,</span> <span class="token class-name">Iterable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">IntWritable</span><span class="token punctuation">&gt;</span></span> values<span class="token punctuation">,</span>
                           <span class="token class-name">Context</span> context
        <span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
            <span class="token comment">// 将相同的key进行合并，value累加</span>
            <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">IntWritable</span> val <span class="token operator">:</span> values<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                sum <span class="token operator">+=</span> val<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            result<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 单词和它的数目</span>
            context<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">Configuration</span> conf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Configuration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> otherArgs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GenericOptionsParser</span><span class="token punctuation">(</span>conf<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getRemainingArgs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>otherArgs<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Usage: wordcount &lt;in&gt; [&lt;in&gt;...] &lt;out&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// main函数调用Job类及逆行MapReduce 作业的初始化</span>
        <span class="token class-name">Job</span> job <span class="token operator">=</span> <span class="token class-name">Job</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>conf<span class="token punctuation">,</span> <span class="token string">&quot;word count&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        job<span class="token punctuation">.</span><span class="token function">setJarByClass</span><span class="token punctuation">(</span><span class="token class-name">WordCount</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置 job 的 map 阶段的执行类</span>
        job<span class="token punctuation">.</span><span class="token function">setMapperClass</span><span class="token punctuation">(</span><span class="token class-name">TokenizerMapper</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置 job 的 combine 阶段的执行类</span>
        job<span class="token punctuation">.</span><span class="token function">setCombinerClass</span><span class="token punctuation">(</span><span class="token class-name">IntSumReducer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置 job 的 reduce 阶段的执行类</span>
        job<span class="token punctuation">.</span><span class="token function">setReducerClass</span><span class="token punctuation">(</span><span class="token class-name">IntSumReducer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// map的输出 key、value 映射</span>
        job<span class="token punctuation">.</span><span class="token function">setOutputKeyClass</span><span class="token punctuation">(</span><span class="token class-name">Text</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置程序的输出的value值的类型</span>
        job<span class="token punctuation">.</span><span class="token function">setOutputValueClass</span><span class="token punctuation">(</span><span class="token class-name">IntWritable</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 调用 addInputFormat 设置输入路径</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> otherArgs<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Path 是绝对路径</span>
            <span class="token class-name">FileInputFormat</span><span class="token punctuation">.</span><span class="token function">addInputPath</span><span class="token punctuation">(</span>job<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Path</span><span class="token punctuation">(</span>otherArgs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 输入文件 和 输出文件的路径</span>
        <span class="token class-name">FileOutputFormat</span><span class="token punctuation">.</span><span class="token function">setOutputPath</span><span class="token punctuation">(</span>job<span class="token punctuation">,</span>
                <span class="token keyword">new</span> <span class="token class-name">Path</span><span class="token punctuation">(</span>otherArgs<span class="token punctuation">[</span>otherArgs<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 等待任务完成，任务完成之后退出程序</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span>job<span class="token punctuation">.</span><span class="token function">waitForCompletion</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),c=[e];function o(l,i){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","WordCount简析.html.vue"]]);export{r as default};
