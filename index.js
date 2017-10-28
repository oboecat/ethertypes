var protocolToOctet = {};
var octetToProtocol = {};

function define(name, octet) {
    protocolToOctet[name] = octet;
    octetToProtocol[octet] = name;
}

function alias(originalName, newName) {
    protocolToOctet[newName] = protocolToOctet[originalName];
}

function getProtocolNameFromOctet(octet) {
    return octetToProtocol[octet];
}

function getOctetFromProtocolName(pName) {
    return protocolToOctet[pName];
}

module.exports = protocolToOctet;
module.exports.define = define;
module.exports.alias = alias;
module.exports.getProtocolNameFromOctet = getProtocolNameFromOctet;
module.exports.getOctetFromProtocolName = getOctetFromProtocolName;


require('./definitions');
require('./alias');