export const API = {

    // serverUrl: 'http://stagingress.ap-south-1.elasticbeanstalk.com/ingress/checkout-bfe',
    // serverUrl: 'http://staging-checkout-bfe.ap-south-1.elasticbeanstalk.com/checkout-bfe',
    // serverUrl: 'http://localhost:5000/ingress/checkout-bfe',
    serverUrl: 'https://gw-ingress.nxt.pe/ingress/checkout-bfe',


    poll: async (url: string, merchantId, startAfter = 0, pollInterval = 2000) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const intervalId = setInterval(() => {
                    fetch(API.serverUrl + url, {
                        method: 'get',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'X-Partner-Code': 'checkout-fe',
                            'X-Merchant-Id':merchantId,
                        },
                    }).then((data) => data.json())
                    .then((response) => {
                        if (response.orderStatus === 'COMPLETED') {
                            resolve({
                                data: {
                                    status: 200,
                                    message: 'success'
                                }
                            });
                            clearInterval(intervalId);
                        } else if (response.orderStatus === 'FAILED') {
                            clearInterval(intervalId);
                            return resolve({
                                data: {
                                    status: 502,
                                    message: response.message,
                                    orderState: response.orderState,
                                    orderStatus: response.orderStatus
                                }
                            });
                        } else if (response.detail.toLocaleLowerCase() === 'Session Expired'.toLocaleLowerCase()) {
                            clearInterval(intervalId);
                            return resolve({
                                data: {
                                    status: 400,
                                    ...response,
                                }
                            });
                        }
                    })
                    .catch(() => {
                        clearInterval(intervalId);
                        return resolve({
                            data: {
                                status: 500,
                                message: 'Something went wrong.'
                            }
                        });
                    });
                }, pollInterval);
                setTimeout(() => {
                    clearInterval(intervalId);
                    return resolve({
                        data: {
                            status: 501,
                            message: 'Transaction timed out.'
                        }
                    });
                }, 39000);
            }, startAfter);
        })
    },

}
