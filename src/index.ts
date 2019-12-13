
const data = JSON.parse(`{"errcode":0,"data":{"body":{"questions":[{"items":[{"addrId":null,"icomId":1007,"questionTypeId":"1175969849956896769","quoteStatus":0,"resourceId":"1200592103776743426","score":12.0}],"prompt":"一、书面表达","remarks":null},{"items":[{"addrId":null,"icomId":1502,"questionTypeId":"1175971389878833153","quoteStatus":0,"resourceId":"1200591711730954242","score":20.0}],"prompt":"二、听力题","remarks":null},{"items":[{"addrId":null,"icomId":1009,"questionTypeId":"1175971443746279426","quoteStatus":0,"resourceId":"1200590609392365569","score":12.0}],"prompt":"三、完形填空","remarks":null},{"items":[{"addrId":null,"icomId":1501,"questionTypeId":"1175968801959710722","quoteStatus":0,"resourceId":"1200589627400941569","score":20.0}],"prompt":"四、阅读理解","remarks":null},{"items":[{"addrId":null,"icomId":1008,"questionTypeId":"1175977590951776258","quoteStatus":0,"resourceId":"1200588107456475138","score":12.0}],"prompt":"五、选择填空","remarks":null},{"items":[{"addrId":null,"icomId":1005,"questionTypeId":"1194824864809132033","quoteStatus":0,"resourceId":"1200587138211540993","score":12.0}],"prompt":"六、句型转换","remarks":null},{"items":[{"addrId":null,"icomId":1005,"questionTypeId":"1194824957759102977","quoteStatus":0,"resourceId":"1200586238667550722","score":12.0}],"prompt":"七、补全对话","remarks":null},{"items":[{"addrId":null,"icomId":1001,"questionTypeId":"1175958764382064642","quoteStatus":0,"resourceId":"1200584037597474818","score":12.0}],"prompt":"八、单选题","remarks":null},{"items":[{"addrId":null,"icomId":1004,"questionTypeId":"1175958828194205698","quoteStatus":0,"resourceId":"1200584727552094209","score":12.0}],"prompt":"九、多选题","remarks":null},{"items":[{"addrId":null,"icomId":1003,"questionTypeId":"1175958876109934593","quoteStatus":0,"resourceId":"1200585231497719809","score":12.0}],"prompt":"十、不定项选择","remarks":null},{"items":[{"addrId":null,"icomId":1010,"questionTypeId":"1170910852350599170","quoteStatus":0,"resourceId":"1200600105875435522","score":12.0},{"addrId":null,"icomId":1002,"questionTypeId":"1170910852350599170","quoteStatus":0,"resourceId":"1200599751855206401","score":2.0}],"prompt":"十一、互动试题测试题型","remarks":null}]},"icomId":null,"paperTypeId":"1148545009574768641","paperTypeName":"期末检测","questionNum":12,"quoteStatus":null,"resourceId":null,"resourceName":"150分12种题型","sourceResourceId":"1200601067331547137"},"errmsg":"ok"}`);
const res = data.data;
interface IItem {
    icomId: number;
    order: string;
}
interface IItems {
    items: IItem[];
    prompt: string;
    order: number;
}
type Questions = IItems[];

function formatData(data: Questions) {
    data.forEach((it, idx) => {
        it.order = idx;
        it.items.forEach((item, index) => {
            item.order = idx + index + "";
        });
    });
    return data;
}

console.log(formatData(res.body.questions));