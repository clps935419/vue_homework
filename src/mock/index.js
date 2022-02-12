// 导入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random

function mockFeedData() {
  return {
    allUser: [{
        name: 'tom',
        infor: 'IOS developer',
        post: 'aaaaaaaaaa',
        like: '42',
        comment: [{
          name: 'jack',
          content: 'hi',
          img: 'https://source.unsplash.com/user/alex',
        }, ],
        img: 'https://source.unsplash.com/user/tom',
        date: 'Mar 13 2021 10:00:00 AM',
        active: false,
        isShowComment: false,
      },
      {
        name: 'jack',
        infor: 'UI designer',
        post: 'aaaaaaaaaa',
        like: '32',
        img: 'https://source.unsplash.com/user/jack',
        comment: [{
          name: 'alex',
          content: 'hi',
          img: 'https://source.unsplash.com/user/alex',
        }, ],
        date: 'Mar 12 2021 10:00:00 AM',
        active: false,
        isShowComment: false,
      },
      {
        name: 'tommy',
        infor: 'UI designer',
        post: 'aaaaaaaaaa',
        like: '42',
        img: 'https://source.unsplash.com/user/tommy',
        comment: [{
          name: 'ann',
          content: 'hi',
          img: 'https://source.unsplash.com/user/alex',
        }, ],
        date: 'Mar 14 2021 10:00:00 AM',
        active: false,
        isShowComment: false,
      },
      {
        name: 'alex',
        infor: 'UI designer',
        post: 'aaaaaaaaaa',
        like: '42',
        img: 'https://source.unsplash.com/user/alex',
        comment: [{
          name: 'john',
          content: 'hi',
          img: 'https://source.unsplash.com/user/alex',
        }, ],
        date: 'Mar 15 2021 10:00:00 AM',
        active: false,
        isShowComment: false,
      },
    ],
  };

}

function mockMyData() {
  return {
    user: {
      name: 'Leonard',
      intro: 'hi',
      img: 'https://source.unsplash.com/user/leonard',
      backgroundImg: 'https://source.unsplash.com/random',
      group: [{
          img: 'https://source.unsplash.com/random',
          name: 'Moscow StateLinguisticalUniversity',
        },
        {
          img: 'https://source.unsplash.com/random',
          name: 'Digital freelancersgroup',
        },
        {
          img: 'https://source.unsplash.com/random',
          name: 'Interactiondesignassociation',
        },
        {
          img: 'https://source.unsplash.com/random',
          name: 'aaaaaaaaaaaa',
        },
        {
          img: 'https://source.unsplash.com/random',
          name: 'bbbbbbbbb',
        },
        {
          img: 'https://source.unsplash.com/random',
          name: 'ccccccccccc',
        },
      ],
      hashtag: [
        '#work',
        '#business',
        '#hr',
        '#userinterface',
        '#userinterfacesadasdsad',
        '#usdddddd',
        '#ussasasasasasasasasasasa',
      ],
      trending: [{
          img: 'https://source.unsplash.com/random',
          name: 'How I make cool designs?',
          view: 3231,
        },
        {
          img: 'https://source.unsplash.com/random',
          name: 'Advices for young HR-manage',
          view: 3255,
        },
        {
          img: 'https://source.unsplash.com/random',
          name: 'A little about usability testing',
          view: 385,
        },
      ],
      dashboard: {
        view: 367,
        post: 37,
        search: 9,
      },
      visitors: [{
          name: 'Darlene Black',
          infor: 'HR-manager, 10 000 connec...',
          img: 'https://source.unsplash.com/random',
        },
        {
          name: 'Theresa Steward',
          infor: 'iOS developer',
          img: 'https://source.unsplash.com/random',
        },
        {
          name: 'Brandon Wilson',
          infor: 'iOS developer',
          img: 'https://source.unsplash.com/random',
        },
        {
          name: 'Kyle Fisher',
          infor: 'iOS developer',
          img: 'https://source.unsplash.com/random',
        },
        {
          name: 'XXXX',
          infor: 'iOS developer',
          img: 'https://source.unsplash.com/random',
        },
        {
          name: 'ads',
          infor: 'iOS developer',
          img: 'https://source.unsplash.com/random',
        },
      ],
      course: [{
          name: 'UX Foundations:Prototyping',
          view: '27,959 viewers',
          img: 'https://source.unsplash.com/random',
        },
        {
          name: 'Designing withAdobe XD and pro',
          view: '9,122 viewers',
          img: 'https://source.unsplash.com/random',
        },
        {
          name: 'UX Foundations:Styles and GUIs',
          view: '13,858 viewers',
          img: 'https://source.unsplash.com/random',
        },
        {
          name: 'xxxxx',
          view: '13,858 viewers',
          img: 'https://source.unsplash.com/random',
        },
        {
          name: 'aaaaaaa',
          view: '13,858 viewers',
          img: 'https://source.unsplash.com/random',
        },
      ],
    }
  }
}
function login(data) {
  console.log('mock',JSON.parse(data.body));
  let { account, password } = JSON.parse(data.body);
  if(account==="leonard" && password ==="abc123"){
    return {
      name:'leonard',
      type:'suss',
      token:'aaaaaaaaasssssaaaa'
    }
  }
}
//攔截器
Mock.mock('/mock/feed', mockFeedData);
Mock.mock('/mock/myData', mockMyData);
Mock.mock('/mock/login','post', login);
