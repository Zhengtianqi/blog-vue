import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{o as p,c as s,a as e,b as t}from"./app-0ce632a0.js";const n={},u=e("<p>a.创建学生成绩表，结果如下。</p><p>Rowkey：id</p><p>列族：info和course，course包括3个版本数据</p><p>b.插入数据</p><p>数据包括</p><table><thead><tr><th>学生学号</th><th>Info</th><th>course</th><th></th><th></th><th></th><th></th><th></th></tr></thead><tbody><tr><td></td><td>name</td><td>age</td><td>sex</td><td>address</td><td>Chinese</td><td>math</td><td>english</td></tr><tr><td>95001</td><td>Jom</td><td>20</td><td>男</td><td>山东省济南市</td><td>80</td><td>85</td><td>89</td></tr><tr><td>95002</td><td>Tom</td><td>19</td><td>男</td><td>山东省济南市</td><td>55，60</td><td>80</td><td>71</td></tr><tr><td>95003</td><td>Lily</td><td>20</td><td>女</td><td>北京市</td><td></td><td>65</td><td></td></tr></tbody></table><p>c.查询数据</p><ul><li>查找95001的相关数据</li><li>查找95002 行、course 列族中 math 列的值</li><li>查找成绩为80-90之间的相关数据</li><li>查找名字为Jom的相关数据</li><li>查找学生地址是山东省的相关数据</li></ul><p>d.删除学生95003的相关数据</p><p>2、使用HBase Java API（选做）</p><p>a.查询所有表</p><p>b.创建表test，包括列族f1和f2</p><p>c.插入数据，rk001 ，f1中列name为zhangsan，f2中列number为135</p><p>d.插入数据，rk002 ，f1中列name为lisi</p><p>e.查看rk001的数据</p><p>创建学生成绩表</p>",16),o=t("p",{NAME:">'course',VERSIONS=>3"},"create 'student','pratice','info',",-1),i=e("<p>插入数据</p><p>put &#39;student&#39;,&#39;95001&#39;,&#39;info:name&#39;,&#39;Jom&#39;</p><p>put &#39;student&#39;,&#39;95001&#39;,&#39;info:age&#39;,&#39;20&#39;</p><p>put &#39;student&#39;,&#39;95001&#39;,&#39;info:sex&#39;,&#39;男&#39;</p><p>put &#39;student&#39;,&#39;95001&#39;,&#39;info:address&#39;,&#39;山东省济南市&#39;</p><p>put &#39;student&#39;,&#39;95001&#39;,&#39;course:chinese&#39;,&#39;80&#39;</p><p>put &#39;student&#39;,&#39;95001&#39;,&#39;course:math&#39;,&#39;85&#39;</p><p>put &#39;student&#39;,&#39;95001&#39;,&#39;course:english&#39;,&#39;89&#39;</p><p>put &#39;student&#39;,&#39;95002&#39;,&#39;info:name&#39;,&#39;Tom&#39;</p><p>put &#39;student&#39;,&#39;95002&#39;,&#39;info:age&#39;,&#39;19&#39;</p><p>put &#39;student&#39;,&#39;95002&#39;,&#39;info:sex&#39;,&#39;男&#39;</p><p>put &#39;student&#39;,&#39;95002&#39;,&#39;info:address&#39;,&#39;山东省济南市&#39;</p><p>put &#39;student&#39;,&#39;95002&#39;,&#39;course:chinese&#39;,&#39;55,60&#39;</p><p>put &#39;student&#39;,&#39;95002&#39;,&#39;course:math&#39;,&#39;80&#39;</p><p>put &#39;student&#39;,&#39;95002&#39;,&#39;course:english&#39;,&#39;71&#39;</p><p>put &#39;student&#39;,&#39;95003&#39;,&#39;info:name&#39;,&#39;Lily&#39;</p><p>put &#39;student&#39;,&#39;95003&#39;,&#39;info:age&#39;,&#39;20&#39;</p><p>put &#39;student&#39;,&#39;95003&#39;,&#39;info:sex&#39;,&#39;女&#39;</p><p>put &#39;student&#39;,&#39;95003&#39;,&#39;info:address&#39;,&#39;北京市&#39;</p><p>put &#39;student&#39;,&#39;95003&#39;,&#39;course:chinese&#39;,&#39;&#39;</p><p>put &#39;student&#39;,&#39;95003&#39;,&#39;course:math&#39;,&#39;65&#39;</p><p>put &#39;student&#39;,&#39;95003&#39;,&#39;course:english&#39;,&#39;&#39;</p><p>查找95001的相关数据</p><p>get &#39;student&#39;,&#39;95001&#39;</p><p>查找95002 行、course 列族中 math 列的值</p>",25),a=t("p",{COLUMN:">'course:math'"},"get 'student','95002',",-1),r=t("p",null,"查找成绩为80-90之间的相关数据",-1),c=t("p",{COLUMN:">'course',",FILTER:`>"ValueFilter(>=,'binary:80')`,AND:"","ValueFilter(&lt;":`,'binary:90')"`},"scan 'student',",-1),l=t("p",null,"查找名字为Jom的相关数据",-1),h=t("p",{FILTER:`>"ValueFilter(=,'binary:Jom')"`},"scan 'student',",-1),_=t("p",null,"查找学生地址是山东省的相关数据",-1),m=t("p",{FILTER:`>"ValueFilter(=,'substring:山东省')"`},"scan 'student',",-1),f=t("p",null,"删除学生95003的相关数据",-1),b=t("p",null,"deleteall 'student','95003'",-1),g=[u,o,i,a,r,c,l,h,_,m,f,b];function F(y,x){return p(),s("div",null,g)}const V=d(n,[["render",F],["__file","HDFS-shell操作（2）.html.vue"]]);export{V as default};
