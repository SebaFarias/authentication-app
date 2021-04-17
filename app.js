const mql = window.matchMedia('prefers-color-scheme: dark')

const handler = (mediaQueryList) => {
    console.log('cambió');
}

handler(mql)

mql.addListener(handler)