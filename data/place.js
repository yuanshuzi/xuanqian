/* 推荐地点词库：本卦取形，变卦取用
 * 规则：本卦上卦定“所在之形”（外在空间），下卦定“坐处之形”（近身位置）；
 *      变卦上卦定“用事”（在这里做什么），下卦定“身姿”（身体怎么安放）。
 * 形取自八卦类象（乾开阔圆硬、兑半开有缺、离明亮、震狭长木色、巽细长通透、
 * 坎低处临水、艮高差有靠、坤平整低矮），只作文化取象，不作场地安全判断。
 * en 字段为同一句的英文简写，供切换语言时使用。
 */
window.XQ_PLACE = {
  乾: {
    xiang: '天 · 开阔',
    wai: '开阔高处的空间，方正通透，视野可及远近',
    nei: '圆或方的硬质坐处，座位偏高，背后空阔',
    yong: '决断与主事，把该定的事定下来',
    shen: '坐高一点，脊背挺直',
    en: {
      wai: 'an open, elevated space, square and clear, with a long view',
      nei: 'a round or square hard seat set a little high, with open space behind',
      yong: 'deciding and presiding — settle what needs settling',
      shen: 'sit tall, with a straight back'
    }
  },
  兑: {
    xiang: '泽 · 开口',
    wai: '半开敞的空间，临街或近水，边角略有缺口',
    nei: '浅色金属或玻璃台面，坐处近窗、半边开敞',
    yong: '交谈与取悦，把话说清、把关系谈顺',
    shen: '放松肩颈，可以出声交流',
    en: {
      wai: 'a half-open space by a street or near water, with a notched corner',
      nei: 'a pale metal or glass top, seated by the window with one side open',
      yong: 'talking and putting others at ease — say it clearly',
      shen: 'loosen the shoulders and let the voice out'
    }
  },
  离: {
    xiang: '火 · 明亮',
    wai: '采光明亮的空间，光直接落在桌面上',
    nei: '面光的座位，屏幕与灯在侧，桌面简单',
    yong: '阅读与审阅，看材料、写稿、把信息看明白',
    shen: '面向光，保持视线清明',
    en: {
      wai: 'a bright room where light falls directly on the desk',
      nei: 'a seat facing the light, screen and lamp to one side, a plain desk',
      yong: 'reading and reviewing — see the material clearly',
      shen: 'face the light and keep the gaze clear'
    }
  },
  震: {
    xiang: '雷 · 生发',
    wai: '狭长而向上的空间，有木色与绿意，动静交替',
    nei: '木面座位，临窗或近绿植，坐处略窄而长',
    yong: '启动与推进，把停着的事推起来',
    shen: '允许起身走动，短时用力',
    en: {
      wai: 'a narrow, upward space with wood tones and greenery, moving and resting by turns',
      nei: 'a wooden seat by the window or near a plant, narrow and long',
      yong: 'starting and pushing forward — get the stalled thing moving',
      shen: 'allow yourself to stand and move, in short bursts'
    }
  },
  巽: {
    xiang: '风 · 通透',
    wai: '细长通透的通道式空间，风能穿行，帘幕低垂',
    nei: '藤竹或布面座位，坐在通风侧，留出转身余地',
    yong: '传递与渐进，发消息、递材料、一步步来',
    shen: '侧身留退路，随时可以转身',
    en: {
      wai: 'a slender, airy passage where wind can pass, a curtain hanging low',
      nei: 'a rattan, bamboo or fabric seat on the breezy side, with room to turn',
      yong: 'relaying and advancing gradually — send, submit, step by step',
      shen: 'sit slightly side-on, leaving yourself a way out'
    }
  },
  坎: {
    xiang: '水 · 深处',
    wai: '低处或临水的空间，光线偏暗，有凹入的角落',
    nei: '背靠实墙的低位座位，桌面深色，避开通道',
    yong: '独处与穿越，处理难事、把风险算清',
    shen: '静坐少言，把气沉下来',
    en: {
      wai: 'a low or waterside space, dim, with a recessed corner',
      nei: 'a low seat against a solid wall, dark desk, away from the passage',
      yong: 'solitude and passage — work through the hard thing, count the risks',
      shen: 'sit still and speak little; let the breath settle'
    }
  },
  艮: {
    xiang: '山 · 有靠',
    wai: '有高差与门廊的空间，石阶、墙体，界限分明',
    nei: '石台或厚木台面，座位稳当，四面有靠',
    yong: '收束与守成，收尾、归档、等待回应',
    shen: '靠稳不动，先不急着起身',
    en: {
      wai: 'a space with a step and a porch, stone and wall, edges clearly drawn',
      nei: 'a stone or thick timber top, a steady seat with support on all sides',
      yong: 'closing and holding — wrap up, file away, wait for the reply',
      shen: 'settle against the back and resist the urge to stand'
    }
  },
  坤: {
    xiang: '地 · 承载',
    wai: '平整开阔的低矮空间，地面踏实，可容多人',
    nei: '宽矮的座位或坐垫，陈设平整，桌面留白',
    yong: '承接与整理，收纳、备料、照顾与养息',
    shen: '低坐松肩，手上做点琐事',
    en: {
      wai: 'a level, open, low space with solid ground, room for several people',
      nei: 'a broad low seat or cushion, plain furnishings, a clear desk',
      yong: 'receiving and tidying — sort, prepare, care, rest',
      shen: 'sit low, drop the shoulders, keep the hands busy'
    }
  }
};
