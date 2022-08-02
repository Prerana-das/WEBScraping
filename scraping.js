const axios= require("axios");
const cheerio= require("cheerio");

axios.get("https://www.jamesqquick.com/talks")
    .then((res) => {

        const talks=[];
        // console.log('res',res.data)
        const $=cheerio.load(res.data);
        // console.log($('.card--content')
        // console.log($('.post-list')
        //                 .children('a')
        //                 .first()
        //                 .attr('href'))
                        // .text())
                        // .html())


            $('.card').each((index,element)=>{
               const title= $(element)
                .children('.card--content')
                .children('.card--title')
                .first()
                .text()

                const link= $(element)
                            .first()
                            .attr('href')

                const des= $(element)
                            .children('.card--content')
                            .children('.card--description')
                            .text()
                            // console.log('desssssssss',des)
                talks[index]= {title,link,des};
                console.log("title",talks[index])
            })
    });
