const axios= require("axios");
const cheerio= require("cheerio");

axios.get("https://www.jamesqquick.com/talks")
    .then((res) => {

        const talks={};
        // console.log('res',res.data)
        const $=cheerio.load(res.data);
        // console.log($('.card--content')
        console.log($('.post-list')
                        .children('a')
                        .first()
                        .attr('href'))
                        // .text())
                        // .html())
    });
