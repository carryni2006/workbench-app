// 六级真题精听 · 语料库
// 每段：year 年份 / set 套别 / section 题型 / topic 话题 / text 原文 / audio 音频URL(可选) / vocab 生词
// 说明：下方 text 为「模拟题」文字（话题对标 2018–2026 真题），非官方逐字原文。
// 拿到官方真题原文后，把 text 替换成原文、audio 填上音频链接即可。

const LISTENING = [
  {
    year: '2018年6月', set: '第一套', section: 'Section A · 长对话',
    topic: '大学选课与课程学分',
    text: 'M: Hi, I was hoping you could help me figure out my schedule for next semester. I still need one more elective to graduate.\nW: Sure. What are you interested in? We have a new course on environmental science that has no prerequisites.\nM: That sounds useful, but I was told it involves a lot of field work. Is that true?\nW: There are two Saturday field trips, yes. But the lecture part is only twice a week, and the workload is manageable.',
    audio: '', vocab: 'elective n. 选修课；prerequisite n. 先修条件；field work 实地考察'
  },
  {
    year: '2018年6月', set: '第二套', section: 'Section C · 讲座',
    topic: '纳瓦霍密码员（code talker）',
    text: 'During the Second World War, a group of Navajo speakers served as code talkers. Because their language was unwritten and known to very few outsiders, it became the basis of an unbreakable military code. Messages that once took hours to encode and decode could now be sent in minutes.',
    audio: '', vocab: 'code talker n. 密码员；unbreakable adj. 无法破解的；encode v. 编码'
  },
  {
    year: '2018年12月', set: '第一套', section: 'Section A · 长对话',
    topic: '论文选题的师生讨论',
    text: 'W: Professor, I have narrowed my topic down to two ideas, but I cannot decide which one to write about.\nM: Tell me about both, and we can weigh the pros and cons together.\nW: The first is on urban green spaces, and the second is on how remote work has changed office design.\nM: Both are current. I would lean toward the first, because more published data is available for you to cite.',
    audio: '', vocab: 'narrow down 缩小范围；pros and cons 利弊；cite v. 引用'
  },
  {
    year: '2019年6月', set: '第一套', section: 'Section B · 短文',
    topic: '睡眠与记忆巩固',
    text: 'Scientists have long known that sleep helps us remember. A recent study shows that deep sleep, in particular, strengthens the connections between brain cells. Participants who took a short nap after learning a list of words recalled far more than those who stayed awake. The researchers suggest that a full night of sleep is even more effective.',
    audio: '', vocab: 'consolidate v. 巩固；recall v. 回忆；nap n. 小睡'
  },
  {
    year: '2019年12月', set: '第二套', section: 'Section C · 讲座',
    topic: '外来物种对生态系统的影响',
    text: 'When a plant or animal is introduced into a new environment, it can upset the local balance. Without natural enemies, the newcomer may spread rapidly and crowd out native species. One well-known example is the introduction of certain fish into lakes, which dramatically reduced the population of local frogs.',
    audio: '', vocab: 'invasive species 外来入侵物种；ecosystem n. 生态系统；crowd out 排挤'
  },
  {
    year: '2020年12月', set: '第一套', section: 'Section B · 短文',
    topic: '博物馆的数字转型',
    text: 'Museums around the world are going digital. Instead of only displaying objects in glass cases, many now offer virtual tours that visitors can take from home. Curators say this has opened their collections to a much wider audience. The challenge, however, is keeping the experience interactive enough to hold people\'s attention.',
    audio: '', vocab: 'curator n. 馆长；virtual tour 虚拟游览；interactive adj. 互动的'
  },
  {
    year: '2021年6月', set: '第一套', section: 'Section A · 长对话',
    topic: '求职面试与实习经历',
    text: 'M: You mentioned on your resume that you interned at a tech company last summer. What did you learn there?\nW: I worked on the operations team, mostly analyzing user data and writing weekly reports.\nM: That is quite relevant to this role. How would you describe your biggest takeaway?\nW: Learning to communicate findings clearly to people who are not data experts.',
    audio: '', vocab: 'intern v. 实习；resume n. 简历；takeaway n. 收获'
  },
  {
    year: '2021年12月', set: '第二套', section: 'Section C · 讲座',
    topic: '城市热岛效应',
    text: 'Cities are often several degrees warmer than the countryside around them, a phenomenon known as the urban heat island effect. Buildings and roads absorb and hold heat during the day and release it at night. Planting more trees and using lighter building materials are two simple ways to cool a city down.',
    audio: '', vocab: 'urban heat island 城市热岛；absorb v. 吸收；phenomenon n. 现象'
  },
  {
    year: '2022年6月', set: '第一套', section: 'Section B · 短文',
    topic: '微塑料污染',
    text: 'Microplastics are tiny pieces of plastic smaller than five millimeters. They come from larger plastic waste that breaks down over time, and they have been found in oceans, rivers, and even drinking water. Researchers are still studying how these particles affect human health, but early findings have raised concern.',
    audio: '', vocab: 'microplastic n. 微塑料；particle n. 微粒；break down 分解'
  },
  {
    year: '2023年6月', set: '第一套', section: 'Section A · 长对话',
    topic: '线上课程与传统课堂',
    text: 'W: Have you taken any online courses this semester?\nM: One, on data science. I like the flexibility, but I miss the discussion in a real classroom.\nW: I agree. I learn better when I can ask questions on the spot.\nM: Exactly. Maybe the best model is a mix of both.',
    audio: '', vocab: 'flexibility n. 灵活性；on the spot 当场；model n. 模式'
  },
  {
    year: '2024年6月', set: '第一套', section: 'Section C · 讲座',
    topic: '耐心与幸福感',
    text: 'Recent research suggests that patience is closely linked to happiness. In one study, people who were willing to wait for a larger reward later reported higher life satisfaction than those who preferred a smaller reward immediately. Patience, the researchers argue, is not just a virtue but a skill that can be practiced.',
    audio: '', vocab: 'patience n. 耐心；virtue n. 美德；life satisfaction 生活满意度'
  },
  {
    year: '2024年12月', set: '第一套', section: 'Section C · 讲座',
    topic: '七条普世道德规则',
    text: 'Anthropologists have found that many human societies, however different, share a small set of moral rules. These include helping your family, returning favors, and being courageous. The discovery suggests that a sense of right and wrong is deeply rooted in human nature, rather than purely shaped by culture.',
    audio: '', vocab: 'anthropologist n. 人类学家；moral adj. 道德的；courageous adj. 勇敢的'
  },
  {
    year: '2025年6月', set: '第一套', section: 'Section B · 短文',
    topic: '人工智能与就业',
    text: 'As artificial intelligence becomes more capable, many workers worry about losing their jobs. Economists point out, however, that new technology has always created new kinds of work. The key, they say, is for workers to keep learning and to develop skills that machines cannot easily copy, such as creativity and empathy.',
    audio: '', vocab: 'artificial intelligence 人工智能；empathy n. 同理心；capable adj. 有能力的'
  },
  {
    year: '2026年6月', set: '第一套', section: 'Section A · 长对话',
    topic: '毕业后的职业规划',
    text: 'M: So, have you decided what you will do after graduation?\nW: I am still torn between going to graduate school and looking for a job. My parents think further study is safer.\nM: That is a common view. But gaining work experience first can also help you figure out what you really want.\nW: True. I think I will apply to both and see what happens.',
    audio: '', vocab: 'be torn between 在…之间纠结；graduate school 研究生院；apply v. 申请'
  }
];
