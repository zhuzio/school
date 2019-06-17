/**
 * Created by Tw93 on 2016/11/4.
 */

export default {
    // 使用 iconFont 模式的tab title配置
    tabIconFontTitles: [
        {
            title: '首页',
            codePoint: '\ue6fb',
            // url: '/my'
        },
        {
            title: '班级',
            codePoint: '\ue632'
        },
        {
            title: '成长',
            codePoint: '\ue61f',
            badge: 5
        },
        {
            title: '聊天',
            codePoint: '\ue607',
            badge: 5
        },
        {
            title: '我的',
            codePoint: '\ue606',
            dot: true
        }
    ],
    tabIconFontStyles: {
        bgColor: '#FFFFFF',
        titleColor: '#666666',
        activeTitleColor: '#40e40f',
        activeBgColor: '#FFFFFF',
        isActiveTitleBold: true,
        width: 160,
        height: 120,
        fontSize: 24,
        textPaddingLeft: 10,
        textPaddingRight: 10,
        iconFontSize: 50,
        iconFontMarginBottom: 8,
        iconFontColor: '#333333',
        activeIconFontColor: '#40e40f',
        iconFontUrl: 'http://at.alicdn.com/t/font_1239300_h78vwqnze5h.ttf'
    }
}
