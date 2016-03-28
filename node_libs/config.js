/**
 * Created by lkj on 2015/11/23.
 */

module.exports = {
    //node_env:'development',
    node_env:'production',
    //OpenApi地址，测试环境设置成本机IP
    url:{
        admin:'http://120.25.232.116',//120.25.232.116',
        shop:'http://120.25.232.116',//192.168.1.173:88',
        product:'http://120.25.232.116',//192.168.1.199:8001',
        order:'http://120.25.232.116',
        crm:'http://120.25.232.116',//127.0.0.1:88',
        weixin:'http://120.25.232.116',
        marketing:'http://120.25.232.116'
    },

    ImageServiceUrl:'http://192.168.1.173:88',

    //node发布端口
    port:8000,

    //mongodb连接字符串
    mongodb: 'mongodb://127.0.0.1:27017/crab',


    //redis配置
    dbconfig:{
        'host':'127.0.0.1',
        'user':'root',
        'password':'w3c',
        'database':'bandex',
        'charset':'utf8'
    },


    //http post的格式
    options:{
        url:"",
        json:true,
        body:"",
        headers:{
            'content-type':'application/json',
            'cookie':''
        }
    }
};