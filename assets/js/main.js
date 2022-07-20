const _$ = document.querySelector.bind(document);
const _$$ = document.querySelectorAll.bind(document);



const PLAYER_STORAGE_KEY = 'WIN_PLAYER'
const newMovies = _$('#new-movies')
const oddMovies = _$('#odd-movies')
const setMovies = _$('#set-movies')
const cinemaMovies = _$('#cinema-movies')
const actionMovies = _$('#action-movies')
const fictionMovies = _$('#fiction-movies')
const adventureMovies = _$('#adventure-movies')
const honorMovies = _$('#honor-movies')
const romanceMovies = _$('#romance-movies')
const humorMovies = _$('#humor-movies')
const kungfuMovies = _$('#kungfu-movies')
const cartoonMovies = _$('#cartoon-movies')
const crimialMovies = _$('#crimial-movies')
const warMovies = _$('#war-movies')
const familyMovies = _$('#family-movies')
const mentalityMovies = _$('#mentality-movies')
const mysticMovies = _$('#mystic-movies')
const spiritualityMovies = _$('#spirituality-movies')
const zombieMovies = _$('#zombie-movies')
const searchMovies = _$('#search-movies')
const top10Movies = _$('#body__list-movie-top-10')
const oddHotMovies = _$('#body__list-movie-odd-hot')
const cinemaHotMovies = _$('#body__list-movie-hot')
const inputBox = _$('.input-form')
const suggBox = _$('.autocom-box')
const iconSeacrh = _$('.icon')
const input = _$('.search-input')
const checkbox = document.getElementById('checkbox')
const sliderElement = _$('.slider__image')
const body = _$('body')
const ball = _$$('.label .ball')
const images = _$$('.slider__item');
const statusParent = _$$('.body__movie-report div')
watching = false;
viewOrigin = _$('.body__movie-viewer-btn span')
getViewOrigin = viewOrigin.innerText
viewNumber = parseInt(getViewOrigin)
const counter = 1;


