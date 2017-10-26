interface ProtocolMap {
    [protocol: string]: number
};

declare module 'ethertypes' {
    exports = {} as ProtocolMap;
}