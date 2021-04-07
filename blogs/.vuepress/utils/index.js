
export const uniappBack = (router)=>{
    try{
        document.addEventListener('UniAppJSBridgeReady',  ()=> {
            window.$getBack = ()=> {
                if (window.plus) {
                    router.go(-1);
                }
            };
        });
    }catch(e){
        console.log(e)
    }
} 