const webMovies = {
    currentIndex: 0,
    isLightActive: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    moviesAll: [{
            id: 1,
            name: 'Biệt Đội Siêu Anh Hùng 4',
            subname: 'Avengers : Endgame (2019)',
            src: 'https://player.phimno1.com/vip?list=1&id=3647&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDZdEn10fDHFW5vw5VpVCdCT@SO6sw6KbN0o3iQiUgpJWroaMXFlogVL1f2ZXB/le2S91A9jn@9zgpSgbOEBTGGUupBRGoA6uPWeLfXAAUx9zpVvxVqotAexNXmxajEEsQH68eV5kwJpOPNnRusEHeVAq@81l/3oDrxnYqIJdgj91LIacaL7cSDl7dUANbDyWqVo9WEsmFDKSLFUyoLwP2V85cWQ8=&sub=',
            idType: '3-hot',
            type: 'Phim Viễn Tưởng, Hành Động',
            imgMain: 'https://storage.googleapis.com/stc.zcdn.link/hdf/f/c7/1738228369170639630/1573040935471-poster-org-avengers_endgame_poster.jpg',
            imgIntro: 'https://genk.mediacdn.vn/2019/11/12/1-1573571042465953988347.jpeg',
            srcTrailer: 'TcMBFSGVi1c',
            directors: 'Joe Russo, Anthony Russo',
            duration: 182,
            country: 'Mỹ',
            quality: 'Vietsub-HD',
            yearRealse: '2019',
            timeRealse: '25/4/2021',
            view: 177,
            urlComment: 1273906356121569,
            desc: ' Biệt Đội Siêu Anh Hùng 4 : Hồi kết ( Avengers : Endgame ) là bộ phim siêu anh hùng của Mỹ được ra mắt vào năm 2019, được sản xuất bởi Marvel Studios và Walt Disney Studios Motion Picture phát hành. Phim là phần thứ 4 trong loạt phim Avengers, và cũng là phần phim thứ 22 thuộc vũ trụ điện ảnh Marvel, đồng thời cùng là phim áp chót của giai đoạn 3 trong loạt series siêu anh hùng. '
        },
        {
            id: 2,
            name: 'Godzilla Đại Chiến Kong',
            subname: 'Godzilla vs Kong (2021)',
            src: 'https://player.phimno1.com/vip?list=1&id=8166&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDcZAhygudFwymh0tcig/oICmlRZoF9oDF4IbXXiIthJ2roaMXFlogVL1fmMORqAz0G7IYpD/z5RMyTAPRTA7CWg==&sub=',
            idType: '3-hot',
            type: 'Phim Viễn Tưởng, Hành Động',
            imgMain: 'https://photo-cms-plo.zadn.vn/w800/Uploaded/2021/wopsvun/2021_04_05/2_lgos.jpg',
            imgIntro: 'https://thegioidienanh.vn/stores/news_dataimages/hath/052019/29/21/3705_image014_5.jpg',
            srcTrailer: 'odM92ap8_c0',
            directors: 'Adam Wingard',
            duration: 113,
            country: 'Mỹ',
            quality: 'VietSub-HD',
            yearRealse: '2021',
            timeRealse: '26/3/2021',
            view: 236,
            urlComment: 2081071355509818,
            desc: 'Godzilla vs. Kong lấy bối cảnh vài năm sau những sự kiện ở Godzilla: King of the Monsters (2019). Sau khi chiến thắng King Ghidorah, Godzilla giành lấy ngôi vị “vua của các Titan”. Nhưng ở đoạn after-credits của bộ phim, Kong xem ra không đồng ý với điều đó.  Được cho là đứng về phe nhân loại, nhưng Godzilla lúc này đột nhiên tái xuất và có những hành vi phá hoại. Một vài sự kiện tiếp theo khiến con người quyết định tìm đến Kong, nhằm đi kiếm nguồn năng lượng bí ẩn được cho là nằm ở “Trái Đất rỗng”. Dĩ nhiên, Godzilla là chướng ngại lớn nhất đối với kế hoạch này.'
        },
        {
            id: 3,
            name: 'Không Gian Mê Hoặc 2 ',
            subname: 'Attraction 2 - Invasion (2020)',
            src: 'https://player.phimno1.com/vip?list=1&id=9651&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDeqEp8nbCFyyO7BcGrgmKMCTlOKE9y634077eQn5On5WroaMXFlogVL1fmMORqAz0G7IYpD/z5RMyTAPRTA7CWg==&sub=https://sub.phimno1.com/2021/04/9651.vtt',
            idType: '1',
            type: 'Phim Viễn Tưởng, Hành Động',
            imgMain: 'https://i1.wp.com/images.phimno1.com/images/2021/08/08/Attraction-2---Invasion-2020.md.jpg',
            imgIntro: 'https://s198.imacdn.com/ff/2020/09/20/e0334624a19a2654_e2a4b0b0199f0a05_563371600592928616068.jpg',
            srcTrailer: 'lElqBmOEfPQ',
            directors: 'Fedor Bondarchuk',
            duration: 132,
            country: 'Nga',
            quality: 'VietSub-HD',
            yearRealse: '2020',
            timeRealse: '1/1/2020',
            view: 126,
            urlComment: 208107135550981,
            desc: 'Với sự sụp đổ của con tàu ngoài hành tinh, cuộc sống của Julia đã thay đổi. Ba năm sau, loài người sắp phải trải qua cuộc chạm trán mới với những sinh vật ngoài hành tinh.'
        },
        {
            id: 4,
            name: '21 Cây cầu',
            subname: '21 Bridges (2019)',
            src: 'https://player.phimno1.com/vip?list=1&id=4540&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDApAy2UvbRDCB7j932j2fDgjkGYgu44Le5I@mUi4ZkqCroaMXFlogVL1fmMORqAz0G7IYpD/z5RMyTAPRTA7CWgG9QQOsAvLGTLyVWwwQgNqlQOpOrNxCNxkakk@pFB0TH@9TOdMXLJmnGmdf2W@bKmPwh2plxoDp2kAeUadjqZgLG88LdqwOQ1yEW1gJBWD@B9oKUp7rE623AmKwMj/2Ds5FRApLC6NGFgEGVlQDTUw1UJb4oExMzES2HEDjFFEZL0SkruZJkS8DBTJMaEZ9v1QIsfZmNhAEjHBaXBaVLiletgPP6ASzoz0dCzKgipH2AwFcvApWR0RZRQ==&sub=',
            idType: '1',
            type: 'Phim Hành Động',
            imgMain: 'https://txp-storage.sgp1.digitaloceanspaces.com/wp-content/uploads/2020/11/aa8671a692363d15029d9f87f63d46ef.jpg',
            imgIntro: 'https://i.ytimg.com/vi/wqLx0HuNX0M/maxresdefault.jpg',
            srcTrailer: 'Pjz8oYsyxEk',
            directors: 'Brian Kirk',
            duration: 98,
            country: 'Mỹ',
            quality: 'VietSub-HD',
            yearRealse: '2020',
            timeRealse: '21/11/2019',
            view: 186,
            urlComment: 2081071355509818,
            desc: '21 Bridges mở đầu bằng cảnh cậu bé Andre Davis (Christian Isaiah) ở đám tang của cha mình – một cảnh sát đã hi sinh trong lúc thực hiện nhiệm vụ. Nhiều năm sau, Andre (Chadwick Boseman) trở thành một thám tử sở hữu thành tích đáng nể của sở cảnh sát New York. Anh hoàn toàn không nhân nhượng, sẵn sàng nổ súng để áp chế tội phạm trong mọi trường hợp.  Hai tên du đãng (Taylor Kitsch, Stephan James) vô tình phát hiện được một số lượng ma túy lớn trong một nhà hàng, đụng độ với bốn cảnh sát và một vụ nổ súng đã diễn ra. Andre được giao nhiệm vụ tìm ra kẻ đã gây thương vong cho phía cảnh sát và anh đã thuyết phục thị trưởng đóng tất cả hầm, cầu dẫn đến khu vực Manhattan để tránh hung thủ thoát ra ngoài. Andre cùng một sĩ quan khác (Sienna Miller) bị cuốn vào cuộc săn đuổi không hồi kết và cũng chính lúc này, Andre bắt đầu dấy lên những mối nghi ngờ về tính liêm chính của những người cầm quyền mà anh từng rất tin tưởng.'
        },
        {
            id: 5,
            name: 'Siêu Anh Hùng Blood Shoot',
            subname: 'Bloodshot (2020)',
            src: 'https://player.phimno1.com/vip?list=1&id=4938&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDBZou1wfaPQystT1L0hbnXSSnT4NxmdHIy@zVUykpsIWroaMXFlogVL1fmMORqAz0G7IYpD/z5RMyTAPRTA7CWg==&sub=',
            idType: '1',
            type: 'Phim Viễn Tưởng, Hành Động ',
            imgMain: 'https://khenphim.com/wp-content/uploads/2020/03/bloodshot-1.jpg',
            imgIntro: 'https://muabuonfa.com/wp-content/uploads/2020/09/phim-si%C3%AAu-anh-h%C3%B9ng-bloodshot-Av.jpg',
            srcTrailer: 'vOUVVDWdXbo',
            directors: 'Dave Wilson',
            duration: 109,
            country: 'Mỹ',
            quality: 'VietSub-HD',
            yearRealse: '2029',
            timeRealse: '21/11/2019',
            view: 213,
            urlComment: 2081071355509818,
            desc: 'Nhân vật chính của Bloodshot là Ray Garrison (Vin Diesel) - một lính thủy đánh bộ dày dặn kinh nghiệm. Sau khi chứng kiến vị hôn thê Gina (Talulah Riley) bị sát hại, rồi chính mình cũng bị hạ thủ bởi một kẻ thủ ác bí ẩn (Toby Kebbell), Ray bất ngờ tỉnh lại và nhận ra bản thân vẫn còn sống sót một cách thần kỳ.  Giáo sư Emil Harting (Guy Pearce) sau đó xuất hiện, tiết lộ với Ray rằng anh đã hồi sinh nhờ được cấp ghép vô số robot siêu nhỏ được gọi là Nanite vào bên trong cơ thể. Hơn thế, các Nanite còn giúp Ray sở hữu sức mạnh thể chất vượt trội hơn người thường, cùng khả năng hồi phục bất cứ thương tổn nào một cách tức thời.  Sau khi trở về từ cõi chết và trở thành siêu chiến binh bất bại, Ray bèn truy tìm kẻ đã sát hại hôn thê để báo thù. Từ đó, anh bắt đầu khám phá những âm mưu hắc ám phía sau công nghệ tối tân đang chảy trong dòng máu của mình.'
        },
        {
            id: 6,
            name: 'Nữ Thần Chiến Binh 2',
            subname: 'Wonder Woman 2 (2020)',
            src: 'https://player.phimno1.com/vip?list=1&id=7577&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDBrpT80DoIw2IsQkD2RGnEiSyB5YKlo@W9a3SeBcJsZKroaMXFlogVL1fmMORqAz0G7IYpD/z5RMyTAPRTA7CWg==&sub=',
            idType: '3',
            type: 'Phim Hành Dộng ',
            imgMain: 'https://media.vov.vn/sites/default/files/styles/large/public/2020-12/image025.png',
            imgIntro: 'https://i3.wp.com/image.bongngocdn.com/upload/bg-nu-than-chien-binh-2020.jpg',
            srcTrailer: 'XW2E2Fnh52w',
            directors: 'Patty Jenkins',
            duration: 142,
            country: 'Mỹ',
            quality: 'VietSub-HD',
            yearRealse: '2020',
            timeRealse: '25/12/2021',
            view: 116,
            urlComment: 2081071355509818,
            desc: 'Phim lấy bối cảnh năm 1984, 66 năm sau sự kiện diễn ra Thế Chiến thứ I (1918) ở phần phim đầu tiên, Wonder Woman tái hợp với người yêu tưởng chừng đã qua đời Steve Trevor, đồng thời đương đầu với hai kẻ thù mới là Max Lord và The Cheetah.'
        },
        {
            id: 7,
            name: 'Lucy Siêu Phàm',
            subname: 'Lucy (2014)',
            src: 'https://player.phimno1.com/vip?list=1&id=6843&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDTaIl2VH/HDCBmhIAhiKsWymBBIwZ@9fX55GgRhATvK6roaMXFlogVL1fmMORqAz0G7IYpD/z5RMyTAPRTA7CWgG9QQOsAvLGTLyVWwwQgNqlQOpOrNxCNxkakk@pFB0TH@9oCO8@ecmQO3FYk2PEDXGP818x@oLeu0taPa4Bq9x7O88LdqwOQ1yEW1hIUDSvWZhfOcC5P6CjAEO/N1O6FoJN&sub=',
            idType: '1',
            type: 'Phim Viễn Tưởng, Hành Động ',
            imgMain: 'https://i1.wp.com/images.phimno1.com/images/2020/10/30/Lucy-2014.md.jpg',
            imgIntro: 'https://1.bp.blogspot.com/-n8eqKWOZH1s/Xyr6CJiUMOI/AAAAAAAAPKc/-NM30fVObfEYT7SYE0AMbyYp8AwBSRHTQCPcBGAYYCw/w1200-h630-p-k-no-nu/lucy-sieu-pham-lucy-2014.jpg',
            srcTrailer: 'MVt32qoyhi0',
            directors: 'Luc Besson',
            duration: 142,
            country: 'Mỹ',
            quality: 'VietSub-HD',
            yearRealse: '2014',
            timeRealse: '8/8/2014',
            view: 155,
            urlComment: 2081071355509818,
            desc: 'Lucy là một cô gái trẻ bị bắt cóc bởi một nhóm tội phạm và bị đưa vào cơ thể một loại thuốc lạ. Thứ thuốc ấy vô tình rỉ ra và làm cho cô có siêu năng lực đặc biệt. Một người bình thường chỉ có thể sử dụng 10% trí não nhưng bây giờ cô có thể sử dụng 100% trí não của mình, cô có thể điều khiển mọi thứ bằng tâm trí hay thu nạp kiến thức một cách nhanh chóng... Lucy bắt đầu lên đường và tìm ra nguồn gốc của vấn đề.'
        },
        {
            id: 8,
            name: 'Thám Tử Phố Tàu 3',
            subname: 'Chinatown 3 (2021)',
            src: 'https://player.phimno1.com/vip?list=1&id=8446&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDeaoY/AfWHwOkjQp8mjKYMEWmLIUXlNPr@fj6fHFUoqmroaMXFlogVL1fmMORqAz0G7IYpD/z5RMyTAPRTA7CWgG9QQOsAvLGTLyVWwwQgNqlQOpOrNxCNxkakk@pFB0TH@9IDvQHD@@2MFNLoQyfBQebu0p71Ij35X0cEJBYqfl/DM8LdqwOQ1yEW1hIUDSvWZhfOcC5P6CjAEO/N1O6FoJN&sub=',
            idType: '1',
            type: 'Phim Hành Động',
            imgMain: 'https://thichphet.com/wp-content/uploads/2021/11/tham-tu-pho-tau-3-2021-detective-chinatown-3-26144-300x450.jpg   ',
            imgIntro: 'https://kenh14cdn.com/thumb_w/660/2020/7/27/detective-chinatown-e1583900174276-15958486160821411625234.jpg',
            srcTrailer: 'Q3yHJuRkfUI',
            directors: 'Sicheng Chen',
            duration: 136,
            country: 'Trung Quốc',
            quality: 'VietSub-HD',
            yearRealse: '2014',
            timeRealse: '12/2/2021',
            view: 167,
            urlComment: 2081071355509818,
            desc: 'Một tội ác lớn xảy ra ở Tokyo khi các thám tử Tang Ren và Qin Feng được mời đến để điều tra tội phạm. Một trận chiến giữa những thám tử mạnh nhất Châu Á sắp nổ ra với những tràng cười sảng khoái.'
        },
        {
            id: 9,
            name: 'Điệp Viên 007: Không Phải Lúc Chết',
            subname: 'Bond 25: No Time to Die (2021)',
            src: 'https://player.phimno1.com/vip?list=1&id=10240&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDccUM5X/iNgW5uh8fmlKYMEy7Roc695Tk9eL2cwIvmKyroaMXFlogVL1fmMORqAz0G7IYpD/z5RMyTAPRTA7CWg==&sub=https://sub.phimno1.com/2021/01/No_Time_To_Die_2021.vtt',
            idType: '1',
            type: 'Phim Hành Động, Tội Phạm',
            imgMain: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg8CvIRlJZnDj1pRn7Q1427sYcFr061YU7b3a_MUYj9OnhEzUKDQvWDIk0uiixASULStw&usqp=CAU',
            imgIntro: 'https://taiphim4k.com/wp-content/uploads/2021/11/bond.25.no_.time_.to_.die_.2021-taiphim4k-vietsub.jpg',
            srcTrailer: 'sIPJs6xHFqY',
            directors: 'Cary Joji Fukunaga',
            duration: 148,
            country: 'Mỹ',
            quality: 'VietSub-HD',
            yearRealse: '2021',
            timeRealse: '8/10/2021',
            view: 216,
            urlComment: 2081071355509818,
            desc: 'Bộ phim thứ 25 về thương hiệu điệp viên nổi danh 007 sẽ được tiếp nối sau khi Bond rời khỏi tổ chức và về sống tại Jamaica. Tuy nhiên, chuỗi ngày bình yên đó chẳng kéo dài được bao lâu khi một người bạn cũ tại CIA Felix Leiter bất ngờ tìm đến để nhờ sự trợ giúp của anh trong nhiệm vụ giải cứu một tiến sỹ khoa học bị bắt cóc.'
        },
        {
            id: 10,
            name: 'Người Sao Hỏa',
            subname: "John Carter (2012)",
            src: 'https://player.phimno1.com/vip?list=1&id=8090&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDUJJPo2fALgCarQlLqEm1G0m8HoM48bDtx5eiczwij@CroaMXFlogVL1fmMORqAz0G7IYpD/z5RMyTAPRTA7CWg==&sub=',
            idType: '1',
            type: 'Phim Viễn Tưởng, Hành Động',
            imgMain: 'https://upload.wikimedia.org/wikipedia/vi/a/aa/John_carter_poster.jpg',
            imgIntro: 'https://cinema2cinema.com/vi/wp-content/uploads/2020/08/John-Carter-danh-gia.jpg',
            srcTrailer: 'pcV7aXL8txU',
            directors: 'Andrew Stanton',
            duration: 132,
            country: 'Mỹ',
            quality: 'VietSub-HD',
            yearRealse: '2012',
            timeRealse: '9/3/2012',
            view: 308,
            urlComment: 2081071355509818,
            desc: 'John Carter, một cựu binh tới từ bang Virginia, vốn là người chính trực và quả cảm, cuộc nội chiến trong thế kỷ 19 của nước Mỹ khiến anh cảm thấy chán nản và tuyệt vọng. Trong một lần đi khám phá hang động có chứa vàng, John Carter đột nhiên bị thế lực siêu nhiên nào đó đưa tới hành tinh Barsoom mà sau đó anh mới phát hiện ra đây chính là sao Hỏa. Trọng lực yếu ở đây giúp cho John Carter có khả năng nhảy cao và phi thân qua khoảng cách dài. Từ một người Trái đất bình thường, John trở thành siêu anh hùng trên sao Hỏa.  John Carter sử dụng sức mạnh của mình để can thiệp vào cuộc chiến kéo dài hàng thế kỷ giữa các cư dân bản xứ và cứu lấy sao Hỏa sắp tới hồi diệt vong. John làm quen với những người bạn mới như Sola, Tars Tarkas hay chú chó dễ thương Woola thuộc giống chó bản địa Calot. Anh bước vào một thế giới đang khủng hoảng và nhận ra rằng mình có thể đóng vai trò then chuốt trong việc đem tới hòa bình tại nơi đây. Cuộc gặp gỡ định mệnh với công chúa sao Hỏa, Dejah Thoris, cũng làm thay đổi mục đích sống của John.'
        },
        {
            id: 11,
            name: 'Biệt Đội Cảm Tử',
            subname: 'The Suicide Squad (2021)',
            src: 'https://player.phimno1.com/vip?list=1&id=9690&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDfYw2@lvgFgyZnU0Evh7zJS@DLq184JWY6KziB3gixayroaMXFlogVL1fmMORqAz0G7IYpD/z5RMyTAPRTA7CWg==&sub=',
            idType: '1',
            type: 'Phim Viễn Tưởng, Hành Động',
            imgMain: 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/3/26/vnvietnamsuisq2startsrinstavert1638x2048intlrev-16167778407501066957699.jpeg',
            imgIntro: 'https://caracoltv.brightspotcdn.com/dims4/default/ee00fc2/2147483647/strip/true/crop/1200x630+0+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2Fed%2Fa4%2F5da1cdbf4b9bbb95520aaf23f813%2Fthe-suicide-squad.jpg',
            srcTrailer: 'eg5ciqQzmK0',
            directors: 'James Gunn',
            duration: 122,
            country: 'Mỹ',
            quality: 'VietSub-HD',
            yearRealse: '2021',
            timeRealse: '4/9/2021',
            view: 267,
            urlComment: 2081071355509818,
            desc: 'The Suicide Squad tập hợp nhóm nhân vật gồm Bloodsport, Rick Flag, King Shark và Harley Quinn... bắt tay cùng Amanda Waller cho một cuộc trao đổi đầy liều lĩnh: tham gia nhiệm vụ sinh tử trên hòn đảo vắng người Corto Maltese và họ sẽ có được sự tự do khi trở về, tất nhiên là nếu vẫn còn giữ được mạng tới lúc đó.'
        },
        {
            id: 12,
            name: 'Thế Thân',
            subname: 'Avatar (2009)',
            src: 'https://player.phimno1.com/vip?list=1&id=3272&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDf9k4/UH6PQqlqhR7jBC0KjSKEI4wz7uW@azMUzIzrJ6roaMXFlogVL1f2ZXB/le2S91A9jn@9zgpSgbOEBTGGUupBRGoA6uPWeLfXAAUx9zpVvxVqotAexNXmxajEEsQH68eV/UMP9fZZWExjmD2CnShgQQAiYrD/UJZMqZtn@UfRZpXL7cSDl7dUANbDyWqVo9WEsmFDKSLFUyoLwP2V85cWQ8=&sub=',
            idType: '1-hot',
            type: 'Phim Viễn Tưởng, Hành Động',
            imgMain: 'https://2.bp.blogspot.com/-PWgleTpfU-k/WzzD0caz7EI/AAAAAAAAAPY/ejrdV_ks2482yV8pEACy145QJ61G02FVACLcBGAs/s1600/banner3.jpg',
            imgIntro: 'http://vnnews360.net/img_data/images/danh-sach-nhung-bo-phim-co-doanh-thu-cao-nhat-moi-thoi-dai-0.jpg',
            srcTrailer: '5PSNL1qE6VY',
            directors: 'James Cameron',
            duration: 122,
            country: 'Mỹ,Anh',
            quality: 'VietSub-HD',
            yearRealse: '2009',
            timeRealse: '17/12/2009',
            view: 416,
            urlComment: 2081071355509818,
            desc: 'Avatar là câu chuyện về người anh hùng “bất đắc dĩ” Jake Sully – một cựu sĩ quan thủy quân lục chiến bị liệt nửa thân. Người anh em sinh đôi của anh được chọn để tham gia vào chương trình cấy gien với người ngoài hành tinh Na’vi nhằm tạo ra một giống loài mới có thể hít thở không khí tại hành tinh Pandora. Giống người mới này được gọi là Avatar. Sau khi anh của Jake bị giết, Jake được chọn để thay thế anh mình và đã trở thành một Avatar, Jake có nhiệm vụ đi tìm hiểu và nghiên cứu hành tinh Pandora. Những thông tin mà anh thu thập được rất có giá trị cho chiến dịch xâm chiếm hành tinh xanh thứ hai này của loài người.'
        },
        {
            id: 13,
            name: 'Chiến Binh Báo Đen',
            subname: 'Black Panther (2018) ',
            src: 'https://player.phimno1.com/vip?list=1&id=2033&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDRKctwFjjQhKnizRIvFLsX0mQRaYh8qTAwJqsUj0Nso@roaMXFlogVL1fmMORqAz0G7IYpD/z5RMyTAPRTA7CWg==&sub=',
            idType: '3-hot',
            type: 'Phim Viễn Tưởng, Hành Động',
            imgMain: 'https://khenphim.com/wp-content/uploads/2018/02/Black-Panther-1.jpg',
            imgIntro: 'https://thuonggiaonline.vn/upload/2020/11/23/Phan_tiep_theo_cua_Black_Panther_se_duoc_khoi_quay_vao_thang_72021.png',
            srcTrailer: 'xjDjIWPwcPU',
            directors: ' Ryan Cooglernn',
            duration: 134,
            country: 'Mỹ',
            quality: 'VietSub-HD',
            yearRealse: '2018',
            timeRealse: '23/12/2018',
            view: 380,
            urlComment: 2081071355509818,
            desc: 'Vương quốc Wakanda, quê hương của Black Panther Challa hiện ra qua lời kể của một nhân chứng sống sót trở về. Đây là quốc gia khá khép kín và sở hữu lượng Vibranium lớn nhất trên thế giới. Black Panther - người cầm quyền của Wakanda sở hữu bộ áo giáp chống đạn và móng vuốt sắc nhọn, anh được miêu tả là “người tốt với trái tim nhân hậu.  Nhưng cũng chính vì những đức tính tốt này mà Black Panther gặp khó khăn khi kế thừa ngai vàng sau khi vua cha băng hà. Đối mặt với sự phản bội và hiểm nguy, vị vua trẻ phải tập hợp các đồng minh và phát huy toàn bộ sức mạnh của Black Panther để đánh bại kẻ thù, đem lại an bình cho nhân dân của mình. '
        },
        {
            id: 14,
            name: 'Vương Triều Xác Sống',
            subname: 'Kingdom: Ashin of the North (2021)',
            src: 'https://player.phimno1.com/vip?list=1&id=9531&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDU7JX4QL8BRKtlTV6kTDmBk2UHNAb7ZD7lp/6ZyIAjJ2roaMXFlogVL1fmMORqAz0G7IYpD/z5RMyTAPRTA7CWg==&sub=',
            idType: '1',
            type: 'Phim Kinh Dị, Xác Sống, Hành Động',
            star: 'https://i1.wp.com/saisa.nl/wp-content/uploads/2020/08/pngegg.png?w=1102&ssl=1',
            imgMain: 'https://image.bongngocdn.com/upload/poster-vuong-trieu-xac-song-ashin-phuong-bac-2021.jpg',
            imgIntro: 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/25/ngang-2-1627211385169838330645.png',
            srcTrailer: '4l-yByZpaaM',
            directors: ' Kim Sung Hoon',
            duration: 92,
            country: 'Hàn Quốc',
            quality: 'VietSub-HD',
            yearRealse: '2021',
            timeRealse: '23/7/2021',
            view: 233,
            urlComment: 2081071355509818,
            desc: 'Phần ngoại truyện của loạt phim Vương triều xác sống sẽ kể về cuộc đời cô gái Ashin (nhân vật bí ẩn trong mùa 2), cũng như hé lộ nguyên nhân xuất hiện xác sống và nguồn gốc của cây hồi sinh.'
        },
        {
            id: 16,
            name: 'Vua sư tử',
            subname: 'The Lion King (2019)',
            src: 'https://player.phimno1.com/vip?list=1&id=3910&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDW7FP33@bPAuPswZZrTGRUEqBJbB5@ZnW1OfRVwcvkayroaMXFlogVL1f2ZXB/le2S91A9jn@9zgpSgbOEBTGGUupBRGoA6uPWeLfXAAUx9zpVvxVqotAexNXmxajEEsQH68eV8UML@@UIxFIhEDXUVi7sls835GD@wsjK7lFod5LPZkzL7cSDl7dUANbDyWqVo9WEsmFDKSLFUyoLwP2V85cWQ8=&sub=',
            idType: '3-hot',
            type: 'Phim Phiêu Lưu, Hoạt Hình',
            imgMain: 'https://phimnhua.com/wp-content/uploads/2021/06/The-Lion-King-2019-Promotional-Poster-the-lion-king-42661758-1500-2222-270x400.jpg',
            imgIntro: 'https://kenh14cdn.com/2019/7/18/photo-1-15634255353191960343162.jpg',
            srcTrailer: 'eHcZlPpNt0Q',
            directors: 'Jon Favreau',
            duration: 118,
            country: 'Mỹ',
            quality: 'VietSub-HD',
            yearRealse: '2019',
            timeRealse: '19/7/2019',
            view: 336,
            urlComment: 2081071355509818,
            desc: "Nhân vật chính của Vua sư tử là chú sư tử con Simba, con trai của Mufasa vị vua đang thống trị thế giới hoang dã ở đây. Cuộc sống hạnh phúc yêu đời bên cạnh cha mẹ và cô bạn Nala của cậu sớm chấm dứt khi người chú ruột Scar có âm mưu cướp ngai vàng của cha cậu. Scar đã sắp đặt sẵn một kế hoạch tàn bạo, dàn dựng nên một cuộc chạy trốn của các con thú rồi để cho Simba bị mắc kẹt trong đó. Để cứu con trai, vị vua của muôn loài đã phải hi sinh thân mình. Vừa tiêu diệt được đối thú, vừa gây nên sự ân hận trong người cháu ruột bé nhỏ Simba, Scar đã đạt được mục tiêu của mình. Simba bé bỏng ra đi với nỗi ân hận vô bờ về cái chết của cha, cậu trở nên suy sụp tinh thần chẳng buồn tranh chấp ngai vàng và quyền cai trị vương quốc."
        },
        {
            id: 17,
            name: 'Đại Dịch Cúm',
            subname: 'The Flu (Gamgi) (2013)',
            src: 'https://player.phimno1.com/vip?list=1&id=2394&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDQLcr6QOYKDeDsk19n1zoH07kPIgqmYzZ/p7FeAoNgoSroaMXFlogVL1fmMORqAz0G7IYpD/z5RMyTAPRTA7CWg==&sub=',
            idType: '1',
            type: 'Phim Hành Động, Tình Cảm, Tâm Lý',
            imgMain: 'https://upload.wikimedia.org/wikipedia/vi/a/aa/Daidichcum2013.jpg',
            imgIntro: 'https://3.bp.blogspot.com/-b1getlaIPrY/XHdhgQoLpOI/AAAAAAAAKe4/JyiUt0kyiUIXFuayBaB9PKfAB_RqSU3VQCLcBGAs/s1600/preview.medium.jpg',
            srcTrailer: '_J8F5sEVsQ4',
            directors: 'Kim Sung-soo',
            duration: 118,
            country: 'Hàn Quốc',
            quality: 'VietSub-HD',
            yearRealse: '2013',
            timeRealse: '15/8/2013',
            view: 296,
            urlComment: 2081071355509818,
            desc: "Chuyến tàu chở những người vượt biên trái phép sang Hàn quốc không ngờ đang mang trong mình mầm mống hiểm họa khôn lường khi trong số người vượt biên có một người đang mang mầm bệnh dịch. Và điều gì đến đã đến! Những người trốn trong chiếc container trên tàu đều bị nhiễm bệnh mà chết, chỉ còn lại một người.  Kang Ji-Koo là nhân viên cứu hỏa cùng bác sĩ Kim In-Hae phải nhanh chóng cấp cứu và tìm ra chủng loại virus có khả năng gây chết người chỉ sau 36 giờ nhiễm bệnh cùng với cách điều trị, Và thời gian trở thành vấn đề cực đại khi Kim In Hae phát hiện ra chính con gái mình cũng đang mắc phải loại virus này"
        },
        {
            id: 18,
            name: 'Giải Cứu Guy',
            subname: 'Free Guy (2021)',
            src: 'https://player.phimno1.com/vip?list=1&id=10027&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDfIcHxWfnNDTahyZDiVOKWTayPZk@8tSZ/uDAWxsR3o@roaMXFlogVL1fmMORqAz0G7IYpD/z5RMyTAPRTA7CWg==&sub=https://sub.phimno1.com/2021/03/Free_Guy_2021.vtt',
            idType: '1',
            type: 'Phim Phiêu Lưu, Hành Động',
            imgMain: 'https://txp-storage.sgp1.digitaloceanspaces.com/wp-content/uploads/2021/09/15-1-scaled.jpg',
            imgIntro: 'https://gamek.mediacdn.vn/133514250583805952/2021/8/16/photo-1-16290889280931173430949.jpg',
            srcTrailer: 'cttnRmcr_ME',
            directors: 'Shawn Levys',
            duration: 115,
            country: 'Mỹ',
            quality: 'VietSub-HD',
            yearRealse: '2021',
            timeRealse: '18/8/2021',
            view: 245,
            urlComment: 2081071355509818,
            desc: "Bộ phim kể về Guy – Nhân viên giao dịch ngân hàng, phát hiện anh ấy thực chất là người chơi nền trong trò chơi điện tử thế giới mở. Guy quyết định trở thành người anh hùng và viết lại câu chuyện của chính mình. Giờ đây, trong một thế giới không còn giới hạn, anh ấy quyết định trở thành người giải cứu thế giới, theo cách của chính mình."
        },
        {
            id: 19,
            name: 'Quái Vật Venom',
            subname: 'Venom (2018)',
            src: 'https://player.phimno1.com/vip?list=1&id=3148&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDAIoU3n/lSD6RhylqxheRJxmjO6V6ma3q4LagbAUsqpyroaMXFlogVL1fmMORqAz0G7IYpD/z5RMyTAPRTA7CWgG9QQOsAvLGTLyVWwwQgNqlQOpOrNxCNxkakk@pFB0TH@99KZULDtOnZ3dVuF/LLFe4p1c83NGX4Ug9GqJal9xBIc8LdqwOQ1yEW1gJBmT5AtoPVpjrOa2xK1i5MkzmF4gZXANGF6UCAABbGh1IBxUtR87lsABM11TsFVC3S0AVeUX9prtXunN5ejV/ZlNxulUP1s0NCB0binFBdwDmLCA21QfWxiTPsx5ACHu6hs2jFQAAqgxFVX1WVj8FRb4cEwABGqiMCw==&sub=',
            idType: '1-hot',
            type: 'Phim Viễn Tưởng, Hành Động',
            imgMain: 'https://ss-images.saostar.vn/wp700/2018/10/02/3769612/venom-localized-poster-vietnam.jpg',
            imgIntro: 'https://s3img.vcdn.vn/123phim/2018/10/venom-review--f1857d.jpg',
            srcTrailer: 'u9Mv98Gr5pY',
            directors: 'Ruben Fleischer',
            duration: 107,
            country: 'Mỹ',
            quality: 'VietSub-HD',
            yearRealse: '2021',
            timeRealse: '29/7/2021',
            view: 389,
            urlComment: 2081071355509818,
            desc: "Quái Vật Venom là một kẻ thù nguy hiểm và nặng ký của Người nhện trong loạt series của Marvel. Chàng phóng viên Eddie Brock (do Tom Hardy thủ vai) bí mật theo dõi âm mưu xấu xa của một tổ chức và đã không may mắn khi nhiễm phải loại cộng sinh trùng ngoài hành tinh (Symbiote) và từ đó đã không còn làm chủ bản thân về thể chất lẫn tinh thần. Điều này đã dần biến anh thành quái vật đen tối và nguy hiểm nhất chống lại người Nhện - Venom."
        },
        {
            id: 20,
            name: 'Hồi sinh ký ức',
            subname: 'Reminiscence (2021)',
            src: 'https://player.phimno1.com/vip?list=1&id=9812&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDRIcS41/sIAmAlRB@mwuZAjO7P64k7dnZ05PQZRlV3bmroaMXFlogVL1fmMORqAz0G7IYpD/z5RMyTAPRTA7CWg==&sub=',
            idType: '3',
            type: 'Phim Hành Động, Viễn Tưởng',
            imgMain: 'https://khenphim.com/wp-content/uploads/2021/06/Reminiscence-4_KP.jpg',
            imgIntro: 'https://montasefilm.com/wp-content/uploads/2021/08/p9KXJKmmcBUMqXg0Ovk7Oa86psi-1.jpg',
            srcTrailer: '_BggT--yxf0',
            directors: 'Lisa Joy',
            duration: 148,
            country: 'Mỹ',
            quality: 'VietSub-HD',
            yearRealse: '2021',
            timeRealse: '22/8/2021',
            view: 129,
            urlComment: 2081071355509818,
            desc: "Phim xoay quanh câu chuyện của Nicholas Nick Bannister, một nhà điều tra tâm lý với nhiệm vụ đặc biệt: tái hiện bất cứ ký ức nào mà khách hàng của anh yêu cầu. Thông qua việc giúp khách hàng của mình tiếp cận vào những miền ký ức ngủ quên, góp phần điều khiển thế giới quá khứ đen tối nhưng cũng đầy mê hoặc. Bước ngoặt đến với Nick khi anh quyết định tiếp nhận một vị khách hàng ghé thăm vào cuối ngày, Mae (Rebecca Ferguson). Câu chuyện đánh mất và tìm lại tưởng chừng đơn giản lại đột ngột trở thành nỗi ám ảnh đầy hiểm nguy. Càng cố gắng tìm hiểu sự thật đằng sau sự biến mất của Mae, Bannister phát hiện ra một âm mưu tàn độc và bắt buộc phải trả lời câu hỏi: liệu con người có thể đi xa đến đâu để níu giữ người ta yêu thương?"
        },
        {
            id: 21,
            name: 'Thảm Họa Thiên Thạch',
            subname: 'Greenland (2020)',
            src: 'https://player.phimno1.com/vip?list=1&id=7580&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDXdo4x0HLBBajkixAhjObIyyQB64F8ZHozbvlRX0CsI6roaMXFlogVL1fmMORqAz0G7IYpD/z5RMyTAPRTA7CWg==&sub=',
            idType: '1',
            type: 'Phim Hành Động, Tâm Lý, Gia Đình',
            star: 'https://i1.wp.com/saisa.nl/wp-content/uploads/2020/08/pngegg.png?w=1102&ssl=1',
            imgMain: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8mkXilrLMqsZfJZJX6EumyaU21tx45kCzCkjgcUJVOyKhcAVcf9JQlBuvHoOJWNTJJzA&usqp=CAU',
            imgIntro: 'https://thegioidienanh.vn/stores/news_dataimages/thanhtan/092020/10/14/in_article/5136_image002-4.jpg',
            srcTrailer: 'HU70ECwum2s',
            directors: 'Ric Roman Waugh',
            duration: 148,
            country: 'Mỹ,Anh',
            quality: 'VietSub-HD',
            yearRealse: '2020',
            timeRealse: '20/7/2020',
            view: 209,
            urlComment: 2081071355509818,
            desc: "Bộ phim Greenland bắt đầu khi một sao chổi bay ngang Trái Đất. Ban đầu, giới khoa học dự đoán những mảnh vỡ của nó sẽ bốc cháy thành tro khi đi qua bầu khí quyển, rồi rơi xuống biển mà không gây bất cứ nguy hiểm nào. Song, mọi thứ đột ngột thay đổi khi một mảnh vỡ bất ngờ đổi hướng và xóa sổ cả một thành phố.  Đồng thời, một tảng thiên thạch khổng lồ khác dự kiến va chạm với Trái Đất trong vài ngày tiếp theo và khiến con người đứng trước bờ vực diệt vong như loài khủng long hàng chục triệu năm trước. Lúc này, kỹ sư xây dựng John Garrity (Gerard Butler) cùng vợ Allison (Morena Baccarin) và con trai Nathan (Roger Dale Floyd) thuộc nhóm được chính phủ Mỹ chọn tới hầm trú ẩn.   Song, họ bị lạc mất nhau và không thể lên máy bay để tới căn hầm tại Greenland. Gia đình Garrity buộc phải tìm cách đoàn tụ và sống sót giữa bối cảnh thế giới loạn lạc trước ngày tận thế."
        },
        {
            id: 22,
            name: 'Đại Thảm Họa Núi Beakdu',
            subname: 'Ashfall - Baekdu Mountain (2019)',
            src: 'https://player.phimno1.com/vip?list=1&id=4495&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDUawHyUb3IlGTmgR@kgCVDQaGBLMX0rP2xaGnYzIIrLuroaMXFlogVL1f2ZbF@VK2TtlG9hP@8RETQwa9AA2ARVOgCA2uR72OBK6WF0pN38uxS@wZqpBQIRpHz0myHB0RRqdDSdBJedGHZlEw2HDkVQCQqnxwyNv3/1IvLNJLrOpzMr8sbLgrU12USg8HWjOrCphaA8mwEqSNGF6DNhfiHIFVBEwODq8=&sub=',
            idType: '1',
            type: 'Phim Hành Động, Tâm Lý',
            imgMain: 'https://txp-storage.sgp1.digitaloceanspaces.com/wp-content/uploads/2020/11/56fa266045897b328a8e2bb640298e70.jpg',
            imgIntro: 'http://2saigon.vn/wp-content/uploads/2019/12/Z_Teaser-poster_AF-1-600x418.jpg',
            srcTrailer: '6FROJW6x2zY',
            directors: 'Lee Hae Jun, Kim Byung Seo',
            duration: 130,
            country: 'Hàn Quốc',
            quality: 'VietSub-HD',
            yearRealse: '2019',
            timeRealse: '19/12/2019',
            view: 279,
            urlComment: 2081071355509818,
            desc: "Núi Baekdu – ngọn núi lửa cao nhất bán đảo Triều Tiên nằm ở biên giới giữa Triều Tiên và Trung Quốc bất ngờ phun trào, khiến toàn bộ người dân trên bán đảo kinh hoàng. Thảm họa chưa dừng lại ở đó, tiếp theo sau sẽ là những lần phun trào được dự báo là dữ dội hơn nữa, đe dọa sẽ nhấn chìm toàn bộ bán đảo Triều Tiên trong tro tàn tận thế. Một kế hoạch hợp tác giữa Hàn Quốc và Triều Tiên được đề ra để ngăn cản núi lửa Baekdu phun trào, liệu nhiệm vụ dường như bất khả thi này có thể thành công?"
        },
        {
            id: 23,
            name: 'Đại Hồng Thủy',
            subname: 'Noah (2014)',
            src: 'https://player.phimno1.com/vip?list=1&id=6329&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDAIoopVzEEymk70plphGaKiiTOpMdkNTglbHBViRX26CroaMXFlogVL1fmMORqAz0G7IYpD/z5RMyTAPRTA7CWgG9QQOsAvLGTLyVWwwQgNqlQOpOrNxCNxkakk@pFB0TH@9LH/UBI/S2bEhoq034C3m6uGgFgZHqumInLNZj/fZePc8LdqwOQ1yEW1hIUDSvWZhfOcC5P6CjAEO/N1O6FoJN&sub=',
            idType: '1',
            type: 'Phim Hành Động, Tâm Lý',
            imgMain: 'https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/_/h/_h__teaser-poster_af_1_.jpg',
            imgIntro: 'https://images.squarespace-cdn.com/content/v1/54e310f0e4b0f4a6ba3ac899/1588325423694-JAANDLX7GE7HJIKG8BCI/noah-movie-poster.jpg',
            srcTrailer: '6qmj5mhDwJQ',
            directors: 'Darren Aronofsky',
            duration: 139,
            country: 'Mỹ',
            quality: 'VietSub-HD',
            yearRealse: '2014',
            timeRealse: '28/3/2014',
            view: 167,
            urlComment: 2081071355509818,
            desc: "Dựa theo một câu chuyện có trong Kinh Thánh của nhiều tôn giáo lớn (Thiên Chúa, Hồi giáo, Do Thái...), đạo diễn Aronofsky (nổi tiếng với phim Black Swan) đã tái hiện lại một trong những sự kiện đầu tiên của loài người trên trái đất theo lời sách. Thuở đó, loài người sống hoang đàng vô lối nên Chúa quyết định trừng phạt bằng cách cho một cơn lũ lớn trên khắp cõi trái đất nhằm tiêu diệt tất cả. Tuy nhiên, xét thấy vẫn còn một vài người thiện lương nên Chúa đã chỉ cho Noah đóng một con tàu lớn để gia đình ông cùng muôn thú có chỗ ẩn náu qua cơn đại hồng thủy.  Đại hồng thủy quy tụ nhiều diễn viên từng đoạt giải Oscar như Russell Crowe trong vai Noah, Jennifer Connelly và Anthony Hopkins cùng dàn diễn viên ngôi sao của Hollywood như nàng Hermione của Harry Potter là Emma Watson, Logan Lerman (phim Percy Jackson), Douglas Booth ... Để bộ phim chân thực, đạo diễn cho dựng một con tàu Ark với quy mô và kích thước giống hệt những gì đã được miêu tả trong Kinh Thánh thay vì sử dụng kỹ xảo CGI, con tàu này có chiều cao đến 51m.  Để tạo ra các loài muôn thú trong phim, đạo diễn nhờ đến bậc thầy về kỹ xảo hình ảnh từng nhận đề cử Oscar Adrien Morot. Đầu tiên, Adrien Morot đã lấp đầy phim trường với bản sao của các loài bò sát, động vật có vú và chim chóc... rồi sau đó dùng công nghệ CGI để tạo ra các chuyển động cho chúng."
        },
        {
            id: 24,
            name: 'Biệt Đội Siêu Anh Hùng 3',
            subname: 'Avengers: Infinity War (2018)',
            src: 'https://player.phimno1.com/vip?list=1&id=2736&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDXrFS9HCWMiOBrk5lniiyXU2zMNgtjKPA0eDkQHgbmZmroaMXFlogVL1fmMORqAz0G7IYpD/z5RMyTAPRTA7CWg==&sub=',
            idType: '3',
            type: 'Phim Viễn Tưởng, Hành Động, Chiến Tranh',
            imgMain: 'https://i3.wp.com/image.bongngo.com/upload/poster-biet-doi-sieu-anh-hung-3-cuoc-chien-vo-cuc-2018.jpg',
            imgIntro: 'https://www.elleman.vn/wp-content/uploads/2018/04/25/Avengers-Infinity-War-ELLE-Man-featured-01-01.jpg',
            srcTrailer: 'O4XbKp6kN2k',
            directors: 'Anthony Russo, Joe Russo',
            duration: 150,
            country: 'Mỹ',
            quality: 'VietSub-HD',
            yearRealse: '2018',
            timeRealse: '23/4/2018',
            view: 302,
            urlComment: 2081071355509818,
            desc: "Sau chuyến hành trình độc nhất vô nhị không ngừng mở rộng và phát triển vụ trũ điện ảnh Marvel, bộ phim Avengers: Cuộc Chiến Vô Cực sẽ mang đến màn ảnh trận chiến cuối cùng khốc liệt nhất mọi thời đại. Biệt đội Avengers và các đồng minh siêu anh hùng của họ phải chấp nhận hy sinh tất cả để có thể chống lại kẻ thù hùng mạnh Thanos trước tham vọng hủy diệt toàn bộ vũ trụ của hắn."
        },
        {
            id: 25,
            name: 'Người Nhện : Xa Nhà ',
            subname: 'Spider-Man: Far from Home (2019)',
            src: 'https://player.phimno1.com/vip?list=1&id=3746&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDTI8B0X@ZIyychDYLpTuuAQmmD9IX6tjl5rDZBiAypPWroaMXFlogVL1f2ZbF@VK2TtlG9hP@8RETQwa9AA2ARVOgCA2uR72OBK6WF0pN38uxS@wZqpBQIRpHz0myHB0RRqdDSdBJefKFZm8tp3PHEG2vkl8686nsykElPYxDpJpjCa0UTKsrU12USg8HWjOrCphaA8mwEqSNGF6DNhfiHIFVBEwODq8=&sub=',
            idType: '3',
            type: 'Phim Hành Động, Viễn Tưởng',
            imgMain: 'https://ss-images.saostar.vn/wp700/2019/05/23/5252261/2.jpeg',
            imgIntro: 'https://www.bt.com/content/dam/bt/portal/images/articles/tv/tv-films-spider-man-far-from-home-key-art.jpg',
            srcTrailer: 'DYYtuKyMtY8',
            directors: 'Jon Watts',
            duration: 150,
            country: 'Mỹ',
            quality: 'VietSub-HD',
            yearRealse: '2019',
            timeRealse: '2/7/2019',
            view: 352,
            urlComment: 2081071355509818,
            desc: "Chuyện phim Spider-Man: Far from Home lấy mốc thời gian vài tháng sau những sự kiện ở Avengers: Endgame.Lúc này, Peter Parker (Tom Holland) cùng nhóm bạn học đang tìm cách tái hòa nhập với thế giới sau 5 năm bị “bay màu”. Cậu dự tính tỏ tình với cô bạn MJ (Zendaya) trong chuyến du lịch tới châu Âu nhân kỳ nghỉ hè của lớp.  Rắc rối ập đến khi đám quái vật nguyên tố Elemental xuất hiện và tấn công nhóm bạn suốt chuyến hành trình. Thông qua Nick Fury (Samuel L. Jackson), Peter Parker biết rằng chúng đến từ một vũ trụ song song của siêu anh hùng Mysterio (Jake Gyllenhaal).  Cậu thiếu niên đồng thời được trao cho di sản của Iron Man (Robert Downey Jr. là cặp kính chứa trí thông minh nhân tạo EDITH, có thể giúp người dùng sử dụng mọi thiết bị công nghệ của tập đoàn Stark. Tuy nhiên, mọi chuyện xem ra không hề đơn giản như những gì chàng Nhện “nhí” tưởng tượng."
        },
        {
            id: 26,
            name: 'Thần Sấm : Thời Khắc Tận Thế',
            subname: 'Thor: Ragnarok (2017)',
            src: 'https://player.phimno1.com/vip?list=1&id=1842&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDU5gm0QbxXA@MnBRApjHrLSaZILAl29nYka/LDBhXkIeroaMXFlogVL1fmMORqAz0G7IYpD/z5RMyTAPRTA7CWg==&sub=',
            idType: '1',
            type: 'Phim Viễn Tưởng, Hành Động',
            star: 'https://i1.wp.com/saisa.nl/wp-content/uploads/2020/08/pngegg.png?w=1102&ssl=1',
            imgMain: 'https://upload.wikimedia.org/wikipedia/vi/5/55/Thor-_Ragnarok_Poster.JPG',
            imgIntro: 'https://phimnhua.com/wp-content/uploads/2021/06/5ca5c2a4acc399eab98b45c1.jpg',
            srcTrailer: '0MEmhjJk5e8',
            directors: 'Taika Waititi',
            duration: 130,
            country: 'Mỹ',
            quality: 'VietSub-HD',
            yearRealse: '2017',
            timeRealse: '3/11/2017',
            view: 232,
            urlComment: 2081071355509818,
            desc: "Ragnarok ám chỉ “tận cùng của vũ trụ”, đồng nghĩa với trận chiến sống còn của 9 cõi (Nine Realms). Sau khi Loki Loki soán ngôi cha Odin, vị thần tinh quái này tiếp tục mở đường nhiễu loạn tiến từ cầu Bifrost vào trong Asgard. Thor sẽ phải trở về quê nhà để xử lí những sự kiện quan trọng. Điều này dẫn đến một cuộc chiến được so sánh với “ngày tận thế”."
        },
        {
            id: 27,
            name: 'Quá Nhanh Quá Nguy Hiểm 9',
            subname: 'Fast 9 : The Fast Saga (2021)',
            src: 'https://player.phimno1.com/vip?list=1&id=9604&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDQ5kq9nngXAC76jh22SmIPxWPA7oZw5Tr05H5BAALo6qroaMXFlogVL1fmMORqAz0G7IYpD/z5RMyTAPRTA7CWg==&sub=https://sub.phimno1.com/2021/07/9604.vtt',
            idType: '3',
            type: 'Phim Hành Động, Tội Phạm',
            imgMain: 'https://img165.imagetwist.com/th/42506/641jfwu5tib1.jpg',
            imgIntro: 'https://koicine.com/wp-content/uploads/2021/10/F9-The-Fast-Saga.png',
            srcTrailer: 'aSiDu3Ywi8E',
            directors: 'Justin Lin',
            duration: 142,
            country: 'Mỹ',
            quality: 'VietSub-HD',
            yearRealse: '2021',
            timeRealse: '4/9/2021',
            view: 232,
            urlComment: 2081071355509818,
            desc: "Phần thứ chín trong thương hiệu phim Hành Động đua xe nổi tiếng của Vin Diesel. Phần phim tiếp tục xoay quanh Dominic Toretto (Diesel đóng) trong phi vụ mới. Lần này, anh phải đối diện em trai Jakob, một tay đua xe kiêm sát thủ thượng hạng. Hai người có mâu thuẫn trong quá khứ, dẫn đến sự chia cắt suốt nhiều năm qua. Jakob nhờ sự giúp đỡ của Cipher, kẻ thù truyền kiếp của Dom, để lập kế hoạch hại anh trai."
        },
        {
            id: 28,
            name: 'Thám Hiểm Rừng Xanh',
            subname: 'Jungle Cruise (2021)',
            src: 'https://player.phimno1.com/vip?list=1&id=9606&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDTaAx4GvDPy2KiE1joiirWi74BpAl7dOdka3jXyNW3ZSroaMXFlogVL1fmMORqAz0G7IYpD/z5RMyTAPRTA7CWg==&sub=https://sub.phimno1.com/2021/07/Jungle_Cruise_2021_1080p_vi.vtt',
            idType: '3',
            type: 'Phim Phiêu Lưu, Hành Động',
            imgMain: 'https://1.bp.blogspot.com/-PhkCmgo9ezY/YQTLpjFmrQI/AAAAAAAABXQ/dOav65qxVBA5MSrpRTaFeK2uvWQciqM3gCLcBGAsYHQ/s600/Jungle_Cruise_VN_poster.jpg',
            imgIntro: 'https://www.studyphim.vn/system/movies/8228/thumbnails/original/Jungle%20Cruise%20(2021).jpg',
            srcTrailer: 'f_HvoipFcA8',
            directors: 'Jaume Collet-Serra',
            duration: 142,
            country: 'Mỹ',
            quality: 'VietSub-HD',
            yearRealse: '2021',
            timeRealse: '30/7/2021',
            view: 89,
            urlComment: 2081071355509818,
            desc: "Bộ phim Phiêu Lưu mạo hiểm có yếu tố siêu nhiên, được đặt trong bối cảnh những năm đầu thế kỷ 20 và được xây dựng dựa trên những chuyến thủy trình nổi tiếng trong các công viên chủ đề Disney Land, nơi một chiếc thuyền nhỏ đưa một nhóm du khách đi qua khu rừng đầy những động vật và bò sát nguy hiểm. Phim được cầm trịch bởi đạo diễn Jaume Collet-Serra với sự tham gia diễn xuất của các diễn viên Dwayne Johnson, Emily Blunt, Jack Whitehall, Jesse Plemons và các diễn viên khác."
        },
        {
            id: 29,
            name: 'Chuyến Tàu Sinh Tử 2: Bán Đảo Peninsula ',
            subname: 'Train To Busan 2: Peninsula',
            src: 'https://player.phimno1.com/vip?list=1&id=9668&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDU65Vo3/qPFO6izVG2QKnNw2lE4EG/pvP5e3WdCM2kYuroaMXFlogVL1fmMORqAz0G7IYpD/z5RMyTAPRTA7CWg==&sub=https://sub.phimno1.com/2021/07/Peninsula_2020.vtt',
            idType: '3',
            type: 'Phim Hành Động, Tâm Lý',
            imgMain: 'https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/1/b/1bd4e194444eb910e05f_1_.jpg',
            imgIntro: 'https://www.brighttv.co.th/wp-content/uploads/2020/07/Peninsula-Train-to-Busan2.jpg',
            srcTrailer: 'aiG5s2Lsv_Y',
            directors: 'Yeon Sang Ho',
            duration: 116,
            country: 'Hàn Quốc',
            quality: 'VietSub-HD',
            yearRealse: '2020',
            timeRealse: '30/12/2020',
            view: 217,
            urlComment: 2081071355509818,
            desc: "Bán Đảo Peninsula có bối cảnh khoảng 4 năm sau đại dịch (phần 1 Train to Busan). Toàn bộ bán đảo Triều Tiên trở thành vùng đất hoang tàn và bị zombie xâm chiếm. Tuy nhiên, vẫn có một nhóm người bị mắc kẹt, họ phải chiến đấu để sinh tồn và chờ ngày được giải cứu."
        },
        {
            id: 30,
            name: 'Sát thủ John Wick 3: Chuẩn Bị Chiến Tranh',
            subname: 'John Wick: Chapter 3 - Parabellum (2019)',
            src: 'https://player.phimno1.com/vip?list=1&id=3669&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDVopV/GH/LiifsClIr12HPEuPIo0EkKb7@ZrDcxcxgpyroaMXFlogVL1f2ZXB/le2S91A9jn@9zgpSgbOEBTGGUupBRGoA6uPWeLfXAAUx9zpVvxVqotAexNXmxajEEsQH68eV/RLPoyWLGdTk2z5VVeku0I/4YucpVMMELFH/ZpXB6tTL7cSDl7dUANbDyWqVo9WEsmFDKSLFUyoLwP2V85cWQ8=&sub=4',
            idType: '3-hot',
            type: 'Phim Hành Động, Võ Thuật',
            imgMain: 'https://musicart.xboxlive.com/7/df1a5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
            imgIntro: 'https://1.bp.blogspot.com/-mOf9Er-JMr4/XTv4GugV9HI/AAAAAAAAAEI/iuJ8TNAo9fcUFLNzKmOjMHq_nOO4KDtbgCLcBGAs/s1600/photo-1-1561952399217113238390.jpg',
            srcTrailer: 'M7XM597XO94',
            directors: 'Chad Stahelski',
            duration: 121,
            country: 'Mỹ',
            quality: 'VietSub-HD',
            yearRealse: '2019',
            timeRealse: '17/5/2019',
            view: 357,
            urlComment: 2081071355509818,
            desc: "Trong John Wick: Chapter 3 - Parabellum, Keanu Reeves thêm một lần nữa sắm vai gã sát thủ huyền thoại còn có biệt danh là 'Ông kẹ'.  Chuyện phim bắt đầu ngay sau những sự kiện cuối phần hai: John Wick phải chạy trốn vì phạm luật cấm giết người trong khách sạn Continental. Gã nay trở thành mục tiêu của giới sát thủ trên khắp toàn cầu với món tiền thưởng kỷ lục 14 triệu USD.  Lúc này, John Wick phải vất vả chạy trốn và chống lại những kẻ toan cướp mạng mình, Anh đồng thời nhìn ra một con đường sống duy nhất, và truy cầu những người hiếm hoi có thể giúp mình vượt qua cơn hoạn nạn chết người.Cùng lúc đó, Hội đồng Tối cao của giới sát thủ bắt đầu ra tay. Tổ chức không để yên cho bất cứ ai ra tay giúp đỡ John Wick, và sẵn sàng giáng xuống những hình phạt nặng nề nhất."
        },
        {
            id: 31,
            name: 'Vệ Sĩ Sát Thủ 2',
            subname: "Hitman's Wife 's Bodyguard (2021)",
            src: 'https://player.phimno1.com/vip?list=1&id=9256&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDcow191rDMhe66BhjphKPURavDo0LjJb757jaTQoC2P6roaMXFlogVL1fmMORqAz0G7IYpD/z5RMyTAPRTA7CWg==&sub=https://sub.phimno1.com/2021/The.Hitmans.Wifes.Bodyguard.2021.1080p.WEB-DL.DD5.1.H.264-EVO.vtt',
            idType: '1',
            type: 'Phim Hành Động, Võ Thuật',
            imgMain: 'http://salaphim.com/photos/ve-si-sat-thu-2-nha-co-noc-2021-8589.jpg',
            imgIntro: 'https://i.ytimg.com/vi/p2Z5OXE9YG4/maxresdefault.jpg',
            srcTrailer: '9C0l31YcahQ',
            directors: 'Patrick Hughes',
            duration: 121,
            country: 'Mỹ',
            quality: 'VietSub-HD',
            yearRealse: '2021',
            timeRealse: '16/6/2021',
            view: 256,
            urlComment: 2081071355509818,
            desc: "Bộ đôi chết chóc nhất quả đất: vệ sĩ Michael Bryce và sát thủ Darius Kincaid đã bung nóc trở lại cùng ';;Vệ Sĩ Sát Thủ 2';; Chuyên viên an ninh cao cấp Michael Bryce quyết định nghỉ xả hơi buông lơi 2 từ VỆ SĨ. Ăn chơi chưa được bao lâu, Michael Bryce một lần nữa buộc phải làm bạn thân cùng sát thủ khét tiếng Darius Kincaid trong phi vụ tréo ngoe: cứu lấy nóc nhà của tay sát thủ."
        },
        {
            id: 32,
            name: 'Đại Chiến Robot 5 : Chiến Binh Cuối Cùng',
            subname: 'Transformers 5 : The Last Knight (2017)',
            src: 'https://player.phimno1.com/vip?list=1&id=1279&url=4vm9vfiuh89FEMrwBxrNocUTnacOA/iQSLFA6w0Upuy8Z9km5lH0Hw/ZsiR7uxKvLRGvAYw@@anP6Jf/YnknrajLpfgwKz8udO0usZeYvwHjEaMVpxbCohclVFKXNDPxUW3/QzOBS6ucAaqSAisxn@qxQcRi76t@IRtj2F6PE1AFRbdZVtItBuzUPXYys1TEVgu@6woY6ILYt0AaBNxcmOMEMtExUK8tLlOnbCRpdjSABKMLF/SaA5SyMkGXPQzFK5dHYSsqRrcCBAUHDx0WARYmUoL3/BZazFK7Fxy9BklMZkK8suZJrlMDdhRacGB57Vp316oGLAMO13R/ZA6eBVYrtnPExQqWviloLCGi0/30JggrjCtDaHQPRxEDco0uQDtSc@6BLX3ZYqsDLEmLnQBfWh18u1IhFFRzkG9GPkaKUhQ4uvgDeAZEhEtabRbo83MBBF6NdGYCAAphS3682lkbFFhermV7XHn7YARHLUwOLgZ/a31XZQVZSEEwWktkJBcSFChYYzQ7cPhif0FGF1UEVgBSxx1IBEcLNk0RBvwRHCdLVomaHRVbSRTiE0oCexVVjFtQOjKnKCp5qAFIViIVUFGLN2U5bzI5HwsXQQ8IWV4FWxgMGxdTXBRcpQOtbA0BOEYeh@IfF0gHXRpYA1cFAwMeCBMHE1oRTxaqABFeFMdWAB5JFXYfX0oTAhYMHktDVURUI2AeaFdgBQ5uzV9jDAcUBTI8xVNzgxwAXE1YlhQPXg4EBlgBBFNXVgqjUlVXPgwGOwQFZwMTcUUITwVFEwIDBQAKTRdIBxBRFE/gV1NMHBZNFABNCRISERRJEE1XCRIDHhV6chEnrDBQCAoAMDCmD1dhbUE2ep0BfnAzdrMX/RBAWz8KBFdeEgEDBFwWVT0IATkBTRMZWQRTGV4KXw==&sub=',
            idType: '1',
            type: 'Phim Viễn Tưởng, Hành Động',
            imgMain: 'http://fancoiphim.net/photos/robot-dai-chien-chien-binh-cuoi-cung-2017-6842.jpg',
            imgIntro: 'https://www.studyphim.vn/system/movies/2498/thumbnails/original/maxresdefault.jpg',
            srcTrailer: 'JOQrn9AToag',
            directors: 'Michael Bay',
            duration: 121,
            country: 'Mỹ',
            quality: 'VietSub-HD',
            yearRealse: '2017',
            timeRealse: '12/6/2017',
            view: 256,
            urlComment: 2081071355509818,
            desc: "Bom tấn Transformers: The Last Knight mở đầu bằng “bài học lịch sử” về người máy biến hình và sự xuất hiện của họ trên Trái đất thông qua lời dẫn của Sir Edmund Burton (Anthony Hopkins) - một chúa đất quyền lực tại nước Anh.  Ông cho rằng các Transformer cứ thế đổ bộ xuống hành tinh xanh là để đi tìm một bảo vật từng tồn tại từ thời Vua Arthur, và vật báu sẽ là chìa khóa quyết định vận mệnh của cả hai giống loài.  Để tìm ra sự thật, Edmund Burton cầu viện tay kỹ sư từng chiến đấu cùng Optimus Prime là Cade Yeager (Mark Wahlberg) và nữ giáo sư uyên bác Viviane Wembly (Laura Haddock).  Về phần Optimus Prime, vị thủ lĩnh của phe Autobot trở về Cybertron và chạm trán “Đấng sáng tạo” Quintessa. Bằng ma thuật bí ẩn, ả thôi miên Optimus, khiến ông tin rằng con người mới là kẻ thù thực sự của Transformer. Optimus Prime bỗng trở thành mối đe dọa đối với toàn nhân loại, cũng như nhóm Autobot tại Trái đất."
        },
        {
            id: 33,
            name: 'Vùng Đất Câm Lặng 2',
            subname: 'A Quiet Place 2 (2021)',
            src: 'https://player.phimno1.com/vip?list=1&id=9079&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDf7kM9kbcGVW77k9Hxi7nKi2xNLFl6arI1b//eToFpPyroaMXFlogVL1fmMORqAz0G7IYpD/z5RMyTAPRTA7CWg==&sub=',
            idType: '1-hot',
            type: 'Phim Kinh Dị, Hành Động,Tâm Lý',
            imgMain: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNw6d2k_But-wsajFZjxMHKpuJuuba0jZ6TnI8aB-Gx0caU6ecKG_GqTOtfkYgsE29jdk&usqp=CAU',
            imgIntro: 'https://ghienphimz.org/uploads/ZVS5PCardn4U0ipQqxAK26LgRjF1M3Ou_banner_.jpeg?v=1623658919',
            srcTrailer: 'BpdDN9d9Jio',
            directors: 'John Krasinski',
            duration: 103,
            country: 'Mỹ',
            quality: 'VietSub-HD',
            yearRealse: '2021',
            timeRealse: '28/5/2021',
            view: 312,
            urlComment: 2081071355509818,
            desc: " Sau những biến cố ở quê nhà, gia đình Abbott giờ phải đối mặt với nỗi kinh hoàng của thế giới bên ngoài. Bị buộc phải dấn thân vào những điều chưa biết, họ nhận ra những sinh vật săn mồi bằng âm thanh không phải là mối đe dọa duy nhất rình rập bên ngoài con đường cát."
        },
        {
            id: 34,
            name: 'Đại Chiến Hành Tinh Khỉ',
            subname: 'War for the Planet of the Apes (2017)',
            src: 'https://player.phimno1.com/vip?list=1&id=1536&url=4vm9vfiuh89FEMrwBxrNocUTnacOA/iQSLFA6w0Upuy8Z9km5lHsSTu67hJkvjyBHjqPIKcn04Sax5r/cTsSjYfVmbhcH1Q9BZsmuvOhugTgL7Y8hxXy8QNldzGEGAf6AkP7Uim7S6ucAaqSAisxn@qxQd8Oi7lxClBqiGu5NVwlQrBWS/A3Zci0HG91rGTKG2GLkGomwKyDt0AaBNx3hcV1B5haM58cRQKlWShZdC@BbZpwMeWZULaPGG2NGDjuMaRzB1dWQeEQBAECUwgWTRIhQ4nj/BZazFK7Fxy9BklMc0GrpbsXzzB9Hw5NVHIDwDIMk/R9HRkPukVgUyKULCkW0HqB2RWSsFdaBCfvidjxC1ZZ/1sGaUhfbBYcXr4fXBJSTuCVAVWLUuBOTReNngtKFkZQihccEBlCik8dFUSSEUoTxK9HAFVBhwpldk/j/hVQd1ujdH9CJyFzW3yP6zQpNWUF3x9bRECiDV1RBQhUVgUDBgtSB1QCa1YFaFNQAkgXFA0ZWwJAQK9SUwRfTR0SUBABmhxNA1MWPRFLFPwfSiYTX5nPQ0kcQCDgPQx4Vkce00A0VBe@Ow1HrHdpMDZwGSTgLHkJCzlMWRQTWVpfV1tbFgMDBgxBVTkK82/3QhUcBFBVx/8KVA==&sub=',
            idType: '1-hot',
            type: 'Phim Hành Động',
            imgMain: 'https://upload.wikimedia.org/wikipedia/vi/d/d0/%C4%90%E1%BA%A1i_chi%E1%BA%BFn_h%C3%A0nh_tinh_kh%E1%BB%89_poster.jpg',
            imgIntro: 'https://bizweb.dktcdn.net/100/064/189/files/dai-chien-hanh-tinh-khi-banner-1500371705.jpg?v=1507120317089',
            srcTrailer: 'hHUBpMznFJI',
            directors: 'Matt Reeves',
            duration: 117,
            country: 'Mỹ,Canada',
            quality: 'VietSub-HD',
            yearRealse: '2017',
            timeRealse: '10/7/2017',
            view: 407,
            urlComment: 2081071355509818,
            desc: "War for the Planet of the Apes, phần phim thứ 3 và cũng là cuối cùng của trilogy Planet of the Apes. Tiếp nối phần trước, sau khi quân đội biết sự tồn tại của xã hội loài khỉ dưới sự chỉ huy của Caesar, họ quyết định đến chiến đấu chống lại Caesar, nhóm lính được dẫn đầu bởi một vị tướng tàn bạo. Về phần vị vua khỉ của chúng ta, sau những mất mát của mình, anh ta dần trở nên đen tối hơn, có những suy nghĩ độc đoán hơn về con người và cách thống lĩnh của mình. Số phận của hai giống loài này phụ thuộc vào cuộc chiến cuối cùng này!"
        },
        {
            id: 35,
            name: 'Góa Phụ Đen',
            subname: 'Black Widow (2021)',
            src: 'https://player.phimno1.com/vip?list=1&id=9157&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDVtla6mGaIRzErEpGgFC4AQi4LLkq/oXvyO3Eejwzv4WroaMXFlogVL1fmMORqAz0G7IYpD/z5RMyTAPRTA7CWg==&sub=https://sub.phimno1.com/2021/9157.vtt',
            idType: '1',
            type: 'Phim Hành Động',
            imgMain: 'https://lh3.googleusercontent.com/-D-YkC0Y6I9M/XiRX0U_EFeI/AAAAAAAAGoo/Gb98AC5w5g4644f_pathidknde9GGTBcQCLcBGAsYHQ/s0/Phimplay_Black-Widow.jpg',
            imgIntro: 'https://sphimle.com/wp-content/uploads/2021/04/Goa-Phu-Den-Black-Widow-2021-1.jpg',
            srcTrailer: 'uzlNH9XkWQI',
            directors: 'Cate Shortland',
            duration: 134,
            country: 'Mỹ',
            quality: 'VietSub-HD',
            yearRealse: '2021',
            timeRealse: '18/8/2021',
            view: 206,
            urlComment: 2081071355509818,
            desc: "Phim lấy bối cảnh ngay sau sự kiện Captain America: Civil War, lần này nữ điệp viên phải đối diện với những câu hỏi đầy bí ẩn trong nguồn gốc của mình. Những câu hỏi sẽ dẫn Natasha quay trở lại Budapest, nơi cô được luyện tập để trở thành siêu điệp viên của Nga."
        },
        {
            id: 36,
            name: 'Ám Ảnh Kinh Hoàng 2',
            subname: 'The Conjuring 2: The Enfield Poltergeist (2016)',
            src: 'https://player.phimno1.com/vip?list=1&id=1604&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDTdgH2FrmARK7ihB0gg3tG1G0BoUmzpWc7rH5QgE1kp@roaMXFlogVL1fkMORuVG8Tt5AmAz3zREyQxeZTBXMTQG9QQOsAvLGTLyVWwwQgNqlQOpOrNxCNxkakk@pFB0TH@9FUMQPIPKKA1RnogKfKB@FtFF4/7Le4EIBG7lzlMZHLc8LdqwOQ1yEW1gJBmT5AtoPVpjrOa2xK1i5MkzmF4gZXANGF6UCAABbGh1IBxUtR87lsABM11TsFVC3S0AVeUX9prtXqkVLfBYJR3Jh0AEKladmRQYyogJEVRKXWkk3pnWf9QXPsx5ACHu6hs2jFQAAqgxFVX1WVj8FRb4cEwABGqiMCw==&sub=',
            idType: '1',
            type: 'Phim Kinh Dị,Tâm Linh,Bí Ẩn',
            imgMain: 'https://taiphim.vn/upload/img/products/72658e245af37ffa33a16a0a0f7069e5.jpg',
            imgIntro: 'https://chieuphimquocgia.com.vn/Content/Images/uploaded/2016%20standee%20banner/the-conjuring-2-banner-933x467.jpg',
            srcTrailer: 'GdL4turrffw',
            directors: 'James Wan',
            duration: 134,
            country: 'Mỹ',
            quality: 'VietSub-HD',
            yearRealse: '2016',
            timeRealse: '10/6/2016',
            view: 359,
            urlComment: 2081071355509818,
            desc: "Phim lấy bối cảnh ngay sau sự kiện Captain America: Civil War, lần này nữ điệp viên phải đối diện với những câu hỏi đầy bí ẩn trong nguồn gốc của mình. Những câu hỏi sẽ dẫn Natasha quay trở lại Budapest, nơi cô được luyện tập để trở thành siêu điệp viên của Nga."
        },
        {
            id: 37,
            name: 'Thế Giới Khủng Long 2: Vương quốc Sụp Đổ',
            subname: 'Jurassic World: Fallen Kingdom (2018)',
            src: 'https://player.phimno1.com/vip?list=1&id=2820&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDGZ0DqQHlSRSTpzpDsQ@EGR68RJAw9YfM0OLcZx8S2vWroaMXFlogVL1f2ZXB/le2S91A9jn@9zgpSgbOEBTGGUupBRGoA6uPWeLfXAAUx9zpVvxVqotAexNXmxajEEsQH68eV8w/PvWuAEVYg1vqIn6Stl0kwYCe3VkEBY0GoploL5lSL7cSDl7dUANbDyWqVo9WEsmFDKSLFUyoLwP2V85cWQ8=&sub=',
            idType: '1',
            type: 'Phim Viễn Tưởng, Hành Động',
            imgMain: 'https://cdn01.heobenho.xyz/mov/08-2020/20202845261f-4a42-4450-9e6a-5dbfd52010b3.jpg',
            imgIntro: 'https://phimthuyetminh.ophimhay.com/file/banner-phim/cong-vien-khung-long-4-thuyet-minh-jurassic-world.jpg',
            srcTrailer: 'vn9mMeWcgoM',
            directors: 'J.A. Bayona',
            duration: 128,
            country: 'Mỹ',
            quality: 'VietSub-HD',
            yearRealse: '2018',
            timeRealse: '8/6/2018',
            view: 346,
            urlComment: 2081071355509818,
            desc: "4 năm sau thảm họa Công Viên kỷ Jura bị phá hủy bởi những con khủng long. Một vài con khủng long vẫn còn sống sót trong rừng trong khi Isla Nublar bị con người bỏ hoang. Owen (Chris Pratt) và Claire (Bryce Dallas Howard) đã tiến hành chiến dịch giải cứu những con khủng long còn sống sót khỏi sự tuyệt chủng khi ngọn núi lửa tại khu vực này bắt đầu hoạt động trở lại. Họ vô tình khám phá ra một âm mưu có thể khiến toàn bộ hành tinh đối mặt với một hiểm họa to lớn chưa từng thấy kể từ thời tiền sử."
        },
        {
            id: 38,
            name: 'Ngôi Nhà Dưới Đáy Hồ',
            subname: 'The Deep House (2021)',
            src: 'https://player.phimno1.com/vip?list=1&id=10243&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDeYAx8wHDEzO5mBcf3gbmUEilBZoJxKXH9eGnXQ1Wq6@roaMXFlogVL1fmMORqAz0G7IYpD/z5RMyTAPRTA7CWg==&sub=',
            idType: '1',
            type: 'Phim Kinh Dị, Hành Động',
            imgMain: 'https://i1.wp.com/images.phimno1.com/images/2021/11/20/The-Deep-House-2021.md.jpg',
            imgIntro: 'https://lh3.googleusercontent.com/-2MP5kOUiogM/YXlypvhd9fI/AAAAAAAAEEM/qkpQKO1Af_w7BSKy0JJJY5deCLCBQq5eQCLcBGAsYHQ/s0/unnamed.png',
            srcTrailer: 'VvOCLeQDXlU',
            directors: 'Alexandre Bustillo',
            duration: 85,
            country: 'Pháp,Bỉ',
            quality: 'VietSub-HD',
            yearRealse: '2021',
            timeRealse: '18/6/2018',
            view: 167,
            urlComment: 2081071355509818,
            desc: "Một cặp vợ chồng trẻ trong một chuyến du lịch khám phá các công trình dưới nước, đã phải thay đổi toàn bộ hành trình của mình sau khi vô tình bước chân vào một ngôi nhà kỳ dị nằm dưới đáy hồ. Họ không ngờ rằng một thực thể hắc ám đã bị đánh thức ngay khi họ xâm phạm vào ngôi nhà..."
        },
        {
            id: 39,
            name: 'Sói Già Phố Wall',
            subname: 'The Wolf of Wall Street (2013)',
            src: 'https://player.phimno1.com/vip?list=1&id=10316&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDWbgw30OdJjuK5g90gjSyMAnsHbkEjIfd6rzbQSIV2biroaMXFlogVL1fmMORqAz0G7IYpD/z5RMyTAPRTA7CWg==&sub=https://sub.phimno1.com/2021/09/10316.vtt',
            idType: '1',
            href: 'humor-movies',
            type: 'Phim Hài Hước,Tâm lý,Tội phạm',
            imgMain: 'https://upload.wikimedia.org/wikipedia/vi/d/d8/The_Wolf_of_Wall_Street_%282013%29.png',
            imgIntro: 'https://sachhaynendoc.net/wp-content/uploads/2019/03/%C4%90%E1%BB%89nh-cao-di%E1%BB%85n-xu%E1%BA%A5t-c%E1%BB%A7a-Leo.jpg',
            srcTrailer: 'iszwuX1AK6A',
            directors: 'Martin Scorsese',
            duration: 180,
            country: 'Mỹ',
            quality: 'VietSub-HD',
            yearRealse: '2014',
            timeRealse: '11/1/2014',
            view: 345,
            urlComment: 2081071355509818,
            desc: "Phim được phóng tác dựa trên kịch bản chuyển thể từ cuốn hồi ký nổi tiếng ăn khách của Jordan Belfort, một tay môi giới cổ phiếu giá trị thấp từ Long Island đã trở nên cực kỳ nổi tiếng khi xuất bản cuốn hồi ký sau thời gian thụ án 20 tháng tù do từ chối hợp tác với cảnh sát điều tra trong vụ bê bối chứng khoán giả mạo đã suýt nữa làm sụp đổ cả phố Wall vào thập niên 90, dính líu đến giới ngân hàng và cả các băng đảng mafia. The Wolf of Wall Street đã phản ánh sự thăng trầm của thế giới tài chính Wall Street cùng với những cuộc tiệc tùng chơi bời ngập trong ma túy và rượu chè, cuối cùng đã làm đảo lộn cuộc sống của những con người đắm chìm trong nó..."
        },
        {
            id: 40,
            name: 'Sói 100%',
            subname: '100% Wolf (2020)',
            src: 'https://player.phimno1.com/vip?list=1&id=9691&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDa9813nviRBPYrkxY3SesLBqvOKEpxLTikrDlRH0EjZWroaMXFlogVL1fmMORqAz0G7IYpD/z5RMyTAPRTA7CWg==&sub=',
            idType: '1',
            type: 'Phim Phiêu Lưu,Hài Hước',
            imgMain: 'https://i1.wp.com/images.phimno1.com/images/2021/08/11/100-Wolf-2020.md.jpg',
            imgIntro: 'https://i.ytimg.com/vi/SKDQtIZu_Ko/maxresdefault.jpg',
            srcTrailer: 'ga0iTWXCGa0',
            directors: 'Alexs Stadermann',
            duration: 180,
            country: 'Úc,Bỉ',
            quality: 'VietSub-HD',
            yearRealse: '2020',
            timeRealse: '29/5/2020',
            view: 278,
            urlComment: 2081071355509818,
            desc: "Sói 100% kể câu chuyện về Freddy Lupin, người thừa kế của dòng họ người sói quý tộc. Khát khao cháy bỏng được trở thành một người sói, tuy nhiên Freddy bị sốc khi vào sinh nhật lần thứ 13, anh ta bị biến thành một chú chó xù màu hồng hung dữ. Ngay khi Freddy nghĩ rằng cuộc sống không thể tồi tệ hơn, anh ta lại bị ném vào nhà tù chó."
        },
        {
            id: 41,
            name: 'Xác Sống: Phần 11',
            subname: 'The Walking Dead Season 11 (2021)',
            src: [10223, 10224, 10225, 10226, 10227, 10228, 10229, 10230],
            idType: '2',
            type: 'Phim Kinh Dị, Xác Sống, Hành Động,',
            imgMain: 'https://i1.wp.com/images.phimno1.com/images/2021/11/11/The-Walking-Dead-season-11.md.jpg',
            imgIntro: 'https://gphimtv.com/wp-content/uploads/2021/12/The-Walking-Dead-Season-11-2021.jpeg',
            srcTrailer: 'qwOWJ8pPgk8',
            directors: 'Alexs Stadermann',
            duration: 24,
            country: 'Mỹ',
            quality: 'VietSub-HD',
            yearRealse: '2021',
            timeRealse: '22/8/2021',
            view: 367,
            urlComment: 2081071355509818,
            desc: "“The Walking Dead” kể về một nhóm người sống sót, dẫn đầu bởi nhân viên cảnh cảnh sát Rick Grimes chạy trốn khỏi sự truy lùng, săn đuổi của đội quân thây ma ăn thịt người. Dựa theo cuốn truyện tranh nổi tiếng cùng tên của nhà văn Robert Kirkman, bộ phim đặt trong bối cảnh thế giới hoàn toàn thuộc về những thây ma sau ngày tận thế."
        },
        {
            id: 42,
            name: 'Trò Chơi Con Mực',
            subname: 'Squid Game (2021)',
            src: [10015, 10016, 10017, 10018, 10019, 10020, 10021, 10022, 10023],
            idType: '2-hot',
            type: 'Phim Hành Động, Tâm Lý, Kinh Dị',
            imgMain: 'https://i1.wp.com/images.phimno1.com/images/2021/10/01/Squid-Game-2021.md.jpg',
            imgIntro: 'https://cdn.baogiaothong.vn/upload/images/2021-4/article_social_image/2021-10-24/img-bgt-2021-img-bgt-2021-poster-phim-squid-game-1635075147-width1200height630-1635075410-width1200height630.jpg',
            srcTrailer: 'oqxAJKy0ii4',
            directors: 'Hwang Dong Hyuk',
            duration: 9,
            country: 'Hàn Quốc',
            quality: 'VietSub-HD',
            yearRealse: '2021',
            timeRealse: '22/8/2021',
            view: 452,
            urlComment: 2081071355509818,
            desc: "“The Walking Dead” kể về một nhóm người sống sót, dẫn đầu bởi nhân viên cảnh cảnh sát Rick Grimes chạy trốn khỏi sự truy lùng, săn đuổi của đội quân thây ma ăn thịt người. Dựa theo cuốn truyện tranh nổi tiếng cùng tên của nhà văn Robert Kirkman, bộ phim đặt trong bối cảnh thế giới hoàn toàn thuộc về những thây ma sau ngày tận thế."
        },
        {
            id: 43,
            name: 'Lupin: :Phần 1',
            subname: 'Lupin Season 1 (2021)',
            src: [9789, 9790, 9791, 9792, 9793],
            idType: '2',
            type: 'Phim Hành Động, Phiêu Lưu, Viễn Tưởng',
            imgMain: 'https://image.bongngocdn.com/upload/poster-lupin-phan-1-2021.jpg',
            imgIntro: 'https://i3.wp.com/image.bongngocdn.com/upload/bg-lupin-phan-1-2021.jpg',
            srcTrailer: 'oqxAJKy0ii4',
            directors: 'Kate Herron',
            duration: 5,
            country: 'Mỹ, Pháp',
            quality: 'VietSub-HD',
            yearRealse: '2021',
            timeRealse: '22/6/2021',
            view: 246,
            urlComment: 2081071355509818,
            desc: "Nhiều năm sau bất công đầy bi kịch, Assane tìm cách đánh cắp sợi dây chuyền kim cương hòng trả thù và đòi lại món nợ xưa, nhưng vụ trộm đã bất ngờ chuyển hướng."
        },
        {
            id: 44,
            name: 'Loki: Phần 1',
            subname: 'Loki Season 1 (2021)',
            src: [9175, 9176, 9177, 9178, 9179, 9344],
            idType: '2',
            type: 'Phim Hành Động, Phiêu Lưu, Viễn Tưởng',
            imgMain: 'https://image.bongngocdn.com/upload/poster-loki-marvel-2021.jpg',
            imgIntro: 'https://koicine.com/wp-content/uploads/2021/02/Loki-Season-1.jpg',
            srcTrailer: 'lDToq9SuEmI',
            directors: 'Kate Herron',
            duration: 6,
            country: 'Mỹ',
            quality: 'VietSub-HD',
            yearRealse: '2021',
            timeRealse: '9/6/2021',
            view: 246,
            urlComment: 2081071355509818,
            desc: "Nhiều năm sau bất công đầy bi kịch, Assane tìm cách đánh cắp sợi dây chuyền kim cương hòng trả thù và đòi lại món nợ xưa, nhưng vụ trộm đã bất ngờ chuyển hướng."
        },
        {
            id: 45,
            name: 'Vùng Đất Quỷ Dữ: Bóng Tối Vô Tận',
            subname: 'Resident Evil: Infinite Darkness (2021)',
            src: [9180, 9181, 9182, 9183],
            idType: '2',
            type: 'Phim Hành Động, Kinh Dị, Hoạt Hình',
            imgMain: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hJ4CPlusRH473QdNX3xUKWUX6as.jpg',
            imgIntro: 'https://upload.motgame.vn/photos/motgame-vn/2021/05/resident-evil-infinite-darkness-1.jpg',
            srcTrailer: 'P-js-Eww1OI',
            directors: 'Kate Herron',
            duration: 4,
            country: 'Mỹ, Nhật Bản',
            quality: 'VietSub-HD',
            yearRealse: '2021',
            timeRealse: '12/5/2021',
            view: 125,
            urlComment: 2081071355509818,
            desc: "Nhiều năm sau bất công đầy bi kịch, Assane tìm cách đánh cắp sợi dây chuyền kim cương hòng trả thù và đòi lại món nợ xưa, nhưng vụ trộm đã bất ngờ chuyển hướng."
        },
        {
            id: 46,
            name: 'Trận Chiến Sông Scheldt',
            subname: 'The Forgotten Battle (2020)',
            src: 'https://player.phimno1.com/vip?list=1&id=10094&url=4vm9vfiuh89XAN7@F1KXt8UFkKxSXeqIHe1Q5xFepezDbqMVw23eSSGKmDNq0yO2LwueEa8B95PP0@TyQnshkP@roaMXFlogVL1fmMORqAz0G7IYpD/z5RMyTAPRTA7CWg==&sub=',
            idType: '1',
            type: 'Phim Chiến Tranh, Tâm Lý',
            imgMain: 'https://m.media-amazon.com/images/M/MV5BM2MzMzRlMTctM2QxMC00NTBiLWIwMTctMzEzODZmOGIxMjdhXkEyXkFqcGdeQXVyMjAyMDMyMzU@._V1_.jpg',
            imgIntro: 'https://a.ltrbxd.com/resized/sm/upload/c0/g5/wi/ht/bpUshlVBPRNSf5Vx69yxLn6DnJF-1200-1200-675-675-crop-000000.jpg?k=0599415857',
            srcTrailer: 'bGiR5ZiEWkM',
            directors: 'Matthijs van Heijningen',
            duration: 4,
            country: 'Hà Lan, Bỉ',
            quality: 'VietSub-HD',
            yearRealse: '2020',
            timeRealse: '12/6/2020',
            view: 125,
            urlComment: 1057881674616601,
            desc: "Trận sông Scheldt quyết định của Thế chiến II là điểm gặp gỡ bi thảm trong cuộc đời của ba người: phi công tàu lượn, lính Đức Quốc xã, tân binh kháng chiến do dự."
        }
    ],


    setConfig: function(key, value) {
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },

    handleInput: function() {
        _this = this;
        inputBox.onkeyup = function(e) {
            const inputValue = inputBox.value
            let emptyArray = [];
            emptyArray = _this.moviesAll.filter(key => key.name.match(new RegExp(inputValue, "i")) + key.subname.match(new RegExp(inputValue, "i")))


            if (inputValue) {
                suggBox.classList.add('active')
                input.classList.add('active')
                suggBox.classList.add('show')

                // _$('.search-input .icon i').addEventListener('click', () => {
                //     searchMovies.innerHTML = listMovieSearch.j   oin('');
                //     moviesSearch()
                // })
                _$('.input-form').addEventListener('keypress', (e) => {
                    if (e.which === 13) {
                        if (_$('.search-input .fixed')) {
                            _$('.search-input .fixed').classList.remove('fixed')
                        }
                        _$('.input-form').value = null;
                        searchMovies.innerHTML = listMovieSearch.join('');
                        moviesSearch();
                    }
                })

                const listMovieSearch = emptyArray.map(movie => {
                    return `
                    <div class='col l-2-4  m-3 c-6  body__list-movie-main' onclick='_this.handleSetupForm(${movie.id})'>
                    <div class='body__list-movie-img-boxed'>
                    <a href=''>
                        <img class='body__list-movie-img' src='${movie.
                            imgIntro}' alt=''>
                    </a>
                    <div class='body__list-movie-name'>${movie.name}</div>
                    <div class='body__list-movie-status'>${typeof movie.src === 'object' ? 'Tập' + ' ' +  movie.src.length + '/' + movie.duration + ' '+ '|' +' ' + movie.quality : movie.quality }</div>
                    <div class='body__list-movie-play'>
                    <a class='fas fa-play'></a>
                      </div>
                    </div>              
               </div>`
                })
                const htmls = emptyArray.map(movie => {
                    return `    
                     <a class='body__list-box-input' onclick='_this.handleSetupForm(${movie.id})'>              
                      <img class='body__list-sub-menu-img' src='${movie.
                        imgMain}'/> 
                      <div>             
                       <span class='body__list-input-movie-name'>${movie.name}</span> 
                       <span class='body__list-movie-subname'>${movie.subname}</span> 
                       </div>                    
                       </a>
                    `
                })
                suggBox.innerHTML = htmls.join('');
            } else {
                emptyArray = [];
                inputBox.blur();
                suggBox.classList.remove('active')
                input.classList.remove('active')
                input.classList.remove('show')
            }

        }

    },

    handleSetupForm: function(i) {
        _this = this;
        watching = true;
        const movie = _this.moviesAll.find(key => key.id === i)
        const listTitle = _$$('.body__intro-sub-title')
        const listTag = _$$('.body__list-movie-tag')
        const movieParent = _$('.body__movie-parts')

        statusParent[0].classList.remove('active')
        statusParent[1].classList.remove('active')
        statusParent[2].classList.remove('active')
        statusParent[3].classList.remove('active')
        statusParent[4].classList.remove('active')
        statusParent[5].classList.remove('active')
        statusParent[6].classList.remove('active')
        _$('.star-1').classList.remove('active-star')
        _$('.star-2').classList.remove('active-star')
        _$('.star-3').classList.remove('active-star')
        _$('.star-4').classList.remove('active-star')
        _$('.star-5').classList.remove('active-star')
        _$('.point-user').innerHTML = 'Đánh giá phim'
        _this.handleClearForm(movie)
        _$('.loader').style.display = 'block'
        setTimeout(function() {
            _$('.body__banner-img').src = `${movie.imgIntro}`
            _$('.body__intro-img').src = `${movie.imgMain}`
            window.scrollTo(top, 0)
            document.title = `${movie.name} - ${movie.subname}`
            _$('.body__movie-midle').style.display = 'none'
            _$('.body__intro-desc-main').style.display = 'block'
            _$('.body__intro-main').style.display = 'flex'
            _$('.body__movie-video').style.display = 'none'
            _$('.body__comment').style.display = 'none'
            _$('.body__movie-trailer').style.display = 'block'
            listTitle[0].innerText = `Đạo diễn: ${movie.directors}`
            listTitle[1].innerText = `Thời lượng: ${movie.duration} phút`
            listTitle[2].innerText = `Quốc gia:  ${movie.country}`
            listTitle[3].innerText = `Phát hành: ${movie.yearRealse}`
            listTitle[4].innerText = `Chất lượng: ${movie.quality}`
            listTag[0].innerHTML = `<i class="fas fa-tags"></i>${movie.type}`
            listTag[1].innerHTML = `<i class="far fa-clock"></i>${movie.timeRealse}`
            _$('.body__intro-title').innerText = `${movie.name} - ${movie.subname}`
            _$('.body__movie-viewer-btn span').innerText = `${movie.view} Lượt xem`
            _$('.body__intro-desc').innerText = movie.desc
            _$('.body__trailer-video').src = `https://www.youtube.com/embed/${movie.srcTrailer}`
            _$('.plugin-comment').src = `https://www.facebook.com/v8.0/plugins/comments.php?app_id=${movie.urlComment}&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df664e644a63418%26domain%3Dphimno1.xyz%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fphimno1.xyz%252Ff3de8e94e9b7c7%26relation%3Dparent.parent&color_scheme=light&container_width=710&height=100&href=https%3A%2F%2Fphimno1.com%2Fphim%2Fvenom-doi-mat-tu-thu-5300%2F&locale=vi_VN&numposts=10&sdk=joey&version=v8.0&width=`
            inputBox.value = null
            suggBox.classList.remove('active')
            input.classList.remove('active')
            _$('#body').style.display = 'none'
            _$('#body__watch').style.display = 'block'
            _$('.loader').style.display = 'none'
            _$('.body__moving').src = `${movie.src}`
            if (typeof movie.src === 'object') {
                movieParent.setAttribute("class", "body__movie-parts")
                _$('.body__moving').src = `https://player.phimno1.com/vip?list=1&id=${movie.src[0]}&sub=`
                _$('.body__movie-midle').style.display = 'flex'
                _$('.body__movie-midle').innerText = `Tập [${movie.src.length}/${movie.duration}]`
                listTitle[1].innerText = `Thời lượng: ${movie.duration} tập`
                const htmls = movie.src.map((id, index) => {
                    return `<li class='body__movie-part' onclick='_this.handleTabParts(${id},${index})'>Tập ${index + 1}</li>`
                });
                movieParent.innerHTML = htmls.join('');
                _$('.body__movie-midle').appendChild(movieParent)
            }
        }, 1000)

    },
    handleTabParts: function(id, i) {
        let arraySiblings = $('.body__movie-part').siblings()
        arraySiblings.splice(i, 1)
        arraySiblings.css({ backgroundColor: '#3a3a3a' })
        $('.body__movie-part')[i].style.backgroundColor = '#f1970f';
        _$('.body__moving').src = `https://player.phimno1.com/vip?list=1&id=${id}`
    },
    handleOverlay: function() {
        function removeOverlay() {
            const overlay = _$('.overlay')
            const icon = _$('.fa-lightbulb')
            const header = _$('#header')
            const status = _$('.body__movie-status')
            _$('.navbar__scrollY img').style.display = 'none'

            overlay.classList.toggle('hide')
            icon.classList.toggle('turn-light')
            header.classList.toggle('index-none')
            status.classList.toggle('hide')

        }
        _$('.body__movie-video-btn').onclick = removeOverlay
        _$('.overlay').onclick = removeOverlay
    },
    // clear form
    handleClearForm: function(movie) {
        _$('.body__intro-btn-movie').onclick = clearForm
        _$('.body__intro-btn-trailer').onclick = () => {
            window.scrollTo({
                top: 1100,
                behavior: 'smooth'
            })
        }

        function clearForm() {
            document.title = `Xem phim ${movie.name} - ${movie.subname}`
            const main = _$('.body__intro-main')
            const movies = _$('.body__movie-video')
            const comment = _$('.body__comment')
            const desc = _$('.body__intro-desc-main')
            const trailer = _$('.body__movie-trailer')
            main.style.display = 'none'
            desc.style.display = 'none'
            trailer.style.display = 'none'
            movies.style.display = 'block'
            comment.style.display = 'block'
            _$('.body__trailer-video').src = null
            scrollTo({ top: 0 })
        }
        setTimeout(function() {
            viewOrigin = _$('.body__movie-viewer-btn span')
            getViewOrigin = viewOrigin.innerText
            view = parseInt(getViewOrigin)
            viewPlus = ++view;

            viewOrigin.innerText = `${viewPlus} Lượt xem`

        }, 60000)

    },
    // star event
    starEvent: function() {
        _this = this
        _$('.star-1').onclick = function() {
            if (!_this.isActive) {
                _this.isActive = !_this.isActive
                _$('.star-1').classList.add('active-star')
                _$('.star-2').classList.remove('active-star')
                _$('.star-3').classList.remove('active-star')
                _$('.star-4').classList.remove('active-star')
                _$('.star-5').classList.remove('active-star')
                _$('.body__movie-active-st-1').classList.add('active')
                _$('.point-user').innerHTML = 'Quá dở'
                setTimeout(function() {
                    _this.isActive = !_this.isActive;
                    _$('.body__movie-active-st-1').classList.remove('active')
                }, 4000)
            }
            setTimeout(function() {
                _$('.body__movie-active-st-1 i').classList.replace('fa-meh', 'fa-sad-cry')
                setTimeout(function() {
                    _$('.body__movie-active-st-1 i').classList.replace('fa-sad-cry', 'fa-meh')
                    setTimeout(function() {
                        _$('.body__movie-active-st-1 i').classList.replace('fa-meh', 'fa-sad-cry')
                    }, 1000)
                }, 1000)
            }, 1000)

        }
        _$('.star-2').onclick = function() {
            if (!_this.isActive) {
                _this.isActive = !_this.isActive;
                _$('.star-1').classList.add('active-star')
                _$('.star-2').classList.add('active-star')
                _$('.star-3').classList.remove('active-star')
                _$('.star-4').classList.remove('active-star')
                _$('.star-5').classList.remove('active-star')
                _$('.body__movie-active-st-2').classList.add('active')
                _$('.point-user').innerHTML = 'Dở'
                setTimeout(function() {
                    _$('.body__movie-active-st-2').classList.remove('active')
                    _this.isActive = !_this.isActive
                }, 4000)
            }

            setTimeout(function() {
                _$('.body__movie-active-st-2 i').classList.replace('fa-frown', 'fa-sad-tear')
                setTimeout(function() {
                    _$('.body__movie-active-st-2 i').classList.replace('fa-sad-tear', 'fa-frown')
                    setTimeout(function() {
                        _$('.body__movie-active-st-2 i').classList.replace('fa-frown', 'fa-sad-tear')
                    }, 1000)
                }, 1000)
            }, 1000)
        }
        _$('.star-3').onclick = function() {
            if (!_this.isActive) {
                _this.isActive = !_this.isActive
                _$('.star-1').classList.add('active-star')
                _$('.star-2').classList.add('active-star')
                _$('.star-3').classList.add('active-star')
                _$('.star-4').classList.remove('active-star')
                _$('.star-5').classList.remove('active-star')
                _$('.body__movie-active-st-3').classList.add('active')
                _$('.point-user').innerHTML = 'Bình thường'

                setTimeout(function() {
                    _this.isActive = !_this.isActive
                    _$('.body__movie-active-st-3').classList.remove('active')
                }, 4000)
            }
            setTimeout(function() {
                _$('.body__movie-active-st-3 i').classList.replace('fa-kiss', 'fa-kiss-wink-heart')
                setTimeout(function() {
                    _$('.body__movie-active-st-3 i').classList.replace('fa-kiss-wink-heart', 'fa-kiss')
                    setTimeout(function() {
                        _$('.body__movie-active-st-3 i').classList.replace('fa-kiss', 'fa-kiss-wink-heart')
                    }, 1000)
                }, 1000)
            }, 1000)
        }
        _$('.star-4').onclick = function() {
            if (!_this.isActive) {
                _this.isActive = !_this.isActive
                _$('.star-1').classList.add('active-star')
                _$('.star-2').classList.add('active-star')
                _$('.star-3').classList.add('active-star')
                _$('.star-4').classList.add('active-star')
                _$('.star-5').classList.remove('active-star')
                _$('.body__movie-active-st-4').classList.add('active')
                _$('.point-user').innerHTML = 'Hay'

                setTimeout(function() {
                    _this.isActive = !_this.isActive
                    _$('.body__movie-active-st-4').classList.remove('active')
                }, 4000)
            }
            setTimeout(function() {
                _$('.body__movie-active-st-4 i').classList.replace('fa-grin', 'fa-grin-hearts')
                setTimeout(function() {
                    _$('.body__movie-active-st-4 i').classList.replace('fa-grin-hearts', 'fa-grin')
                    setTimeout(function() {
                        _$('.body__movie-active-st-4 i').classList.replace('fa-grin', 'fa-grin-hearts')
                    }, 1000)
                }, 1000)
            }, 1000)
        }
        _$('.star-5').onclick = function() {
            if (!_this.isActive) {
                _this.isActive = !_this.isActive
                _$('.star-1').classList.add('active-star')
                _$('.star-2').classList.add('active-star')
                _$('.star-3').classList.add('active-star')
                _$('.star-4').classList.add('active-star')
                _$('.star-5').classList.add('active-star')
                _$('.body__movie-active-st-5').classList.add('active')
                _$('.point-user').innerHTML = 'Quá hay'
                setTimeout(function() {
                    _this.isActive = !_this.isActive
                    _$('.body__movie-active-st-5').classList.remove('active')
                }, 4000)
            }
            setTimeout(function() {
                _$('.body__movie-active-st-5 i').classList.replace('fa-grin', 'fa-grin-stars')
                setTimeout(function() {
                    _$('.body__movie-active-st-5 i').classList.replace('fa-grin-stars', 'fa-grin')
                    setTimeout(function() {
                        _$('.body__movie-active-st-5 i').classList.replace('fa-grin', 'fa-grin-stars')
                    }, 1000)
                }, 1000)
            }, 1000)
        }
    },

    adverTisementEvents: function() {
        _this = this
        _$('.body__movie-advertisement-btn').onclick = function() {
            if (!_this.isActive) {
                _this.isActive = !_this.isActive
                _this.setConfig('isActive', _this.isActive);
                _$('.body__movie-active-advertisement').classList.add('active')
                setTimeout(function() {
                    _$('.body__movie-active-advertisement').classList.remove('active')
                    _this.isActive = !_this.isActive
                }, 4000)
                setTimeout(function() {
                    _$('.body__movie-active-advertisement i').classList.replace('fa-smile', 'fa-grin-tears')
                    setTimeout(function() {
                        _$('.body__movie-active-advertisement i').classList.replace('fa-grin-tears', 'fa-smile')
                        setTimeout(function() {
                            _$('.body__movie-active-advertisement i').classList.replace('fa-smile', 'fa-grin-tears')
                        }, 1000)
                    }, 1000)
                }, 1000)
            }
        }
    },
    // warning event
    warningEvent: function() {
        _this = this
        _$('.body__movie-warning-btn').onclick = function() {
            if (!_this.isActive) {
                _this.isActive = !_this.isActive
                _this.setConfig('isActive', _this.isActive);
                _$('.body__movie-active-warning').classList.add('active')
                setTimeout(function() {
                    _$('.body__movie-active-warning').classList.remove('active')
                    _this.isActive = !_this.isActive
                }, 4000)
            }
        }

    },
    // view event
    viewEvent: function() {
        _$('.body__movie-viewer-btn').onmouseover = function() {
            _$('.body__movie-viewer-btn i').classList.replace('fa-eye', 'fa-low-vision')
        }
        _$('.body__movie-viewer-btn').onmouseout = function() {
            _$('.body__movie-viewer-btn i').classList.replace('fa-low-vision', 'fa-eye')
        }
    },

    handleRenderMovies: function() {
        _this = this
        const newMovie = () => {
            let arrayMovies = [];
            arrayMovies = _this.moviesAll.filter(key => key.subname.includes('2021'))

            const htmls = arrayMovies.map(movie => {
                return `
                <div class='col l-2-4  m-3 c-6  body__list-movie-main' onclick='_this.handleSetupForm(${movie.id})'>
                <div class='body__list-movie-img-boxed'>
                <a href=''>
                    <img class='body__list-movie-img' src='${movie.
                        imgIntro}' alt=''>
                </a>
                <div class='body__list-movie-name'>${movie.name}</div>
                <div class='body__list-movie-status'>${typeof movie.src === 'object' ? 'Tập' + ' ' +  movie.src.length + '/' + movie.duration + ' '+ '|' +' ' + movie.quality : movie.quality}</div>
                <div class='body__list-movie-play'>
                <a class='fas fa-play'></a>
                  </div>
                </div>              
         </div>`
            })
            newMovies.innerHTML = htmls.join('');
        }

        const oddMovie = () => {
            let arrayMovies = [];
            arrayMovies = _this.moviesAll.filter(key => key.idType.includes('1'))

            const htmls = arrayMovies.map(movie => {
                return `
                <div class='col l-2-4  m-3 c-6  body__list-movie-main' onclick='_this.handleSetupForm(${movie.id})'>
                <div class='body__list-movie-img-boxed'>
                <a href=''>
                    <img class='body__list-movie-img' src='${movie.
                        imgIntro}' alt=''>
                </a>
                <div class='body__list-movie-name'>${movie.name}</div>
                <div class='body__list-movie-status'>${typeof movie.src === 'object' ? 'Tập' + ' ' +  movie.src.length + '/' + movie.duration + ' '+ '|' +' ' + movie.quality : movie.quality }</div>
                <div class='body__list-movie-play'>
                <a class='fas fa-play'></a>
                  </div>
                </div>              
         </div>`
            })
            oddMovies.innerHTML = htmls.join('');
        }

        const setMovie = () => {
            let arrayMovies = [];
            arrayMovies = _this.moviesAll.filter(key => key.idType.includes('2'))

            const htmls = arrayMovies.map(movie => {
                return `
                <div class='col l-2-4  m-3 c-6  body__list-movie-main' onclick='_this.handleSetupForm(${movie.id})'>
                <div class='body__list-movie-img-boxed'>
                <a href=''>
                    <img class='body__list-movie-img' src='${movie.
                        imgIntro}' alt=''>
                </a>
                <div class='body__list-movie-name'>${movie.name}</div>
                <div class='body__list-movie-status'>${typeof movie.src === 'object' ? 'Tập' + ' ' +  movie.src.length + '/' + movie.duration + ' '+ '|' +' ' + movie.quality : movie.quality}</div>
                <div class='body__list-movie-play'>
                <a class='fas fa-play'></a>
                  </div>
                </div>              
         </div>`
            })
            setMovies.innerHTML = htmls.join('');
        }

        const cinemaMovie = () => {
            let arrayMovies = [];
            arrayMovies = _this.moviesAll.filter(key => key.idType.includes('3'))

            const htmls = arrayMovies.map(movie => {
                return `
                <div class='col l-2-4  m-3 c-6  body__list-movie-main' onclick='_this.handleSetupForm(${movie.id})'>
                <div class='body__list-movie-img-boxed'>
                <a href=''>
                    <img class='body__list-movie-img' src='${movie.
                        imgIntro}' alt=''>
                </a>
                <div class='body__list-movie-name'>${movie.name}</div>
                <div class='body__list-movie-status'>${typeof movie.src === 'object' ? 'Tập' + ' ' +  movie.src.length + '/' + movie.duration + ' '+ '|' +' ' + movie.quality : movie.quality }</div>
                <div class='body__list-movie-play'>
                <a class='fas fa-play'></a>
                  </div>
                </div>              
         </div>`
            })
            cinemaMovies.innerHTML = htmls.join('');
        }

        const actionMovie = () => {
            let arrayMovies = [];
            arrayMovies = _this.moviesAll.filter(key => key.type.includes('Hành Động'))

            const htmls = arrayMovies.map(movie => {
                return `
                <div class='col l-2-4  m-3 c-6  body__list-movie-main' onclick='_this.handleSetupForm(${movie.id})'>
                <div class='body__list-movie-img-boxed'>
                <a href=''>
                    <img class='body__list-movie-img' src='${movie.
                        imgIntro}' alt=''>
                </a>
                <div class='body__list-movie-name'>${movie.name}</div>
                <div class='body__list-movie-status'>${typeof movie.src === 'object' ? 'Tập' + ' ' +  movie.src.length + '/' + movie.duration + ' '+ '|' +' ' + movie.quality : movie.quality }</div>
                <div class='body__list-movie-play'>
                <a class='fas fa-play'></a>
                  </div>
                </div>              
         </div>`
            })
            actionMovies.innerHTML = htmls.join('');
        }

        const fictionMovie = () => {
            let arrayMovies = [];
            arrayMovies = _this.moviesAll.filter(key => key.type.includes('Viễn Tưởng'))

            const htmls = arrayMovies.map(movie => {
                return `
                <div class='col l-2-4  m-3 c-6  body__list-movie-main' onclick='_this.handleSetupForm(${movie.id})'>
                <div class='body__list-movie-img-boxed'>
                <a href=''>
                    <img class='body__list-movie-img' src='${movie.
                        imgIntro}' alt=''>
                </a>
                <div class='body__list-movie-name'>${movie.name}</div>
                <div class='body__list-movie-status'>${typeof movie.src === 'object' ? 'Tập' + ' ' +  movie.src.length + '/' + movie.duration + ' '+ '|' +' ' + movie.quality : movie.quality }</div>
                <div class='body__list-movie-play'>
                <a class='fas fa-play'></a>
                  </div>
                </div>              
         </div>`
            })
            fictionMovies.innerHTML = htmls.join('');
        }

        const adventureMovie = () => {
            let arrayMovies = [];
            arrayMovies = _this.moviesAll.filter(key => key.type.includes('Phiêu Lưu'))

            const htmls = arrayMovies.map(movie => {
                return `
                <div class='col l-2-4  m-3 c-6  body__list-movie-main' onclick='_this.handleSetupForm(${movie.id})'>
                <div class='body__list-movie-img-boxed'>
                <a href=''>
                    <img class='body__list-movie-img' src='${movie.
                        imgIntro}' alt=''>
                </a>
                <div class='body__list-movie-name'>${movie.name}</div>
                <div class='body__list-movie-status'>${typeof movie.src === 'object' ? 'Tập' + ' ' +  movie.src.length + '/' + movie.duration + ' '+ '|' +' ' + movie.quality : movie.quality }</div>
                <div class='body__list-movie-play'>
                <a class='fas fa-play'></a>
                  </div>
                </div>              
         </div>`
            })
            adventureMovies.innerHTML = htmls.join('');
        }

        const honorMovie = () => {
            let arrayMovies = [];
            arrayMovies = this.moviesAll.filter(key => key.type.includes('Kinh Dị'))

            const htmls = arrayMovies.map(movie => {
                return `
                <div class='col l-2-4  m-3 c-6  body__list-movie-main' onclick='_this.handleSetupForm(${movie.id})'>
                <div class='body__list-movie-img-boxed'>
                <a href=''>
                    <img class='body__list-movie-img' src='${movie.
                        imgIntro}' alt=''>
                </a>
                <div class='body__list-movie-name'>${movie.name}</div>
                <div class='body__list-movie-status'>${typeof movie.src === 'object' ? 'Tập' + ' ' +  movie.src.length + '/' + movie.duration + ' '+ '|' +' ' + movie.quality : movie.quality }</div>
                <div class='body__list-movie-play'>
                <a class='fas fa-play'></a>
                  </div>
                </div>              
         </div>`
            })
            honorMovies.innerHTML = htmls.join('');
        }

        const romanceMovie = () => {
            let arrayMovies = [];
            arrayMovies = this.moviesAll.filter(key => key.type.includes('Tình Cảm'))

            const htmls = arrayMovies.map(movie => {
                return `
                <div class='col l-2-4  m-3 c-6  body__list-movie-main' onclick='_this.handleSetupForm(${movie.id})'>
                <div class='body__list-movie-img-boxed'>
                <a href=''>
                    <img class='body__list-movie-img' src='${movie.
                        imgIntro}' alt=''>
                </a>
                <div class='body__list-movie-name'>${movie.name}</div>
                <div class='body__list-movie-status'>${typeof movie.src === 'object' ? 'Tập' + ' ' +  movie.src.length + '/' + movie.duration + ' '+ '|' +' ' + movie.quality : movie.quality }</div>
                <div class='body__list-movie-play'>
                <a class='fas fa-play'></a>
                  </div>
                </div>              
         </div>`
            })
            romanceMovies.innerHTML = htmls.join('');
        }

        const humorMovie = () => {
            let arrayMovies = [];
            arrayMovies = this.moviesAll.filter(key => key.type.includes('Hài Hước'))
            const htmls = arrayMovies.map(movie => {
                return `
                <div class='col l-2-4  m-3 c-6  body__list-movie-main' onclick='_this.handleSetupForm(${movie.id})'>
                <div class='body__list-movie-img-boxed'>
                <a href=''>
                    <img class='body__list-movie-img' src='${movie.
                        imgIntro}' alt=''>
                </a>
                <div class='body__list-movie-name'>${movie.name}</div>
                <div class='body__list-movie-status'>${typeof movie.src === 'object' ? 'Tập' + ' ' +  movie.src.length + '/' + movie.duration + ' '+ '|' +' ' + movie.quality : movie.quality }</div>
                <div class='body__list-movie-play'>
                <a class='fas fa-play'></a>
                  </div>
                </div>              
         </div>`
            })
            humorMovies.innerHTML = htmls.join('');
        }

        const kungfuMovie = () => {
            let arrayMovies = [];
            arrayMovies = this.moviesAll.filter(key => key.type.includes('Võ Thuật'))
            const htmls = arrayMovies.map(movie => {
                return `
                <div class='col l-2-4  m-3 c-6  body__list-movie-main' onclick='_this.handleSetupForm(${movie.id})'>
                <div class='body__list-movie-img-boxed'>
                <a href=''>
                    <img class='body__list-movie-img' src='${movie.
                        imgIntro}' alt=''>
                </a>
                <div class='body__list-movie-name'>${movie.name}</div>
                <div class='body__list-movie-status'>${typeof movie.src === 'object' ? 'Tập' + ' ' +  movie.src.length + '/' + movie.duration + ' '+ '|' +' ' + movie.quality : movie.quality }</div>
                <div class='body__list-movie-play'>
                <a class='fas fa-play'></a>
                  </div>
                </div>              
         </div>`
            })
            kungfuMovies.innerHTML = htmls.join('');
        }

        const cartoonMovie = () => {
            let arrayMovies = [];
            arrayMovies = this.moviesAll.filter(key => key.type.includes('Hoạt Hình'))
            const htmls = arrayMovies.map(movie => {
                return `
                <div class='col l-2-4  m-3 c-6  body__list-movie-main' onclick='_this.handleSetupForm(${movie.id})'>
                <div class='body__list-movie-img-boxed'>
                <a href=''>
                    <img class='body__list-movie-img' src='${movie.
                        imgIntro}' alt=''>
                </a>
                <div class='body__list-movie-name'>${movie.name}</div>
                <div class='body__list-movie-status'>${typeof movie.src === 'object' ? 'Tập' + ' ' +  movie.src.length + '/' + movie.duration + ' '+ '|' +' ' + movie.quality : movie.quality }</div>
                <div class='body__list-movie-play'>
                <a class='fas fa-play'></a>
                  </div>
                </div>              
         </div>`
            })
            cartoonMovies.innerHTML = htmls.join('');
        }

        const crimialMovie = () => {
            let arrayMovies = [];
            arrayMovies = this.moviesAll.filter(key => key.type.includes('Tội Phạm'))
            const htmls = arrayMovies.map(movie => {
                return `
                <div class='col l-2-4  m-3 c-6  body__list-movie-main' onclick='_this.handleSetupForm(${movie.id})'>
                <div class='body__list-movie-img-boxed'>
                <a href=''>
                    <img class='body__list-movie-img' src='${movie.
                        imgIntro}' alt=''>
                </a>
                <div class='body__list-movie-name'>${movie.name}</div>
                <div class='body__list-movie-status'>${typeof movie.src === 'object' ? 'Tập' + ' ' +  movie.src.length + '/' + movie.duration + ' '+ '|' +' ' + movie.quality : movie.quality }</div>
                <div class='body__list-movie-play'>
                <a class='fas fa-play'></a>
                  </div>
                </div>              
         </div>`
            })
            crimialMovies.innerHTML = htmls.join('');
        }

        const warMovie = () => {
            let arrayMovies = [];
            arrayMovies = this.moviesAll.filter(key => key.type.includes('Chiến Tranh'))
            const htmls = arrayMovies.map(movie => {
                return `
                <div class='col l-2-4  m-3 c-6  body__list-movie-main' onclick='_this.handleSetupForm(${movie.id})'>
                <div class='body__list-movie-img-boxed'>
                <a href=''>
                    <img class='body__list-movie-img' src='${movie.
                        imgIntro}' alt=''>
                </a>
                <div class='body__list-movie-name'>${movie.name}</div>
                <div class='body__list-movie-status'>${typeof movie.src === 'object' ? 'Tập' + ' ' +  movie.src.length + '/' + movie.duration + ' '+ '|' +' ' + movie.quality : movie.quality }</div>
                <div class='body__list-movie-play'>
                <a class='fas fa-play'></a>
                  </div>
                </div>              
         </div>`
            })
            warMovies.innerHTML = htmls.join('');
        }

        const familyMovie = () => {
            let arrayMovies = [];
            arrayMovies = this.moviesAll.filter(key => key.type.includes('Gia Đình'))
            const htmls = arrayMovies.map(movie => {
                return `
                <div class='col l-2-4  m-3 c-6  body__list-movie-main' onclick='_this.handleSetupForm(${movie.id})'>
                <div class='body__list-movie-img-boxed'>
                <a href=''>
                    <img class='body__list-movie-img' src='${movie.
                        imgIntro}' alt=''>
                </a>
                <div class='body__list-movie-name'>${movie.name}</div>
                <div class='body__list-movie-status'>${typeof movie.src === 'object' ? 'Tập' + ' ' +  movie.src.length + '/' + movie.duration + ' '+ '|' +' ' + movie.quality : movie.quality }</div>
                <div class='body__list-movie-play'>
                <a class='fas fa-play'></a>
                  </div>
                </div>              
         </div>`
            })
            familyMovies.innerHTML = htmls.join('');
        }

        const mentalityMovie = () => {
            let arrayMovies = [];
            arrayMovies = this.moviesAll.filter(key => key.type.includes('Tâm Lý'))
            const htmls = arrayMovies.map(movie => {
                return `
                <div class='col l-2-4  m-3 c-6  body__list-movie-main' onclick='_this.handleSetupForm(${movie.id})'>
                <div class='body__list-movie-img-boxed'>
                <a href=''>
                    <img class='body__list-movie-img' src='${movie.
                        imgIntro}' alt=''>
                </a>
                <div class='body__list-movie-name'>${movie.name}</div>
                <div class='body__list-movie-status'>${typeof movie.src === 'object' ? 'Tập' + ' ' +  movie.src.length + '/' + movie.duration + ' '+ '|' +' ' + movie.quality : movie.quality }</div>
                <div class='body__list-movie-play'>
                <a class='fas fa-play'></a>
                  </div>
                </div>              
         </div>`
            })
            mentalityMovies.innerHTML = htmls.join('');
        }

        const mysticMovie = () => {
            let arrayMovies = [];
            arrayMovies = this.moviesAll.filter(key => key.type.includes('Bí Ẩn'))
            const htmls = arrayMovies.map(movie => {
                return `
                <div class='col l-2-4  m-3 c-6  body__list-movie-main' onclick='_this.handleSetupForm(${movie.id})'>
                <div class='body__list-movie-img-boxed'>
                <a href=''>
                    <img class='body__list-movie-img' src='${movie.
                        imgIntro}' alt=''>
                </a>
                <div class='body__list-movie-name'>${movie.name}</div>
                <div class='body__list-movie-status'>${typeof movie.src === 'object' ? 'Tập' + ' ' +  movie.src.length + '/' + movie.duration + ' '+ '|' +' ' + movie.quality : movie.quality }</div>
                <div class='body__list-movie-play'>
                <a class='fas fa-play'></a>
                  </div>
                </div>              
         </div>`
            })
            mysticMovies.innerHTML = htmls.join('');
        }

        const spiritualityMovie = () => {
            let arrayMovies = [];
            arrayMovies = this.moviesAll.filter(key => key.type.includes('Tâm Linh'))
            const htmls = arrayMovies.map(movie => {
                return `
                <div class='col l-2-4  m-3 c-6  body__list-movie-main' onclick='_this.handleSetupForm(${movie.id})'>
                <div class='body__list-movie-img-boxed'>
                <a href=''>
                    <img class='body__list-movie-img' src='${movie.
                        imgIntro}' alt=''>
                </a>
                <div class='body__list-movie-name'>${movie.name}</div>
                <div class='body__list-movie-status'>${typeof movie.src === 'object' ? 'Tập' + ' ' +  movie.src.length + '/' + movie.duration + ' '+ '|' +' ' + movie.quality : movie.quality }</div>
                <div class='body__list-movie-play'>
                <a class='fas fa-play'></a>
                  </div>
                </div>              
         </div>`
            })
            spiritualityMovies.innerHTML = htmls.join('');
        }

        const zombieMovie = () => {
            let arrayMovies = [];
            arrayMovies = this.moviesAll.filter(key => key.type.includes('Xác Sống'))
            const htmls = arrayMovies.map(movie => {
                return `
                <div class='col l-2-4  m-3 c-6  body__list-movie-main' onclick='_this.handleSetupForm(${movie.id})'>
                <div class='body__list-movie-img-boxed'>
                <a href=''>
                    <img class='body__list-movie-img' src='${movie.
                        imgIntro}' alt=''>
                </a>
                <div class='body__list-movie-name'>${movie.name}</div>
                <div class='body__list-movie-status'>${typeof movie.src === 'object' ? 'Tập' + ' ' +  movie.src.length + '/' + movie.duration + ' '+ '|' +' ' + movie.quality : movie.quality }</div>
                <div class='body__list-movie-play'>
                <a class='fas fa-play'></a>
                  </div>
                </div>              
         </div>`
            })
            zombieMovies.innerHTML = htmls.join('');
        }



        const top10Movie = () => {
            let arrayMovies = [];
            arrayMovies = this.moviesAll.filter(key => key.idType.includes('hot'));

            const htmls = arrayMovies.map(movie => {
                return `
                <div class='body__movie-top-10-heading' onclick='_this.handleSetupForm(${movie.id})'>
                     <img src='${movie.imgIntro}' class='body__movie-top10-img'/> 
                     <div class='body__movie-top10-name'>${movie.name}</div>       
                </div>`
            })
            top10Movies.innerHTML = htmls.join('');
        }

        newMovie();
        oddMovie();
        setMovie();
        cinemaMovie();
        actionMovie();
        fictionMovie();
        adventureMovie();
        honorMovie();
        romanceMovie();
        humorMovie();
        kungfuMovie();
        cartoonMovie();
        crimialMovie();
        warMovie();
        familyMovie();
        mentalityMovie();
        mysticMovie();
        spiritualityMovie();
        zombieMovie();
        top10Movie();

    },

    loadConfig: function() {
        this.isLightActive = this.config.isLightActive
    },

    changeMode: function() {
        _this = this;
        checkbox.onchange = function() {
            _this.isLightActive = !_this.isLightActive;
            //   change the theme of website
            _this.setConfig('isLightActive', _this.isLightActive);
            body.classList.toggle('light', _this.isLightActive)
            ball[1].classList.toggle('active', _this.isLightActive)
            ball[0].classList.toggle('active', _this.isLightActive)
        }
    },

    start: function() {
        this.loadConfig();
        this.handleRenderMovies();
        this.handleInput();
        this.changeMode();
        this.handleOverlay();
        this.handleClearForm()
        this.starEvent()
        this.adverTisementEvents()
        this.warningEvent();
        this.viewEvent()

        body.classList.toggle('light', this.isLightActive)
        ball[0].classList.toggle('active', this.isLightActive)
        ball[1].classList.toggle('active', this.isLightActive)
    }

}
webMovies.start();


