(function () {
    const nxtPe = {};
    const getTemplate = (orderId) => {
        return `
        <style>.modal-container{display: flex;margin:0 auto;height:100%;text-align:center;-webkit-transition:.3s ease-out opacity;-o-transition:.3s ease-out opacity;transition:.3s ease-out opacity;opacity:0}.modal-container .nxtpe-modal{border-radius:3px;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;-webkit-transition:.3s ease-in;-o-transition:.3s ease-in;transition:.3s ease-in;z-index:1;-webkit-perspective:300;perspective:300;position:relative;opacity:0;-webkit-transform:scale(.9);-ms-transform:scale(.9);transform:scale(.9);color:#333;font-size:14px;width:100%;height:100%}@media (min-width:420px){.modal-container .nxtpe-modal{width:420px;height:680px;margin:auto}}.modal-container.visible{opacity:1}.modal-container.visible .nxtpe-modal{opacity:1;-webkit-transform:none;-ms-transform:none;transform:none;-webkit-transition:.2s,.3s cubic-bezier(.3,1.5,.7,1) transform;-o-transition:.2s,.3s cubic-bezier(.3,1.5,.7,1) transform;transition:.2s,.3s cubic-bezier(.3,1.5,.7,1) transform}</style>
        <div class="nxtpe-container" style="z-index: 1000;position: fixed;top: 0px;left: 0px;height: 100%;width: 100%;backface-visibility: hidden;overflow-y: visible;">
            <div class="nxtpe-backdrop" style="min-height: 100%; transition: all 0.3s ease-out 0s; position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.6);"></div>
            <div class="modal-container" id="nxtpe-modal">
                <div class="nxtpe-modal">
                    <iframe style="opacity: 1;height: 100%;position: relative;background: none;display: block;border: 0px none transparent;margin: 0px;padding: 0px;overflow: hidden;z-index: 2;width: 100%;border-radius: 8px;" allowpaymentrequest="true" src="http://localhost:8080/checkout/${orderId}" class="nxtpe-frame"></iframe>
                </div>
            </div>
        </div>`;
    }
    nxtPe.checkout = (orderId) => {
        const wrapper = window.document.createElement('div');
        wrapper.innerHTML = getTemplate(orderId);
        window.document.body.append(wrapper);
        const modalElem = document.getElementById('nxtpe-modal');
        if(modalElem){
            setTimeout(()=>{
                modalElem.classList.add('visible');
            },0);
        }
    }
    window.nxtPe = nxtPe;
})()
