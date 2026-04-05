-- 插入学习路径节点
-- Phase 1: 基础依赖安装
INSERT INTO learning_path_nodes (id, title, description, level, estimated_time, prerequisites, parent_id, path, sort_order) VALUES
('phase1', 'Phase 1: 基础依赖安装', '数学工具链 + 物理化学基础', 0, '4-6个月', '{}', NULL, 'phase1', 1),
('math', '数学工具链', '微积分、线性代数、概率论、数值方法', 1, '2-3个月', '{}', 'phase1', 'phase1/math', 1),
('calculus', '高等数学（微积分）', '多元函数微分、重积分、微分方程', 2, '4周', '{}', 'math', 'phase1/math/calculus', 1),
('linear-algebra', '线性代数', '矩阵运算、特征值（反应器稳定性分析）', 2, '3周', '{}', 'math', 'phase1/math/linear-algebra', 2),
('probability', '概率论与数理统计', '数据分布、回归分析、实验设计', 2, '3周', '{}', 'math', 'phase1/math/probability', 3),
('numerical', '数值计算方法', '迭代法、插值、微分方程数值解', 2, '2周', '{calculus}', 'math', 'phase1/math/numerical', 4),
('phys-chem', '物理化学', '热力学、动力学、相平衡、电化学', 1, '3-4个月', '{math}', 'phase1', 'phase1/phys-chem', 2),
('thermo-laws', '热力学第一/二定律', '能量守恒、熵增原理、过程方向性', 2, '4周', '{calculus}', 'phys-chem', 'phase1/phys-chem/thermo-laws', 1),
('phase-equilibrium', '相平衡与化学平衡', '相律、汽液平衡、平衡常数计算', 2, '4周', '{thermo-laws}', 'phys-chem', 'phase1/phys-chem/phase-equilibrium', 2),
('kinetics', '化学动力学', '反应速率、活化能、催化机理', 2, '4周', '{thermo-laws}', 'phys-chem', 'phase1/phys-chem/kinetics', 3),
('electrochem', '电化学', '电极过程、电解质溶液、腐蚀', 2, '3周', '{thermo-laws}', 'phys-chem', 'phase1/phys-chem/electrochem', 4),
('basic-chem', '化学基础', '无机、有机、分析化学', 1, '2个月', '{}', 'phase1', 'phase1/basic-chem', 3),
('inorganic', '无机化学', '元素性质、酸碱理论、配位化学', 2, '3周', '{}', 'basic-chem', 'phase1/basic-chem/inorganic', 1),
('organic', '有机化学', '官能团反应、反应机理、合成路线', 2, '4周', '{}', 'basic-chem', 'phase1/basic-chem/organic', 2),
('analytical', '分析化学', '滴定分析、光谱、色谱基础', 2, '3周', '{}', 'basic-chem', 'phase1/basic-chem/analytical', 3);

-- Phase 2: 核心组件开发
INSERT INTO learning_path_nodes (id, title, description, level, estimated_time, prerequisites, parent_id, path, sort_order) VALUES
('phase2', 'Phase 2: 核心组件开发', '化工原理四大金刚', 0, '12-18个月', '{phase1}', NULL, 'phase2', 2),
('unit-ops', '化工原理（单元操作）', '流体流动、传热、传质、颗粒技术', 1, '6-8个月', '{math,phys-chem}', 'phase2', 'phase2/unit-ops', 1),
('fluid-flow', '流体流动与输送', '伯努利方程、管路计算、泵选型', 2, '3周', '{calculus}', 'unit-ops', 'phase2/unit-ops/fluid-flow', 1),
('heat-transfer', '传热学', '导热、对流、辐射、换热器设计', 2, '3周', '{fluid-flow}', 'unit-ops', 'phase2/unit-ops/heat-transfer', 2),
('mass-transfer', '传质与分离过程', '蒸馏、吸收、萃取、干燥、膜分离', 2, '4周', '{heat-transfer}', 'unit-ops', 'phase2/unit-ops/mass-transfer', 3),
('particle', '颗粒与流态化', '沉降、过滤、流化床、气力输送', 2, '3周', '{fluid-flow}', 'unit-ops', 'phase2/unit-ops/particle', 4),
('reaction-eng', '化学反应工程', '反应器设计、动力学、放大', 1, '4-5个月', '{kinetics,math}', 'phase2', 'phase2/reaction-eng', 2),
('reaction-kinetics', '反应动力学基础', '速率方程、温度影响、复杂反应', 2, '4周', '{kinetics}', 'reaction-eng', 'phase2/reaction-eng/reaction-kinetics', 1),
('ideal-reactors', '理想反应器设计', 'BR、CSTR、PFR设计与比较', 2, '4周', '{reaction-kinetics}', 'reaction-eng', 'phase2/reaction-eng/ideal-reactors', 2),
('non-ideal', '非理想流动', '停留时间分布、扩散模型', 2, '3周', '{ideal-reactors}', 'reaction-eng', 'phase2/reaction-eng/non-ideal', 3),
('multiphase', '多相反应工程', '气液、气固催化反应', 2, '4周', '{ideal-reactors}', 'reaction-eng', 'phase2/reaction-eng/multiphase', 4),
('chem-thermo', '化工热力学', 'PVT关系、相平衡、过程分析', 1, '3-4个月', '{thermo-laws,phase-equilibrium}', 'phase2', 'phase2/chem-thermo', 3),
('pvt', '纯物质性质', 'PVT关系、状态方程（SRK、PR）', 2, '3周', '{thermo-laws}', 'chem-thermo', 'phase2/chem-thermo/pvt', 1),
('mixture-thermo', '混合物热力学', '活度系数、VLE、LLE计算', 2, '4周', '{pvt,phase-equilibrium}', 'chem-thermo', 'phase2/chem-thermo/mixture-thermo', 2),
('process-analysis', '过程热力学分析', '能量平衡、熵分析、㶲分析', 2, '3周', '{mixture-thermo}', 'chem-thermo', 'phase2/chem-thermo/process-analysis', 3),
('process-tech', '化工工艺学', '典型工艺、流程设计', 1, '3-4个月', '{unit-ops,reaction-eng}', 'phase2', 'phase2/process-tech', 4),
('petrochemical', '石油化工', '乙烯、芳烃、炼油工艺', 2, '4周', '{unit-ops}', 'process-tech', 'phase2/process-tech/petrochemical', 1),
('synthesis-gas', '合成氨与尿素', '哈伯法、尿素合成', 2, '3周', '{reaction-eng}', 'process-tech', 'phase2/process-tech/synthesis-gas', 2),
('acid-alkali', '硫酸与氯碱', '接触法、离子膜电解', 2, '3周', '{electrochem}', 'process-tech', 'phase2/process-tech/acid-alkali', 3),
('fine-chemicals', '精细化工', '药物、染料、涂料合成', 2, '3周', '{organic}', 'process-tech', 'phase2/process-tech/fine-chemicals', 4);

