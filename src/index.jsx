var id = 0;
    data = [
    {
        id: ++id,
        source: 'Комерсант',
        title: 'Mail.Ru продаст HeadHunter почти за 10 млрд рублей',
        url: '/news/2014/11/17/mail-ru-prodast-headhunter-pochti-za-10-mlrd-rubley',
        timestamp: getTimestamp('Hours', 2)
    },
    {
        id: ++id,
        source: 'Reuters',
        title: 'В Чехии демонстранты показали красные карточки президенту страны',
        url: '/news/2014/11/17/v-chehii-protestanty-pokazali-krasnye-kartochki-prezidentu-strany',
        timestamp: getTimestamp('Hours', 4)
    },
    {
        id: ++id,
        source: 'Foreign Policy',
        title: 'Foreign Policy включил Путина и Дугина в список пропагандистов года',
        url: '/news/2014/11/17/foreign-policy-vklyuchil-putina-i-dugina-v-spisok-propagandistov-goda',
        timestamp: getTimestamp('Hours', 8)
    },
    {
        id: ++id,
        source: 'Colta',
        title: '«Нельзя ни вздохнуть, ни охнуть» «Кольта»: Монолог анестезиолога-реаниматолога о московской медицине',
        url: '/news/2014/11/17/nelzya-ni-vzdohnut-ni-ohnut',
        timestamp: getTimestamp('Date', 1)
    }
];


var List = React.createClass({

    getInitialState: function() {
        return { data: data };
    },

    render: function() {
        var createItem = function(item) {

            return (
                <article className="thumb" key={item.id}>
                    {item.title}
                </article>
            );

        };

        return <section>{this.state.data.map(createItem)}</section>;
    }
});

React.render(<List />, document.getElementsByClassName('main')[0]);

// эмуляция данных о дате от бекенда
function getTimestamp(method, num) {

    var date = new Date();

    return date['set' + method](date['get' + method]() - num).valueOf();
}