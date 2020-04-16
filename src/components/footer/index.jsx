import React from 'react'
import css from './index.module.less'
import qrcode from './img/qrcode.png'
export default function Footer() {
  return (
    <div className={css['footer-wrapper']}>
      <div className={css['footer-inner']}>
        <div className={css['footer-desc']}>
          <h3>使用说明</h3>
          <small>
            科研选题分析助手核心目标是为科研工作者提供快速高效的科研选题服务。科研选题工具从可视化分析、相关论文、获批项目等视角提供选择参考信息。目前科研选择工具收录了收录国家自然科学基金项目数据，欢迎试用。科研选题分析助手的结果仅供参考，SSTIR不承担因数据准确性引起的任何法律责任。
          </small>
        </div>
        <div className={css['contact-us']}>
          <span>联系我们：productcenter@sstir.cn</span>
          <img src={qrcode} />
        </div>
      </div>
    </div>
  )
}
