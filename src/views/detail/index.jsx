import React from 'react'
import css from './index.module.less'
export default function SearchDetail() {
  const data = {
    id: 9084,
    title: '基于长时间序列的纳木错水量对气候变化的响应研究',
    pid: 40901102,
    page: 207733,
    subj_code: '环境变化与预测(D0710)',
    leader: '吴艳红',
    leader_title: '副研究员',
    unit: '中国科学院对地观测与数字地球科学中心',
    project_money: 2230,
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

  return (
    <div className={css['search-detail-wrapper']}>
      <h2>CARD9的巨噬细胞极化效应在慢性胰腺炎癌转化中的作用机制研究</h2>
      <div className={css['detail-items-wrapper']}>
        <ul>
          <li>
            <p>
              <span>批准号：</span>
              <span>{data.pid}</span>
            </p>
            <p>
              <span>项目负责人：</span>
              <span>{data.leader}</span>
            </p>
            <p>
              <span>资助金额：</span>
              <span>{data.project_money}</span>
            </p>
          </li>

          <li>
            <p>
              <span>批准年度：</span>
              <span>{data.appro_year}</span>
            </p>
            <p>
              <span>负责人职称：</span>
              <span>{data.leader_title}</span>
            </p>
            <p>
              <span>项目类别：</span>
              <span>{data.project_type}</span>
            </p>
          </li>

          <li>
            <p>
              <span>学科分类：</span>
              <span>xxx</span>
            </p>
            <p>
              <span>依托单位：</span>
              <span>{data.unit}</span>
            </p>
            <p>
              <span>研究期限：</span>
              <span>{data.exec_date}</span>
            </p>
          </li>
        </ul>
        <p>
          <span>中文主题词：</span>
          <span>{data.keywords.map((item) => item + '；')}</span>
        </p>
        <p>
          <span>英文主题词：</span>
          <span>{data.keywords_en.map((item) => item + '；')}</span>
        </p>
        <div className={css['summary-wrapper']}>
          <h4>基金摘要：</h4>
          <p>{data.conclusion_abs}</p>
        </div>
      </div>
    </div>
  )
}
