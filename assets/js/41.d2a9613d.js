(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{322:function(a,t,_){"use strict";_.r(t);var v=_(14),p=Object(v.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"似然函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#似然函数"}},[a._v("#")]),a._v(" 似然函数")]),a._v(" "),t("p",[a._v("可以这么说，整个深度学习理论的基础都是建立在概率论之上的。扩散模型也不例外。\n下面我们对一些关键概念重点说明。")]),a._v(" "),t("blockquote",[t("p",[a._v("All you need is diffusion.")])]),a._v(" "),t("h2",{attrs:{id:"先验概率和后验概率"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#先验概率和后验概率"}},[a._v("#")]),a._v(" 先验概率和后验概率")]),a._v(" "),t("p",[a._v("先验概率和后验概率是在条件概率的框架下引出来的")]),a._v(" "),t("p",[a._v("条件概率是这样说的：事件A发生条件下事件B发生的概率为$P(B|A)=P(AB)/P(A)$\n贝叶斯公式是关于事件A和B的条件概率的一则定理：$P(A|B)=P(B|A)P(A)P(B)$")]),a._v(" "),t("blockquote",[t("p",[a._v("贝叶斯公式的意义")])]),a._v(" "),t("p",[a._v("我们从一个例子来看先验概率和后验概率")]),a._v(" "),t("p",[a._v("例：对以往的数据分析结果表明当机器调整得良好时，产品的合格率为 98% , 而当机器发生某一故障时，其合格率为 55% 。每天早上机器开动时，机器调整良好的概率为 95% 。已知某天早上第一件产品是合格品，试求机器调整得良好的概率是多少？\n对于这道题的解答是这样的：\n解：设A为事件“产品合格”，B为事件“机器调整良好”，已知\n$P(A|B)=0.98,P(A|¯B)=0.55,P(B)=0.95,P(¯B)=0.05,需要求的概率为$P(B|A),由贝叶斯公式可以得到$P(B|A)=P(A|B)P(B)P(A|B)P(B)+P(A|¯B)P(¯B)=0.98×0.95/(0.98×\n0.95+0.55×0.05)=0.97$")]),a._v(" "),t("p",[a._v("上面的例子当中就隐含了先验概率和后验概率的思想。每天早上，机器调整良好的概率为0.95，这个概率是先验概率，是统计了历史上的数据计算出来的概率，而我们算出来的 0.97，是在有了“今早第一件产品是合格品”这一信息的基础上得到的概率，是一种后验概率。")]),a._v(" "),t("p",[a._v("总结一下：")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("先验概率是基于背景常识或者历史数据的统计得出的预判概率，一般只包含一个变量，例如P(X)，P(Y)。")])]),a._v(" "),t("li",[t("p",[a._v("条件概率是表示一个事件发生后另一个事件发生的概率，例如P(Y|X)代表X事件发生后Y事件发生的概率。")])]),a._v(" "),t("li",[t("p",[a._v("后验概率是由果求因，也就是在知道结果的情况下求原因的概率，例如Y事件是X引起的，那么就是后验概率，也可以说它是事件发生后的反向条件概率。")])])]),a._v(" "),t("h2",{attrs:{id:"先验分布和后验分布"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#先验分布和后验分布"}},[a._v("#")]),a._v(" 先验分布和后验分布")]),a._v(" "),t("p",[a._v("如果我们要研究随机变量X，那么用概率就不妥了，我们用分布，即随机变量的分布情况。但是关于先验和后验，它的道理是不变的。 先验分布是统计随机变量的以往数据而得到的分布情况。而后验分布是某个事件发生以后可以推测随机变量X的分布情况")]),a._v(" "),t("p",[a._v("可见，用概率和用分布仅仅是因为描述的事情不一样，前者描述单独的事件，后者描述整体分布情况。")]),a._v(" "),t("h2",{attrs:{id:"似然函数-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#似然函数-2"}},[a._v("#")]),a._v(" 似然函数")]),a._v(" "),t("p",[a._v("在数理统计学中，似然函数是一种关于统计模型中的参数的函数，表示模型参数中的似然性。似然函数可以理解为条件概率的逆反。")]),a._v(" "),t("p",[a._v("在已知某个参数$\\alpha$时，事件A会发生的条件概率可以写作$P(A;\\alpha)$，也就是$P(A|\\alpha)$。我们也可以构造似然性的方法来表示事件A发生后估计参数$\\alpha$的可能性，也就表示为$\\mathbb{L}(\\alpha|A)$，其中$\\mathbb{L}(\\alpha | A) = P(A|\\alpha)$。")]),a._v(" "),t("p",[a._v("这里Wikipedia的解释比较全面详细，可以参见"),t("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E4%BC%BC%E7%84%B6%E5%87%BD%E6%95%B0",target:"_blank",rel:"noopener noreferrer"}},[a._v("似然函数"),t("OutboundLink")],1),a._v("。")]),a._v(" "),t("h2",{attrs:{id:"最大似然估计-mle-与最大后验概率-map"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最大似然估计-mle-与最大后验概率-map"}},[a._v("#")]),a._v(" 最大似然估计（MLE）与最大后验概率（MAP）")]),a._v(" "),t("p",[a._v("最大似然估计是似然函数最初也是最自然的应用。似然函数取得最大值表示相应的参数能够使得统计模型最为合理。从这样一个想法出发，最大似然估计的做法是：首先选取似然函数（一般是概率密度函数或概率质量函数），整理之后求最大值。实际应用中一般会取似然函数的对数作为求最大值的函数，这样求出的最大值和直接求最大值得到的结果是相同的。似然函数的最大值不一定唯一，也不一定存在。")]),a._v(" "),t("p",[a._v("这里简单的说一下最大后验概率（MAP），如下面的公式:")]),a._v(" "),t("p",[a._v("$$\nP(\\alpha|X) = \\frac{P(X|\\alpha)P(\\alpha)}{P(X)}\n$$\n其中等式左边$P(\\alpha |X)$表示的就是后验概率，优化目标即为$arg max_{\\alpha}P(\\alpha|X)$，即给定了观测值X以后使模型参数$\\alpha$出现的概率最大。等式右边的分子式$P(X|\\alpha)$即为似然函数，MAP考虑了模型参数$\\alpha$出现的先验概率$P(\\alpha)$。即就算似然概率$P(X|\\alpha)$很大，但是$\\alpha$出现的可能性很小，也更倾向于不考虑模型参数为$\\alpha$。")])])}),[],!1,null,null,null);t.default=p.exports}}]);