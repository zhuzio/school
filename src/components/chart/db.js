export const QADB = [
  {
    qid: 100001,
    content: `Hi, I'm Weex Assistant. What can I do for you?`,
    options: [
      { nextQid: 200001, title: 'Report Bug', content: `I found a bug of Weex!` },
      { nextQid: 300001, title: 'Ask Question', content: `I want to ask some questions about Weex.` },
      { nextQid: 400001, title: 'Just Chat' },
    ]
  }, {
    qid: 200001,
    content: `What kind of bug did you find?`,
    options: [
      { nextQid: 210001, title: 'Styles', content: 'Something wrong with the style.' },
      { nextQid: 201001, title: 'Component' },
      { nextQid: 202001, title: 'Module' },
    ]
  }, {
    qid: 201001,
    content: `Which component?`,
    defaultNextQid: 210001,
    options: [
      { title: 'loading', content: '<loading>' },
      { title: 'refresh', content: '<refresh>' },
      { title: 'video', content: '<video>' },
      { title: 'web', content: '<web>' },
      { title: 'cell', content: '<cell>' },
      { title: 'scroller', content: '<scroller>' },
      { title: 'slider', content: '<slider>' },
      { title: 'indicator', content: '<indicator>' },
      { title: 'input', content: '<input>' },
      { title: 'list', content: '<list>' },
      { title: 'a', content: '<a>' },
      { title: 'textarea', content: '<textarea>' },
      { title: 'image', content: '<image>' },
      { title: 'text', content: '<text>' },
      { title: 'div', content: '<div>' },
    ]
  }, {
    qid: 202001,
    content: `Which module?`,
    defaultNextQid: 210001,
    options: [
      { title: 'dom' },
      { title: 'animation' },
      { title: 'WebSocket' },
      { title: 'webview' },
      { title: 'navigator' },
      { title: 'picker' },
      { title: 'stream' },
      { title: 'storage' },
      { title: 'clipboard' },
      { title: 'globalEvent' },
      { title: 'modal' },
      { title: 'meta' },
    ]
  }, {
    qid: 210001,
    content: `Which platform occurs the bug?`,
    options: [
      { nextQid: 220001, title: 'Android' },
      { nextQid: 220001, title: 'iOS' },
      { nextQid: 220001, title: 'Web' },
      { nextQid: 220001, title: 'Both Android and iOS' },
      { nextQid: 220001, title: 'Every platform' }
    ]
  }, {
    qid: 220001,
    content: `Do you know the version of the Weex SDK? You can type it to me.`,
    options: [
      { nextQid: 230001, title: 'Yes', content: `Yes, it's ${WXEnvironment.weexVersion}` },
      { nextQid: 220002, title: 'No', content: 'No, how do I get it?' }
    ]
  }, {
    qid: 220002,
    content: `Scan this QR code can get the environment information of current phone.`,
    options: [
      { nextQid: 230001, title: 'OK' },
      { nextQid: 220003, title: 'Which QR Code?', content: `Which QR Code? I can't see anything here.` },
    ]
  }, {
    qid: 220003,
    content: `(◔◡◔) Nowhere, because I can't send pictures yet, neither can you.`,
    options: [
      { nextQid: 400001, title: '←_←' },
      { nextQid: 400003, title: '(ー_ー)!!' },
      { reset: true, nextQid: 100001, title: 'Fine', content: 'Fine, never mind.' },
    ]
  }, {
    qid: 230001,
    content: `Can you offer an example to reproduce that bug?`,
    options: [
      { nextQid: 900000, title: 'OK', content: 'OK, here you are.' },
      { nextQid: 400002, title: 'No', content: `No, I guess you don't have the ability to debug it. (←_←)` },
    ]
  }, {
    qid: 300001,
    content: `What do you want to know?`,
    options: [
      { nextQid: 900003, title: 'About Weex', content: 'I want to know something about Weex.' },
      { nextQid: 300002, title: 'How to learn Vue?' },
      { nextQid: 900002, title: 'How to learn English?' },
    ]
  }, {
    qid: 300002,
    content: `Everything you need is on its official website.`,
    options: [
      { reset: true, nextQid: 100001, title: 'Got it!' },
      { nextQid: 900003, title: 'Could you tell me more?' },
    ]
  }, {
    qid: 400001,
    content: `→_→`,
    options: [
      { nextQid: 400001, title: '←_←' },
      { nextQid: 400003, title: '╮(￣▽￣")╭ ' },
      { nextQid: 400002, title: '(ー_ー)!!', content: '(ー_ー)!! Could you stop ...' },
      { reset: true, nextQid: 100001, title: 'You win...' },
    ]
  }, {
    qid: 400002,
    content: `(◔◡◔) What do you think? I am an offline robot.`,
    options: [
      { nextQid: 400001, title: '←_←' },
      { nextQid: 400003, title: '╮(￣▽￣")╭ ' },
      { reset: true,  nextQid: 100001, title: 'You win...' },
    ]
  }, {
    qid: 400003,
    content: `( •ิ_• ิ)`,
    options: [
      { nextQid: 400001, title: '←_←' },
      { nextQid: 400003, title: '╮(￣▽￣")╭ ' },
      { reset: true,  nextQid: 100001, title: 'You win...' },
    ]
  }, {
    qid: 900000,
    content: `Sorry, I don't know.`,
    options: [
      { nextQid: 400003, title: '╮(￣▽￣")╭ ' },
      { reset: true, nextQid: 100001, title: 'All right' }
    ]
  }, {
    qid: 900001,
    content: `Sorry, I don't understand Chinese. Please talk to me in English.`,
    options: [
      { nextQid: 900002, title: 'How to learn English?' },
    ]
  }, {
    qid: 900002,
    content: `I don't tell you.`,
    options: [
      { nextQid: 400001, title: '←_←' },
      { nextQid: 400003, title: '╮(￣▽￣")╭ ' },
    ]
  }, {
    qid: 900003,
    content: `Actually, I know nothing about it.`,
    options: [
      { nextQid: 400001, title: '←_←' },
      { nextQid: 400002, title: '(ー_ー)!!' },
      { reset: true, nextQid: 100001, title: 'Got it!' },
    ]
  }, {
    qid: 999999,
    content: `Something wrong.`,
    options: [
      { reset: true, nextQid: 100001, title: 'Reset' }
    ]
  }
]

export function select (qid) {
  return new Promise((resolve, reject) => {
    const qa = QADB.find(item => item.qid === qid)
    qa ? resolve(qa) : reject()
  })
  return QADB.find(item => item.qid === qid)
}