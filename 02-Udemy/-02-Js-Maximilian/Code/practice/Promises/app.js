const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
    const promise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            success => {
                resolve(success);
            },
            error => {
                reject(error);
            }, opts);
    });

    return promise;
}

const setTimer = (duration) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, duration);
    });
    return promise;
};

async function trackUserHandler() {

    let posData;
    let timerData;
    try {
        posData = await getPosition();
        timerData = await setTimer(2000);
    } catch (e) {
        console.log(e);
    }
    console.log(timerData, posData);

    // getPosition()
    //     .then(posData => {
    //         console.log(posData);
    //         return setTimer(2000)
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         return 'on we go...';
    //     })
    //     .then(data => {
    //         console.log(data);
    //     });
    setTimer(1000).then(() => {
        console.log('Timer is finished.');
    });
    console.log('Getting Position.....');
}


/* -- From the second version

function trackUserHandler() {
    getPosition()
        .then(posData => {
            console.log(posData);
            return setTimer(2000)
        })
        .catch(err => {
            console.log(err);
            return 'on we go...';
        })
        .then(data => {
            console.log(data);
        });
    // setTimer(1000).then(() => {
    //     console.log('Timer is finished.');
    // });
    // console.log('Getting Position.....');
}
 */


/* -- From the first version
function trackUserHandler() {
    navigator.geolocation.getCurrentPosition(
        posData => {
            // console.log(posData)
            setTimer(2000).then(r => {
                console.log(r, posData);
            });
        },
        error => {
            console.log(error);
        }
    );
    setTimer(1000).then(() => {
        console.log('Timer is finished.');
    });
    console.log('Getting Position.....');
}
 */

button.addEventListener('click', trackUserHandler);

// Promise.race([getPosition(), setTimer(1000)]).then(data => {
//     console.log(data);
// });
//
// Promise.all([getPosition(), setTimer(1000)]).then(promiseData => {
//     console.log(promiseData);
// });

Promise.allSettled([getPosition(), setTimer(1000)]).then(promiseData => {
    console.log(promiseData);
});
// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);