/*Movies */


// START click
_$('.body__item-btn-1').onclick = moviesNew;
_$('.body__item-btn-2').onclick = moviesOdd;
_$('.body__item-btn-3').onclick = moviesSet;
_$('.body__item-btn-4').onclick = moviesCinema;
_$$('.menu_navbar-item')[0].onclick = moviesNew
_$$('.menu_navbar-item')[1].onclick = moviesOdd
_$$('.menu_navbar-item')[2].onclick = moviesSet
_$$('.menu_navbar-item')[3].onclick = moviesCinema
_$$('.menu_navbar-item-parent ul li')[0].onclick = moviesAction
_$$('.menu_navbar-item-parent ul li')[1].onclick = moviesFiction
_$$('.menu_navbar-item-parent ul li')[2].onclick = moviesAdventure
_$$('.menu_navbar-item-parent ul li')[3].onclick = moviesHonor
_$$('.menu_navbar-item-parent ul li')[4].onclick = moviesRomance
_$$('.menu_navbar-item-parent ul li')[5].onclick = moviesHumor
_$$('.menu_navbar-item-parent ul li')[6].onclick = moviesKungfu
_$$('.menu_navbar-item-parent ul li')[7].onclick = moviesCartoon
_$$('.menu_navbar-item-parent ul li')[8].onclick = moviesCrimial
_$$('.menu_navbar-item-parent ul li')[9].onclick = moviesWar
_$$('.menu_navbar-item-parent ul li')[10].onclick = moviesFamily
_$$('.menu_navbar-item-parent ul li')[11].onclick = moviesMentality
_$$('.menu_navbar-item-parent ul li')[12].onclick = moviesMystic
_$$('.menu_navbar-item-parent ul li')[13].onclick = moviesSpirituality
_$$('.menu_navbar-item-parent ul li')[14].onclick = moviesZombie

