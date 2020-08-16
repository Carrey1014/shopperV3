import {request} from '@/network/request.js';
import Mock from './mock.js';

export function HomeData(){
    return request({
        url: '/home/multidata',
    })
}


// 2. 导出：流行，新款，推荐三种类型的衣服
export function GoodsData(){
    var data = Mock.mock({
        'pop|3-5': [{
            'page|+1': 1, 
            'goods|20': [{
                'name|15': '@cfirst', 
                'img|1': () => Mock.Random.image('150x220', Mock.Random.color(), Mock.Random.cparagraph(3))
            }]
        }],
        'new|3-5': [{
            'page|+1': 1, 
            'goods|20': [{
                'name|15': '@cfirst', 
                'img|1': () => Mock.Random.image('150x220', Mock.Random.color(), Mock.Random.cparagraph(3))
            }]
        }],
        'sell|3-5': [{
            'page|+1': 1, 
            'goods|20': [{
                'name|15': '@cfirst', 
                'img|1': () => Mock.Random.image('150x220', Mock.Random.color(), Mock.Random.cparagraph(3))
            }]
        }],
    })

    // var outdata = JSON.stringify(data);

    return new Promise((resolve, reject) => {
        resolve(data);
    }, err => {
        reject('数据请求错误了，老哥')
    });
}



