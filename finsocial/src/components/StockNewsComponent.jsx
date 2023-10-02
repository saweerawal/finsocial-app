import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../Sass/StockNewsComponent.scss";
import { AutoComplete } from "antd";



export default function StockNewsComponent() {
    const [dataArray, setDataArray] = useState([]);
    const [counter, setCounter] = useState(0);
    const regicomponentDidMountster = async () => {
      console.log(counter);
      if (counter <= 3) {
      /*let res = await fetch(
        `https://newsapi.org/v2/everything?q=finance&apiKey=1647613012524f3caecd4562125d2ca5`      
      );
      let data_ = await res.json();*/
      let data = {
        "status": "ok",
        "totalResults": 7194,
        "articles": [
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "theverge.com",
        "title": "Tesla rolls out an updated Model Y in China but keeps the same starting price",
        "description": "Tesla's China arm announced in a WeChat post Sunday morning that it released a new Model Y with design and performance tweaks that keeps the same starting price as before (via Reuters). The new car follows the company’s release of the revamped \"Highland\" Mode…",
        "url": "https://biztoc.com/x/6a2d5f296341b345",
        "urlToImage": "https://c.biztoc.com/p/6a2d5f296341b345/og.webp",
        "publishedAt": "2023-10-01T20:24:07Z",
        "content": "Tesla's China arm announced in a WeChat post Sunday morning that it released a new Model Y with design and performance tweaks that keeps the same starting price as before (via Reuters). The new car f… [+253 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Legalinsurrection.com"
        },
        "author": "Vijeta Uniyal",
        "title": "German Government ‘Rebukes’ Elon Musk for Criticizing State-Funded NGOs Helping Illegal Migrant Cross Mediterranean",
        "description": "Musk: \"Sounds a lot more like human trafficking than saving lives.\"\nThe post German Government ‘Rebukes’ Elon Musk for Criticizing State-Funded NGOs Helping Illegal Migrant Cross Mediterranean first appeared on Le·gal In·sur·rec·tion.",
        "url": "https://legalinsurrection.com/2023/10/german-government-rebukes-elon-musk-for-criticizing-state-funded-ngos-helping-illegal-migrant-cross-mediterranean/",
        "urlToImage": "https://legalinsurrection.com/wp-content/uploads/2023/10/elon-musk-Twitter-x.png",
        "publishedAt": "2023-10-01T20:00:29Z",
        "content": "Tech billionaire and Twitter/X owner Elon Musk earned the wrath of the German government and state-controlled media for highlighting the nefarious role played by country’s NGOs in promoting migrant t… [+5371 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iPhone in Canada"
        },
        "author": "John Quintet",
        "title": "Canada’s Largest Tesla Supercharger Station Debuts in B.C.",
        "description": "Tesla has officially opened its largest Supercharger station in Canada, situated at 4660 Garden City Road in Richmond, BC, reports Tesla North. The new facility is equipped with 40 charging stalls, each capable of delivering up to 250 kW of power. The cost fo…",
        "url": "https://www.iphoneincanada.ca/2023/10/01/canadas-largest-tesla-supercharger-station/",
        "urlToImage": "https://cdn.iphoneincanada.ca/wp-content/uploads/2017/09/iic-logo-1.svg",
        "publishedAt": "2023-10-01T19:51:10Z",
        "content": "Tesla has officially opened its largest Supercharger station in Canada, situated at 4660 Garden City Road in Richmond, BC, reports Tesla North.\r\nThe new facility is equipped with 40 charging stalls, … [+1155 chars]"
        },
        {
        "source": {
        "id": "the-verge",
        "name": "The Verge"
        },
        "author": "Wes Davis",
        "title": "Tesla rolls out an updated Model Y in China but keeps the same starting price",
        "description": "A new Tesla Model Y in China gets better acceleration, new wheels, ambient LED lighting for the dashboard, and a long-range option.",
        "url": "https://www.theverge.com/2023/10/1/23898419/tesla-model-y-updated-china-ambient-lighting-long-range",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/wrDczL29cZwf-zZZz1X8PnDUkJE=/0x0:2338x1587/1200x628/filters:focal(1169x794:1170x795)/cdn.vox-cdn.com/uploads/chorus_asset/file/24968216/Screenshot_2023_10_01_at_1.26.48_PM.png",
        "publishedAt": "2023-10-01T19:21:19Z",
        "content": "Tesla rolls out an updated Model Y in China but keeps the same starting price\r\nTesla rolls out an updated Model Y in China but keeps the same starting price\r\n / The Model Y for China gets new LED das… [+1165 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Barron's"
        },
        "author": "Al Root",
        "title": "How Much UAW Wage Increases Will Really Raise Car Prices",
        "description": "Investors are in the fog-of-war period in the United Worker Auto battle with Ford, GM, and Chrysler parent Stellantis. They shouldn't believe all the numbers they are hearing.",
        "url": "https://www.barrons.com/articles/uaw-wage-increases-raise-car-prices-5b81bde5",
        "urlToImage": "https://images.barrons.com/im-45405383/social",
        "publishedAt": "2023-10-01T18:26:21Z",
        "content": "Friday, the UAW expanded its strike against the auto makers, the second expansion after walking out at three facilities, one at each auto maker, on Sept. 15. The UAW strike debacle continues in 313, … [+4413 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CleanTechnica"
        },
        "author": "Zachary Shahan",
        "title": "Tesla Q3 Sales Estimates",
        "description": "The question of the week in the cleantech world and the investment world is: How many vehicles did Tesla produce and deliver in Q3 2023? The numbers should be published in the next day or so, but as we eagerly await those, and as we approach Monday, what are …",
        "url": "https://cleantechnica.com/2023/10/01/tesla-q3-sales-estimates/",
        "urlToImage": "http://cleantechnica.com/files/2019/03/tesla-fremont-factory-black-seats-drones-lineup-e1696183432790-800x501.png",
        "publishedAt": "2023-10-01T18:02:46Z",
        "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nThe question of the week in the cleantech world and the investment world is: How many vehicles did Tesla prod… [+3519 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "fortune.com",
        "title": "Tesla faces such fierce competition in China that it’s offering a revamped Model Y with no price increase",
        "description": "Tesla Inc. released an updated version of the Model Y in China, with improved configurations and the same starting price, in a push to better compete with local rivals. Among the changes is a slightly faster 0-100 km/h acceleration time of 5.9 seconds, a new …",
        "url": "https://biztoc.com/x/31088ebf09e3c169",
        "urlToImage": "https://c.biztoc.com/p/31088ebf09e3c169/og.webp",
        "publishedAt": "2023-10-01T17:46:11Z",
        "content": "Tesla Inc. released an updated version of the Model Y in China, with improved configurations and the same starting price, in a push to better compete with local rivals.Among the changes is a slightly… [+274 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "foxbusiness.com",
        "title": "UAW strike, jobs report and Tesla deliveries top Wall Street’s week ahead",
        "description": "Investors will kick off the final quarter of the year as more headwinds swirl for the economy, including the ongoing United Auto Workers (UAW) strike against Detroit's Big Three. All three of the major averages fell during the third quarter led by the Nasdaq …",
        "url": "https://biztoc.com/x/3ce5aa203695ef3a",
        "urlToImage": "https://c.biztoc.com/p/3ce5aa203695ef3a/s.webp",
        "publishedAt": "2023-10-01T17:38:15Z",
        "content": "Investors will kick off the final quarter of the year as more headwinds swirl for the economy, including the ongoing United Auto Workers (UAW) strike against Detroit's Big Three. All three of the maj… [+294 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Erickimphotography.com"
        },
        "author": "ERIC KIM",
        "title": "Don’t drive yourself if you have the option",
        "description": "For example, if you were insanely insanely rich and you lived in Los Angeles, best you just have your private driver drive you around, Uber everywhere, or maybe better yet… use Tesla auto pilot.",
        "url": "https://erickimphotography.com/blog/2023/10/01/dont-drive-yourself-if-you-have-the-option/",
        "urlToImage": null,
        "publishedAt": "2023-10-01T17:28:15Z",
        "content": "For example, if you were insanely insanely rich and you lived in Los Angeles, best you just have your private driver drive you around, Uber everywhere, or maybe better yet use Tesla auto pilot."
        },
        {
        "source": {
        "id": null,
        "name": "CleanTechnica"
        },
        "author": "David Waterworth",
        "title": "Rapid Expansion at Benzina Zero Australia",
        "description": "Benzina Zero is expanding so rapidly that it has outgrown its previous quarters. I met with Ben Silver — self named “chief plugger inner” — at Benzina Zero’s new warehouse and head office in Virginia, north of Brisbane. We spoke of growth and vision. His phon…",
        "url": "https://cleantechnica.com/2023/10/01/rapid-expansion-at-benzina-zero-australia/",
        "urlToImage": "http://cleantechnica.com/files/2023/09/Ben-Tess-and-sport-scaled.jpg",
        "publishedAt": "2023-10-01T17:23:19Z",
        "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nBenzina Zero is expanding so rapidly that it has outgrown its previous quarters. I met with Ben Silver self n… [+7107 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "barrons.com",
        "title": "Tesla Delivery Numbers Are Coming. Here's What To Expect",
        "description": "Wall Street projects that Tesla delivered about 455,000 units in the third quarter. Estimates are wide-ranging though. The number could come in anywhere from 440,000 to 485,000 units.#tesla",
        "url": "https://biztoc.com/x/ac580e5f2eb52003",
        "urlToImage": "https://c.biztoc.com/p/ac580e5f2eb52003/og.webp",
        "publishedAt": "2023-10-01T17:18:11Z",
        "content": "Wall Street projects that Tesla delivered about 455,000 units in the third quarter. Estimates are wide-ranging though. The number could come in anywhere from 440,000 to 485,000 units.\r\n#tesla\r\nThis s… [+30 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "tipranks.com",
        "title": "Tesla’s about to report Q3 deliveries; Don’t get too hung up on the number, says this analyst",
        "description": "Over the past several quarters, Tesla (TSLA) has made a habit of beating its prior delivery records, but that trend is unlikely to continue when the EV leader reports the Q3 haul shortly (probably either on Sunday night/Monday). On the Q2 earnings call, CEO E…",
        "url": "https://biztoc.com/x/3dac2ae1e288195b",
        "urlToImage": "https://c.biztoc.com/p/3dac2ae1e288195b/og.webp",
        "publishedAt": "2023-10-01T17:04:09Z",
        "content": "Over the past several quarters, Tesla (TSLA) has made a habit of beating its prior delivery records, but that trend is unlikely to continue when the EV leader reports the Q3 haul shortly (probably ei… [+273 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Freerepublic.com"
        },
        "author": "Breitbart",
        "title": "Ocasio-Cortez Defends Bowman Pulling Fire Alarm: ‘Moment of Panic’",
        "description": "Representative Alexandria Ocasio-Cortez (D-NY) said Sunday on CNN’s “State of the Union” that it was a “moment of panic” while defending Rep. Jamaal Bowman (D-NY) pulling a fire alarm to possibly delay a vote on legislation designed to avoid a government shut…",
        "url": "https://freerepublic.com/focus/f-news/4186188/posts",
        "urlToImage": null,
        "publishedAt": "2023-10-01T16:41:27Z",
        "content": "Skip to comments.\r\nOcasio-Cortez Defends Bowman Pulling Fire Alarm: Moment of PanicBreitbart ^\r\n | 10/01/2023\r\n | Pam Key\r\nPosted on 10/01/2023 9:41:27 AM PDT by ChicagoConservative27\r\nRepresentative… [+5161 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "futurism.com",
        "title": "Twitter CEO Trying to Figure Out What to Tell Banks That Funded Elon's Disastrous Acquisition",
        "description": "\"She has to get him out.\" Tesla CEO Elon Musk had to dig deep into his own pockets to fund his disastrous acquisition of Twitter last year, funding the $44 billion purchase with billions of dollars coming out of his Tesla shares and his own funds. Even then, …",
        "url": "https://biztoc.com/x/577bcfa381a9957f",
        "urlToImage": "https://c.biztoc.com/p/577bcfa381a9957f/og.webp",
        "publishedAt": "2023-10-01T16:32:12Z",
        "content": "\"She has to get him out.\"Tesla CEO Elon Musk had to dig deep into his own pockets to fund his disastrous acquisition of Twitter last year, funding the $44 billion purchase with billions of dollars co… [+275 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "wired.com",
        "title": "The Game Theory of the Auto Strikes",
        "description": "The United Auto Workers strike against Detroit’s Big Three—Ford, General Motors, and Stellantis—escalated into its third week on Friday. Workers at two additional plants operated by Ford and GM walked off the job, taking the number of union members striking f…",
        "url": "https://biztoc.com/x/4897ae91055aa19b",
        "urlToImage": "https://c.biztoc.com/p/4897ae91055aa19b/og.webp",
        "publishedAt": "2023-10-01T16:18:08Z",
        "content": "The United Auto Workers strike against Detroits Big ThreeFord, General Motors, and Stellantisescalated into its third week on Friday. Workers at two additional plants operated by Ford and GM walked o… [+300 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Slashdot.org"
        },
        "author": "feedfeeder",
        "title": "For Tesla's Cybertruck, Another Sales Launch Date Comes and Goes - The Wall Street Journal",
        "description": "For Tesla's Cybertruck, Another Sales Launch Date Comes and GoesThe Wall Street Journal Tesla Cybertruck Up for Auction at 29th Petersen GalaDrive Tesla Canada Tesla Cybertruck to be auctioned off at 29th Petersen Gala on Oct 7TESLARATI Cybertruck Auction Spu…",
        "url": "https://slashdot.org/firehose.pl?op=view&amp;id=171931933",
        "urlToImage": null,
        "publishedAt": "2023-10-01T16:15:43Z",
        "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "barrons.com",
        "title": "Tesla Delivery Numbers Are Coming. Here’s What To Expect",
        "description": "Wall Street projects that Tesla delivered about 455,000 units in the third quarter. Estimates are wide-ranging though. The number could come in anywhere from 440,000 to 485,000 units.#tesla",
        "url": "https://biztoc.com/x/c68e2352bbc0e203",
        "urlToImage": "https://c.biztoc.com/p/c68e2352bbc0e203/s.webp",
        "publishedAt": "2023-10-01T16:10:05Z",
        "content": "Wall Street projects that Tesla delivered about 455,000 units in the third quarter. Estimates are wide-ranging though. The number could come in anywhere from 440,000 to 485,000 units.\r\n#tesla\r\nThis s… [+30 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Barron's"
        },
        "author": "Al Root",
        "title": "Tesla Delivery Numbers Are Coming. Here's What To Expect.",
        "description": "Wall Street projects that Tesla delivered about 455,000 units in the third quarter. Estimates are wide-ranging though. The number could come in anywhere from 440,000 to 485,000 units.",
        "url": "https://www.barrons.com/articles/tesla-delivery-numbers-are-coming-221f59d7",
        "urlToImage": "https://images.barrons.com/im-50378827/social",
        "publishedAt": "2023-10-01T15:52:56Z",
        "content": "Electric vehicle leader \r\n Tesla\r\n is due to report third-quarter unit sales Monday. Investors should brace for a little bit of chaos. Wall Street estimates are all over the place. A few weeks ago an… [+2548 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "wsj.com",
        "title": "For Tesla’s Cybertruck, Another Sales Launch Date Comes and Goes",
        "description": "Tesla Chief Executive Elon Musk had stoked hopes this spring that the Cybertruck would finally arrive in the third quarter. #tesla #elonmusk",
        "url": "https://biztoc.com/x/32ec8ae549f5eeb8",
        "urlToImage": "https://c.biztoc.com/p/32ec8ae549f5eeb8/og.webp",
        "publishedAt": "2023-10-01T15:50:08Z",
        "content": "Tesla Chief Executive Elon Musk had stoked hopes this spring that the Cybertruck would finally arrive in the third quarter.\r\n#tesla#elonmusk\r\nThis story appeared on wsj.com, ."
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "barrons.com",
        "title": "Tesla Delivery Numbers Are Coming. Here’s What To Expect",
        "description": "Wall Street projects that Tesla delivered about 455,000 units in the third quarter. Estimates are wide-ranging though. The number could come in anywhere from 440,000 to 485,000 units.#tesla",
        "url": "https://biztoc.com/x/b833b9e653651924",
        "urlToImage": "https://c.biztoc.com/p/b833b9e653651924/s.webp",
        "publishedAt": "2023-10-01T15:46:09Z",
        "content": "Wall Street projects that Tesla delivered about 455,000 units in the third quarter. Estimates are wide-ranging though. The number could come in anywhere from 440,000 to 485,000 units.\r\n#tesla\r\nThis s… [+30 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MakeUseOf"
        },
        "author": "Alex Ramos",
        "title": "7 Things You Should Know About the 2024 Mercedes-AMG EQE SUV",
        "description": "In a sea of talented high-performance premium electric SUVs, the high-riding AMG EQE has many unique features to help it stand out.",
        "url": "https://www.makeuseof.com/mercedes-amg-eqe-suv-special-traits/",
        "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/09/screenshot-2023-09-28-at-12-00-37-am.png",
        "publishedAt": "2023-10-01T15:33:38Z",
        "content": "Key Takeaways\r\n<ul><li> The Mercedes-Benz AMG EQE SUV offers up to 235 miles of range, which is sufficient for daily use and occasional road trips. It sacrifices some range for performance and fast-c… [+7462 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Investopedia"
        },
        "author": "Nathan Reiff",
        "title": "Top 25 Stocks in the S&P 500 by Index Weight for October 2023",
        "description": "The top 25 stocks in the S&P 500 by weight include many of the largest tech firms in the world.",
        "url": "https://www.investopedia.com/top-25-stocks-in-the-s-and-p-500-7974612",
        "urlToImage": "https://www.investopedia.com/thmb/-IvA9BpBMOFDs9VDNnsVCqDW_2E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1466778773-79f166fdcf3d4820b1a3c07f9aacc592.jpg",
        "publishedAt": "2023-10-01T15:30:00Z",
        "content": "The Standard &amp; Poor's (S&amp;P) 500 is an index of 503 stocks representing the largest companies listed in the U.S., with some firms issuing multiple share classes.\r\nSince its launch in 1957, the… [+7768 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "wsj.com",
        "title": "For Tesla’s Cybertruck, Another Sales Launch Date Comes and Goes",
        "description": "Tesla Chief Executive Elon Musk had stoked hopes this spring that the Cybertruck would finally arrive in the third quarter. #tesla #elonmusk",
        "url": "https://biztoc.com/x/fd0515e7bc0cb808",
        "urlToImage": "https://c.biztoc.com/p/fd0515e7bc0cb808/s.webp",
        "publishedAt": "2023-10-01T15:06:07Z",
        "content": "Tesla Chief Executive Elon Musk had stoked hopes this spring that the Cybertruck would finally arrive in the third quarter.\r\n#tesla#elonmusk\r\nThis story appeared on wsj.com, ."
        },
        {
        "source": {
        "id": null,
        "name": "Barron's"
        },
        "author": "Al Root",
        "title": "China's EV Price Wars Are Working. Deliveries Are Solid.",
        "description": "Combined deliveries for NIO, XPeng, and Li Auto came in at almost 67,000 vehicles for September, the second-best month ever.",
        "url": "https://www.barrons.com/articles/china-ev-price-wars-deliveries-solid-a20d392c",
        "urlToImage": "https://images.barrons.com/im-76032007/social",
        "publishedAt": "2023-10-01T14:56:43Z",
        "content": "Early delivery results for September look solid. \r\n NIO\r\n (ticker: \r\n NIO\r\n ), \r\n Li Auto\r\n (LI), and \r\n XPeng\r\n (XPEV) delivered a combined 66,831 vehicles this past month, up 116% from the same tim… [+2166 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "teslarati.com",
        "title": "Tesla Cybertruck to be auctioned off at 29th Petersen Gala on Oct 7",
        "description": "An attendee of the 29th Petersen Gala on October 7, 2023, will be going home with a very unique vehicle — a 2024 Tesla Cybertruck. The Petersen Automotive Museum will be holding its annual gala on October 7 from 6 p.m. to 10 p.m. The event is high-end, with a…",
        "url": "https://biztoc.com/x/852016ca5f712575",
        "urlToImage": "https://c.biztoc.com/p/852016ca5f712575/og.webp",
        "publishedAt": "2023-10-01T14:54:07Z",
        "content": "An attendee of the 29th Petersen Gala on October 7, 2023, will be going home with a very unique vehicle a 2024 Tesla Cybertruck.The Petersen Automotive Museum will be holding its annual gala on Octob… [+313 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "wsj.com",
        "title": "For Tesla’s Cybertruck, Another Sales Launch Date Comes and Goes",
        "description": "Tesla Chief Executive Elon Musk had stoked hopes this spring that the Cybertruck would finally arrive in the third quarter. #tesla #elonmusk",
        "url": "https://biztoc.com/x/eb7eae1f95664b02",
        "urlToImage": "https://c.biztoc.com/p/eb7eae1f95664b02/s.webp",
        "publishedAt": "2023-10-01T14:38:06Z",
        "content": "Tesla Chief Executive Elon Musk had stoked hopes this spring that the Cybertruck would finally arrive in the third quarter.\r\n#tesla#elonmusk\r\nThis story appeared on wsj.com, ."
        },
        {
        "source": {
        "id": null,
        "name": "The Indian Express"
        },
        "author": "Trends Desk",
        "title": "Watch: SRK meets fan waiting outside his home for 33 days",
        "description": "Content creator Aakash Pillay got the attention of SRK’s manager Pooja Dadlani who arranged a short meeting between him and SRK",
        "url": "https://indianexpress.com/article/trending/trending-in-india/watch-srk-meets-fan-waiting-outside-his-home-for-33-days-8964260/",
        "urlToImage": "https://images.indianexpress.com/2023/10/SRK-fan-meets-him-33-days.jpg",
        "publishedAt": "2023-10-01T14:19:29Z",
        "content": "A diehard Shah Rukh Khan (SRK) fans wish to meet his idol finally came true after a wait of 33 days. Content creator Aakash Pillay started his quest to meet SRK by waiting outside Mannat, SRKs Mumbai… [+1566 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Ambcrypto.com"
        },
        "author": "Suzuki Shillsalot",
        "title": "ChatGPT believes investing $1,000 in Dogecoin is a strategic move",
        "description": "I asked ChatGPT about investing in Dogecoin, the leading memecoin. The bot says that it could be a strategic move.",
        "url": "https://ambcrypto.com/chatgpt-doge-price-prediction-28/",
        "urlToImage": "https://statics.ambcrypto.com/wp-content/uploads/2023/09/Capture-209-1000x600.png",
        "publishedAt": "2023-10-01T14:05:43Z",
        "content": "Disclaimer: The information presented does not constitute financial, investment, trading, or other types of advice and is solely the writers opinion.\r\nDogecoin [DOGE] had a rather uneventful week as … [+7434 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "Josh Schafer",
        "title": "A jobs report and auto strikes usher in a new quarter: What to know this week",
        "description": "After a market downturn over the past week,  a closer look at the labor market awaits investors as the Federal Reserve's interest rate hikes remain in focus.",
        "url": "https://finance.yahoo.com/news/a-jobs-report-and-auto-strikes-usher-in-a-new-quarter-what-to-know-this-week-140054179.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/qheZ1c8d85pw0.w5vLGLTg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-09/f9ab0ba0-5956-11ee-bfeb-937e757c2678",
        "publishedAt": "2023-10-01T14:00:54Z",
        "content": "Stocks just had their worst month of the year and the start of a new quarter won't bring much reprieve.\r\nThe September jobs report highlights the week of economic data after a last minute deal saved … [+5933 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "fortune.com",
        "title": "Tesla faces such fierce competition in China that it's offering a revamped Model Y with no price increase",
        "description": "Tesla Inc. released an updated version of the Model Y in China, with improved configurations and the same starting price, in a push to better compete with local rivals. Among the changes is a slightly faster 0-100 km/h acceleration time of 5.9 seconds, a new …",
        "url": "https://biztoc.com/x/c43756cb0048548a",
        "urlToImage": "https://c.biztoc.com/p/c43756cb0048548a/s.webp",
        "publishedAt": "2023-10-01T13:54:05Z",
        "content": "Tesla Inc. released an updated version of the Model Y in China, with improved configurations and the same starting price, in a push to better compete with local rivals.Among the changes is a slightly… [+275 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Ambcrypto.com"
        },
        "author": "Suzuki Shillsalot",
        "title": "I asked ChatGPT about Ethereum Classic as 2024 draws near",
        "description": "ChatGPT expects the price of Ethereum Classic to reach $150 by 2024. Its on-chain metrics also point towards a price rally.",
        "url": "https://ambcrypto.com/chatgpt-ethereum-classic-price-prediction-28/",
        "urlToImage": "https://statics.ambcrypto.com/wp-content/uploads/2023/09/Capture-234-1000x600.png",
        "publishedAt": "2023-10-01T13:50:14Z",
        "content": "Disclaimer: The information presented does not constitute financial, investment, trading, or other types of advice and is solely the writers opinion.\r\nOn 30 September, Ethereum Classic [ETC] crossed … [+7242 chars]"
        },
        {
        "source": {
        "id": "fortune",
        "name": "Fortune"
        },
        "author": "Bloomberg",
        "title": "Tesla faces such fierce competition in China that it's offering a revamped Model Y with no price increase",
        "description": "Elon Musk's electric-vehicle maker faces escalating price pressure from domestic rivals like BYD Co.",
        "url": "https://fortune.com/2023/10/01/tesla-china-revamped-model-y-no-price-increase-byd-competition/",
        "urlToImage": "https://content.fortune.com/wp-content/uploads/2023/10/GettyImages-1487511212-e1696167478530.jpg?resize=1200,600",
        "publishedAt": "2023-10-01T13:44:38Z",
        "content": "Tesla Inc. released an updated version of the Model Y in China, with improved configurations and the same starting price, in a push to better compete with local rivals.Among the changes is a slightly… [+840 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "investing.com",
        "title": "Tesla can't avoid EU probe; Nio cries fake news: This week in EVs By",
        "description": "Investing.com -- Here is your weekly Pro Recap of the past week's biggest headlines in the electric vehicle space: Nio denies reports of fundraising effort; and Tesla finds itself subject to EU probe. As always, InvestingPro users got these headlines at light…",
        "url": "https://biztoc.com/x/a0296660da64dbb5",
        "urlToImage": "https://c.biztoc.com/p/a0296660da64dbb5/s.webp",
        "publishedAt": "2023-10-01T13:34:05Z",
        "content": "Investing.com -- Here is your weekly Pro Recap of the past week's biggest headlines in the electric vehicle space: Nio denies reports of fundraising effort; and Tesla finds itself subject to EU probe… [+306 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "investors.com",
        "title": "Dow Jones Falls As Yellen Issues Warning, Inflation Cools; Tesla Rises Ahead Of Q3 Deliveries",
        "description": "The Dow Jones Industrial Average gave up its early gains and was down 0.4% at 1:30 p.m. ET Friday. House Speaker Kevin McCarthy was reported to be seeking a short-term spending bill amid mounting challenges as a possible government shutdown looms. Late Thursd…",
        "url": "https://biztoc.com/x/4457d36d0dc2df23",
        "urlToImage": "https://c.biztoc.com/p/4457d36d0dc2df23/og.webp",
        "publishedAt": "2023-10-01T13:10:31Z",
        "content": "The Dow Jones Industrial Average gave up its early gains and was down 0.4% at 1:30 p.m. ET Friday. House Speaker Kevin McCarthy was reported to be seeking a short-term spending bill amid mounting cha… [+304 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "benzinga.com",
        "title": "Tesla Stares At Q3 Deliveries Miss, Rivian Not Losing Sleep Over Cybertruck, Nio's Rumored German Tie-Up And More: Biggest EV Stories Of The Week - (XPEV),…",
        "description": "Electric vehicle stocks ended mostly higher in the week that ended on Sept. 29, even as the broader market showed muted sentiment despite the oversold levels. Tesla, Inc. TSLA stock bounced around its recent bottom and yet closed slightly higher for the week.…",
        "url": "https://biztoc.com/x/ff8da6f7de159626",
        "urlToImage": "https://c.biztoc.com/p/ff8da6f7de159626/og.webp",
        "publishedAt": "2023-10-01T13:10:23Z",
        "content": "Electric vehicle stocks ended mostly higher in the week that ended on Sept. 29, even as the broader market showed muted sentiment despite the oversold levels. Tesla, Inc. TSLA stock bounced around it… [+296 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Screen Rant"
        },
        "author": "Kurtis Seid",
        "title": "8 Best Weapon Mods In Starfield",
        "description": "Weapon Mods are a means of customizing guns in Starfield. They can range from higher damage, accuracy, ammunition, or new effects.",
        "url": "https://screenrant.com/starfield-best-weapon-mods/",
        "urlToImage": "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/09/7-10-best-weapon-mods-in-starfield.jpg",
        "publishedAt": "2023-10-01T13:03:58Z",
        "content": "Weapon mods are a great way to customize gear in Starfield. These can improve damage, higher accuracy, faster reloading, or other secondary effects. Mods belong to specific categories, like magazines… [+6000 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Marketscreener.com"
        },
        "author": "Reuters",
        "title": "Wall St Week Ahead-US stock market's powerhouses tested by soaring bond yields",
        "description": "(marketscreener.com) \n \n \n NEW YORK, Sept 29 -\n Surging bond yields are rattling U.S. stocks, and some\ninvestors worry the richly valued shares of giant technology and\ngrowth companies may be another weak spot.\n Seven megacap stocks -- Apple, Microsoft,\nAlpha…",
        "url": "https://www.marketscreener.com/quote/index/S-P-500-4985/news/Wall-St-Week-Ahead-US-stock-market-s-powerhouses-tested-by-soaring-bond-yields-44960099/",
        "urlToImage": "https://img.zonebourse.com/reuters/2016-11/2016-11-04T133428Z_2_LYNXMPECA30UA_RTROPTP_2_USA-STOCKS.JPG",
        "publishedAt": "2023-10-01T13:00:00Z",
        "content": "NEW YORK, Sept 29 (Reuters) -\r\nSurging bond yields are rattling U.S. stocks, and some\r\ninvestors worry the richly valued shares of giant technology and\r\ngrowth companies may be another weak spot.\r\nSe… [+4218 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Slashdot.org"
        },
        "author": "feedfeeder",
        "title": "Stellantis COLA offer to UAW saved itself from more strike action - Detroit Free Press",
        "description": "Stellantis COLA offer to UAW saved itself from more strike actionDetroit Free Press Why Tesla May Be The Big Winner Of The UAW StrikesCNBC The Game Theory of the Auto StrikesWIRED UAW's approach under Fain broadens union's influenceAutomotive News UAW strike,…",
        "url": "https://slashdot.org/firehose.pl?op=view&amp;id=171930871",
        "urlToImage": null,
        "publishedAt": "2023-10-01T12:52:48Z",
        "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "scmp.com",
        "title": "Tesla rival Li Auto breaks sales record for the sixth month amid healthy EV demand in China",
        "description": "Tesla rival Li Auto breaks sales record for the sixth month amid healthy EV demand in China Li Auto, one of China’s top electric vehicle (EV) marques, broke monthly sales record for the sixth straight time this year, riding on robust demand in , buoyed by a b…",
        "url": "https://biztoc.com/x/0c324e75dd57c0ad",
        "urlToImage": "https://c.biztoc.com/p/0c324e75dd57c0ad/s.webp",
        "publishedAt": "2023-10-01T12:42:08Z",
        "content": "Tesla rival Li Auto breaks sales record for the sixth month amid healthy EV demand in ChinaLi Auto, one of Chinas top electric vehicle (EV) marques, broke monthly sales record for the sixth straight … [+288 chars]"
        },
        {
        "source": {
        "id": "the-verge",
        "name": "The Verge"
        },
        "author": "Elizabeth Lopatto",
        "title": "How the Elon Musk biography exposes Walter Isaacson",
        "description": "Walter Isaacson’s Elon Musk is a strangely incurious book. Its shallow reporting and bizarre skew left me with more questions than I had before I read it.",
        "url": "https://www.theverge.com/2023/10/1/23895069/walter-isaacson-biography-musk-review",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/xvKHOYnS4qfZUt9qMxlnTYUPNdY=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24145486/226378_Twitter_Risk_Elon_Musk_WJoel.jpg",
        "publishedAt": "2023-10-01T12:30:00Z",
        "content": "How the Elon Musk biography exposes Walter Isaacson\r\nHow the Elon Musk biography exposes Walter Isaacson\r\n / One way to keep Musks myth intact is simply not to check things out.\r\nByElizabeth Lopatto,… [+19285 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "aol.com",
        "title": "UAW strike chaos isn't all good news for Tesla",
        "description": "None Big gains in the UAW strike could bolster another organizing drive at Tesla. • None The union effort could also pressure Volkswagen, Honda, and Toyota. • None The UAW is looking to remake its reputation among auto workers. As disgruntled workers revolt a…",
        "url": "https://biztoc.com/x/f18ab121f91802d6",
        "urlToImage": "https://c.biztoc.com/p/f18ab121f91802d6/s.webp",
        "publishedAt": "2023-10-01T12:06:08Z",
        "content": "None Big gains in the UAW strike could bolster another organizing drive at Tesla.None The union effort could also pressure Volkswagen, Honda, and Toyota.None The UAW is looking to remake its reputati… [+266 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CleanTechnica"
        },
        "author": "Naomi Cole & Joe Wachunas",
        "title": "We’ve Installed Solar on Our Roof Three Times. Here’s What to Know.",
        "description": "If you’re like us and want to speed up the clean energy revolution, decarbonize your life, save on your electric bill, and make your home more resilient, you have a few options to run your home and vehicle on clean energy. In most cases, this means harnessing…",
        "url": "https://cleantechnica.com/2023/10/01/weve-installed-solar-on-our-roof-three-times-heres-what-to-know/",
        "urlToImage": "https://cleantechnica.com/files/2023/04/Rooftop-Solar-Power-Clean-Energy-Microgrid-CleanTechnica-Watermark.png",
        "publishedAt": "2023-10-01T11:30:42Z",
        "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nIf youre like us and want to speed up the clean energy revolution, decarbonize your life, save on your electr… [+10792 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Investing.com"
        },
        "author": "Investing.com",
        "title": "Tesla can't avoid EU probe; Nio cries fake news: This week in EVs",
        "description": "Tesla can't avoid EU probe; Nio cries fake news: This week in EVs",
        "url": "https://www.investing.com/news/stock-market-news/tesla-cant-avoid-eu-probe-nio-cries-fake-news-this-week-in-evs-3187454",
        "urlToImage": "https://i-invdn-com.investing.com/news/LYNXMPEE6H1AX_L.jpg",
        "publishedAt": "2023-10-01T11:17:33Z",
        "content": "Investing.com -- Here is your weekly Pro Recap of the past week's biggest headlines in the electric vehicle space: Nio denies reports of fundraising effort; and Tesla finds itself subject to EU probe… [+3691 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Real Deal"
        },
        "author": "Harrison Connery",
        "title": "The best freebies in NY’s real estate market",
        "description": "For just under $22 million, a pocket-minded buyer in New York can get a free beach club membership, a boat and a Tesla.  They’ll just need to buy a $2.8 million Red Hook townhouse for the car, a $12 million waterfront home in Water Mill that comes with a boat…",
        "url": "https://therealdeal.com/new-york/2023/10/01/sellers-add-throw-ins-to-entice-buyers/",
        "urlToImage": "https://static.therealdeal.com/wp-content/uploads/2023/09/Sellers-Add-Throw-Ins-To-Entice-Buyers-f.jpg",
        "publishedAt": "2023-10-01T11:00:00Z",
        "content": "For just under $22 million, a pocket-minded buyer in New York can get a free beach club membership, a boat and a Tesla. \r\nTheyll just need to buy a $2.8 million Red Hook townhouse for the car, a $12 … [+1754 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "tlevin@insider.com (Tim Levin,Nora Naughton)",
        "title": "UAW strike chaos isn't all good news for Tesla",
        "description": "A big contract win for the United Auto Workers could give the union the credibility it needs to organize at Tesla and other automakers, experts said.",
        "url": "https://www.businessinsider.com/how-the-united-auto-workers-uaw-strike-can-affect-tesla-2023-9",
        "urlToImage": "https://i.insider.com/6517025711c4f90019914953?width=1200&format=jpeg",
        "publishedAt": "2023-10-01T10:56:01Z",
        "content": "As disgruntled workers revolt at General Motors, Ford, and Stellantis, it's business as usual at Elon Musk's Tesla. At least for now.\r\nIn some ways, the auto worker's strike is a boon for the non-uni… [+3895 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CleanTechnica"
        },
        "author": "U.S. Energy Information Administration",
        "title": "Weather Events Have Reduced Our U.S. Hydropower Forecast By 6% This Year",
        "description": "Weather events in the U.S. Northwest this past spring and summer led to lower water supply, prompting us to reduce our forecast of U.S. hydropower generation by 6% this year compared with last year. About one-half of the country’s hydropower is generated in t…",
        "url": "https://cleantechnica.com/2023/10/01/weather-events-have-reduced-our-u-s-hydropower-forecast-by-6-this-year/",
        "urlToImage": "https://cleantechnica.com/files/2023/04/Clean-Power-Hydroelectric-Energy-CleanTechnica-Watermark.png",
        "publishedAt": "2023-10-01T10:30:47Z",
        "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nWeather events in the U.S. Northwest this past spring and summer led to lower water supply, prompting us to r… [+3349 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Futurism"
        },
        "author": "Victor Tangermann",
        "title": "Twitter CEO Trying to Figure Out What to Tell Banks That Funded Elon's Disastrous Acquisition",
        "description": "Tesla CEO Elon Musk had to dig deep into his own pockets to fund his disastrous acquisition of Twitter last year. The mercurial CEO funded the transaction, worth roughly $44 billion, with billions of dollars coming out of his Tesla shares and his own funds. E…",
        "url": "https://futurism.com/the-byte/twitter-ceo-tell-banks-funded-elon-disastrous-acquisition",
        "urlToImage": "https://wp-assets.futurism.com/2023/09/twitter-ceo-tell-banks-funded-elon-disastrous-acquisition.jpg",
        "publishedAt": "2023-10-01T10:30:03Z",
        "content": "\"She has to get him out.\"\r\nMea Culpa\r\nTesla CEO Elon Musk had to dig deep into his own pockets to fund his disastrous acquisition of Twitter last year, funding the $44 billion purchase with billions … [+2211 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "brainyai.online",
        "title": "Google Bard's Top 3 EV Stocks for Long-Term Investment",
        "description": "In an increasingly sustainability and clean energy-focused world, electric vehicle (EV) stocks have become a prominent topic among investors. With the rise of environmentally conscious consumers and government policies aimed at reducing carbon emissions, the …",
        "url": "https://biztoc.com/x/662dd32081626070",
        "urlToImage": "https://c.biztoc.com/p/662dd32081626070/s.webp",
        "publishedAt": "2023-10-01T10:08:11Z",
        "content": "In an increasingly sustainability and clean energy-focused world, electric vehicle (EV) stocks have become a prominent topic among investors. With the rise of environmentally conscious consumers and … [+282 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The New Yorker"
        },
        "author": "Benjamin Wallace-Wells",
        "title": "Biden, Trump, and What’s at Stake in the U.A.W. Strike",
        "description": "Both men went to Michigan, each trying to take advantage of something rare in Presidential politics—a genuinely radical point of view, Benjamin Wallace-Wells writes.",
        "url": "https://www.newyorker.com/magazine/2023/10/09/biden-trump-and-whats-at-stake-in-the-uaw-strike",
        "urlToImage": "https://media.newyorker.com/photos/651785bc54de28b11496b12f/16:9/w_1280,c_limit/Comment-09-29-23-social.jpg",
        "publishedAt": "2023-10-01T10:00:00Z",
        "content": "An old Washington principle holds that, at any given moment, only two people in American politics really matter: the President, and whomever the President is arguing with. But last week President Joe… [+6700 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "reuters.com",
        "title": "Tesla launches updated Model Y in China, keeps starting price unchanged",
        "description": "A Tesla logo is seen outside a showroom of the carmaker in Beijing, China May 31, 2023. REUTERS/Thomas Peter/File Photo Acquire Licensing Rights SHANGHAI, Oct 1 (Reuters) - U.S. automaker Tesla (TSLA.O) on Sunday released an updated version of its Model Y in …",
        "url": "https://biztoc.com/x/7d401606f6970d83",
        "urlToImage": "https://c.biztoc.com/p/7d401606f6970d83/og.webp",
        "publishedAt": "2023-10-01T09:36:07Z",
        "content": "A Tesla logo is seen outside a showroom of the carmaker in Beijing, China May 31, 2023. REUTERS/Thomas Peter/File Photo Acquire Licensing RightsSHANGHAI, Oct 1 (Reuters) - U.S. automaker Tesla (TSLA.… [+260 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "Brooke Crothers, Contributor, \n Brooke Crothers, Contributor\n https://www.forbes.com/sites/brookecrothers/",
        "title": "Rivian Had Explosive Growth In Hottest U.S. EV Market",
        "description": "Rivian surged in the biggest U.S. EV market, making it to the top of a long list of car makers.",
        "url": "https://www.forbes.com/sites/brookecrothers/2023/10/01/rivian-had-explosive-growth-in-hottest-us-ev-market/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/651726b091e3f8b87fbf57cf/0x0.jpg?format=jpg&crop=785,442,x0,y136,safe&width=1200",
        "publishedAt": "2023-10-01T09:24:16Z",
        "content": "Rivian R1S\r\nCredit: Brooke Crothers\r\nWhile Teslas growth in California often makes news, Rivians recent surge has not.\r\nRivian appeared on the radar of The California New Car Dealers Association (CNC… [+2300 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CleanTechnica"
        },
        "author": "U.S. Department of Energy",
        "title": "Can A Roof’s Material Cool The Outside Air & Lower Energy Demand?",
        "description": "Can A Roof’s Material Cool The Outside Air? Researchers examined three different types of roofing strategies and",
        "url": "https://cleantechnica.com/2023/10/01/can-a-roofs-material-cool-the-outside-air-lower-energy-demand/",
        "urlToImage": "https://cleantechnica.com/files/2023/09/roof-terrace-1423897_1920.jpg",
        "publishedAt": "2023-10-01T09:10:09Z",
        "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nResearchers examined three different types of roofing strategies and their impact on near-surface temperature… [+7694 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "SoyaCincau.com"
        },
        "author": "Alexander Wong",
        "title": "What is EV Charging Curve and why you shouldn’t DC fast charge beyond 80%? | Let’s Talk about #128",
        "description": "When people talk about charging their electric vehicles (EV), most people boast about the maximum DC charging power possible. The higher the kW number, the faster the battery gets topped up, or so logic dictates. But just because one car can hit a higher peak…",
        "url": "https://soyacincau.com/2023/10/01/what-is-ev-charging-curve-dc-fast-charging-80-percent-lta-128/",
        "urlToImage": "https://soyacincau.com/wp-content/uploads/2023/10/231001-EV-charging-curve-LTA.jpg",
        "publishedAt": "2023-10-01T09:05:06Z",
        "content": "When people talk about charging their electric vehicles (EV), most people boast about the maximum DC charging power possible. The higher the kW number, the faster the battery gets topped up, or so lo… [+3982 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Mindtheproduct.com"
        },
        "author": "Eira Hayward",
        "title": "SUNDAY REWIND: Impossible outcomes by Bruce McCarthy",
        "description": "Author Bruce McCarthy analyses the learnings of product-led organisations that achieved the impossible and changed the world Read more »\nThe post SUNDAY REWIND: Impossible outcomes by Bruce McCarthy appeared first on Mind the Product.",
        "url": "https://www.mindtheproduct.com/sunday-rewind-impossible-outcomes-by-bruce-mccarthy/",
        "urlToImage": "https://www.mindtheproduct.com/wp-content/uploads/2021/07/Bruce-McCarthy-at-mtpcon-Americas.jpg",
        "publishedAt": "2023-10-01T09:00:00Z",
        "content": "Bruce looks at innovative companies which defied expectations like Tesla, Fedex, Porsche and Apple.  Porsche, for example, avoided bankruptcy to become, as the CEO put it, the most profitable car mak… [+782 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "News-Leader"
        },
        "author": "Steve G. Parsons",
        "title": "Joe Biden joined the picket line, but did Donald Trump help create the UAW strike?",
        "description": "Pro-union, protectionist policies instituted by former President Donald Trump laid the groundwork for the strike, a retired economist writes.",
        "url": "https://www.news-leader.com/story/opinion/2023/10/01/did-donald-trump-help-create-the-united-auto-workers-strike/70984331007/",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/uAo1Ho.jumrgvgYUR208OA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/springfield-news-leader/c291fd871beef3bfca0cf569c27889ad",
        "publishedAt": "2023-10-01T08:42:06Z",
        "content": "On Friday, Sept. 22, what began as a targeted stand-up strike by 13,000 UAW workers at three plants owned by Ford, GM and Stellantis was expanded to an additional 38 locations for GM and Stellantis. … [+4620 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Securityaffairs.com"
        },
        "author": "Pierluigi Paganini",
        "title": "Security Affairs newsletter Round 439 by Pierluigi Paganini – International edition",
        "description": "A new round of the weekly SecurityAffairs newsletter arrived! Every week the best security articles from Security Affairs are free for you in your email box. Enjoy a new round of the weekly SecurityAffairs newsletter, including the international press. ALPHV/…",
        "url": "https://securityaffairs.com/151744/breaking-news/security-affairs-newsletter-round-439-by-pierluigi-paganini-international-edition.html",
        "urlToImage": "https://securityaffairs.com/wp-content/uploads/2015/03/newsletter.png",
        "publishedAt": "2023-10-01T08:39:17Z",
        "content": "Security Affairs newsletter Round 439 by Pierluigi Paganini International edition\r\n | ALPHV/BlackCat ransomware gang hacked the hotel chain Motel One\r\n | FBI warns of dual ransomware attacks\r\n | Prog… [+9665 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "reuters.com",
        "title": "Tesla launches updated Model Y in China, keeps starting price unchanged",
        "description": "A Tesla logo is seen outside a showroom of the carmaker in Beijing, China May 31, 2023. REUTERS/Thomas Peter/File Photo Acquire Licensing Rights SHANGHAI, Oct 1 (Reuters) - U.S. automaker Tesla (TSLA.O) on Sunday released an updated version of its Model Y in …",
        "url": "https://biztoc.com/x/4dae06cd78866056",
        "urlToImage": "https://c.biztoc.com/p/4dae06cd78866056/s.webp",
        "publishedAt": "2023-10-01T08:04:15Z",
        "content": "A Tesla logo is seen outside a showroom of the carmaker in Beijing, China May 31, 2023. REUTERS/Thomas Peter/File Photo Acquire Licensing RightsSHANGHAI, Oct 1 (Reuters) - U.S. automaker Tesla (TSLA.… [+260 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "investing.com",
        "title": "Tesla launches updated Model Y in China, keeps starting price unchanged",
        "description": "U.S. automaker Tesla (NASDAQ: ) on Sunday released an updated version of its Model Y in China, with minor changes to the vehicle's exterior and interior. The changes include a new wheel design, according to a post by Tesla's official WeChat account. The start…",
        "url": "https://biztoc.com/x/1a9a9316f06a4cab",
        "urlToImage": "https://c.biztoc.com/p/1a9a9316f06a4cab/s.webp",
        "publishedAt": "2023-10-01T07:58:06Z",
        "content": "U.S. automaker Tesla (NASDAQ: ) on Sunday released an updated version of its Model Y in China, with minor changes to the vehicle's exterior and interior.The changes include a new wheel design, accord… [+252 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "investors.com",
        "title": "Tesla Rivals In China Tee Up To Report EV Sales; XPeng Pops",
        "description": "Tesla rivals in China are due to report EV sales for September, with the startups Nio (NIO), Li Auto (LI) and XPeng (XPEV) on tap Sunday. XPeng stock jumped above a key level Friday. Chinese EV and battery giant BYD (BYDDF) is on deck in early October. Tesla …",
        "url": "https://biztoc.com/x/cb59c1a241cdd532",
        "urlToImage": "https://c.biztoc.com/p/cb59c1a241cdd532/s.webp",
        "publishedAt": "2023-10-01T07:42:06Z",
        "content": "Tesla rivals in China are due to report EV sales for September, with the startups Nio (NIO), Li Auto (LI) and XPeng (XPEV) on tap Sunday. XPeng stock jumped above a key level Friday.Chinese EV and ba… [+258 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "teslarati.com",
        "title": "Tesla rolls out Model Y update with ambient lights and new wheels in China",
        "description": "Tesla China has released a minor update to the Model Y crossover in China. The vehicle features a number of small but notable changes to its exterior and interior, allowing Tesla China to start the fourth quarter on a strong note. As the fourth quarter began …",
        "url": "https://biztoc.com/x/c410fb8abf313ebd",
        "urlToImage": "https://c.biztoc.com/p/c410fb8abf313ebd/og.webp",
        "publishedAt": "2023-10-01T07:40:06Z",
        "content": "Tesla China has released a minor update to the Model Y crossover in China. The vehicle features a number of small but notable changes to its exterior and interior, allowing Tesla China to start the f… [+311 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Ynetnews"
        },
        "author": "Tova Herzl",
        "title": "What do Netanyahu and Musk have in common?",
        "description": "Opinion: When Israel’s prime minister spends time and money to meet with a person who enables hate speech, including against Jews, that can be viewed as tolerance towards antisemitic discourse",
        "url": "https://www.ynetnews.com/article/bydivq8et",
        "urlToImage": "https://ynet-pic1.yit.co.il/picserver5/crop_images/2023/09/18/SJI8XW8Ja/SJI8XW8Ja_84_186_1095_616_0_large.jpg",
        "publishedAt": "2023-10-01T07:10:51Z",
        "content": "What do Elon Musk, whom Prime Minister Netanyahu visited recently in San Francisco, and Itzik Zarka, a vocal Likud activist, have in common? For the answer, read to the end of this piece.\r\nLet us beg… [+4885 chars]"
        },
        {
        "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": "Reuters",
        "title": "Tesla launches updated Model Y in China, keeps starting price unchanged",
        "description": "U.S. automaker Tesla <a href=\"https://www.reuters.com/markets/companies/TSLA.O\" target=\"_blank\">(TSLA.O)</a> on Sunday released an updated version of its Model Y in China, with minor changes to the vehicle's exterior and interior.",
        "url": "https://www.reuters.com/business/autos-transportation/tesla-launches-updated-model-y-china-keeps-starting-price-unchanged-2023-10-01/",
        "urlToImage": "https://www.reuters.com/resizer/PUVBhVv8bywm_nhI-uWghE8gS18=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/N55OTR5ZT5KOJDXEDFIZQXHVNA.jpg",
        "publishedAt": "2023-10-01T07:03:35Z",
        "content": "SHANGHAI, Oct 1 (Reuters) - U.S. automaker Tesla (TSLA.O) on Sunday released an updated version of its Model Y in China, with minor changes to the vehicle's exterior and interior.\r\nThe changes includ… [+495 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Paul Tan's Automotive News"
        },
        "author": "Paul Tan",
        "title": "Tesla Model Y gets minor updates in China – interior ambient lighting, 5.9s 0-100 and black wheels for RWD",
        "description": "Some interesting news especially for those who have placed bookings for the Tesla Model Y in Malaysia. The Tesla Model Y has received a minor update in China. It’s not quite a big upgrade like […]\nThe post Tesla Model Y gets minor updates in China – interior …",
        "url": "https://paultan.org/2023/10/01/tesla-model-y-gets-minor-updates-in-china-interior-ambient-lighting-5-9s-0-100-and-black-wheels-for-rwd/",
        "urlToImage": "https://paultan.org/image/2023/10/Screenshot-2023-10-01-at-2.45.10-PM-1200x590.jpg",
        "publishedAt": "2023-10-01T07:00:48Z",
        "content": "Some interesting news especially for those who have placed bookings for the Tesla Model Y in Malaysia. The Tesla Model Y has received a minor update in China.\r\nIt’s not quite a big upgrade like what … [+1261 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "reuters.com",
        "title": "Tesla launches updated Model Y in China, keeps starting price unchanged",
        "description": "A Tesla logo is seen outside a showroom of the carmaker in Beijing, China May 31, 2023. REUTERS/Thomas Peter/File Photo Acquire Licensing Rights SHANGHAI, Oct 1 (Reuters) - U.S. automaker Tesla (TSLA.O) on Sunday released an updated version of its Model Y in …",
        "url": "https://biztoc.com/x/82f1a838c1fd0f86",
        "urlToImage": "https://c.biztoc.com/p/82f1a838c1fd0f86/s.webp",
        "publishedAt": "2023-10-01T06:58:05Z",
        "content": "A Tesla logo is seen outside a showroom of the carmaker in Beijing, China May 31, 2023. REUTERS/Thomas Peter/File Photo Acquire Licensing RightsSHANGHAI, Oct 1 (Reuters) - U.S. automaker Tesla (TSLA.… [+260 chars]"
        },
        {
        "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
        },
        "author": "Reuters",
        "title": "Tesla launches updated Model Y in China, keeps starting price unchanged",
        "description": "Tesla unveiled a restyled Model 3 with a longer driving range, manufactured at its Shanghai factory, in China and other export markets in early September. The changes include a new wheel design, according to a post by Tesla's official WeChat account. The star…",
        "url": "https://economictimes.indiatimes.com/industry/auto/auto-news/tesla-launches-updated-model-y-in-china-keeps-starting-price-unchanged/articleshow/104082490.cms",
        "urlToImage": "https://img.etimg.com/thumb/msid-104082580,width-1200,height-630,imgsize-811318,overlay-economictimes/photo.jpg",
        "publishedAt": "2023-10-01T06:55:59Z",
        "content": "U.S. automaker Tesla on Sunday released an updated version of its Model Y in China, with minor changes to the vehicle's exterior and interior.The changes include a new wheel design, according to a po… [+313 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Investing.com"
        },
        "author": "Reuters",
        "title": "Tesla launches updated Model Y in China, keeps starting price unchanged",
        "description": "Tesla launches updated Model Y in China, keeps starting price unchanged",
        "url": "https://www.investing.com/news/stock-market-news/tesla-launches-updated-model-y-in-china-keeps-starting-price-unchanged-3187428",
        "urlToImage": "https://i-invdn-com.investing.com/news/Tesla_800x533_L_1608133744.jpg",
        "publishedAt": "2023-10-01T06:50:35Z",
        "content": "SHANGHAI (Reuters) - U.S. automaker Tesla (NASDAQ:TSLA) on Sunday released an updated version of its Model Y in China, with minor changes to the vehicle's exterior and interior. \r\nThe changes include… [+389 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CNA"
        },
        "author": null,
        "title": "Tesla launches updated Model Y in China, keeps starting price unchanged",
        "description": "SHANGHAI : U.S. automaker Tesla on Sunday released an updated version of its Model Y in China, with minor changes to the vehicle's exterior and interior. The changes include a new wheel design, according to a post by Tesla's official WeChat account. The start…",
        "url": "https://www.channelnewsasia.com/business/tesla-launches-updated-model-y-china-keeps-starting-price-unchanged-3812236",
        "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--Vht-pFfx--/fl_relative,g_south_east,l_one-cms:core:watermark:reuters,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2023-10-01t064818z_1_lynxnpej900dm_rtroptp_3_musk-china.jpg?itok=chTO54_B",
        "publishedAt": "2023-10-01T06:48:18Z",
        "content": "SHANGHAI : U.S. automaker Tesla on Sunday released an updated version of its Model Y in China, with minor changes to the vehicle's exterior and interior. \r\nThe changes include a new wheel design, acc… [+365 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Marketscreener.com"
        },
        "author": "Reuters",
        "title": "Tesla launches updated Model Y in China, keeps starting price unchanged",
        "description": "(marketscreener.com) U.S. automaker Tesla\non Sunday released an updated version of its Model Y in\nChina, with minor changes to the vehicle's exterior and\ninterior.\n The changes include a new wheel design, according to a post\nby Tesla's official WeChat account…",
        "url": "https://www.marketscreener.com/quote/stock/TESLA-INC-6344549/news/Tesla-launches-updated-Model-Y-in-China-keeps-starting-price-unchanged-44959820/",
        "urlToImage": "https://img.zonebourse.com/reuters/2023-06/2023-06-13T033050Z_1_LYNXMPEJ5C02N_RTROPTP_3_TESLA-JOBS.JPG",
        "publishedAt": "2023-10-01T06:29:02Z",
        "content": "SHANGHAI, Oct 1 (Reuters) - U.S. automaker Tesla\r\non Sunday released an updated version of its Model Y in\r\nChina, with minor changes to the vehicle's exterior and\r\ninterior.\r\nThe changes include a ne… [+442 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Marketscreener.com"
        },
        "author": "Reuters",
        "title": "TESLA ROLLS OUT UPDATED MODEL Y IN CHINA - WECHAT POST…",
        "description": "(marketscreener.com) \n TESLA ROLLS OUT UPDATED MODEL Y IN CHINA - WECHAT POST\n https://www.marketscreener.com/news/latest/TESLA-ROLLS-OUT-UPDATED-MODEL-Y-IN-CHINA-WECHAT-POST-8230--44959813/?utm_medium=RSS&utm_content=20231001",
        "url": "https://www.marketscreener.com/news/latest/TESLA-ROLLS-OUT-UPDATED-MODEL-Y-IN-CHINA-WECHAT-POST-8230--44959813/",
        "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
        "publishedAt": "2023-10-01T06:29:02Z",
        "content": "Two groups, including Apollo, bidding for SAS airline -Aftenposten"
        },
        {
        "source": {
        "id": null,
        "name": "CleanTechnica"
        },
        "author": "Juan Diego Celemín Mojica",
        "title": "The Volvo EX30 Arrives In Latin America, Signaling The End Of The Beginning For ICEVs",
        "description": "Despite some promising countries (mainly Costa Rica), Latin America remains a laggard in the transition to cleaner, greener transportation. Those of you who read my report on the EV market situation in the region may remember that only four countries have sur…",
        "url": "https://cleantechnica.com/2023/10/01/the-volvo-ex30-arrives-in-latin-america-signaling-the-end-of-the-beginning-for-icevs/",
        "urlToImage": "http://cleantechnica.com/files/2023/09/Volvo-EX30-Press-Exterior-2000x1000-1-800x400.png",
        "publishedAt": "2023-10-01T04:33:21Z",
        "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nDespite some promising countries (mainly Costa Rica), Latin America remains a laggard in the transition to cl… [+4486 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "New Zealand Herald"
        },
        "author": null,
        "title": "Why Linda Yaccarino took on the wildest job in Silicon Valley",
        "description": "FT: Can the chief of the firm formerly known as Twitter survive Musk’s chaos?",
        "url": "https://www.nzherald.co.nz/business/why-linda-yaccarino-took-on-the-wildest-job-in-silicon-valley/XNT5TTPIVNGGHMCL7K2CDB2KGU/",
        "urlToImage": "https://www.nzherald.co.nz/resizer/P-3Fp6Xn5yyK0KlziCmDyXB_UEE=/1200x675/smart/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/DQR5YR2SEBFRXCTXCLQKTFO24M.jpg",
        "publishedAt": "2023-10-01T04:00:00Z",
        "content": "New X CEO Linda Yaccarino, during Vox Media's 2023 Code Conference in on September 27. Can the chief of the company formerly known as Twitter survive Musks chaos and win back advertisers? Photo / Get… [+30932 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CleanTechnica"
        },
        "author": "Steve Hanley",
        "title": "Northvolt Selects Quebec For Its First North American Battery Factory",
        "description": "Northvolt has selected Quebec as the location for its first battery factory in North America, thanks to significant government incentives.",
        "url": "https://cleantechnica.com/2023/09/30/northvolt-selects-quebec-for-its-first-north-american-battery-factory/",
        "urlToImage": "http://cleantechnica.com/files/2023/09/Northvolt-Canada.jpg",
        "publishedAt": "2023-10-01T03:02:52Z",
        "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nNorthvolt is coming to Canada, thanks to the Inflation Reduction Act passed by the US last summer. The incent… [+7289 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "Dale Buss, Contributor, \n Dale Buss, Contributor\n https://www.forbes.com/sites/dalebuss/",
        "title": "Harbinger Focuses Its Electric Platform On Mid-Duty Vehicles",
        "description": "Lots of companies are doing all-electric cars and electrified long-haul trucks. But Harbinger is aiming at what it thinks a sweet spot: the mid-duty market.",
        "url": "https://www.forbes.com/sites/dalebuss/2023/09/30/harbinger-focuses-its-electric-platform-on-mid-duty-vehicles/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/62fe40baadccff017f1dbcbd/0x0.jpg?format=jpg&width=1200",
        "publishedAt": "2023-10-01T01:58:48Z",
        "content": "Lots of companies are doing all-electric cars and many others are focusing on electrified long-haul trucks. But Harbinger Motors believes its identified a sweet spot for electrification that is in be… [+3715 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CleanTechnica"
        },
        "author": "Steve Hanley",
        "title": "Volkswagen Cuts EV Production, Cancels New Wolfsburg Factory",
        "description": "Volkswagen announced this week a new plan for the production of electric vehicles that does not include building a new factory.",
        "url": "https://cleantechnica.com/2023/09/30/volkswagen-cuts-ev-production-cancels-new-wolfsburg-factory/",
        "urlToImage": "http://cleantechnica.com/files/2023/09/ID.-GTI-Concept.jpg",
        "publishedAt": "2023-10-01T01:52:02Z",
        "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nVolkswagen has reduced the output of electric cars at its German factories and has cancelled plans to build a… [+8469 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Bleeding Cool News"
        },
        "author": "Tom Chang",
        "title": "William Shatner Calls Out Elon Musk Again Over Fake Twitter/X Accounts",
        "description": "It's hard to tell who needs who more these days. Twitter & Tesla mogul Elon Musk, who tries to continue to justify his actions on his fledgling social media platform, including a maligned rebrand to X (*groan*) or Star Trek and Twitter stalwart Canadian actor…",
        "url": "https://bleedingcool.com/tv/william-shatner-calls-out-elon-musk-again-over-fake-twitter-x-accounts/",
        "urlToImage": "https://bleedingcool.com/wp-content/uploads/2023/03/Collage-Maker-26-Mar-2023-05-14-PM-6321-1200x628.jpg",
        "publishedAt": "2023-10-01T01:37:08Z",
        "content": "Posted in: Opinion, Star Trek, TV, TV | Tagged: elon musk, opinion, twitter, william shatner\r\nWilliam Shatner is reminding the Twitter/X world again how Elon Musk's monthly subscription service isn't… [+2163 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CleanTechnica"
        },
        "author": "Jennifer Sensiba",
        "title": "The Bureau of Land Management Kicks A Hornet’s Nest In Moab",
        "description": "The Bureau of Land Management’s office in Moab, Utah, recently announced that it’s closing a significant portion of the trails in the area. This, of course, is a decision sure to enrage the off-road community and please environmentalists, but there’s a deeper…",
        "url": "https://cleantechnica.com/2023/09/30/the-bureau-of-land-management-kicks-a-hornets-nest-in-moab/",
        "urlToImage": "http://cleantechnica.com/files/2023/02/Jeep-Magneto-2-Press-Photo-2000x1000-1-800x400.jpg",
        "publishedAt": "2023-10-01T00:48:13Z",
        "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nThe Bureau of Land Management’s office in Moab, Utah, recently announced that it’s closing a significant port… [+11785 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "news.yahoo.com",
        "title": "Elon Musk Is in Hot Water And This Time It Has Nothing To Do With Twitter",
        "description": "NEW YORK, US - SEPTEMBER 17: Elon Musk arrives at the Turkish House to meet with Turkish President Recep Tayyip Erdogan ahead of the 78th session of the United Nations (UN) General Assembly in New York, United States on September 17, 2023. Elon Musk is at the…",
        "url": "https://biztoc.com/x/86cf12a9c17d191e",
        "urlToImage": "https://c.biztoc.com/p/86cf12a9c17d191e/og.webp",
        "publishedAt": "2023-10-01T00:32:08Z",
        "content": "NEW YORK, US - SEPTEMBER 17: Elon Musk arrives at the Turkish House to meet with Turkish President Recep Tayyip Erdogan ahead of the 78th session of the United Nations (UN) General Assembly in New Yo… [+306 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Ozbargain.com.au"
        },
        "author": "John Lam",
        "title": "15% off Portable EV Charger 15A 3.5kw Fit BYD Tesla MG EVs Polestar $280 Delivered @ INCHARGEx",
        "description": "15% Off Sale for the 15A Portable EV Charger for EV owners that want faster charge than the standard 10A, including BYD, Tesla, MG EV, Polestar and Other EVs @ INCHARGEx.\n\n<ul>\n<li>15A tail delivering 3.5 kW of charging power (adding roughly about 20km of ran…",
        "url": "https://www.ozbargain.com.au/node/802869",
        "urlToImage": "https://files.ozbargain.com.au/n/69/802869x.jpg?h=ace800a7",
        "publishedAt": "2023-10-01T00:03:06Z",
        "content": "15% Off Sale for the 15A Portable EV Charger for EV owners that want faster charge than the standard 10A, including BYD, Tesla, MG EV, Polestar and Other EVs @ INCHARGEx.\r\n<ul><li>15A tail delivering… [+328 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "Ramsey Qubein, Contributor, \n Ramsey Qubein, Contributor\n https://www.forbes.com/sites/ramseyqubein/",
        "title": "Coming Soon To Hotels: 20,000 Electric Vehicle Chargers, H2O Tablets And Free Grubhub Delivery",
        "description": "When you travel, keep an eye out for the latest perks and offerings at hotels around the world. Here’s the latest you need to know for hotel stays in the coming months.",
        "url": "https://www.forbes.com/sites/ramseyqubein/2023/09/30/coming-soon-to-hotels-20000-electric-vehicle-chargers-h2o-tablets-and-free-grubhub-delivery/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/651469224ef15ed23a4e56c9/0x0.jpg?format=jpg&crop=1538,865,x0,y0,safe&width=1200",
        "publishedAt": "2023-09-30T23:45:00Z",
        "content": "Family road trips are about to get even better with more electric charging stations at hotels around ... [+] the country.\r\ngetty\r\nWhen you travel, keep an eye out for the latest perks and offerings a… [+8419 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "theroot.com",
        "title": "Elon Musk Is in Hot Water And This Time It Has Nothing To Do With Twitter",
        "description": "Elon Musk is at the center of yet another racism controversy, only this time, we’re not talking about his social media platform. On Thursday, the U.S. Equal Employment Opportunity Commission dropped a bombshell lawsuit against Musk’s electric car company, Tes…",
        "url": "https://biztoc.com/x/a76e7a0f719f307c",
        "urlToImage": "https://c.biztoc.com/p/a76e7a0f719f307c/og.webp",
        "publishedAt": "2023-09-30T22:12:09Z",
        "content": "Elon Musk is at the center of yet another racism controversy, only this time, were not talking about his social media platform. On Thursday, the U.S. Equal Employment Opportunity Commission dropped a… [+252 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Slashdot.org"
        },
        "author": "feedfeeder",
        "title": "General Motors lays off more than 100 workers at Parma Metal Center as UAW strike grows - cleveland.com",
        "description": "General Motors lays off more than 100 workers at Parma Metal Center as UAW strike growscleveland.com Why Tesla May Be The Big Winner Of The UAW StrikesCNBC United Auto Workers strike expands against Ford and GMNBC News GM president's strike op-ed got it wrong…",
        "url": "https://slashdot.org/firehose.pl?op=view&amp;id=171927923",
        "urlToImage": null,
        "publishedAt": "2023-09-30T21:32:36Z",
        "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Raw Story"
        },
        "author": "David McAfee",
        "title": "'We are not delivering': House GOPer condemns own party in CNN interview",
        "description": "Rep. Tim Burchett (R-TN) on Saturday told CNN's Jim Acosta that his fellow conservative lawmakers are not delivering on their campaign promises.\n\nBurchett, who explicitly compared House Speaker Kevin McCarthy (R-CA) to TV mob boss Tony Soprano earlier this mo…",
        "url": "https://www.rawstory.com/not-delivering-burchett/",
        "urlToImage": "https://www.rawstory.com/media-library/cnn-host-jim-acosta-and-rep-tim-burchett-r-tn.png?id=34656103&width=1200&height=600&coordinates=0%2C25%2C0%2C25",
        "publishedAt": "2023-09-30T21:22:43Z",
        "content": "The shot hit 42-year-old Jacob Johns (Hopi and Akimel Oodham), according to an affidavit for an arrest warrant for Martinez. A Gofundme page for Johns medical bills shared by organizers of the prayer… [+5758 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "assets.bwbx.io",
        "title": "BA, Virgin Atlantic, Tesla, U.S. Infrastructure (Podcast)",
        "description": "Hosts Guy Johnson & Alix Steel speak with Sam Fazeli, Bloomberg Intelligence Senior Pharmaceutical Analyst, Isis Almeida, Bloomberg Team Leader for Gas, Power & Renewables, Ed Ludlow, Bloomberg West Coast Correspondent, and Joe Mathieu, Bloomberg Washington C…",
        "url": "https://biztoc.com/x/969dc02d850effe1",
        "urlToImage": "https://c.biztoc.com/p/969dc02d850effe1/s.webp",
        "publishedAt": "2023-09-30T21:03:43Z",
        "content": "Hosts Guy Johnson &amp; Alix Steel speak with Sam Fazeli, Bloomberg Intelligence Senior Pharmaceutical Analyst, Isis Almeida, Bloomberg Team Leader for Gas, Power &amp; Renewables, Ed Ludlow, Bloombe… [+310 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "Cindy Gordon, Contributor, \n Cindy Gordon, Contributor\n https://www.forbes.com/sites/cindygordon/",
        "title": "How General AI Will Eventually Reshape Everything",
        "description": "This article discusses General AI and highlights how the AI industry is unfolding advancing efforts to develop General AI.",
        "url": "https://www.forbes.com/sites/cindygordon/2023/09/30/how-general-ai-will-eventually-reshape-everything/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/63ae0066bacde4972dcc7317/0x0.jpg?format=jpg&width=1200",
        "publishedAt": "2023-09-30T20:48:58Z",
        "content": "General AI\r\ngetty\r\nThe transition to Artificial General Intelligence (AGI) signifies more than a change in terminology; it represents a major leap in capabilities. It will take many years for AGI to … [+11561 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Root"
        },
        "author": "Jessica Washington",
        "title": "Elon Musk Is in Hot Water And This Time It Has Nothing To Do With Twitter",
        "description": "Elon Musk is at the center of yet another racism controversy, only this time, we’re not talking about his social media platform. On Thursday, the U.S. Equal Employment Opportunity Commission dropped a bombshell lawsuit against Musk’s electric car company, Tes…",
        "url": "https://www.theroot.com/elon-musk-is-in-hot-water-and-this-time-it-has-nothing-1850888199",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/6de5e5776f9c571d278ff4ac806c9dc7.jpg",
        "publishedAt": "2023-09-30T20:45:00Z",
        "content": "Elon Musk is at the center of yet another racism controversy, only this time, were not talking about his social media platform. On Thursday, the U.S. Equal Employment Opportunity Commission dropped a… [+1443 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Raw Story"
        },
        "author": "David McAfee",
        "title": "'Russia helped elect Donald Trump': GOP strategist calls out Republicans over Ukraine",
        "description": "Numerous Republican lawmakers are wrongly supporting Donald Trump and Russian interests over Ukraine and American democracy, Stuart Stevens, Chief Strategist of Romney's 2012 presidential campaign, said on Saturday.Stevens, who appeared on CNN's The Source wi…",
        "url": "https://www.rawstory.com/russia-helped-trump-biden/",
        "urlToImage": "https://www.rawstory.com/media-library/image.jpg?id=24821828&width=1200&height=600&coordinates=0%2C83%2C0%2C84",
        "publishedAt": "2023-09-30T20:15:49Z",
        "content": "The shot hit 42-year-old Jacob Johns (Hopi and Akimel Oodham), according to an affidavit for an arrest warrant for Martinez. A Gofundme page for Johns medical bills shared by organizers of the prayer… [+5758 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "investors.com",
        "title": "Tesla's AI Advances Could Make It The Next Apple, Says Trader",
        "description": "Artificial intelligence is driving more than just cars and robots for Tesla stock. The automaker's advances in the space are fueling optimism for Tesla (TSLA) investors who believe its next level of growth will be built on AI. Charles Harris, portfolio manage…",
        "url": "https://biztoc.com/x/00b5eccd7aa3d54f",
        "urlToImage": "https://c.biztoc.com/p/00b5eccd7aa3d54f/s.webp",
        "publishedAt": "2023-09-30T20:08:08Z",
        "content": "Artificial intelligence is driving more than just cars and robots for Tesla stock.The automaker's advances in the space are fueling optimism for Tesla (TSLA) investors who believe its next level of g… [+299 chars]"
        },
        {
        "source": {
        "id": "rt",
        "name": "RT"
        },
        "author": "RT",
        "title": "Elon Musk defends Russell Brand amid sexual assault allegations",
        "description": "Elon Musk has said that Russell Brand is in the midst of a “witch-burning phase” after being accused of sexually assaulting numerous women Read Full Article at RT.com",
        "url": "https://www.rt.com/pop-culture/583838-elon-musk-russell-brand-defense/",
        "urlToImage": "https://mf.b37mrtl.ru/files/2023.09/article/65186c0a2030271ef05f87c4.jpg",
        "publishedAt": "2023-09-30T18:56:23Z",
        "content": "Tesla founder Elon Musk has reiterated his defense of Russell Brand, saying in a podcast appearance this week that the multiple allegations of sexual assault levied against the actor and comedian rep… [+2450 chars]"
        },
        {
        "source": {
        "id": "news24",
        "name": "News24"
        },
        "author": "fin24",
        "title": "News24 Business | Tesla sued by US agency over alleged harassment of black factory workers",
        "description": "A US civil rights agency sued Tesla Inc on Thursday, claiming the electric carmaker has tolerated severe harassment of Black employees at its flagship Fremont, California, assembly plant, in charges similar to cases brought by the state.",
        "url": "https://www.news24.com/fin24/companies/tesla-sued-by-us-agency-over-alleged-harassment-of-black-factory-workers-20230930",
        "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/8078/6fd24e28f87b4bd2a334d0214b0f4136.jpg",
        "publishedAt": "2023-09-30T18:11:01Z",
        "content": "A US civil rights agency sued Tesla Inc on Thursday, claiming the electric carmaker has tolerated severe harassment of Black employees at its flagship Fremont, California, assembly plant, in charges … [+3573 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Vanity Fair"
        },
        "author": "Jack McCordick",
        "title": "“It's called saving lives”: German Government Strikes Back At Elon Musk’s Criticism of Migrant Rescue",
        "description": "The Tesla CEO said video of German NGOs helping migrants on the Mediterranean had “invasion vibes.”",
        "url": "https://www.vanityfair.com/news/2023/09/elon-musk-germany-migrants-texas",
        "urlToImage": "https://media.vanityfair.com/photos/65185a3e8aae474ab60cefd2/16:9/w_1280,c_limit/1706893493",
        "publishedAt": "2023-09-30T18:02:33Z",
        "content": "Billionaire Elon Musk delved into German politics on Friday by sharing a post that denounced the countrys handling of migrants and giving kudos to the nations far-right party, Alternative for Germany… [+2293 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "benzinga.com",
        "title": "Tesla Stares At Q3 Deliveries Miss, Rivian Not Losing Sleep Over Cybertruck, Nio's Rumored German Tie-Up And More: Biggest EV Stories Of The Week",
        "description": "Electric vehicle stocks ended mostly higher in the week that ended on Sept. 29, even as the broader market showed muted sentiment despite the oversold levels. Tesla, Inc. TSLA stock bounced around its recent bottom and yet closed slightly higher for the week.…",
        "url": "https://biztoc.com/x/754ef048002bc1f5",
        "urlToImage": "https://c.biztoc.com/p/754ef048002bc1f5/s.webp",
        "publishedAt": "2023-09-30T17:18:09Z",
        "content": "Electric vehicle stocks ended mostly higher in the week that ended on Sept. 29, even as the broader market showed muted sentiment despite the oversold levels. Tesla, Inc. TSLA stock bounced around it… [+296 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "thestreet.com",
        "title": "What's stopping Tesla from achieving Level 3 self-driving",
        "description": "Get Free Report chief Elon Musk has been saying for years that fully autonomous vehicles are right around the bend. He said in 2016 that it would only take two or three years for a Tesla to drive better than a human. When that didn't happen, he said in 2018 i…",
        "url": "https://biztoc.com/x/e0ed9b93c6df4898",
        "urlToImage": "https://c.biztoc.com/p/e0ed9b93c6df4898/s.webp",
        "publishedAt": "2023-09-30T17:10:49Z",
        "content": "Get Free Report chief Elon Musk has been saying for years that fully autonomous vehicles are right around the bend. He said in 2016 that it would only take two or three years for a Tesla to drive bet… [+299 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CleanTechnica"
        },
        "author": "NRDC",
        "title": "Renewable Power Helped the United States Survive the Hottest Summer Ever",
        "description": "This summer, the United States endured the two warmest months ever recorded, yet the system held because of renewable energy.",
        "url": "https://cleantechnica.com/2023/09/30/renewable-power-helped-the-united-states-survive-the-hottest-summer-ever/",
        "urlToImage": "https://cleantechnica.com/files/2019/09/Roserock_12-06-2016-094-2.jpg",
        "publishedAt": "2023-09-30T17:10:12Z",
        "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nAs we head into October, we leave behind a summer of extreme heat across the United States, and with it, you … [+8023 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "finance.yahoo.com",
        "title": "Elon Musk's dad, 77, says he'd have more kids",
        "description": "None Errol Musk said he'd be open to having more children if he could find a woman under the age of 35. • None The 77year-old has seven known children, including two he had with his former stepdaughter. • None Elon Musk's father said he'd also have concerns …",
        "url": "https://biztoc.com/x/3e138f65329a31b8",
        "urlToImage": "https://c.biztoc.com/p/3e138f65329a31b8/og.webp",
        "publishedAt": "2023-09-30T16:56:07Z",
        "content": "None Errol Musk said he'd be open to having more children if he could find a woman under the age of 35.None The 77-year-old has seven known children, including two he had with his former stepdaughter… [+311 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "forbes.com",
        "title": "Elon Musk Attacks Germany Over Its Migrant Rescues, Cites ‘Invasion Vibes’",
        "description": "Tesla CEO Elon Musk took to X to scrutinize a German humanitarian group conducting a rescue operation in the Mediterranean Sea, suggesting such operations and their transport of rescued immigrants to Italy are a violation of the country’s sovereignty. The vid…",
        "url": "https://biztoc.com/x/4cc5e725769ec68e",
        "urlToImage": "https://c.biztoc.com/p/4cc5e725769ec68e/s.webp",
        "publishedAt": "2023-09-30T16:54:08Z",
        "content": "Tesla CEO Elon Musk took to X to scrutinize a German humanitarian group conducting a rescue operation in the Mediterranean Sea, suggesting such operations and their transport of rescued immigrants to… [+287 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "Antonio Pequeño IV, Forbes Staff, \n Antonio Pequeño IV, Forbes Staff\n https://www.forbes.com/sites/antoniopequenoiv/",
        "title": "Elon Musk Attacks Germany Over Its Migrant Rescues, Cites ‘Invasion Vibes’",
        "description": "Musk shared and commented on a video of migrants being rescued at sea that was posted by an account pledging support to the far-right Alternative for Germany party.",
        "url": "https://www.forbes.com/sites/antoniopequenoiv/2023/09/30/elon-musk-attacks-germany-over-its-migrant-rescues-cites-invasion-vibes/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65184435e96b7061b7a377d9/0x0.jpg?format=jpg&crop=3935,2621,x0,y0,safe&width=1200",
        "publishedAt": "2023-09-30T15:55:11Z",
        "content": "Tesla CEO Elon Musk took to X to scrutinize a German humanitarian group conducting a rescue operation in the Mediterranean Sea, suggesting such operations and their transport of rescued immigrants to… [+3275 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "teslarati.com",
        "title": "Tesla IR-compiled Q3 2023 delivery consensus listed at 455k deliveries",
        "description": "Tesla’s Investor Relations team has shared a compiled analyst consensus for the company’s Q3 2023 vehicle deliveries. As per the EV maker, the current consensus for Tesla’s third quarter numbers is at 455,000 vehicles. The numbers were shared on X by Wall Str…",
        "url": "https://biztoc.com/x/1f7ff6c07db004c8",
        "urlToImage": "https://c.biztoc.com/253/og.png",
        "publishedAt": "2023-09-30T15:44:13Z",
        "content": "Teslas Investor Relations team has shared a compiled analyst consensus for the companys Q3 2023 vehicle deliveries. As per the EV maker, the current consensus for Teslas third quarter numbers is at 4… [+287 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Wealthofgeeks.com"
        },
        "author": "Jarret Hendrickson",
        "title": "Elon Musk Has Choice Words for The Auto Workers Strike",
        "description": "Just as the Hollywood writer's strike resolves, the United Auto Workers strike is picking up steam. None other than President Biden showed up on the ... Read More",
        "url": "https://wealthofgeeks.com/elon-musk-has-choice-words-for-the-auto-workers-strike/",
        "urlToImage": "https://wealthofgeeks.com/wp-content/uploads/2023/09/Copy-of-WEALTHOFGEEKS-FeaturedImageTemplate-2023-09-28T105901.313.jpg",
        "publishedAt": "2023-09-30T15:00:00Z",
        "content": "Just as the Hollywood writer's strike resolves, the United Auto Workers strike is picking up steam.\r\nNone other than President Biden showed up on the picket line a few days ago to show his support fo… [+3574 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "investors.com",
        "title": "Tesla's AI Advances Could Make It The Next Apple, Says Trader",
        "description": "Artificial intelligence is driving more than just cars and robots for Tesla stock. The automaker's advances in the space are fueling optimism for Tesla (TSLA) investors who believe its next level of growth will be built on AI. Charles Harris, portfolio manage…",
        "url": "https://biztoc.com/x/45bdd8b1516cdbba",
        "urlToImage": "https://c.biztoc.com/p/45bdd8b1516cdbba/s.webp",
        "publishedAt": "2023-09-30T14:38:06Z",
        "content": "Artificial intelligence is driving more than just cars and robots for Tesla stock.The automaker's advances in the space are fueling optimism for Tesla (TSLA) investors who believe its next level of g… [+299 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CleanTechnica"
        },
        "author": "Jennifer Sensiba",
        "title": "Solaris Keeps Up The E-Bus Work In September",
        "description": "Electric buses have become increasingly popular in cities due to their cost-effectiveness, environmental benefits, and passenger comfort. With the decline in battery prices, electric buses have emerged as the superior choice for city transit agencies. Sales o…",
        "url": "https://cleantechnica.com/2023/09/30/solaris-keeps-up-the-e-bus-work-in-september/",
        "urlToImage": "https://cleantechnica.com/files/2023/09/Solaris-Urbino-2000x1000-1-800x400.png",
        "publishedAt": "2023-09-30T14:25:01Z",
        "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nElectric buses have become increasingly popular in cities due to their cost-effectiveness, environmental bene… [+7404 chars]"
        }
        ]
        };      
      //console.log(data, typeof data.articles, data.articles, typeof data.articles);
      let arr = [...data.articles];
      setDataArray([...arr]);
      setCounter(counter + 1);
      console.log(dataArray);
      }   
    };

    try{
    console.log("i am constructor");
    if(counter <= 3){
      setCounter(counter + 1);
      regicomponentDidMountster();}
    }
    catch (err) {
        console.log(err);
        toast.error("Cannot Fetch Stock News");
      }
    return (
      <ul style={{marginLeft: '60px'}}>
        {dataArray.map((p, index) => (  

        <li key={index} style={{display: 'inline-flex', flexDirection: 'column', padding: '30px'}}>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={p.urlToImage}
              title="green iguana"
              component="img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {p.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {p.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card> 
    </li>
))}  
    </ul>          
    );

}