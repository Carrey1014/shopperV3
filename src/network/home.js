import {request} from '@/network/request.js';

export function HomeData(){
    return request({
        url: '/home/multidata',
    })
}

