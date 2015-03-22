
var ParentWindowScope;

window.common = (function () {
    var common = {};

    common.getFragment = function getFragment() {
        if (window.location.hash.indexOf("#") === 0) {
            return parseQueryString(window.location.hash.substr(1));
        } else {
            return {};
        }
    };

    common.setCookie = function (cname, cvalue, exdays){
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    };

    function parseQueryString(queryString) {
        var data = {},
            pairs, pair, separatorIndex, escapedKey, escapedValue, key, value;

        if (queryString === null) {
            return data;
        }

        pairs = queryString.split("&");

        for (var i = 0; i < pairs.length; i++) {
            pair = pairs[i];
            separatorIndex = pair.indexOf("=");

            if (separatorIndex === -1) {
                escapedKey = pair;
                escapedValue = null;
            } else {
                escapedKey = pair.substr(0, separatorIndex);
                escapedValue = pair.substr(separatorIndex + 1);
            }

            key = decodeURIComponent(escapedKey);
            value = decodeURIComponent(escapedValue);

            data[key] = value;
        }

        return data;
    }

    return common;
})();

var fragment = common.getFragment();

window.location.hash = fragment.state || '';

if (!window.location.origin)
    window.location.origin = window.location.protocol + "//" + window.location.host;

var frag = fragment.external_access_token + "," + fragment.external_user_name + "," + fragment.haslocalaccount + "," + fragment.provider;

common.setCookie('TempoFrag', frag, 1);

var loginUrlWithFragment = window.location.origin + "/#/login";

window.location = loginUrlWithFragment;

//window.opener.$windowScope.authCompletedCB(fragment);

//window.close();

