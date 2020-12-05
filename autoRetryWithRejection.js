
/**
 * @param {() => Promise<any>} fetcher
 * @param {number} maximumRetryCount
 * @return {Promise<any>}
 */
function fetchWithAutoRetry(fetcher, maximumRetryCount) {
    let count=0
    return new Promise((resolve, reject) => {
        const helper = () => {
            count++
            fetcher()
                .then((v) => {
                    resolve(v)
                })
                .catch((e) => {
                    if (maximumRetryCount >= count) {
                        helper()
                    } else reject(e)
                })
        }
        helper()

    })
}