_$('.movie-action').addEventListener('click', moviesAction)
_$('.movie-fiction').addEventListener('click', moviesFiction)
_$('.movie-adventure').addEventListener('click', moviesAdventure)
_$('.movie-honor').addEventListener('click', moviesHonor)
_$('.movie-romance').addEventListener('click', moviesRomance)
_$('.movie-humor').addEventListener('click', moviesHumor)
_$('.movie-kungfu').addEventListener('click', moviesKungfu)
_$('.movie-cartoon').addEventListener('click', moviesCartoon)
_$('.movie-crimial').addEventListener('click', moviesCrimial)
_$('.movie-war').addEventListener('click', moviesWar)
_$('.movie-family').addEventListener('click', moviesFamily)
_$('.movie-mentality').addEventListener('click', moviesMentality)
_$('.movie-mystic').addEventListener('click', moviesMystic)
_$('.movie-spirituality').addEventListener('click', moviesSpirituality)
_$('.movie-zombie').addEventListener('click', moviesZombie)

document.getElementById('movie-0').onclick = moviesNew;
document.getElementById('movie-1').onclick = moviesOdd;
document.getElementById('movie-2').onclick = moviesSet;
document.getElementById('movie-3').onclick = moviesCinema;


// _$('.body__item-btn-1').on('click',
//     function()link- {         $([doclink-ument.querySelector('.body__list-movie-item')[$(this).index()],             dolink-cument.querySelector('.body__list-movie-title-item')[$(this).index()],
//         ]).addClass('active').siblings().removeClass('active')
//     });
/*Movies */
function moviesNew() {
    watching = false;
    statusParent[0].classList.remove('active')
    statusParent[1].classList.remove('active')
    statusParent[2].classList.remove('active')
    statusParent[3].classList.remove('active')
    statusParent[4].classList.remove('active')
    statusParent[5].classList.remove('active')
    statusParent[6].classList.remove('active')
    _$('.loader').style.display = 'block'
    setTimeout(function() {
        _$('.star-1').classList.remove('active-star')
        _$('.star-2').classList.remove('active-star')
        _$('.star-3').classList.remove('active-star')
        _$('.star-4').classList.remove('active-star')
        _$('.star-5').classList.remove('active-star')
        _$('.point-user').innerHTML = 'Đánh giá phim'
        _$('.input-form').value = null;
        if (_$('.autocom-box')) {

            _$('.autocom-box').classList.remove('active')
            _$('.autocom-box').classList.remove('show')
        }
        _$('.search-input').classList.remove('active')
        _$('.loader').style.display = 'none';
        _$('.menu_navbar').style.transform = 'translateX(-100%)'
        _$('.body__trailer-video').src = null
        _$('.body__moving').src = null
        _$('.body__movie-trailer').style.display = 'block'
        _$('.body__intro-main').style.display = 'none'
        _$('.body__comment').style.display = 'none'
        _$('.body__intro-desc-main').style.display = 'none'
        _$('.body__movie-video').style.display = 'none'
        _$('#body').style.display = 'block'
        _$('#body__watch').style.display = 'none'
        _$('.loader').style.display = 'none'
        window.scrollTo({ top: 777 })
        document.title = 'Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất'

        _$('.body__list-movie-new').style.display = 'flex'
        _$('.body__list-movie-odd').style.display = 'none'
        _$('.body__list-movie-set').style.display = 'none'
        _$('.body__list-movie-cinema').style.display = 'none'

        _$('.body__list-movie-title-new').style.display = 'flex'
        _$('.body__list-movie-title-odd').style.display = 'none'
        _$('.body__list-movie-title-set').style.display = 'none'
        _$('.body__list-movie-title-cinema').style.display = 'none'

        _$('.body__item-btn-1').classList.add('choose')
        _$('.body__item-btn-2').classList.remove('choose')
        _$('.body__item-btn-3').classList.remove('choose')
        _$('.body__item-btn-4').classList.remove('choose')

        _$('.body__list-movie-title-action').style.display = 'none'
        _$('.body__list-movie-title-fiction').style.display = 'none'
        _$('.body__list-movie-title-adventure').style.display = 'none'
        _$('.body__list-movie-title-honor').style.display = 'none'
        _$('.body__list-movie-title-romance').style.display = 'none'
        _$('.body__list-movie-title-humor').style.display = 'none'
        _$('.body__list-movie-title-kungfu').style.display = 'none'
        _$('.body__list-movie-title-cartoon').style.display = 'none'
        _$('.body__list-movie-title-crimial').style.display = 'none'
        _$('.body__list-movie-title-war').style.display = 'none'
        _$('.body__list-movie-title-family').style.display = 'none'
        _$('.body__list-movie-title-mentality').style.display = 'none'
        _$('.body__list-movie-title-mystic').style.display = 'none'
        _$('.body__list-movie-title-spirituality').style.display = 'none'
        _$('.body__list-movie-title-zombie').style.display = 'none'
        _$('.body__list-movie-title-search').style.display = 'none'

        _$('.body__list-movie-action').style.display = 'none'
        _$('.body__list-movie-fiction').style.display = 'none'
        _$('.body__list-movie-adventure').style.display = 'none'
        _$('.body__list-movie-honor').style.display = 'none'
        _$('.body__list-movie-romance').style.display = 'none'
        _$('.body__list-movie-humor').style.display = 'none'
        _$('.body__list-movie-kungfu').style.display = 'none'
        _$('.body__list-movie-cartoon').style.display = 'none'
        _$('.body__list-movie-crimial').style.display = 'none'
        _$('.body__list-movie-war').style.display = 'none'
        _$('.body__list-movie-family').style.display = 'none'
    }, 500)
    _$('.body__list-movie-mentality').style.display = 'none'
    _$('.body__list-movie-mystic').style.display = 'none'
    _$('.body__list-movie-spirituality').style.display = 'none'
    _$('.body__list-movie-zombie').style.display = 'none'
    _$('.body__list-movie-search').style.display = 'none'

}

