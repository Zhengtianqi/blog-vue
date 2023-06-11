import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as e}from"./app-0ce632a0.js";const t={},o=e(`<p>Hystrix修改默认配置有两种方式，注解参数注入，和application.yml配置文件配置。</p><h1 id="_1、方法一-注解参数注入" tabindex="-1"><a class="header-anchor" href="#_1、方法一-注解参数注入" aria-hidden="true">#</a> 1、方法一：注解参数注入</h1><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/helloHystrixA/{string}&quot;</span><span class="token punctuation">,</span> method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@HystrixCommand</span><span class="token punctuation">(</span>fallbackMethod <span class="token operator">=</span> <span class="token string">&quot;testFallback&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 请求失败降级回调方法，值为方法名，不需要括号</span>
        commandProperties <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token comment">// 针对单个方法的配置</span>
            <span class="token annotation punctuation">@HystrixProperty</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;circuitBreaker.enabled&quot;</span><span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 开启熔断器，可不加默认为true</span>
            <span class="token annotation punctuation">@HystrixProperty</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;circuitBreaker.errorThresholdPercentage&quot;</span><span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token string">&quot;50&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 请求错误超过50%，开启熔断器</span>
            <span class="token annotation punctuation">@HystrixProperty</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;circuitBreaker.requestVolumeThreshold&quot;</span><span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 一个周期(十秒)内超过10个请求才进行进行容错率判断</span>
            <span class="token annotation punctuation">@HystrixProperty</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;circuitBreaker.sleepWindowInMilliseconds&quot;</span><span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token string">&quot;10000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">// 开启熔断器后过10秒再尝试访问</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">helloHystirxA</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">String</span> string<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Nacos服务发现：远端调用成功！ result=&quot;</span>
            <span class="token operator">+</span> restTemplate<span class="token punctuation">.</span><span class="token function">getForObject</span><span class="token punctuation">(</span><span class="token string">&quot;http://nacos.provider.demo/hello/&quot;</span> <span class="token operator">+</span> string<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_2、方法二-配置文件" tabindex="-1"><a class="header-anchor" href="#_2、方法二-配置文件" aria-hidden="true">#</a> 2、方法二：配置文件</h1><p>分两步，首先在代码里配置commandKey：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/helloHystrixB/{string}&quot;</span><span class="token punctuation">,</span> method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@HystrixCommand</span><span class="token punctuation">(</span>commandKey <span class="token operator">=</span> <span class="token string">&quot;testCommand&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 为修饰的方法定义一个 commandKey，不设置默认取方法名为commandKey</span>
        fallbackMethod <span class="token operator">=</span> <span class="token string">&quot;testFallback&quot;</span><span class="token comment">// 请求失败降级回调方法，值为方法名，不需要括号</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">helloHystirxB</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span> <span class="token class-name">String</span> string<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Nacos服务发现：远端调用成功！ result=&quot;</span>
            <span class="token operator">+</span> restTemplate<span class="token punctuation">.</span><span class="token function">getForObject</span><span class="token punctuation">(</span><span class="token string">&quot;http://nacos.provider.demo/hello/&quot;</span> <span class="token operator">+</span> string<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在application.yml里配置 commandKey = &quot;testCommand&quot; 对应的配置项：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>hystrix<span class="token operator">:</span>
    command<span class="token operator">:</span>
        testCommand<span class="token operator">:</span> #commandKey，配置作用于指定的commandKey
            # <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>  常用的熔断器配置  <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
            circuitBreaker<span class="token operator">:</span>
                enabled<span class="token operator">:</span> <span class="token boolean">true</span> #默认为<span class="token boolean">true</span>，可不用配置
                errorThresholdPercentage<span class="token operator">:</span> <span class="token number">50</span> #一个监测周期（默认<span class="token number">10</span>s），请求失败率超过<span class="token number">50</span><span class="token operator">%</span>开启熔断器
                requestVolumeThreshold<span class="token operator">:</span> <span class="token number">10</span> #一个监测周期内，超过<span class="token number">10</span>个请求才进行进行容错率判断
                sleepWindowInMilliseconds<span class="token operator">:</span> <span class="token number">10000</span> #开启熔断器后过<span class="token number">10</span>s再尝试访问，默认<span class="token number">5</span>s
            metrics<span class="token operator">:</span>
                rollingStats<span class="token operator">:</span>
                    timeInMilliseconds<span class="token operator">:</span> <span class="token number">10000</span> #监测周期时长（单位 ms）<span class="token punctuation">,</span>默认<span class="token number">10000</span>，即<span class="token number">10</span>秒
                    numBuckets<span class="token operator">:</span> <span class="token number">10</span> #监测周期切分为<span class="token number">10</span>个buckets
                         #结合上面的参数就是<span class="token number">10</span>秒监测周期 分为<span class="token number">10</span>个buckets，每个buckets <span class="token number">1</span>秒；每<span class="token number">1</span>秒进行<span class="token number">1</span>次监测计算
                         #注意 timeInMilliseconds <span class="token operator">%</span> numBuckets 必须为<span class="token number">0</span> 否则会触发异常
            #<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>  常用的资源隔离配置 <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
            execution<span class="token operator">:</span>
                isolation<span class="token operator">:</span>
                    strategy<span class="token operator">:</span> <span class="token constant">THREAD</span> # <span class="token constant">THREAD</span>：线程隔离， <span class="token constant">SEMAPHORE</span>：信号量隔离；默认线程隔离
                    thread<span class="token operator">:</span>
                        timeoutInMilliseconds<span class="token operator">:</span> <span class="token number">400</span> #占用线程调用接口的超时时间
                        interruptOnTimeout<span class="token operator">:</span> <span class="token boolean">true</span> #占用线程超时 是否中断线程的执行
                    timeout<span class="token operator">:</span>
                        enabled<span class="token operator">:</span> <span class="token boolean">true</span> #开启超时限制
                    semaphore<span class="token operator">:</span>
                        maxConcurrentRequests<span class="token operator">:</span> <span class="token number">20</span> #信号量隔离下才有效，最大的信号量值，可以理解为 最大支持的并发数
            fallback<span class="token operator">:</span>
                isolation<span class="token operator">:</span>
                    semaphore<span class="token operator">:</span>
                        maxConcurrentRequests<span class="token operator">:</span> <span class="token number">20</span> #降级回调方法允许的最大调用

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：如果将application.yml中的commandKey设置为default，则会作为全局默认配置，覆盖Hystrix自身的默认配置。</p>`,9),p=[o];function c(l,r){return s(),a("div",null,p)}const k=n(t,[["render",c],["__file","SpringCloud-Hystrix参数配置.html.vue"]]);export{k as default};
