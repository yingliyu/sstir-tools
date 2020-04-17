import React from 'react'
import { List, Pagination } from 'antd'
import css from './index.module.less'
import { CaretUpFilled, CaretDownFilled } from '@ant-design/icons'

export default function FoundProjects() {
  const data = [
    {
      source: {
        id: 9084,
        title: '基于长时间序列的纳木错水量对气候变化的响应研究',
        pid: 40901102,
        page: 207733,
        subj_code: '环境变化与预测(D0710)',
        leader: '吴艳红',
        leader_title: '副研究员',
        unit: '中国科学院对地观测与数字地球科学中心',
        project_money: 20,
        project_type: '青年科学基金项目',
        exec_date: '2010年01月01日至2012年12月31日',
        appro_year: 2009,
        keywords: ['青藏高原', '纳木错', '湖泊水量', '气候变化', '遥感'],
        keywords_en: [
          'Tibetan',
          'Plateau',
          'Nam',
          'Co',
          'Lake',
          'Water',
          'storage',
          'Climate',
          'change',
          'Remote',
          'sensing'
        ],
        abstract: '',
        abstract_en: '',
        conclusion_abs:
          '青藏高原作为独特的自然地域单元，与全球气候与环境变化息息相关，区域响应明显，是全球变化研究的最佳"实验室"。湖泊是青藏高原地表系统重要而且独特的组成部分。湖泊水量变化记录了大量的降水、蒸发和湿度等变化的信息，对气候变化具有敏感的响应。纳木错位于藏北高原东南部，念青唐古拉山北麓，面积广大，受人为影响极少，记录的是长期的气候波动信息，是进行气候变化及其区域响应研究的典型地区。本项目拟利用中高分辨率的卫星遥感数据（获取时间从1960s起）、气象观测数据、实测水文数据等，在对湖泊、冰川进行长时序（1961～2010年）年内、年际遥感监测以及流域内气象要素进行长时序特征研究的基础上，运用模型模拟、统计分析等方法，定量的研究湖泊水量变化对气候变化的响应机制与规律。内陆湖泊的扩张与收缩反映了水热平衡变化，是气候变化的敏感指示器。纳木错地处青藏高原腹地，面积巨大，受人类活动影响较小，为内陆封闭湖盆，湖泊波动不受短期天气状况的影响，湖泊演化记录的是长期的气候变化信息。我们选择青藏高原典型湖泊流域—纳木错流域作为研究区进行全球变化水文响应研究，并且取得了一些成果，具体包括以下三方面内容：\n（1）湖泊水量数据是进行水量平衡研究的基础，是青藏高原全球变化水文响应研究的先决条件。基于历史气象资料、1976-2009年获取的多源遥感数据资料以及2005-2008年实测的湖底地形数据，运用GIS技术，提出了一种估算湖泊水量的方法，构建了近34年来湖泊水量序列，并分析了湖泊面积和水量的年内和年际变化规律。\n（2）雪覆盖、植被和湖泊水文要素等都是全球变化的敏感响应因子，反映了生态系统对气候变化的响应特征和规律。基于中分辨率成像光谱仪MODIS的辐射数据、雪覆盖和植被指数产品等以及湖泊水文资料，监测了2000-2009年纳木错流域内雪覆盖、植被物候、湖泊水量等湖区环境要素的年内和年际动态变化趋势，并初步分析了气候变化与湖泊水文、植被、雪覆盖等环境要素的相关关系。\n（3）为进一步定量探讨湖泊对气候变化的响应特征和机制，利用月尺度水文模型，基于之前的研究成果，以ICESat GLAS数据作为模型的率定数据，气象资料、遥感数据以及产品等作为模型的输入，模拟重建了1980-2010年月尺度湖泊水位序列；根据水位-库容曲线，获取了31年来的湖泊水量序列；计算了不同时期的湖泊水量平衡，动态监测了气候变化背景下湖泊的响应特征和规律。\n',
        achievement: [
          {
            type: '期刊',
            title:
              'Estimation and trend detection of water storage at Nam Co Lake, central Tibetan Plateau',
            authores: 'Zhang Bing|Wu Yanhong|Zhu Liping|Wang Junbo|Li Junsheng|Chen Dongmei|',
            id: '1'
          },
          {
            type: '期刊',
            title: '藏南羊卓雍错流域水化学主离子特征及其控制因素',
            authores: ' 孙瑞|张雪芹|吴艳红|SUN Rui1,ZHANG Xueqin1 & WU Yanhong2(1: Institute|',
            id: '2'
          },
          {
            type: '会议',
            title: '青藏高原纳木错流域雪覆盖、湖泊水量和植被物候的长时间变化监测',
            authores: ' Wu, Yanhong|Ni, Li|Zhang, Bing|',
            id: '3'
          }
        ],
        create_time: '20-04-13 06:36:27',
        update_time: '20-04-13 06:36:27'
      }
    },
    {
      source: {
        id: 9081,
        title: '过去300年农垦区扩张与现代农牧交错带东段的形成',
        pid: 40901099,
        page: 207730,
        subj_code: '环境变化与预测(D0710)',
        leader: '叶瑜',
        leader_title: '副教授',
        unit: '北京师范大学',
        project_money: 20,
        project_type: '青年科学基金项目',
        exec_date: '2010年01月01日至2012年12月31日',
        appro_year: 2009,
        keywords: ['农牧交错带', '土地开垦', '农耕界线', '气候变化'],
        keywords_en: [
          'Farming-grazing',
          'transitional',
          'z',
          'Land',
          'reclamation',
          'Agricultural',
          'boundary',
          'Climate',
          'change'
        ],
        abstract: '',
        abstract_en: '',
        conclusion_abs:
          '生态脆弱地区土地开垦所引起的土地覆盖变化特别值得关注，其受到气候变化和人类需求的双重驱动。本研究拟重建我国农牧交错带东段地区过去300年农业开垦与农牧交错格局的变化，并对其影响因素进行分析，回答距离现代最近一次农垦区扩张与现代农牧交错带东段如何形成这个问题，揭示农牧交错带历史形成演变规律和时空变化，对于指导该区农业生产实践、促进可持续发展，以及保证我国的生产、生态安全具有重要的现实意义。本项目主要进展如下：（1）建立了过去300年北方农牧交错带东段地区土地开垦综合数据库，并对数据进行了评估、同化；（2）基于《清实录》对研究区农垦区扩张和农耕界线变迁进行了分析，结果表明：农耕区界线范围逐渐北扩，从长城一线以南扩展到太仆寺—多伦—赤峰—围场—敖汉一线；开垦界线在光绪朝达到最北，到达科尔沁、阿鲁科尔沁境内；（3）基于聚落地名数据库，恢复了赤峰、通辽聚落体系演变及农牧交错格局的形成，结果表明：赤峰、通辽地区聚落数的增长都呈现指数增长的趋势，聚落体系空间扩展和历史开垦过程的总体趋势是从南到北，沿西拉木伦河从下游到上游；（4）重建了20世纪以来耕地覆盖变化和农牧交错格局的形成，结果表明：耕地面积和垦殖率呈波动性递增的趋势，15%、30%垦殖率界线总体呈不断西移北进的趋势，农耕对西部传统牧区的渗透逐步导致现今农牧交错格局的形成；（5）对清代东蒙地区行政建置扩展过程与同期中国东部气温序列进行对比，结果表明：二者具有较好的对应，相对温暖的18世纪农业聚落显著向北深入牧区，而相对寒冷的19世纪则回退至柳条边一线；（6）分析了20世纪以来气候变化对该区潜在农业适宜区界线变化的影响，判断了随气温、降水阶段变化潜在农业适宜区界线的可能变动范围，并辨识出气温、降水敏感区；（7）分析了不同时期开垦政策变化及对农垦区扩张的影响，进行了清代华北地区气候变化的影响与东北土地开发的异地响应的案例分析。',
        achievement: [
          {
            type: '期刊',
            title: '1883年长江三角洲地区台风灾害事件的重建',
            authores: ' 叶瑜|方修琦|张向萍|',
            id: '1'
          },
          {
            type: '期刊',
            title: '从1849年长江中下游地区洪涝灾害记录谈整编方志资料的使用',
            authores: ' 张向萍|叶瑜|王辉|',
            id: '2'
          },
          {
            type: '期刊',
            title: '吉林省近300年来聚落格局演变',
            authores: '曾早早|方修琦|叶瑜|',
            id: '3'
          },
          {
            type: '期刊',
            title: '清代东蒙农业开发的消长及其气候变化背景',
            authores: ' 萧凌波|方修琦|叶瑜|',
            id: '4'
          },
          {
            type: '期刊',
            title: '基于聚落地名记录的过去300年吉林省土地开垦过程',
            authores: '曾早早|方修琦|叶瑜|',
            id: '5'
          }
        ],
        create_time: '20-04-13 06:36:25',
        update_time: '20-04-13 06:36:25'
      }
    },
    {
      source: {
        id: 9132,
        title: '气候变化影响黑土农田氮素转化及生产力稳定性的空间移位试验研究',
        pid: 40901147,
        page: 207778,
        subj_code: '土壤肥力与土壤养分循环(D070106)',
        leader: '焦晓光',
        leader_title: '教授',
        unit: '黑龙江大学',
        project_money: 25,
        project_type: '青年科学基金项目',
        exec_date: '2010年01月01日至2012年12月31日',
        appro_year: 2009,
        keywords: ['水', '热', '农田黑土', '氮转化', '生产力', '空间移位'],
        keywords_en: [
          'Rainfal',
          'and',
          'heat',
          'Black',
          'soil',
          'N',
          'transform',
          'Soil',
          'productivity',
          'Spatial',
          'removal'
        ],
        abstract: '',
        abstract_en: '',
        conclusion_abs:
          '以黑龙江海伦土壤空间移位长期定位试验为平台，选取4种不同有机质含量农田黑土开展气候水、热条件改变后土壤N素转化研究。利用15N示踪试验，测定土壤总氮的矿化、固持、硝化和NO3消耗量，分析土壤微生物量氮与土壤N转化内在的联系，同步测定与土壤氮素转化相关的特异微生物土壤氨化、硝化细菌活性及其种群，观测农田黑土生产力变化规律。预期结果：①判定水、热因子是否为影响不同有机质含量农田黑土土壤氮转化控制因子；②探讨水、热条件变化后不同有机质含量农田黑土土壤氮素转化的动态过程；③阐明水、热、土壤、施肥管理等交互作用下土壤生物活性对土壤N转化贡献潜力；④揭示气候变化下农田黑土土壤生产力稳定性的变化规律。.本项目将揭示气候变暖后农田黑土生态系统中氮素转化的生物学过程机制，可为东北黑土区作物栽培、土壤氮素合理管理及气候变化应循对策提供科学参考。本项目研究选择中国东北黑土由北向南5个不同有机质含量农田黑土（黑龙江北安SOM11、黑龙江嫩江SOM6、黑龙江海伦SOM5、吉林德惠SOM3、吉林梨树SOM1.7）在中国科学院海伦农业生态实验站建立空间移位试验，研究玉米单作系统中，水热条件改变对5种不同有机质含量农田黑土氮素转化及生产力稳定性的影响。2010-2012年试验结果显示：\n？\t在玉米生育期内，5个不同有机质含量农田黑土土壤温度峰值出现在拔节期；有机质含量低于60 g kg-1时，土壤温度随有机质含量的增加而增加；土壤湿度则是随有机质含量的增加而增加。不施肥处理、施肥处理，不同有机质含量农田黑土土壤全氮、全磷、碱解氮含量随有机质含量的增加而增加，有效磷含量无明显规律；年际间土壤全氮、全磷、碱解氮、有效磷与气温和降水有关，随着气温及降雨量的增加有缓慢上升的趋势。相关分析显示水、热因子是影响不同有机质含量农田黑土土壤氮素转化的环境因子。\n？\t在玉米生育期内，不同有机质含量农田黑土脲酶、硝酸还原酶高峰在拔节期，随后降低。受温度、降雨环境因子的影响，年际间土壤酶活性有一定差异。土壤硝化作用强度与气温、降水呈显著相关关系。5个不同有机质含量处理在玉米生育期间土壤酶活性变化趋势：SOM1.7＜SOM3＜SOM5＜SOM6＜SOM11。土壤微生物量碳、氮、基础呼吸、细菌数量、硝化细菌数量随有机质含量的增加而增加，而真菌数量则随土壤有机质含量的增加而降低；且有机质含量最高的北安土壤与其它土壤之间的差异达到显著水平。\n？\t15N示踪的结果显示，不同有机质含量农田黑土N转化与土壤有机质含量密切相关，NH4+-15N、(NO3-+NO2-)-15N、有效态15N、固定态15NH4+的、土壤微生物量15N、总有机15N随土壤有机质含量的增加而增加。\n？\t不同有机质含量农田黑土空间移位水、热条件改变后，除嫩江（SOM11）外，玉米产量随土壤有机质含量的增加而增加，施用化肥可提高玉米产量。\n？\t年际间，相对气温高的年份（2011年）玉米产量、土壤养分、土壤酶活性、土壤微生物量明显高于气温低的年份。相关分析表明，土壤脲酶、硝酸还原酶、土壤微生物量、土壤氮素形态、玉米产量与气温与降水量间的相关性达到了显著水平。说明不同有机质含量农田黑土空间移位后，土壤水、热条件发生改变，影响土壤生物活性及土壤氮素的改变进而影响到了土壤生产力的',
        achievement: [
          {
            type: '期刊',
            title:
              'Effect of Long-Term Fertilization on Soil Enzyme Activities Under Different Hydrothermal Conditions in Northeast China',
            authores: 'Jiao Xiao-guang|Gao Chong-sheng|Lue Guo-hong|Sui Yu-yu|',
            id: '1'
          },
          {
            type: '期刊',
            title: '长期施肥对薄层黑土酶活性及土壤肥力的影响',
            authores: '焦晓光|隋跃宇|魏丹|',
            id: '2'
          },
          {
            type: '期刊',
            title: '不同有机质含量农田土壤微生物生态特征',
            authores: '焦晓光|高崇升|隋跃宇|张兴义|丁光伟|',
            id: '3'
          }
        ],
        create_time: '20-04-13 06:36:52',
        update_time: '20-04-13 06:36:52'
      }
    }
  ]
  return (
    <div className={css['founb-projects-wrapper']}>
      <List
        itemLayout="horizontal"
        dataSource={data}
        header={
          <div className={css['list-header-wrapper']}>
            <p>
              <span>排序：</span>
              <span className={css['sort-wrapper']}>
                <span>批准年份 </span>
                <i>
                  <CaretUpFilled style={{ fontSize: '16px', color: '#08c' }} />
                  <CaretDownFilled style={{ position: 'relative', top: '-5px' }} />
                </i>
              </span>
              <span className={css['sort-wrapper']}>
                <span>金额 </span>
                <i>
                  <CaretUpFilled style={{ fontSize: '16px', color: '#08c' }} />
                  <CaretDownFilled style={{ position: 'relative', top: '-5px' }} />
                </i>
              </span>
            </p>
            <div className={css['page-wrapper']}>
              <span>找到130条结果，为您展示前100条</span>
              <Pagination simple defaultCurrent={2} total={50} />
            </div>
          </div>
        }
        footer={<Pagination simple defaultCurrent={2} total={50} />}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.title}</a>}
              description={
                <div className={css['list-item-desc']}>
                  <div>
                    <span>负责人：钟晓明</span>
                    <span>申请单位：xxx</span>
                    <span>研究类型：xxx</span>
                    <span>项目批准号：xxx</span>
                  </div>
                  <div>
                    <span>批准年度：212</span>
                    <span>金额：1212万</span>
                    <span>关键词：xxxxxxx</span>
                  </div>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </div>
  )
}
