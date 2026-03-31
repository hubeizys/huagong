import type { Topic, Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'daily',
    name: '身边的化工',
    icon: '🏠',
    description: '日用与食品中的化学原理'
  },
  {
    id: 'energy',
    name: '能源与材料',
    icon: '⚡',
    description: '工业核心与新能源技术'
  },
  {
    id: 'environment',
    name: '环境与绿色化工',
    icon: '🌱',
    description: '环保技术与可持续发展'
  },
  {
    id: 'traditional',
    name: '传统化工工艺',
    icon: '🏭',
    description: '经典工业工艺解析'
  },
  {
    id: 'fine',
    name: '精细与生物化工',
    icon: '💊',
    description: '高附加值产品制造'
  },
  {
    id: 'frontier',
    name: '前沿与交叉',
    icon: '🚀',
    description: '未来趋势与新兴技术'
  },
  {
    id: 'safety',
    name: '过程安全',
    icon: '⚠️',
    description: '安全工程与事故分析'
  },
  {
    id: 'computing',
    name: '计算与智能化',
    icon: '💻',
    description: '现代化工计算工具'
  }
];

export const topics: Topic[] = [
  // ========== 身边的化工 ==========
  {
    id: 'shampoo',
    title: '洗发水为什么能起泡又去油？',
    category: '身边的化工',
    categoryId: 'daily',
    difficulty: 'easy',
    summary: '揭秘表面活性剂的双亲分子结构、胶束形成和HLB值原理',
    coreConcept: '表面活性剂分子具有亲水头和疏水尾，在水中形成胶束包裹油污，通过HLB值（亲水亲油平衡值）衡量其性能。洗发水中的阴离子表面活性剂（如十二烷基硫酸钠）降低水的表面张力，产生丰富泡沫。',
    theory: ['表面化学', '胶体与界面', 'HLB值理论', '表面张力'],
    resources: [
      { title: '《表面活性剂化学》', type: 'book' },
      { title: 'Khan Academy: Surface Tension', type: 'video' }
    ],
    estimatedTime: '1-2天',
    experiment: '在家测试不同洗发水的泡沫稳定性，记录泡沫高度随时间变化'
  },
  {
    id: 'instant-noodle',
    title: '方便面调料包为什么那么香？',
    category: '身边的化工',
    categoryId: 'daily',
    difficulty: 'easy',
    summary: '美拉德反应、香精微胶囊化和风味化学的完美结合',
    coreConcept: '调料包中的肉香主要来自美拉德反应（氨基酸与还原糖在高温下的反应），产生数百种挥发性风味物质。微胶囊技术将香精包裹在阿拉伯胶或麦芽糊精中，防止挥发和氧化，热水冲泡时释放。',
    theory: ['美拉德反应', '反应动力学', '微胶囊技术', '传质'],
    resources: [
      { title: '《食品化学》', type: 'book' },
      { title: '美拉德反应机理论文', type: 'article' }
    ],
    estimatedTime: '1-2天'
  },
  {
    id: 'sunscreen',
    title: '防晒霜的SPF值是怎么测出来的？',
    category: '身边的化工',
    categoryId: 'daily',
    difficulty: 'medium',
    summary: '紫外线吸收机理、纳米TiO₂分散和SPF测试标准',
    coreConcept: 'SPF（防晒指数）= 使用防晒霜后皮肤晒伤所需时间 / 未使用时的晒伤时间。化学防晒剂（如阿伏苯宗）吸收UVA/UVB转化为热能，物理防晒剂（纳米TiO₂、ZnO）反射散射紫外线。纳米颗粒需要良好分散防止团聚。',
    theory: ['光化学', '颗粒分散', '化妆品配方', '紫外光谱'],
    resources: [
      { title: '《化妆品工艺学》', type: 'book' },
      { title: 'FDA SPF测试标准', type: 'article' }
    ],
    estimatedTime: '2-3天'
  },
  {
    id: 'beer-bottle',
    title: '为什么啤酒瓶是绿色的？',
    category: '身边的化工',
    categoryId: 'daily',
    difficulty: 'easy',
    summary: '光氧化反应、啤酒中的异葎草酮和包装材料的光阻隔性',
    coreConcept: '啤酒中的异葎草酮（苦味物质）在光照下会发生光氧化反应，产生3-甲基-2-丁烯-1-硫醇（臭鼬味）。绿色/棕色玻璃可以阻挡400-500nm波长的光，保护啤酒风味。现代也有使用透明瓶加铝箔标签或特殊涂层。',
    theory: ['光化学', '氧化还原', '材料科学', '食品包装'],
    resources: [
      { title: '《啤酒工艺学》', type: 'book' }
    ],
    estimatedTime: '1天'
  },
  {
    id: 'nonstick-pan',
    title: '不粘锅的涂层会致癌吗？',
    category: '身边的化工',
    categoryId: 'daily',
    difficulty: 'easy',
    summary: '聚四氟乙烯(PTFE)结构、自由基聚合和热分解温度',
    coreConcept: '特氟龙（PTFE）是四氟乙烯的聚合物，C-F键能极高（485 kJ/mol），化学惰性极强。分解温度约260°C，正常烹饪（<200°C）安全。分解产物包括氟光气等有毒物质，但日常使用不会达到分解温度。',
    theory: ['高分子化学', '聚合物热稳定性', '自由基聚合'],
    resources: [
      { title: '《高分子材料》', type: 'book' },
      { title: 'PTFE毒理学研究综述', type: 'article' }
    ],
    estimatedTime: '1-2天'
  },
  {
    id: 'coke-mentos',
    title: '为什么可乐加曼妥思会喷发？',
    category: '身边的化工',
    categoryId: 'daily',
    difficulty: 'easy',
    summary: '成核理论、气体过饱和和表面粗糙度对气泡生长的影响',
    coreConcept: '可乐中溶解的CO₂处于过饱和状态（亨利定律）。曼妥思表面布满微观凹凸（成核位点），大幅降低气泡形成所需的活化能。阿拉伯胶成分降低表面张力，加速气泡生长。不是化学反应，而是物理成核过程。',
    theory: ['相平衡', '传质', '界面现象', '亨利定律'],
    resources: [
      { title: '成核理论论文', type: 'article' },
      { title: 'TED-Ed: Coke & Mentos', type: 'video' }
    ],
    estimatedTime: '1天',
    experiment: '测试不同糖果（曼妥思、跳跳糖、冰糖）的喷发效果，记录喷发高度'
  },

  // ========== 能源与材料 ==========
  {
    id: 'oil-refining',
    title: '石油是怎么变成汽油的？',
    category: '能源与材料',
    categoryId: 'energy',
    difficulty: 'medium',
    summary: '原油蒸馏切割、催化裂化(FCC)机理和辛烷值提升',
    coreConcept: '原油先经蒸馏按沸点切割为馏分（石脑油、柴油、渣油等）。汽油主要通过催化裂化（FCC）将重质油转化为轻质烃，使用Y型沸石催化剂。重整工艺将直链烷烃转化为芳烃和异构烷烃，提高辛烷值。',
    theory: ['精馏原理', '催化反应工程', '碳正离子化学', '炼油工艺'],
    resources: [
      { title: '《石油炼制工程》', type: 'book' },
      { title: '催化裂化反应机理', type: 'article' }
    ],
    estimatedTime: '3-5天'
  },
  {
    id: 'lithium-battery',
    title: '锂电池为什么会爆炸？',
    category: '能源与材料',
    categoryId: 'energy',
    difficulty: 'hard',
    summary: 'SEI膜形成、热失控链式反应和电解质分解',
    coreConcept: '首次充电时负极形成SEI（固体电解质界面膜），保护电解液不再分解。过充/短路时温度升高引发链式反应：SEI分解→电解液与负极反应→隔膜熔化→内短路→热失控。三元材料（NCM）比磷酸铁锂更容易热失控。',
    theory: ['电化学', '反应动力学', '热稳定性', '电池材料'],
    resources: [
      { title: '《锂离子电池》', type: 'book' },
      { title: '热失控机理研究', type: 'article' }
    ],
    estimatedTime: '5-7天'
  },
  {
    id: 'hydrogen-energy',
    title: '氢能源真的清洁吗？',
    category: '能源与材料',
    categoryId: 'energy',
    difficulty: 'hard',
    summary: '从制氢到用氢全链条：蒸汽重整、水电解、燃料电池和氢脆',
    coreConcept: '灰氢（天然气重整）有CO₂排放，蓝氢加CCUS，绿氢（电解水）最清洁但成本高。PEM燃料电池将氢化学能直接转为电能（效率60%），产物只有水。氢脆是氢原子渗入金属晶格导致脆化，需特殊材料。',
    theory: ['催化反应', '电化学', '材料腐蚀', '生命周期评价'],
    resources: [
      { title: '《氢能与燃料电池》', type: 'book' },
      { title: 'IEA氢能报告', type: 'article' }
    ],
    estimatedTime: '5-7天'
  },
  {
    id: 'plastic-production',
    title: '塑料是怎么从石油变来的？',
    category: '能源与材料',
    categoryId: 'energy',
    difficulty: 'medium',
    summary: '乙烯裂解、聚合机理和分子量控制',
    coreConcept: '石脑油蒸汽裂解（800-900°C）产生乙烯、丙烯等单体。聚合反应：自由基聚合（高压聚乙烯）、配位聚合（Ziegler-Natta催化剂生产HDPE/PP）、离子聚合。分子量由链转移剂和反应条件控制。',
    theory: ['化学反应工程', '高分子合成', '催化化学'],
    resources: [
      { title: '《高分子化学》', type: 'book' }
    ],
    estimatedTime: '3-4天'
  },
  {
    id: 'carbon-fiber',
    title: '碳纤维为什么比钢还强？',
    category: '能源与材料',
    categoryId: 'energy',
    difficulty: 'hard',
    summary: '聚丙烯腈(PAN)原丝、预氧化与碳化、石墨微晶取向',
    coreConcept: 'PAN纤维经200-300°C预氧化（环化、脱氢）形成梯形结构，再经1000-1500°C碳化去除非碳元素，3000°C石墨化形成高度取向的石墨微晶层。碳-碳键键能高且沿纤维轴取向，比强度是钢的5倍。',
    theory: ['材料科学', '热解反应', '固相转变', '晶体学'],
    resources: [
      { title: '《碳纤维及其复合材料》', type: 'book' }
    ],
    estimatedTime: '4-5天'
  },
  {
    id: 'solar-panel',
    title: '光伏板怎么把阳光变成电？',
    category: '能源与材料',
    categoryId: 'energy',
    difficulty: 'medium',
    summary: 'PN结原理、硅提纯（西门子法）和多晶硅薄膜',
    coreConcept: '硅中掺杂磷（N型）和硼（P型）形成PN结，光照产生电子-空穴对，内建电场分离载流子产生电流。西门子法：Si + 3HCl → SiHCl₃ + H₂，再还原得到高纯硅（9N）。PERC、TOPCon、HJT是主流电池技术。',
    theory: ['半导体物理', '化学气相沉积(CVD)', '光伏材料'],
    resources: [
      { title: '《太阳能电池材料》', type: 'book' }
    ],
    estimatedTime: '4-5天'
  },

  // ========== 环境与绿色化工 ==========
  {
    id: 'activated-sludge',
    title: '污水厂的活性污泥是怎么工作的？',
    category: '环境与绿色化工',
    categoryId: 'environment',
    difficulty: 'medium',
    summary: '微生物代谢、曝气传氧和污泥龄控制',
    coreConcept: '活性污泥是微生物（细菌、原生动物）的絮状体，通过同化作用将有机物转化为CO₂、水和生物质。曝气提供溶解氧（维持>2mg/L），污泥龄(SRT)控制微生物群落。BOD去除率可达95%以上。',
    theory: ['生物反应工程', '传质', '微生物学', '废水处理'],
    resources: [
      { title: '《水污染控制工程》', type: 'book' }
    ],
    estimatedTime: '3-4天'
  },
  {
    id: 'acid-rain',
    title: '酸雨是怎么形成的？怎么防治？',
    category: '环境与绿色化工',
    categoryId: 'environment',
    difficulty: 'medium',
    summary: 'SO₂氧化机理、烟气脱硫（石灰石-石膏法）和催化脱硝',
    coreConcept: 'SO₂在大气中被氧化为SO₃，与水形成H₂SO₄。石灰石-石膏法：CaCO₃ + SO₂ → CaSO₃ + CO₂，再氧化为CaSO₄·2H₂O（石膏）。SCR脱硝：4NO + 4NH₃ + O₂ → 4N₂ + 6H₂O，使用V₂O₅-WO₃/TiO₂催化剂。',
    theory: ['气相反应', '吸收塔设计', '催化化学', '大气污染控制'],
    resources: [
      { title: '《大气污染控制工程》', type: 'book' }
    ],
    estimatedTime: '3-4天'
  },
  {
    id: 'biodegradable-plastic',
    title: '可降解塑料真的可降解吗？',
    category: '环境与绿色化工',
    categoryId: 'environment',
    difficulty: 'medium',
    summary: 'PLA/PBS合成、酶催化水解和堆肥条件优化',
    coreConcept: 'PLA（聚乳酸）由乳酸缩聚或开环聚合得到，在堆肥条件（58°C，湿度50-60%）下6个月降解为CO₂和水。酶（蛋白酶、脂肪酶）催化水解酯键。降解速率受结晶度、分子量、温度影响。',
    theory: ['生物降解机理', '聚合-解聚平衡', '酶催化'],
    resources: [
      { title: '《生物降解高分子材料》', type: 'book' }
    ],
    estimatedTime: '3-4天'
  },
  {
    id: 'carbon-capture',
    title: '碳捕捉技术靠谱吗？',
    category: '环境与绿色化工',
    categoryId: 'environment',
    difficulty: 'hard',
    summary: '胺法吸收CO₂、膜分离和地质封存',
    coreConcept: 'MEA胺法：CO₂ + 2RNH₂ → RNHCOO⁻ + RNH₃⁺，吸收热约80kJ/mol，再生能耗高（占电厂输出20-30%）。膜分离基于CO₂/N₂选择性渗透。CCUS全流程成本约$50-100/吨CO₂。地质封存注入深层盐水层或枯竭油气田。',
    theory: ['吸收动力学', '相平衡', '传质强化', 'CCUS技术'],
    resources: [
      { title: '《碳捕集与封存》', type: 'book' },
      { title: 'IPCC CCUS报告', type: 'article' }
    ],
    estimatedTime: '5-7天'
  },
  {
    id: 'seawater-desalination',
    title: '为什么海水淡化这么贵？',
    category: '环境与绿色化工',
    categoryId: 'environment',
    difficulty: 'hard',
    summary: '反渗透膜原理、渗透压计算和膜污染控制',
    coreConcept: '反渗透需要克服渗透压（π = iCRT，海水约2.5MPa），操作压力5-8MPa。膜材料（聚酰胺复合膜）对NaCl截留率>99%。能耗约3-4 kWh/m³，主要成本是电力和膜更换。浓差极化和膜污染降低通量。',
    theory: ['膜分离', '溶液热力学', '浓差极化', '传质'],
    resources: [
      { title: '《膜分离技术》', type: 'book' }
    ],
    estimatedTime: '4-5天'
  },

  // ========== 传统化工工艺 ==========
  {
    id: 'haber-process',
    title: '合成氨工艺为什么能获得两次诺贝尔奖？',
    category: '传统化工工艺',
    categoryId: 'traditional',
    difficulty: 'hard',
    summary: '哈伯法、铁系催化剂、高压反应器设计和热集成',
    coreConcept: 'N₂ + 3H₂ ⇌ 2NH₃，ΔH = -92 kJ/mol。铁系催化剂（Fe₃O₄ + K₂O + Al₂O₃），反应条件400-500°C、15-25MPa。单程转化率15%，未反应气循环。热集成回收反应热预热原料气。全球产量1.5亿吨/年，养活40%人口。',
    theory: ['化学平衡', '催化原理', '过程优化', '反应器设计'],
    resources: [
      { title: '《合成氨工艺》', type: 'book' },
      { title: '诺贝尔奖官网：哈伯', type: 'article' }
    ],
    estimatedTime: '5-7天'
  },
  {
    id: 'sulfuric-acid',
    title: '硫酸为什么被称为"化工之母"？',
    category: '传统化工工艺',
    categoryId: 'traditional',
    difficulty: 'medium',
    summary: '接触法、SO₂催化氧化(V₂O₅)和吸收塔设计',
    coreConcept: 'S + O₂ → SO₂，2SO₂ + O₂ ⇌ 2SO₃（V₂O₅催化剂，400-600°C）。SO₃用98%硫酸吸收（不是水，避免酸雾）。全球产量约3亿吨/年，用于化肥、冶金、化工。双膜理论解释吸收过程。',
    theory: ['气固催化', '反应器放大', '吸收传质'],
    resources: [
      { title: '《硫酸工艺学》', type: 'book' }
    ],
    estimatedTime: '3-4天'
  },
  {
    id: 'caustic-soda',
    title: '烧碱是怎么生产的？',
    category: '传统化工工艺',
    categoryId: 'traditional',
    difficulty: 'medium',
    summary: '离子膜电解、氯碱平衡和膜材料选择',
    coreConcept: '2NaCl + 2H₂O → 2NaOH + Cl₂ + H₂（电解）。离子膜法使用全氟磺酸/羧酸复合膜，只允许Na⁺通过，OH⁻和Cl⁻被阻挡。电流效率>95%，能耗约2100 kWh/吨NaOH。氯碱平衡影响装置经济性。',
    theory: ['电化学工程', '膜分离', '物料衡算', '离子膜技术'],
    resources: [
      { title: '《氯碱工业》', type: 'book' }
    ],
    estimatedTime: '3-5天'
  },
  {
    id: 'glass-transparent',
    title: '玻璃为什么是透明的？',
    category: '传统化工工艺',
    categoryId: 'traditional',
    difficulty: 'easy',
    summary: 'SiO₂网络结构、熔融态粘度和退火消除应力',
    coreConcept: '普通玻璃是Na₂O-CaO-SiO₂体系，SiO₄四面体形成无序网络，没有晶体结构中的周期性势场变化，可见光（400-700nm）不被吸收或散射。带隙>3eV，不吸收可见光。退火消除内应力防止自裂。',
    theory: ['硅酸盐化学', '玻璃态物理', '材料光学'],
    resources: [
      { title: '《玻璃工艺学》', type: 'book' }
    ],
    estimatedTime: '2-3天'
  },
  {
    id: 'cement-hardening',
    title: '水泥是怎么变硬的？',
    category: '传统化工工艺',
    categoryId: 'traditional',
    difficulty: 'medium',
    summary: '硅酸三钙水化、硬化机理和添加剂作用',
    coreConcept: '硅酸三钙（C₃S）水化：2C₃S + 6H₂O → C₃S₂H₃ + 3Ca(OH)₂，生成C-S-H凝胶（强度来源）和氢氧化钙。水化热约500J/g，大体积混凝土需控制温升。缓凝剂（石膏）与铝酸三钙反应生成钙矾石延缓凝结。',
    theory: ['固相反应', '结晶学', '流变学', '胶凝材料'],
    resources: [
      { title: '《水泥工艺学》', type: 'book' }
    ],
    estimatedTime: '3-4天'
  },
  {
    id: 'fertilizer-coating',
    title: '化肥为什么要"包衣"？',
    category: '传统化工工艺',
    categoryId: 'traditional',
    difficulty: 'easy',
    summary: '控释机理、膜材料选择和养分释放动力学',
    coreConcept: '包衣肥料（聚合物或硫包衣）通过膜扩散控制养分释放速率，匹配作物需求曲线。一级释放动力学：dC/dt = -kC。减少养分流失（淋溶、挥发），提高利用率（从30%到60%），减少环境污染。',
    theory: ['传质控制', '微胶囊技术', '释放动力学'],
    resources: [
      { title: '《肥料工艺学》', type: 'book' }
    ],
    estimatedTime: '2-3天'
  },

  // ========== 精细与生物化工 ==========
  {
    id: 'aspirin-synthesis',
    title: '阿司匹林是怎么合成的？',
    category: '精细与生物化工',
    categoryId: 'fine',
    difficulty: 'easy',
    summary: '酰化反应、结晶纯化和收率计算',
    coreConcept: '水杨酸 + 乙酸酐 → 阿司匹林 + 乙酸（硫酸催化，85-90°C）。反应是酰基亲核取代，水杨酸的酚羟基被乙酰化。结晶纯化利用溶解度差异，重结晶提高纯度。收率计算：实际产量/理论产量×100%。',
    theory: ['有机合成', '分离工程', '结晶学', '收率计算'],
    resources: [
      { title: '《药物化学实验》', type: 'book' }
    ],
    estimatedTime: '2-3天',
    experiment: '实验室合成阿司匹林，计算收率，测定熔点验证纯度'
  },
  {
    id: 'insulin-production',
    title: '胰岛素是怎么从细菌里长出来的？',
    category: '精细与生物化工',
    categoryId: 'fine',
    difficulty: 'hard',
    summary: '基因工程菌构建、高密度发酵和蛋白质纯化',
    coreConcept: '将人胰岛素基因插入大肠杆菌质粒，构建工程菌。高密度发酵（细胞密度>100g/L），诱导表达包涵体。裂解细胞、溶解包涵体、复性、酶切（去除C肽）、层析纯化（离子交换、凝胶过滤）。',
    theory: ['生物反应工程', '层析分离', '蛋白质化学', '基因工程'],
    resources: [
      { title: '《生物制药技术》', type: 'book' }
    ],
    estimatedTime: '5-7天'
  },
  {
    id: 'perfume-notes',
    title: '香水的前调中调后调是什么原理？',
    category: '精细与生物化工',
    categoryId: 'fine',
    difficulty: 'easy',
    summary: '挥发性差异、香精配伍和皮肤滞留机理',
    coreConcept: '前调（柑橘类，蒸气压高，15分钟挥发）、中调（花香，1-4小时）、后调（木香/麝香，蒸气压低，持续数小时）。香精气相色谱分析各组分保留时间。皮肤滞留与香精分子量和极性相关。',
    theory: ['蒸气压', '传质', '嗅觉化学', '香料化学'],
    resources: [
      { title: '《香料化学》', type: 'book' }
    ],
    estimatedTime: '2-3天'
  },
  {
    id: 'antibiotic',
    title: '抗生素是怎么杀菌的？',
    category: '精细与生物化工',
    categoryId: 'fine',
    difficulty: 'hard',
    summary: '发酵过程优化、提取精制和作用机理',
    coreConcept: '青霉素由产黄青霉发酵生产，碳源（乳糖/葡萄糖）、氮源（玉米浆）、前体（苯乙酸）。代谢调控优化产量。溶剂萃取（乙酸丁酯）分离。作用机理：抑制细菌细胞壁肽聚糖合成，人体细胞无细胞壁故无毒。',
    theory: ['微生物代谢', '分离纯化', '药物化学', '发酵工程'],
    resources: [
      { title: '《抗生素生产工艺》', type: 'book' }
    ],
    estimatedTime: '4-5天'
  },
  {
    id: 'msg-production',
    title: '味精(谷氨酸钠)是怎么生产的？',
    category: '精细与生物化工',
    categoryId: 'fine',
    difficulty: 'medium',
    summary: '谷氨酸发酵、等电点结晶和离子交换',
    coreConcept: '谷氨酸棒杆菌发酵葡萄糖生成谷氨酸（好氧发酵，控制生物素亚适量）。等电点结晶：谷氨酸等电点pH 3.22，溶解度最低析出。离子交换进一步纯化。中和为谷氨酸钠（味精），纯度>99%。',
    theory: ['代谢工程', '结晶学', '吸附分离', '发酵工程'],
    resources: [
      { title: '《氨基酸工艺学》', type: 'book' }
    ],
    estimatedTime: '3-4天'
  },

  // ========== 前沿与交叉 ==========
  {
    id: '3d-printing',
    title: '3D打印的材料是怎么"固化"的？',
    category: '前沿与交叉',
    categoryId: 'frontier',
    difficulty: 'medium',
    summary: '光固化树脂、层层堆积和烧结机理',
    coreConcept: 'SLA（光固化）：光引发剂吸收紫外光产生自由基，引发丙烯酸酯聚合。每层25-100μm，激光扫描固化。SLS（选择性激光烧结）：CO₂激光烧结尼龙粉末，粉末床逐层下降。后处理去除支撑/未烧结粉末。',
    theory: ['光聚合', '材料流变', '快速成型', '激光加工'],
    resources: [
      { title: '《增材制造技术》', type: 'book' }
    ],
    estimatedTime: '3-4天'
  },
  {
    id: 'graphene',
    title: '石墨烯为什么被称为"神奇材料"？',
    category: '前沿与交叉',
    categoryId: 'frontier',
    difficulty: 'hard',
    summary: '机械剥离法、CVD生长和sp²杂化结构',
    coreConcept: '石墨烯是单层碳原子sp²杂化形成的六边形蜂窝结构，厚度0.34nm。电子迁移率200,000 cm²/V·s，强度130GPa，导热率5000 W/m·K。CVD法：CH₄在Cu箔上高温（1000°C）裂解生长，可大面积制备。',
    theory: ['纳米材料', '晶体生长', '二维材料', '碳材料'],
    resources: [
      { title: '《石墨烯材料》', type: 'book' },
      { title: 'Novoselov诺贝尔奖论文', type: 'article' }
    ],
    estimatedTime: '5-7天'
  },
  {
    id: 'cultured-meat',
    title: '人工肉是怎么做出来的？',
    category: '前沿与交叉',
    categoryId: 'frontier',
    difficulty: 'hard',
    summary: '植物蛋白组织化、细胞培养和支架材料',
    coreConcept: '植物肉：高水分挤压（剪切+热）使大豆/豌豆蛋白纤维化形成肉质感。细胞培养肉：动物肌肉干细胞在生物反应器扩增，接种到可食用支架（海藻酸钠、纤维素）上分化形成肌肉组织。培养基成本是主要障碍。',
    theory: ['挤出加工', '细胞工程', '食品化学', '组织工程'],
    resources: [
      { title: '《细胞培养肉技术》', type: 'book' }
    ],
    estimatedTime: '4-5天'
  },
  {
    id: 'chip-lithography',
    title: '芯片制造中的"光刻"是什么？',
    category: '前沿与交叉',
    categoryId: 'frontier',
    difficulty: 'expert',
    summary: '光刻胶化学、紫外曝光和刻蚀工艺',
    coreConcept: '光刻胶（光敏聚合物）旋涂在硅片上，掩模版紫外线曝光，正胶曝光区溶解，负胶曝光区交联不溶。EUV光刻（13.5nm波长）实现7nm以下制程。刻蚀（干法/湿法）去除暴露区域，形成电路图案。',
    theory: ['光化学', '微加工', '洁净室技术', '半导体工艺'],
    resources: [
      { title: '《半导体制造工艺》', type: 'book' }
    ],
    estimatedTime: '7-10天'
  },
  {
    id: 'vaccine-cold-chain',
    title: '为什么疫苗要冷链运输？',
    category: '前沿与交叉',
    categoryId: 'frontier',
    difficulty: 'medium',
    summary: '蛋白质变性热力学、冷冻保护剂和玻璃态保存',
    coreConcept: 'mRNA疫苗中的脂质纳米颗粒和蛋白质疫苗在高温下会聚集变性失活。冷冻保护剂（海藻糖、甘油）通过氢键稳定蛋白质结构，防止冰晶损伤。玻璃态（Tg以下）分子运动冻结，可长期稳定保存。',
    theory: ['生物热力学', '相变', '稳定剂设计', '蛋白质科学'],
    resources: [
      { title: '《疫苗工程》', type: 'book' }
    ],
    estimatedTime: '3-4天'
  },
  {
    id: 'nano-silver',
    title: '纳米银为什么能抗菌？',
    category: '前沿与交叉',
    categoryId: 'frontier',
    difficulty: 'medium',
    summary: '银离子释放、细胞膜破坏和纳米效应',
    coreConcept: '纳米银（10-100nm）比表面积大，释放Ag⁺离子。Ag⁺与细菌细胞膜蛋白巯基结合，破坏膜完整性；进入细胞后与DNA结合抑制复制。纳米尺寸效应增强抗菌活性，但可能产生细胞毒性。',
    theory: ['纳米毒理', '胶体化学', '抗菌机理', '纳米材料'],
    resources: [
      { title: '《纳米材料抗菌机理》', type: 'article' }
    ],
    estimatedTime: '3-4天'
  },

  // ========== 过程安全 ==========
  {
    id: 'chemical-explosion',
    title: '化工厂为什么会爆炸？',
    category: '过程安全',
    categoryId: 'safety',
    difficulty: 'hard',
    summary: 'T²准则、蒸气云爆炸和多米诺效应',
    coreConcept: '反应失控：放热反应速率随温度指数增长（Arrhenius），散热线性增长，当产热>散热时温度失控（T²准则）。蒸气云爆炸：可燃物泄漏形成气云，遇点火源产生爆轰。多米诺效应：一个事故引发连锁反应。',
    theory: ['反应失控', '热稳定性', 'HAZOP分析', '安全工程'],
    resources: [
      { title: '《化工过程安全》', type: 'book' },
      { title: 'CSB事故调查报告', type: 'article' }
    ],
    estimatedTime: '5-7天'
  },
  {
    id: 'inerting',
    title: '为什么化工装置要"吹扫"和"置换"？',
    category: '过程安全',
    categoryId: 'safety',
    difficulty: 'medium',
    summary: '爆炸极限、惰化原理和安全联锁',
    coreConcept: '可燃气体在空气中存在爆炸极限（LEL-UEL）。氮气吹扫降低氧浓度至极限氧浓度(LOC)以下，消除燃烧三要素中的氧化剂。置换是用惰性气体替换设备内危险介质。安全联锁(SIS)在异常时自动切断。',
    theory: ['燃烧化学', '爆炸极限', '安全工程', '过程控制'],
    resources: [
      { title: '《化工安全设计》', type: 'book' }
    ],
    estimatedTime: '3-4天'
  },
  {
    id: 'bp-texas',
    title: 'BP德州炼油厂事故教会我们什么？',
    category: '过程安全',
    categoryId: 'safety',
    difficulty: 'hard',
    summary: '溢流工况、报警管理和安全文化',
    coreConcept: '2005年BP德州事故：分馏塔溢流，液体进入火炬系统引发爆炸，15人死亡。根本原因：溢流工况未识别、报警泛滥（同一时刻200+报警）、安全文化薄弱（成本削减优先于安全）。引出过程安全管理体系(PSM)。',
    theory: ['过程安全管理体系', '事故调查', '安全文化', '风险管理'],
    resources: [
      { title: 'CSB: BP Texas City Report', type: 'article' },
      { title: '《过程安全管理体系》', type: 'book' }
    ],
    estimatedTime: '4-5天'
  },
  {
    id: 'reactor-scale-up',
    title: '为什么反应器要"放大"？放大为什么这么难？',
    category: '过程安全',
    categoryId: 'safety',
    difficulty: 'expert',
    summary: '相似理论、混合效应和传热限制',
    coreConcept: '实验室到工业规模（1L→10m³），几何相似但物理过程不相似。混合时间随规模增加（t ∝ L²），反应时间不变，导致混合控制与动力学控制转变。传热面积/体积比下降（A/V ∝ 1/L），难以维持等温。需逐级放大（小试→中试→工业）。',
    theory: ['反应工程', '传递现象', '尺度效应', '放大理论'],
    resources: [
      { title: '《化学反应工程放大》', type: 'book' }
    ],
    estimatedTime: '7-10天'
  },

  // ========== 计算与智能化 ==========
  {
    id: 'excel-distillation',
    title: '用Excel模拟一个精馏塔',
    category: '计算与智能化',
    categoryId: 'computing',
    difficulty: 'medium',
    summary: 'McCabe-Thiele法、逐板计算和收敛技巧',
    coreConcept: 'McCabe-Thiele法：在y-x图上操作线与平衡线之间画阶梯求理论板数。Excel实现：输入相对挥发度、回流比、进料组成，用公式计算每板气液组成，迭代至收敛。VBA可自动化循环计算。',
    theory: ['分离工程', '数值方法', 'Excel建模'],
    resources: [
      { title: '《化工计算》', type: 'book' },
      { title: 'Excel精馏模拟教程', type: 'video' }
    ],
    estimatedTime: '3-5天',
    experiment: '用Excel建立苯-甲苯精馏计算表，改变回流比观察板数变化'
  },
  {
    id: 'python-yield',
    title: '用Python预测反应产率',
    category: '计算与智能化',
    categoryId: 'computing',
    difficulty: 'hard',
    summary: '机器学习、反应描述符和数据驱动建模',
    coreConcept: '收集反应数据（底物、催化剂、条件→产率），提取分子描述符（分子量、官能团、电子性质），用随机森林/神经网络训练预测模型。scikit-learn实现，交叉验证评估。可预测未实验条件下的产率，指导实验设计。',
    theory: ['数据科学', '反应动力学', '统计学习', '机器学习'],
    resources: [
      { title: '《Python机器学习》', type: 'book' },
      { title: 'scikit-learn官方文档', type: 'article' }
    ],
    estimatedTime: '5-7天',
    experiment: '用Suzuki偶联反应数据集训练产率预测模型'
  },
  {
    id: 'aspen-simulation',
    title: 'Aspen Plus是怎么"算"出流程的？',
    category: '计算与智能化',
    categoryId: 'computing',
    difficulty: 'expert',
    summary: '序贯模块法、物性方法选择和收敛算法',
    coreConcept: '序贯模块法：按流程顺序逐个计算单元，迭代至收敛。物性方法选择：理想体系用IDEAL，非极性用PENG-ROB，极性用NRTL。撕裂流（recycle）需要收敛算法（Wegstein、Broyden）。自由度分析确保方程组可解。',
    theory: ['流程模拟', '热力学模型', '数值分析', '过程优化'],
    resources: [
      { title: '《Aspen Plus模拟应用》', type: 'book' },
      { title: 'AspenTech官方教程', type: 'course' }
    ],
    estimatedTime: '7-10天',
    experiment: '用Aspen Plus建立甲醇合成流程，对比不同物性方法的结果差异'
  }
];

export const getTopicsByCategory = (categoryId: string): Topic[] => {
  return topics.filter(t => t.categoryId === categoryId);
};

export const getTopicById = (id: string): Topic | undefined => {
  return topics.find(t => t.id === id);
};

export const getDifficultyColor = (difficulty: string): string => {
  switch (difficulty) {
    case 'easy': return 'bg-green-500';
    case 'medium': return 'bg-yellow-500';
    case 'hard': return 'bg-orange-500';
    case 'expert': return 'bg-red-500';
    default: return 'bg-gray-500';
  }
};

export const getDifficultyLabel = (difficulty: string): string => {
  switch (difficulty) {
    case 'easy': return '入门';
    case 'medium': return '进阶';
    case 'hard': return '专业';
    case 'expert': return '专家';
    default: return '未知';
  }
};
