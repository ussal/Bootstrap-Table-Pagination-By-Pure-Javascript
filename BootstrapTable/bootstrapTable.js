
//let tableTitles = ["Ad", "Soyad", "Tc", "Plaka"];
function bootstrapTable(btObject, page) {
    let titleTexts = Object.keys(btObject.tableList[0])
    let titleHtml = ``;
    for (let titleText of titleTexts) {
        titleHtml += `<th><div>${titleText}</div></th>`;
    }

    let trTemplate = ``;
    let firstElementofPage=0;
    let lastElementofPage= btObject.tableList.length;
    if(btObject.pagination.enable){
        firstElementofPage = (page - 1) * btObject.pagination.rowCount;
        lastElementofPage = page * btObject.pagination.rowCount;
    }
    
    for(let jsonRow of btObject.tableList.slice(firstElementofPage, lastElementofPage)){
        let tdTemplate="";
        for(let titleText of titleTexts){
            tdTemplate+=`<td>${jsonRow[titleText]}</td>`;
        }
        trTemplate += `<tr>${tdTemplate}</tr>`;
    }
    
    let template = `
<div class="tableContainer">
    <table class="table table-striped search-table mb-0">
        <thead>
            <tr>
                ${titleHtml}
            </tr>
        </thead>
        <tbody>
        ${trTemplate}
        </tbody>
    </table>

    <div id="page-buttons">
        <hr />
        <ul class="pagination">
        </ul>
    </div>
</div>
`;
    btObject.divId.innerHTML=template;

    //Sayfalama aktif değilse aşağıdaki kodları çalıştırma
    if(!btObject.pagination.enable){
        return null;
    }
    //Sayfa Butonlarını Listeleme
    //let page =1;
    let pageButtonsDiv = btObject.divId.querySelector("#page-buttons ul");
    let rowCount = btObject.pagination.rowCount;
    let maxPage=btObject.pagination.maxPageAppers-1;
    let pageButtons = "";
    let pageCount = (btObject.tableList.length + rowCount-1) / rowCount;
    for (var i = 1; i <= pageCount; i++) {
        if (page == i) {
            pageButtons += `<li class="page-item active"><span class="page-link">${i}</span></li>`;
        } else {
            if (pageCount > maxPage) {
                if (i == 1 || i > pageCount - 1) {
                    pageButtons += `<li class="page-item"><span class="page-link">${i}</span></li>`;
                } else if (i > (Number(page) - (maxPage/2)) && i < (Number(page) + (maxPage/2))) {
                    pageButtons += `<li class="page-item"><span class="page-link">${i}</span></li>`;
                }
            } else {
                pageButtons += `<li class="page-item"><span class="page-link">${i}</span></li>`;
            }

        }
    }
    pageButtonsDiv.innerHTML = pageButtons;

    //Sayfa Butonlarına Click Eventi Ekleme
    let pageButtonLiElements = pageButtonsDiv.querySelectorAll("li");
    for (let li of pageButtonLiElements) {
        li.addEventListener("click", () => {
            let selectedPage = li.querySelector("span").innerHTML;
            bootstrapTable(btObject, selectedPage);
            console.log("selectedPage", selectedPage);
        });
    }
}

