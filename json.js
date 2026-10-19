
let tsrOverviewData = [
    {
        section: {
            title: '<i class="fas fa-sliders-h"></i> Common',
            url: null,
            desc: "These are the most basic yet most widely used filters for stock analysis. ",
        },
        cards: [
            {
                title: " Price",
                url: "",
                html: true,
                htmlUrl: "STATIC_HOME/highlights/CsTabsHelp/PriceAction/assets/Price/price.html",
                img: false,
                points: {
                    desc: "<b>Custom Screener - Price Action - Price </b><br><br> A stock's price does not determine its value or strength, but it has psychological significance for investors. <br><br>Retail investors often prefer lower-priced shares because they can buy or sell smaller quantities more easily.This is one reason companies opt for stock splits.",
                    list: [
                        { text: "Price Above 50", url: null, modal: false, imgSrc: null, htmlSrc: null },
                        { text: "Price Below 100", url: null, modal: false, imgSrc: null, htmlSrc: null },
                        { text: "Price Between 10 to 20 ", url: null, modal: false, imgSrc: null, htmlSrc: null },

                    ]
                }
            },
            {
                title: "Gain / Loss",
                url: "",
                html: true,
                htmlUrl: "STATIC_HOME/highlights/CsTabsHelp/PriceAction/assets/Price/Gain&Loss.html",
                points: {
                    desc: "<b>Custom Screener - Price Action - Gain Loss in % </b> <br><br>Shows the percentage change in a stock's price from its previous level. A 2-3% move may signal a potential change in direction, while a move exceeding 10% may indicate high volatility and risk.",
                    list: [
                        { text: "Price Gain 2%", url: null, modal: false, imgSrc: null, htmlSrc: null },
                        { text: "Price Gain Between 2 to 5 % ", url: "https://www.topstockresearch.com/rt/Home", modal: false, imgSrc: null, htmlSrc: null },
                        { text: "Price Loss > 3 %", url: "https://www.topstockresearch.com/rt/Home", modal: false, imgSrc: null, htmlSrc: null },
                    ]
                }
            }
        ],
        style: {
            section: "background-color: #f7fbff;",
            sectionTitle: "color: #8a7536; font-size: 22px",
            card: "background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:16px 18px; height:100%;",
            cardTitle: "border-left: 4px solid #8a7536; color: #8a7536",
            cardText: "font-size:14px;line-height:1.55;color:#718096;margin:0;",
            pipIcon: "color: #8a7536; font-size: 12px;"
        }
    }
]
