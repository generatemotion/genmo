(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{315:function(e,a,t){"use strict";t.r(a);var n=t(14),s=Object(n.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"摘要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#摘要"}},[e._v("#")]),e._v(" 摘要")]),e._v(" "),a("p",[e._v("我们建议使用 LLM 以 AI 舞蹈教练角色的形式为我们现有的舞蹈学习应用注入活力。当前的应用通过网络摄像头和姿势估计来指导用户完成舞蹈练习计划，以提供反馈。使用 LLM、语音识别、语音合成和情感识别，我们计划将界面从机械的屏幕点击体验转变为无需动手即可与教练交谈的互动。特别是，我们将使用 LLM 来宣布教练指导、提供鼓励、传达反馈并解释用户的口头意图。")]),e._v(" "),a("h1",{attrs:{id:"引言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引言"}},[e._v("#")]),e._v(" 引言")]),e._v(" "),a("p",[e._v("你不希望自己会跳舞吗？舞蹈编排很难学，但表演起来却很有趣、很自由。我们建议开发一个人工智能舞蹈教练来帮助你表达内心的节奏。\n我们现有的舞蹈教学应用程序[2]通过将舞蹈分解成更小的部分、创建课程计划以及（今年 UIST 的新功能[3]）使用姿势估计和设备的网络摄像头来计算分数并在你练习时提供反馈，来支持舞蹈练习。\n我们建议使用 LLM 为舞蹈学习体验注入活力，将其从网络工具转变为舞蹈教练。\n给定动作描述符和计算出的比较指标，我们将使用语言模型以直观和人性化的方式传达反馈。语言模型还可用于处理用户输入——例如，软件可能会询问用户“您还需要什么帮助？”，LLM 可以处理答案以及舞蹈结构和练习历史等其他背景信息，以生成定制的练习活动。\n舞蹈是一种具身体验；一种发展我们身体和思想之间联系的过程；一种让我们扎根于我们生活的物理空间的活动。使用 LLM 结合麦克风输入、语音识别、语音合成、扬声器输出，并增强情感识别和姿势估计的背景，我们希望“去屏幕化”界面——将注意力从计算机转移到舞者自己的身体和物理环境。\n舞蹈也是一种社交活动。当人们一起移动时，他们之间就会交换能量；建立了一种身体-精神-情感的联系。在 YouTube 视频前练习或在计算机的支持下练习时，这种能量交换是缺乏的。\n通过为计算机创建角色，我们希望为练习过程注入能量，从练习提升为一种令人愉快、有意义的活动。")]),e._v(" "),a("h1",{attrs:{id:"任务与计划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#任务与计划"}},[e._v("#")]),e._v(" 任务与计划")]),e._v(" "),a("p",[e._v("我们计划将 LLM 集成到我们的应用程序中的四个地方，如下所述。Will 将利用 Claude API 的长上下文支持，提供有关用户表现指标、估计情绪状态、活动历史、舞蹈性质、练习计划的组织和当前练习活动的广泛上下文信息，如图 2 所示。")]),e._v(" "),a("p",[e._v("任务 1（驱动口语用户界面）。学习舞蹈编排需要在开放空间中练习动作，因此，如果用户移动到设备上单击鼠标、触摸屏幕或阅读详细文本，则会破坏体验。我们计划使用 Claude API 为口语舞蹈指导界面提供支持，提供上下文并给出及时的指导，以提供多样化、个性化的响应。")]),e._v(" "),a("p",[e._v("子任务 1.1（宣布导航选项）。通常，我们希望用户遵循类似的整体学习模式：一次练习一个部分，并逐步将新部分与之前的部分整合在一起。但是，个人在每个部分上需要的练习量以及学习顺序的个人偏好存在很大差异。为了适应这一点，我们将创建一组选项（例如继续、重复、慢速重复、跳过等）供用户选择，并使用 Claude API 宣布这些选项。此外，我们将尝试使用 Claude API 对这些选项进行排名，并根据当前上下文和用户的情感需求（如反馈部分所述）提供智能建议。然后，我们将使用 Web Speech API 合成和播放公告。\n子任务 1.2（解释用户的口头意图）。口头界面的另一面是解释用户的语音。使用 Web\nSpeech API，我们将把用户的语音转换为文本，然后将其作为模板提示的一部分输入到 Claude API 中，要求 Claude\n识别用户想要哪个导航选项（如果没有明确的意图，则使用后备）。")]),e._v(" "),a("p",[e._v("任务 2（传达反馈）。我们为 LLM 设定的任务中最有趣的或许是向用户传达反馈。当前应用程序使用 Mediapipe [5] 框架对用户的网络摄像头源执行姿势估计，然后将其与源视频中舞者的姿势进行比较。我们可以根据用户和参考舞蹈的运动信息计算各种运动描述符 [4]。通过这种方式，我们可以得出用户当前和历史表现的详细图片；然而，将一组技术指标提炼成对用户有用的简明反馈可能很困难。我们将通过为 Claude LLM 提供这种计算出的运动上下文并通过使用问题解决模板和思维树技术 [7] 指导其在提供的反馈中进行深思熟虑来解决这一反馈挑战。\n子任务 2.1（实践建议）。作为反馈沟通的一部分，我们将使用 LLM 生成练习活动，针对用户在舞蹈中遇到困难的时期。\n子任务 2.2（同理心响应）。作为反馈生成的额外转折，我们将提示 Claude 将用户的情感需求纳入其决策中。正如 Wulf 和 Lewthwaite [6] 所提出的那样，动机是有效运动学习的关键。通过为 Claude LLM 提供表演历史和面部表情背景（使用 [1]），我们将使我们的 AI 舞蹈教练能够响应地调整其反馈 - 在有利时软化或保留批评性反馈，或者在用户有能力时变得更加坦率和苛刻。")])])}),[],!1,null,null,null);a.default=s.exports}}]);