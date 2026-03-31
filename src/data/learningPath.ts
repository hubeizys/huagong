import type { LearningNode } from '@/types';

export const learningPath: LearningNode[] = [
  {
    id: 'phase1',
    title: 'Phase 1: 基础依赖安装',
    description: '数学工具链 + 物理化学基础',
    level: 0,
    completed: false,
    estimatedTime: '4-6个月',
    prerequisites: [],
    children: [
      {
        id: 'math',
        title: '数学工具链',
        description: '微积分、线性代数、概率论、数值方法',
        level: 1,
        completed: false,
        estimatedTime: '2-3个月',
        prerequisites: [],
        children: [
          {
            id: 'calculus',
            title: '高等数学（微积分）',
            description: '多元函数微分、重积分、微分方程',
            level: 2,
            completed: false,
            estimatedTime: '4周',
            prerequisites: []
          },
          {
            id: 'linear-algebra',
            title: '线性代数',
            description: '矩阵运算、特征值（反应器稳定性分析）',
            level: 2,
            completed: false,
            estimatedTime: '3周',
            prerequisites: []
          },
          {
            id: 'probability',
            title: '概率论与数理统计',
            description: '数据分布、回归分析、实验设计',
            level: 2,
            completed: false,
            estimatedTime: '3周',
            prerequisites: []
          },
          {
            id: 'numerical',
            title: '数值计算方法',
            description: '迭代法、插值、微分方程数值解',
            level: 2,
            completed: false,
            estimatedTime: '2周',
            prerequisites: ['calculus']
          }
        ]
      },
      {
        id: 'phys-chem',
        title: '物理化学',
        description: '热力学、动力学、相平衡、电化学',
        level: 1,
        completed: false,
        estimatedTime: '3-4个月',
        prerequisites: ['math'],
        children: [
          {
            id: 'thermo-laws',
            title: '热力学第一/二定律',
            description: '能量守恒、熵增原理、过程方向性',
            level: 2,
            completed: false,
            estimatedTime: '4周',
            prerequisites: ['calculus']
          },
          {
            id: 'phase-equilibrium',
            title: '相平衡与化学平衡',
            description: '相律、汽液平衡、平衡常数计算',
            level: 2,
            completed: false,
            estimatedTime: '4周',
            prerequisites: ['thermo-laws']
          },
          {
            id: 'kinetics',
            title: '化学动力学',
            description: '反应速率、活化能、催化机理',
            level: 2,
            completed: false,
            estimatedTime: '4周',
            prerequisites: ['thermo-laws']
          },
          {
            id: 'electrochem',
            title: '电化学',
            description: '电极过程、电解质溶液、腐蚀',
            level: 2,
            completed: false,
            estimatedTime: '3周',
            prerequisites: ['thermo-laws']
          }
        ]
      },
      {
        id: 'basic-chem',
        title: '化学基础',
        description: '无机、有机、分析化学',
        level: 1,
        completed: false,
        estimatedTime: '2个月',
        prerequisites: [],
        children: [
          {
            id: 'inorganic',
            title: '无机化学',
            description: '元素性质、酸碱理论、配位化学',
            level: 2,
            completed: false,
            estimatedTime: '3周',
            prerequisites: []
          },
          {
            id: 'organic',
            title: '有机化学',
            description: '官能团反应、反应机理、合成路线',
            level: 2,
            completed: false,
            estimatedTime: '4周',
            prerequisites: []
          },
          {
            id: 'analytical',
            title: '分析化学',
            description: '滴定分析、光谱、色谱基础',
            level: 2,
            completed: false,
            estimatedTime: '3周',
            prerequisites: []
          }
        ]
      }
    ]
  },
  {
    id: 'phase2',
    title: 'Phase 2: 核心组件开发',
    description: '化工原理四大金刚',
    level: 0,
    completed: false,
    estimatedTime: '12-18个月',
    prerequisites: ['phase1'],
    children: [
      {
        id: 'unit-ops',
        title: '化工原理（单元操作）',
        description: '流体流动、传热、传质、颗粒技术',
        level: 1,
        completed: false,
        estimatedTime: '6-8个月',
        prerequisites: ['math', 'phys-chem'],
        children: [
          {
            id: 'fluid-flow',
            title: '流体流动与输送',
            description: '伯努利方程、管路计算、泵选型',
            level: 2,
            completed: false,
            estimatedTime: '3周',
            prerequisites: ['calculus']
          },
          {
            id: 'heat-transfer',
            title: '传热学',
            description: '导热、对流、辐射、换热器设计',
            level: 2,
            completed: false,
            estimatedTime: '3周',
            prerequisites: ['fluid-flow']
          },
          {
            id: 'mass-transfer',
            title: '传质与分离过程',
            description: '蒸馏、吸收、萃取、干燥、膜分离',
            level: 2,
            completed: false,
            estimatedTime: '4周',
            prerequisites: ['heat-transfer']
          },
          {
            id: 'particle',
            title: '颗粒与流态化',
            description: '沉降、过滤、流化床、气力输送',
            level: 2,
            completed: false,
            estimatedTime: '3周',
            prerequisites: ['fluid-flow']
          }
        ]
      },
      {
        id: 'reaction-eng',
        title: '化学反应工程',
        description: '反应器设计、动力学、放大',
        level: 1,
        completed: false,
        estimatedTime: '4-5个月',
        prerequisites: ['kinetics', 'math'],
        children: [
          {
            id: 'reaction-kinetics',
            title: '反应动力学基础',
            description: '速率方程、温度影响、复杂反应',
            level: 2,
            completed: false,
            estimatedTime: '4周',
            prerequisites: ['kinetics']
          },
          {
            id: 'ideal-reactors',
            title: '理想反应器设计',
            description: 'BR、CSTR、PFR设计与比较',
            level: 2,
            completed: false,
            estimatedTime: '4周',
            prerequisites: ['reaction-kinetics']
          },
          {
            id: 'non-ideal',
            title: '非理想流动',
            description: '停留时间分布、扩散模型',
            level: 2,
            completed: false,
            estimatedTime: '3周',
            prerequisites: ['ideal-reactors']
          },
          {
            id: 'multiphase',
            title: '多相反应工程',
            description: '气液、气固催化反应',
            level: 2,
            completed: false,
            estimatedTime: '4周',
            prerequisites: ['ideal-reactors']
          }
        ]
      },
      {
        id: 'chem-thermo',
        title: '化工热力学',
        description: 'PVT关系、相平衡、过程分析',
        level: 1,
        completed: false,
        estimatedTime: '3-4个月',
        prerequisites: ['thermo-laws', 'phase-equilibrium'],
        children: [
          {
            id: 'pvt',
            title: '纯物质性质',
            description: 'PVT关系、状态方程（SRK、PR）',
            level: 2,
            completed: false,
            estimatedTime: '3周',
            prerequisites: ['thermo-laws']
          },
          {
            id: 'mixture-thermo',
            title: '混合物热力学',
            description: '活度系数、VLE、LLE计算',
            level: 2,
            completed: false,
            estimatedTime: '4周',
            prerequisites: ['pvt', 'phase-equilibrium']
          },
          {
            id: 'process-analysis',
            title: '过程热力学分析',
            description: '能量平衡、熵分析、㶲分析',
            level: 2,
            completed: false,
            estimatedTime: '3周',
            prerequisites: ['mixture-thermo']
          }
        ]
      },
      {
        id: 'process-tech',
        title: '化工工艺学',
        description: '典型工艺、流程设计',
        level: 1,
        completed: false,
        estimatedTime: '3-4个月',
        prerequisites: ['unit-ops', 'reaction-eng'],
        children: [
          {
            id: 'petrochemical',
            title: '石油化工',
            description: '乙烯、芳烃、炼油工艺',
            level: 2,
            completed: false,
            estimatedTime: '4周',
            prerequisites: ['unit-ops']
          },
          {
            id: 'synthesis-gas',
            title: '合成氨与尿素',
            description: '哈伯法、尿素合成',
            level: 2,
            completed: false,
            estimatedTime: '3周',
            prerequisites: ['reaction-eng']
          },
          {
            id: 'acid-alkali',
            title: '硫酸与氯碱',
            description: '接触法、离子膜电解',
            level: 2,
            completed: false,
            estimatedTime: '3周',
            prerequisites: ['electrochem']
          },
          {
            id: 'fine-chemicals',
            title: '精细化工',
            description: '药物、染料、涂料合成',
            level: 2,
            completed: false,
            estimatedTime: '3周',
            prerequisites: ['organic']
          }
        ]
      }
    ]
  },
  {
    id: 'phase3',
    title: 'Phase 3: 支撑工具链',
    description: '工程基础 + 专业软件',
    level: 0,
    completed: false,
    estimatedTime: '并行学习',
    prerequisites: ['phase2'],
    children: [
      {
        id: 'engineering',
        title: '工程基础',
        description: '制图、设备、仪表',
        level: 1,
        completed: false,
        estimatedTime: '3-4个月',
        prerequisites: [],
        children: [
          {
            id: 'cad',
            title: '工程制图与CAD',
            description: '机械制图、AutoCAD、三维建模',
            level: 2,
            completed: false,
            estimatedTime: '4周',
            prerequisites: []
          },
          {
            id: 'equipment',
            title: '化工设备机械基础',
            description: '压力容器、材料力学、动设备',
            level: 2,
            completed: false,
            estimatedTime: '4周',
            prerequisites: ['cad']
          },
          {
            id: 'instrumentation',
            title: '电工与仪表',
            description: '化工仪表、自动控制原理',
            level: 2,
            completed: false,
            estimatedTime: '4周',
            prerequisites: []
          }
        ]
      },
      {
        id: 'software',
        title: '专业软件',
        description: '流程模拟、计算工具',
        level: 1,
        completed: false,
        estimatedTime: '持续学习',
        prerequisites: ['phase2'],
        children: [
          {
            id: 'aspen',
            title: 'Aspen Plus / HYSYS',
            description: '稳态/动态流程模拟',
            level: 2,
            completed: false,
            estimatedTime: '8周',
            prerequisites: ['unit-ops', 'chem-thermo']
          },
          {
            id: 'matlab',
            title: 'MATLAB / Python',
            description: '数值计算、数据分析',
            level: 2,
            completed: false,
            estimatedTime: '6周',
            prerequisites: ['numerical']
          },
          {
            id: 'cfd',
            title: 'CFD模拟（进阶）',
            description: 'ANSYS Fluent / COMSOL',
            level: 2,
            completed: false,
            estimatedTime: '8周',
            prerequisites: ['fluid-flow', 'matlab']
          }
        ]
      }
    ]
  },
  {
    id: 'phase4',
    title: 'Phase 4: 专业方向',
    description: '选择一个方向深耕',
    level: 0,
    completed: false,
    estimatedTime: '6-12个月',
    prerequisites: ['phase2', 'phase3'],
    children: [
      {
        id: 'track-petrochemical',
        title: '方向A: 石油化工与炼制',
        description: '原油加工、催化裂化、重整',
        level: 1,
        completed: false,
        estimatedTime: '6个月',
        prerequisites: ['petrochemical']
      },
      {
        id: 'track-fine',
        title: '方向B: 精细化工与制药',
        description: '有机合成、药物化学、GMP',
        level: 1,
        completed: false,
        estimatedTime: '6个月',
        prerequisites: ['fine-chemicals', 'organic']
      },
      {
        id: 'track-materials',
        title: '方向C: 材料化工',
        description: '高分子、纳米材料、新能源材料',
        level: 1,
        completed: false,
        estimatedTime: '6个月',
        prerequisites: ['organic']
      },
      {
        id: 'track-environment',
        title: '方向D: 环境化工',
        description: '污染控制、水处理、CCUS',
        level: 1,
        completed: false,
        estimatedTime: '6个月',
        prerequisites: ['unit-ops']
      },
      {
        id: 'track-bio',
        title: '方向E: 生物化工',
        description: '发酵工程、酶工程、合成生物学',
        level: 1,
        completed: false,
        estimatedTime: '6个月',
        prerequisites: ['organic', 'kinetics']
      }
    ]
  },
  {
    id: 'phase5',
    title: 'Phase 5: 系统思维',
    description: '过程系统工程与管理',
    level: 0,
    completed: false,
    estimatedTime: '持续学习',
    prerequisites: ['phase4'],
    children: [
      {
        id: 'process-systems',
        title: '过程系统工程',
        description: '设计优化、控制自动化、安全分析',
        level: 1,
        completed: false,
        estimatedTime: '4个月',
        prerequisites: ['aspen', 'instrumentation']
      },
      {
        id: 'economics',
        title: '工程经济与管理',
        description: '技术经济、项目管理、质量管理',
        level: 1,
        completed: false,
        estimatedTime: '3个月',
        prerequisites: []
      }
    ]
  }
];

export const getNodeById = (id: string, nodes: LearningNode[] = learningPath): LearningNode | null => {
  for (const node of nodes) {
    if (node.id === id) return node;
    if (node.children) {
      const found = getNodeById(id, node.children);
      if (found) return found;
    }
  }
  return null;
};

export const getCompletedCount = (nodes: LearningNode[] = learningPath): { total: number; completed: number } => {
  let total = 0;
  let completed = 0;
  
  const count = (nodeList: LearningNode[]) => {
    for (const node of nodeList) {
      total++;
      if (node.completed) completed++;
      if (node.children) {
        count(node.children);
      }
    }
  };
  
  count(nodes);
  return { total, completed };
};