function moviesOdd() {
    watching = false;
    statusParent[0].classList.remove('active')
    statusParent[1].classList.remove('active')
    statusParent[2].classList.remove('active')
    statusParent[3].classList.remove('active')
    statusParent[4].classList.remove('active')
    statusParent[5].classList.remove('active')
    statusParent[6].classList.remove('active')
    _$('.loader').style.display = 'block'
    setTimeout(function() {
        _$('.star-1').classList.remove('active-star')
        _$('.star-2').classList.remove('active-star')
        _$('.star-3').classList.remove('active-star')
        _$('.star-4').classList.remove('active-star')
        _$('.star-5').classList.remove('active-star')
        _$('.point-user').innerHTML = 'Đánh giá phim'
        _$('.input-form').value = null;
        if (_$('.autocom-box')) {

            _$('.autocom-box').classList.remove('active')
            _$('.autocom-box').classList.remove('show')
        }
        _$('.search-input').classList.remove('active')
        _$('.loader').style.display = 'none';
        _$('.menu_navbar').style.transform = 'translateX(-100%)'
        _$('.body__trailer-video').src = null
        _$('.body__moving').src = null
        _$('.body__movie-trailer').style.display = 'block'
        _$('.body__intro-main').style.display = 'none'
        _$('.body__comment').style.display = 'none'
        _$('.body__intro-desc-main').style.display = 'none'
        _$('.body__movie-video').style.display = 'none'
        _$('#body').style.display = 'block'
        _$('#body__watch').style.display = 'none'
        _$('.loader').style.display = 'none'
        window.scrollTo({ top: 777 })
        document.title = 'Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất'

        _$('.body__list-movie-new').style.display = 'none'
        _$('.body__list-movie-odd').style.display = 'flex'
        _$('.body__list-movie-set').style.display = 'none'
        _$('.body__list-movie-cinema').style.display = 'none'

        _$('.body__item-btn-1').classList.remove('choose')
        _$('.body__item-btn-2').classList.add('choose')
        _$('.body__item-btn-3').classList.remove('choose')
        _$('.body__item-btn-4').classList.remove('choose')

        _$('.body__list-movie-title-new').style.display = 'none'
        _$('.body__list-movie-title-odd').style.display = 'flex'
        _$('.body__list-movie-title-set').style.display = 'none'
        _$('.body__list-movie-title-cinema').style.display = 'none'

        _$('.body__list-movie-title-action').style.display = 'none'
        _$('.body__list-movie-title-fiction').style.display = 'none'
        _$('.body__list-movie-title-adventure').style.display = 'none'
        _$('.body__list-movie-title-honor').style.display = 'none'
        _$('.body__list-movie-title-romance').style.display = 'none'
        _$('.body__list-movie-title-humor').style.display = 'none'
        _$('.body__list-movie-title-kungfu').style.display = 'none'
        _$('.body__list-movie-title-cartoon').style.display = 'none'
        _$('.body__list-movie-title-crimial').style.display = 'none'
        _$('.body__list-movie-title-war').style.display = 'none'
        _$('.body__list-movie-title-family').style.display = 'none'
        _$('.body__list-movie-title-mentality').style.display = 'none'
        _$('.body__list-movie-title-mystic').style.display = 'none'
        _$('.body__list-movie-title-spirituality').style.display = 'none'
        _$('.body__list-movie-title-zombie').style.display = 'none'
        _$('.body__list-movie-title-search').style.display = 'none'

        _$('.body__list-movie-action').style.display = 'none'
        _$('.body__list-movie-fiction').style.display = 'none'
        _$('.body__list-movie-adventure').style.display = 'none'
        _$('.body__list-movie-honor').style.display = 'none'
        _$('.body__list-movie-romance').style.display = 'none'
        _$('.body__list-movie-humor').style.display = 'none'
        _$('.body__list-movie-kungfu').style.display = 'none'
        _$('.body__list-movie-cartoon').style.display = 'none'
        _$('.body__list-movie-crimial').style.display = 'none'
        _$('.body__list-movie-war').style.display = 'none'
        _$('.body__list-movie-family').style.display = 'none'
    }, 500)
    _$('.body__list-movie-mentality').style.display = 'none'
    _$('.body__list-movie-mystic').style.display = 'none'
    _$('.body__list-movie-spirituality').style.display = 'none'
    _$('.body__list-movie-zombie').style.display = 'none'
    _$('.body__list-movie-search').style.display = 'none'
}

