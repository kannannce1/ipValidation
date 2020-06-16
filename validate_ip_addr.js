/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
    
    let IPV4_Format = /^(25[0-5]|2[0-4][0-9]|[1]?[1-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[1]?[1-9][0-9]?|[0])\.(25[0-5]|2[0-4][0-9]|[1]?[1-9][0-9]?|[0])\.(25[0-5]|2[0-4][0-9]|[1]?[1-9][0-9]?)$/
    let IPV6_Format =  /^([0-9a-fA-F]{1,4})(\:[0-9a-fA-F]{1,4}){7}$/;
    
    if(IP.includes(".")){
       
        if(IP.match(IPV4_Format)){
            return "IPv4"
        } else {
            return "Neither"
        }
        
    } else {
        if(IP.match(IPV6_Format)){
            return "IPv6"
        } else {
            return "Neither"
        }
    }
};
