"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
async function signup(username, password) {
    const response = await fetch("https://ipn.proxysocks5.com/common/signup/", {
        headers: {
            accept: "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "text/plain;charset=UTF-8",
            rpa: "1",
            "sec-ch-ua": '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"Linux"',
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            Referer: "https://myaccount.proxysocks5.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
        },
        body: JSON.stringify({
            username,
            email: username + "@sharklasers.com",
            password,
            password_re: password,
        }),
        method: "POST",
    });
    return await response.text();
}
exports.signup = signup;
//# sourceMappingURL=proxysocks.js.map