function moviesSet() {
    watching = false;
    statusParent[0].classList.remove('active')
    statusParent[1].classList.remove('active')
    statusParent[2].classList.remove('active')
    statusParent[3].classList.remove('active')
    statusParent[4].classList.remove('active')
    statusParent[5].classList.remove('active')
    statusParent[6].classList.remove('active')
    _$('.loader').style.display = 'block'
    setTimeout(function() {
        _$('.star-1').classList.remove('active-star')
        _$('.star-2').classList.remove('active-star')
        _$('.star-3').classList.remove('active-star')
        _$('.star-4').classList.remove('active-star')
        _$('.star-5').classList.remove('active-star')
        _$('.point-user').innerHTML = 'Đánh giá phim'
        _$('.input-form').value = null;
        if (_$('.autocom-box')) {

            _$('.autocom-box').classList.remove('active')
            _$('.autocom-box').classList.remove('show')
        }
        _$('.search-input').classList.remove('active')
        _$('.loader').style.display = 'none';
        _$('.menu_navbar').style.transform = 'translateX(-100%)'
        _$('.body__trailer-video').src = null
        _$('.body__moving').src = null
        _$('.body__movie-trailer').style.display = 'block'
        _$('.body__intro-main').style.display = 'none'
        _$('.body__comment').style.display = 'none'
        _$('.body__intro-desc-main').style.display = 'none'
        _$('.body__movie-video').style.display = 'none'
        _$('#body').style.display = 'block'
        _$('#body__watch').style.display = 'none'
        _$('.loader').style.display = 'none'
        window.scrollTo({ top: 777 })
        document.title = 'Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất'

        _$('.body__list-movie-new').style.display = 'none'
        _$('.body__list-movie-odd').style.display = 'none'
        _$('.body__list-movie-set').style.display = 'flex'
        _$('.body__list-movie-cinema').style.display = 'none'

        _$('.body__item-btn-1').classList.remove('choose')
        _$('.body__item-btn-2').classList.remove('choose')
        _$('.body__item-btn-3').classList.add('choose')
        _$('.body__item-btn-4').classList.remove('choose')

        _$('.body__list-movie-title-new').style.display = 'none'
        _$('.body__list-movie-title-odd').style.display = 'none'
        _$('.body__list-movie-title-set').style.display = 'flex'
        _$('.body__list-movie-title-cinema').style.display = 'none'

        _$('.body__list-movie-title-action').style.display = 'none'
        _$('.body__list-movie-title-fiction').style.display = 'none'
        _$('.body__list-movie-title-adventure').style.display = 'none'
        _$('.body__list-movie-title-honor').style.display = 'none'
        _$('.body__list-movie-title-romance').style.display = 'none'
        _$('.body__list-movie-title-humor').style.display = 'none'
        _$('.body__list-movie-title-kungfu').style.display = 'none'
        _$('.body__list-movie-title-cartoon').style.display = 'none'
        _$('.body__list-movie-title-crimial').style.display = 'none'
        _$('.body__list-movie-title-war').style.display = 'none'
        _$('.body__list-movie-title-family').style.display = 'none'
        _$('.body__list-movie-title-mentality').style.display = 'none'
        _$('.body__list-movie-title-mystic').style.display = 'none'
        _$('.body__list-movie-title-spirituality').style.display = 'none'
        _$('.body__list-movie-title-zombie').style.display = 'none'
        _$('.body__list-movie-title-search').style.display = 'none'

        _$('.body__list-movie-action').style.display = 'none'
        _$('.body__list-movie-fiction').style.display = 'none'
        _$('.body__list-movie-adventure').style.display = 'none'
        _$('.body__list-movie-honor').style.display = 'none'
        _$('.body__list-movie-romance').style.display = 'none'
        _$('.body__list-movie-humor').style.display = 'none'
        _$('.body__list-movie-kungfu').style.display = 'none'
        _$('.body__list-movie-cartoon').style.display = 'none'
        _$('.body__list-movie-crimial').style.display = 'none'
        _$('.body__list-movie-war').style.display = 'none'
        _$('.body__list-movie-family').style.display = 'none'
    }, 500)
    _$('.body__list-movie-mentality').style.display = 'none'
    _$('.body__list-movie-mystic').style.display = 'none'
    _$('.body__list-movie-spirituality').style.display = 'none'
    _$('.body__list-movie-zombie').style.display = 'none'
    _$('.body__list-movie-search').style.display = 'none'
}

function moviesCinema() {
    watching = false;
    statusParent[0].classList.remove('active')
    statusParent[1].classList.remove('active')
    statusParent[2].classList.remove('active')
    statusParent[3].classList.remove('active')
    statusParent[4].classList.remove('active')
    statusParent[5].classList.remove('active')
    statusParent[6].classList.remove('active')
    _$('.loader').style.display = 'block'
    setTimeout(function() {
        _$('.star-1').classList.remove('active-star')
        _$('.star-2').classList.remove('active-star')
        _$('.star-3').classList.remove('active-star')
        _$('.star-4').classList.remove('active-star')
        _$('.star-5').classList.remove('active-star')
        _$('.point-user').innerHTML = 'Đánh giá phim'
        _$('.input-form').value = null;
        if (_$('.autocom-box')) {

            _$('.autocom-box').classList.remove('active')
            _$('.autocom-box').classList.remove('show')
        }
        _$('.search-input').classList.remove('active')
        _$('.loader').style.display = 'none';
        _$('.menu_navbar').style.transform = 'translateX(-100%)'
        _$('.body__trailer-video').src = null
        _$('.body__moving').src = null
        _$('.body__movie-trailer').style.display = 'block'
        _$('.body__intro-main').style.display = 'none'
        _$('.body__comment').style.display = 'none'
        _$('.body__intro-desc-main').style.display = 'none'
        _$('.body__movie-video').style.display = 'none'
        _$('#body').style.display = 'block'
        _$('#body__watch').style.display = 'none'
        _$('.loader').style.display = 'none'
        window.scrollTo({ top: 777 })
        document.title = 'Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất'

        _$('.body__list-movie-new').style.display = 'none'
        _$('.body__list-movie-odd').style.display = 'none'
        _$('.body__list-movie-set').style.display = 'none'
        _$('.body__list-movie-cinema').style.display = 'flex'

        _$('.body__item-btn-1').classList.remove('choose')
        _$('.body__item-btn-2').classList.remove('choose')
        _$('.body__item-btn-3').classList.remove('choose')
        _$('.body__item-btn-4').classList.add('choose')

        _$('.body__list-movie-title-new').style.display = 'none'
        _$('.body__list-movie-title-odd').style.display = 'none'
        _$('.body__list-movie-title-set').style.display = 'none'
        _$('.body__list-movie-title-cinema').style.display = 'flex'

        _$('.body__list-movie-title-action').style.display = 'none'
        _$('.body__list-movie-title-fiction').style.display = 'none'
        _$('.body__list-movie-title-adventure').style.display = 'none'
        _$('.body__list-movie-title-honor').style.display = 'none'
        _$('.body__list-movie-title-romance').style.display = 'none'
        _$('.body__list-movie-title-humor').style.display = 'none'
        _$('.body__list-movie-title-kungfu').style.display = 'none'
        _$('.body__list-movie-title-cartoon').style.display = 'none'
        _$('.body__list-movie-title-crimial').style.display = 'none'
        _$('.body__list-movie-title-war').style.display = 'none'
        _$('.body__list-movie-title-family').style.display = 'none'
        _$('.body__list-movie-title-mentality').style.display = 'none'
        _$('.body__list-movie-title-mystic').style.display = 'none'
        _$('.body__list-movie-title-spirituality').style.display = 'none'
        _$('.body__list-movie-title-zombie').style.display = 'none'
        _$('.body__list-movie-title-search').style.display = 'none'

        _$('.body__list-movie-action').style.display = 'none'
        _$('.body__list-movie-fiction').style.display = 'none'
        _$('.body__list-movie-adventure').style.display = 'none'
        _$('.body__list-movie-honor').style.display = 'none'
        _$('.body__list-movie-romance').style.display = 'none'
        _$('.body__list-movie-humor').style.display = 'none'
        _$('.body__list-movie-kungfu').style.display = 'none'
        _$('.body__list-movie-cartoon').style.display = 'none'
        _$('.body__list-movie-crimial').style.display = 'none'
        _$('.body__list-movie-war').style.display = 'none'
        _$('.body__list-movie-family').style.display = 'none'
    }, 500)
    _$('.body__list-movie-mentality').style.display = 'none'
    _$('.body__list-movie-mystic').style.display = 'none'
    _$('.body__list-movie-spirituality').style.display = 'none'
    _$('.body__list-movie-zombie').style.display = 'none'
    _$('.body__list-movie-search').style.display = 'none'
}

function moviesAction() {
    watching = false;
    statusParent[0].classList.remove('active')
    statusParent[1].classList.remove('active')
    statusParent[2].classList.remove('active')
    statusParent[3].classList.remove('active')
    statusParent[4].classList.remove('active')
    statusParent[5].classList.remove('active')
    statusParent[6].classList.remove('active')
    _$('.loader').style.display = 'block'
    setTimeout(function() {
        _$('.star-1').classList.remove('active-star')
        _$('.star-2').classList.remove('active-star')
        _$('.star-3').classList.remove('active-star')
        _$('.star-4').classList.remove('active-star')
        _$('.star-5').classList.remove('active-star')
        _$('.point-user').innerHTML = 'Đánh giá phim'
        _$('.input-form').value = null;
        if (_$('.autocom-box')) {

            _$('.autocom-box').classList.remove('active')
            _$('.autocom-box').classList.remove('show')
        }
        _$('.search-input').classList.remove('active')
        _$('.loader').style.display = 'none';
        _$('.menu_navbar').style.transform = 'translateX(-100%)'
        _$('.body__trailer-video').src = null
        _$('.body__moving').src = null
        _$('.body__movie-trailer').style.display = 'block'
        _$('.body__intro-main').style.display = 'none'
        _$('.body__comment').style.display = 'none'
        _$('.body__intro-desc-main').style.display = 'none'
        _$('.body__movie-video').style.display = 'none'
        _$('#body').style.display = 'block'
        _$('#body__watch').style.display = 'none'
        _$('.loader').style.display = 'none'
        window.scrollTo({ top: 777 })
        document.title = 'Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất'

        _$('.body__list-movie-new').style.display = 'none'
        _$('.body__list-movie-odd').style.display = 'none'
        _$('.body__list-movie-set').style.display = 'none'
        _$('.body__list-movie-cinema').style.display = 'none'

        _$('.body__item-btn-1').classList.remove('choose')
        _$('.body__item-btn-2').classList.remove('choose')
        _$('.body__item-btn-3').classList.remove('choose')
        _$('.body__item-btn-4').classList.remove('choose')

        _$('.body__list-movie-title-new').style.display = 'none'
        _$('.body__list-movie-title-odd').style.display = 'none'
        _$('.body__list-movie-title-set').style.display = 'none'
        _$('.body__list-movie-title-cinema').style.display = 'none'

        _$('.body__list-movie-title-action').style.display = 'flex'
        _$('.body__list-movie-title-fiction').style.display = 'none'
        _$('.body__list-movie-title-adventure').style.display = 'none'
        _$('.body__list-movie-title-honor').style.display = 'none'
        _$('.body__list-movie-title-romance').style.display = 'none'
        _$('.body__list-movie-title-humor').style.display = 'none'
        _$('.body__list-movie-title-kungfu').style.display = 'none'
        _$('.body__list-movie-title-cartoon').style.display = 'none'
        _$('.body__list-movie-title-crimial').style.display = 'none'
        _$('.body__list-movie-title-war').style.display = 'none'
        _$('.body__list-movie-title-family').style.display = 'none'
        _$('.body__list-movie-title-mentality').style.display = 'none'
        _$('.body__list-movie-title-mystic').style.display = 'none'
        _$('.body__list-movie-title-spirituality').style.display = 'none'
        _$('.body__list-movie-title-zombie').style.display = 'none'
        _$('.body__list-movie-title-search').style.display = 'none'

        _$('.body__list-movie-action').style.display = 'flex'
        _$('.body__list-movie-fiction').style.display = 'none'
        _$('.body__list-movie-adventure').style.display = 'none'
        _$('.body__list-movie-honor').style.display = 'none'
        _$('.body__list-movie-romance').style.display = 'none'
        _$('.body__list-movie-humor').style.display = 'none'
        _$('.body__list-movie-kungfu').style.display = 'none'
        _$('.body__list-movie-cartoon').style.display = 'none'
        _$('.body__list-movie-crimial').style.display = 'none'
        _$('.body__list-movie-war').style.display = 'none'
        _$('.body__list-movie-family').style.display = 'none'
        _$('.body__list-movie-mentality').style.display = 'none'
        _$('.body__list-movie-mystic').style.display = 'none'
        _$('.body__list-movie-spirituality').style.display = 'none'
        _$('.body__list-movie-zombie').style.display = 'none'
        _$('.body__list-movie-search').style.display = 'none'
    }, 500)
}

function moviesFiction() {
    watching = false;
    statusParent[0].classList.remove('active')
    statusParent[1].classList.remove('active')
    statusParent[2].classList.remove('active')
    statusParent[3].classList.remove('active')
    statusParent[4].classList.remove('active')
    statusParent[5].classList.remove('active')
    statusParent[6].classList.remove('active')
    _$('.loader').style.display = 'block'
    setTimeout(function() {
        _$('.star-1').classList.remove('active-star')
        _$('.star-2').classList.remove('active-star')
        _$('.star-3').classList.remove('active-star')
        _$('.star-4').classList.remove('active-star')
        _$('.star-5').classList.remove('active-star')
        _$('.point-user').innerHTML = 'Đánh giá phim'
        _$('.input-form').value = null;
        if (_$('.autocom-box')) {

            _$('.autocom-box').classList.remove('active')
            _$('.autocom-box').classList.remove('show')
        }
        _$('.search-input').classList.remove('active')
        _$('.loader').style.display = 'none';
        _$('.menu_navbar').style.transform = 'translateX(-100%)'
        _$('.body__trailer-video').src = null
        _$('.body__moving').src = null
        _$('.body__movie-trailer').style.display = 'block'
        _$('.body__intro-main').style.display = 'none'
        _$('.body__comment').style.display = 'none'
        _$('.body__intro-desc-main').style.display = 'none'
        _$('.body__movie-video').style.display = 'none'
        _$('#body').style.display = 'block'
        _$('#body__watch').style.display = 'none'
        _$('.loader').style.display = 'none'
        window.scrollTo({ top: 777 })
        document.title = 'Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất'

        _$('.body__list-movie-new').style.display = 'none'
        _$('.body__list-movie-odd').style.display = 'none'
        _$('.body__list-movie-set').style.display = 'none'
        _$('.body__list-movie-cinema').style.display = 'none'

        _$('.body__item-btn-1').classList.remove('choose')
        _$('.body__item-btn-2').classList.remove('choose')
        _$('.body__item-btn-3').classList.remove('choose')
        _$('.body__item-btn-4').classList.remove('choose')

        _$('.body__list-movie-title-new').style.display = 'none'
        _$('.body__list-movie-title-odd').style.display = 'none'
        _$('.body__list-movie-title-set').style.display = 'none'
        _$('.body__list-movie-title-cinema').style.display = 'none'

        _$('.body__list-movie-title-action').style.display = 'none'
        _$('.body__list-movie-title-fiction').style.display = 'flex'
        _$('.body__list-movie-title-adventure').style.display = 'none'
        _$('.body__list-movie-title-honor').style.display = 'none'
        _$('.body__list-movie-title-romance').style.display = 'none'
        _$('.body__list-movie-title-humor').style.display = 'none'
        _$('.body__list-movie-title-kungfu').style.display = 'none'
        _$('.body__list-movie-title-cartoon').style.display = 'none'
        _$('.body__list-movie-title-crimial').style.display = 'none'
        _$('.body__list-movie-title-war').style.display = 'none'
        _$('.body__list-movie-title-family').style.display = 'none'
        _$('.body__list-movie-title-mentality').style.display = 'none'
        _$('.body__list-movie-title-mystic').style.display = 'none'
        _$('.body__list-movie-title-spirituality').style.display = 'none'
        _$('.body__list-movie-title-zombie').style.display = 'none'
        _$('.body__list-movie-title-search').style.display = 'none'

        _$('.body__list-movie-action').style.display = 'none'
        _$('.body__list-movie-fiction').style.display = 'flex'
        _$('.body__list-movie-adventure').style.display = 'none'
        _$('.body__list-movie-honor').style.display = 'none'
        _$('.body__list-movie-romance').style.display = 'none'
        _$('.body__list-movie-humor').style.display = 'none'
        _$('.body__list-movie-kungfu').style.display = 'none'
        _$('.body__list-movie-cartoon').style.display = 'none'
        _$('.body__list-movie-crimial').style.display = 'none'
        _$('.body__list-movie-war').style.display = 'none'
        _$('.body__list-movie-family').style.display = 'none'
        _$('.body__list-movie-mentality').style.display = 'none'
        _$('.body__list-movie-mystic').style.display = 'none'
        _$('.body__list-movie-spirituality').style.display = 'none'
        _$('.body__list-movie-zombie').style.display = 'none'
        _$('.body__list-movie-search').style.display = 'none'
    }, 500)

}

function moviesAdventure() {
    watching = false;
    statusParent[0].classList.remove('active')
    statusParent[1].classList.remove('active')
    statusParent[2].classList.remove('active')
    statusParent[3].classList.remove('active')
    statusParent[4].classList.remove('active')
    statusParent[5].classList.remove('active')
    statusParent[6].classList.remove('active')
    _$('.loader').style.display = 'block'
    setTimeout(function() {
        _$('.star-1').classList.remove('active-star')
        _$('.star-2').classList.remove('active-star')
        _$('.star-3').classList.remove('active-star')
        _$('.star-4').classList.remove('active-star')
        _$('.star-5').classList.remove('active-star')
        _$('.point-user').innerHTML = 'Đánh giá phim'
        _$('.input-form').value = null;
        if (_$('.autocom-box')) {

            _$('.autocom-box').classList.remove('active')
            _$('.autocom-box').classList.remove('show')
        }
        _$('.search-input').classList.remove('active')
        _$('.loader').style.display = 'none';
        _$('.menu_navbar').style.transform = 'translateX(-100%)'
        _$('.body__trailer-video').src = null
        _$('.body__moving').src = null
        _$('.body__movie-trailer').style.display = 'block'
        _$('.body__intro-main').style.display = 'none'
        _$('.body__comment').style.display = 'none'
        _$('.body__intro-desc-main').style.display = 'none'
        _$('.body__movie-video').style.display = 'none'
        _$('#body').style.display = 'block'
        _$('#body__watch').style.display = 'none'
        _$('.loader').style.display = 'none'
        window.scrollTo({ top: 777 })
        document.title = 'Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất'

        _$('.body__list-movie-new').style.display = 'none'
        _$('.body__list-movie-odd').style.display = 'none'
        _$('.body__list-movie-set').style.display = 'none'
        _$('.body__list-movie-cinema').style.display = 'none'

        _$('.body__item-btn-1').classList.remove('choose')
        _$('.body__item-btn-2').classList.remove('choose')
        _$('.body__item-btn-3').classList.remove('choose')
        _$('.body__item-btn-4').classList.remove('choose')

        _$('.body__list-movie-title-new').style.display = 'none'
        _$('.body__list-movie-title-odd').style.display = 'none'
        _$('.body__list-movie-title-set').style.display = 'none'
        _$('.body__list-movie-title-cinema').style.display = 'none'

        _$('.body__list-movie-title-action').style.display = 'none'
        _$('.body__list-movie-title-fiction').style.display = 'none'
        _$('.body__list-movie-title-adventure').style.display = 'flex'
        _$('.body__list-movie-title-honor').style.display = 'none'
        _$('.body__list-movie-title-romance').style.display = 'none'
        _$('.body__list-movie-title-humor').style.display = 'none'
        _$('.body__list-movie-title-kungfu').style.display = 'none'
        _$('.body__list-movie-title-cartoon').style.display = 'none'
        _$('.body__list-movie-title-crimial').style.display = 'none'
        _$('.body__list-movie-title-war').style.display = 'none'
        _$('.body__list-movie-title-family').style.display = 'none'
        _$('.body__list-movie-title-mentality').style.display = 'none'
        _$('.body__list-movie-title-mystic').style.display = 'none'
        _$('.body__list-movie-title-spirituality').style.display = 'none'
        _$('.body__list-movie-title-zombie').style.display = 'none'
        _$('.body__list-movie-title-search').style.display = 'none'

        _$('.body__list-movie-action').style.display = 'none'
        _$('.body__list-movie-fiction').style.display = 'none'
        _$('.body__list-movie-adventure').style.display = 'flex'
        _$('.body__list-movie-honor').style.display = 'none'
        _$('.body__list-movie-romance').style.display = 'none'
        _$('.body__list-movie-humor').style.display = 'none'
        _$('.body__list-movie-kungfu').style.display = 'none'
        _$('.body__list-movie-cartoon').style.display = 'none'
        _$('.body__list-movie-crimial').style.display = 'none'
        _$('.body__list-movie-war').style.display = 'none'
        _$('.body__list-movie-family').style.display = 'none'
        _$('.body__list-movie-mentality').style.display = 'none'
        _$('.body__list-movie-mystic').style.display = 'none'
        _$('.body__list-movie-spirituality').style.display = 'none'
        _$('.body__list-movie-zombie').style.display = 'none'
        _$('.body__list-movie-search').style.display = 'none'
    }, 500)
}

function moviesHonor() {
    watching = false;
    statusParent[0].classList.remove('active')
    statusParent[1].classList.remove('active')
    statusParent[2].classList.remove('active')
    statusParent[3].classList.remove('active')
    statusParent[4].classList.remove('active')
    statusParent[5].classList.remove('active')
    statusParent[6].classList.remove('active')
    _$('.loader').style.display = 'block'
    setTimeout(function() {
        _$('.star-1').classList.remove('active-star')
        _$('.star-2').classList.remove('active-star')
        _$('.star-3').classList.remove('active-star')
        _$('.star-4').classList.remove('active-star')
        _$('.star-5').classList.remove('active-star')
        _$('.point-user').innerHTML = 'Đánh giá phim'
        _$('.input-form').value = null;
        if (_$('.autocom-box')) {
            _$('.autocom-box').classList.remove('active')
            _$('.autocom-box').classList.remove('show')
        }
        _$('.search-input').classList.remove('active')
        _$('.loader').style.display = 'none';
        _$('.menu_navbar').style.transform = 'translateX(-100%)'
        _$('.body__trailer-video').src = null
        _$('.body__moving').src = null
        _$('.body__movie-trailer').style.display = 'block'
        _$('.body__intro-main').style.display = 'none'
        _$('.body__comment').style.display = 'none'
        _$('.body__intro-desc-main').style.display = 'none'
        _$('.body__movie-video').style.display = 'none'
        _$('#body').style.display = 'block'
        _$('#body__watch').style.display = 'none'
        _$('.loader').style.display = 'none'
        window.scrollTo({ top: 777 })
        document.title = 'Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất'

        _$('.body__list-movie-new').style.display = 'none'
        _$('.body__list-movie-odd').style.display = 'none'
        _$('.body__list-movie-set').style.display = 'none'
        _$('.body__list-movie-cinema').style.display = 'none'

        _$('.body__item-btn-1').classList.remove('choose')
        _$('.body__item-btn-2').classList.remove('choose')
        _$('.body__item-btn-3').classList.remove('choose')
        _$('.body__item-btn-4').classList.remove('choose')

        _$('.body__list-movie-title-new').style.display = 'none'
        _$('.body__list-movie-title-odd').style.display = 'none'
        _$('.body__list-movie-title-set').style.display = 'none'
        _$('.body__list-movie-title-cinema').style.display = 'none'

        _$('.body__list-movie-title-action').style.display = 'none'
        _$('.body__list-movie-title-fiction').style.display = 'none'
        _$('.body__list-movie-title-adventure').style.display = 'none'
        _$('.body__list-movie-title-honor').style.display = 'flex'
        _$('.body__list-movie-title-romance').style.display = 'none'
        _$('.body__list-movie-title-humor').style.display = 'none'
        _$('.body__list-movie-title-kungfu').style.display = 'none'
        _$('.body__list-movie-title-cartoon').style.display = 'none'
        _$('.body__list-movie-title-crimial').style.display = 'none'
        _$('.body__list-movie-title-war').style.display = 'none'
        _$('.body__list-movie-title-family').style.display = 'none'
        _$('.body__list-movie-title-mentality').style.display = 'none'
        _$('.body__list-movie-title-mystic').style.display = 'none'
        _$('.body__list-movie-title-spirituality').style.display = 'none'
        _$('.body__list-movie-title-zombie').style.display = 'none'
        _$('.body__list-movie-title-search').style.display = 'none'

        _$('.body__list-movie-action').style.display = 'none'
        _$('.body__list-movie-fiction').style.display = 'none'
        _$('.body__list-movie-adventure').style.display = 'none'
        _$('.body__list-movie-honor').style.display = 'flex'
        _$('.body__list-movie-romance').style.display = 'none'
        _$('.body__list-movie-humor').style.display = 'none'
        _$('.body__list-movie-kungfu').style.display = 'none'
        _$('.body__list-movie-cartoon').style.display = 'none'
        _$('.body__list-movie-crimial').style.display = 'none'
        _$('.body__list-movie-war').style.display = 'none'
        _$('.body__list-movie-family').style.display = 'none'
        _$('.body__list-movie-mentality').style.display = 'none'
        _$('.body__list-movie-mystic').style.display = 'none'
        _$('.body__list-movie-spirituality').style.display = 'none'
        _$('.body__list-movie-zombie').style.display = 'none'
        _$('.body__list-movie-search').style.display = 'none'
    }, 500)
}

