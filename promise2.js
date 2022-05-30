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
        return new Promise((resolve, reject) => {
            resolve(message);
        });
    })
    .then((message2) => {
        console.log(message2);
        return new Promise((resolve, reject) => {
            resolve(message2);
        });
    })
    .then((message3) => {
        console.log(message3);
    })
    .catch((error) => {                            // 실패(reject)한 경우 실행
        console.log(error);
    });