-- Phase 3: 支撑工具链
INSERT INTO learning_path_nodes (id, title, description, level, estimated_time, prerequisites, parent_id, path, sort_order) VALUES
('phase3', 'Phase 3: 支撑工具链', '工程基础 + 专业软件', 0, '并行学习', '{phase2}', NULL, 'phase3', 3),
('engineering', '工程基础', '制图、设备、仪表', 1, '3-4个月', '{}', 'phase3', 'phase3/engineering', 1),
('cad', '工程制图与CAD', '机械制图、AutoCAD、三维建模', 2, '4周', '{}', 'engineering', 'phase3/engineering/cad', 1),
('equipment', '化工设备机械基础', '压力容器、材料力学、动设备', 2, '4周', '{cad}', 'engineering', 'phase3/engineering/equipment', 2),
('instrumentation', '电工与仪表', '化工仪表、自动控制原理', 2, '4周', '{}', 'engineering', 'phase3/engineering/instrumentation', 3),
('software', '专业软件', '流程模拟、计算工具', 1, '持续学习', '{phase2}', 'phase3', 'phase3/software', 2),
('aspen', 'Aspen Plus / HYSYS', '稳态/动态流程模拟', 2, '8周', '{unit-ops,chem-thermo}', 'software', 'phase3/software/aspen', 1),
('matlab', 'MATLAB / Python', '数值计算、数据分析', 2, '6周', '{numerical}', 'software', 'phase3/software/matlab', 2),
('cfd', 'CFD模拟（进阶）', 'ANSYS Fluent / COMSOL', 2, '8周', '{fluid-flow,matlab}', 'software', 'phase3/software/cfd', 3);

-- Phase 4: 专业方向
INSERT INTO learning_path_nodes (id, title, description, level, estimated_time, prerequisites, parent_id, path, sort_order) VALUES
('phase4', 'Phase 4: 专业方向', '选择一个方向深耕', 0, '6-12个月', '{phase2,phase3}', NULL, 'phase4', 4),
('track-petrochemical', '方向A: 石油化工与炼制', '原油加工、催化裂化、重整', 1, '6个月', '{petrochemical}', 'phase4', 'phase4/track-petrochemical', 1),
('track-fine', '方向B: 精细化工与制药', '有机合成、药物化学、GMP', 1, '6个月', '{fine-chemicals,organic}', 'phase4', 'phase4/track-fine', 2),
('track-materials', '方向C: 材料化工', '高分子、纳米材料、新能源材料', 1, '6个月', '{organic}', 'phase4', 'phase4/track-materials', 3),
('track-environment', '方向D: 环境化工', '污染控制、水处理、CCUS', 1, '6个月', '{unit-ops}', 'phase4', 'phase4/track-environment', 4),
('track-bio', '方向E: 生物化工', '发酵工程、酶工程、合成生物学', 1, '6个月', '{organic,kinetics}', 'phase4', 'phase4/track-bio', 5);

-- Phase 5: 系统思维
INSERT INTO learning_path_nodes (id, title, description, level, estimated_time, prerequisites, parent_id, path, sort_order) VALUES
('phase5', 'Phase 5: 系统思维', '过程系统工程与管理', 0, '持续学习', '{phase4}', NULL, 'phase5', 5),
('process-systems', '过程系统工程', '设计优化、控制自动化、安全分析', 1, '4个月', '{aspen,instrumentation}', 'phase5', 'phase5/process-systems', 1),
('economics', '工程经济与管理', '技术经济、项目管理、质量管理', 1, '3个月', '{}', 'phase5', 'phase5/economics', 2);