function moviesRomance() {
    watching = false;
    statusParent[0].classList.remove('active')
    statusParent[1].classList.remove('active')
    statusParent[2].classList.remove('active')
    statusParent[3].classList.remove('active')
    statusParent[4].classList.remove('active')
    statusParent[5].classList.remove('active')
    statusParent[6].classList.remove('active')
    _$('.loader').style.display = 'block'
    setTimeout(function() {
        _$('.star-1').classList.remove('active-star')
        _$('.star-2').classList.remove('active-star')
        _$('.star-3').classList.remove('active-star')
        _$('.star-4').classList.remove('active-star')
        _$('.star-5').classList.remove('active-star')
        _$('.point-user').innerHTML = 'Đánh giá phim'
        _$('.input-form').value = null;
        if (_$('.autocom-box')) {
            _$('.autocom-box').classList.remove('active')
            _$('.autocom-box').classList.remove('show')
        }
        _$('.search-input').classList.remove('active')
        _$('.loader').style.display = 'none';
        _$('.menu_navbar').style.transform = 'translateX(-100%)'
        _$('.body__trailer-video').src = null
        _$('.body__moving').src = null
        _$('.body__movie-trailer').style.display = 'block'
        _$('.body__intro-main').style.display = 'none'
        _$('.body__comment').style.display = 'none'
        _$('.body__intro-desc-main').style.display = 'none'
        _$('.body__movie-video').style.display = 'none'
        _$('#body').style.display = 'block'
        _$('#body__watch').style.display = 'none'
        _$('.loader').style.display = 'none'
        window.scrollTo({ top: 777 })
        document.title = 'Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất'

        _$('.body__list-movie-new').style.display = 'none'
        _$('.body__list-movie-odd').style.display = 'none'
        _$('.body__list-movie-set').style.display = 'none'
        _$('.body__list-movie-cinema').style.display = 'none'

        _$('.body__item-btn-1').classList.remove('choose')
        _$('.body__item-btn-2').classList.remove('choose')
        _$('.body__item-btn-3').classList.remove('choose')
        _$('.body__item-btn-4').classList.remove('choose')

        _$('.body__list-movie-title-new').style.display = 'none'
        _$('.body__list-movie-title-odd').style.display = 'none'
        _$('.body__list-movie-title-set').style.display = 'none'
        _$('.body__list-movie-title-cinema').style.display = 'none'

        _$('.body__list-movie-title-action').style.display = 'none'
        _$('.body__list-movie-title-fiction').style.display = 'none'
        _$('.body__list-movie-title-adventure').style.display = 'none'
        _$('.body__list-movie-title-honor').style.display = 'none'
        _$('.body__list-movie-title-romance').style.display = 'flex'
        _$('.body__list-movie-title-humor').style.display = 'none'
        _$('.body__list-movie-title-kungfu').style.display = 'none'
        _$('.body__list-movie-title-cartoon').style.display = 'none'
        _$('.body__list-movie-title-crimial').style.display = 'none'
        _$('.body__list-movie-title-war').style.display = 'none'
        _$('.body__list-movie-title-family').style.display = 'none'
        _$('.body__list-movie-title-mentality').style.display = 'none'
        _$('.body__list-movie-title-mystic').style.display = 'none'
        _$('.body__list-movie-title-spirituality').style.display = 'none'
        _$('.body__list-movie-title-zombie').style.display = 'none'
        _$('.body__list-movie-title-search').style.display = 'none'

        _$('.body__list-movie-action').style.display = 'none'
        _$('.body__list-movie-fiction').style.display = 'none'
        _$('.body__list-movie-adventure').style.display = 'none'
        _$('.body__list-movie-honor').style.display = 'none'
        _$('.body__list-movie-romance').style.display = 'flex'
        _$('.body__list-movie-humor').style.display = 'none'
        _$('.body__list-movie-kungfu').style.display = 'none'
        _$('.body__list-movie-cartoon').style.display = 'none'
        _$('.body__list-movie-crimial').style.display = 'none'
        _$('.body__list-movie-war').style.display = 'none'
        _$('.body__list-movie-family').style.display = 'none'
        _$('.body__list-movie-mentality').style.display = 'none'
        _$('.body__list-movie-mystic').style.display = 'none'
        _$('.body__list-movie-spirituality').style.display = 'none'
        _$('.body__list-movie-zombie').style.display = 'none'
        _$('.body__list-movie-search').style.display = 'none'
    }, 500)

}

function moviesHumor() {
    watching = false;
    statusParent[0].classList.remove('active')
    statusParent[1].classList.remove('active')
    statusParent[2].classList.remove('active')
    statusParent[3].classList.remove('active')
    statusParent[4].classList.remove('active')
    statusParent[5].classList.remove('active')
    statusParent[6].classList.remove('active')
    _$('.loader').style.display = 'block'
    setTimeout(function() {
        _$('.star-1').classList.remove('active-star')
        _$('.star-2').classList.remove('active-star')
        _$('.star-3').classList.remove('active-star')
        _$('.star-4').classList.remove('active-star')
        _$('.star-5').classList.remove('active-star')
        _$('.point-user').innerHTML = 'Đánh giá phim'
        _$('.input-form').value = null;
        if (_$('.autocom-box')) {
            _$('.autocom-box').classList.remove('active')
            _$('.autocom-box').classList.remove('show')
        }
        _$('.search-input').classList.remove('active')
        _$('.loader').style.display = 'none';
        _$('.menu_navbar').style.transform = 'translateX(-100%)'
        _$('.body__trailer-video').src = null
        _$('.body__moving').src = null
        _$('.body__movie-trailer').style.display = 'block'
        _$('.body__intro-main').style.display = 'none'
        _$('.body__comment').style.display = 'none'
        _$('.body__intro-desc-main').style.display = 'none'
        _$('.body__movie-video').style.display = 'none'
        _$('#body').style.display = 'block'
        _$('#body__watch').style.display = 'none'
        _$('.loader').style.display = 'none'
        window.scrollTo({ top: 777 })
        document.title = 'Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất'

        _$('.body__list-movie-new').style.display = 'none'
        _$('.body__list-movie-odd').style.display = 'none'
        _$('.body__list-movie-set').style.display = 'none'
        _$('.body__list-movie-cinema').style.display = 'none'

        _$('.body__item-btn-1').classList.remove('choose')
        _$('.body__item-btn-2').classList.remove('choose')
        _$('.body__item-btn-3').classList.remove('choose')
        _$('.body__item-btn-4').classList.remove('choose')

        _$('.body__list-movie-title-new').style.display = 'none'
        _$('.body__list-movie-title-odd').style.display = 'none'
        _$('.body__list-movie-title-set').style.display = 'none'
        _$('.body__list-movie-title-cinema').style.display = 'none'

        _$('.body__list-movie-title-action').style.display = 'none'
        _$('.body__list-movie-title-fiction').style.display = 'none'
        _$('.body__list-movie-title-adventure').style.display = 'none'
        _$('.body__list-movie-title-honor').style.display = 'none'
        _$('.body__list-movie-title-romance').style.display = 'none'
        _$('.body__list-movie-title-humor').style.display = 'flex'
        _$('.body__list-movie-title-kungfu').style.display = 'none'
        _$('.body__list-movie-title-cartoon').style.display = 'none'
        _$('.body__list-movie-title-crimial').style.display = 'none'
        _$('.body__list-movie-title-war').style.display = 'none'
        _$('.body__list-movie-title-family').style.display = 'none'
        _$('.body__list-movie-title-mentality').style.display = 'none'
        _$('.body__list-movie-title-mystic').style.display = 'none'
        _$('.body__list-movie-title-spirituality').style.display = 'none'
        _$('.body__list-movie-title-zombie').style.display = 'none'
        _$('.body__list-movie-title-search').style.display = 'none'

        _$('.body__list-movie-action').style.display = 'none'
        _$('.body__list-movie-fiction').style.display = 'none'
        _$('.body__list-movie-adventure').style.display = 'none'
        _$('.body__list-movie-honor').style.display = 'none'
        _$('.body__list-movie-romance').style.display = 'none'
        _$('.body__list-movie-humor').style.display = 'flex'
        _$('.body__list-movie-kungfu').style.display = 'none'
        _$('.body__list-movie-cartoon').style.display = 'none'
        _$('.body__list-movie-crimial').style.display = 'none'
        _$('.body__list-movie-war').style.display = 'none'
        _$('.body__list-movie-family').style.display = 'none'
        _$('.body__list-movie-mentality').style.display = 'none'
        _$('.body__list-movie-mystic').style.display = 'none'
        _$('.body__list-movie-spirituality').style.display = 'none'
        _$('.body__list-movie-zombie').style.display = 'none'
        _$('.body__list-movie-search').style.display = 'none'
    }, 500)

}

function moviesKungfu() {
    watching = false;
    statusParent[0].classList.remove('active')
    statusParent[1].classList.remove('active')
    statusParent[2].classList.remove('active')
    statusParent[3].classList.remove('active')
    statusParent[4].classList.remove('active')
    statusParent[5].classList.remove('active')
    statusParent[6].classList.remove('active')
    _$('.loader').style.display = 'block'
    setTimeout(function() {
        _$('.star-1').classList.remove('active-star')
        _$('.star-2').classList.remove('active-star')
        _$('.star-3').classList.remove('active-star')
        _$('.star-4').classList.remove('active-star')
        _$('.star-5').classList.remove('active-star')
        _$('.point-user').innerHTML = 'Đánh giá phim'
        _$('.input-form').value = null;
        if (_$('.autocom-box')) {
            _$('.autocom-box').classList.remove('active')
            _$('.autocom-box').classList.remove('show')
        }
        _$('.search-input').classList.remove('active')
        _$('.loader').style.display = 'none';
        _$('.menu_navbar').style.transform = 'translateX(-100%)'
        _$('.body__trailer-video').src = null
        _$('.body__moving').src = null
        _$('.body__movie-trailer').style.display = 'block'
        _$('.body__intro-main').style.display = 'none'
        _$('.body__comment').style.display = 'none'
        _$('.body__intro-desc-main').style.display = 'none'
        _$('.body__movie-video').style.display = 'none'
        _$('#body').style.display = 'block'
        _$('#body__watch').style.display = 'none'
        _$('.loader').style.display = 'none'
        window.scrollTo({ top: 777 })
        document.title = 'Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất'

        _$('.body__list-movie-new').style.display = 'none'
        _$('.body__list-movie-odd').style.display = 'none'
        _$('.body__list-movie-set').style.display = 'none'
        _$('.body__list-movie-cinema').style.display = 'none'

        _$('.body__item-btn-1').classList.remove('choose')
        _$('.body__item-btn-2').classList.remove('choose')
        _$('.body__item-btn-3').classList.remove('choose')
        _$('.body__item-btn-4').classList.remove('choose')

        _$('.body__list-movie-title-new').style.display = 'none'
        _$('.body__list-movie-title-odd').style.display = 'none'
        _$('.body__list-movie-title-set').style.display = 'none'
        _$('.body__list-movie-title-cinema').style.display = 'none'

        _$('.body__list-movie-title-action').style.display = 'none'
        _$('.body__list-movie-title-fiction').style.display = 'none'
        _$('.body__list-movie-title-adventure').style.display = 'none'
        _$('.body__list-movie-title-honor').style.display = 'none'
        _$('.body__list-movie-title-romance').style.display = 'none'
        _$('.body__list-movie-title-humor').style.display = 'none'
        _$('.body__list-movie-title-kungfu').style.display = 'flex'
        _$('.body__list-movie-title-cartoon').style.display = 'none'
        _$('.body__list-movie-title-crimial').style.display = 'none'
        _$('.body__list-movie-title-war').style.display = 'none'
        _$('.body__list-movie-title-family').style.display = 'none'
        _$('.body__list-movie-title-mentality').style.display = 'none'
        _$('.body__list-movie-title-mystic').style.display = 'none'
        _$('.body__list-movie-title-spirituality').style.display = 'none'
        _$('.body__list-movie-title-zombie').style.display = 'none'
        _$('.body__list-movie-title-search').style.display = 'none'

        _$('.body__list-movie-action').style.display = 'none'
        _$('.body__list-movie-fiction').style.display = 'none'
        _$('.body__list-movie-adventure').style.display = 'none'
        _$('.body__list-movie-honor').style.display = 'none'
        _$('.body__list-movie-romance').style.display = 'none'
        _$('.body__list-movie-humor').style.display = 'none'
        _$('.body__list-movie-kungfu').style.display = 'flex'
        _$('.body__list-movie-cartoon').style.display = 'none'
        _$('.body__list-movie-crimial').style.display = 'none'
        _$('.body__list-movie-war').style.display = 'none'
        _$('.body__list-movie-family').style.display = 'none'
        _$('.body__list-movie-mentality').style.display = 'none'
        _$('.body__list-movie-mystic').style.display = 'none'
        _$('.body__list-movie-spirituality').style.display = 'none'
        _$('.body__list-movie-zombie').style.display = 'none'
        _$('.body__list-movie-search').style.display = 'none'
    }, 500)

}

function moviesCartoon() {
    watching = false;
    statusParent[0].classList.remove('active')
    statusParent[1].classList.remove('active')
    statusParent[2].classList.remove('active')
    statusParent[3].classList.remove('active')
    statusParent[4].classList.remove('active')
    statusParent[5].classList.remove('active')
    statusParent[6].classList.remove('active')
    _$('.loader').style.display = 'block'
    setTimeout(function() {
        _$('.star-1').classList.remove('active-star')
        _$('.star-2').classList.remove('active-star')
        _$('.star-3').classList.remove('active-star')
        _$('.star-4').classList.remove('active-star')
        _$('.star-5').classList.remove('active-star')
        _$('.point-user').innerHTML = 'Đánh giá phim'
        _$('.input-form').value = null;
        if (_$('.autocom-box')) {
            _$('.autocom-box').classList.remove('active')
            _$('.autocom-box').classList.remove('show')
        }
        _$('.search-input').classList.remove('active')
        _$('.loader').style.display = 'none';
        _$('.menu_navbar').style.transform = 'translateX(-100%)'
        _$('.body__trailer-video').src = null
        _$('.body__moving').src = null
        _$('.body__movie-trailer').style.display = 'block'
        _$('.body__intro-main').style.display = 'none'
        _$('.body__comment').style.display = 'none'
        _$('.body__intro-desc-main').style.display = 'none'
        _$('.body__movie-video').style.display = 'none'
        _$('#body').style.display = 'block'
        _$('#body__watch').style.display = 'none'
        _$('.loader').style.display = 'none'
        window.scrollTo({ top: 777 })
        document.title = 'Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất'

        _$('.body__list-movie-new').style.display = 'none'
        _$('.body__list-movie-odd').style.display = 'none'
        _$('.body__list-movie-set').style.display = 'none'
        _$('.body__list-movie-cinema').style.display = 'none'

        _$('.body__item-btn-1').classList.remove('choose')
        _$('.body__item-btn-2').classList.remove('choose')
        _$('.body__item-btn-3').classList.remove('choose')
        _$('.body__item-btn-4').classList.remove('choose')

        _$('.body__list-movie-title-new').style.display = 'none'
        _$('.body__list-movie-title-odd').style.display = 'none'
        _$('.body__list-movie-title-set').style.display = 'none'
        _$('.body__list-movie-title-cinema').style.display = 'none'

        _$('.body__list-movie-title-action').style.display = 'none'
        _$('.body__list-movie-title-fiction').style.display = 'none'
        _$('.body__list-movie-title-adventure').style.display = 'none'
        _$('.body__list-movie-title-honor').style.display = 'none'
        _$('.body__list-movie-title-romance').style.display = 'none'
        _$('.body__list-movie-title-humor').style.display = 'none'
        _$('.body__list-movie-title-kungfu').style.display = 'none'
        _$('.body__list-movie-title-cartoon').style.display = 'flex'
        _$('.body__list-movie-title-crimial').style.display = 'none'
        _$('.body__list-movie-title-war').style.display = 'none'
        _$('.body__list-movie-title-family').style.display = 'none'
        _$('.body__list-movie-title-mentality').style.display = 'none'
        _$('.body__list-movie-title-mystic').style.display = 'none'
        _$('.body__list-movie-title-spirituality').style.display = 'none'
        _$('.body__list-movie-title-zombie').style.display = 'none'
        _$('.body__list-movie-title-search').style.display = 'none'

        _$('.body__list-movie-action').style.display = 'none'
        _$('.body__list-movie-fiction').style.display = 'none'
        _$('.body__list-movie-adventure').style.display = 'none'
        _$('.body__list-movie-honor').style.display = 'none'
        _$('.body__list-movie-romance').style.display = 'none'
        _$('.body__list-movie-humor').style.display = 'none'
        _$('.body__list-movie-kungfu').style.display = 'none'
        _$('.body__list-movie-cartoon').style.display = 'flex'
        _$('.body__list-movie-crimial').style.display = 'none'
        _$('.body__list-movie-war').style.display = 'none'
        _$('.body__list-movie-family').style.display = 'none'
        _$('.body__list-movie-mentality').style.display = 'none'
        _$('.body__list-movie-mystic').style.display = 'none'
        _$('.body__list-movie-spirituality').style.display = 'none'
        _$('.body__list-movie-zombie').style.display = 'none'
        _$('.body__list-movie-search').style.display = 'none'
    }, 500)
}

function moviesCrimial() {
    watching = false;
    statusParent[0].classList.remove('active')
    statusParent[1].classList.remove('active')
    statusParent[2].classList.remove('active')
    statusParent[3].classList.remove('active')
    statusParent[4].classList.remove('active')
    statusParent[5].classList.remove('active')
    statusParent[6].classList.remove('active')
    _$('.loader').style.display = 'block'
    setTimeout(function() {
        _$('.star-1').classList.remove('active-star')
        _$('.star-2').classList.remove('active-star')
        _$('.star-3').classList.remove('active-star')
        _$('.star-4').classList.remove('active-star')
        _$('.star-5').classList.remove('active-star')
        _$('.point-user').innerHTML = 'Đánh giá phim'
        _$('.input-form').value = null;
        if (_$('.autocom-box')) {
            _$('.autocom-box').classList.remove('active')
            _$('.autocom-box').classList.remove('show')
        }
        _$('.search-input').classList.remove('active')
        _$('.loader').style.display = 'none';
        _$('.menu_navbar').style.transform = 'translateX(-100%)'
        _$('.body__trailer-video').src = null
        _$('.body__moving').src = null
        _$('.body__movie-trailer').style.display = 'block'
        _$('.body__intro-main').style.display = 'none'
        _$('.body__comment').style.display = 'none'
        _$('.body__intro-desc-main').style.display = 'none'
        _$('.body__movie-video').style.display = 'none'
        _$('#body').style.display = 'block'
        _$('#body__watch').style.display = 'none'
        _$('.loader').style.display = 'none'
        window.scrollTo({ top: 777 })
        document.title = 'Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất'

        _$('.body__list-movie-new').style.display = 'none'
        _$('.body__list-movie-odd').style.display = 'none'
        _$('.body__list-movie-set').style.display = 'none'
        _$('.body__list-movie-cinema').style.display = 'none'

        _$('.body__item-btn-1').classList.remove('choose')
        _$('.body__item-btn-2').classList.remove('choose')
        _$('.body__item-btn-3').classList.remove('choose')
        _$('.body__item-btn-4').classList.remove('choose')

        _$('.body__list-movie-title-new').style.display = 'none'
        _$('.body__list-movie-title-odd').style.display = 'none'
        _$('.body__list-movie-title-set').style.display = 'none'
        _$('.body__list-movie-title-cinema').style.display = 'none'

        _$('.body__list-movie-title-action').style.display = 'none'
        _$('.body__list-movie-title-fiction').style.display = 'none'
        _$('.body__list-movie-title-adventure').style.display = 'none'
        _$('.body__list-movie-title-honor').style.display = 'none'
        _$('.body__list-movie-title-romance').style.display = 'none'
        _$('.body__list-movie-title-humor').style.display = 'none'
        _$('.body__list-movie-title-kungfu').style.display = 'none'
        _$('.body__list-movie-title-cartoon').style.display = 'none'
        _$('.body__list-movie-title-crimial').style.display = 'flex'
        _$('.body__list-movie-title-war').style.display = 'none'
        _$('.body__list-movie-title-family').style.display = 'none'
        _$('.body__list-movie-title-mentality').style.display = 'none'
        _$('.body__list-movie-title-mystic').style.display = 'none'
        _$('.body__list-movie-title-spirituality').style.display = 'none'
        _$('.body__list-movie-title-zombie').style.display = 'none'
        _$('.body__list-movie-title-search').style.display = 'none'

        _$('.body__list-movie-action').style.display = 'none'
        _$('.body__list-movie-fiction').style.display = 'none'
        _$('.body__list-movie-adventure').style.display = 'none'
        _$('.body__list-movie-honor').style.display = 'none'
        _$('.body__list-movie-romance').style.display = 'none'
        _$('.body__list-movie-humor').style.display = 'none'
        _$('.body__list-movie-kungfu').style.display = 'none'
        _$('.body__list-movie-cartoon').style.display = 'none'
        _$('.body__list-movie-crimial').style.display = 'flex'
        _$('.body__list-movie-war').style.display = 'none'
        _$('.body__list-movie-family').style.display = 'none'
        _$('.body__list-movie-mentality').style.display = 'none'
        _$('.body__list-movie-mystic').style.display = 'none'
        _$('.body__list-movie-spirituality').style.display = 'none'
        _$('.body__list-movie-zombie').style.display = 'none'
        _$('.body__list-movie-search').style.display = 'none'
    }, 500)
}

function moviesWar() {
    watching = false;
    statusParent[0].classList.remove('active')
    statusParent[1].classList.remove('active')
    statusParent[2].classList.remove('active')
    statusParent[3].classList.remove('active')
    statusParent[4].classList.remove('active')
    statusParent[5].classList.remove('active')
    statusParent[6].classList.remove('active')
    _$('.loader').style.display = 'block'
    setTimeout(function() {
        _$('.star-1').classList.remove('active-star')
        _$('.star-2').classList.remove('active-star')
        _$('.star-3').classList.remove('active-star')
        _$('.star-4').classList.remove('active-star')
        _$('.star-5').classList.remove('active-star')
        _$('.point-user').innerHTML = 'Đánh giá phim'
        _$('.input-form').value = null;
        if (_$('.autocom-box')) {
            _$('.autocom-box').classList.remove('active')
            _$('.autocom-box').classList.remove('show')
        }
        _$('.search-input').classList.remove('active')
        _$('.loader').style.display = 'none';
        _$('.menu_navbar').style.transform = 'translateX(-100%)'
        _$('.body__trailer-video').src = null
        _$('.body__moving').src = null
        _$('.body__movie-trailer').style.display = 'block'
        _$('.body__intro-main').style.display = 'none'
        _$('.body__comment').style.display = 'none'
        _$('.body__intro-desc-main').style.display = 'none'
        _$('.body__movie-video').style.display = 'none'
        _$('#body').style.display = 'block'
        _$('#body__watch').style.display = 'none'
        _$('.loader').style.display = 'none'
        window.scrollTo({ top: 777 })
        document.title = 'Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất'

        _$('.body__list-movie-new').style.display = 'none'
        _$('.body__list-movie-odd').style.display = 'none'
        _$('.body__list-movie-set').style.display = 'none'
        _$('.body__list-movie-cinema').style.display = 'none'

        _$('.body__item-btn-1').classList.remove('choose')
        _$('.body__item-btn-2').classList.remove('choose')
        _$('.body__item-btn-3').classList.remove('choose')
        _$('.body__item-btn-4').classList.remove('choose')

        _$('.body__list-movie-title-new').style.display = 'none'
        _$('.body__list-movie-title-odd').style.display = 'none'
        _$('.body__list-movie-title-set').style.display = 'none'
        _$('.body__list-movie-title-cinema').style.display = 'none'

        _$('.body__list-movie-title-action').style.display = 'none'
        _$('.body__list-movie-title-fiction').style.display = 'none'
        _$('.body__list-movie-title-adventure').style.display = 'none'
        _$('.body__list-movie-title-honor').style.display = 'none'
        _$('.body__list-movie-title-romance').style.display = 'none'
        _$('.body__list-movie-title-humor').style.display = 'none'
        _$('.body__list-movie-title-kungfu').style.display = 'none'
        _$('.body__list-movie-title-cartoon').style.display = 'none'
        _$('.body__list-movie-title-crimial').style.display = 'none'
        _$('.body__list-movie-title-war').style.display = 'flex'
        _$('.body__list-movie-title-family').style.display = 'none'
        _$('.body__list-movie-title-mentality').style.display = 'none'
        _$('.body__list-movie-title-mystic').style.display = 'none'
        _$('.body__list-movie-title-spirituality').style.display = 'none'
        _$('.body__list-movie-title-zombie').style.display = 'none'
        _$('.body__list-movie-title-search').style.display = 'none'

        _$('.body__list-movie-action').style.display = 'none'
        _$('.body__list-movie-fiction').style.display = 'none'
        _$('.body__list-movie-adventure').style.display = 'none'
        _$('.body__list-movie-honor').style.display = 'none'
        _$('.body__list-movie-romance').style.display = 'none'
        _$('.body__list-movie-humor').style.display = 'none'
        _$('.body__list-movie-kungfu').style.display = 'none'
        _$('.body__list-movie-cartoon').style.display = 'none'
        _$('.body__list-movie-crimial').style.display = 'none'
        _$('.body__list-movie-war').style.display = 'flex'
        _$('.body__list-movie-family').style.display = 'none'
        _$('.body__list-movie-mentality').style.display = 'none'
        _$('.body__list-movie-mystic').style.display = 'none'
        _$('.body__list-movie-spirituality').style.display = 'none'
        _$('.body__list-movie-zombie').style.display = 'none'
        _$('.body__list-movie-search').style.display = 'none'
    }, 500)
}

function moviesFamily() {
    watching = false;
    statusParent[0].classList.remove('active')
    statusParent[1].classList.remove('active')
    statusParent[2].classList.remove('active')
    statusParent[3].classList.remove('active')
    statusParent[4].classList.remove('active')
    statusParent[5].classList.remove('active')
    statusParent[6].classList.remove('active')
    _$('.loader').style.display = 'block'
    setTimeout(function() {
        _$('.star-1').classList.remove('active-star')
        _$('.star-2').classList.remove('active-star')
        _$('.star-3').classList.remove('active-star')
        _$('.star-4').classList.remove('active-star')
        _$('.star-5').classList.remove('active-star')
        _$('.point-user').innerHTML = 'Đánh giá phim'
        _$('.input-form').value = null;
        if (_$('.autocom-box')) {
            _$('.autocom-box').classList.remove('active')
            _$('.autocom-box').classList.remove('show')
        }
        _$('.search-input').classList.remove('active')
        _$('.loader').style.display = 'none';
        _$('.menu_navbar').style.transform = 'translateX(-100%)'
        _$('.body__trailer-video').src = null
        _$('.body__moving').src = null
        _$('.body__movie-trailer').style.display = 'block'
        _$('.body__intro-main').style.display = 'none'
        _$('.body__comment').style.display = 'none'
        _$('.body__intro-desc-main').style.display = 'none'
        _$('.body__movie-video').style.display = 'none'
        _$('#body').style.display = 'block'
        _$('#body__watch').style.display = 'none'
        _$('.loader').style.display = 'none'
        window.scrollTo({ top: 777 })
        document.title = 'Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất'

        _$('.body__list-movie-new').style.display = 'none'
        _$('.body__list-movie-odd').style.display = 'none'
        _$('.body__list-movie-set').style.display = 'none'
        _$('.body__list-movie-cinema').style.display = 'none'

        _$('.body__item-btn-1').classList.remove('choose')
        _$('.body__item-btn-2').classList.remove('choose')
        _$('.body__item-btn-3').classList.remove('choose')
        _$('.body__item-btn-4').classList.remove('choose')

        _$('.body__list-movie-title-new').style.display = 'none'
        _$('.body__list-movie-title-odd').style.display = 'none'
        _$('.body__list-movie-title-set').style.display = 'none'
        _$('.body__list-movie-title-cinema').style.display = 'none'

        _$('.body__list-movie-title-action').style.display = 'none'
        _$('.body__list-movie-title-fiction').style.display = 'none'
        _$('.body__list-movie-title-adventure').style.display = 'none'
        _$('.body__list-movie-title-honor').style.display = 'none'
        _$('.body__list-movie-title-romance').style.display = 'none'
        _$('.body__list-movie-title-humor').style.display = 'none'
        _$('.body__list-movie-title-kungfu').style.display = 'none'
        _$('.body__list-movie-title-cartoon').style.display = 'none'
        _$('.body__list-movie-title-crimial').style.display = 'none'
        _$('.body__list-movie-title-war').style.display = 'none'
        _$('.body__list-movie-title-family').style.display = 'flex'
        _$('.body__list-movie-title-mentality').style.display = 'none'
        _$('.body__list-movie-title-mystic').style.display = 'none'
        _$('.body__list-movie-title-spirituality').style.display = 'none'
        _$('.body__list-movie-title-zombie').style.display = 'none'
        _$('.body__list-movie-title-search').style.display = 'none'

        _$('.body__list-movie-action').style.display = 'none'
        _$('.body__list-movie-fiction').style.display = 'none'
        _$('.body__list-movie-adventure').style.display = 'none'
        _$('.body__list-movie-honor').style.display = 'none'
        _$('.body__list-movie-romance').style.display = 'none'
        _$('.body__list-movie-humor').style.display = 'none'
        _$('.body__list-movie-kungfu').style.display = 'none'
        _$('.body__list-movie-cartoon').style.display = 'none'
        _$('.body__list-movie-crimial').style.display = 'none'
        _$('.body__list-movie-war').style.display = 'none'
        _$('.body__list-movie-family').style.display = 'flex'
        _$('.body__list-movie-mentality').style.display = 'none'
        _$('.body__list-movie-mystic').style.display = 'none'
        _$('.body__list-movie-spirituality').style.display = 'none'
        _$('.body__list-movie-zombie').style.display = 'none'
        _$('.body__list-movie-search').style.display = 'none'
    }, 500)

}

