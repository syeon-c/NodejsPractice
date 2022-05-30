const condition = true;
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('Success');
    } else {
        reject('Fail');
    }
});

// 다른 코드 실행 가능...

promise
    .then((message) => {
        console.log(message);                        // 성공(resolve)한 경우 실행
    })
    .catch((error) => {                              // 실패(reject)한 경우 실행
        console.log(error);
    })
    .finally(() => {                                 // 끝나고 무조건 실행
        console.log('성공/실패 상관 없이 무조건 실행');     
    });

