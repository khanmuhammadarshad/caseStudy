class APIS {
    apis() {
        return {
            listing: {
                headers: {
                    // 'xt-user-token': null
                },
                method: 'get',
                path: '/user'
            },
           
        }
    }
}

export default new APIS;