function moviesMentality() {
    watching = false;
    statusParent[0].classList.remove('active')
    statusParent[1].classList.remove('active')
    statusParent[2].classList.remove('active')
    statusParent[3].classList.remove('active')
    statusParent[4].classList.remove('active')
    statusParent[5].classList.remove('active')
    statusParent[6].classList.remove('active')
    _$('.loader').style.display = 'block'
    setTimeout(function() {
        _$('.star-1').classList.remove('active-star')
        _$('.star-2').classList.remove('active-star')
        _$('.star-3').classList.remove('active-star')
        _$('.star-4').classList.remove('active-star')
        _$('.star-5').classList.remove('active-star')
        _$('.point-user').innerHTML = 'Đánh giá phim'
        _$('.input-form').value = null;
        if (_$('.autocom-box')) {
            _$('.autocom-box').classList.remove('active')
            _$('.autocom-box').classList.remove('show')
        }
        _$('.search-input').classList.remove('active')
        _$('.loader').style.display = 'none';
        _$('.menu_navbar').style.transform = 'translateX(-100%)'
        _$('.body__trailer-video').src = null
        _$('.body__moving').src = null
        _$('.body__movie-trailer').style.display = 'block'
        _$('.body__intro-main').style.display = 'none'
        _$('.body__comment').style.display = 'none'
        _$('.body__intro-desc-main').style.display = 'none'
        _$('.body__movie-video').style.display = 'none'
        _$('#body').style.display = 'block'
        _$('#body__watch').style.display = 'none'
        _$('.loader').style.display = 'none'
        window.scrollTo({ top: 777 })
        document.title = 'Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất'

        _$('.body__list-movie-new').style.display = 'none'
        _$('.body__list-movie-odd').style.display = 'none'
        _$('.body__list-movie-set').style.display = 'none'
        _$('.body__list-movie-cinema').style.display = 'none'

        _$('.body__item-btn-1').classList.remove('choose')
        _$('.body__item-btn-2').classList.remove('choose')
        _$('.body__item-btn-3').classList.remove('choose')
        _$('.body__item-btn-4').classList.remove('choose')

        _$('.body__list-movie-title-new').style.display = 'none'
        _$('.body__list-movie-title-odd').style.display = 'none'
        _$('.body__list-movie-title-set').style.display = 'none'
        _$('.body__list-movie-title-cinema').style.display = 'none'

        _$('.body__list-movie-title-action').style.display = 'none'
        _$('.body__list-movie-title-fiction').style.display = 'none'
        _$('.body__list-movie-title-adventure').style.display = 'none'
        _$('.body__list-movie-title-honor').style.display = 'none'
        _$('.body__list-movie-title-romance').style.display = 'none'
        _$('.body__list-movie-title-humor').style.display = 'none'
        _$('.body__list-movie-title-kungfu').style.display = 'none'
        _$('.body__list-movie-title-cartoon').style.display = 'none'
        _$('.body__list-movie-title-crimial').style.display = 'none'
        _$('.body__list-movie-title-war').style.display = 'none'
        _$('.body__list-movie-title-family').style.display = 'none'
        _$('.body__list-movie-title-mentality').style.display = 'flex'
        _$('.body__list-movie-title-mystic').style.display = 'none'
        _$('.body__list-movie-title-spirituality').style.display = 'none'
        _$('.body__list-movie-title-zombie').style.display = 'none'
        _$('.body__list-movie-title-search').style.display = 'none'

        _$('.body__list-movie-action').style.display = 'none'
        _$('.body__list-movie-fiction').style.display = 'none'
        _$('.body__list-movie-adventure').style.display = 'none'
        _$('.body__list-movie-honor').style.display = 'none'
        _$('.body__list-movie-romance').style.display = 'none'
        _$('.body__list-movie-humor').style.display = 'none'
        _$('.body__list-movie-kungfu').style.display = 'none'
        _$('.body__list-movie-cartoon').style.display = 'none'
        _$('.body__list-movie-crimial').style.display = 'none'
        _$('.body__list-movie-war').style.display = 'none'
        _$('.body__list-movie-family').style.display = 'none'
        _$('.body__list-movie-mentality').style.display = 'flex'
        _$('.body__list-movie-mystic').style.display = 'none'
        _$('.body__list-movie-spirituality').style.display = 'none'
        _$('.body__list-movie-zombie').style.display = 'none'
        _$('.body__list-movie-search').style.display = 'none'
    }, 500)

}

function moviesMystic() {
    watching = false;
    statusParent[0].classList.remove('active')
    statusParent[1].classList.remove('active')
    statusParent[2].classList.remove('active')
    statusParent[3].classList.remove('active')
    statusParent[4].classList.remove('active')
    statusParent[5].classList.remove('active')
    statusParent[6].classList.remove('active')
    _$('.loader').style.display = 'block'
    setTimeout(function() {
        _$('.star-1').classList.remove('active-star')
        _$('.star-2').classList.remove('active-star')
        _$('.star-3').classList.remove('active-star')
        _$('.star-4').classList.remove('active-star')
        _$('.star-5').classList.remove('active-star')
        _$('.point-user').innerHTML = 'Đánh giá phim'
        _$('.input-form').value = null;
        if (_$('.autocom-box')) {
            _$('.autocom-box').classList.remove('active')
            _$('.autocom-box').classList.remove('show')
        }
        _$('.search-input').classList.remove('active')
        _$('.loader').style.display = 'none';
        _$('.menu_navbar').style.transform = 'translateX(-100%)'
        _$('.body__trailer-video').src = null
        _$('.body__moving').src = null
        _$('.body__movie-trailer').style.display = 'block'
        _$('.body__intro-main').style.display = 'none'
        _$('.body__comment').style.display = 'none'
        _$('.body__intro-desc-main').style.display = 'none'
        _$('.body__movie-video').style.display = 'none'
        _$('#body').style.display = 'block'
        _$('#body__watch').style.display = 'none'
        _$('.loader').style.display = 'none'
        window.scrollTo({ top: 777 })
        document.title = 'Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất'

        _$('.body__list-movie-new').style.display = 'none'
        _$('.body__list-movie-odd').style.display = 'none'
        _$('.body__list-movie-set').style.display = 'none'
        _$('.body__list-movie-cinema').style.display = 'none'

        _$('.body__item-btn-1').classList.remove('choose')
        _$('.body__item-btn-2').classList.remove('choose')
        _$('.body__item-btn-3').classList.remove('choose')
        _$('.body__item-btn-4').classList.remove('choose')

        _$('.body__list-movie-title-new').style.display = 'none'
        _$('.body__list-movie-title-odd').style.display = 'none'
        _$('.body__list-movie-title-set').style.display = 'none'
        _$('.body__list-movie-title-cinema').style.display = 'none'

        _$('.body__list-movie-title-action').style.display = 'none'
        _$('.body__list-movie-title-fiction').style.display = 'none'
        _$('.body__list-movie-title-adventure').style.display = 'none'
        _$('.body__list-movie-title-honor').style.display = 'none'
        _$('.body__list-movie-title-romance').style.display = 'none'
        _$('.body__list-movie-title-humor').style.display = 'none'
        _$('.body__list-movie-title-kungfu').style.display = 'none'
        _$('.body__list-movie-title-cartoon').style.display = 'none'
        _$('.body__list-movie-title-crimial').style.display = 'none'
        _$('.body__list-movie-title-war').style.display = 'none'
        _$('.body__list-movie-title-family').style.display = 'none'
        _$('.body__list-movie-title-mentality').style.display = 'none'
        _$('.body__list-movie-title-mystic').style.display = 'flex'
        _$('.body__list-movie-title-spirituality').style.display = 'none'
        _$('.body__list-movie-title-zombie').style.display = 'none'
        _$('.body__list-movie-title-search').style.display = 'none'

        _$('.body__list-movie-action').style.display = 'none'
        _$('.body__list-movie-fiction').style.display = 'none'
        _$('.body__list-movie-adventure').style.display = 'none'
        _$('.body__list-movie-honor').style.display = 'none'
        _$('.body__list-movie-romance').style.display = 'none'
        _$('.body__list-movie-humor').style.display = 'none'
        _$('.body__list-movie-kungfu').style.display = 'none'
        _$('.body__list-movie-cartoon').style.display = 'none'
        _$('.body__list-movie-crimial').style.display = 'none'
        _$('.body__list-movie-war').style.display = 'none'
        _$('.body__list-movie-family').style.display = 'none'
        _$('.body__list-movie-mentality').style.display = 'none'
        _$('.body__list-movie-mystic').style.display = 'flex'
        _$('.body__list-movie-spirituality').style.display = 'none'
        _$('.body__list-movie-zombie').style.display = 'none'
        _$('.body__list-movie-search').style.display = 'none'
    }, 500)

}

function moviesSpirituality() {
    watching = false;
    statusParent[0].classList.remove('active')
    statusParent[1].classList.remove('active')
    statusParent[2].classList.remove('active')
    statusParent[3].classList.remove('active')
    statusParent[4].classList.remove('active')
    statusParent[5].classList.remove('active')
    statusParent[6].classList.remove('active')
    _$('.loader').style.display = 'block'
    setTimeout(function() {
        _$('.star-1').classList.remove('active-star')
        _$('.star-2').classList.remove('active-star')
        _$('.star-3').classList.remove('active-star')
        _$('.star-4').classList.remove('active-star')
        _$('.star-5').classList.remove('active-star')
        _$('.point-user').innerHTML = 'Đánh giá phim'
        _$('.input-form').value = null;
        if (_$('.autocom-box')) {
            _$('.autocom-box').classList.remove('active')
            _$('.autocom-box').classList.remove('show')
        }
        _$('.search-input').classList.remove('active')
        _$('.loader').style.display = 'none';
        _$('.menu_navbar').style.transform = 'translateX(-100%)'
        _$('.body__trailer-video').src = null
        _$('.body__moving').src = null
        _$('.body__movie-trailer').style.display = 'block'
        _$('.body__intro-main').style.display = 'none'
        _$('.body__comment').style.display = 'none'
        _$('.body__intro-desc-main').style.display = 'none'
        _$('.body__movie-video').style.display = 'none'
        _$('#body').style.display = 'block'
        _$('#body__watch').style.display = 'none'
        _$('.loader').style.display = 'none'
        window.scrollTo({ top: 777 })
        document.title = 'Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất'

        _$('.body__list-movie-new').style.display = 'none'
        _$('.body__list-movie-odd').style.display = 'none'
        _$('.body__list-movie-set').style.display = 'none'
        _$('.body__list-movie-cinema').style.display = 'none'

        _$('.body__item-btn-1').classList.remove('choose')
        _$('.body__item-btn-2').classList.remove('choose')
        _$('.body__item-btn-3').classList.remove('choose')
        _$('.body__item-btn-4').classList.remove('choose')

        _$('.body__list-movie-title-new').style.display = 'none'
        _$('.body__list-movie-title-odd').style.display = 'none'
        _$('.body__list-movie-title-set').style.display = 'none'
        _$('.body__list-movie-title-cinema').style.display = 'none'

        _$('.body__list-movie-title-action').style.display = 'none'
        _$('.body__list-movie-title-fiction').style.display = 'none'
        _$('.body__list-movie-title-adventure').style.display = 'none'
        _$('.body__list-movie-title-honor').style.display = 'none'
        _$('.body__list-movie-title-romance').style.display = 'none'
        _$('.body__list-movie-title-humor').style.display = 'none'
        _$('.body__list-movie-title-kungfu').style.display = 'none'
        _$('.body__list-movie-title-cartoon').style.display = 'none'
        _$('.body__list-movie-title-crimial').style.display = 'none'
        _$('.body__list-movie-title-war').style.display = 'none'
        _$('.body__list-movie-title-family').style.display = 'none'
        _$('.body__list-movie-title-mentality').style.display = 'none'
        _$('.body__list-movie-title-mystic').style.display = 'none'
        _$('.body__list-movie-title-spirituality').style.display = 'flex'
        _$('.body__list-movie-title-zombie').style.display = 'none'
        _$('.body__list-movie-title-search').style.display = 'none'

        _$('.body__list-movie-action').style.display = 'none'
        _$('.body__list-movie-fiction').style.display = 'none'
        _$('.body__list-movie-adventure').style.display = 'none'
        _$('.body__list-movie-honor').style.display = 'none'
        _$('.body__list-movie-romance').style.display = 'none'
        _$('.body__list-movie-humor').style.display = 'none'
        _$('.body__list-movie-kungfu').style.display = 'none'
        _$('.body__list-movie-cartoon').style.display = 'none'
        _$('.body__list-movie-crimial').style.display = 'none'
        _$('.body__list-movie-war').style.display = 'none'
        _$('.body__list-movie-family').style.display = 'none'
        _$('.body__list-movie-mentality').style.display = 'none'
        _$('.body__list-movie-mystic').style.display = 'none'
        _$('.body__list-movie-spirituality').style.display = 'flex'
        _$('.body__list-movie-zombie').style.display = 'none'
        _$('.body__list-movie-search').style.display = 'none'
    }, 500)
}

function moviesZombie() {
    watching = false;
    statusParent[0].classList.remove('active')
    statusParent[1].classList.remove('active')
    statusParent[2].classList.remove('active')
    statusParent[3].classList.remove('active')
    statusParent[4].classList.remove('active')
    statusParent[5].classList.remove('active')
    statusParent[6].classList.remove('active')
    _$('.loader').style.display = 'block'
    setTimeout(function() {
        _$('.star-1').classList.remove('active-star')
        _$('.star-2').classList.remove('active-star')
        _$('.star-3').classList.remove('active-star')
        _$('.star-4').classList.remove('active-star')
        _$('.star-5').classList.remove('active-star')
        _$('.point-user').innerHTML = 'Đánh giá phim'
        _$('.input-form').value = null;
        if (_$('.autocom-box')) {
            _$('.autocom-box').classList.remove('active')
            _$('.autocom-box').classList.remove('show')
        }
        _$('.search-input').classList.remove('active')
        _$('.loader').style.display = 'none';
        _$('.menu_navbar').style.transform = 'translateX(-100%)'
        _$('.body__trailer-video').src = null
        _$('.body__moving').src = null
        _$('.body__movie-trailer').style.display = 'block'
        _$('.body__intro-main').style.display = 'none'
        _$('.body__comment').style.display = 'none'
        _$('.body__intro-desc-main').style.display = 'none'
        _$('.body__movie-video').style.display = 'none'
        _$('#body').style.display = 'block'
        _$('#body__watch').style.display = 'none'
        _$('.loader').style.display = 'none'
        window.scrollTo({ top: 777 })
        document.title = 'Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất'

        _$('.body__list-movie-new').style.display = 'none'
        _$('.body__list-movie-odd').style.display = 'none'
        _$('.body__list-movie-set').style.display = 'none'
        _$('.body__list-movie-cinema').style.display = 'none'

        _$('.body__item-btn-1').classList.remove('choose')
        _$('.body__item-btn-2').classList.remove('choose')
        _$('.body__item-btn-3').classList.remove('choose')
        _$('.body__item-btn-4').classList.remove('choose')

        _$('.body__list-movie-title-new').style.display = 'none'
        _$('.body__list-movie-title-odd').style.display = 'none'
        _$('.body__list-movie-title-set').style.display = 'none'
        _$('.body__list-movie-title-cinema').style.display = 'none'
        _$('.body__list-movie-title-action').style.display = 'none'
        _$('.body__list-movie-title-fiction').style.display = 'none'
        _$('.body__list-movie-title-adventure').style.display = 'none'
        _$('.body__list-movie-title-honor').style.display = 'none'
        _$('.body__list-movie-title-romance').style.display = 'none'
        _$('.body__list-movie-title-humor').style.display = 'none'
        _$('.body__list-movie-title-kungfu').style.display = 'none'
        _$('.body__list-movie-title-cartoon').style.display = 'none'
        _$('.body__list-movie-title-crimial').style.display = 'none'
        _$('.body__list-movie-title-war').style.display = 'none'
        _$('.body__list-movie-title-family').style.display = 'none'
        _$('.body__list-movie-title-mentality').style.display = 'none'
        _$('.body__list-movie-title-mystic').style.display = 'none'
        _$('.body__list-movie-title-spirituality').style.display = 'none'
        _$('.body__list-movie-title-zombie').style.display = 'flex'
        _$('.body__list-movie-title-search').style.display = 'none'

        _$('.body__list-movie-action').style.display = 'none'
        _$('.body__list-movie-fiction').style.display = 'none'
        _$('.body__list-movie-adventure').style.display = 'none'
        _$('.body__list-movie-honor').style.display = 'none'
        _$('.body__list-movie-romance').style.display = 'none'
        _$('.body__list-movie-humor').style.display = 'none'
        _$('.body__list-movie-kungfu').style.display = 'none'
        _$('.body__list-movie-cartoon').style.display = 'none'
        _$('.body__list-movie-crimial').style.display = 'none'
        _$('.body__list-movie-war').style.display = 'none'
        _$('.body__list-movie-family').style.display = 'none'
        _$('.body__list-movie-mentality').style.display = 'none'
        _$('.body__list-movie-mystic').style.display = 'none'
        _$('.body__list-movie-spirituality').style.display = 'none'
        _$('.body__list-movie-zombie').style.display = 'flex'
        _$('.body__list-movie-search').style.display = 'none'

    }, 500)
}


function moviesSearch() {
    watching = false;
    _$('.loader').style.display = 'block'
    setTimeout(function() {
        suggBox.classList.remove('active')
        input.classList.remove('active')
        _$('.body__trailer-video').src = null
        _$('.body__moving').src = null
        _$('.body__movie-trailer').style.display = 'block'
        _$('.body__intro-main').style.display = 'none'
        _$('.body__comment').style.display = 'none'
        _$('.body__intro-desc-main').style.display = 'none'
        _$('.body__movie-video').style.display = 'none'
        _$('#body').style.display = 'block'
        _$('#body__watch').style.display = 'none'
        _$('.loader').style.display = 'none'
        window.scrollTo({ top: 777 })
        document.title = 'Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất'

        _$('.body__list-movie-new').style.display = 'none'
        _$('.body__list-movie-odd').style.display = 'none'
        _$('.body__list-movie-set').style.display = 'none'
        _$('.body__list-movie-cinema').style.display = 'none'

        _$('.body__item-btn-1').classList.remove('choose')
        _$('.body__item-btn-2').classList.remove('choose')
        _$('.body__item-btn-3').classList.remove('choose')
        _$('.body__item-btn-4').classList.remove('choose')

        _$('.body__list-movie-title-new').style.display = 'none'
        _$('.body__list-movie-title-odd').style.display = 'none'
        _$('.body__list-movie-title-set').style.display = 'none'
        _$('.body__list-movie-title-cinema').style.display = 'none'
        _$('.body__list-movie-title-action').style.display = 'none'
        _$('.body__list-movie-title-fiction').style.display = 'none'
        _$('.body__list-movie-title-adventure').style.display = 'none'
        _$('.body__list-movie-title-honor').style.display = 'none'
        _$('.body__list-movie-title-romance').style.display = 'none'
        _$('.body__list-movie-title-humor').style.display = 'none'
        _$('.body__list-movie-title-kungfu').style.display = 'none'
        _$('.body__list-movie-title-cartoon').style.display = 'none'
        _$('.body__list-movie-title-crimial').style.display = 'none'
        _$('.body__list-movie-title-war').style.display = 'none'
        _$('.body__list-movie-title-family').style.display = 'none'
        _$('.body__list-movie-title-mentality').style.display = 'none'
        _$('.body__list-movie-title-mystic').style.display = 'none'
        _$('.body__list-movie-title-spirituality').style.display = 'none'
        _$('.body__list-movie-title-zombie').style.display = 'none'
        _$('.body__list-movie-title-search').style.display = 'flex'

        _$('.body__list-movie-action').style.display = 'none'
        _$('.body__list-movie-fiction').style.display = 'none'
        _$('.body__list-movie-adventure').style.display = 'none'
        _$('.body__list-movie-honor').style.display = 'none'
        _$('.body__list-movie-romance').style.display = 'none'
        _$('.body__list-movie-humor').style.display = 'none'
        _$('.body__list-movie-kungfu').style.display = 'none'
        _$('.body__list-movie-cartoon').style.display = 'none'
        _$('.body__list-movie-crimial').style.display = 'none'
        _$('.body__list-movie-war').style.display = 'none'
        _$('.body__list-movie-family').style.display = 'none'
        _$('.body__list-movie-mentality').style.display = 'none'
        _$('.body__list-movie-mystic').style.display = 'none'
        _$('.body__list-movie-spirituality').style.display = 'none'
        _$('.body__list-movie-zombie').style.display = 'none'
        _$('.body__list-movie-search').style.display = 'flex'

    }, 500)
}

// slider auto
function sliderAuto() {
    let i = Math.ceil(images[0].offsetLeft / images[0].offsetWidth);
    setInterval(function() {
        if (i <= -(images.length - 1)) i = 1;
        i = i - 1;
        images.forEach((image) => (image.style.left = i * 100 + '%'));
        _$$('.dot__item.active')[0].classList.remove('active');
        _$$('.dot__item')[-i].classList.add('active');
    }, 5000);
}
sliderAuto();

// slider controller
_$$('.next__btn')[0].onclick = () => {
    let i = Math.ceil(images[0].offsetLeft / images[0].offsetWidth);
    if (i <= -(images.length - 1)) i = 1;
    i = i - 1;
    images.forEach((image) => (image.style.left = i * 100 + '%'));
    _$$('.dot__item.active')[0].classList.remove('active');
    _$$('.dot__item')[-i].classList.add('active');
};
_$$('.prev__btn')[0].onclick = () => {
    let i = Math.ceil(images[0].offsetLeft / images[0].offsetWidth);
    if (i === 0) i = -images.length;
    i = i + 1;
    images.forEach((image) => (image.style.left = i * 100 + '%'));
    _$$('.dot__item.active')[0].classList.remove('active');
    _$$('.dot__item')[-i].classList.add('active');
};
_$$('.dot__item').forEach((dot, index) => {
    dot.onclick = () => {
        _$$('.dot__item.active')[0].classList.remove('active');
        dot.classList.add('active');
        images.forEach((image) => (image.style.left = -index * 100 + '%'));
    };
});

//event slider

// show menu

function showMenu() {
    _$('.menu_navbar-bar').style.display = 'none';
    _$('.menu_navbar').style.transform = 'translateX(0)'
}

function hideMenu() {
    _$('.menu_navbar').style.transform = 'translateX(-100%)'
}
_$('.menu_navbar-bar').addEventListener('click', showMenu)
_$('.menu_navbar-close').addEventListener('click', hideMenu)

// NAVBAR MENU
const buttonScroll = _$('.navbar__scrollY');


// Sroll to Top
function handleScrollY() {

    let scrollTop = document.createElement('img')
    scrollTop.src = 'assets/img/rocket.png'

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        buttonScroll.style.transform = `translateY(-5000px)`
            // rainElements.style.display = 'flex';
    }

    // handle CLick
    buttonScroll.addEventListener('click', handleClick)
    buttonScroll.appendChild(scrollTop)
};



//handle scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        buttonScroll.style.display = 'flex';
    } else if (window.scrollY < 300) {
        buttonScroll.style.transform = 'translateY(0)'
        buttonScroll.style.display = 'none';

    } else {
        buttonScroll.style.display = 'none';
    }
})


//hadle loader 

function loadingFn() {
    const body = _$('body')
    const loader = document.createElement('div')
    const loading = document.createElement('div')
    const logo = document.createElement('div')
    const h1 = document.createElement('h1')
    const span1 = document.createElement('span')
    const span2 = document.createElement('span')
    const span3 = document.createElement('span')
    const span4 = document.createElement('span')
    const span5 = document.createElement('span')
    const span6 = document.createElement('span')
    const span7 = document.createElement('span')
    const span8 = document.createElement('span')
    const span9 = document.createElement('span')
    const span10 = document.createElement('span')
    span1.innerText = 'L';
    span2.innerText = 'o';
    span3.innerText = 'a';
    span4.innerText = 'd';
    span5.innerText = 'i';
    span6.innerText = 'n';
    span7.innerText = 'g';
    span8.innerText = '.';
    span9.innerText = '.';
    span10.innerText = '.';
    logo.setAttribute('class', 'header__logo')
    loading.setAttribute("class", "loading");
    loader.setAttribute("class", "loader");


    logo.appendChild(h1)
    h1.appendChild(span1)
    h1.appendChild(span2)
    h1.appendChild(span3)
    h1.appendChild(span4)
    h1.appendChild(span5)
    h1.appendChild(span6)
    h1.appendChild(span7)
    h1.appendChild(span8)
    h1.appendChild(span9)
    h1.appendChild(span10)
    loader.appendChild(logo)
    loader.appendChild(loading)
    body.appendChild(loader)
}

window.addEventListener('DOMContentLoaded', () => {
    body.style.overflowY = 'hidden'
    _$('.loader').style.display = 'flex'
    console.log('Page is Loading...');
});

window.addEventListener('load', () => {
    body.style.overflowY = 'scroll'
    _$('.loader').style.display = 'none'
    console.log('Page is fully Loaded');
});


_$('.menu_navbar-item-parent').addEventListener('click', () => {
    _$('.menu_navbar-item-parent div').classList.toggle('active')
})

_$('.search-input .icon i').addEventListener('click', () => {
    _$('.search-input').classList.toggle('show')
    _$('.search-input .icon').classList.toggle('fixed')
})


//handle stars
function stars() {
    let i = 0;
    let count = 50;
    let scene = _$('#body')


    while (i < count) {
        let star = document.createElement('h5');
        star.setAttribute('class', `data-${i}`)
        let x = Math.floor(Math.random() * window.innerWidth)
        let duration = Math.random() * 1;
        let h = Math.random() * 50;

        star.style.left = x + 'px';
        star.style.width = 1 + 'px';
        star.style.height = h + 'px';
        star.style.animationDuration = duration + 's';
        scene.appendChild(star);
        i++;
    }
}
loadingFn();
handleScrollY();

//  Handle MOVIE - SUB