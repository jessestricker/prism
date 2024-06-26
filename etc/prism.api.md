## API Report File for "@jessestricker/prism"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

// @public
export class CieLab {
    constructor(
    l: number,
    a: number,
    b: number);
    readonly a: number;
    readonly b: number;
    // (undocumented)
    static fromCieXyzD50(xyz: CieXyzD50): CieLab;
    readonly l: number;
    // (undocumented)
    toCieLabPolar(): CieLabPolar;
    // (undocumented)
    toCieXyzD50(): CieXyzD50;
}

// @public
export class CieLabPolar {
    constructor(
    l: number,
    c: number,
    h: number);
    readonly c: number;
    readonly h: number;
    readonly l: number;
    // (undocumented)
    toCieLab(): CieLab;
}

// @public
export class CieXyzD50 {
    constructor(
    x: number,
    y: number,
    z: number);
    // (undocumented)
    toCieLab(): CieLab;
    // (undocumented)
    toCieXyzD65(): CieXyzD65;
    // @internal (undocumented)
    toVector3(): _Vector3;
    readonly x: number;
    readonly y: number;
    readonly z: number;
}

// @public
export class CieXyzD65 {
    constructor(
    x: number,
    y: number,
    z: number);
    // (undocumented)
    toCieXyzD50(): CieXyzD50;
    // (undocumented)
    toOklab(): Oklab;
    // (undocumented)
    toSrgbLinear(): SrgbLinear;
    // @internal (undocumented)
    toVector3(): _Vector3;
    readonly x: number;
    readonly y: number;
    readonly z: number;
}

// @public
export class Oklab {
    constructor(
    l: number,
    a: number,
    b: number);
    readonly a: number;
    readonly b: number;
    // (undocumented)
    static fromCieXyzD65(xyz: CieXyzD65): Oklab;
    readonly l: number;
    // (undocumented)
    toCieXyzD65(): CieXyzD65;
    // (undocumented)
    toOklch(): Oklch;
    // @internal (undocumented)
    toVector3(): _Vector3;
}

// @public
export class Oklch {
    constructor(
    l: number,
    c: number,
    h: number);
    readonly c: number;
    readonly h: number;
    readonly l: number;
    // (undocumented)
    toOklab(): Oklab;
}

// @public
export class Srgb {
    constructor(
    r: number,
    g: number,
    b: number);
    readonly b: number;
    readonly g: number;
    readonly r: number;
    // (undocumented)
    toSrgbLinear(): SrgbLinear;
    // @internal (undocumented)
    toVector3(): _Vector3;
}

// @public
export class SrgbLinear {
    constructor(
    r: number,
    g: number,
    b: number);
    readonly b: number;
    // (undocumented)
    static fromCieXyzD65(xyz: CieXyzD65): SrgbLinear;
    readonly g: number;
    readonly r: number;
    // (undocumented)
    toCieXyzD65(): CieXyzD65;
    // (undocumented)
    toSrgb(): Srgb;
    // @internal (undocumented)
    toVector3(): _Vector3;
}

// @internal (undocumented)
export type _Vector3 = [number, number, number];

// @internal (undocumented)
export const _Vector3: {
    map(vector: _Vector3, map: (element: number) => number): _Vector3;
};

```
