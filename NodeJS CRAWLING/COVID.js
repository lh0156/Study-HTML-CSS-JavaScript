const axios = require("axios");
const cheerio = require("cheerio");

const getHTML = async(keyword) => {
    try {
        return await axios.get("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%BD%94%EB%A1%9C%EB%82%98+19+%ED%99%95%EC%A7%84%EC%9E%90")
    } catch(err) {
        console.log(err);
    }
}

const parsing = async (keyword) => {
    const html = await getHTML(keyword);
    const $ = cheerio.load(html.data);
    const $status_info = $(".status_info");

    const confirmedList = [];
    const severeList = [];
    const new_hospitalizationList = [];
    const dieList = [];

    $status_info.each((index,node) => {

        const confirmed = $(node).find(".info_01 .info_num").text();
        const severe = $(node).find(".info_02 .info_num").text();
        const new_hospitalization = $(node).find(".info_03 .info_num").text();
        const die = $(node).find(".info_04 .info_num").text();
        
        confirmedList.push(confirmed);
        severeList.push(severe);
        new_hospitalizationList.push(new_hospitalization);
        dieList.push(die);
    })

    console.log(`국내 확진자: ${confirmedList[0]}`);
    console.log(`국내 재원 위중증: ${severeList[0]}`);
    console.log(`국내 신규입원: ${new_hospitalizationList[0]}`);
    console.log(`국내 사망자: ${dieList[0]}`);

}


parsing();
