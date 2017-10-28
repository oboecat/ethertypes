interface ProtocolMap {
    [protocol: string]: number;
    define: (protocolName: string, octetValue: number) => void;
    alias: (originalName: string, alias: string) => void;
    getProtocolNameFromOctet: (octetValue: number) => string;
    getOctetFromProtocolName: (protocolName: string) => number;
}

declare module 'ethertypes' {
    export = {} as ProtocolMap;
}