import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as e}from"./app-0ce632a0.js";const t={},p=e(`<h1 id="_1、redis数据结构介绍" tabindex="-1"><a class="header-anchor" href="#_1、redis数据结构介绍" aria-hidden="true">#</a> 1、Redis数据结构介绍</h1><p>（1）STRING</p><p>​ value：可以是字符串、整数或者浮点数</p><p>​ operate：对整个字符串或者字符串的其中一部分执行操作；对整数和浮点数执行自增（increment）或者自减(decrement)操作</p><p>（2）LIST</p><p>​ value：一个链表，链表上的每个节点都包含了—个字符串</p><p>​ operate：从链表的两端推入或者弹出元素;根据偏移量对链表进行修剪(trim)；读取单个或者多个元素;根据值查找或者移除元素</p><p>（3）SET</p><p>​ value：包含字符串的无序收集器( unordered collection)，并且被包含的每个字符串都是独一无二、各不相同的</p><p>​ operate：添加、获取、移除单个元素；检查一个元素是否存在于集合中;计算交集、并集、差集；从集合里面随机获取元素</p><p>（4）HASH</p><p>​ value：包含键值对的无序散列表</p><p>​ operate：添加、获取、移除单个键值对;获取所有键值对</p><p>（5）ZSET（有序集合)</p><p>​ value：字符串成员( member)与浮点数分值( score）之间的有序映射，元素的排列顺序由分值的大小决定</p><p>​ operate：添加、获取、删除单个元素；根据分值范围（range)或者成员来获取元素</p><h1 id="_2、常用命令" tabindex="-1"><a class="header-anchor" href="#_2、常用命令" aria-hidden="true">#</a> 2、常用命令</h1><h2 id="_1-string字符串命令" tabindex="-1"><a class="header-anchor" href="#_1-string字符串命令" aria-hidden="true">#</a> （1）STRING字符串命令</h2><ul><li>SET key-name value 设置值</li><li>GET key-name 获得值</li><li>DEL key-name 删除值</li></ul><p>例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">6379</span><span class="token operator">&gt;</span> set hello world
<span class="token constant">OK</span>
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">6379</span><span class="token operator">&gt;</span> get hello
<span class="token string">&quot;world&quot;</span>
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">6379</span><span class="token operator">&gt;</span> del hello
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">6379</span><span class="token operator">&gt;</span> get hello
<span class="token punctuation">(</span>nil<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>INCR key-name 将键存储的值加上1</li><li>DECR key-name 将键存储的值减去1</li><li>INCRBY key-name amount 将键存储的值加上整数amount</li><li>DECRBY key-name amount 将键存储的值减去整数amount</li><li>INCRBYFLOAT key-name amount 将键存储的值加上浮点数 amount，这个命令在Redis 2.6或以上的版本可用</li></ul><p>例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1:6379&gt; set name 1
OK
127.0.0.1:6379&gt; incr name
(integer) 2
127.0.0.1:6379&gt; get name
&quot;2&quot;
127.0.0.1:6379&gt; decr name
(integer) 1
127.0.0.1:6379&gt; get name
&quot;1&quot;
127.0.0.1:6379&gt; incrby name 2
(integer) 3
127.0.0.1:6379&gt; get name
&quot;3&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-list列表命令" tabindex="-1"><a class="header-anchor" href="#_2-list列表命令" aria-hidden="true">#</a> （2）LIST列表命令</h2><ul><li>RPUSH key-name value [value ...] 将一个或多个值推入列表的右端</li><li>LPUSH key-name value [value ...] 将一个或多个值推入列表的左端</li><li>RPOP key-name 移除并返回列表最右端的元素</li><li>LPOP key-name 移除并返回列表最左端的元素</li><li>LINDEX key-name offset 返回列表中偏移量为offset的元素</li><li>LRANGE key-name start end 返回列表从start偏移量到end偏移量范围内的所有元素,其中偏移量为start和偏移量为end 的元素也会包含在被返回的元素之内</li><li>LTRIM key-name start end 对列表进行修剪，只保留从start偏移量到end偏移量范围内的元素，其中偏移量为start和偏移量为end的元素也会被保留</li></ul><p>例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">6379</span><span class="token operator">&gt;</span> rpush myList <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">6379</span><span class="token operator">&gt;</span> lrange myList <span class="token number">0</span> <span class="token number">4</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">6379</span><span class="token operator">&gt;</span> lrange myList <span class="token number">0</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">6379</span><span class="token operator">&gt;</span> lpush myList <span class="token operator">-</span><span class="token number">1</span> <span class="token number">0</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">6</span>
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">6379</span><span class="token operator">&gt;</span> lrange myList <span class="token number">0</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;0&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;-1&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">6</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>BLPOP key-name [ key-name ...] timeout 从第一个非空列表中弹出位于最左端的元素，或者在timeout秒之内阻塞并等待可弹出的元素出现</li><li>BRPOP key-name [key-name ...] timeout 从第一个非空列表中弹出位于最右端的元素，或者在timeout秒之内阻塞并等待可弹出的元素出现</li><li>RPOPLPUSH source-key dest-key 从source-key列表中弹出位于最右端的元素，然后将这个元素推入dest-key列表的最左端，并向用户返回这个元素</li><li>BRPOPLPUSH source-key dest-key timeout 从source-key列表中弹出位于最右端的元素，然后将这个元素推入dest-key列表的最左端，并向用户返回这个元素；如果source-key为空，那么在timeout秒之内阻塞并等待可弹出的元素出现</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">6379</span><span class="token operator">&gt;</span> blpop myList <span class="token number">2</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;myList&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;0&quot;</span>
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">6379</span><span class="token operator">&gt;</span> blpop myList <span class="token number">2000</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;myList&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;-1&quot;</span>
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">6379</span><span class="token operator">&gt;</span> blpop myList <span class="token number">6000</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;myList&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">6379</span><span class="token operator">&gt;</span> brpop myList <span class="token number">2</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;myList&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-set集合命令" tabindex="-1"><a class="header-anchor" href="#_3-set集合命令" aria-hidden="true">#</a> （3）SET集合命令</h1><ul><li>SADD key-name item [item ...] 将一个或多个元素添加到集合里面，并返回被添加元素当中原本并不存在于集合里面的元素数量</li><li>SREM key-name item [item ...] 从集合里面移除一个或多个元素，并返回被移除元素的数量</li><li>SISMEMBER key-name item 检查元素item是否存在于集合key-name 里</li><li>SCARD key-name 返回集合包含的元素的数量</li><li>SMEMBERS key-name 返回集合包含的所有元素</li><li>SRANDMEMBER key-name [count] 从集合里面随机地返回一个或多个元素。当count为正数时，命令返回的随机元素不会重复:当count为负数时，命令返回的随机元素可能会出现重复</li><li>SPOP key-name 随机地移除集合中的一个元素，并返回被移除的元素</li><li>SMOVE source-key dest-key item 如果集合source-key包含元素item，那么从集合source-key里面移除元素item，并将元素item添加到集合dest-key中;如果item被成功移除,那么命令返回1，否则返回0</li></ul><h2 id="用于组合和处理多个集合的redis命令" tabindex="-1"><a class="header-anchor" href="#用于组合和处理多个集合的redis命令" aria-hidden="true">#</a> 用于组合和处理多个集合的Redis命令</h2><ul><li>SDIFF key-name [key-name ...] 返回那些存在于第一个集合、但不存在于其他集合中的元素（数学上的差集运算)</li><li>SDIFFSTORE dest-key key-name [key-name ...] 将那些存在于第一个集合但并不存在于其他集合中的元素（数学上的差集运算）存储到dest-key键里面</li><li>SINTER key-name [key-name ...] 返回那些同时存在于所有集合中的元素（数学上的交集运算)</li><li>SINTERSTORE dest-key key-name [key-name ...] 将那些同时存在于所有集合的元素（数学上的交集运算)存储到dest-key键里面</li><li>SUNION key-name [key-name ...] 返回那些至少存在于一个集合中的元素（数学上的并集计算)</li><li>SUNIONSTORE dest-key key-name [key-name ...] 将那些至少存在于一个集合中的元素（数学上的并集计算)存储到dest-key键里面</li></ul><h1 id="_4-hash散列命令" tabindex="-1"><a class="header-anchor" href="#_4-hash散列命令" aria-hidden="true">#</a> （4）HASH散列命令</h1><p>HMGET key-name key [key ...] 从散列里面获取一个或多个键的值</p><p>HMSET key-name key value [key value ...] 为散列里面的一个或多个键设置值</p><p>HDEL key-name key [key ...] 删除散列里面的一个或多个键值对，返回成功找到并删除的键值对数量</p><p>HLEN key-name 返回散列包含的键值对数量</p><h2 id="散列的更高级特性" tabindex="-1"><a class="header-anchor" href="#散列的更高级特性" aria-hidden="true">#</a> 散列的更高级特性</h2><p>HEXISTS key-name key 检查给定键是否存在于散列中HKEYS key-name———获取散列包含的所有键</p><p>HKEYS key-name 获取散列包含的所有键</p><p>HVALS key-name 获取散列包含的所有值</p><p>HGETALL key-name 获取散列包含的所有键值对</p><p>HINCRBY key-name key increment 将键key存储的值加上整数increment</p><p>HINCRBYFLOAT key-name key increment 将键key存储的值加上浮点数increment</p><h1 id="_5-zset有序集合命令" tabindex="-1"><a class="header-anchor" href="#_5-zset有序集合命令" aria-hidden="true">#</a> （5）ZSET有序集合命令</h1><p>ZADD key-name score member [score member ...] 将带有给定分值的成员添加到有序集合里面</p><p>ZREM key-name member [member ...] 从有序集合里面移除给定的成员，并返回被移除成员的数量</p><p>ZCARD key-name 返回有序集合包含的成员数量</p><p>ZINCRBY key-name increment member 将member成员的分值加上increment</p><p>ZCOUNT key-name min max——返回分值介于min和max之间的成员数量</p><p>ZRANK key-name member 返回成员member在有序集合中的排名</p><p>ZSCORE key-name member 返回成员member的分值</p><p>ZRANGE key-name start stop [WITHSCORES] 返回有序集合中排名介于start和 stop之间的成员，如果给定了可选的WITHSCORES选项，那么命令会将成员的分值也一并返回</p><h2 id="有序集合的范围型数据获取命令和范围型数据删除命令-以及并集命令和交集命令" tabindex="-1"><a class="header-anchor" href="#有序集合的范围型数据获取命令和范围型数据删除命令-以及并集命令和交集命令" aria-hidden="true">#</a> 有序集合的范围型数据获取命令和范围型数据删除命令，以及并集命令和交集命令</h2><p>ZREVRANK key-name member 返回有序集合里成员member的排名，成员按照分值从大到小排列</p><p>ZREVRANGE key-name start stop [WITHSCORES] 返回有序集合给定排名范围内的成员，成员按照分值从大到小排列</p><p>ZRANGEBYSCORE key min max [WITHSCORES] [LIMIT offset count] 返回有序集合中，分值介于min和max之间的所有成员</p><p>ZREVRANGEBYSCORE key max min [WITHSCORES] [LIMIT offset count] 获取有序集合中分值介于min和max之间的所有成员，并按照分值从大到小的顺序来返回它们</p><p>ZREMRANGEBYRANK key-name start stop 移除有序集合中排名介于start和stop之间的所有成员</p><p>ZREMRANGEBYSCORE key-name min max 移除有序集合中分值介于min和 max之间的所有成员</p><p>ZINTERSTORE dest-key key-count key [key ...] [WEIGHTS weight[ weight ...]] [AGGREGATE SUM|MIN|MAX] 对给定的有序集合执行类似于集合的交集运算</p><p>ZUNIONSTORE dest-key key-count key [key ...] [WEIGHTS weight[ weight ...]] [AGGREGATE SUM|MIN|MAX] 对给定的有序集合执行类似于集合的并集运算</p>`,64),l=[p];function i(o,r){return s(),a("div",null,l)}const m=n(t,[["render",i],["__file","初识redis（1）.html.vue"]]);export{m as default};
