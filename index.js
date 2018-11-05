const platformModule = require("tns-core-modules/platform");
 
module.exports = {
    enableSecuredTls: function() {
        //we will require this only for android < 4.4
        if (platformModule.isAndroid && +platformModule.device.sdkVersion <= 19) {
            var provider = new ai.smarti.mobile.securedtls.SecuredTlsProvider();
            provider.EnableSecuredTls();
        }
    }
};