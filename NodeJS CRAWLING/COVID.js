const axios = require("axios");
const cheerio = require("cheerio");

const getHTML = async(keyword) => {
    try {
        return await axios.get("https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EB%B0%A9%EC%97%AD%EC%A7%80%EC%B9%A8&oquery=%EC%BD%94%EB%A1%9C%EB%82%98+19+%ED%99%95%EC%A7%84%EC%9E%90&tqi=hC8MVdp0JywsslA%2F6FKssssst%2Fs-070936")
    } catch(err) {
        console.log(err);
    }
}

const parsing = async (keyword) => {
    const html = await getHTML(keyword);
    const $ = cheerio.load(html.data);
    const $status_info = $(".info_video");
    
    const guideList = [];
    
    $status_info.each(async (index,node) => {
        
        const guide = $(node).find(".scm_ellipsis a").text();
        
        guideList.push(guide);
        
        
    })
    
    return guideList[0];
    
}


    const ment = parsing();
    console.log(ment);

    